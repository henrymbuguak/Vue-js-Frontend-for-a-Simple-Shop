<template>
  <div id="" class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">

          <router-link tag="li"  to="/signin" v-if="! isAuth"><a>Login</a></router-link>



          <router-link tag="li" to="/signup" v-if="! isAuth"><a>Sign up</a></router-link>

          <router-link tag="li"  to="/home" v-if="isAuth"><a>Home</a></router-link>
          <router-link tag="li"  to="/products/create" v-if="isAuth"><a>Create</a></router-link>



          <router-link tag="li" to="/logout" v-if="isAuth"><a>Logout</a></router-link>



      </ul>
    </nav>
    <h3 class="text-muted">HenryLab</h3>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isAuth: null
      }
    },

    created() {
      //do something after creating vue instance
      this.isAuth = this.$auth.isAuthenticated()
      this.setAuthenticatedUser()
    },

    methods: {
      setAuthenticatedUser() {
        this.$http.get('api/user').then(response => {
          this.$auth.setAuthenticatedUser(response.body)
          console.log(this.$auth.getAuthenticatedUser())
        })
      }
    }
  }
</script>
