"use strict";

const Character = {};

const iq_bonus = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const me_bonusP = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8];
const me_bonusI = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const ma_bonus = [40, 45, 50, 55, 60, 65, 70, 75, 80, 84, 88, 92, 94, 96, 97];
const ps_bonus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pp_bonusPDS = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8];
const pe_bonusCD = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const pe_bonusMP = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8];

function defineAttributes() {
	document.getElementById("div0").style.display = "none";
	document.getElementById("div1").style.display = "block";
	
	const logging = document.getElementById("logging");
	
	Character.iq = document.getElementById("iq").value;
	Character.me = document.getElementById("me").value;
	Character.ma = document.getElementById("ma").value;
	Character.ps = document.getElementById("ps").value;
	Character.pp = document.getElementById("pp").value;
	Character.pe = document.getElementById("pe").value;
	Character.pb = document.getElementById("pb").value;
	Character.spd = document.getElementById("spd").value;
	
	var t0 = "";
	t0 += "<table>";
	t0 += "<tr><th>I.Q.</th><th>M.E.</th><th>M.A.</th><th>P.S.</th>";
	t0 += "<th>P.P.</th><th>P.E.</th><th>P.B.</th><th>Spd.</th>";
	t0 += "</tr>";
	t0 += "<tr>";
	t0 += "<td>" + Character.iq + "</td>";
	t0 += "<td>" + Character.me + "</td>";
	t0 += "<td>" + Character.ma + "</td>";
	t0 += "<td>" + Character.ps + "</td>";
	t0 += "<td>" + Character.pp + "</td>";
	t0 += "<td>" + Character.pe + "</td>";
	t0 += "<td>" + Character.pb + "</td>";
	t0 += "<td>" + Character.spd + "</td>";
	t0 += "</tr>";
	t0 += "</table>";
	logging.insertAdjacentHTML("beforeend",	t0);
	
	var mph = Character.spd * (120.0/176.0);
	var per_round = mph * (22.0/3.0);
	var per_second = mph * (22.0/45.0);
	logging.insertAdjacentHTML("beforeend",	"<b>Speed: </b>" + mph.toFixed(2) + " mph; "
		+ per_round.toFixed(2) + " yds/round; "
		+ per_second.toFixed(0) + " yds/sec<br>");
	
	Character.strType = document.getElementById("strType").value;
	
	if(Character.iq <= 8)
		logging.insertAdjacentHTML("beforeend",	"<b>Low I.Q.: </b> <i>see page 282</i><br>");
	if(Character.ma <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low M.A.: </b> <i>see page 283</i><br>");
	if(Character.me <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low M.E.: </b> <i>see page 283</i><br>");
	if(Character.ps <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low P.S.: </b> <i>see page 283</i><br>");
	if(Character.pp <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low P.P.: </b> <i>see page 283</i><br>");
	if(Character.pe <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low P.E.: </b> <i>see page 284</i><br>");
	if(Character.pb <= 7)
		logging.insertAdjacentHTML("beforeend",	"<b>Low P.B.: </b> <i>see page 284</i><br>");
	if(Character.spd <= 6)
		logging.insertAdjacentHTML("beforeend",	"<b>Low Spd.: </b> <i>see page 284</i><br>");
	
	
	
	
	
	if(Character.iq > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High I.Q.: </b> <i>see page 284</i><br>");
	if(Character.ma > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High M.A.: </b> <i>see page 284</i><br>");
	if(Character.me > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High M.E.: </b> <i>see page 284</i><br>");
	if(Character.ps > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High P.S.: </b> <i>see page 284</i><br>");
	if(Character.pp > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High P.P.: </b> <i>see page 284</i><br>");
	if(Character.pe > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High P.E.: </b> <i>see page 284</i><br>");
	if(Character.pb > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High P.B.: </b> <i>see page 284</i><br>");
	if(Character.spd > 30)
		logging.insertAdjacentHTML("beforeend",	"<b>High Spd.: </b> <i>see page 284</i><br>");

}
