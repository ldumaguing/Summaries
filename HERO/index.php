<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Character</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body onload="reset();">
	<script src="index.js"></script>


<div>
<table>
<tr>
<th>Char</th>
<th>Value</th>
<th>Cost</th>
<th>Rank</th>
<th>Notes</th>
</tr>
<tr><td>STR</td>
<td><input id="str" type="number" min="1" value="10" onchange="calcSTR();"></td><td id="strC">0</td>
<td id="strR">Average</td>
<td>Lift 100 kg (220 lbs); 2d HTH damage [1]</td>
</tr>




<tr><td>DEX</td>
<td><input id="dex" type="number" min="1" value="10" onchange="calcDEX();"></td><td id="dexC">0</td>
<td id="dexR">Average</td></tr>
<tr><td>CON</td>
<td><input id="con" type="number" min="1" value="10" onchange="calcCON();"></td><td id="conC">0</td>
<td id="conR">Average</td></tr>
<tr><td>INT</td>
<td><input id="int" type="number" min="1" value="10" onchange="calcINT();"></td><td id="intC">0</td>
<td id="intR">Average</td></tr>
<tr><td>EGO</td>
<td><input id="ego" type="number" min="1" value="10" onchange="calcEGO();"></td><td id="egoC">0</td>
<td id="egoR">Average</td></tr>
<tr><td>PRE</td>
<td><input id="pre" type="number" min="1" value="10" onchange="calcPRE();"></td><td id="preC">0</td>
<td id="preR">Average</td></tr>

<tr><td><br></td></tr>
<tr><td>OCV</td>
<td><input id="ocv" type="number" min="1" value="3" onchange="calcOCV();"></td><td id="ocvC">0</td>
<td id="ocvR">Average</td>
</tr>
<tr><td>DCV</td>
<td><input id="dcv" type="number" min="1" value="3" onchange="calcDCV();"></td><td id="dcvC">0</td>
<td id="dcvR">Average</td>
</tr>
<tr><td>OMCV</td>
<td><input id="omcv" type="number" min="1" value="3" onchange="calcOMCV();"></td><td id="omcvC">0</td>
<td id="omcvR">Average</td>
</tr>
<tr><td>DMCV</td>
<td><input id="dmcv" type="number" min="1" value="3" onchange="calcDMCV();"></td><td id="dmcvC">0</td>
<td id="dmcvR">Average</td>
</tr>

<tr><td><br></td></tr>
<tr><td>PD</td>
<td><input id="pd" type="number" min="0" value="2" onchange="calcPD();"></td><td id="pdC">0</td>
<td id="pdR">Challenged</td>
</tr>
<tr><td>ED</td>
<td><input id="ed" type="number" min="0" value="2" onchange="calcED();"></td><td id="edC">0</td>
<td id="edR">Challenged</td>
</tr>

<tr><td><br></td></tr>
<tr><td>REC</td>
<td><input id="rec" type="number" min="1" value="4" onchange="calcREC();"></td><td id="recC">0</td>
<td id="recR">Average</td>
</tr>
<tr><td>END</td>
<td><input id="end" type="number" min="1" value="20" onchange="calcEND();"></td><td id="endC">0</td>
<td id="endR">Average</td>
</tr>

<tr><td><br></td></tr>
<tr><td>BODY</td>
<td><input id="body" type="number" min="1" value="10" onchange="calcBODY();"></td><td id="bodyC">0</td>
<td id="bodyR">Average</td>
</tr>
<tr><td>STUN</td>
<td><input id="stun" type="number" min="1" value="20" onchange="calcSTUN();"></td><td id="stunC">0</td>
<td id="stunR">Average</td>
</tr>

<tr><td><br></td></tr>
<tr><td>SPD</td>
<td><input id="spd" type="number" min="1" value="2" onchange="calcSPD();"></td><td id="spdC">0</td>
<td id="spdR">Average</td>
</tr>
</table>

<br>
<table>
<tr>
<th>Mode</th>
<th>Meters</th>
<th>Yards</th>
<th>Cost</th>
<th>Rank</th>
</tr>

<tr>
<td>Running</td>
<td><input id="running" type="number" min="0" value="12" onchange="calcRUN();"></td>
<td id="runningY">13</td>
<td id="runningC">0</td>
<td id="runningR">Average</td>
</tr>

<tr>
<td>Swimming</td>
<td><input id="swimming" type="number" min="0" value="4" onchange="calcSWIM();"></td>
<td id="swimmingY">4</td>
<td id="swimmingC">0</td>
<td id="swimmingR">Average</td>
</tr>

<tr>
<td>Leaping</td>
<td><input id="leaping" type="number" min="0" value="4" onchange="calcLEAP();"></td>
<td id="leapingY">4</td>
<td id="leapingC">0</td>
<td id="leapingR">Average</td>
</tr>
</table>
</div>
<br>
<div>

<button type="button" onclick="calculate();">Calculate Cost</button>
<b><span id="cost">0</span> points</b>
</div>









  </body>
</html>

