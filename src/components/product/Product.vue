<template>
  <div class="col-md-6">
    <div class="thumbnail">
      <img :src="'http://localhost:8000/' + product.imagePath" alt="" style="height: 130px; width: 250px">
      <div class="caption">
        <!-- <p>{{ product.user_id }}</p> -->
        <h3>{{ product.name }}</h3>
        <!-- <p>{{ product.description }}</p> -->
        <p>$ {{ product.price }}</p>
        <hr>
        <p>
          <a href="#" class="btn btn-default">Wish list</a>
          <a href="#" class="btn btn-success">Buy</a>
        </p>
        <hr>
        <p>
          <a href="#" class="btn btn-danger" role="button"
          v-if="product.user_id == authenticatedUser.id" @click="$emit('delete-product')">Delete</a>

          <router-link :to="'/products/' + product.id + '/edit'" class="btn btn-success">Edit</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>



export default {
  props: ['product','authenticatedUser'],
}
</script>
<style lang="scss" scoped>
</style>
