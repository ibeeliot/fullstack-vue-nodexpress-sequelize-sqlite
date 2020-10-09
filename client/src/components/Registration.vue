<template>
  <div>
    <h1>Register</h1>
    <input
      class="btn"
      type="email"
      name="email"
      placeholder="email here"
      v-on:input="email = $event.target.value"
      v-bind:value="email"
    />
    <br />
    <input
      class="btn"
      type="text"
      name="password"
      placeholder="password"
      v-bind:value="password"
      v-on:input="password = $event.target.value"
    />
    <br />
    <!-- <input
      class="btn submit"
      type="button"
      name="submit"
      value="Register"
      v-on:click="register"
    /> -->
    <button class="btn submit" name="register" v-on:click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Registration',
  components: { AuthenticationService },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      console.log('CLICCKCKJFDLSKf', this.email, this.password)
      // this.$emit('email', { email: this.email, password: this.password })
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log('response', response.data)
    }
  }
  // to use watch correctly, you have to set each "function" to be the same key you're returning for data()
  // watch: {
  //   email(value) {
  //     console.log('email has been changed', value)
  //   }
  // }
}
</script>

<style scoped>
/* .btn {
  height: 20px;
  width: 80px;
  background-color: rgba(125, 128, 128, 0.333);
} */
.submit {
  height: 30px;
  width: 60px;
}
</style>
