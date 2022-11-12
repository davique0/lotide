//function finds the key of the value entered as second argument

const findKeyByValue = function(obj, value) {
  let result = undefined;
  for (const item in obj) {
    if (obj[item] === value) {
      result = item;
    }
  }
  return result;
};

module.exports = findKeyByValue;