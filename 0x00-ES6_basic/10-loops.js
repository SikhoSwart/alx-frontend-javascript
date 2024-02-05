export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let idx in array) {
    const value = array[idx];
    array.push(appendString + value);
  }

  return arr;
}
