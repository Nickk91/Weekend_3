// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

let arrayOne = [19, 5, 42, 2, 77, -7, 12.1];

minTwo = function (array) {
  const arrayTwo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && Number.isInteger(array[i])) {
      arrayTwo[i] = array[i];
    }
  }
  res = arrayTwo.sort((a, b) => a - b).slice(0, 2);

  let sum = 0;

  for (let i = 0; i < res.length; i++) {
    sum += res[i];
  }

  return sum;
};

console.log(minTwo(arrayOne));
