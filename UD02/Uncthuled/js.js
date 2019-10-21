
mapa =[[3,3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0]];

window.onload=function(){
    listo();

}

function listo(){
  crearMapa();

}

function crearMapa(){
document.querySelector(".mapa").innerHTML = "";
for (var i=0;i<14;i++){
    for (var j=0;j<21;j++){
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
            moverteArriba();
            break;

        case 40:
            moverteAbajo();
            break;

        case 39:
            moverteDerecha();
            break;

        case 37:
            moverteIzquierda();
            break;
    }

}
/*
moverteAbajo(){

}

moverteArriba(){

}

moverteDerecha(){

}

moverteIzquierda(){

}
*/
