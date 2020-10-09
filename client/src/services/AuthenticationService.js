import Api from './Api'

// credentials will be an object type
export default {
  register(credentials) {
    return Api().post('register', credentials)
  }
}

// this is how you would call the module returned from this file from a consumer module point of view
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
