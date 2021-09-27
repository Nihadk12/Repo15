const milili = [10, 25, 4];
function myArray(mili) {
	'use strict';

	milili.pop(4);

	milili.unshift(mili);

	return mili;
	
}

console.log(myArray(4));
module.exports = myArray;
