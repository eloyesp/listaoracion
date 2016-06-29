<lista-oracion>
  <yield/>
  <h1>Lista de oración</h1>
  <ul id="listaOracion">
    <li each={ motivos }>{ titulo }</li>
  </ul>
  <form>
     <label for="motivo">Motivo:</label>
     <input name="motivo"/>
       <button>orar</button>
  </form> 

  <script>
    this.motivos = [
      {titulo: 'que cosechemos zapallos'},
      {titulo: 'que no llueva'},
      {titulo: 'que broten los tomates'},
      {titulo: 'que el Benjamín llore menos'}
    ]
  </script>
</lista-oracion>
