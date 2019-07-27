import { observe, action } from 'mobx'
import fetchData from '../fetchData';

class Article {

    @observe articles = []
    
    @action getArticles = (page) => {
        fetchData('/articles', { method: 'GET' }).then(res=>{
            this.articles = res;
        });
    }
}


export default new Article();