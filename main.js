(function(){
	let btn = document.getElementById("button");
	btn.addEventListener("click",function(e){
		let val = document.getElementById("input").value;
		console.log(val);
		console.log(parseData(val));
	})
	
	function parseData(colors){
		var parseColor = [];

		var thenum = colors.match(/\d|,/g);
		thenum.push(",")

		var num = [];
		var str = "";
		var caseNum = 0;
		thenum.forEach(function(val,i){
			if (val === ","){
				var x = parseInt(str) / 255;
				switch(caseNum){
					case 0:

						num[0] = x;
						str = "";
					break;
					case 1:
						num[1] = x;
						str = "";
					break;
					case 2:
						num[2] = x;
						parseColor.push(num);
					break;
				}
				caseNum++;
			}else{
				str += val
			}
			
		});
		let darkness = calculateDarkness(num);
		return [num,darkness];
	}
	
	
	function calculateDarkness(color){
		var roundedArr = []
		for(var i = 0; i < color.length; i++){
			round = Math.round((color[i] * 255) / 25);
			roundedArr.push(round);
			
		}
		var scalar = Math.floor(roundedArr.reduce((a,b) => a + b) / 3);
		return scalar;
	}
})();