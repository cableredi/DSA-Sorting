function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

let count = 0;
function partition(array, start, end) {
  //console.log('Partition Count: ' + count, array);
  count++;
  
  const pivot = array[end - 1];
  //const pivot = array[start]
  
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
console.log(quickSort(array));

/***************************************************
 * show the resulting list after the second partitioning 
 * according to the quicksort algorithm.
 * 
 * When using the last item on the list as a pivot
 * [10,  3,  9, 12, 19, 14, 17, 16, 13, 15]
 * 
 * When using the first item on the list as a pivot
 * [14, 13, 10,  3,  9, 12, 15, 16, 19, 17]
 ****************************************************/

 array2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32,
          26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16,
          46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82,
          6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64,
          43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53,
          78, 40, 14, 5];
console.log(quickSort(array2));