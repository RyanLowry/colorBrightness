"use strict";

(function(){
	let btn = document.getElementById("button");
	var container = document.getElementById("colors");
	btn.addEventListener("click",function(e){
		let val = document.getElementById("input").value;
		console.log(val);
		console.log(getIntensity(val));
		let color = getIntensity(val);
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
	
})();