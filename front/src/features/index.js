import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Common from 'features/Common';
import Settings from 'features/Settings';
import Auth from 'features/Auth';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    settings: Settings,
    auth: Auth,
  });
