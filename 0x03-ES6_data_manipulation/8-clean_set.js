export default function cleanSet(set, startString) {
  let str = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const i of set) {
      if (i && i.startsWith(startString)) {
        array.push(i.slice(startString.length));
      }
    }
    str = array.join('-');
  }
  return str;
}
