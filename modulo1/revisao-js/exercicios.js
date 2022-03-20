// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let indice = array.length 
    return indice

}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    array.reverse()
    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    array.sort(function (a,b){return a - b})

  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    let numerosPares = array.filter((valor,indice) => {
        return valor % 2 === 0
    })

  return numerosPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
    let numerosPares = array.filter((valor,indice) => {
        return valor % 2 === 0
    })
    let numerosParesAoQuadrado = numerosPares.map((valor, indice) =>{
        return valor * valor 
    })
    return numerosParesAoQuadrado
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    return Math.max(...array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let objeto = {
        maiorNumero: null,
        maiorDivisivelPorMenor: null,
        diferenca: null
    }

    let MaiorValor = Math.max(num1,num2)
    let menorValor = Math.min(num1,num2)
    let maiorDivisivelPorMenor = MaiorValor%menorValor === 0
    let divisão = MaiorValor-menorValor

    let objetoFinal = {...objeto,
        maiorNumero: MaiorValor, maiorDivisivelPorMenor: maiorDivisivelPorMenor, diferenca: divisão
    }
    return objetoFinal
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    let primeirosNumerosPares = []
    let ref = 0
    while (primeirosNumerosPares.length < n) {
        
        if (ref % 2 === 0) {
            primeirosNumerosPares.push(ref)
        }
            ref ++
    }
        return primeirosNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

     let resultado
    if (ladoA === ladoB && ladoB === ladoC) {
        resultado = "Equilátero"
    } else if( ladoA === ladoB || ladoB === ladoC || ladoA === ladoC ) {
        resultado = "Isósceles"
    } else {
        resultado = "Escaleno"
    }

    return resultado
}
console.log(resultado)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    let segundoMaiorESegundoMenor = []
    
    array.sort(function (a,b){return a - b})
    let segundoMaior = array[1]

    let segundoMenor = array[array.length-2] 
    
    segundoMaiorESegundoMenor.push(segundoMenor,segundoMaior)
    
    return segundoMaiorESegundoMenor
} 
  
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}