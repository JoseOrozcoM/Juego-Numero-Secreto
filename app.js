let numeroMaximo= 10;
let numeroIntentos = 1;
let numeroDeUsuario;
let numerosSorteados = [];
let numeroSecreto = parseInt(generarNumeroSecreto());

 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function valorUsuario(){
    numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);

}
function intentoDeUsuario(){
    if(numeroSecreto===numeroDeUsuario){
       asignarTextoElemento("p","Felicidades, has acertado al numero secreto");
       document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(numeroDeUsuario< numeroSecreto){
            asignarTextoElemento("p",`Incorrecto! Vuelve a intentarlo, llevas ${numeroIntentos} ${(numeroIntentos === 1 ) ? "intento" : "intentos"}
            el numero secreto es mayor...`);
        }
        else{
            asignarTextoElemento("p",`Incorrecto! Vuelve a intentarlo, llevas ${numeroIntentos} ${(numeroIntentos === 1 ) ? "intento" : "intentos"}
            el numero secreto es menor...`);
        }
        limpiarCaja();
    }
    numeroIntentos++;
 
}

function generarNumeroSecreto(){

    let numeroSecreto = (Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    }
    if(numerosSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
    }
    else{
        numerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
    
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}
function mensajesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Introduce un numero entre 1 y ${numeroMaximo}`);
}
function reiniciarJuego(){
    limpiarCaja();
    mensajesIniciales();
    numeroSecreto = parseInt(generarNumeroSecreto());
    numeroIntentos=1;
    document.getElementById("reiniciar").setAttribute("disabled", true);

}


asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", `Introduce un numero entre 1 y ${numeroMaximo}`);
