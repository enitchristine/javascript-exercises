const findTheOldest = function(array) {

    // let oldest;
    // let prevAge=0;
    // let curAge=0;
    // const d = new Date();
    
    // oldest = array[0];
    // if (array[0].yearOfDeath==null){
    //     prevAge = d.getFullYear()-array[0].yearOfBirth;
    //     console.log(prevAge);
    // }else{
    //     prevAge = array[0].yearOfDeath-array[0].yearOfBirth;
    // }

    // for (let i=1; i<array.length;i++){

    //     if (array[i].yearOfDeath==null){
    //         curAge = d.getFullYear();-array[i].yearOfBirth;
    //         if (curAge>prevAge){
    //             oldest = array[i];
    //             prevAge=curAge;
    //         }
    //     }else{
    //         curAge = array[i].yearOfDeath-array[i].yearOfBirth;
    //         if (curAge>prevAge){
    //             oldest = array[i];
    //             prevAge=curAge;
    //         }
    //     }
        
    // }

    // return oldest;

    // using reduce function

    const d = new Date();
    

    return array.reduce((acc,curVal)=>{
        let prevAge=0;
        let curAge=0;
        
        console.log(acc.name+acc.yearOfDeath);
        if (acc.yearOfDeath === undefined){
            
            prevAge=d.getFullYear()-acc.yearOfBirth;  
            console.log(prevAge); 
        }
        else{
            prevAge=acc.yearOfDeath-acc.yearOfBirth;


        }if (curVal.yearOfDeath===undefined){
            curAge=d.getFullYear()-curVal.yearOfBirth;
        }
        else{
            curAge=curVal.yearOfDeath-curVal.yearOfBirth;
        }

        console.log(acc.name+prevAge);
        if (prevAge>curAge){
            return acc;
        }else{
            return curVal;
        }
    } ,array[0] );
};

// Do not edit below this line
module.exports = findTheOldest;
