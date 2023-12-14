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
	const notes = document.getElementById("notes");

	Character.strType = document.getElementById("strType").value;
	Character.iq = document.getElementById("iq").value;
	Character.me = document.getElementById("me").value;
	Character.ma = document.getElementById("ma").value;
	Character.ps = document.getElementById("ps").value;
	Character.pp = document.getElementById("pp").value;
	Character.pe = document.getElementById("pe").value;
	Character.pb = document.getElementById("pb").value;
	Character.spd = document.getElementById("spd").value;
	if(Character.iq < 1) Character.iq = 1;
	if(Character.ma < 1) Character.ma = 1;
	if(Character.me < 1) Character.me = 1;
	if(Character.ps < 1) Character.ps = 1;
	if(Character.pp < 1) Character.pp = 1;
	if(Character.pe < 1) Character.pe = 1;
	if(Character.pb < 1) Character.pb = 1;
	if(Character.spd < 1) Character.spd = 1;

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
		+ per_second.toFixed(2) + " yds/sec<br>");
	
	Character.strType = document.getElementById("strType").value;
	
	if(Character.iq <= 8) lowIQ();
	if(Character.ma <= 7) lowMA();
	if(Character.me <= 7) lowME();
	if((Character.ps <= 7) & (Character.strType === "Human")) lowHumanPS();
	if(Character.pp <= 7) lowPP();
	if(Character.pe <= 7) lowPE();


	if(Character.pb <= 7)
		notes.insertAdjacentHTML("beforeend",	"<b>Low P.B.: </b>see page 284<br>");
	if(Character.spd <= 6)
		notes.insertAdjacentHTML("beforeend",	"<b>Low Spd.: </b>see page 284<br>");
	
	if(Character.iq > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High I.Q.: </b>see page 284<br>");
	if(Character.ma > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High M.A.: </b>see page 284<br>");
	if(Character.me > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High M.E.: </b>see page 284<br>");
	if(Character.ps > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High P.S.: </b>see page 284<br>");
	if(Character.pp > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High P.P.: </b>see page 284<br>");
	if(Character.pe > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High P.E.: </b>see page 284<br>");
	if(Character.pb > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High P.B.: </b>see page 284<br>");
	if(Character.spd > 30)
		notes.insertAdjacentHTML("beforeend",	"<b>High Spd.: </b>see page 284<br>");

}

// *************************************************************************************************
function lowPE() {
	let text = "";
	if((Character.pe == 7) | (Character.pe == 6) | (Character.pe == 5)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PE 5, 6, or 7</b></u><br>";
		text += "-2 to save vs disease, -3 to save vs drugs and poison, and -3 to save vs magic. The character is also -5% to save vs coma and death and fatigues 25% faster than the average person unless he can take frequent breaks.";
		text += "</p>";
	}

	if((Character.pe == 4) | (Character.pe == 3)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PE 3 or 4</b></u><br>";
		text += "-6 to save vs disease, -5 to save vs drugs and poison, and -4 to save vs magic. -10% to save vs coma and death, fatigues 50% faster than the average person unless he can take frequent breaks, and the duration. of illness and the side effects from drugs and poisons last 25% longer. 01-60% chance the character is also a hypochondriac and has a phobia about disease and germs (roll for each).";
		text += "</p>";
	}

	if((Character.pe == 2) | (Character.pe == 1)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PE 1 or 2</b></u><br>";
		text += "-8 to save vs disease, -6 to save vs drugs and poison, and -5 to save vs magic. -20% to save vs coma and death, fatigues 75% faster than the average person unless he can take frequent rest breaks, suffers 50% more damage and double the penalties and duration from illness and the side effects from drugs, poisons, and magic.";
		text += "</p>";
	}

	notes.insertAdjacentHTML("beforeend", text);
}

function lowPP() {
	let text = "";
	if((Character.pp == 7) | (Character.pp == 6) | (Character.pp == 5)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PP 5, 6, or 7</b></u><br>";
		text += "-1 on initiative, -2 to strike, parry, Penalties for a P.P. of dodge, disarm, entangle, pull punch, and roll with impact; -15% penalty on skills that require a high level of manual dexterity or grace (mechanics, electronics, Gymnastics, Forgery, Pick Pockets, Palming, Prowl, Dance, etc.) and -5% on all other skills requiring any manual dexterity. No penalty on mental skills like Language, Literacy, Lore, etc.";
		text += "</p>";
	}

	if((Character.pp == 4) | (Character.pp == 3)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PP 3 or 4</b></u><br>";
		text += "-3 on initiative, reduce all combat bonuses (strike, parry, dodge, disarm, etc.) by half; -25% penalty on skills that require a high level of manual dexterity (mechanics, electronics, Gymnastics, Forgery, Prowl, Pick Pockets, Palming, etc.) and -10% on all other skills requiring any manual dexterity. No penalty on mental skills like Language, Literacy, Lore, etc.";
		text += "</p>";
	}

	if((Character.pp == 2) | (Character.pp == 1)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PP 1 or 2</b></u></p>";
		text += "<ul class=\"notesN\">";
		text += "<li>-5 on initiative, no combat bonuses (strike, parry, dodge, disarm, etc.); drops his weapon when a 1 -4 is rolled to strike, drops whatever is in his hand when startled or fails to save vs Horror Factor, and trips and falls on a roll of 1 -4 when trying to dodge (the fal l causes the klutz to lose initiative and one melee attack).</li>";
		text += "<li class=\"notesN\">Can NOT perform skills that require a high level of manual dexterity or grace (mechanics, electronics, Dance, Forgery, Gymnastics, Prowl, Pick Pockets, Palming, etc.); they are just plain impossible! -20% on any other skills that require any degree of manual dexterity, including riding a bicycle or horse, driving a car, Cl imbing, Running and Swimming. No penalty on mental skills like Language, Literacy, Lore, etc. This character is the ultimate klutz; a bull in a china shop.</li>";
		text += "</ul>";
	}

	notes.insertAdjacentHTML("beforeend", text);
}

function lowHumanPS() {
	let text = "";
	if((Character.ps == 7) | (Character.ps == 6) | (Character.ps == 5)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PS 5, 6, or 7</b></u><br>";
		text += "No damage bonuses from Hand to Hand Combat skill, O.C.C., or even the weapon itself apply to a character this physically weak, and reduce throwing range by 25%. It's like an adult wrestling with a ten or eleven year old. Guns do full damage.";
		text += "</p>";
	}

	if((Character.ps == 4) | (Character.ps == 3)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PS 3 or 4</b></u><br>";
		text += "Reduce physical damage by half, including damage inflicted by punches, kicks, and melee weapons (club, knife, sword, etc.). Reduce throwing range/distance by half. Guns do full damage.";
		text += "</p>";
	}

	if((Character.ps == 2) | (Character.ps == 1)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>PS 1 or 2</b></u><br>";
		text += "The character only inflicts one point of damage from punches and 1D4 damage from kicks. Even melee weapons in the hands of this character inflict half their normal damage. No damage bonuses apply, and reduce throwing range/distance by 75%. Guns do full damage.";
		text += "</p>";
	}

	notes.insertAdjacentHTML("beforeend", text);
}

function lowME() {
	let text = "";
	if((Character.me == 7) | (Character.me == 6) | (Character.me == 5)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>ME 5, 6, or 7</b></u><br>";
		text += "-3 to save vs Horror Factor, -2 to save vs illusions, and -1 to save vs any battles of will, -1 to save vs psionic attacksand mind control (magical, psionic or drug induced) and -1 to save vs insanity and possession. -10% penalty on the skills Barter, Interrogation, Performance, Public Speaking, Seduction, and Undercover Ops.";
		text += "</p>";
	}

	if((Character.me == 4) | (Character.me == 3)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>ME 3 or 4</b></u><br>";
		text += "-6 to save vs Horror Factor, -4 to save v s illusions, -3 to save vs any battles of will, -3 to save psionic attacks and mind control (magical, psionic or drug induced), -2 to save vs insanity, and -3 to save vs possession. Also suffers from one phobia (random roll or pick one; described in the Insanity section). The character spills his guts after 204 minutes of interrogation and is a terrible liar (must roll 01-15% on percentile dice to tell a convincing lie). Similarly, he is susceptible to seduction (the seducer gets a +20% bonus on this character) and intimidation (the intimidator gets a +20% bonuses on this character). -30% penalty on the skills Barter, Interrogation, Performance, Public Speaking, Seduction, and Undercover Ops.";
		text += "</p>";
	}
	
	if((Character.me == 2) | (Character.me == 1)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>ME 1 or 2</b></u><br>";
		text += "-8 to save vs Horror Factor, -6 to save vs illusions, -6 to save vs any battles of will, -6 to save vs psionic attacks and mind control (magical, psionic or drug induced), -5 to save vs insanity, and -6 to save vs possession. Also suffers from 1D4+1 phobias (random roll or pick them; described in the Insanity section). The character spills his guts after I D4 minutes of interrogation and cannot tell a convincing lie (everyone can always tell when he's lying). Similarly, susceptible to seduction (the seducer gets a +40% bonus on this character) and intimidation (the intimidator gets a +30% bonus on this character). Cannot perform the skills Barter, Interrogation, Performance, Public Speaking, Seduction, and Undercover Ops.";
		text += "</p>";
	}
	
	notes.insertAdjacentHTML("beforeend", text);
}

function lowMA() {
	let text = "";
	if((Character.ma == 7) | (Character.ma == 6) | (Character.ma == 5)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>MA 5, 6, or 7</b></u><br>";
		text += "-10% to Barter, Find Contraband, Intelligence, Performance, Public Speaking, Seduction, and Sing, and -20% on Interrogation. Bonuses: +5% on Gambling, Prowl, Undercover Ops, and Surveillance (tends not to be noticed or remembered).";
		text += "</p>";
	}

	if((Character.ma == 4) | (Character.ma == 3)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>MA 3 or 4</b></u><br>";
		text += "-20% to Barter, Disguise, Find Contraband, Intelligence, Performance, Public Speaking, and Sing, -30% on Interrogation and Seduction.";
		text += "</p>";
	}

	if((Character.ma == 2) | (Character.ma == 1)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>MA 1 or 2</b></u><br>";
		text += "-20% to Barter, Disguise, Find Contraband, Intelligence, Performance, Public Speaking, and Sing, -30% on Interrogation and Seduction.";
		text += "</p>";
	}

	notes.insertAdjacentHTML("beforeend", text);
}

function lowIQ() {
	let text = "";
	if((Character.iq == 7) | (Character.iq == 8)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>IQ 7 or 8</b></u><br>";
		text += "Reduce the number of <i>O.C.C. Related Skills</i> by half, but add 1D4 skills to his initial set of Secondary Skills. This character still gets full benefit of skill bonuses, but probably doesn't care much for book learning or complex skills that require a lot of studying and details to remember. If that is the case, the character is likely to lean toward skills that rely on his hands and a strong back, including Domestic, Horsemanship, Mechanics, Physical, W.P.s, Wilderness and basic skills like Radio: Basic, Automotive Mechanics, Aircraft Mechanics, Basic Electronics, First Aid, General Repair, Pilot Truck, Pilot Hover Vehicle, Pick Pockets, Palming, etc. On the other hand, the character may choose to work hard to master one more complex and difficult skills in an effort to overcome his short falls. Natural talent is another explanation why this character may have one or more skills that would otherwise seem beyond his limited mental capabilities.";
		text += "</p>";
	}
	if((Character.iq == 5) | (Character.iq == 6)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>IQ 5 or 6</b></u><br>";
		text += "Reduce the number of <i>O.C.C. Skills</i> by four and reduce the number of <i>O.C.C. Related Skills</i> by half. Also reduce all skill bonuses by half. However, add 1D4+2 <i>Secondary Skills</i> to start. If the character can read or write, it is at a second or third grade level and complex skills are impossible to learn (i.e., could learn Basic Mechanics or Automotive Mechanics, but cannot learn Locksmith or Mechanical Engineer or even Aircraft Mechanics). The character is likely to lean toward simple skills, including Domestic, Horsemanship, Physical, W.P.s, and Wilderness, and avoid skills that require a lot of practice, study and details. May be sensitive about people who make fun of him or may be totally oblivious to them.";
		text += "</p>";
	}
	if((Character.iq == 3) | (Character.iq == 4)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>IQ 3 or 4</b></u><br>";
		text += "Reduce the number of <i>O.C.C. Skills</i> by half and the number of <i>O.C.C. Related Skills</i> to a total of 1D4 with no additional skills with level advancement. Only <i>O.C.C. Skills</i> get a bonus, reduced by half; <i>O.C.C. Related Skills</i> get no bonus. Add 1D4 <i>Secondary Skills</i> to start, +1 one new <i>Secondary Skill</i> at levels 3, 6, 10, and 15 (ignore whatever the O.C.C. description usually allows). The character cannot learn to read or write and it is impossible for him to learn anything but the most rudimentary of skills, mainly W.P.s, Domestic, Physical and Wilderness skills. Maybe sensitive about people who make fun of him or may be totally oblivious to it. Relates best to children.";
		text += "</p>";
	}
	if((Character.iq == 1) | (Character.iq == 2)) {
		text += "<p class=\"notesN\">";
		text += "<u><b>IQ 1 or 2</b></u><br>";
		text += "Can select only 1D4+1 <i>O.C.C. Skills</i>, no <i>O.C.C. Related Skills</i>, and only gets a total of 1D4 Secondary Skills with no additional skills gained through experience. None of the skills get any bonuses either, in fact, reduce the <i>Base Skill</i> proficiency and level advancement by half, and round down. That means if the <i>Base Skill</i> normally starts at 30% +5% per level of experience, this feeble character's skill starts at 15% +2% (rounded down) per level of experience. This character barely remembers his name, can only learn the simplest of skills (G.M.'s discretion) at a substandard level, and pretty much needs to be told what to do and led by the hand. Monster races and barbarians put such characters on a leash and treat them like animals.";
		text += "</p>";
	}
	
	notes.insertAdjacentHTML("beforeend", text);
}




