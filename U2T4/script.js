function hola(){
	var correo = document.getElementById("ingatu@gmail.com").value;
	var pass = document.getElementById("123456").value;
	var check = document.getElementById("excheck")value;
	alert(correo);
	alert(pass);
	alert(check);
}
function crear(){
	var te=document.getElementById("texto");
	var H1=document.getElementById("h1");
	H1.href="https://google.com";
	te.appendChild(H1);
}

var Nombre = "roxy"

function poner(){
	var t = document.getElementById("lista");
	for(let i = 0; i < arreglo.length; i++)
	{
		var li = document.createElement("li");
		li.innerHTML = json[i].raza;
		t.appendChild(li);
	}
}