/**
 * 경계 조건이 무엇인지 edge case
 */
function anagram(str1, str2) {
  /**
   * Input 이 숫자 특수문자 , 등이 포함되지는 않았는지?
   * input 은 알파벳 소문자로만 제한
   */

  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // for of value
  for (var str of str1) {
    frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
  }

  for (var str of str2) {
    frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1;
  }

  // for in key
  for (let word in frequencyCounter1) {
    if (!(word in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[word] !== frequencyCounter1[word]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("anagram", "nagaram"));

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
