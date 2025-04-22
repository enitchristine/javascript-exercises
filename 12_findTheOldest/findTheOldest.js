const findTheOldest = function(array) {

    const d = new Date();

    return array.reduce((a,b)=>{
        let aAge;
        let bAge;

        a.yearOfDeath==null ? aAge=d.getFullYear()-a.yearOfBirth : aAge=a.yearOfDeath-a.yearOfBirth;
        b.yearOfDeath==null ? bAge=d.getFullYear()-b.yearOfBirth : bAge=b.yearOfDeath-b.yearOfBirth;
        
        if (aAge>bAge){
            return a;
        }else {
            return b;
        }
    
    })
};

// Do not edit below this line
module.exports = findTheOldest;
