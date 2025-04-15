const removeFromArray = function(array, ...toRemove) {
    return array.filter(x => !toRemove.includes(x))
    
};

// Do not edit below this line
module.exports = removeFromArray;
