"use strict";

function commitProfile() {
	document.getElementById("div0").style.display = "none";
	document.getElementById("div1").style.display = "block";

	const logging = document.getElementById("logging");
	if(document.getElementById("name").value === "Name")
		logging.insertAdjacentHTML("beforeend",	"<b>Name: </b>John Doe");
	else
		logging.insertAdjacentHTML("beforeend",	"<b>Name: </b>" + document.getElementById("name").value);

	const age = document.getElementById("age");
	if(age.value === "Age")
		logging.insertAdjacentHTML("beforeend",	"<br><b>Age: </b>18");
	else
		logging.insertAdjacentHTML("beforeend",	"<br><b>Age: </b>" + age.value);

	const gender = document.getElementById("gender");
	if(gender.value === "Gender")
		logging.insertAdjacentHTML("beforeend",	"<br><b>Gender: </b>Male");
	else
		logging.insertAdjacentHTML("beforeend",	"<br><b>Gender: </b>" + gender.value);
	
	const hair = document.getElementById("hair");
	if(hair.value === "Hair")
		logging.insertAdjacentHTML("beforeend",	"<br><b>Hair: </b>Blond");
	else
		logging.insertAdjacentHTML("beforeend",	"<br><b>Hair: </b>" + hair.value);
	
	const eyes = document.getElementById("eyes");
	if(eyes.value === "Eyes")
		logging.insertAdjacentHTML("beforeend",	"<br><b>Eyes: </b>Blue");
	else
		logging.insertAdjacentHTML("beforeend",	"<br><b>Eyes: </b>" + eyes.value);
	
	const phystrait = document.getElementById("phystrait");
	if(phystrait.value === "Physical Trait")
		logging.insertAdjacentHTML("beforeend",	"<br><b>Physical Trait: </b>A simple tear-drop tattoo below the right eye");
	else
		logging.insertAdjacentHTML("beforeend",	"<br><b>Physical Trait: </b>" + phystrait.value);

	const race = document.getElementById("race");
	logging.insertAdjacentHTML("beforeend",	"<br><b>Race: </b>" + race.value);
	
	const rank = document.getElementById("rank");
	logging.insertAdjacentHTML("beforeend",	"<br><b>Rank: </b>" + rank.value);
	

	if (race.value === "Dwarf") {
		document.getElementById("str").value = 4;
		document.getElementById("psy").value = 2;
		document.getElementById("tec").value = 4;
		document.getElementById("int").value = 1;
		document.getElementById("foc").value = 3;
		document.getElementById("end").value = 3;
		document.getElementById("rfx").value = 1;
		return;
	}

	if (race.value === "Elf") {
		document.getElementById("str").value = 1;
		document.getElementById("psy").value = 3;
		document.getElementById("tec").value = 3;
		document.getElementById("int").value = 3;
		document.getElementById("foc").value = 2;
		document.getElementById("end").value = 1;
		document.getElementById("rfx").value = 3;
		return;
	}
	
	if (race.value === "Lizardman") {
		document.getElementById("str").value = 4;
		document.getElementById("psy").value = 3;
		document.getElementById("tec").value = 2;
		document.getElementById("int").value = 2;
		document.getElementById("foc").value = 3;
		document.getElementById("end").value = 2;
		document.getElementById("rfx").value = 2;
		return;
	}
		
	if (race.value === "Rhea") {
		document.getElementById("str").value = 1;
		document.getElementById("psy").value = 4;
		document.getElementById("tec").value = 3;
		document.getElementById("int").value = 2;
		document.getElementById("foc").value = 1;
		document.getElementById("end").value = 2;
		document.getElementById("rfx").value = 4;
		return;
	}

	document.getElementById("str").value = 3;
	document.getElementById("psy").value = 2;
	document.getElementById("tec").value = 2;
	document.getElementById("int").value = 3;
	document.getElementById("foc").value = 2;
	document.getElementById("end").value = 4;
	document.getElementById("rfx").value = 2;

}

