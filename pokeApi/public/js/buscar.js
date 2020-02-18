const pokeApi = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=897";
let arrayPokemon = [];
let arrayPokemonPro = [];


function buscar() {
  console.log(arrayPokemon[0]);
  document.querySelector(".resultados").innerHTML = "";

  arrayPokemon.forEach(pokemon => {

    let divGrande = document.getElementById("todo");

    let divPokemon = document.createElement("div");
    divPokemon.classList.add("pokemon");
    /*     console.log(pokemon.types[0].type.name); */
    divPokemon.style.backgroundColor = tipoColor(pokemon.types[0].type.name);

    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default)

    let p = document.createElement("p");
    p.innerHTML = pokemon.name;

    let ataque = document.createElement("div");
    ataque.innerHTML = "<p>Moves<p>" +
      "<p>" + pokemon.moves[0].move.name + "<p>" +
      "<p>" + pokemon.moves[1].move.name + "<p>" +
      "<p>" + pokemon.moves[2].move.name + "<p>";

    let otros = document.createElement("div");
    otros.innerHTML = "<p>Type<p>" +
      "<p>" + pokemon.types[0].type.name + "<p>" +
      "<p> Experience <p>" +
      "<p>" + pokemon.base_experience + "<p>";

    divPokemon.appendChild(img);
    divPokemon.appendChild(p);
    divPokemon.appendChild(ataque);
    divPokemon.appendChild(otros);
    divGrande.appendChild(divPokemon);
  });

}

function promesaPokemon(url) {
  return fetch(url).then(res => res.json()).then(resp => {

    return resp;
  });

}

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
  // Texto cambia en el <input>
  document.querySelector(`input[type="text"]`).addEventListener("input", toUpp);

  //hacemos un fetch para coger la url de cada uno de los pokemons
  const fetchPromesa = fetch(pokeApi);
  fetchPromesa.then(response => {
    return response.json();
  }).then(respuesta => {

    respuesta.results.forEach(pokemon => {
      arrayPokemonPro.push(promesaPokemon(pokemon.url));

    });

    Promise.all(arrayPokemonPro).then(pokemon => {
      /* console.log(pokemon); */
      arrayPokemon.push(...pokemon);

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

function toUpp() {

  document.querySelector(`input[name="nombre"]`).value = document.querySelector(`input[name="nombre"]`).value.toUpperCase();

}

window.onload = init;