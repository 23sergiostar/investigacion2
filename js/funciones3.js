function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="rojito")
		{document.getElementById("parrafo_lorem").className="verde";}
	else
		{document.getElementById("parrafo_lorem").className="rojito";}
	
}