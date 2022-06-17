const sumAll = function(num1, num2) {
    let result = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (num2 < num1){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }
    for (let i = num1; i <= num2; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
