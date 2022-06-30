function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    console.log(start, middle, end);
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }

  if (arr[middle] === num) return middle;

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
