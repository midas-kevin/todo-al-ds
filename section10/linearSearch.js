function linearSearch(arr, num) {
  if (arr.length < 1) return -1;
  if (!num) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
