function naiveSearch(long, short) {
  var count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break; // 단어가 다를 때
      if (j === short.length - 1) count++; // 단어가 같을 때
    }
  }

  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
