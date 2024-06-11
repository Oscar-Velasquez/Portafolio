//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}


function actualizarContador() {
    // Verificamos si hemos llegado a 50
    if (proyectos <= 0) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        // Incrementamos el contador en 1
        proyectos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 30
    if (clientes <= 0) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementamos el contador en 1
        clientes++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 40
    if (cursos <= 0) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills(){
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("dw").className = " progreso dw";
        document.getElementById("dg").className = " progreso dg";
        document.getElementById("bd").className = " progreso bd";
        document.getElementById("md").className = " progreso md";
    }
}
function descargarCV(){
    var rutaArchivo = 'doc/Currículum_Oscar.pdf';

    var link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = 'Currículum_Oscar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById("dowloadButton").addEventListener('click', descargarCV)

var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="/index.html";
    }else{
        location.href="/index2.html";
    }
}



