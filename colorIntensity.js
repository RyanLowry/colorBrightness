function getIntensity(colors){
	//convert rgb/hex into an array
	var color = [];
	if(colors.charAt(0) == "#"){
		color = convertToRGB(colors);
	}else{
		//find digits and commas
		var thenum = colors.match(/\d|,/g);
		console.log(thenum);
		color = thenum.join("").split(",");
	}
	let darkness = calculateDarkness(color);
	//return both color and darkness for convenience
	return [color,darkness];
}

function calculateDarkness(color){
	//convert each array value into a value between 0 and 10;
	var roundedArr = []
	for(var i = 0; i < color.length; i++){
		let round = Math.round((color[i]) / 25);
		roundedArr.push(round);
		
	}
	// get and return single mean value from the array, along with seperate calculated values;
	return [Math.floor(roundedArr.reduce((a,b) => a + b) / 3),roundedArr];
}

function convertToRGB(color){
	//remove the #
	var hex = color.substr(1);
	//seperate string into 3 sections of 2
	var regex = hex.match(/(.{2})/g)
	var values = []
	regex.forEach(function(val,i){
		values.push(parseInt(val,16))
	});
	return values;
}
