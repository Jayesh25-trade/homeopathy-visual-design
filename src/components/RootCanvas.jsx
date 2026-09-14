import { useEffect, useRef, useCallback } from 'react';

const CONDITION_LABELS = [
  "Skin & Vitiligo", "Allergies", "Migraine", "PCOD",
  "Kidney Stones", "Acidity", "Paediatric", "Mental Health"
];

const EASE_OUT = t => 1 - Math.pow(1 - t, 3);
const LERP = (a, b, t) => a + (b - a) * t;

export default function RootCanvas({ onConditionHover, onConditionClick, prefersReducedMotion, isMobile }) {
  const canvasRef = useRef(null);
  const s = useRef({
    roots: [], ripples: [], globule: null,
    time: 0, mouse: { x: -9999, y: -9999 },
    w: 0, h: 0,
    phase: 'globule', phaseT: 0,
    hovered: null, animId: null,
    breathTargets: [], // spring targets per root tip
  });

  const buildRoot = useCallback((cx, cy, angle, idx, w, h) => {
    const len = Math.min(w, h) * (isMobile ? 0.28 : 0.30) + Math.sin(idx * 1.7) * Math.min(w, h) * 0.05;
    const segs = [];
    let x = cx, y = cy, a = angle;
    const n = 14;
    for (let i = 0; i < n; i++) {
      const wobble = Math.sin(idx * 7.3 + i * 2.9) * 0.18 + Math.cos(idx * 3.1 + i * 4.7) * 0.08;
      a += wobble;
      const segLen = (len / n) * (1 - i * 0.02);
      const nx = x + Math.cos(a) * segLen;
      const ny = y + Math.sin(a) * segLen;
      segs.push({ x1: x, y1: y, x2: nx, y2: ny });
      x = nx; y = ny;
    }
    segs._end = { x, y, bx: x, by: y }; // bx,by = breathing offset
    return { id: idx, angle, label: CONDITION_LABELS[idx], cx, cy, progress: 0, segs, alpha: 0.72 };
  }, [isMobile]);

  const buildRoots = useCallback((cx, cy, w, h) => {
    if (isMobile) {
      // Vertical mobile layout: alternating left/right
      return CONDITION_LABELS.map((_, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        const angle = side > 0 ? -Math.PI * 0.25 : -Math.PI * 0.75;
        const mCy = cy - h * 0.32 + i * (h * 0.1);
        return buildRoot(cx, mCy, angle, i, w, h);
      });
    }
    // Desktop radial
    const angles = [
      -Math.PI * 0.85, -Math.PI * 0.62, -Math.PI * 0.38, -Math.PI * 0.14,
       Math.PI * 0.14,  Math.PI * 0.38,  Math.PI * 0.62,  Math.PI * 0.85,
    ];
    return angles.map((angle, i) => buildRoot(cx, cy, angle, i, w, h));
  }, [isMobile, buildRoot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const st = s.current;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(devicePixelRatio, devicePixelRatio);
      st.w = rect.width;
      st.h = rect.height;
      const cx = isMobile ? rect.width * 0.5 : rect.width * 0.62;
      const cy = isMobile ? rect.height * 0.5 : rect.height * 0.48;
      st.globule = { x: cx, y: cy - (isMobile ? 80 : 120), targetY: cy, currentY: cy - (isMobile ? 80 : 120) };
      st.roots = buildRoots(cx, cy, rect.width, rect.height);
      st.phase = prefersReducedMotion ? 'alive' : 'globule';
      st.phaseT = 0;
      if (prefersReducedMotion) st.roots.forEach(r => { r.progress = 1; r.alpha = 0.72; });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    // Mouse / touch tracking
    const onMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      st.mouse.x = e.clientX - rect.left;
      st.mouse.y = e.clientY - rect.top;
    };
    const onTouchMove = e => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      st.mouse.x = e.touches[0].clientX - rect.left;
      st.mouse.y = e.touches[0].clientY - rect.top;
    };
    const onTouchEnd = () => { st.mouse.x = -9999; st.mouse.y = -9999; };

    const onPointerClick = e => {
      if (st.phase !== 'alive') return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let hit = null;
      st.roots.forEach(r => {
        const end = r.segs._end;
        if (!end) return;
        const dist = Math.hypot(mx - (end.bx || end.x), my - (end.by || end.y));
        if (dist < 52) hit = r.id;
      });
      if (hit !== null) onConditionClick?.(hit);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    canvas.addEventListener('click', onPointerClick);

    let lastT = 0;
    const tick = ts => {
      st.animId = requestAnimationFrame(tick);
      const dt = Math.min((ts - lastT) / 1000, 0.05);
      lastT = ts;
      st.time = ts / 1000;
      st.phaseT += dt;

      const { w, h } = st;
      ctx.clearRect(0, 0, w, h);

      if (prefersReducedMotion) {
        drawRoots(ctx, st, true);
        return;
      }

      switch (st.phase) {
        case 'globule': {
          drawGlobule(ctx, st, Math.min(st.phaseT, 1));
          if (st.phaseT > 0.8) { st.phase = 'dropping'; st.phaseT = 0; }
          break;
        }
        case 'dropping': {
          const t = Math.min(st.phaseT / 1.0, 1);
          st.globule.currentY = LERP(st.globule.y, st.globule.targetY, EASE_OUT(t));
          drawGlobule(ctx, st, 1);
          if (t >= 1) {
            st.globule.currentY = st.globule.targetY;
            st.phase = 'ripple';
            st.phaseT = 0;
            st.ripples = [{ r: 0, op: 0.9 }];
          }
          break;
        }
        case 'ripple': {
          updateRipples(st, dt);
          if (st.phaseT > 0.4 && st.ripples.length < 4) st.ripples.push({ r: 0, op: 0.75 });
          drawRipples(ctx, st);
          drawGlobule(ctx, st, 1);
          if (st.phaseT > 1.6) { st.phase = 'growing'; st.phaseT = 0; }
          break;
        }
        case 'growing': {
          const grow = Math.min(st.phaseT / 2.0, 1);
          st.roots.forEach((r, i) => {
            r.progress = Math.max(0, Math.min(1, (grow - i * 0.06) / 0.55));
          });
          updateRipples(st, dt);
          drawRipples(ctx, st);
          drawGlobule(ctx, st, 1);
          drawRootsGrowing(ctx, st);
          if (grow >= 1) { st.phase = 'alive'; }
          break;
        }
        case 'alive': {
          // Ambient ripple
          updateRipples(st, dt);
          if (Math.random() < 0.003) st.ripples.push({ r: 0, op: 0.3 });

          // Root breathing — spring toward mouse
          let hovered = null;
          st.roots.forEach(r => {
            const end = r.segs._end;
            if (!end) return;
            const dx = st.mouse.x - end.x;
            const dy = st.mouse.y - end.y;
            const dist = Math.hypot(dx, dy);
            // Spring breathing: all tips breathe gently toward cursor
            const pullFactor = dist < 200 ? Math.min((200 - dist) / 200, 1) * 5 : 0;
            end.bx = LERP(end.bx ?? end.x, end.x + (dx / Math.max(dist, 1)) * pullFactor, 0.06);
            end.by = LERP(end.by ?? end.y, end.y + (dy / Math.max(dist, 1)) * pullFactor, 0.06);

            if (dist < 58) { hovered = r.id; r.alpha = LERP(r.alpha, 1, 0.12); }
            else { r.alpha = LERP(r.alpha, hovered !== null && r.id !== hovered ? 0.22 : 0.72, 0.08); }
          });

          if (hovered !== st.hovered) {
            st.hovered = hovered;
            onConditionHover?.(hovered);
          }

          drawRipples(ctx, st);
          drawGlobule(ctx, st, 1);
          drawRoots(ctx, st, false);
          break;
        }
      }
    };

    st.animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(st.animId);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('click', onPointerClick);
    };
  }, [buildRoots, onConditionHover, onConditionClick, prefersReducedMotion, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}

// ── Helpers ──────────────────────────────────────────────────

function updateRipples(st, dt) {
  st.ripples = st.ripples.filter(r => r.op > 0.01);
  st.ripples.forEach(r => { r.r += 2.2; r.op -= 0.008; });
}

function drawGlobule(ctx, st, opacity) {
  const g = st.globule;
  if (!g) return;
  const y = g.currentY ?? g.targetY;
  ctx.save();
  ctx.globalAlpha = Math.min(opacity, 1);
  const r = 9;
  const grad = ctx.createRadialGradient(g.x - r * 0.35, y - r * 0.35, 1, g.x, y, r);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.55, '#ede6d8');
  grad.addColorStop(1, '#c4a880');
  ctx.beginPath(); ctx.arc(g.x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = grad; ctx.fill();
  // Outer glow
  const glow = ctx.createRadialGradient(g.x, y, r, g.x, y, r + 18);
  glow.addColorStop(0, 'rgba(245,240,232,0.2)');
  glow.addColorStop(1, 'rgba(245,240,232,0)');
  ctx.beginPath(); ctx.arc(g.x, y, r + 18, 0, Math.PI * 2);
  ctx.fillStyle = glow; ctx.fill();
  ctx.restore();
}

function drawRipples(ctx, st) {
  const g = st.globule;
  if (!g) return;
  const y = g.currentY ?? g.targetY;
  ctx.save();
  st.ripples.forEach(rp => {
    ctx.beginPath(); ctx.arc(g.x, y, rp.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(139,160,122,${rp.op * 0.55})`;
    ctx.lineWidth = 0.8; ctx.stroke();
  });
  ctx.restore();
}

function drawRootsGrowing(ctx, st) {
  st.roots.forEach(r => {
    if (r.progress <= 0) return;
    const count = Math.floor(r.segs.length * r.progress);
    ctx.save();
    ctx.strokeStyle = `rgba(139,160,122,0.65)`;
    ctx.lineWidth = 1.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath();
    r.segs.slice(0, count).forEach((seg, i) => {
      if (i === 0) ctx.moveTo(seg.x1, seg.y1);
      ctx.lineTo(seg.x2, seg.y2);
    });
    ctx.stroke(); ctx.restore();
  });
}

function drawRoots(ctx, st, isStatic) {
  st.roots.forEach(r => {
    const end = r.segs._end;
    const alpha = isStatic ? 0.62 : (r.alpha ?? 0.72);
    const isHov = r.id === st.hovered;
    const lw = isHov ? 2.2 : 1.3;
    const color = isHov
      ? `rgba(196,60,42,${alpha})`
      : `rgba(139,160,122,${alpha})`;

    ctx.save();
    ctx.strokeStyle = color; ctx.lineWidth = lw;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath();
    r.segs.forEach((seg, i) => {
      if (i === 0) ctx.moveTo(seg.x1, seg.y1);
      // Slight breathing on last few segments
      if (i >= r.segs.length - 3 && end && !isStatic) {
        const t = (i - (r.segs.length - 3)) / 3;
        const bx = LERP(seg.x2, end.bx ?? end.x, t);
        const by = LERP(seg.y2, end.by ?? end.y, t);
        ctx.lineTo(bx, by);
      } else {
        ctx.lineTo(seg.x2, seg.y2);
      }
    });
    ctx.stroke();

    // End node
    if (end) {
      const ex = isStatic ? end.x : (end.bx ?? end.x);
      const ey = isStatic ? end.y : (end.by ?? end.y);
      ctx.beginPath();
      ctx.arc(ex, ey, isHov ? 6 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = isHov ? 'rgba(196,60,42,0.85)' : `rgba(139,160,122,${alpha})`;
      ctx.fill();

      // Label on hover
      if (isHov && !isStatic) {
        ctx.font = '500 11px Manrope, sans-serif';
        ctx.fillStyle = 'rgba(245,240,232,0.92)';
        const rightSide = ex > (st.w / 2);
        ctx.textAlign = rightSide ? 'left' : 'right';
        ctx.fillText(r.label, ex + (rightSide ? 12 : -12), ey + 4);
      }
    }
    ctx.restore();
  });
}
