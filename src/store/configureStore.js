import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sessionService } from 'redux-react-session';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';

export default function configureStore(history) {
    //Configure Logger 
    const sagaMiddleware = createSagaMiddleware();

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const store = createStore(rootReducer, {}, compose(applyMiddleware(
        logger,
        sagaMiddleware,
        routerMiddleware(history)
    ),...enhancers));
    // RUN SAGA
    sagaMiddleware.run(rootSaga);
    // Init the session service
    sessionService.initSessionService(store);
    return store;
}