/**
 * This function takes in a hexadecimal string and converts it to a decimal integer
 * @param {*} hexString The hexadecimal number to be converted
 * @returns The hexadecimal number converted to decimal, or base 10
 */
function hexToDec(hexString){
    return parseInt(hexString, 16) //Takes the hexadecimal number as a string, and converts it to an integer. 16 is used because there are 16 hexadecimal values.
  }