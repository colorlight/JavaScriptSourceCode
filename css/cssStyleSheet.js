function disableStylesheet(ss) {
	if (typeof ss === "number")
		document.styleSheets[ss].disabled = true;
	else {
		var sheets = document.querySelectorAll(ss);
		/*高端的for用法*/
		for(var i = 0, sheetEle; sheetEle=sheets[i++];)
			sheetEle.disabled = true;
	}
}

