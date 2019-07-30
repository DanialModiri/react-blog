import { observable, action } from 'mobx'
import fetchData from '../fetchData';


class SingleArticle {

    @observable selectedArticle = null;

    @observable comments = null;

    @action setCurrentArticle = (id) => {
        fetchData(`/articles/${id}`, { method: "GET" }).then(res => {
            this.selectedArticle = res;
        });

        fetchData(`/comments/${id}`).then(res => {
            this.comments = res;
        });
    }
}

export default new SingleArticle();