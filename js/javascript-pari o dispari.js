//pari o dispari

var p_o_d = prompt("scegli tra pari o dispari")
console.log("hai scelto " + p_o_d )
var NumUtente = parseInt(prompt("scegli un numero del 1 al 5"))
console.log("hai scelto il numero " + NumUtente)


// dati computer
var Nrandom = aleatorio(1,5)
console.log(Nrandom + " numero pc")

// somma tra i duo numeri
var somma_risultato = NumUtente + Nrandom
console.log(somma_risultato + " resultado somma")

//controllare pari o dispari
var is_a = pariodispari(somma_risultato)
console.log(is_a)

//vincitore
if (is_a == p_o_d){
  console.log("hai vinto")
}else{
  console.log("hai perso")
}



//funzione numeri aleatorio pc
function aleatorio(minimo,maximo){
  return Math.round(Math.random() * (maximo - minimo) + minimo);
}

//funzione per determinare se la somma e pare o dispari 
function pariodispari(numero_da_controllare){
  var risposta 
  if(numero_da_controllare % 2 === 0){
    risposta = "pari"
    return risposta
  }else{
    risposta = "dispari" 
    return risposta
  }
}



