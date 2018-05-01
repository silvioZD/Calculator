function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
	document.getElementById('inputwindow').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);

	if (result % 1 ===0) {
		result = result;
	} else {
		result = eval(document.getElementById('inputwindow').value).toFixed(2);	
	}
	document.getElementById('inputwindow').value = result;
}