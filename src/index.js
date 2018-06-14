import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './stores/configureStore';
import registerServiceWorker from './utils/registerServiceWorker';
import Routes from './routes/routes';

const history = createBrowserHistory();
const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
            <div>
                <Routes />
            </div>
        </ConnectedRouter>
    </Provider>
, target);

registerServiceWorker();