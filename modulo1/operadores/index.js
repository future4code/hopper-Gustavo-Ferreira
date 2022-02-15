//1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado) 

// a. false
// b.false
// c. true
// d. bollea

//2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//o comando prompt sem retorna a variável como uma string independente do que foi digitado
//então o comando soma (linha 26) esta juntando os dois numeros como se fossem strings ao inves de numeros

//3.
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))


// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//ele pode adcionar o "Number" nas variaveis (linhas 31 e 32) e o string vai ser convertido para
//Number assim que o usuário informar o valor

// 4.
// const SuaIdade = Number (prompt("Qual a sua idade?"))
// const IdadeDoSeuMelhorAmigo = Number (prompt("Qual a idade do seu melhor amigo(a)?"))

// const MaisVelho = SuaIdade > IdadeDoSeuMelhorAmigo

// console.log ("Sua idade é maior que a do seu melhor amigo(a)?",MaisVelho)

// console.log(SuaIdade-IdadeDoSeuMelhorAmigo)

//5.

// let NumeroPar = Number (prompt("digite um numero par"))

// const restante = NumeroPar%2

// console.log (restante)

//o restante da divisão do numero par por 2 sempre resulta em 0

//com o numeros impares o resultado do restante da divisão por 2 sempre da 1 

//6.

// let idade = Number (prompt("Qual a sua idade?"))

// const IdadeEmMeses = idade*12
// const IdadeEmDias = (idade*12)*30
// const IdadeEmHoras = ((idade*12)*30)*24

// console.log ("Você tem",IdadeEmMeses,"meses de idade")
// console.log ("Você tem",IdadeEmDias,"dias de idade")
// console.log ("Você tem",IdadeEmHoras,"horas de idade")

//7.

// let primeiroNumero = Number (prompt("informe o primeiro numero"))
// let segundoNumero = Number (prompt("informe o segundo numero"))

// console.log (primeiroNumero > segundoNumero)
// console.log (primeiroNumero === segundoNumero)
// console.log ((primeiroNumero%segundoNumero)===0)
// console.log ((segundoNumero%primeiroNumero)===0)