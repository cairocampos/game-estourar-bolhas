function start(){
	setInterval(load, 1000);
}

function load()
{
	var bolha = document.createElement("div");
	bolha.setAttribute("class", "bolha");
	bolha.setAttribute("onclick", "estourar(this)");

	var pos1 = Math.floor(Math.random() * 800);
	var pos2 = Math.floor(Math.random() * 500);

	bolha.style.marginLeft = pos1 + "px";
	bolha.style.marginTop = pos2 + "px";

	document.body.appendChild(bolha);
}

function estourar(obj)
{
	var elemento = obj.parentNode;
	elemento.removeChild(obj);
}