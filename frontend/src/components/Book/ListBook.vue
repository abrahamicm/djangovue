<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2 class="d-inline-block">Listado de libros</h2>
        <div class="col-md-12">
          <b-table class="table" striped hover :items="books" :fields="fields">

            <template slot="action" slot-scope="data" >
               <b-button size="sm" variant="primary" :to="{ name: 'EditBook', params: {bookId: data.item.id} }">
                Editar
              </b-button>
              <b-button size="sm" variant="danger" :to="{ name: 'DeleteBook', params: {bookId: data.item.id} }">
                Eliminar
              </b-button>
            </template>

          </b-table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      fields: [
        { key: 'title', label: 'Titulo' },
        { key: 'description', label: 'Descripción' },
        { key: 'action', label: '' }
      ],
      books: []
    }
  },
  methods: {
    getBooks() {
      const path = 'http://127.0.0.1:8000/api/v1.0/books/'

      axios
        .get(path)
        .then((response) => {
          this.books = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getBooks()
  }
}
</script>

<style lang="css" scoped>
</style>
