// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método (), Resultado do método: [1, 2, 3, 4, 5]

const arrayOfArrays =[1, 2, [3], [4, 5]]


const uniqueArray = (arr)=>{
    let newArray =[]
    const result =  arr.map((item)=>{
    return newArray.push(item)
    })

    return result;
}

console.log(uniqueArray(arrayOfArrays))

