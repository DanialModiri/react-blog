import { observable, action } from 'mobx'


class Comon {
    @observable error = undefined;
    @observable displaySidenav = false;
    

    @action setSidenavDisplay = (stat) => {
        this.displaySidenav = stat;
    }

    @action setError = (error) => {
        this.error = error;
    }
}

export default new Comon();