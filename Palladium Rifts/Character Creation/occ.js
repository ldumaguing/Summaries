"use strict";

function showOCC() {
	document.getElementById("Arms02").style.display = "block";  // Crazy
	document.getElementById("Arms06").style.display = "block";  // Juicer

	if(Character.me >= 10) {
		document.getElementById("Arms01").style.display = "block";  // Cyborg
	}

	if(
		((Character.alignment === "good01")
		| (Character.alignment === "good02")
		| (Character.alignment === "self01")
		| (Character.alignment === "self02")
		| (Character.alignment === "evil01"))
		&
		(Character.pe >= 11
		& Character.iq >= 10
		& Character.ps >= 10)
		) {
		document.getElementById("Arms03").style.display = "block";  // Cyber-Knight
	}

	if(
		((Character.alignment === "good01")
		| (Character.alignment === "good02")
		| (Character.alignment === "self01")
		| (Character.alignment === "self02"))
		&
		(Character.pp >= 10
		& Character.iq >= 12
		& Character.me >= 12)
		) {
		document.getElementById("Arms04").style.display = "block";  // Glitter Boy
	}

	if(
		Character.pe >= 12
		& Character.pp >= 12
		& Character.ps >= 12
		& Character.iq >= 12
		) {
		document.getElementById("Arms05").style.display = "block";  // Headhunter
	}

}


