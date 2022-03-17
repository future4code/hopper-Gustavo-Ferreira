/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let novaPartida = confirm("Bem vindes ao jogo Blackjack!"+ '\n' +"Quer começar uma nova partida?")
    

// const sorteioUm = {
//    cartaUm: [comprarCarta().texto, comprarCarta().valor],
//    cartaDois: [comprarCarta().texto, comprarCarta().valor],
//    cartaTres: [comprarCarta().texto, comprarCarta().valor],
//    cartaQuatro: [comprarCarta().texto, comprarCarta().valor],
//    cartaCinco: [comprarCarta().texto, comprarCarta().valor],
//    cartaSeis: [comprarCarta().texto, comprarCarta().valor],
//    cartaSete: [comprarCarta().texto, comprarCarta().valor],
//    cartaOito: [comprarCarta().texto, comprarCarta().valor],
//    cartaNove: [comprarCarta().texto, comprarCarta().valor],
//    cartaDez: [comprarCarta().texto, comprarCarta().valor],
// }

// const sorteiodois = {
//    cartaUm: [comprarCarta().texto, comprarCarta().valor],
//    cartaDois: [comprarCarta().texto, comprarCarta().valor],
//    cartaTres: [comprarCarta().texto, comprarCarta().valor],
//    cartaQuatro: [comprarCarta().texto, comprarCarta().valor],
//    cartaCinco: [comprarCarta().texto, comprarCarta().valor],
//    cartaSeis: [comprarCarta().texto, comprarCarta().valor],
//    cartaSete: [comprarCarta().texto, comprarCarta().valor],
//    cartaOito: [comprarCarta().texto, comprarCarta().valor],
//    cartaNove: [comprarCarta().texto, comprarCarta().valor],
//    cartaDez: [comprarCarta().texto, comprarCarta().valor],
// }

let cartasUsuario = []
let cartasComputador = []
let valoresUsuario = []
let valoresComputador = []

if (novaPartida === true){
   let a = compraCarta()
   let b = compraCarta()
   let c = compraCarta()
   let d = compraCarta()

   let primeiraRodada = confirm(`Suas cartas são ${a} ${b}.
   A carta revelada do computador é ${c}`)
    
   cartasUsuario.push(a,b)
   cartasComputador.push(c,d)

   valoresUsuario.push(sorteioUm.cartaUm[1],sorteioUm.cartaDois[1])
   valoresComputador.push(sorteiodois.cartaUm[1],sorteiodois.cartaDois[1] )

   } else {
      alert(`O jogo acabou!`)
   }

   console.log(cartasUsuario)
   console.log(cartasComputador)
   console.log(valoresComputador)
   console.log(valoresUsuario)

