const countLetters = function(str) {
  let result = {};
  let strNoSpace = str.split(" ").join("");
  
  for (let item of strNoSpace) {
    result[item] ? result[item] += 1 : result[item] = 1;
  }
  return result;
};

module.exports = countLetters;


