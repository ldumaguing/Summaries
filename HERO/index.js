"use strict";

var character = {
	STR: 10,
	DEX: 10,
	CON: 10,
	INT: 10,
	EGO: 10,
	PRE: 10,
	OCV: 3,
	DCV: 3,
	OMCV: 3,
	DMCV: 3,
	SPD: 2,
	PD: 2,
	ED: 2,
	REC: 4,
	END: 20,
	BODY: 10,
	STUN: 20,
	Running: 12,
	Swimming: 4,
	Leaping: 4,
	Cost: 0
};

function reset() {
	document.getElementById("str").value = 10;
	document.getElementById("dex").value = 10;
	document.getElementById("con").value = 10;
	document.getElementById("int").value = 10;
	document.getElementById("ego").value = 10;
	document.getElementById("pre").value = 10;

	document.getElementById("ocv").value = 3;
	document.getElementById("dcv").value = 3;
	document.getElementById("omcv").value = 3;
	document.getElementById("dmcv").value = 3;

	document.getElementById("spd").value = 2;
	document.getElementById("pd").value = 2;
	document.getElementById("ed").value = 2;

	document.getElementById("rec").value = 4;
	document.getElementById("end").value = 20;
	document.getElementById("body").value = 10;
	document.getElementById("stun").value = 20;

	document.getElementById("running").value = 12;
	document.getElementById("swimming").value = 4;
	document.getElementById("leaping").value = 4;
};

var rank = Array("Weak", "Challenged", "Average", "Skilled",
	"Competent", "Legendary", "Superhuman");

function commentA(val) {
	if (val <= 2) return 0;
	if (val <= 5) return 1;
	if (val <= 10) return 2;
	if (val <= 13) return 3;
	if (val <= 20) return 4;
	if (val <= 30) return 5;
	return 6;
};

function commentB(val) {
	if (val <= 1) return 0;
	if (val <= 2) return 1;
	if (val <= 3) return 2;
	if (val <= 4) return 3;
	if (val <= 7) return 4;
	if (val <= 10) return 5;
	return 6;
};

function commentC(val) {  // PD, ED
	if (val <= 1) return 0;
	if (val <= 2) return 1;
	if (val <= 4) return 2;
	if (val <= 6) return 3;
	if (val <= 10) return 4;
	if (val <= 15) return 5;
	return 6;
};

function commentREC(val) {
	if (val <= 1) return 0;
	if (val <= 2) return 1;
	if (val <= 4) return 2;
	if (val <= 6) return 3;
	if (val <= 10) return 4;
	if (val <= 13) return 5;
	return 6;
};

function commentEND(val) {
	if (val <= 5) return 0;
	if (val <= 10) return 1;
	if (val <= 20) return 2;
	if (val <= 26) return 3;
	if (val <= 40) return 4;
	if (val <= 60) return 5;
	return 6;
};

function commentSTUN(val) {
	if (val <= 6) return 0;
	if (val <= 11) return 1;
	if (val <= 20) return 2;
	if (val <= 27) return 3;
	if (val <= 40) return 4;
	if (val <= 60) return 5;
	return 6;
};

function commentSPD(val) {
	if (val <= 1) return 0;
	if (val <= 2) return 2;
	if (val <= 3) return 3;
	if (val <= 5) return 4;
	if (val <= 7) return 5;
	return 6;
};

function commentRUN(val) {
	if (val <= 2) return 0;
	if (val <= 6) return 1;
	if (val <= 12) return 2;
	if (val <= 16) return 3;
	if (val <= 20) return 4;
	if (val <= 26) return 5;
	return 6;
};

function commentSWIM(val) {
	if (val == 0) return 0;
	if (val <= 2) return 1;
	if (val <= 4) return 2;
	if (val <= 6) return 3;
	if (val <= 10) return 4;
	if (val <= 18) return 5;
	return 6;
};

function commentLEAP(val) {
	if (val == 0) return 0;
	if (val <= 2) return 1;
	if (val <= 4) return 2;
	if (val <= 6) return 3;
	if (val <= 10) return 4;
	if (val <= 22) return 5;
	return 6;
};

function calcLEAP() {
	let p = Number(document.getElementById("leaping").value);
	let X = document.getElementById("leapingC");
	let Y = document.getElementById("leapingY");
	X.innerHTML = (p - 4) * 0.5;
	Y.innerHTML = Math.floor(p * 1.09361);

	let R = document.getElementById("leapingR");
	R.innerHTML = rank[commentLEAP(Number(document.getElementById("leaping").value))];

	character.Leaping = Number(document.getElementById("leaping").value);
};

function calcSWIM() {
	let p = Number(document.getElementById("swimming").value);
	let X = document.getElementById("swimmingC");
	let Y = document.getElementById("swimmingY");
	X.innerHTML = (p - 4) * 0.5;
	Y.innerHTML = Math.floor(p * 1.09361);

	let R = document.getElementById("swimmingR");
	R.innerHTML = rank[commentSWIM(Number(document.getElementById("swimming").value))];
	
	character.Swimming = Number(document.getElementById("swimming").value);
};

function calcRUN() {
	let p = Number(document.getElementById("running").value);
	let X = document.getElementById("runningC");
	let Y = document.getElementById("runningY");
	X.innerHTML = p - 12;
	Y.innerHTML = Math.floor(p * 1.09361);

	let R = document.getElementById("runningR");
	R.innerHTML = rank[commentRUN(Number(document.getElementById("running").value))];

	character.Running = Number(document.getElementById("running").value);
};

function calcSPD() {
	let p = Number(document.getElementById("spd").value) - 2;
	let X = document.getElementById("spdC");
	X.innerHTML = p * 10;
	let R = document.getElementById("spdR");
	R.innerHTML = rank[commentSPD(Number(document.getElementById("spd").value))];

	character.SPD = Number(document.getElementById("spd").value);
};

function calcSTUN() {
	let p = Number(document.getElementById("stun").value) - 20;
	let X = document.getElementById("stunC");
	X.innerHTML = (p / 2.0);
	let R = document.getElementById("stunR");
	R.innerHTML = rank[commentSTUN(Number(document.getElementById("stun").value))];

	character.STUN = Number(document.getElementById("stun").value);
};

function calcBODY() {
	let p = Number(document.getElementById("body").value) - 10;
	let X = document.getElementById("bodyC");
	X.innerHTML = p;
	let R = document.getElementById("bodyR");
	R.innerHTML = rank[commentA(Number(document.getElementById("body").value))];

	character.BODY = Number(document.getElementById("body").value);
};

function calcEND() {
	let p = Number(document.getElementById("end").value) - 20;
	let X = document.getElementById("endC");
	X.innerHTML = (p / 5.0);
	let R = document.getElementById("endR");
	R.innerHTML = rank[commentEND(Number(document.getElementById("end").value))];

	character.END = Number(document.getElementById("end").value);
};

function calcREC() {
	let p = Number(document.getElementById("rec").value) - 4;
	let X = document.getElementById("recC");
	X.innerHTML = p;
	let R = document.getElementById("recR");
	R.innerHTML = rank[commentREC(Number(document.getElementById("rec").value))];

	character.REC = Number(document.getElementById("rec").value);
};

function calcED() {
	let p = Number(document.getElementById("ed").value) - 2;
	let X = document.getElementById("edC");
	X.innerHTML = p;
	let R = document.getElementById("edR");
	R.innerHTML = rank[commentC(Number(document.getElementById("ed").value))];

	character.ED = Number(document.getElementById("ed").value);
};

function calcPD() {
	let p = Number(document.getElementById("pd").value) - 2;
	let X = document.getElementById("pdC");
	X.innerHTML = p;
	let R = document.getElementById("pdR");
	R.innerHTML = rank[commentC(Number(document.getElementById("pd").value))];

	character.PD = Number(document.getElementById("pd").value);
};

function calcDMCV() {
	let p = Number(document.getElementById("dmcv").value) - 3;
	let X = document.getElementById("dmcvC");
	X.innerHTML = p * 5;
	let R = document.getElementById("dmcvR");
	R.innerHTML = rank[commentB(Number(document.getElementById("dmcv").value))];

	character.DMCV = Number(document.getElementById("dmcv").value);
};

function calcOMCV() {
	let p = Number(document.getElementById("omcv").value) - 3;
	let X = document.getElementById("omcvC");
	X.innerHTML = p * 5;
	let R = document.getElementById("omcvR");
	R.innerHTML = rank[commentB(Number(document.getElementById("omcv").value))];

	character.OMCV = Number(document.getElementById("omcv").value);
};

function calcDCV() {
	let p = Number(document.getElementById("dcv").value) - 3;
	let X = document.getElementById("dcvC");
	X.innerHTML = p * 5;
	let R = document.getElementById("dcvR");
	R.innerHTML = rank[commentB(Number(document.getElementById("dcv").value))];

	character.DCV = Number(document.getElementById("dcv").value);
};

function calcOCV() {
	let p = Number(document.getElementById("ocv").value) - 3;
	let X = document.getElementById("ocvC");
	X.innerHTML = p * 5;
	let R = document.getElementById("ocvR");
	R.innerHTML = rank[commentB(Number(document.getElementById("ocv").value))];

	character.OCV = Number(document.getElementById("ocv").value);
};

function calcSTR() {
	let str = document.getElementById("str").value;
	let cost = Number(str) - 10;
	let C = document.getElementById("strC");
	C.innerHTML = cost;
	let R = document.getElementById("strR");
	R.innerHTML = rank[commentA(Number(str))];

	character.STR = Number(str);
};

function calcDEX() {
	let dex = document.getElementById("dex").value;
	let cost = Number(dex) - 10;
	let C = document.getElementById("dexC");
	C.innerHTML = cost * 2;
	let R = document.getElementById("dexR");
	R.innerHTML = rank[commentA(Number(dex))];

	character.DEX = Number(dex);
};

function calcCON() {
	let con = document.getElementById("con").value;
	let cost = Number(con) - 10;
	let C = document.getElementById("conC");
	C.innerHTML = cost;
	let R = document.getElementById("conR");
	R.innerHTML = rank[commentA(Number(con))];

	character.CON = Number(con);
};

function calcINT() {
	let cost = Number(document.getElementById("int").value) - 10;
	let X = document.getElementById("intC");
	X.innerHTML = cost;
	let R = document.getElementById("intR");
	R.innerHTML = rank[commentA(Number(document.getElementById("int").value))];

	character.INT = Number(document.getElementById("int").value);
};

function calcEGO() {
	let p = Number(document.getElementById("ego").value) - 10;
	let X = document.getElementById("egoC");
	X.innerHTML = p;
	let R = document.getElementById("egoR");
	R.innerHTML = rank[commentA(Number(document.getElementById("ego").value))];

	character.EGO = Number(document.getElementById("ego").value);
};

function calcPRE() {
	let p = Number(document.getElementById("pre").value) - 10;
	let X = document.getElementById("preC");
	X.innerHTML = p;
	let R = document.getElementById("preR");
	R.innerHTML = rank[commentA(Number(document.getElementById("pre").value))];

	character.PRE = Number(document.getElementById("pre").value);
};

function calculate() {
	let cost = Number(character.STR) - 10;
	cost += ((Number(character.DEX) - 10) * 2);
	cost += Number(character.CON) - 10;
	cost += Number(character.INT) - 10;
	cost += Number(character.EGO) - 10;
	cost += Number(character.PRE) - 10;
	
	cost += ((Number(character.OCV) - 3) * 5);
	cost += ((Number(character.DCV) - 3) * 5);
	cost += ((Number(character.OMCV) - 3) * 5);
	cost += ((Number(character.DMCV) - 3) * 5);
	
	document.getElementById("cost").innerHTML = cost;
}




