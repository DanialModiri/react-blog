import React, { Component, Fragment } from 'react';
import Header from './header';
import { observer, inject } from 'mobx-react'

@inject('Comon') @observer
class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div style={{ padding: 8 }}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}


export default Layout;