<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <input type="name" class="form-control" v-model="name" placeholder="name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <button type="button" name="button" class="btn btn-success pull-right">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
