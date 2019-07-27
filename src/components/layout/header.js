import React from 'react';
import './header.css'
import { observer, inject } from 'mobx-react'
import Rippable from 'react-ripples'

@inject('Comon') @observer
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        displaySideNav: false
    }


    handleMenuClicks = () => {

    }

    render() {
        return <header>

            <div className="left">
                مقاله ها
            </div>
            <Rippable onClick={() => {
                this.setState({ displaySideNav: !this.state.displaySideNav });
            }} style={{ borderRadius: '50%' }}>
                <button className="menu-btn">
                    <span className="fa fa-user"></span>
                </button>
            </Rippable>
            <Rippable onClick={() => {
                this.setState({ displaySideNav: !this.state.displaySideNav });
            }} style={{ borderRadius: '50%' }}>
                <button className="menu-btn">
                    <span className="fa fa-bars"></span>
                </button>
            </Rippable>

        </header>
    }
}

export default Header;