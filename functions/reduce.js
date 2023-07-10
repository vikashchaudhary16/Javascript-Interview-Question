const arr  = [5,1,3,2,6]

const output = arr.reduce((result,item)=> { 
    return item > result ? item: result
})

console.log(Math.max.apply(1,arr))
console.log(Math.max(5, 10));
console.log(output)
console.log(Math.max(...arr)) ;
console.log(Math.max.call(0,...arr))