let array = []
let num = 1
let last = 100
let primos = (num) => {
    let primo = true
    for(i=2; i<num/2; i++){
        if(num%i === 0){
            primo = false
        }
    }if(num === 4 || num === 1){
        primo = false
    }
    if(primo){
        array.push(num)
    }else{
        console.log(primo)
    }
}
let test = (num) =>{primos(num)}

while (num <= last){
    if (test(num)){
        array.push(num)
    }
    num++
}
console.log(array)