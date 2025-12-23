export function matchesPrice(property, minPrice, maxPrice) {
  const { price } = property;
  if (minPrice != null && price < minPrice) return false;
  if (maxPrice != null && price > maxPrice) return false;
  return true;
}