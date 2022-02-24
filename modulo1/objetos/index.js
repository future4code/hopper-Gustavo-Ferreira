// lista de exercicios de interpretação

//exercicio 01

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//devera retornar 
//"Matheus Nachtergaele"
//"Virginia Cavendish"
//"canal: "Canal Brasil", horario: "19h""




//exercicio 02

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//primeiro console.log:
//nome: "juca, idade: 3, raca: "SRD"
	
//segundo console.log:
//nome: "juba, idade: 3, raca: "SRD"
	
//terceiro console.log:
//nome: "jubo, idade: 3, raca: "SRD"

//praticamente ele cria uma copia do objeto original e caso tenha, executa as alterações nas chaves determinadas ou cria novas chaves




//exercicio 03

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//primeiro console.log
//false

//segundo console.log
//undefined

// a função basicamente utiliza a notação de colchetes para chamar a propriedade de uma chave
//como a chave altura não existe, então foi retornado que ela não é/foi definida






//lista de execicios de escrita de codigo

//exercicio 01
// const lista = {
//     nome: "Gustavo",
//     apelidos: ["Gu", "Guga", "Guginha"]


// }
// function colocandoInformaçõesDoObjetoNaFrase(obj) {

//     console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos}`)
    
// }

// colocandoInformaçõesDoObjetoNaFrase(lista)





//exercicio 02

// const dados ={
//     nome: "Gustavo",
//     idade: 21,
//     profissão: "projetista"
// }

// function lista(minhaLista) {
//     const listaComDados = [minhaLista.nome, (minhaLista.nome).length, minhaLista.idade,
//     minhaLista.profissão, (minhaLista.profissão).length]

//     console.log(listaComDados)
// }

// lista(dados)




//exercicio 03

// const carrinho = []

// const fruta1 ={
//     nome: "maçã",
//     disponibilidade: true
// }

// const fruta2 ={
//     nome: "laranja",
//     disponibilidade: true
// }

// const fruta3 ={
//     nome: "mamão",
//     disponibilidade: true
// }

// function novaLista(f1, f2, f3){
//     const colocandoFrutasNaLista = [{...f1},{...f2},{...f3}]
//     console.log(colocandoFrutasNaLista)
// }

// novaLista(fruta1,fruta2,fruta3)