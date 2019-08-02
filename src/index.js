import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'mobx-react'

import Comon from './stores/comon'
import Articles from './stores/articles'
import Sidenav from './stores/sidenav'
import App from './App';
import SingleArticle from './stores/singlearticle';
import User from './stores/user'
import Profile from './stores/profile'

const stores = {
    Comon,
    Articles,
    Sidenav,
    SingleArticle,
    User,
    Profile
}

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));