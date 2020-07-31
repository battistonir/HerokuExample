function Algo() {}

Algo.prototype.reverse = function (str) {
  // go through each letter of the string backwards
  // add the letter to a result string
  // return the result string
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  console.log(result);
  return result;
};

Algo.prototype.isPalindrome = function (str) {
  // reverse string
  const reversed = new Algo().reverse(str);

  // see if the stinf is still the same
  if (str === reversed) {
    // yes? return true
    return true;
  }
};

Algo.prototype.capitalize = function (str) {};

module.exports = Algo;
