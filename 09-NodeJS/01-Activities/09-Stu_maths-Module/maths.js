function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function quot(num1, num2) {
  return num1 / num2;
}

module.exports = {
  add: add,
  sub: sub,
  multiply: multiply,
  quot: quot,
};
