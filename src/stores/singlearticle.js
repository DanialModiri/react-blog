import { observable, action } from 'mobx'
import fetchData, { post } from '../fetchData';
import comon from './comon';

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

    @action addToMyFavorite = () => {
        if(!this.selectedArticle)
            return;
        post(`/user/addToFavs/${this.selectedArticle._id}`).then(res => {
            comon.setSuccess('با موفقیت اضافه شد');
        })
    }
}

export default new SingleArticle();