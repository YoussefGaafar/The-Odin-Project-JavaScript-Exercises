const convertToCelsius = function (fahrenheit) {
  const result = parseFloat((fahrenheit - 32) * (5 / 9)).toFixed(1)
  if (result === 0.0) {
    return 0;
  }
  return parseFloat(result);
};

const convertToFahrenheit = function (celcius) {
  const result = parseFloat(celcius * (9 / 5) + 32).toFixed(1)
  if (result === 0.0) {
    return 0;
  }
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
