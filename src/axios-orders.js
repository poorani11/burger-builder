import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-e595a-default-rtdb.firebaseio.com/',
});

export default instance;
