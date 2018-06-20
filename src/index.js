import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import registerServiceWorker from './utils/registerServiceWorker';
import Routes from './routes/routes';
import Login from './pages/login/Login';

const history = createBrowserHistory();
const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>
, target);

registerServiceWorker();