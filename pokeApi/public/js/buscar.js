const pokeApi = "";


function buscar(){

  const fetchPromesa = fetch(pokeApi);

  // Cuando se resuelva la promesa
  fetchPromesa.then(response => {
  // la pasamos a JSON
  return response.json();
  // Y entonces
  
  }).then(respuesta =>{
  // Filtramos los resultados con el filtro definido anteriormente

    console.log(respuesta.features[1].properties);
    const resultado=respuesta.features.filter(filtroLetra);

    // Una vez tenemos el listado filtrado pasamos a crear
    // cada uno de los <li> que representan
    let listado=document.createElement("ul");

    // Por cada uno de ellos 
    resultado.forEach(fuente=>{
    // Creamos un <li>
    let calleli=document.createElement("li");
    calleli.innerHTML=fuente.properties.calle+" -- ["+fuente.geometry.coordinates+"]";
    // Lo anyadimos
    listado.appendChild(calleli);	    
    });

  document.querySelector(".resultados").innerHTML="";
  document.querySelector(".resultados").appendChild(listado);
  });
}


function init(){

  console.log("iniciado");
  // Click en el boton de buscar
  document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
  // Texto cambia en el <input>
  document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);

}

function toUpp(){

  document.querySelector(`input[name="nombre"]`).value = document.querySelector(`input[name="nombre"]`).value.toUpperCase();

}

window.onload=init;
