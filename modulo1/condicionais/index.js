//lista de exercicios condicionais

//exercicios de interpretação
//exercicio 01

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//esse codigo receber um valor do usuario, transforma a resposta do usuario em um number
// e em valor é par ou impar, retornando assim uma resposta no console
//ele imprimira "passou no teste" caso o numero seja par e "não passou no teste" caso o numero seja impar






//exercicio 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
    
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//o codigo assim recebe uma string do usuario, no caso o nome de uma fruta e retorna um valor de acordo com a fruta
//iria retornar "o preço da fruta Maçã é R$ 2.25"
//iria retornar "o preço da fruta pêra é R$ 5.5"




//exercicio 03

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a primeira linha recebe um valor do usuario e ja o transforma em um number
//caso o valor seja 10, ira retornar "esse número passou no teste" e "Essa mensagem é secreta"
//caso seja -10 ira retornar undefined
//caso o valor seja negativo, ira retornar um erro, pois a variavel mensagem não sera definida





//lista de exercicios de escrita de codigo

//exercicio 01


// let suaIdade = Number(prompt("informe a sua idade"))

// if (suaIdade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }



//exercicio 02

// const turnoDoAluno = prompt("informe seu turno digitando M, V ou N")

// if (turnoDoAluno === "M"){
//     console.log("Bom dia!")
// } else if (turnoDoAluno === "V"){
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite")
// }



//exercicio 03

// const turnoDoAluno = prompt("informe seu turno digitando M, V ou N")
// let resposta 

// switch (turnoDoAluno){
//     case "M":
//     resposta="Bom dia!"
//     break;
//     case "V":
//     resposta="Boa tarde!"
//     break;
//     case "N":
//     resposta="Boa noite!"

// }

// console.log(resposta)



//exercicio 04

// const qualGeneroDoFilme = prompt("informe o gênero do filme desejado?")
// const qualValorDoIngresso = prompt("Qual o valor do ingresso?")

// const genero = qualGeneroDoFilme === "fantasia"
// const valor = qualValorDoIngresso <= 15

// if (genero && valor){
//     console.log("Bom filme")
// } else {
//     console.log("escolha outro filme")
// }