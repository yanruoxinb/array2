'use strict';

function double_to_one(collection) {
var arr=new Array();
		var Len=collection.length;
		for(var i=0;i<Len;i++){			
			if(isArray(collection[i])==true){
				var innerLen=collection[i].length
				for(var j=0;j<innerLen;j++){
					arr.push(collection[i][j]);
				}
			}
			else
				arr.push(collection[i])
		}
return arr;
}

module.exports = double_to_one;
