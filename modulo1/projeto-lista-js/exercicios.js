// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let nb1 = prompt("informer o primeiro numero")
let nb2 = prompt("informer o segundo numero")

Number(nb1)
Number(nb2)

const area = nb1*nb2

console.log (area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Em que ano estamos?")
let anoNascimento = prompt("Em que ano você nasceu")

Number(anoAtual)
Number(anoNascimento)

const idade = anoAtual-anoNascimento

console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

const imc = peso/(altura*altura) 
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("informe o seu nome")
let idade = prompt("informe o sua idade")
let email = prompt("informe o seu email")

console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const primeiraCor = prompt("me diga uma cor favorita")
const segundaCor = prompt("me diga outra cor favorita")
const terceiraCor = prompt("me diga mais uma cor favorita")

const lista = [primeiraCor, segundaCor, terceiraCor]
console.log (lista)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const resposta = string.toUpperCase()
return resposta


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let imgressos = custo/valorIngresso
return imgressos


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let quantidadeString1 = string1.length 
let quantidadeString2 = string2.length

const comparacao = quantidadeString1 == quantidadeString2
return comparacao


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

const inicio = array.shift()

return inicio


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const fim = array.pop()

  return fim


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

const primeiro = array[0]
const ultimo = array[array.length-1]

const troca1 = array.splice(0,1,ultimo)
const troca2 = array.splice(-1,1,primeiro)

return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const minString1 = string1.toLowerCase()
const minString2 = string2.toLowerCase()

const comparacao = minString1 == minString2
return comparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}