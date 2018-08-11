!DOCTYPE html>
<html>
  <head>
    <title> scintific calculator </title>
	<link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="container" align=center >
	<div class="resultbar"><form name="calci"><input type="text" name="show"id="scn" size="40" height="30" readonly maxlength='45'></form></div>
	<div class="buttons">
	    <p>
	     <input type="button" value="&radic;" class="button silver" onclick="calci.show.value=Math.sqrt(calci.show.value)">
		 <input type="button" value="x^2" class="button silver" onclick="calci.show.value=Math.pow(calci.show.value,2)">
		 <input type="button" value="^" class="button silver" onclick="calci.show.value=Math.pow(calci.show.value,calci.show.value)">
		 <input type="button" value="LOG" class="button silver" onclick="calci.show.value=Math.log(calci.show.value)">
		 <input type="button" value="IN" class="button silver" onclick="calci.show.value=Math.E">
	   </p>
	    <p>
	     <input type="button" value="(" class="button silver" onclick="calci.show.value+='('">
		 <input type="button" value=")" class="button silver" onclick="calci.show.value+=')'">
		 <input type="button" value="SIN" class="button silver" onclick="calci.show.value=Math.sin(calci.show.value)">
		<input type="button" value="COS" class="button silver" onclick="calci.show.value=Math.cos(calci.show.value)">
		<input type="button" value="TAN" class="button silver" onclick="calci.show.value=Math.tan(calci.show.value)">
	   </p>
	    <p>
	     <input type="button" value="7" class="button silver" onclick="calci.show.value+='7'">
		 <input type="button" value="8" class="button silver" onclick="calci.show.value+='8'">
		 <input type="button" value="9" class="button silver" onclick="calci.show.value+='9'">
		 <input type="button" value="DEL" class="button red" onclick="calci.show.value=calci.show.value.substring(0,calci.show.value.length-1)">
		 <input type="button" value="CLR" class="button red" onclick="calci.show.value=''">
		 </p>
	    <p>
	     <input type="button" value="4" class="button silver" onclick="calci.show.value+='4'">
		 <input type="button" value="5" class="button silver" onclick="calci.show.value+='5'">
		 <input type="button" value="6" class="button silver" onclick="calci.show.value+='6'">
		 <input type="button" value="x" class="button silver" onclick="calci.show.value+='*'">
		 <input type="button" value="/" class="button silver" onclick="calci.show.value+='/'">
	   </p>
	    <p>
	     <input type="button" value="1" class="button silver" onclick="calci.show.value+='1'">
		 <input type="button" value="2" class="button silver" onclick="calci.show.value+='2'">
		 <input type="button" value="3" class="button silver" onclick="calci.show.value+='3'">
		 <input type="button" value="+" class="button silver" onclick="calci.show.value+='+'">
		 <input type="button" value="-" class="button silver" onclick="calci.show.value+='-'">
	   </p>
	   <p>
	     <input type="button" value="0" class="button silver" onclick="calci.show.value+='0'">
		 <input type="button" value="." class="button silver" onclick="calci.show.value+='.'">
		 <input type="button" value="EXP" class="button silver" onclick="calci.show.value+=Math.exp(calci.show.value)">
		 <input type="button" value="MOD" class="button silver" onclick="calci.show.value+='%'">
		 <input type="button" value="=" class="button silver" onclick="calci.show.value=eval(calci.show.value)">
	   </p>
	</div>
    </div>	
  </body>
</html>
