// Algunos valores

const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

//array de secciones
var secciones = new Array;

/*
function filtroLetra(elemento){
    let letra = document.querySelector(`input[name="nombre"]`).value;
    return elemento.properties.nombre.startsWith(letra);
}

function toUpp() {
	document.querySelector(`input[name="nombre"]`).value = document.querySelector(`input[name="nombre"]`).value.toUpperCase();
} */

function buscar(){
  console.log("buscar");
    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
	// la pasamos a JSON
	return response.json();
	// Y entonces
    }).then(respuesta =>{
	// Filtramos los resultados con el filtro definido anteriormente
	//const resultado = respuesta.features.filter(filtroLetra);
	const resultado = respuesta.features
	// Una vez tenemos el listado filtrado pasamos a crear
	// cada uno de los <Div> que representan

	let listado = document.createElement("div");
	listado.classList.add("celdas");
  let checked = document.getElementById("principal").checked;

	// Por cada uno de ellos
	resultado.forEach(falla=>{

    
    let secciones = document.getElementById("seleccionSec");
    let anoMax = document.getElementById("anoMax").value;
    let anoMin = document.getElementById("anoMin").value;
		// Creamos un <Div>
    if(secciones.value =="Todas"){
      if(checked){
        // solo funciona si los dos campos estan vacios o los dos campos estan llenos
        if(anoMax == 0 && anoMin == 0){
          let divFalla = document.createElement("div");
          divFalla.classList.add("individual");
          divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + "<p>" + falla.properties.nombre + "</p>" ;

            // Lo anyadimos
            let ubicacion = document.createElement("button");
				    ubicacion.innerText = "UBICACIÓN";
				    ubicacion.onclick = function () { buscarUbicacion(falla.geometry.coordinates); };
				    ubicacion.classList.add("boton");
				    divFalla.appendChild(ubicacion);
            listado.appendChild(divFalla);
  
        // solo funciona si los dos campos estan vacios o los dos campos estan llenos
         }else if((falla.properties.anyo_fundacion >= anoMin) && (falla.properties.anyo_fundacion <= anoMax) ){
           let divFalla = document.createElement("div");
           divFalla.classList.add("individual");
           divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
             // Lo anyadimos
             listado.appendChild(divFalla);
         }
      }else{
        // solo funciona si los dos campos estan vacios o los dos campos estan llenos
        if(anoMax == 0 && anoMin == 0){
          let divFalla = document.createElement("div");
          divFalla.classList.add("individual");
          divFalla.innerHTML = "<img src=" + falla.properties.boceto_i + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
            // Lo anyadimos
            listado.appendChild(divFalla);
         }else if((falla.properties.anyo_fundacion_i >= anoMin) && (falla.properties.anyo_fundacion_i <= anoMax) ){
           let divFalla = document.createElement("div");
           divFalla.classList.add("individual");
           divFalla.innerHTML = "<img src=" + falla.properties.boceto_i + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
             // Lo anyadimos
             listado.appendChild(divFalla);
         }
      }

    } else if( falla.properties.seccion == secciones.value){
      if(checked){
        // solo funciona si los dos campos estan vacios o los dos campos estan llenos
        if(anoMax == 0 && anoMin == 0){
          let divFalla = document.createElement("div");
          divFalla.classList.add("individual");
          divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
            // Lo anyadimos
            listado.appendChild(divFalla);
         }else if((falla.properties.anyo_fundacion >= anoMin) && (falla.properties.anyo_fundacion <= anoMax) ){
           let divFalla = document.createElement("div");
           divFalla.classList.add("individual");
           divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
             // Lo anyadimos
             listado.appendChild(divFalla);
         }
      }else{
        // solo funciona si los dos campos estan vacios o los dos campos estan llenos
        if(anoMax == 0 && anoMin == 0){
          let divFalla = document.createElement("div");
          divFalla.classList.add("individual");
          divFalla.innerHTML = "<img src=" + falla.properties.boceto_i + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
            // Lo anyadimos
            listado.appendChild(divFalla);
         }else if((falla.properties.anyo_fundacion_i >= anoMin) && (falla.properties.anyo_fundacion_i <= anoMax) ){
           let divFalla = document.createElement("div");
           divFalla.classList.add("individual");
           divFalla.innerHTML = "<img src=" + falla.properties.boceto_i + "><br>" + "<p>" + falla.properties.nombre + "</p>" + "<input type=\"button\" value=\"UBICACIÓN\"></input>";
             // Lo anyadimos
             listado.appendChild(divFalla);
         }
      }

    }


	});

	// Establecemos el listado en la Web
	document.querySelector(".resultados").innerHTML="";
	document.querySelector(".resultados").appendChild(listado);
    });

}

function init(){

    // Binding de los eventos correspondientes.
    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);

	const fetchPromesa = fetch(fuentesUrl);

	fetchPromesa.then(response => {
		return response.json();
	}).then(respuesta =>{
		const resultado = respuesta.features;

		resultado.forEach(falla =>{

			if (!secciones.includes(falla.properties.seccion)) secciones.push(falla.properties.seccion);
			if (!secciones.includes(falla.properties.seccion_i)) secciones.push(falla.properties.seccion_i);

		});
		lanzarSeccion();

	});

}

function lanzarSeccion() {
	let desSeccion = document.getElementById("seleccionSec");

	for (let index = 0; index < secciones.length; index++) {
		var option = document.createElement("option");
		option.text = secciones[index];
		desSeccion.add(option);

	}
}

function buscarUbicacion(coordenadas) {

	mapa = document.getElementById('ubi');
	mapa.style.visibility = 'visible';

	let coordenadasMapa = getWGSCoordinates(coordenadas);

	var map = L.map('ubi').setView([coordenadasMapa[0], coordenadasMapa[1]], 15);
	/* mapa.addEventListener('focusout', function () {
		mapa.style.visibility = 'hidden';
		map.off();
		map.remove();

	padreMapa = document.getElementById('ubi').parentNode;
	padreMapa.removeChild(mapa);

	var newMapa = document.createElement("div");
	newMapa.setAttribute("id", "ubi");
	padreMapa.appendChild(newMapa);
	
	}); */


	let tilerMapUrl = 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FeZF25xvZUuP463NS59g';
	L.tileLayer(tilerMapUrl, {
		attribution: 'Map data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, Imagery © <a href="http://www.kartena.se/">Kartena</a>',
	}).addTo(map);

	mapa.focus();
}

function getWGSCoordinates(coordenadas) {

	let firstProjection = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';
	let secondProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
	coordenadas = proj4(firstProjection, secondProjection, coordenadas);

	return [coordenadas[1], coordenadas[0]];
}

// The mother of the lamb.
window.onload=init;
