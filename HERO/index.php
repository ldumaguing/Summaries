<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	<script src="index.js"></script>


<div>
<table>
<tr>
<th>Char</th>
<th>Value</th>
<th>Cost</th>
</tr>
<tr><td>STR</td>
<td><input id="str" type="number" min="0" value="10" onchange="calcSTR();"></td><td id="strC">0</td></tr>
<tr><td>DEX</td>
<td><input id="dex" type="number" min="1" value="10"></td><td id="dexC">0</td></tr>
<tr><td>CON</td>
<td><input id="con" type="number" min="1" value="10"></td><td id="conC">0</td></tr>
<tr><td>INT</td>
<td><input id="int" type="number" min="1" value="10"></td><td id="intC">0</td></tr>
<tr><td>EGO</td>
<td><input id="ego" type="number" min="1" value="10"></td><td id="egoC">0</td></tr>
<tr><td>PRE</td>
<td><input id="pre" type="number" min="1" value="10"></td><td id="preC">0</td></tr>
<tr><td><br></td></tr>
<tr><td>OCV</td>
<td><input id="ocv" type="number" min="1" value="3"></td><td id="ocvC">0</td></tr>

<tr><td>DCV</td>
<td><input id="dcv" type="number" min="1" value="3"></td><td id="dcvC">0</td></tr>

<tr><td>OMCV</td>
<td><input id="omcv" type="number" min="1" value="3"></td><td id="omcvC">0</td></tr>

<tr><td>DMCV</td>
<td><input id="dmcv" type="number" min="1" value="3"></td><td id="dmcvC">0</td></tr>
<tr><td><br></td></tr>
<tr><td>PD</td>
<td><input id="pd" type="number" min="1" value="2"></td><td id="pdC">0</td></tr>

<tr><td>ED</td>
<td><input id="ed" type="number" min="1" value="2"></td><td id="edC">0</td></tr>
<tr><td><br></td></tr>
<tr><td>REC</td>
<td><input id="rec" type="number" min="1" value="4"></td><td id="recC">0</td></tr>

<tr><td>END</td>
<td><input id="end" type="number" min="1" value="20"></td><td id="endC">0</td></tr>
<tr><td><br></td></tr>
<tr><td>BODY</td>
<td><input id="BODY" type="number" min="1" value="10"></td><td id="bodyC">0</td></tr>

<tr><td>STUN</td>
<td><input id="stun" type="number" min="1" value="20"></td><td id="stunC">0</td></tr>
<tr><td><br></td></tr>
<tr><td>SPD</td>
<td><input id="spd" type="number" min="1" value="10"></td><td id="spdC">0</td></tr>
</table>
<br>
<table>
<tr>
<th>Meter</th>
<th>Mode</th>
<th>Cost</th>
</tr>
<tr>
<td>12</td><td>Running</td><td><input id="running" type="number" min="-12" value="0"></td>
</tr>
<tr>
<td>4</td><td>Swimming</td><td><input id="swimming" type="number" min="-2" value="0"></td>
</tr>
<tr>
<td>4</td><td>Leaping</td><td><input id="leaping" type="number" min="-2" value="0"></td>
</tr>
</table>



</div>










  </body>
</html>

