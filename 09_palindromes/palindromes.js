const palindromes = function (str) {
    const filteredStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const backwardStr = filteredStr.split('').reverse().join('');
    return filteredStr === backwardStr;
}
// Do not edit below this line
module.exports = palindromes;
