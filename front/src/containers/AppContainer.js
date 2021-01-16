import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'assets/vendors/style';
import MainApp from 'app/index';
import http from 'config/Api';
import asyncComponent from 'util/asyncComponent';
import { getAccessToken } from 'util/localStorage';
import { fetchUser, userLandsTo } from 'features/Auth';
import { getAuthUser, getInitUrl, getToken, isFetchingUser } from 'features/selectors';
import AppLocale from 'util/lngProvider';
import CircularProgress from 'components/CircularProgress';
import SignIn from 'containers/SignInContainer';
import ResetPassword from 'containers/ResetPasswordContainer';
import ConfirmPassword from 'containers/ResetPasswordContainer/ConfirmPassword';
import defaultTheme from 'config/defaultTheme';
import SideNavContainer from 'containers/SideNavContainer';
import Header from 'components/Header';
import RightPanelContainer from 'containers/RightPanelContainer';
import SnackbarContainer from 'containers/SnackbarContainer';
import DialogContainer from 'containers/DialogContainer';

const RestrictedRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const AppContainer = ({
  initURL,
  history,
  // token, TODO: add
  userLandsTo,
  fetchUser,
  match,
  location,
  isFetchingUser,
}) => {
  const token = 1234; // TODO remove

  useEffect(() => {
    if (initURL === '') userLandsTo(history.location.pathname);
  }, [history.location.pathname, initURL, userLandsTo]);

  useEffect(() => {
    if (token) {
      http.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;
      http.defaults.headers.common['access-token'] = `Bearer ${getAccessToken()}`;
      // fetchUser(); TODO: add
    }
  }, [fetchUser, token]);

  const regex = /\/reset-password-confirm.*|\/signin.*|\/reset-password.*/;
  if (location.pathname === '/') {
    if (initURL === '' || initURL === '/' || regex.test(initURL)) {
      return <Redirect to="/app/home" />;
    }
    return <Redirect to={initURL} />;
  }

  const applyTheme = createMuiTheme(defaultTheme);
  const currentAppLocale = AppLocale.es;

  return (
    <MuiThemeProvider theme={applyTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
          {!isFetchingUser ? (
            <div className="app-main">
              {token ? <SideNavContainer /> : null}
              <div className="app-content">
                <div className="d-flex flex-column container-fluid width-auto m-4 flex-fill">
                  {token && location.pathname !== '/signin' ? (
                    <div className="mb-4">
                      <Header history={history} />
                    </div>
                  ) : null}
                  <Switch>
                    <RestrictedRoute path={`${match.url}app`} token={token} component={MainApp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route path="/reset-password-confirm/:token" component={ConfirmPassword} />
                    <Route component={asyncComponent(() => import('components/Error404'))} />
                  </Switch>
                  <SnackbarContainer />
                  <DialogContainer />
                </div>
              </div>
              <RightPanelContainer />
            </div>
          ) : (
            <CircularProgress />
          )}
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

AppContainer.propTypes = {
  initURL: PropTypes.string.isRequired,
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  token: PropTypes.string,
  userLandsTo: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

AppContainer.defaultProps = {
  token: '',
};

const mapStateToProps = (state) => ({
  authUser: getAuthUser(state),
  initURL: getInitUrl(state),
  token: getToken(state),
  isFetchingUser: isFetchingUser(state),
});

export default connect(mapStateToProps, {
  userLandsTo,
  fetchUser,
})(AppContainer);
