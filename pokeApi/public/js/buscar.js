const pokeApi = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
let arrayPokemon = [];

function buscar(){


}


function init(){

  console.log("iniciado");
  // Click en el boton de buscar
  document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
  // Texto cambia en el <input>
  document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);

  const fetchPromesa = fetch(pokeApi);

  // Cuando se resuelva la promesa
  fetchPromesa.then(response => {
  // la pasamos a JSON
  return response.json();
  // Y entonces

  }).then(respuesta =>{
  // Filtramos los resultados con el filtro definido anteriormente

    const resultado = respuesta.features.filter(filtroLetra);
    arrayPokemon.push(resultado);
    console.log(resultado);
  });
}

function toUpp(){

  document.querySelector(`input[name="nombre"]`).value = document.querySelector(`input[name="nombre"]`).value.toUpperCase();

}

window.onload=init;
