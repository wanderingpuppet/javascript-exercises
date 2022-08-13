const removeFromArray = function(arr, ...elements) {
  let i = 0;
  while (i < arr.length) {
    if (elements.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
    i++;
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
