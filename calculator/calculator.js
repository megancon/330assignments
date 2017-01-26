
var screentxt = document.getElementById("screen_text");
var add_decimal = false;
var neg = false;

for (var i = 0; i <  10; i++){
	var button = document.getElementById("button_" + i);

	if (button != null){
		button.onclick = function(e){
			if (screentxt.innerHTML == "0")
			{
				screentxt.innerHTML = e.target.id.substring(7);
			}
			else {
				screentxt.innerHTML += e.target.id.substring(7);
			}
		}
	}
}

document.getElementById("button_C").addEventListener("click",
	function(){
		screentxt.innerHTML="0";
		add_decimal = false;
		neg = false;
	});

document.getElementById("button_.").addEventListener("click",
	function(){
		if (add_decimal == false){
			screentxt.innerHTML += ".";
			add_decimal = true;
		}
	});

document.getElementById("button_±").addEventListener("click",
	function(){
		if (screentxt.innerHTML == "0"){
			return;
		}
		else if (neg == false){
			screentxt.innerHTML = "-".concat(screentxt.innerHTML); 
			neg = true;
		}
		 else {
			screentxt.innerHTML = screentxt.innerHTML.substring(1);
			neg = false;
		}
	})
