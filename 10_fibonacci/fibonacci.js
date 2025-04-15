const fibonacci = function(sequence) {
    let prev2=0;
    let prev1=1;
    let curFib=0;

    if (sequence==0){
        return prev2;
    }
    else if (sequence==1){
        return prev1;
    }
    else if (sequence<0){
        return "OOPS";
    }


    for (let i=2;i<=sequence;i++){
        //sequence at i
        curFib=prev2+prev1;
        prev2=prev1;
        prev1=curFib;
    }

    return curFib;
};

// Do not edit below this line
module.exports = fibonacci;
