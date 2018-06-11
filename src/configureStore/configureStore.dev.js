import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../components/common/DevTools';
import reducers from '../reducers';

const configureStore = (preloadState) => {
  const store = createStore(
    reducers,
    preloadState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument(),
    ),
  );
  return store;
};

export default configureStore;
