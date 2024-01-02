"use strict";

function calcSTR() {
	let str = document.getElementById("str").value;
	let cost = Number(str) - 10;
	let strC = document.getElementById("strC");
	strC.innerHTML = cost;
}


