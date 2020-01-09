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

	// Por cada uno de ellos
	resultado.forEach(falla=>{
		
		// Creamos un <Div>
		
		let divFalla = document.createElement("div");

	    divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + falla.properties.nombre;
	    // Lo anyadimos
		listado.appendChild(divFalla);
		
	});
	
	// Establecemos el listado en la Web
	document.querySelector(".resultados").innerHTML="";
	document.querySelector(".resultados").appendChild(listado);
	console.log("Buscar");
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

		let listado = document.createElement("div");

		resultado.forEach(falla =>{

			if (secciones.includes(falla.properties.seccion) === false) secciones.push(falla.properties.seccion);
			if (secciones.includes(falla.properties.seccion_i) === false) secciones.push(falla.properties.seccion_i);
			
			let divFalla = document.createElement("div");

	    	divFalla.innerHTML = "<img src=" + falla.properties.boceto + "><br>" + falla.properties.nombre;
	    	// Lo anyadimos
			listado.appendChild(divFalla);
			
		});
		
		lanzarSeccion();
		document.querySelector(".resultados").innerHTML="";
		document.querySelector(".resultados").appendChild(listado);

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

// The mother of the lamb.
window.onload=init;
