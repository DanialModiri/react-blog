import { observable, action } from 'mobx'
import fetchData from '../fetchData';
import comon from './comon';

class Article {

    @observable articles = []
    @observable query = {
        sort: 'date',
        page: 1
    }

    @observable size = 0;

    @action getArticles = (options) => {
        this.query.page = 1;
        this.query = { ...this.query, ...options };
        const query = {...this.query};
        if (query.category)
            query.category = query.category._id;
        comon.clear();
        fetchData('/articles', {
            method: 'GET', params: query
        }).then(res => {
            this.articles = res.articles;
            this.size = res.count;
        });
    }

    @action clearAll() {
        this.query = {}
        this.getArticles();
    }

    @action clear(key) {
        this.query[key] = undefined;
        this.getArticles();
    }
}


export default new Article();