import axios from 'axios'

var baseURL = process.env.BACKEND_PROTO + '://' + process.env.BACKEND_URL + ':' + process.env.BACKEND_PORT

export const HTTP = axios.create({
  baseURL: baseURL
})
