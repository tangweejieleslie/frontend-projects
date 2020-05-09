// Source: https://nin10news.com/decode/
// run using node aes_decrypt.js 
var CryptoJS = require("crypto-js");

let decryptText = process.argv[2];
// console.log(decryptText);

var decodedString = (CryptoJS.AES.decrypt(decryptText,"/")).toString(CryptoJS.enc.Utf8);

console.log(decodedString);