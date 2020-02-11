function sortInPlace(array){
  for(let i = 0; i < array.length; i++){
    let j = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const arr2 = [1, 2, 3, 4, 5]
console.log(sortInPlace(arr2))