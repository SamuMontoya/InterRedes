const isPrimo = (num) => {
    const divisibles = []
    for (i=1;i<=num;i++) {
        if (num%i === 0){
            divisibles.push(i)
        }
    }
    if(divisibles.length === 2){
        return true
    }else{
        return false
    }
}
const arrayPrimos = []
for (j=1;j<=1000;j++){
    if(isPrimo(j)){
        arrayPrimos.push(j)
    }
}
console.log(arrayPrimos)

const ejecutar = () => {
    const inicial = document.getElementById("inicial").value
    const final = document.getElementById("final").value

    const primos = []
    for(s=inicial; s<=final; s++){
        if(isPrimo(s)){
            primos.push(s)
        }
    }
    const span = document.getElementById("span")
    span.innerHTML = primos
}