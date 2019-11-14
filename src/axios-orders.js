import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-b96b4.firebaseio.com/'
});

export default instance;
