const sum = (num1 , num2=1) => {


	if(num1 === 0) {
		num1 = num + num2;
	}else{
		return num1 + num2;
	}

	
	

};
console.log(sum(4,6));
console.log(sum(3));

module.exports = sum;
