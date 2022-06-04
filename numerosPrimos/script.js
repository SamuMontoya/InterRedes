let primo = true
let primos = (num) => {
    for(i=2; i<num/2; i++){
        if(num%i === 0){
            primo = false
        }
    }if(num === 4 || num === 1){
        primo = false
    }
    if(primo){
        console.log("primo")
    }else{
        console.log("no primo")
    }
}

let array = []
for(i=1;i<=10;i++){
    array.push(i)
}
console.log(array)