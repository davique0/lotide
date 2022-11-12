//finds the key of the return of the callback function

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return  key;
    }
  }
}

module.exports = findKey;