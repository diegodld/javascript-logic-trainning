// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
const arr = [1,2,3,4]
const arr2 =[1,2,3,4]

const compareArrays = (arr1,arr2) =>{
let verify = JSON.stringify(arr1) === JSON.stringify(arr2)
   return verify;    
}

console.log(compareArrays(arr,arr2))

