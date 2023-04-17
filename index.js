const userInfo = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: userInfo.firstName + " " + userInfo.campus,
    e: "oO",
    T: "U "
}));