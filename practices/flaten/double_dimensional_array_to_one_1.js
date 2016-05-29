'use strict';

function double_to_one(collection) {

	var arr=new Array();
	var outLen=collection.length;
	for(var i=0;i<outLen;i++){
		arr.push(collection[i]);
		
	}
	return arr;
}

module.exports = double_to_one;
