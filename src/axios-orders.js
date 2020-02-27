import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d42be.firebaseio.com/'
});

export default instance;