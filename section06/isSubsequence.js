function isSubsequence(str1, str2) {
  let i = 0;
  let cnt = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      cnt++;
    }

    if (cnt === str1.length) {
      return true;
    }
  }

  return cnt === str1.length;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "string"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
