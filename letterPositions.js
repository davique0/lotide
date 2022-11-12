//Function declaration
const letterPositions = function(sentence) {
  let result = {};
  let strNoSpace = sentence.split(" ").join("");
  //Creation of key for result object
  for (let item of strNoSpace) {
    result[item] = [];
  }
  //adding position of letters in the proper key
  for (let i = 0; i < sentence.length; i++) {
    for (let item in result) {
      if (item === sentence[i] && sentence[i] !== " ") {
        result[item].push(i);
      }
    }
  }
  return result;
};

module.exports = letterPositions;


