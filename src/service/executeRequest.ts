import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

export const executeRequest = (request): Promise<any> => {
    const baseUrl = "https://marketplace-demo.cleanhub.com/api/public/";
    const {method, url} = request;

    const proxy = {
        host: 'http://localhost:3000/',
        port: 3000
    }

    const requestConfig: AxiosRequestConfig = {
        method,
        url: `${baseUrl}${url}`,
        proxy
    }

    return axios(requestConfig)
        .then((response: AxiosResponse) => response)
        .catch((err: AxiosError) => console.error(err))
}