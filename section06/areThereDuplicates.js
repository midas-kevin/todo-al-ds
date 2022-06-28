function areThereDuplicates() {
  let frequencyCounter = {};
  let isDuplicate = false;

  Object.values(arguments).forEach((args) => {
    if (frequencyCounter[args] > 0) {
      isDuplicate = true;
      return false;
    }
    frequencyCounter[args] = (frequencyCounter[args] || 0) + 1;
  });

  return isDuplicate;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates("a", "b", "c", "a"));

function areThereDuplicates2() {
  let collection = {};

  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

// console.log(areThereDuplicates2(1, 2, 3));
// console.log(areThereDuplicates2(1, 2, 2));
// console.log(areThereDuplicates2("a", "b", "c", "a"));

function areThereDuplicates3(...args) {
  args.sort((a, b) => a > b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

// console.log(areThereDuplicates3(1, 2, 3));
// console.log(areThereDuplicates3(1, 2, 2));
// console.log(areThereDuplicates3("a", "b", "c", "a"));

function areThereDuplicates4() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates4(1, 2, 3));
// console.log(areThereDuplicates4(1, 2, 2));
// console.log(areThereDuplicates4("a", "b", "c", "a"));
