(function(){
	let btn = document.getElementById("button");
	btn.addEventListener("click",function(e){
		let val = document.getElementById("input").value;
		console.log(val);
		console.log(parseData(val));
	})
	
	function parseData(colors){
		var color = 0;
		if(colors.charAt(0) == "#"){
			color = convertToRGB(colors);
		}else{
			var thenum = colors.match(/\d|,/g);
			console.log(thenum);
			color = thenum.join("").split(",");
			//push comma so loop can add last value to array;
			console.log(colors)
			
		}
		let darkness = calculateDarkness(color);
		return [color,darkness];
	}
	
	
	function calculateDarkness(color){
		//convert each array value into a value between 0 and 10;
		var roundedArr = []
		for(var i = 0; i < color.length; i++){
			round = Math.round((color[i]) / 25);
			roundedArr.push(round);
			
		}
		// get and return single mean value from the array;
		return Math.floor(roundedArr.reduce((a,b) => a + b) / 3);
	}
	
	function convertToRGB(color){
		var hex = color.substr(1);
		var regex = hex.match(/(.{2})/g)
		var values = []
		regex.forEach(function(val,i){
			values.push(parseInt(val,16))
		});
		return values;
	}
})();