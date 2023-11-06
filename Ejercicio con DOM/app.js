//----EJERCICIO 1----
//Generar un carrusel de imágenes: Utiliza el DOM para crear un carrusel de imágenes que permite al usuario avanzar o retroceder entre imágenes.

let carrousel = document.getElementById("carrousel");
let rigth = document.getElementById("rigth");
let left = document.getElementById("left");
let index = 0;
let arrayImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];



function carrouselImagenRigth() {
  
  if (index < 3) {
    index++;
  } else {
    index = 0;
  }
  carrousel.src = `images/${arrayImg[index]}`;
}

function carrouselImagenLeft() {
   
  if (index == 0) {
    index = 3;
  } else {
    index -- ;
  }
  carrousel.src = `images/${arrayImg[index]}`;
}


 left.addEventListener("click", carrouselImagenLeft);
 rigth.addEventListener("click", carrouselImagenRigth);


//----EJERCICIO 2----

//2-Texto que se lee más: Crea un botón que, al hacer clic, cambia el tamaño del texto de un elemento en el DOM para que sea más grande o más pequeño.

let boton =document.getElementById("boton");

function agrandarParrafo (){
    let parrafo = document.getElementById("normal");
    parrafo.classList.toggle("agrandar");
    if(parrafo.classList.contains("agrandar")){
      boton.innerText= "Achicar";
    }else{
      boton.innerText="Agrandar";
    }
};


boton.addEventListener("click", agrandarParrafo);


//----EJERCICIO 3----

// 3-Tarjetas clickeables: Genera una serie de tarjetas en el DOM, cada una con un contenido diferente. Permite que el usuario haga clic en una tarjeta para expandirla y mostrar más detalles.

let boton1= document.getElementById("card1-btn");
let boton2= document.getElementById("card2-btn");
let boton3= document.getElementById("card3-btn");


  function mostrarParrafo1 (){
    let cardParrafo1 = document.getElementById("card1-contenido-oculto");
   
    cardParrafo1.classList.toggle("visible");
    
    if(cardParrafo1.classList.contains("visible")){
      boton1.innerText= "MENOS DETALLES";
    }else{
      boton1.innerText="MÁS DETALLES";
    }
      
   };

    
    function mostrarParrafo2 (){
      let cardParrafo2 = document.getElementById("card2-contenido-oculto");
     
      cardParrafo2.classList.toggle("visible");
      
      if(cardParrafo2.classList.contains("visible")){
        boton2.innerText= "MENOS DETALLES";
      }else{
        boton2.innerText="MÁS DETALLES";
      }
        
     };

     function mostrarParrafo3 (){
      let cardParrafo3 = document.getElementById("card3-contenido-oculto");
     
      cardParrafo3.classList.toggle("visible");
      
      if(cardParrafo3.classList.contains("visible")){
        boton3.innerText= "MENOS DETALLES";
      }else{
        boton3.innerText="MÁS DETALLES";
      }
        
     };

     boton1.addEventListener("click", mostrarParrafo1);
     boton2.addEventListener("click", mostrarParrafo2);
     boton3.addEventListener("click", mostrarParrafo3);

