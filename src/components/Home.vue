<template>
  <div id="">
    <h2>Welcome to Vue shopping cart</h2>
    <our-products></our-products>
  </div>
</template>
<script>

import Products from './product/Products.vue'

export default {
  components: {
    'our-products': Products
  }
}
</script>
<style lang="scss">
</style>
