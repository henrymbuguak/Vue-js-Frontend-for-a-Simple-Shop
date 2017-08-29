<template>
  <div class="row">
    <our-products v-for="product in products" :product="product" :authenticatedUser="authenticatedUser"
    @delete-product="deleteProduct(product)">

    </our-products>
    <!-- <ul>
      <li v-for="product in products">
        {{ product.name }} | {{ product.price }}
      </li>
    </ul> -->
  </div>
</template>
<script>

import Product from './Product.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      products: []
    }
  },

  computed: {
    authenticatedUser () {
      return this.$auth.getAuthenticatedUser()
    }
  },

  components: {
    'our-products': Product
  },

  created() {
    //do something after creating vue instance
    this.$http.get('api/products').then(response => {
      this.products = response.body
    })
  },
  methods: {
    deleteProduct(product) {
      swal({
        title: "Are you sure?",
        text: "You will not able to recover this product",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes delete it!",
        closeOnConfirm: false
      }, function () {

        this.$http.delete('api/products/' + product.id).then(response => {
          let index = this.products.indexOf(product)
          this.products.splice(index,1)
          swal("Deleted!", "Your product has been deleted.", "success");
        })
      }.bind(this));
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
