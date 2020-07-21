// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  // If num is evenly divisible by 2,
  console.log(num % 2);
  if (num % 2 === 0) {
    // return the string "even".
    return "even";
  } else {
    // If num is NOT evenly divisible by 2
    // return the string "odd".
    return "odd";
  }
};
