import axios from 'axios';

const instance= axios.create({
    baseUrl: 'https://api.themoviedb.org/3',
});

// console.log(instance.get('/foo'));
export default instance;