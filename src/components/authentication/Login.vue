<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <button @click="signin" type="button" name="button" class="btn btn-success pull-right">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin() {
      var data = {
        client_id: 2,
        client_secret: 'RYFIKm1ShYBU5R3JOoFtbgiWHU5FBo1GTUF6vbev',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }

      // this.$http.post("http://localhost:8000/oauth/token", data).then(response => {
      //   console.log(response);
      // })
       this.$http.post("oauth/token", data).then(function (response) {
         this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

         this.$router.push("/home")
      })
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
