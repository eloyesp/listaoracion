var store = require('localforage')

var listaOración = document.getElementById("listaOracion"); // hace referencia a la lista, permite encontrarla en el html y le pone nombre

function agregar_item (texto) {
  var nuevoItem = document.createElement("li"); // crea el nuevo item que va ir a la lista

  listaOracion.appendChild(nuevoItem); //agrega     nuevoItem a listaOración en ultimo lugar
  nuevoItem.innerHTML = texto
}

function handleSubmit (evt) {// el evento es que se apriete el boton o sea se submitee el form
  evt.preventDefault()
  var campo = evt.target[0]
  if (campo.value !== "") { // si el campo está lleno
    agregar_item(campo.value)
    store.getItem('lista')
      .then(function (lista) {
        var lista = lista || []
        lista.push(campo.value)
        return store.setItem('lista', lista)
      })
      .then(function (value) {
        console.log('stored:', value)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}

//event listener
document.addEventListener("submit", handleSubmit, false);

store.getItem('lista')
  .then(function (lista) {
    lista.forEach(agregar_item);
  })
