const ejecutar = () => {
    let frase = document.getElementById("frase").value
    const span = document.getElementById("span")
    console.log(frase)
    frase = frase.toLowerCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "").replace(/\./g, '')

    console.log(frase)
    let arrayFrase = frase.split("")
    console.log (arrayFrase)

    const arrayConvertido = []
        for(i=1;i<arrayFrase.length+1;i++){
            arrayConvertido.push(arrayFrase[arrayFrase.length-i])
        }   
    console.log(arrayConvertido)
    let fraseConvertida = arrayConvertido.join("")
    console.log(fraseConvertida)

        if(fraseConvertida === frase){
            span.innerHTML = ("palindromo")
        }   else{
            span.innerHTML = ("no palindromo")
        }
}
