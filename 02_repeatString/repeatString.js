const repeatString = function(str, reps) {
    let res = "";
    if (reps < 0) {
        return "ERROR";
    }
    for (let i = 0; i < reps; i++){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
