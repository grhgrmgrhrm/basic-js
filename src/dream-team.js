const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let answer = "";
    members.forEach((item) => {
        if (typeof item === "string") {
            item = item.trim();
            answer += item[0];
        }
    });
    answer = answer.toUpperCase().split("").sort().join("");
    return answer;
};
