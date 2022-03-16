//Lista de exercicio de callback
//exercicio de interpretação


//exercicio 01

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  //sera impresso no console um objeto de cada vez junto com o indice e o array
  //completo


  //exercicio 02

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  //o codigo ira mapear todo o array e retornar o objeto 'nome' de cada array


  //exercicio 03

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)


  //o codigo ira retornar todos os objetos 'apelido' da lista de arrays que sejam diferentes de 'chijo'




  //lista de exercicios de escrita de codigo


  //exercicio 01 (a)


//   const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const arrayComOsNomes = pets.map((item, index) =>{
//         return item.nome
//  })

//  console.log(arrayComOsNomes)

 //exercicio 01 (b)


//  const apenasSalsichas = pets.filter ((item,index)=>{
//          return item.raca === "Salsicha"

//  })

//  console.log(apenasSalsichas)


//exercicio 01 (c)

// const check = pets.filter ((item) =>{
//      return item.raca === "Poodle"
    

// })

// const valeDesconto = check.map((item)=> {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })

// console.log (valeDesconto)


//exercicio 02 (a)

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]


//  const nomeDosProdutos = produtos.map((item)=>{
//         return item.nome

//  })

//  console.log (nomeDosProdutos)

//exercicio 02 (b)

// const listaComDesconto = produtos.map((item)=>{
//     const lista = [
//         nome = item.nome,
//         preco = (item.preco * 0.95).toFixed(2),
//     ]; return lista
// }) 


// console.log(listaComDesconto)




//exercicio 02 (c)

// const bebidas  = produtos.filter((item)=>{
//       return  item.categoria === "Bebidas"

// })

// console.log(bebidas)



//exercicio 02 (d)


// const produtosYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")

// })

// console.log(produtosYpe)

//exercicio 02 (e)

// const produtosYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")

// })

// const propagandaYpe = produtosYpe.map((item)=>{
//     return `Compre ${item.nome} pro ${item.preco}`

// })


// console.log(propagandaYpe)