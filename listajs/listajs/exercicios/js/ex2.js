//Box de interacão
let numero = parseInt(prompt("informe um numero inteiro entre 1 e 10"));


document.write("<h1><center>tabuada do numero: ", numero,"<br></center></h1>");


if(numero >= 1 && numero <= 10){
    for(let a = 0; a<= 10; a++){
        multiplicação = numero * a;
        document.write(numero, " x ", a, " = ", multiplicação, "<br>")
    }
}

