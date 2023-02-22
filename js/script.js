    // alert("Essa mensagem foi executada pelo JS externo")



$(document).ready(function() {

    let slideAtual = 1
    let listaSlides = ["game-mania-1", "game-mania-2", "game-mania-3"]
    
    setInterval(mudarSlide, 2000)

    function mudarSlide() {
        // Remover o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removerClass(listaSlides[slideAtual - 1])
        } else {
            $("#carrossel").removerClass(listaSlides[2])
        }
        

        // Exibir o Slide atual
        $("carrossel").addClass(listaSlides[slideAtual])

        // Indicar qual o Slide atual
        console.log("slideAtual atual é:", slideAtual)

        slideAtual++

        if (slideAtual > 2) {
            slideAtual = 0
        }


    }







    $("barras").click(function() {
    
        // Toggle;
        if ( $("menu").hasClass("menu") ) {
            $("menu").removerClass("menu")
        }else {
            $("menu").addClass("menu")
        }
    })
})

function CadastrarNewsletter() {
    let email = document.getElementById("campoemail").value
    console.log(email);
    alert(email);
}


function mostrarMenu() {
    let menu = document.getElementById("menu")


    if (getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    
}

function mostrarParticipe() {
    let participe = document.getElementById("participe")


    if (getComputedStyle(participe).display == "flex") {
        participe.style.display = "none"
    } else {
        participe.style.display = "flex"
    }
    
}