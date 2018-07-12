(function(){
	let btn = document.getElementById("button");
	var container = document.getElementById("colors");
	btn.addEventListener("click",function(e){
		let val = document.getElementById("input").value;
		console.log(val);
		console.log(parseData(val));
		let color = parseData(val);
		putColor(color);
	})
	function putColor(colorData){
		var div = document.createElement("div");
		var textDiv = document.createElement("div");
		var color = "rgb(" + colorData[0].join(",") + ")";
		var colorDiv = document.createElement("div");
		colorDiv.style.backgroundColor = color;
		colorDiv.style.width = "100px";
		colorDiv.style.height = "100px";
		colorDiv.style.margin = "0 15px";
		colorDiv.style.verticalAlign = "bottom";
		textDiv.innerHTML += "darkness:" + colorData[1][0] + " [" + colorData[1][1] + "]" + "<br />" + "color:" + color;
		textDiv.style.textAlign = "center";
		div.append(colorDiv);
		div.append(textDiv);
		container.append(div);
	}
	function parseData(colors){
		var color = [];
		if(colors.charAt(0) == "#"){
			color = convertToRGB(colors);
		}else{
			var thenum = colors.match(/\d|,/g);
			console.log(thenum);
			color = thenum.join("").split(",");
			
		}
		let darkness = calculateDarkness(color);
		return [color,darkness];
	}
	
	
	function calculateDarkness(color){
		//convert each array value into a value between 0 and 10;
		var roundedArr = []
		for(var i = 0; i < color.length; i++){
			let round = Math.round((color[i]) / 25);
			roundedArr.push(round);
			
		}
		// get and return single mean value from the array;
		return [Math.floor(roundedArr.reduce((a,b) => a + b) / 3),roundedArr];
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