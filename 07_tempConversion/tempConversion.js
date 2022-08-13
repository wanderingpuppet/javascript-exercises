const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32)/1.8;
  return +celsius.toFixed(1);
};

const ctof = function(celsius) {
  let fahrenheit = celsius*1.8 + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
