import test from 'node:test';
import assert from 'node:assert/strict';
import { clinic, locations } from './clinicData.js';

test('Pune contact uses +91 98341 72124', () => {
  const pune = locations.find((location) => location.id === 'pune');
  assert.equal(pune?.phone, '+91 98341 72124');
  assert.equal(pune?.phoneHref, 'tel:+919834172124');
  assert.match(pune?.whatsapp ?? '', /^https:\/\/wa\.me\/919834172124/);
});

test('Jalgaon contact uses +91 92702 78668', () => {
  const jalgaon = locations.find((location) => location.id === 'jalgaon');
  assert.equal(jalgaon?.phone, '+91 92702 78668');
  assert.equal(jalgaon?.phoneHref, 'tel:+919270278668');
  assert.match(jalgaon?.whatsapp ?? '', /^https:\/\/wa\.me\/919270278668/);
});

test('Instagram links use @drsomanihomoeopathy', () => {
  assert.equal(clinic.instagram, 'https://www.instagram.com/drsomanihomoeopathy/');
});