import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';


import './index.css';
import App from './components/App';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

const app = (
    <Root>
        <BrowserRouter basename="/the-movie-app">
            <App />
        </BrowserRouter>
    </Root>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
