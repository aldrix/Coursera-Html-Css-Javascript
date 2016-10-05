//Manejador de evento
document.addEventListener("DOMContentLoaded",
	function(evento) {

		//Evento asociado al html
		document.querySelector("button")
			.addEventListener("click", function () {

				//Llamada al servidor
				$ajaxUtils.enviarPeticion("/data/name.txt", 
					function (peticion) {
						var nombre = peticion.responseText;

						document.querySelector("#contenido")
							.innerHTML = "<h2>Hello " + nombre + "!</h2>";
					});
			});
	}
);