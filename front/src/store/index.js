import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from 'features';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('features', () => {
      const nextRootReducer = require('features');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
export { history };
