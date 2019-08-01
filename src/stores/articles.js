import { observable, action } from 'mobx'
import fetchData from '../fetchData';

class Article {

    @observable articles = []
    @observable query = {
        sort: 'date',
        page: 1
    }

    @observable size = 0;

    @action getArticles = (options) => {
        this.query = { ...this.query, ...options };
        const query = {...this.query};
        if (query.category)
            query.category = query.category._id;
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