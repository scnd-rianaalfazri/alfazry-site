// physics/electricField.js
// Pure physics utilities for the Test Charge Probe simulation.
// No React / DOM code lives here — only Coulomb's law + vector superposition.

// Coulomb's constant (N·m²/C²)
export const K_COULOMB = 8.99e9;

// Minimum allowed distance (meters) between the test charge and a source
// charge, used to prevent division by zero / Infinity / NaN.
export const R_MIN = 0.3;

const toCoulomb = (microCoulomb) => microCoulomb * 1e-6;

const safeNumber = (n) => (isFinite(n) && !isNaN(n) ? n : 0);

/**
 * Electric field contributed by a single source charge at point (px, py).
 * source: { x, y, q } — position in meters, q in microCoulombs.
 * Returns { Ex, Ey, magnitude } in N/C.
 */
export function fieldFromSource(source, px, py) {
  const dx = px - source.x;
  const dy = py - source.y;
  const rActual = Math.sqrt(dx * dx + dy * dy);
  const r = Math.max(rActual, R_MIN);

  // Unit vector pointing FROM the source TO the point.
  let ux = 1;
  let uy = 0;
  if (rActual > 1e-9) {
    ux = dx / rActual;
    uy = dy / rActual;
  }

  const Qc = toCoulomb(source.q);
  const magnitude = (K_COULOMB * Math.abs(Qc)) / (r * r);
  // Positive charge: field points away from source (along +unit vector).
  // Negative charge: field points toward source (along -unit vector).
  const sign = Qc >= 0 ? 1 : -1;

  return {
    Ex: sign * magnitude * ux,
    Ey: sign * magnitude * uy,
    magnitude,
  };
}

/**
 * Superposition: sum the field vectors (NOT magnitudes) from every source
 * charge at point (px, py). Returns resultant components plus each
 * individual contribution (handy for the analysis panel).
 */
export function calculateResultantField(sourceCharges, px, py) {
  let Ex = 0;
  let Ey = 0;

  const contributions = sourceCharges.map((s) => {
    const f = fieldFromSource(s, px, py);
    Ex += f.Ex;
    Ey += f.Ey;
    return { id: s.id, q: s.q, Ex: f.Ex, Ey: f.Ey, magnitude: f.magnitude };
  });

  const magnitude = Math.sqrt(Ex * Ex + Ey * Ey);
  const angle = magnitude > 1e-9 ? (Math.atan2(Ey, Ex) * 180) / Math.PI : 0;

  return {
    Ex: safeNumber(Ex),
    Ey: safeNumber(Ey),
    magnitude: safeNumber(magnitude),
    angle: safeNumber(angle),
    contributions,
  };
}

/**
 * Electric force on the test charge: F = qE.
 * testChargeMicroC is the SIGNED test charge in microCoulombs.
 * Direction flips automatically when the sign of q flips, because the
 * multiplication below carries the sign — no special-casing needed.
 */
export function calculateElectricForce(testChargeMicroC, Ex, Ey) {
  const q = toCoulomb(testChargeMicroC);
  const Fx = q * Ex;
  const Fy = q * Ey;
  const magnitude = Math.sqrt(Fx * Fx + Fy * Fy);
  const angle = magnitude > 1e-12 ? (Math.atan2(Fy, Fx) * 180) / Math.PI : 0;

  return {
    Fx: safeNumber(Fx),
    Fy: safeNumber(Fy),
    magnitude: safeNumber(magnitude),
    angle: safeNumber(angle),
  };
}

/**
 * Map a physics-convention angle (0° = +x/right, 90° = +y/up) and a
 * magnitude to an 8-direction compass label with an arrow glyph.
 * Below `threshold` the force is treated as "practically zero".
 */
export function getDirectionLabel(angleDeg, magnitude, threshold = 1e-4) {
  if (magnitude < threshold) {
    return { arrow: '⚖️', label: 'HAMPIR TIDAK ADA GAYA', isZero: true };
  }
  const a = ((angleDeg % 360) + 360) % 360;
  const sectors = [
    { min: 337.5, max: 360, arrow: '→', label: 'KANAN' },
    { min: 0, max: 22.5, arrow: '→', label: 'KANAN' },
    { min: 22.5, max: 67.5, arrow: '↗', label: 'KANAN ATAS' },
    { min: 67.5, max: 112.5, arrow: '↑', label: 'ATAS' },
    { min: 112.5, max: 157.5, arrow: '↖', label: 'KIRI ATAS' },
    { min: 157.5, max: 202.5, arrow: '←', label: 'KIRI' },
    { min: 202.5, max: 247.5, arrow: '↙', label: 'KIRI BAWAH' },
    { min: 247.5, max: 292.5, arrow: '↓', label: 'BAWAH' },
    { min: 292.5, max: 337.5, arrow: '↘', label: 'KANAN BAWAH' },
  ];
  const found = sectors.find((s) => a >= s.min && a < s.max);
  return { ...(found || sectors[0]), isZero: false };
}

/**
 * Readable number formatting: switches to exponential notation for very
 * large or very small magnitudes so labels never show endless zeros.
 */
export function formatNumber(n) {
  if (!isFinite(n) || isNaN(n)) return '0';
  const abs = Math.abs(n);
  if (abs === 0) return '0';
  if (abs >= 1000 || abs < 0.001) return n.toExponential(2);
  return n.toFixed(abs < 1 ? 4 : 2);
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
