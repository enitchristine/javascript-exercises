const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
  // let total = 0;
	// for (let i=0; i<array.length;i++){
  //   total+=array[i];
  // }
  // return total;

  return array.reduce(add,0);
};

const multiply = function(array) {
  // let total = 1;
	// for (let i=0; i<array.length;i++){
  //   total=total*array[i];
  // }
  // return total;
  return array.reduce((a,b)=>a*b,1);
};

const power = function(num, toPower) {
	let total = num;
	for (let i=1; i<toPower;i++){
    total=total*num;
  }
  return total;
  
};

const factorial = function(n) {
  let total=1;
	if (n==0){
    return total;
  }
  else{
    for (let i=1; i<=n;i++){
      total=total*i;
    }
    return total;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
