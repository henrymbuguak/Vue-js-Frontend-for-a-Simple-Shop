<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-body">
          <form @submit.prevent="create">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="file" class="form-control" id="" placeholder="" @change="imageChanged">
              <p class="help-block">Upload image</p>
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="" placeholder="" v-validate="'required'" v-model="product.name"
               name="name" >
              <div class="help-block alert alert-danger" v-show="errors.has('name')">{{ errors.first('name') }}</div>
              <p class="help-block">Enter product name</p>
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" class="form-control" id="" placeholder="" v-model="product.price"
              v-validate="'max_value:200|min_value:10'" name="price">
              <div class="help-block alert alert-danger" v-show="errors.has('price')">{{ errors.first('price') }}</div>
              <p class="help-block">Enter product price</p>
            </div>
            <div class="form-group">
              <label for="name">Description</label>
              <textarea type="text" class="form-control" id="" placeholder="" v-model="product.description"> </textarea>
              <p class="help-block">Enter product description</p>
            </div>
            <input type="submit" name="button" class="btn btn-success pull-right" value="Create">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        'image': ''
      }
    }
  },
  methods: {
    imageChanged(e) {
      console.log(e.target.files[0]);
      var fileReader = new FileReader()

      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.product.image = e.target.result
      }
      // console.log(this.product);

    },

    create() {
      this.$validator.updateDictionary({
        'Swahili': {
          attributes: {
            name: 'Jina'
          }
        }
      })
      // this.$validator.setLocale('Swahili')

      this.$validator.validateAll().then(() => {
        this.$http.post('api/products', this.product).then(response => {
          this.$router.push('/home')
        })
      })

    }
  }
}
</script>
<style lang="scss" scoped>
</style>
