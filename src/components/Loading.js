import React from 'react';
import './Loading.css'
import { inject, observer } from 'mobx-react';

@inject('Comon') @observer
class Loading extends React.Component {

    render() {
        const Comon = this.props.Comon;
        return <React.Fragment>
            <div className="loading">
                <div className="circle"></div>
            </div>
        </React.Fragment>
    }
}

export default Loading;