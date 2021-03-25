const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if(!Array.isArray(arr)){
        throw new Error('Error');
    }

    let result = [];

    for (let i=0;i<arr.length;i++){
        switch(arr[i]){
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                (result.length && arr[i - 2] != '--discard-next') ? result.pop(): result;
                break;
            case '--double-prev':
                (i > 0 && arr[i-2] !='--discard-next' )? result.push(arr[i-1]):result;
                break;
            case '--double-next':
                (i<arr.length-1 ) ? result.push(arr[i+1]) :result;
                break;
            default :
                result.push(arr[i]);
        }
    }
    return result;
};
