const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const k = Math.LN2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if ((typeof sampleActivity !== "string" ) || (isNaN(sampleActivity)) ) {
        return false;
    } else {
        let answer = Math.log( MODERN_ACTIVITY / sampleActivity ) / k;

        if ((Math.ceil(answer) !== Infinity) && (Math.ceil(answer) > 0)) {
            return Math.ceil(answer);
        }
            return false;
    }
};

