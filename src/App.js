import React, { Component } from 'react';
import Layout from './components/layout';
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from './routes';
import Cookies from 'react-cookies'
import User from './stores/user'

class App extends Component {


    componentWillMount(){
        const token = Cookies.load('token');
        if(token)
            User.getProfile(token);
        else
            User.logout();
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    {routes.map(item => <Route path={item.path}
                        render={(props) => {
                            return <Layout>
                                <item.component></item.component>
                            </Layout>
                        }}
                    ></Route>)}
                </Switch>
            </HashRouter>
        );
    }
}

export default App;