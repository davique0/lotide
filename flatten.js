//functions flattens an array inside an array up to 1 layer

const flatten = function(nestedArr) {
  let flattenedArr = [];
  for(let i = 0; i < nestedArr.length; i++) {
   if (!Array.isArray(nestedArr[i])) {
    flattenedArr.push(nestedArr[i]);
   } else {
    for (let j = 0; j < nestedArr[i].length; j++) {
      flattenedArr.push(nestedArr[i][j]);
    }
   }
  }
  return flattenedArr;
}

module.exports = flatten;


