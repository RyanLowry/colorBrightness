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
	let darkness = calculateIntensity(color,simple);
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
		var round = 0;
		if (simple == true){
			//gets a value between 0 and 10
			round = Math.round((color[i]) / 25);
		}else{
			//gets a value between 0 and 100, currently appx. 5 off real value
			round = Math.round((color[i]) / 2.55);
		}
		
		roundedArr.push(round);
		
	}
	// get and return single mean value from the array, along with seperate calculated values;
	return [Math.floor(roundedArr.reduce((a,b) => a + b) / 3),roundedArr];
}


