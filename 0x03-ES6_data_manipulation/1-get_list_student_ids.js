export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((stud) => stud.id);
  }
  return [];
}
