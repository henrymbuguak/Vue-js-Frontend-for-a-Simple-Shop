<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="" placeholder="" v-model="product.name">
            <p class="help-block">Enter product name</p>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" id="" placeholder="" v-model="product.price">
            <p class="help-block">Enter product price</p>
          </div>
          <div class="form-group">
            <label for="name">Description</label>
            <textarea type="text" class="form-control" id="" placeholder="" v-model="product.description"> </textarea>
            <p class="help-block">Enter product description</p>
          </div>
          <button type="button" name="button" class="btn btn-success pull-right"
          v-show="product.name && product.price && product.description" @click="update">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert'

export default {
  created () {
    this.getProduct()
  },

  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct() {
      this.$http.get('api/products/' + this.$route.params.product).then(response => {
        this.product = response.body
      })
      
    },

    update() {
      this.$http.put('api/products/' + this.$route.params.product, this.product).then(response => {
        swal("Updated","Your product has been updated!", "success")
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
