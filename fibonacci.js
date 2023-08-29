/* Returns an array containing the first <num> numbers 
from the fibonacci sequence. 

Examples:
  n = 0 => []
  n = 1 => [0]
  n = 2 => [0, 1]

Precondition: num >= 0
*/
function fibsIter(num) {
  if (num === 0) return [];

  const array = [0];
  let a = 0, b = 1, c;

  for (let i = 1; i < num; i++) {
    array.push(b);
    c = a + b;
    a = b;
    b = c;
  }

  return array;
}

function fibsRec(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }
  const arr = fibsRec(num - 1);
  const n = arr.length;
  arr.push(arr[n - 2] + arr[n - 1]);

  return arr;
}
