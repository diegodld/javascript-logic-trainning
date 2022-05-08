// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const createArray = (length,elements)=>{
    let arr = [];  
    for(let i=0;i<length;i++){
        arr.push(elements)
    }
    return arr;
}

console.log(createArray(3,"a"))