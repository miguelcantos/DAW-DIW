var PersonajeX = 0;
var PersonajeY = 5;
mapa =[[3,3,3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
       [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,3],
       [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,3],
       [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]];

window.onload=function(){
    listo();

}

function listo(){
  crearMapa();
  
}

function crearMapa(){
document.querySelector(".mapa").innerHTML = "";
for (var i=0;i<15;i++){
    for (var j=0;j<23;j++){
        var newDiv = document.createElement("div");

        if(mapa[i][j]==3){
            newDiv.classList.add("piedra");
            mapa[i][j] = newDiv;

        }else if(mapa[i][j]==2){
            newDiv.classList.add("wazowski");
            mapa[i][j] = newDiv;

        }else if (mapa[i][j]==0){
            newDiv.classList.add("camino");
            mapa[i][j] = newDiv;

        }else if(mapa[i][j]==4){
            newDiv.classList.add("sullivan");
            mapa[i][j] = newDiv;

        }else{
            newDiv.classList.add("bloque");
            mapa[i][j] = newDiv;

        }

        document.querySelector(".mapa").appendChild(newDiv);
    }
}

}


function moverte(tecla){

    var key = tecla.keyCode;

    switch (tecla) {
        case 38:
            moverArriba();
            break;

        case 40:
            moverAbajo();
            break;

        case 39:
            moverDerecha();
            break;

        case 37:
            moverIzquierda();
            break;
    }

}


function moverAbajo(){
  console.log("Abajo");
  if(mapa[PersonajeX+1][PersonajeY] != 1){
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski","huellas");
    PersonajeX++;
    mapa[PersonajeX][PersonajeY].classList.replace("camino","wazowski");
  }
}

function moverArriba(){
  console.log("Arriba");
  if(mapa[PersonajeX-1][PersonajeY] != 1){
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski","huellas");
    PersonajeX--;
    mapa[PersonajeX][PersonajeY].classList.replace("camino","wazowski");
  }
}

function moverDerecha(){
  console.log("Derecha");
  if(mapa[PersonajeX1][PersonajeY+1] != 1){
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski","huellas");
    PersonajeY++;
    mapa[PersonajeX][PersonajeY].classList.replace("camino","wazowski");
  }
}

function moverIzquierda(){
  console.log("Izquierda");
  if(mapa[PersonajeX][PersonajeY-1] != 1){
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski","huellas");
    PersonajeY--;
    mapa[PersonajeX][PersonajeY].classList.replace("camino","wazowski");
  }
}
