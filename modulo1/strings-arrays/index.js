//1.

//let array
//console.log('a. ', array)

//ira imprimir a. undefinid, por que a variavel não foi definida

//array = null
//console.log('b. ', array)

//ira imprimir b. null, foi atribuido o valor nulo a variavel

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

//ira imprimir c. 11, foi utilizada a propriedade length para contar o numero de itens da lista

//let i = 0
//console.log('d. ', array[i])

//ira imprimir d. 3, pois foi solicitado na linha 19 que o console exibice o item de acordo com o
//indici indicado na variaves i, no caso indice 0

// array[i+1] = 19
// console.log('e. ', array)

//ira imprimir e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], pois o metodo da linha 24 substituiu o item de
//indice i+1(no caso indice 1) pelo valor que lhe foi atribuido, no caso 19

// const valor = array[i+6]
// console.log('f. ', valor)

//ira imprimir f. 9, o metodo da linha 30 ira selecionar o item de indice i+6 (indice 6)

//2.

//const frase = prompt("Subi num ônibus em Marrocos")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// ira imprimir "SUBI NUM ÔNIBUS EM MIRROCOS, 27", 

//3.

// const nomeDoUsuario = prompt ("informe seu nome")
// const emailDoUsuario = prompt ("informe seu email")

// console.log (`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo
// senhor(a) ${nomeDoUsuario}!`)

//4.

// let array = ["lasanha", "strogonoff", "pastel", "yakisoba", "sushi"]

// console.log (array)

// console.log (`essas são minhas comidas preferidas:
// ${array[0]}
// ${array[1]}
// ${array[2]}
// ${array[3]}
// ${array[4]}
// `)

// let suaComidaPreferida = prompt("qual a sua comida preferida")

// array [1]=suaComidaPreferida

// console.log (array)


//5. 

// let listaDeTarefas

// let tarefaUm = prompt("qual a primeira tarefa?")
// let tarefaDois = prompt("qual a segunda tarefa?")
// let tarefaTres = prompt("qual a terceira tarefa?")

// listaDeTarefas=[tarefaUm, tarefaDois, tarefaTres]

// console.log (listaDeTarefas)

// let tarefaCumprida = prompt("qual tarefa foi concluida?(1, 2 ou 3)")

// listaDeTarefas.splice(tarefaCumprida-1,1)

// console.log (listaDeTarefas)
