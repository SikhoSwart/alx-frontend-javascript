export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    //Dealing with eslint
    const task = true;
    //Dealing with eslint
    const task2 = false; 
  }

  return [task, task2];
}
