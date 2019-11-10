
function movimiento(){
  let chulu = document.querySelectorAll('.caja');
  chulu.forEach(chulu => chulu.classList.toggle('transicion'));
}

document.querySelector('button').addEventListener('click', movimiento);
