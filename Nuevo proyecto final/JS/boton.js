
const button = document.getElementById("boton");
console.log("boton");
button.onclick = function () {
    console.log("captura de click");    
    document.getElementById("saludo").innerHTML = "Muchas gracias por ver nuestro perfil" 
}   