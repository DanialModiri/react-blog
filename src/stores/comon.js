import { observe, action } from 'mobx'


class Comon {
    @observe error = undefined;

    @action setError = (error) => {
        
    }
}

export default new Comon();