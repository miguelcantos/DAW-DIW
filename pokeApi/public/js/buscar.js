const pokeApi = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";
let arrayPokemon = [];
let arrayPokemonPro = [];


function buscar(){
  console.log(arrayPokemon[0]);

  arrayPokemon.forEach( pokemon =>{

    let divGrande = document.getElementById("todo");

    let divPokemon = document.createElement("div");
    divPokemon.classList.add("pokemon");

    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default)

    let p = document.createElement("p");
    p.innerHTML = pokemon.name;

    divPokemon.appendChild(img);
    divPokemon.appendChild(p);
    divGrande.appendChild(divPokemon);
  });

}

function promesaPokemon(url){
  return fetch(url).then(res => res.json()).then(resp => {

    return resp;
  });

}


function init(){

  console.log("iniciado");
  // Click en el boton de buscar
  document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
  // Texto cambia en el <input>
  document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);

  //hacemos un fetch para coger la url de cada uno de los pokemons
  const fetchPromesa = fetch(pokeApi);
  fetchPromesa.then(response => {
  return response.json();
  }).then(respuesta =>{

      respuesta.results.forEach(pokemon => {
        arrayPokemonPro.push(promesaPokemon(pokemon.url));

      });

      Promise.all(arrayPokemonPro).then(pokemon =>{
/*         console.log(pokemon); */
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

function toUpp(){

  document.querySelector(`input[name="nombre"]`).value = document.querySelector(`input[name="nombre"]`).value.toUpperCase();

}

window.onload=init;
