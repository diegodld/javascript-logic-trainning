// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const array = [1,2,3,3,2,4,5,4,7,3]

const removeDuplicatedValues = (arr) =>{
let newArray = arr.filter((item,index)=>{
return arr.indexOf(item) ==index;
})

return newArray;
}

console.log(removeDuplicatedValues(array))