function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!

  let cnt = 0;

  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    var key2 = arr[i + 1];

    if (key !== key2) {
      cnt++;
    }
  }

  return cnt;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
