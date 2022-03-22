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

            <form>
              <div class="form-group row">
                <label for="title" class="col-sm-3 col-md-2 col-form-label">Título</label>
                <div class="col-sm-7 col-md-6">
                  <input type="text" name="title" placeholder="Título" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label for="description" class="col-sm-3 col-md-2 col-form-label">Descripción</label>
                <div class="col-sm-7 col-md-6">
                  <textarea name="desciption" placeholder="Descripción" rows="3"  class="form-control"></textarea>
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

</script>

<style lang="css" scoped>

</style>
