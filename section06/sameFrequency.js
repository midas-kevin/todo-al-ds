function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  if (String(num1).length !== String(num2).length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of String(num1)) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let num of String(num2)) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
