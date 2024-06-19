
let botonMenu;


botonMenu = document.getElementById("boton");
console.log(botonMenu);
function mostrarMenu(){

  
let navNav = document.getElementById("nav");


if(navNav.style.display === "block"){

   
    navNav.style.display = "none";

}else {

    
    navNav.style.display = "block"
};

}

botonMenu.addEventListener("click", mostrarMenu);
