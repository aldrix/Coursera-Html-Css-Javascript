//Manejador de evento
document.addEventListener("DOMContentLoaded", 
	function (evento) {

		function decirHola (evento) {
			this.textContent = "Hecho!";

			var nombre  = document.getElementById("nombre").value;
			var mensaje = "<h2>Hola " + nombre + "!</h2>";

			//innerHTML interpreta el string como HTML
			document.getElementById("contenido").innerHTML = mensaje;

			if (nombre === "estudiante") {
				//textContent obtiene el string del trozo de html seleccionado
				var titulo = document.querySelector("#titulo").textContent;

				titulo += " y amor!";

				//querySelector en caso de tener multiples opciones toma la primera
				document.querySelector("h1").textContent = titulo;
			}
		}

		// Asociando evento al html sin incorporarlo en el html
		document.querySelector("button").addEventListener("click", decirHola);

		// Otra manera:
		// document.querySelector("button").onclick = decirHola;

		document.querySelector("body")
			.addEventListener("mousemove", 
				function (evento) {
					if (evento.shiftKey === true) {
						console.log("x: " + evento.clientX);
						console.log("y: " + evento.clientY);
					}
				}
			);
	}
);
