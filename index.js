
// capturar botones

let numBotones = document.querySelectorAll(".drum").length;

for (let i = 0; i < numBotones; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    let botonInnerHTML = this.innerHTML;
    teclaSonido(botonInnerHTML);  
    animacionBoton(botonInnerHTML); 

    });
}

// capturando teclas

 document.addEventListener("keypress", function (event) {
     teclaSonido(event.key);
     animacionBoton(event.key); 
 });


function teclaSonido(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "a":
            let snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
        case "s":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;

        default: console.log(botonInnerHTML);
    }
}

function animacionBoton(evento) {

    let botonActivo = document.querySelector("." + evento);
  
    botonActivo.classList.add("pressed");
  
    setTimeout(function() {
        botonActivo.classList.remove("pressed");
      }, 100);
  
  }
