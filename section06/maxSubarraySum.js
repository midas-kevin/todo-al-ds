function maxSubarraySum(arr, range) {
  if (arr.length < range) return null;

  let max = 0;

  for (var i = 0; i < range; i++) {
    max += arr[i];
  }

  let temp = max;

  for (var i = range; i < arr.length; i++) {
    temp = temp - arr[i - range] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
