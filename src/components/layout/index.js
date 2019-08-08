import React, { Component, Fragment } from 'react';
import Header from './header';
import { observer, inject } from 'mobx-react'
import './index.css'
import Sidenav from './Sidenav';
import { withRouter } from 'react-router-dom'

const Error = ({ error }) => {
    if (error)
        return <div className="error-alert">
            {error}
        </div>
    return null;
}

const Success = ({ message }) => {
    if (message)
        return <div className="error-alert">
            {message}
        </div>
    return null;
}

@inject('Comon') @observer
class Layout extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.Comon.setSuccess(undefined);
            this.props.Comon.setError(undefined);
        }
    }

    render() {
        return (
            <Fragment>
                <Header></Header>

                <div className="container">

                    <Sidenav></Sidenav>
                    <div style={{ width: '80%' }}>
                        <Success message={this.props.Comon.success} />
                        <Error error={this.props.Comon.error}></Error>
                        {this.props.children}
                    </div>

                </div>
            </Fragment>);
    }
}


export default withRouter(Layout);