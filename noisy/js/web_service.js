
var xdr = new XMLHttpRequest(); 

xdr.onload = function() {
	alert(xdr.responseText);
}

xdr.open("GET", "http://musik.dev-indelebil.com/getArtists");
xdr.send();