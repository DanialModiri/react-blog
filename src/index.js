import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'mobx-react'

import Comon from './stores/comon'
import Articles from './stores/articles'
import Sidenav from './stores/sidenav'
import App from './App';


const stores = {
    Comon,
    Articles,
    Sidenav
}

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));