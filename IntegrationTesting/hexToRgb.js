export function hexToRgb(hex) {
  const clean = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
    throw new Error("Invalid hex");
  }

  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}
