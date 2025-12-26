export const random_milky_hsl_color = (): string => {
  const hue: number = Math.floor(Math.random() * 361);

  // Saturation: 25-55%, for a desaturated, "soft" look
  const saturation: number = Math.floor(Math.random() * 31) + 25;

  // Lightness: 90-95%, for a light, "milky" appearance
  const lightness: number = Math.floor(Math.random() * 6) + 85;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
