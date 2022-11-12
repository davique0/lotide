//Removes unwanted items from a given array

const without = function(fullArr, unwantedItem) {
  let cleanArr = [];
  for (const item of fullArr) {
    if (!unwantedItem.includes(item)) {
      cleanArr.push(item);
    }
  }
  return cleanArr;
};

module.exports = without;