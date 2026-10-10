import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { localizationExtras } from '../data/localizationExtras';

const LanguageContext = createContext();

// Recursive deep merge: base is augmented/overridden by override
function deepMerge(base, override) {
  if (!base && !override) return {};
  if (!override) return base ? { ...base } : {};
  if (!base) return override ? { ...override } : {};

  const result = { ...base };
  for (const key of Object.keys(override)) {
    const oVal = override[key];
    const bVal = base[key];

    if (
      oVal &&
      typeof oVal === 'object' &&
      !Array.isArray(oVal) &&
      bVal &&
      typeof bVal === 'object' &&
      !Array.isArray(bVal)
    ) {
      result[key] = deepMerge(bVal, oVal);
    } else if (oVal !== undefined && oVal !== null) {
      result[key] = oVal;
    }
  }
  return result;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('preferred_lang') || 'en';
  });

  const setLang = (newLang) => {
    if (translations[newLang]) {
      setLangState(newLang);
      localStorage.setItem('preferred_lang', newLang);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dataset.language = lang;
    }
  }, [lang]);

  // Deep merged dictionaries: translations[lang] takes precedence, supplemented by localizationExtras
  const activeDict = React.useMemo(() => {
    const extras = localizationExtras[lang] || localizationExtras.en || {};
    const primary = translations[lang] || translations.en || {};
    return deepMerge(extras, primary);
  }, [lang]);

  const fallbackDict = React.useMemo(() => {
    const extras = localizationExtras.en || {};
    const primary = translations.en || {};
    return deepMerge(extras, primary);
  }, []);

  // Helper function to safely get nested translation strings
  const t = (path, defaultValue) => {
    if (!path || typeof path !== 'string') return defaultValue !== undefined ? defaultValue : '';
    const keys = path.split('.');

    // 1. Try current language
    let current = activeDict;
    let found = true;
    for (const k of keys) {
      if (current && typeof current === 'object' && current[k] !== undefined && current[k] !== null) {
        current = current[k];
      } else {
        found = false;
        break;
      }
    }
    if (found && current !== undefined && current !== null) {
      return current;
    }

    // 2. Fallback to English dictionary
    if (lang !== 'en') {
      let fallback = fallbackDict;
      let fallbackFound = true;
      for (const fk of keys) {
        if (fallback && typeof fallback === 'object' && fallback[fk] !== undefined && fallback[fk] !== null) {
          fallback = fallback[fk];
        } else {
          fallbackFound = false;
          break;
        }
      }
      if (fallbackFound && fallback !== undefined && fallback !== null) {
        return fallback;
      }
    }

    // 3. Return defaultValue or undefined (NEVER return raw path string!)
    return defaultValue !== undefined ? defaultValue : undefined;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict: activeDict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
