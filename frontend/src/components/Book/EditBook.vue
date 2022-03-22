<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar libro</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">

            <form  @submit="onSubmit">
              <div class="form-group row">
                <label for="title" class="col-sm-3 col-md-2 col-form-label">Título</label>
                <div class="col-sm-7 col-md-6">
                  <input type="text" name="title" placeholder="Título" class="form-control" v-model.trim="form.title">
                </div>
              </div>
              <div class="form-group row">
                <label for="description" class="col-sm-3 col-md-2 col-form-label">Descripción</label>
                <div class="col-sm-7 col-md-6">
                  <textarea name="desciption" placeholder="Descripción" rows="3"  class="form-control"  v-model.trim="form.description"></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Guardar</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{ name: 'ListBook' }">Cancelar</b-button>
                </div>
              </div>
            </form>

          </div>
        </div>
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
      form: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const path = 'http://127.0.0.1:8000/api/v1.0/books/' + this.bookId + '/'

      axios.put(path, this.form)
        .then((response) => {
          this.form.title = response.data.title
          this.form.description = response.data.description

          swal('Libro actualizado exitosamente', '', 'success')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getBook() {
      const path = 'http://127.0.0.1:8000/api/v1.0/books/' + this.bookId + '/'

      axios.get(path)
        .then((response) => {
          this.form.title = response.data.title
          this.form.description = response.data.description
        })
        .catch((error) => {
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
