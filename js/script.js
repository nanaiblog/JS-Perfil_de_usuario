
//function agregarLike( elemento ){
//    console.log( document.querySelector(".numLikes") );
//   console.log( elemento.closest(".top") );
//let spanNumLikes = document.querySelector( ".numLikes");
//numLikes = Number( spanNumLikes.innerText );
//numLikes += 1 ;
//spanNumLikes.innerText = numLikes; 
//}

function cambioNombre(linkElement) {
    var nombreElement = linkElement.closest(".tarjetaInformacion").querySelector(".nombre");
    nombreElement.innerText = "Rolf Wein";
}

function hideUser(buttonElement) {
    var userDiv = buttonElement.closest(".user");
    if (userDiv) {
      userDiv.style.display = "none";
    }
  }
  