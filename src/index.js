import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import allReducers from './reducers/reducers_index';
import thunk from 'redux-thunk';



// import routes from './server/routes/users';

const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk), // allows us to dispatch async actions
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Provider makes the store for all of your data
// available to all containers / components
ReactDOM.render((
  <Provider store={store}>
    <Router >
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
