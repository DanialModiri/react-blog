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
            <div className="search" >
                <input placeholder="جستوجو" />
                <Rippable>
                    <div style={{ height: 25, width: 25, textAlign: 'center' }}>
                        <i className="fa fa-search" />
                    </div>
                </Rippable>
            </div>
            <Rippable onClick={() => {
                this.setState({ displaySideNav: !this.state.displaySideNav });
            }} style={{ borderRadius: '50%' }}>
                <button className="menu-btn">
                    <span className="fa fa-user"></span>
                </button>
            </Rippable>
            <div className="options">

                <Rippable onClick={() => {
                    this.setState({ displaySideNav: !this.state.displaySideNav });
                }} style={{ borderRadius: '50%' }}>
                    <button className="menu-btn">
                        <span className="fa fa-bars"></span>
                    </button>
                </Rippable>
            </div>


        </header>
    }
}

export default Header;