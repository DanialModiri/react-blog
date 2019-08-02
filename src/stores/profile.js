import { observable, computed, action } from "mobx";
import fetchData from "../fetchData";

class Profile {

    @observable comments = []
    
    @action getComments = (user) => {
        fetchData('/comments/user/'+user, { method: 'GET' }).then(res=>{
            if(!res)
                return;
            this.comments = res.comments;

        })
    }
}

export default new Profile();