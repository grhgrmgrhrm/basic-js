const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return "Unable to determine the time of year!";
    let time = Date.parse(date);
    if (isNaN(time) || date.toString !== Date.prototype.toString) throw new Error("Error");
    else {
        let date = new Date(time);
        let month = date.getMonth()+1;
        if (month > 2 && month < 6) return "spring";
        else if (month > 5 && month < 9) return "summer";
        else if (month > 8 && month < 12) return "autumn";
        else return "winter";
    }
};
