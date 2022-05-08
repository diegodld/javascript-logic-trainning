// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const arr = [1,2,'',0, undefined]

const removeUnnecessaryValues = (arr) =>{
let filteredArray = arr.filter((item)=>{
return typeof(item)=="number" && item >0;
})
return filteredArray;
}

console.log(removeUnnecessaryValues(arr))