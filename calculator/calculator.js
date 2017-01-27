
var screentxt = document.getElementById("screen_text");
var operator = document.getElementById("operator");
var add_decimal = false;
var neg = false;
var addon = false;
var operation = false;
var first = 0;
var second = 0;


for (var i = 0; i <  11; i++){
	var button = document.getElementById("button_" + i);

	if (button != null){
		button.onclick = function(e){
			if (screentxt.innerHTML == "0" || operation ==  true)
			{
				screentxt.innerHTML = e.target.id.substring(7);
				operation = false;
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
		operator.innerHTML = "";
		operation = false
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
	});

document.getElementById("button_plus").addEventListener("click",
	function(){
		operator.innerHTML="+";
		operation = true;
		//add = true;
		if (screentxt.innerHTML != "0"){
			first = screentxt.innerHTML;
		}
	});

document.getElementById("button_minus").addEventListener("click",
	function(){
		operator.innerHTML="-";
		operation = true;
		if (screentxt.innerHTML != "0"){
			first = screentxt.innerHTML;
		}
	});

document.getElementById("button_mult").addEventListener("click",
	function(){
		operator.innerHTML="x";
		operation = true;
		if (screentxt.innerHTML != "0"){
			first = screentxt.innerHTML;
		}
	});

document.getElementById("button_div").addEventListener("click",
	function(){
		operator.innerHTML="÷";
		operation = true;
		if (screentxt.innerHTML != "0"){
			first = screentxt.innerHTML;
		}
	});

document.getElementById("button_equals").addEventListener("click",
	function(){
		second = screentxt.innerHTML;
		if (operator.innerHTML == "+"){
			screentxt.innerHTML = Number(first) + Number(second);
		}
		else if(operator.innerHTML == "-"){
			screentxt.innerHTML = Number(first) - Number(second);
		}
		else if(operator.innerHTML == "x"){
			screentxt.innerHTML = Number(first) * Number(second);
		}
		else if(operator.innerHTML == "÷"){
			screentxt.innerHTML = Number(first) / Number(second);
		}
		operator.innerHTML = "";
		operation = false;
		first = 0;
		second = 0;
	})



