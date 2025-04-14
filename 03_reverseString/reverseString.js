const reverseString = function(input) {
    let newString='';
    for (let i=input.length-1; i>-1;i--){
        newString+=input.slice(i,i+1);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
