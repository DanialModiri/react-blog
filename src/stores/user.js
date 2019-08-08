import { observable, action } from 'mobx'
import fetchData, { post } from '../fetchData';
import Profile from './profile'
import SingleArticle from './singlearticle'
import Cookies from 'react-cookies'

class User {
    @observable user = null;
    @observable auth = null;
    @observable token = null;


    @action login = (username, password) => {
        post('/user/signin', { username, password }).then(res => {
            if (!res)
                return;
            console.log('USER', res);
            this.user = res.user;
            this.auth = true;
            this.token = res.token;
            Profile.getComments(res.user._id);
        })
    }

    @action getProfile = (token) => {
        fetchData('/user/profile', { method: 'GET' }).then(res => {
            if (!res)
                return;
            this.user = res;
            this.token = token;
            this.auth = true;
            Profile.getComments(res._id);
        })
    }

    @action insertComment = (body) => {
        if(!SingleArticle.selectedArticle)
            return;
        post('/comments/'+SingleArticle.selectedArticle._id, { body }).then(res=>{
            if(!res)
                return;
            SingleArticle.setCurrentArticle(SingleArticle.selectedArticle._id);
        });
    }

    @action logout() {
        this.auth = false;
        this.user = null;
        this.token = null;
        
        Cookies.remove('token');
    }
}

export default new User();