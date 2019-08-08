import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom'

@inject('User') @observer
class RedirectIfAuth extends React.Component {
    render(){
        const { need } = this.props;
        const User = this.props.User;
        if(User.auth === need)
            return this.props.children;
        if(User.auth === !need)
            return <Redirect to="/" />
        else
            return <React.Fragment>Loading</React.Fragment>;
    }
}

export default RedirectIfAuth;