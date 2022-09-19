//Exercicio 04

//b) usaria o comando "tsc && node exercicio-4.js"

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//c)Nesse caso eu usaria o tsconfig com a opção "outdir: ".build/" e "rootdir": ".src/" descomentadas 
// e ao rodar o comando "tsc && node .build/" o arquivo seria transpilado para .js na pasta build e depois seria executado

