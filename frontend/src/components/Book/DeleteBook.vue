<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>¿Estás seguro que deseas eliminar este libro?</h3>
        <p>Título: {{ this.element.title }}</p>
        <p>Descripción: {{ this.element.description }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
        <b-button class="btn-large-space" :to="{ name: 'ListBook' }">Cancelar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {

  data() {
    return {
      bookId: this.$route.params.bookId,
      element: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    getBook() {
      const path = 'http://127.0.0.1:8000/api/v1.0/books/' + this.bookId + '/'

      axios.get(path)
        .then((response) => {
          this.element.title = response.data.title
          this.element.description = response.data.description
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteBook() {
      const path = 'http://127.0.0.1:8000/api/v1.0/books/' + this.bookId + '/'
      axios.delete(path)
        .then((response) => {
          this.$router.push({name: 'ListBook'})
        })
        .catch((error) => {
          swal('No es posible eliminar el libro', '', 'error')
          console.log(error)
        })
    }
  },
  created() {
    this.getBook()
  }
}
</script>

<style lang="css" scoped>

</style>
