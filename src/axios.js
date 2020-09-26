import axios from 'axios'
const instance  = axios.create({
  baseURL: 'http://localhost:5001/e-commerce-made-in-home/us-central1/api'//API URL
})
export default instance