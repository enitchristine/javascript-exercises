const sumAll = function(numStart, numEnd) {
    let total=0;
    let buffer=0;

    //check
    if (!Number.isInteger(numStart)|| !Number.isInteger(numEnd) || numEnd < 0 || numStart<0 ){      
        return "ERROR";
    }

    if (numEnd < numStart){
        buffer = numEnd;
        numEnd = numStart;
        numStart = buffer;
    }
    
    for (let i =numStart; i<=numEnd;i++){
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
