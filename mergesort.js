function mergeSort(array) {
  mergeSortHelper(array, 0, array.length - 1);
}

/* Recursively sorts subarray array[start..end] using mergesort. */
function mergeSortHelper(array, start, end) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2); 
    mergeSortHelper(array, start, middle);
    mergeSortHelper(array, middle + 1, end);
    merge(array, start, middle, end);
  }
}

/* Merges two sorted arrays array[start..middle] and array[middle+1..end]. */
function merge(array, start, middle, end) {
  const n1 = middle - start + 1;
  const n2 = end - middle;
  const left = [];
  const right = [];
  for (let i = 0; i < n1; i++) { // Copy left subarray
    left[i] = array[start + i];
  }
  for (let j = 0; j < n2; j++) { // Copy right subarray
    right[j] = array[middle + j + 1];
  }
  // Insert sentinel values in order to simplify our code
  left[n1] = Number.MAX_VALUE;
  right[n2] = Number.MAX_VALUE;

  let a = 0;
  let b = 0;
  for (let c = start; c <= end; c++) {
    if (left[a] <= right[b]) {
      array[c] = left[a];
      a++;
    } else {
      array[c] = right[b];
      b++;
    }
  }
}

const arr1 = [5, 2, 1, 3, 6, 4];
const arr2 = [4, 8, 6, 2, 1, 7, 5, 3];

mergeSort(arr1);
mergeSort(arr2);

console.log(arr1);
console.log(arr2);
