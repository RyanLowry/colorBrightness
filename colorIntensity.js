

function getLightness(colors,simple){
	//convert rgb/hex into an array
	var color = [];
	if(colors.charAt(0) == "#"){
		color = convertToRGB(colors);
	}else{
		//find digits and commas
		var thenum = colors.match(/\d|,/g);
		//join to properly split into an array
		color = thenum.join("").split(",");
	}
	let darkness = calculateLightness(color,simple);
	//return both color and darkness for convenience
	return [darkness,color];
}

function convertToRGB(color){
	//remove the #
	var hex = color.substr(1);
	//seperate string into 3 sections of 2
	var regex = hex.match(/(.{2})/g)
	var values = []
	regex.forEach(function(val,i){
		//convert hex value into decimal value
		values.push(parseInt(val,16))
	});
	return values;
}

function calculateLightness(color,simple){
	//convert each array value into a value between 0 and 10;
	var roundedArr = []
	for(var i = 0; i < color.length; i++){
		//gets a value between 0 and 100
		round = Math.floor((color[i]) / 5.1);
		if (simple == true){
			round = Math.round(round / 10);
		}
		
		roundedArr.push(round);
		
	}

	// get and return single mean value from the array, along with seperate calculated values;
	return [Math.min(roundedArr[0]) + Math.max(roundedArr[2]),roundedArr];
}


