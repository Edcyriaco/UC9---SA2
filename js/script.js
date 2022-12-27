let menu = document.getElementById("menu");

function mostarMenu() {
    if (menu.style.display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}


var email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)

}