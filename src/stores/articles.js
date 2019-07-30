import { observable, action } from 'mobx'
import fetchData from '../fetchData';

class Article {

    @observable articles = []
    @observable sort = 'date'
    @observable page = 1
    @observable size = null

    @action getArticles = (options) => {
        console.log('OPTIONS',(options || {}).page)
        const { page, sort } = options || {};
        if (page)
            this.page = page;
        if (sort)
            this.sort = sort;
        fetchData('/articles', {
            method: 'GET', params: {
                sort: sort || this.sort,
                page: page || this.page
            }
        }).then(res => {
            this.articles = res.articles;
            this.size = res.size;
        });
    }

    @action clear = () => {
        this.sort = 'date';
        this.page = 1;
        this.articles = [];
    }
}


export default new Article();