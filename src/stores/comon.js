import { observable, action } from 'mobx'


class Comon {
    @observable error = undefined;
    @observable success = undefined;
    @observable displaySidenav = false;
    @observable loading = false;

    @action setSidenavDisplay = (stat) => {
        this.displaySidenav = stat;
    }

    @action setSuccess = (message) => {
        this.error = undefined;
        this.success = message;
    }

    @action setError = (error) => {
        this.success = undefined;
        this.error = error;
    }

    @action setLoading = (stat) => {
        this.loading = stat;
    }

    @action clear(){
        this.error = undefined;
        this.success = undefined;
    }
}

export default new Comon();