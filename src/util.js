export const power = (p1, p2) => {
  return Math.sqrt(((p2.x - p1.x) * (p2.x - p1.x)) + ((p2.y - p1.y) * (p2.y - p1.y)));
};

export const angle = (p1, p2) => (
  Math.atan2(p2.y - p1.y, p2.x - p1.x)
);