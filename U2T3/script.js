function cambio(){
	var Texto = document.getElementById("texto1");
	var Dato1 = document.getElementById("nose").value;
	var Dato2 = document.getElementById("nose2").value;

	if(Dato1=="Andrew"&&Dato2=="12345"){
		Texto.innerHTML=Dato1;
	}else{
		Texto.innerHTML="No existe ese usuario, intenta con otras credenciales"
	}
	
}

function Fondo(){
	var V1 = document.getElementById("header");
	V1.style.background = "cyan"
}
