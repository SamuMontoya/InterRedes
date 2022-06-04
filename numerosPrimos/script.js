const num = 8
let primo = true

for(i=2; i< num/2; i++){
    if(num%i === 0){
        primo = false
    }
}
if(primo){
    console.log("primo")
}else{
    console.log("no primo")
}

let array = []
for(i=0; i<=100; i++){
    array.push(i)
}
console.log(array)