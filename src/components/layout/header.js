import React from 'react';
import './header.css'
import { observer, inject } from 'mobx-react'
import Rippable from 'react-ripples'
import { withRouter, Link } from 'react-router-dom'
import articles from '../../stores/articles';


const UserLogin = ({ user, push }) => {
    if (user)
        return <Rippable onClick={() => {
            push('/profile');
        }} style={{ borderRadius: '50%' }}>
            <button className="menu-btn">
                {user.username}
                <span className="fa fa-user"></span>
            </button>
        </Rippable>
    else
        return <div style={{ margin: 'auto 8px', display: 'block' }}>
            <Link to="/login">ورود</Link>
        </div>
}

@withRouter @inject('Comon') @inject('User') @observer
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        displaySideNav: false,
        search: ''
    }

    render() {
        console.log('HEADER', this.props)
        return <header>

            <div className="left">
                مقاله ها
            </div>
            <div className="search" >
                <input placeholder="جستوجو" onChange={(e) => this.setState({ search: e.target.value })} />
                <Rippable onClick={() => {
                    articles.getArticles({ search: this.state.search });
                    this.props.history.push('/');
                }}>
                    <div style={{ height: 25, width: 25, textAlign: 'center' }}>
                        <i className="fa fa-search" />
                    </div>
                </Rippable>
            </div>
            <UserLogin push={this.props.history.push} user={this.props.User.user} />
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