import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export const history = createHistory();

// const middleware = routerMiddleware(history);

// export function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(middleware),
//     );
// }

export function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}
