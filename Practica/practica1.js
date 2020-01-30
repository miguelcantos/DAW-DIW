


function buscar(){
    let angel = "aberlanas";
    let usuario = document.getElementById("usuario").value;
    const fetchPromesa = fetch("https://api.chess.com/pub/player/"+angel+"/games");
    

      fetchPromesa.then(response => {

        return response.json();

      }).then(respuesta =>{

        const juego = respuesta.games
        let listado = document.createElement("div");
        let codigo = "";
        juego.forEach( game =>{
            
            let div = document.createElement("div");
            let blancas = game.white;
            let negras = game.black;
            codigo += "<p> White : "+blancas.slice(33, blancas.lenght) +"</p><br><p>Black : "+ negras.slice(33, negras.lenght)+"</p>";
            if(game.rated == false){
				codigo +="<input type=\"radio\" > Ranked <br>";
            }else{
                codigo += "<input type=\"radio\" checked> Ranked <br>";
            }
            codigo += "<p>--------------------------------------</p>"
            div.innerHTML = codigo;
            console.log(game);
            listado.appendChild(div);
            codigo = "";
      
      });
      document.querySelector(".resultados").innerHTML="";
      document.querySelector(".resultados").appendChild(listado);
  
      });
}

function init(){
    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
}

window.onload= init;