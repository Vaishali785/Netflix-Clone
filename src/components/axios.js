import axios from 'axios';

// added token as some request need token
const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
});

export default instance;