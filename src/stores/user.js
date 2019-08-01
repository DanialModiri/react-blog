import { observable, action } from 'mobx'
import { post } from '../fetchData';

class User {
    @observable user = null;
    @observable auth = null;
    @observable token = null;


    @action login = (username, password) => {
        post('/user/signin', { username, password }).then(res=>{
            if(!res)
                return;
            console.log('USER', res);
            this.user = res.user;
            this.auth = true;
            this.token = res.token;
        })
    }

    @action logout(){
        this.auth = false;
        this.user = null;
        this.token = null;
    }
}

export default new User();