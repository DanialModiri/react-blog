import React, { Component, Fragment } from 'react';
import Header from './header';
import { observer, inject } from 'mobx-react'
import './index.css'
import Sidenav from './Sidenav';

@inject('Comon') @observer
class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>

                <div className="container">
                    <Sidenav></Sidenav>
                    <div style={{ width: '80%' }}>
                        {this.props.children}
                    </div>

                </div>
            </Fragment>);
    }
}


export default Layout;