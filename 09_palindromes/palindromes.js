const palindromes = function (sentence) {
    sentence=sentence.replace(/[^\w\s]|_/g, '');
    sentence=sentence.replaceAll(' ','');
    sentence=sentence.toLowerCase();
    
    let endIndex=0;
    for (let i=0; i<Math.round((sentence.length/2))+1;i++){
        
        endIndex=sentence.length-1-i;
        
        if (!(sentence[i]==sentence[endIndex])){
            
            return false;
        }
    }

    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
