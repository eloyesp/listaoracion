function handleSubmit (evt) {// el evento es que se apriete el boton o sea se submitee el form
  evt.preventDefault();
  var campo = evt.target[0];
  if (campo.value !== "") { // si el campo está lleno

    var nuevoItem = document.createElement("li"); // crea el nuevo item que va ir a la lista
    var listaOración = document.getElementById("listaOracion"); // hace referencia a la lista, permite encontrarla en el html y le pone nombre

    listaOracion.appendChild(nuevoItem); //agrega     nuevoItem a listaOración en ultimo lugar
    nuevoItem.innerHTML = campo.value;

    var today= new date ();
    var year = today.getFullYear();
  }
}

//event listener
document.addEventListener("submit", handleSubmit, false);
