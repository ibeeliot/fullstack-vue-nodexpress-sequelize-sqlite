// setting up connectors ot hit the back end

import axios from 'axios'

// this is creating an axios object which we can use as a module
export default () => {
  return axios.create({
    // this is our backend URL
    baseURL: `http://localhost:8081`
  })
}
