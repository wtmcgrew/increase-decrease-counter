let count = 0;

document.getElementById("decrease").onclick = function() {
	count -= 1;
	document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
	count = 0;
	document.getElementById("counter").innerHTML = count;
}

document.getElementById("increase").onclick = function() {
	count += 1;
	document.getElementById("counter").innerHTML = count;
}

/*
Use DOM to target elements by ID on HTML document

Onclick makes the buttons clickable on the HTML layout

-= (count = count - 1)
+- (count = count + 1)
*/