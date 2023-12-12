"use strict";

const MyCharacter = {};

function commitProfile() {
	document.getElementById("div0").style.display = "none";
	document.getElementById("div1").style.display = "block";

	const logging = document.getElementById("logging");


	if(document.getElementById("name").value === "Name")
		MyCharacter.name = "John Doe";
	else
		MyCharacter.name = document.getElementById("name").value;
	logging.insertAdjacentHTML("beforeend",	"<b>Name: </b>" + MyCharacter.name);


	if(document.getElementById("age").value === "Age")
		MyCharacter.age = 18;
	else
		MyCharacter.age = document.getElementById("age").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Age: </b>" + MyCharacter.age);


	if(document.getElementById("gender").value === "Gender")
		MyCharacter.gender = "Male";
	else
		MyCharacter.gender = document.getElementById("gender").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Gender: </b>" + MyCharacter.gender);


	if(document.getElementById("hair").value === "Hair")
		MyCharacter.hair = "Blond";
	else
		MyCharacter.hair = document.getElementById("hair").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Hair: </b>" + MyCharacter.hair);


	if(document.getElementById("eyes").value === "Eyes")
		MyCharacter.eyes = "Blue";
	else
		MyCharacter.eyes = document.getElementById("eyes").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Eyes: </b>" + MyCharacter.eyes);


	if(document.getElementById("phystrait").value === "Physical Trait")
		MyCharacter.phystrait = "A simple tear-drop tattoo below the right eye";
	else
		MyCharacter.phystrait = document.getElementById("phystrait").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Physical Trait: </b>" + MyCharacter.phystrait);


	MyCharacter.race = document.getElementById("race").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Race: </b>" + MyCharacter.race);

/*
	MyCharacter.rank = document.getElementById("rank").value;
	logging.insertAdjacentHTML("beforeend",	"<br><b>Rank: </b>" + MyCharacter.rank);
*/

	if (race.value === "Dwarf") {
		document.getElementById("str").value = 4;
		document.getElementById("psy").value = 2;
		document.getElementById("tec").value = 4;
		document.getElementById("int").value = 1;
		document.getElementById("foc").value = 3;
		document.getElementById("end").value = 3;
		document.getElementById("rfx").value = 1;
		MyCharacter.str = 4;
		MyCharacter.psy = 2;
		MyCharacter.tec = 4;
		MyCharacter.int = 1;
		MyCharacter.foc = 3;
		MyCharacter.end = 3;
		MyCharacter.rfx = 1;
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
		MyCharacter.str = 1;
		MyCharacter.psy = 3;
		MyCharacter.tec = 3;
		MyCharacter.int = 3;
		MyCharacter.foc = 2;
		MyCharacter.end = 1;
		MyCharacter.rfx = 3;
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
		MyCharacter.str = 4;
		MyCharacter.psy = 3;
		MyCharacter.tec = 2;
		MyCharacter.int = 2;
		MyCharacter.foc = 3;
		MyCharacter.end = 2;
		MyCharacter.rfx = 2;
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
		MyCharacter.str = 1;
		MyCharacter.psy = 4;
		MyCharacter.tec = 3;
		MyCharacter.int = 2;
		MyCharacter.foc = 1;
		MyCharacter.end = 2;
		MyCharacter.rfx = 4;
		return;
	}

	document.getElementById("str").value = 3;
	document.getElementById("psy").value = 2;
	document.getElementById("tec").value = 2;
	document.getElementById("int").value = 3;
	document.getElementById("foc").value = 2;
	document.getElementById("end").value = 4;
	document.getElementById("rfx").value = 2;
	MyCharacter.str = 3;
	MyCharacter.psy = 2;
	MyCharacter.tec = 2;
	MyCharacter.int = 3;
	MyCharacter.foc = 2;
	MyCharacter.end = 4;
	MyCharacter.rfx = 2;
}

