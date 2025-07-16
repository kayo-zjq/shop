import axios from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL:'/mock',
    timeout: 5000,
})

requests.interceptors.request.use(
    function(config){
        nProgress.start();
        return config;
    }
);


requests.interceptors.response.use(
    function(response){
        nProgress.done();
        return response.data;
    }
);

export default requests;


