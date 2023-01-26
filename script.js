///La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(){
    var string = document.getElementById("texto_encriptar").value.toLowerCase();

    //i = para que tome letras mayusculas y minusculas
    //g = tome en cuenta toda la linea
    //m = tome en cuenta multiples lineas
    var texto_encriptado = string.replace(/e/img, "enter")
    var texto_encriptado = texto_encriptado.replace(/i/img, "imes")
    var texto_encriptado = texto_encriptado.replace(/a/img, "ai")
    var texto_encriptado = texto_encriptado.replace(/o/img, "ober")
    var texto_encriptado = texto_encriptado.replace(/u/img, "ufat")

    document.getElementById("texto_desencriptado").innerHTML = texto_encriptado;

}

function desencriptar (){
    var string = document.getElementById("texto_encriptar").value.toLowerCase();

    //i = para que tome letras mayusculas y minusculas
    //g = tome en cuenta toda la linea
    //m = tome en cuenta multiples lineas
    var texto_encriptado = string.replace(/enter/img, "e")
    var texto_encriptado = texto_encriptado.replace(/imes/img, "i")
    var texto_encriptado = texto_encriptado.replace(/ai/img, "a")
    var texto_encriptado = texto_encriptado.replace(/ober/img, "o")
    var texto_encriptado = texto_encriptado.replace(/ufat/img, "u")

    document.getElementById("texto_desencriptado").innerHTML = texto_encriptado;


}

function copiar (){
    var contenido = document.querySelector("#texto_desencriptado");

    contenido.select();
    document.execCommand("copy");


}