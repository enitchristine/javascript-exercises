const convertToCelsius = function(temp) {
  //temp-32*5/9
  return Math.round((((temp-32)*(5/9))*10))/10;
};

const convertToFahrenheit = function(temp) {
  
  // temp*9/5+32
  return Math.round(((temp*(9/5))+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
