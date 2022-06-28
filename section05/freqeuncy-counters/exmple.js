/**
 * Try
 * @returns boolean
 */

function same(arr1, arr2) {
  var hasValueCnt = 0;

  var tmp1 = arr1.sort((a, b) => b - a); // o(n)
  var tmp2 = arr2.sort((a, b) => b - a); // o(n)

  for (var i = 0; i < tmp1.length; i++) {
    if (tmp2[i] === tmp1[i] * tmp1[i]) {
      hasValueCnt++;
    }
  }

  return hasValueCnt === arr1.length;
}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

/**
 * First example
 */

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // O(n**2)
  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n)

    if (correctIndex === -1) {
      return false;
    }

    // slice: begin 부터, end 까지 새로운 배열을 반환 (원본 유지)
    // splice: 지정된 index 에서 두번째 arg 길이만큼 삭제 (원본 변경)
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
// console.log(same2([1, 2, 3], [4, 1, 9]));
// console.log(same2([1, 2, 3], [1, 9]));
// console.log(same2([1, 2, 1], [4, 4, 1]));

/**
 * Refactored
 */

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // O(n)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // O(n)
  for (let val of arr2) {
    frequencyCounter2[val] = frequencyCounter2[val || 0] + 1;
  }

  for (let key in frequencyCounter1) {
    // O(1)
    // in {} key 여부를 확인한다
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // value 값을 확인한다
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same3([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));
