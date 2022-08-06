//EXERCICIO 01

//Questão A 
//podemos acessar um parametro passado pelo terminal atraves do process.argv[x], onde x vai ser o íncide do parametro


//Questão B

 const nome = process.argv[2]
 const idade = process.argv[3]

 console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//Questão C

 console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)