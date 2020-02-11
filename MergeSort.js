let count = 0;
function mergeSort(array) {
  //console.log('MergeSort Count: ' + count);
  //console.log('Array', array);
  count++;

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, array);
}

function merge(left, right, array) {
  //console.log('merge', left, right);
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
};

const array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
console.log('Final Sort', mergeSort(array));

/*****************************************************************************************
 * 1. What is the resulting list that will be sorted after 3 recursive calls to mergesort?
 * Count 0: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 ]
 * Count 1: [21, 1, 26, 45, 29, 28, 2, 9]
 * Count 2: [21, 1, 26, 45]
 * 
 * 2. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
 * Count 15: [28]
 * 
 * 3. What are the first 2 lists to be merged?
 * [46][40]
 * 
 * 4. Which two lists would be merged on the 7th merge?
 * Merge is only called 4 times
 *****************************************************************************************/

array2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32,
  26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16,
  46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82,
  6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64,
  43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53,
  78, 40, 14, 5];

console.log(mergeSort(array2));
