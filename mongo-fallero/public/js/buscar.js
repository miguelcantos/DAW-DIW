// Algunos valores

const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento){
    let letra=document.querySelector(`input[name="nombre"]`).value;
    return elemento.properties.calle.startsWith(letra);
}

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
	const resultado=respuesta.features.filter(filtroLetra);

	// Una vez tenemos el listado filtrado pasamos a crear
	// cada uno de los <Div> que representan
	let listado = document.createElement("div");

	// Por cada uno de ellos
	resultado.forEach(fuente=>{
	    // Creamos un <Div>
	    let divFalla = document.createElement("div");
	    divFalla.innerHTML = "<img src=" + divFalla.properties.boceto + ">" + divFalla.properties.nombre;
	    // Lo anyadimos
	    listado.appendChild(falla);
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
    // Texto cambia en el <input>
    document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);
}

// The mother of the lamb.
window.onload=init;
