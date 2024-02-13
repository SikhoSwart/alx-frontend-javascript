export default function updateUniqueItems(map) {
  const map2 = map;

  if (map2 instanceof Map) {
    for (const [key, value] of map2) {
      if (value === 1) {
        map2.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map2;
}
