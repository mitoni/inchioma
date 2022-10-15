export const interpolate = (lookup: { x: number; y: number }[], x: number) => {
  // Sort by x just in case
  lookup.sort((a, b) => a.x - b.x);

  // Add start and end if they don't exist
  if (lookup[0].x !== 0) {
    lookup.unshift({ x: 0, y: 0 });
  }

  if (lookup.at(-1)?.x !== 1) {
    lookup.push({ x: 1, y: 1 });
  }

  // Find index
  let index: number = lookup.length - 2;
  for (let i = 0; i < lookup.length - 1; i++) {
    const curr = lookup[i];
    const next = lookup[i + 1];

    if (curr.x <= x && next.x > x) {
      index = i;
      break;
    }
  }

  const { x: x1, y: y1 } = lookup[index];
  const { x: x2, y: y2 } = lookup[index + 1];

  // Linear interpolate
  const y = y1 + (x - x1) * ((y2 - y1) / (x2 - x1));

  return y;
};
