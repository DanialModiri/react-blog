import Axios from "axios";
import comon from "./stores/comon";


export default (url, options, ) => {
    comon.setLoading(true);
    return new Promise((resolve, reject) => {
        Axios({ url, ...options }).then(res => {
            console.log(res.data)
            comon.setLoading(false);
            resolve(res.data)
        }).catch(err => {
            if (err.response && err.response.data)
                comon.setError(err.response.data);
            else
                comon.setError(err.message);
            comon.setLoading(false);
        })
    })
}


export const post = (url, body) => {
    comon.setLoading(true);
    return new Promise((resolve) => {
        Axios.post(url, body).then(res => {
            comon.setLoading(false);
            resolve(res.data);
        }).catch(err => {
            console.log('ERROR')
            if (err.response && err.response.data)
                comon.setError(err.response.data);
            else
                comon.setError(err.message);
            comon.setLoading(false);
        })
    })
}