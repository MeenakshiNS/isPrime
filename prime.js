


//function to check if a number is prime
function isprime(num) {
    if(num<2){
        return false
    }
    if(num===2 ||num===3||num===5||num===7){
        return true
    }

    for(let i=2;i<=5;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

function primearr(arr){
    let prime=[]
    for(let x of arr){
        if(isprime(x)){
            prime.push(x)
        }
    }
    return prime
}
let arr=[1,2,5,7,3,4,29,31,25]
console.log(primearr(arr));
