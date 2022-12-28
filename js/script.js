$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

setInterval(slide, 1000)
    function slide(){
        if($("banner-ativo").next().length){
        $("banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $("banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }

            }
$("#barras").click(function(){
    $("#menu").toggleClass("menu-ativo")

//if($("#menu").hasClass("menu-ativo")){
   // $("#menu").removeClass("menu-ativo")
//}else{
   // $("#menu").addClass("menu-ativo")
////}

})
})

//let menu = document.getElementById("menu");

//function mostarMenu() {
    //if (menu.style.display != "flex") {
       // menu.style.display = "flex"
    //} else {
   //     menu.style.display = "none"
   // }
//}


var email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)

}
let listajogos =[
    {},
    {},
    {},
    {},
]
