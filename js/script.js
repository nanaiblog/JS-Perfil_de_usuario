
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
    var userDiv = buttonElement.parentElement.parentElement;
    if (userDiv) {
      userDiv.style.display = "none";
    }
  }

//console.log("page loaded...");

//var requestSpan = document.querySelector("#requests");
//var connectionSpan = document.querySelector("#connections");
//var username = document.querySelector("#username");

//function accept(id) {
 //   var element = document.querySelector(id);
//    element.remove();
//    requestSpan.innerText--;
//    connectionSpan.innerText++;
//}

//function ignore(id) {
//    var element = document.querySelector(id);
//    element.remove();
//    requestSpan.innerText--;
//}

//function edit() {
//    username.innerText = "Marisa G";
//}