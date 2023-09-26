// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers

let arrSet = [1, 1, 1, 2, 1, 1];
findUniq = function (arr) {
  let outputArray = [];
  let count = 0;
  let start = false;

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < outputArray.length; k++) {
      if (arr[j] == outputArray[k]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      outputArray.push(arr[j]);
    }
    start = false;
    count = 0;
  }

  return outputArray;
};

let table = findUniq(arrSet);

let count = 0;
for (i = 0; i < 3; i++) {
  if (table[0] === arrSet[i]) {
    count++;
  }
}
let result = count > 1 ? table[1] : table[0];

console.log(result);
