// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const arr = [1,2,3,4]

const reverseArray = (arr) =>{
    let reverse = [];
    for(let i=arr.length;i>0;i--){
        reverse.push(i)
    }

    return reverse;
}

console.log(reverseArray(arr))