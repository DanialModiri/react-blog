import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('User') @observer
class DisplayIfAuth extends React.Component {
    render() {
        const auth = this.props.User.auth;
        return <React.Fragment>
            {auth ? this.props.children : null}
        </React.Fragment>
    }
}

export default DisplayIfAuth;