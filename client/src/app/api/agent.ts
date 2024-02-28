import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

const sleep = () => new Promise(resolve => setTimeout(resolve,500))
axios.defaults.baseURL= 'http://localhost:5000/api/';
axios.defaults.withCredentials=true;

const responsebody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError)=>{
    const {data, status} = error.response as AxiosResponse;
    switch(status){
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error', {state : {error: data}});   
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get: (url : string) => axios.get(url).then(responsebody), 
    post: (url : string,body : object) => axios.post(url,body).then(responsebody),
    put: (url : string, body : object) => axios.put(url,body).then(responsebody),
    delete: (url : string) => axios.delete(url).then(responsebody)
}

const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId :number,quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`,{}),
    removeItem: (productId :number,quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id:number) => requests.get(`products/${id}`)
}

const testError = {
    get400Error : () => requests.get('buggy/bad-request'),
    get401Error : () => requests.get('buggy/unauthorised'),
    get404Error : () => requests.get('buggy/not-found'),
    get500Error : () => requests.get('buggy/server-error'),
    getValidationError : () => requests.get('buggy/validation-error'),
}

const agent ={
    Catalog,
    testError,
    Basket
}

export default agent;