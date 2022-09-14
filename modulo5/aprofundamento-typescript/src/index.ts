//EXERCICIO 01

//a)O typescript não aceita um valor de tipo dirente do tipo que foi definido da variavel

// let minhaString:string = "Gustavo"

//b)O typescript não aceita um valor de tipo dirente do tipo que foi definido da variavel

// let meuNumero: number = 21

//c)

// enum rainbowColors {
//     VIOLET="violeta",
//     BLUE="azul",
//     RED="vermelho",
//     YELLOW='amarelo',
//     ORANGE='laranja'

// }


// type user = {
//     name:string,
//     age:number,
//     favouriteColor:rainbowColors
// }

// const user1: user = {
//     name:"Gustavo",
//     age:21,
//     favouriteColor:rainbowColors.ORANGE
// }

// const user2: user = {
//     name:"Raniele",
//     age:21,
//     favouriteColor:rainbowColors.BLUE
// }

// const user3: user = {
//     name:"Ginna",
//     age:21,
//     favouriteColor:rainbowColors.YELLOW
// }


//EXERCICIO 02

// type amostraDeDados = {
//     numeros:number[]
    
// }


// function obterEstatisticas(numeros:number[]):object {

//     const numerosOrdenados: number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     type result ={
//         maior:number,
//         menor: number,
//         media: number
//     }
    
//     const estatisticas: result = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }


//EXERCICIO 03

// type post = {
//     autor:string,
//     texto:string
// }

// const posts: post[] = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

//   function buscarPostsPorAutor(posts:object[], autorInformado:string) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//EXERCICIO 04



//EXERCICIO 05
