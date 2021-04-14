//polidroma
//information
var parola = prompt("inserisci una parola")
var risultato = controllo(parola)
console.log(risultato)


//funzione

function controllo(insertar){
  word = "palidroma"
  if(word != insertar){
    word = " non hai scritto palidroma"
    return word
  }else{
    word = "hai scrito palidroma"
    return word
  }
}

