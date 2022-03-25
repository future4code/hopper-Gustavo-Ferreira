
```js

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
    const salarioBase = 2000
    let salarioComComissao = salarioBase + 
    (qtdeCarrosVendidos*100) + (valorTotalVendas*0.05)
    
    return salarioComComissao
}

```