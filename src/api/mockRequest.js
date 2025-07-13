import axios from 'axios';

const requests = axios.create({
    baseURL:'/mock',
    timeout: 5000,
})

requests.interceptors.request.use(
    function(config){
        return config;
    }
);


requests.interceptors.response.use(
    function(response){
        return response.data;
    }
);

export default requests;


