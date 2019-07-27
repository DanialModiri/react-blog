import fetchData from '../fetchData'
import { observable, action } from 'mobx'

class Sidenav {

    @observable categories = [];
    
    @action setCategories = () => {
        fetchData('/categories', { method: 'GET' }).then(res => {
            this.categories = res;
        });
    }
}


export default new Sidenav();