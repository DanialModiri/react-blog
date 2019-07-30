import { observable, action } from 'mobx'


class Comon {
    @observable error = undefined;
    @observable displaySidenav = false;
    @observable loading = false;

    @action setSidenavDisplay = (stat) => {
        this.displaySidenav = stat;
    }

    @action setError = (error) => {
        this.error = error;
    }

    @action setLoading = (stat) => {
        this.loading = stat;
    }
}

export default new Comon();