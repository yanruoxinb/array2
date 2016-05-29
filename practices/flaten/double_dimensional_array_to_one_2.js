'use strict';

function double_to_one(collection) {
	var arr=new Array();
	var outLen=collection.length;
	for(var i=0;i<outLen;i++){
		var innerLen=collection[i].length;
		for(var j=0;j<innerLen;j++){
				if(arr.indexOf(collection[i][j])==-1)
					arr.push(collection[i][j]);
		}
	}
	return arr;
}

module.exports = double_to_one;
