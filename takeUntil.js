const takeUntil = (array, callback) => {
 let results = [];
 for (const x of array) {
  if (!callback(x)) {
    results.push(x)
  } else {
    return results;
  }
 }
};

module.exports = takeUntil;
