let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
window.onload = function() {
    function efectoHabilidades() {
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            let habilidades = document.getElementsByClassName("progreso");
            // Asegúrate de que la longitud de habilidades sea la esperada
            if (habilidades.length === 10) {
                habilidades[0].classList.add("javascript");
                habilidades[1].classList.add("htmlcss");
                habilidades[2].classList.add("JAVA");
                habilidades[3].classList.add("Python");
                habilidades[4].classList.add("MySQL");
                habilidades[5].classList.add("comunicacion");
                habilidades[6].classList.add("trabajo");
                habilidades[7].classList.add("creatividad");
                habilidades[8].classList.add("dedicacion");
                habilidades[9].classList.add("Puntualidad");
            } else {
                console.error("Número inesperado de elementos con la clase 'progreso'.");
            }
        }
    }

    // Ejecutar la función al cargar la página
    efectoHabilidades();

    // Añadir un evento de scroll para que la función se ejecute cuando se haga scroll
    window.addEventListener("scroll", efectoHabilidades);
}