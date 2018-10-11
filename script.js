const lista = document.querySelectorAll('span');

const jogada = event => {
  if (vez) {
    event.target.innerHTML = 'X';    
  }
  else {
    event.target.innerHTML = 'O';        
  }

  verificaGanhador();
  vez = !vez;
  

  event.target.onclick = null;
}

const verificaGanhador = () =>{

  if  (  ( lista[2].innerHTML == lista[4].innerHTML && 
    lista[2].innerHTML == lista[6].innerHTML &&
    lista[2].innerHTML != "")
 ||
 ( lista[0].innerHTML == lista[4].innerHTML && 
   lista[0].innerHTML == lista[8].innerHTML &&
   lista[0].innerHTML != "" )
||
 ( lista[2].innerHTML == lista[5].innerHTML && 
  lista[2].innerHTML == lista[8].innerHTML  &&
  lista[2].innerHTML != "")
||
 ( lista[0].innerHTML == lista[3].innerHTML && 
   lista[0].innerHTML == lista[6].innerHTML &&
   lista[0].innerHTML != "" )
||
 ( lista[1].innerHTML == lista[4].innerHTML && 
   lista[1].innerHTML == lista[7].innerHTML  &&
   lista[1].innerHTML != "")
   ||
   ( lista[0].innerHTML == lista[1].innerHTML && 
     lista[0].innerHTML == lista[2].innerHTML  &&
     lista[0].innerHTML != "")
     ||
     ( lista[3].innerHTML == lista[4].innerHTML && 
       lista[3].innerHTML == lista[5].innerHTML  &&
       lista[3].innerHTML != "")
       ||
     ( lista[6].innerHTML == lista[7].innerHTML && 
       lista[6].innerHTML == lista[8].innerHTML  &&
       lista[6].innerHTML != "")) {
       if (vez)
         alert ("Jogador x ganhou");
       else
       alert ("Jogador O ganhou");
     }



}



let vez = true;

for (const item of lista) {
  item.onclick = jogada;
}

let posicoesCertas = [
  [lista[0], lista[1], lista[2]],
  [lista[3], lista[4], lista[5]],
  [lista[6], lista[7], lista[8]],
  [lista[0], lista[3], lista[6]],
  [lista[1], lista[4], lista[7]],
  [lista[2], lista[5], lista[8]],
  [lista[0], lista[4], lista[8]],
  [lista[2], lista[4], lista[6]]
]

