const operacao = process.argv[2]
const primeiroValor = Number(process.argv[3])
const segundoValor = Number(process.argv[4])

switch (operacao) {
    case `add`:
        return console.log(`Resposta: ${primeiroValor+segundoValor}`);
        break;
    case `sub`:
        return console.log(`Resposta: ${primeiroValor-segundoValor}`)
        break;
    case `mult`:
        return console.log(`Resposta: ${primeiroValor*segundoValor}`)
         break;
    case `div`:
        return console.log(`Resposta: ${primeiroValorsegundoValor}`)
        break;
}