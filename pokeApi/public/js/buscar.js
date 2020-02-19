const pokeApi = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=897";
let arrayPokemon = [];
let arrayPokemonPro = [];


function buscar() {

  console.log(arrayPokemon[0]);
  document.querySelector(".resultados").innerHTML = "";
  let contador=1;
  arrayPokemon.filter(filtroLetra).forEach(pokemon => {

    let divGrande = document.getElementById("todo");

    let divPokemon = document.createElement("div");
    divPokemon.classList.add("pokemon");
    /*     console.log(pokemon.types[0].type.name); */
    divPokemon.style.backgroundColor = tipoColor(pokemon.types[0].type.name);

    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default)
    img.setAttribute("alt", "Es: "+pokemon.name);

    let h1 = document.createElement("h1");
    h1.tabIndex= contador;
    contador++;
    h1.innerHTML = pokemon.name + " #"+pokemon.order;
    
    
    let divInfo = document.createElement("div");
    divInfo.classList.add("informacion");
    
    let ataque = document.createElement("div");
    ataque.tabIndex= contador;
    contador++;
    ataque.innerHTML = "<h2>Moves</h2>" +
      "<p>" + pokemon.moves[0].move.name + "</p>" +
      "<p>" + pokemon.moves[1].move.name + "</p>" +
      "<p>" + pokemon.moves[2].move.name + "</p>";
   

    let otros = document.createElement("div");
    otros.tabIndex= contador;
    contador++;
    otros.innerHTML = "<h2>Type</h2>" +
      "<p>" + pokemon.types[0].type.name + "</p>" +
      "<h2> Experience </h2>" +
      "<p>" + pokemon.base_experience + "</p>";
  

    divPokemon.appendChild(img);
    divPokemon.appendChild(h1);
    divInfo.appendChild(ataque);
    divInfo.appendChild(otros);
    divPokemon.appendChild(divInfo);
    divGrande.appendChild(divPokemon);
  });

}

function promesaPokemon(url) {
  return fetch(url).then(res => res.json()).then(resp => {

    return resp;
  });

}

//lo utilizamos para elegir el fondo del div a traves del tipo del pokemon
function tipoColor(tipoPokemon) {

  switch (tipoPokemon) {
    case "bug":
      return "#a8b820";
    case "dark":
      return "#705848";
    case "dragon":
      return "#7038f8";
    case "electric":
      return "#f8d030";
    case "fairy":
      return "#f0b6bc";
    case "fighting":
      return "#c03028";
    case "fire":
      return "#f08030";
    case "flying":
      return "#a890f0";
    case "ghost":
      return "#705898";
    case "grass":
      return "#78c850";
    case "ground":
      return "#e0c068";
    case "ice":
      return "#98d8d8";
    case "normal":
      return "#a8a878";
    case "poison":
      return "#a040a0";
    case "psychic":
      return "#f85888";
    case "rock":
      return "#b8a038";
    case "steel":
      return "#b8b8d0";
    case "water":
      return "#6890f0";
  }

}

function init() {

  console.log("iniciado");
  // Click en el boton de buscar
  document.querySelector(`input[type="button"]`).addEventListener("click", buscar);

  //hacemos un fetch para coger la url de cada uno de los pokemons
  const fetchPromesa = fetch(pokeApi);
  fetchPromesa.then(response => {
    return response.json();
  }).then(respuesta => {
    //creamos una array de promesas 
    respuesta.results.forEach(pokemon => {
      arrayPokemonPro.push(promesaPokemon(pokemon.url));

    });

    // a traves del promise.all llenamos el array con los objetos de pokemons
    Promise.all(arrayPokemonPro).then(pokemon => {
      /* console.log(pokemon); */
      arrayPokemon.push(...pokemon);
      
      document.getElementById("cargando").style.display = "none" ;
      
    });

    /*    console.log(respuesta);
       let resultados = respuesta.results;  
       resultados.forEach( elemento =>{
        /*  console.log(elemento.url); 
         //por cada una de las urls hacemos un fetch por cada una de las urls para añadir el pokemon a una array.
         const fetchPromesa = fetch(elemento.url);
         fetchPromesa.then(response => {
           return response.json();
         }).then(respuesta =>{
         
           console.log(respuesta);
           arrayPokemon.push(respuesta);

         });
       });*/


  });

}

//esta funcion la utilizamos para poder filtrar a traves del input, cualquier pokemon de la array.
function filtroLetra(elemento){
  let letra = document.querySelector(`input[name="nombre"]`).value;
  return elemento.name.includes(letra);
}

window.onload = init;