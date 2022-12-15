var pantalla = " ";
resultado = false;

document.addEventListener("keyup", botonPorPantallaTeclado);

//Esta función se encarga de coger la tecla que ha sido pulsada y ponerla por pantalla
function botonPorPantallaTeclado(event){
    boton = event.key;
    if (!isNaN(boton) || boton == "-" || boton == "+" || boton == "/" || boton == "*" || boton == "." || boton == "(" || boton == ")" || boton == "%"){
        botonPorPantalla(boton);

    } else {
        alert("No introduzcas letras");
    }
}

//Esta función se encarga añadir a la pantalla el boton que se a pulsado
function botonPorPantalla(boton){
    if (boton == "CE" && pantalla != " ") {
        
        pantalla = "";
        document.getElementsByClassName("pantalla")[0].innerHTML = pantalla;

    } else {

        if (pantalla == "" || resultado == true && !isNaN(boton)){
            document.getElementsByClassName("pantalla")[0].innerHTML = boton;
            pantalla = document.getElementsByClassName("pantalla")[0].innerHTML;
            resultado = false;

        } else {
            // estos if ajustan las operacion con los parentesis ()
            if (boton == "(" && !isNaN(pantalla.charAt(pantalla.length - 1))){
                alert ("Debes colocar un signo de operacion antes del parentesis.");
            } else if (boton == ")" && isNaN(pantalla.charAt(pantalla.length - 1))){
                alert ("No debes colocar un signo de operacion antes del parentesis.");
            } else if (pantalla.charAt(pantalla.length - 1) == ")" && !isNaN(boton)){
                alert ("Debes colocar un signo de operacion despues del parentesis.");
            } else {
                pantalla = pantalla + boton;
                document.getElementsByClassName("pantalla")[0].innerHTML = pantalla;
                resultado = false;
            }
        }
    }
}

// Esta funcion devuelve el resultado de la operación escrita por pantalla
function botonResultado(){
    if (pantalla == " ") {
        alert("Introduce algo");

    } else {
        try {
            pantalla = eval(pantalla.replace("÷", "/").replace("×", "*"));
            document.getElementsByClassName("pantalla")[0].innerHTML = pantalla;
            resultado = true;
        } catch (e) {
            if (e instanceof SyntaxError){
                document.getElementsByClassName("pantalla")[0].innerHTML = "Syntax Error";
                pantalla = "";
                resultado = false;
        
            }
        }
    }
}