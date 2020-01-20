import axios from 'axios';

/* const api = axios.create({
  baseURL: "http://localhost:3333"
}); */

const api = axios.create({
  baseURL: "https://semana-omnistack-10.herokuapp.com"
});

export default api;