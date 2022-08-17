const palindromes = function (string) {
  string = string.toLowerCase();
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    let leftChar = string[left];
    let rightChar = string[right];

    // Skip punctuations
    if (leftChar < 'a' || leftChar > 'z') {
      left++;
      continue;
    }
    if (rightChar < 'a' || rightChar > 'z') {
      right--;
      continue;
    }

    if (leftChar != rightChar) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
