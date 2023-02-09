let count = 0;
let apostar;
function cc(card) {
  
switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count += 1; break
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count -= 1; break;
}

  if (count>0){
    document.getElementById("text1").innerHTML = "Bet";
    document.getElementById("cuenta").innerHTML = count;
    document.getElementById("cuenta").style.color = "lime";
  }
  else{
    document.getElementById("text1").innerHTML = "Hold";
    document.getElementById("cuenta").innerHTML = count;
    document.getElementById("cuenta").style.color = "red";
  }

}


document.getElementById("cartas-elegir").addEventListener("click", (e) =>{
  if (e.target.innerHTML == "J" || e.target.innerHTML == "Q" || e.target.innerHTML == "K" || e.target.innerHTML == "A"){
    decodificado = e.target.innerHTML;
  }
  else{
    decodificado = parseInt(e.target.innerHTML);
  }
  
 cc(decodificado);
});
/*document.getElementById("carta-A").addEventListener("click", seleccionadoA);
function seleccionado2(){
    cc(2);
}
function seleccionadoA(){
    cc("A");
}
*/
