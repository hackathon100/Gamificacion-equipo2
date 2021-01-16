import React from 'react';
import moment from 'moment';
import 'moment/locale/es.js';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import configureStore, { history } from './store';
import AppContainer from './containers/AppContainer';

export const store = configureStore();
moment.locale('es'); // Set moment locale to spanish

const MainApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Switch>
          <Route path="/" component={AppContainer} />
        </Switch>
      </MuiPickersUtilsProvider>
    </ConnectedRouter>
  </Provider>
);

export default MainApp;
