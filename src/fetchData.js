import Axios from "axios";
import comon from "./stores/comon";


export default (url, options, ) => {
    return new Promise((resolve, reject) => {
        Axios({ url, ...options }).then(res => {
            console.log(res.data)
            resolve(res.data);
        }).catch(err => {
            if (err.response && err.response.data)
                comon.setError(err.response.data);
            else
                comon.setError(err.message);
        })
    })
}