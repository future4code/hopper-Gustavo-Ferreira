// Lista de exercicios laços
//Exercicios de interpretação

//exercicio 01

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//o codigo ira imprimindo valores em ordem começando por 0 e terminando
//quando chegar em 4


//exercicio 02

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// o codigo vai imprimir todos os valores maiores que 18
//o melhor para achar o indice seria o "for"

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// ficaria imprimindo linhas com asteriscos ate alcançar a linha com 4 asteriscos




//Exercicios de escrita de código

//exercicico 01

// let NumeroDePets = Number(prompt("Quantos pets você tem em casa?"))
// let i = 0
// let listaDosPets = []

// if (NumeroDePets === 0) { 
//     console.log("Que pena! Você pode adotar um pet!")   
// }

// while (i < NumeroDePets) {
//     let nomeDosPets = prompt("Qual o nome do seu pet?")
//     listaDosPets.push(nomeDosPets)
//     i += 1
// }

// console.log(listaDosPets)



//exercicio 02 (a)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let index = 0; index < arrayOriginal.length;index++){
      
//       console.log(arrayOriginal[index])
//       }

//exercicio 02 (b)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let index = 0; index < arrayOriginal.length;index++){
//       let divisao = arrayOriginal[index]/10
//       console.log(divisao)
// }

//exercicio 02 (c)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (let index = 0; index < arrayOriginal.length;index++){
//     let divisao =  arrayOriginal[index] % 2

//     if (divisao === 0) {
//       novoArray.push(arrayOriginal[index]) 
//     }

// }

// console.log(novoArray)

//Exercicio 02 (d)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (let index = 0; index < arrayOriginal.length;index++){  
//     novoArray.push(`O elemento do índex ${index} é ${arrayOriginal[index]}`)
// }
// console.log(novoArray)

//exercicio 02 (e)


// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maiorNumero = 0;
// let menorNumero = arrayOriginal[0];
// for (let arrayNumero of arrayOriginal) {
//   if (maiorNumero < arrayNumero) {
//     maiorNumero = arrayNumero;
//   }
//   for (let arrayNumero of arrayOriginal) {
//     if (menorNumero > arrayNumero) {
//       menorNumero = arrayNumero;
//     }
//   }
// }

// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)