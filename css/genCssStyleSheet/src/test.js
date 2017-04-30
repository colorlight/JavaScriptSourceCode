window.onload = function(){
	var styleElt = document.createElement('style'),
	 	head = document.getElementsByTagName('head')[0];

	head.appendChild(styleElt);
	
	var styleSheet = document.styleSheets[document.styleSheets.length-1]; 

	var TODO = "{width:100px;height:200px;background:red}";

	var selector = ".div-style";

	var rule = selector + TODO;

	// styleElt.innerHTML = rule;
	styleSheet.insertRule(rule,0);


	// document.getElementsByTagName('div')[0].className = "div-style";
	document.getElementsByTagName('div')[0].classList.add('div-style');

}