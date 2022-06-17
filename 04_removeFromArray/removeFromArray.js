const removeFromArray = function(...args) {
    arr = args[0];
    const newArray = [];
    arr.forEach(item => {
        if (!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
