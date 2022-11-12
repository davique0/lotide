//extracts the middle item of an array if odd length or the 2 middles if it is an even length

const middle = function(arr) {
  let middleArr = [];
  const lengthArr = arr.length;
  const middleNum = Math.ceil(arr.length / 2);
  if (lengthArr <= 2) {
    return middleArr;
  } else {
    if (lengthArr % 2 === 0) {
      middleArr.push(arr[middleNum - 1]);
      middleArr.push(arr[middleNum]);
    } else {
      middleArr.push(arr[middleNum - 1]);
    }
  }
  return middleArr;
};

module.exports = middle;
