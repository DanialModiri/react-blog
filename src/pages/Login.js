import React from 'react';
import { observer, inject } from 'mobx-react'
import './Login.css'

@inject('User') @observer
class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    login = (e) => {
        e.preventDefault();
        this.props.User.login(this.state.username, this.state.password);
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return <div className="card">
            <form onSubmit={this.login}>
                <h4>ورود</h4>
                <input className="login-field"
                    onChange={this.handleInputChange}
                    value={this.state.username} name="username"
                    placeholder="نام کاربری" />
                <input className="login-field" name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    placeholder="رمز عبور" />
                <button className="btn-login">ورود</button>
            </form>

        </div>
    }

}

export default Login;