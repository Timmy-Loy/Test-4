const kelvin = 0; //The temperature forecast is 293 kelvin
const celsius = kelvin - 273; //to convert temperature in kelvin to celsius, we subtract 273 from the kelvin value.
let farenheit = celsius * (9/5) + 32; //this line of code represents the formula used to convert temp. in celsius to farenheit.
farenheit = Math.floor(farenheit); //conversion of temp. from celsius to farenheit often returns a decimal (ignoring the fact that that is not the case here) so the .floor method rounds down the decimal.
console.log(`The temperature is ${farenheit} degrees Farenheit`)
