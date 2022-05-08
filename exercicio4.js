// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}


const arr = [["c",2],["d",4]]

const newArr = Object.fromEntries(arr)

console.log(newArr)


