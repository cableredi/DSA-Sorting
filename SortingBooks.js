function booksInOrder(array) {
  //easiest case first
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = booksInOrder(left);
  right = booksInOrder(right);
  return merge(left, right, array);
}

const books = ['Green Eggs and Ham', 'Loving Frank', 'Sula', 'Great Gatsby'];

console.log(booksInOrder(books));