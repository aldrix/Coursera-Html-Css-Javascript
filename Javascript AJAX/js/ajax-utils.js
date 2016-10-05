(function (global) {

//Establecemos un namespace por facilidad
var ajaxUtils = {};

//Devuelve una solicitud de objeto a traves de HTTP
function obtenerObjetoSolicitado() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  }
  else if (window.ActiveXObject) {
    //Para los exploradores viejos IE (opcional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  }
  else {
    global.alert("Ajax no es soportado!");
    return(null);
  }
}

//Hacemos una peticion GET usando Ajax
ajaxUtils.enviarPeticion = 
  function(url, manejadorRespuesta) {
    var peticion = obtenerObjetoSolicitado();

    //onreadystatechange almacen una funcion (o el nombre una funcion) 
    //a ser llamada automaticamente cada vez que readyState cambie.
    //
    //status: 200: "OK", 404: Page not found
    //
    //readyState mantiene el estado de XMLHttpRequest. 
    //Va de 0 a 4 sus valores:
    //  0: no se inicializo la peticion.
    //  1: se establecio conexion con el servidor.
    //  2: peticion recibida.
    //  3: procesando peticion.
    //  4: peticion finalizada y la respuesta esta disponible.
  
    peticion.onreadystatechange = 
      function() {
        manejaRespuesta(peticion, manejadorRespuesta);
      };
    peticion.open("GET", url, true);
    //En caso de que se requiera autorizacion
    //client.setRequestHeader("Authorization","string que autoriza el acceso");
    peticion.send(null); //Solo se incluyen valores para POST
  };

//Se ejecuta solo si la respuesta esta disponible y no hay error
function manejaRespuesta(peticion, manejadorRespuesta) {
  if ((peticion.readyState == 4) && (peticion.status == 200)) {
    manejadorRespuesta(peticion);
  }
}

//Exponemos el namespace al alcance global
global.$ajaxUtils = ajaxUtils;

})(window);