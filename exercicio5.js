// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois 
// do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const filterArray = (arr, n1,n2) =>{ 
    let filteredArray = arr.filter((item)=>{
return item!=n1 && item != n2
    })
    return filteredArray
}

console.log(filterArray([5,4,3,2,5],5,3))