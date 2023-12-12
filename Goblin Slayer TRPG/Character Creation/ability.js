"use strict";

function yo() {
	const historyO = document.getElementById("historyO");
	alert(historyO.value);
}

function commitAbility() {
	MyCharacter.str = document.getElementById("str").value;
	MyCharacter.psy = document.getElementById("psy").value;
	MyCharacter.tec = document.getElementById("tec").value;
	MyCharacter.int = document.getElementById("int").value;
	MyCharacter.foc = document.getElementById("foc").value;
	MyCharacter.end = document.getElementById("end").value;
	MyCharacter.rfx = document.getElementById("rfx").value;

	document.getElementById("div1").style.display = "none";
	document.getElementById("div2").style.display = "block";
	
	var ability = "<table>";
	ability += "<tr>" + "<td><b>Strength: </b></td><td>" + MyCharacter.str + "</td></tr>";
	ability += "<tr>" + "<td><b>Psyche: </b></td><td>" + MyCharacter.psy + "</td></tr>";
	ability += "<tr>" + "<td><b>Technique: </b></td><td>" + MyCharacter.tec + "</td></tr>";
	ability += "<tr>" + "<td><b>Intelligence: </b></td><td>" + MyCharacter.int + "</td></tr>";
	ability += "<tr>" + "<td><b>Focus: </b></td><td>" + MyCharacter.foc + "</td></tr>";
	ability += "<tr>" + "<td><b>Endurance: </b></td><td>" + MyCharacter.end + "</td></tr>";
	ability += "<tr>" + "<td><b>Reflex: </b></td><td>" + MyCharacter.rfx + "</td></tr>";
	ability += "</table>";
	logging.insertAdjacentHTML("beforeend",	ability);
	
	MyCharacter.advenSkills = new Set();
	MyCharacter.generSkills = new Set();
	let advenSkills = "";
	let generSkills = "";

	if(MyCharacter.race === "Dwarf") {
		logging.insertAdjacentHTML("beforeend",	"<b><u>Adventure Skills</u>:</b><br>");
		MyCharacter.advenSkills.add("Healing Affinity (Beginner)");
		MyCharacter.generSkills.add("Darkvision (Beginner)");
		MyCharacter.generSkills.add("Craftsmanship (Beginner)");
		MyCharacter.advenSkills.forEach (function(value) {
			advenSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	advenSkills);
		logging.insertAdjacentHTML("beforeend",	"<b><u>General Skills</u>:</b><br>");
		MyCharacter.generSkills.forEach (function(value) {
			generSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	generSkills);
		return;
	}

	if(MyCharacter.race === "Elf") {
		logging.insertAdjacentHTML("beforeend",	"<b><u>Adventure Skills</u>:</b><br>");
		MyCharacter.advenSkills.add("Weapons: Bows (Beginner)");
		MyCharacter.generSkills.add("Darkvision (Beginner)");
		MyCharacter.generSkills.add("Beloved of the Fae (Beginner)");
		MyCharacter.advenSkills.forEach (function(value) {
			advenSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	advenSkills);
		logging.insertAdjacentHTML("beforeend",	"<b><u>General Skills</u>:</b><br>");
		MyCharacter.generSkills.forEach (function(value) {
			generSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	generSkills);
		return;
	}

	if(MyCharacter.race === "Lizardman") {
		logging.insertAdjacentHTML("beforeend",	"<b><u>Adventure Skills</u>:</b><br>");
		MyCharacter.advenSkills.add("Strengthened Immunity (Beginner)");
		MyCharacter.generSkills.add("Darkvision (Beginner)");
		MyCharacter.generSkills.add("Draconic Heritage (Beginner)");
		MyCharacter.advenSkills.forEach (function(value) {
			advenSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	advenSkills);
		logging.insertAdjacentHTML("beforeend",	"<b><u>General Skills</u>:</b><br>");
		MyCharacter.generSkills.forEach (function(value) {
			generSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	generSkills);
		return;
	}

	if(MyCharacter.race === "Rhea") {
		logging.insertAdjacentHTML("beforeend",	"<b><u>Adventure Skills</u>:</b><br>");
		MyCharacter.advenSkills.add("Stealth (Beginner)");
		MyCharacter.advenSkills.add("Anticipate (Beginner)");
		MyCharacter.generSkills.add("Cooking (Beginner)");
		MyCharacter.advenSkills.forEach (function(value) {
			advenSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	advenSkills);
		logging.insertAdjacentHTML("beforeend",	"<b><u>General Skills</u>:</b><br>");
		MyCharacter.generSkills.forEach (function(value) {
			generSkills += value + "<br>";
		});
		logging.insertAdjacentHTML("beforeend",	generSkills);
		return;
	}


	logging.insertAdjacentHTML("beforeend",	"<b><u>Adventure Skills</u>:</b><br>");
	MyCharacter.advenSkills.add("Encumbered Action (Beginner)");
	MyCharacter.advenSkills.add("Weapons: Throwing Weapons (Beginner)");
	MyCharacter.generSkills.add("Long-Distance Movement (Beginner)");
	MyCharacter.advenSkills.forEach (function(value) {
		advenSkills += value + "<br>";
	});
	logging.insertAdjacentHTML("beforeend",	advenSkills);
	logging.insertAdjacentHTML("beforeend",	"<b><u>General Skills</u>:</b><br>");
	MyCharacter.generSkills.forEach (function(value) {
		generSkills += value + "<br>";
	});
	logging.insertAdjacentHTML("beforeend",	generSkills);



	const historyO = document.getElementById("historyO");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Adventurer\">2 - Adventurer</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Vagabond\">3 - Vagabond</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Hunter\">4 - Hunter</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Scholar\">5 - Scholar</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Artisan\">6 - Artisan</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Farmer\">7 - Farmer</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Merchant\">8 - Merchant</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Soldier\">9 - Soldier</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Knight\">10 - Knight</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Priest\">11 - Priest</option>");
	historyO.insertAdjacentHTML("beforeend", "<option value=\"Noble\">12 - Noble</option>");
	
	
	
	
}

