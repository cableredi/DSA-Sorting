function bucketSort(arr, min, max) {

  let result = new Array(max - min + 1);

  for(let i = 0; i < arr.length; i++){
    result[arr[i] - min] = (result[arr[i] - min]|0) +1;
  }
  let ans = []
  for(let i = min; i <= max; i++){
    for(let j = 0; j < result[i-min]; j++){
      ans.push(i)
    }
  }
  return ans
}

const arr1 = [1, 7, 2, 6, 4, 9]
console.log(bucketSort(arr1, 1, 9))