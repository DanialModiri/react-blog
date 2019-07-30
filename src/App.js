import React, { Component } from 'react';
import Layout from './components/layout';
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from './routes';

class App extends Component {

    componentDidMount() {

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