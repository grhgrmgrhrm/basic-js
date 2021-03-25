const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let catscount = 0;
    arr.forEach(item => {
     item.forEach(elem => {
      if (elem === '^^') catscount++;
     });
    });
    return catscount;
};
