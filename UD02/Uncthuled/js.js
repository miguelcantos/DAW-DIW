  //listado para los bloques
  var lista =[1,1,1,2,1,1,1,1,3,1,1,1,4,1,1,1,5,1,1,1]
   //inicialización de la posicion del personaje.
    var PersonajeX = 0;
    var PersonajeY = 4;
    var momiaX = 13;
    var momiaY = 16; 
    //Este es la matriz para crear el mapa llena de numeros que cada uno se llena con un div diferente.
    mapa = [[3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];

    //funcion para lanzar nada mas se abre la pagina.
    window.onload = function () {
      listo();
    }

    function listo() {
      crearMapa();
      document.addEventListener('keydown', moverte);
      setInterval(moverMomia,150);
    }

    /*Funcion para cear el pava con divs y sus respectivas clases a traves de los diferentes numeros de la matriz.
      3 = camino de fuera, como si fuera el muro
      2 = Personaje protagonista
      0 = Camino accesible
      4 = Personaje malo  
    */
    function crearMapa() {
      document.querySelector(".mapa").innerHTML = "";
      for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 23; j++) {
          var newDiv = document.createElement("div");

          if (mapa[i][j] == 3) {
            newDiv.classList.add("piedra");
            mapa[i][j] = newDiv;

          } else if (mapa[i][j] == 2) {
            newDiv.classList.add("camino");
            newDiv.classList.add("wazowski");
            mapa[i][j] = newDiv;

          } else if (mapa[i][j] == 0) {
            newDiv.classList.add("camino");
            mapa[i][j] = newDiv;

          } else if (mapa[i][j] == 4) {
            newDiv.classList.add("camino");
            newDiv.classList.add("randal");
            mapa[i][j] = newDiv;

          } else {
            newDiv.classList.add("bloque");
            newDiv.classList.add("principio");
            mapa[i][j] = newDiv;

          }

          document.querySelector(".mapa").appendChild(newDiv);
        }
      }

    }

    //funcion para reconocer llas fechas del teclado y lanzar el metodo correspondiente a la dirreccion.
    function moverte(tecla) {

      var key = tecla.keyCode;

      switch (key) {
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

    //Metodo para mover el personaje a la direccion elegida, compara que solo se pueda mover por el camino y no traspase los bloques.
    function moverAbajo() {
      console.log("Abajo");

      if (mapa[PersonajeX + 1][PersonajeY].classList.value.includes("huellas")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeX++;
        mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

      } else if (mapa[PersonajeX + 1][PersonajeY].classList.value.includes("camino")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeX++;
        mapa[PersonajeX][PersonajeY].classList.add("wazowski");

      } else {
        console.log("muro");
      }
      marcar();
      comprobarBloque();
      comprobarFinal();
    }

    //Metodo para mover el personaje a la direccion elegida, compara que solo se pueda mover por el camino y no traspase los bloques.
    function moverArriba() {
      console.log("Arriba");

      if (mapa[PersonajeX - 1][PersonajeY].classList.value.includes("huellas")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeX--;
        mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

      } else if (mapa[PersonajeX - 1][PersonajeY].classList.value.includes("camino")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeX--;
        mapa[PersonajeX][PersonajeY].classList.add("wazowski");

      } else {
        console.log("muro");
      }
      marcar();
      comprobarBloque();
      comprobarFinal();
    }

    //Metodo para mover el personaje a la direccion elegida, compara que solo se pueda mover por el camino y no traspase los bloques.
    function moverDerecha() {
      console.log("Derecha");


      if (mapa[PersonajeX][PersonajeY + 1].classList.value.includes("huellas")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeY++;
        mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

      } else if (mapa[PersonajeX][PersonajeY + 1].classList.value.includes("camino")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeY++;
        mapa[PersonajeX][PersonajeY].classList.add("wazowski");

      } else {
        console.log("muro");
      }
      marcar();
      comprobarBloque();
      comprobarFinal();
    }

    //Metodo para mover el personaje a la direccion elegida, compara que solo se pueda mover por el camino y no traspase los bloques.
    function moverIzquierda() {
      console.log("Izquierda");

      if (mapa[PersonajeX][PersonajeY - 1].classList.value.includes("huellas")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeY--;
        mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

      } else if (mapa[PersonajeX][PersonajeY - 1].classList.value.includes("camino")) {
        mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
        PersonajeY--;
        mapa[PersonajeX][PersonajeY].classList.add("wazowski");

      } else {
        console.log("muro");
      }
      marcar();
      comprobarBloque();
      comprobarFinal();
    }

    //metodo que marca el camino que ya ha recorrido nuestro personaje.
    function marcar() {
      mapa[PersonajeX][PersonajeY].classList.add("pisado");
      /*
      if (mapa[PersonajeX][PersonajeY + 1].classList.contains("bloque")) {
        mapa[PersonajeX][PersonajeY + 1].classList.add("pisado");

      }
      if (mapa[PersonajeX][PersonajeY - 1].classList.contains("bloque")) {
        mapa[PersonajeX][PersonajeY - 1].classList.add("pisado");

      }
      if (mapa[PersonajeX - 1][PersonajeY].classList.contains("bloque")) {
        mapa[PersonajeX - 1][PersonajeY].classList.add("pisado");

      }
      if (mapa[PersonajeX + 1][PersonajeY].classList.contains("bloque")) {
        mapa[PersonajeX + 1][PersonajeY].classList.add("pisado");

      }
      */
    }
    /* Este metodo se utiliza para comprobar desde arriba izquierda si ha sido recorrido y se posiciona en cada uno de los 
      margenes izquierdos de arriba y recorre cada uno de los bloques*/ 
    function comprobarBloque() {
      var X = 2;
      var Y = 2;
      for (let i = 1; i < 6; i++) {
        X = 2;
        for (let j = 1; j < 5; j++) {
          comprobar(X, Y);
          X += 3;

        }
        Y += 4;
      }

    }
    //Compueba cada uno de los bloque individualmente si el camino de alrededor esta pisado o no para poder mostrar su contenido.
    function comprobar(X, Y) {
      var contador = 0;
      comprobarX = X;
      comprobarY = Y;
    if((mapa[comprobarX][comprobarY].classList.contains("lleno1")) || (mapa[comprobarX][comprobarY].classList.contains("lleno2")) ||
       (mapa[comprobarX][comprobarY].classList.contains("lleno3")) || (mapa[comprobarX][comprobarY].classList.contains("lleno4")) || 
       (mapa[comprobarX][comprobarY].classList.contains("lleno5"))){
        console.log("Ya esta lleno" + comprobarX +" "+ comprobarY);
    }else{
      if(mapa[comprobarX-1][comprobarY-1].classList.contains("pisado")){
          contador++;
      }
      if(mapa[comprobarX-1][comprobarY].classList.contains("pisado")){
        contador++;
      }
      if(mapa[comprobarX-1][comprobarY+1].classList.contains("pisado")){
        contador++;
      }
      if(mapa[comprobarX-1][comprobarY+2].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX-1][comprobarY+3].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX][comprobarY-1].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX][comprobarY+3].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX+1][comprobarY-1].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX+1][comprobarY+3].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX+2][comprobarY-1].classList.contains("pisado")){
      contador++;
      }
      if(mapa[comprobarX+2][comprobarY].classList.contains("pisado")){
      contador++
      }
      if(mapa[comprobarX+2][comprobarY+1].classList.contains("pisado")){
      contador++
      }
      if(mapa[comprobarX+2][comprobarY+2].classList.contains("pisado")){
      contador++
      }
      if(mapa[comprobarX+2][comprobarY+3].classList.contains("pisado")){
      contador++
      }
      

      /*
      for (let i = 1; i < 3; i++) {
        comprobarY = Y;
        for (let j = 1; j < 4; j++) {

          if (mapa[comprobarX][comprobarY].classList.contains("pisado")) {
            contador++;

          }


          comprobarY++;
        }
        comprobarX++;

      }
      */

      comprobarX = X;
      comprobarY = Y;
      if (contador == 14) {
        //1 = Nada
            //2 = matarmomia
            //3 = sullivan
            //4 = chica
            //5 = randal
            //var lista =[1,1,1,2,1,1,1,1,3,1,1,1,4,1,1,1,5,1,1,1]
            var random = Math.floor(Math.random()*lista.length);
            var numero= lista[random];
            var id;
            switch (numero) {
              case 1:
                  var id = "lleno1";
                break;
              case 2:
                var id = "lleno2";
                break;
              case 3:
                var id = "lleno3";
                break;
              case 4:
                var id = "lleno4";
                break;
              case 5:
                var id = "lleno5";
                break;  
              
            }

            lista.splice(random, 1);

        for (let i = 1; i < 3; i++) {
          comprobarY = Y;
          for (let j = 1; j < 4; j++) {
            
            
            mapa[comprobarX][comprobarY].classList.remove("principio");
            mapa[comprobarX][comprobarY].classList.add(id);
            comprobarY++;
            
          }
          comprobarX++;

        }
      }
      }
    }


    function moverMomia(){
      var direccion = Math.floor(Math.random()*4)+1;
      console.log(direccion);
      switch (direccion) {
        case 1:
          console.log("abajo");
          if(mapa[momiaX+1][momiaY].classList.contains("camino")){
            mapa[momiaX][momiaY].classList.remove("randal");
            mapa[momiaX+1][momiaY].classList.add("randal");
            momiaX++;
          } 
          break;
        case 2:
          console.log("Arriba");
          if(mapa[momiaX-1][momiaY].classList.contains("camino")){
            mapa[momiaX][momiaY].classList.remove("randal");
            mapa[momiaX-1][momiaY].classList.add("randal");
            momiaX--;
          } 
          break;
        case 3:
            console.log("derecha");
          if(mapa[momiaX][momiaY+1].classList.contains("camino")){
            mapa[momiaX][momiaY].classList.remove("randal");
            mapa[momiaX][momiaY+1].classList.add("randal");
            momiaY++;
          } 
          break;
        case 4:
            console.log("izquierda");
          if(mapa[momiaX][momiaY-1].classList.contains("camino")){
            mapa[momiaX][momiaY].classList.remove("randal");
            mapa[momiaX][momiaY-1].classList.add("randal");
            momiaY--;
          } 
          break;
      }
    }


    function comprobarFinal(){
      var X2 = 2;
      var Y2 = 2;
      var contador2=0;
      for (let i = 1; i < 6; i++) {
        X2 = 2;
        for (let j = 1; j < 5; j++) {
          if(mapa[X2][Y2].classList.contains("lleno3")){
            contador2++;
          }
          if(mapa[X2][Y2].classList.contains("lleno4")){
            contador2++;
          }
          X2 += 3;

        }
        Y2 += 4;
      }
      if(contador2 == 2){
          alert("-VICTORIA-(Apreta aceptar y espera 3)");
          setInterval(function (){window.location.reload(true)}, 3000);        
      }

    }
    
    

