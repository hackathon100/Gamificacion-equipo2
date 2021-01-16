import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from 'components/CircularProgress';
import { userSignIn } from 'features/Auth';
import { getAuthUser, isLogging } from 'features/selectors';

const SignIn = ({ authUser, history, userSignIn, isLogging }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authUser && authUser.username !== null) history.push('/');
  }, [history, authUser]);

  const handleSubmitForm = (event) => {
    const credentials = { username, password };
    event.preventDefault();
    userSignIn(credentials);
  };

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-login-content d-flex flex-column align-items-center">
          <div className="app-login-header">
            <h2 className="mb-4">
              <b>Ingreso de clientes</b>
            </h2>
          </div>
          <div className="app-login-form">
            <form onSubmit={handleSubmitForm}>
              <fieldset>
                <TextField
                  autoFocus
                  size="small"
                  variant="outlined"
                  label="Usuario"
                  fullWidth
                  onChange={(event) => setUsername(event.target.value)}
                  defaultValue={username}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <TextField
                  size="small"
                  variant="outlined"
                  type="password"
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  onChange={(event) => setPassword(event.target.value)}
                  defaultValue={password}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <div className="mb-3 d-flex align-items-center justify-content-center">
                  {!isLogging ? (
                    <Button
                      size="small"
                      type="submit"
                      className="w-100"
                      variant="contained"
                      color="primary"
                    >
                      <IntlMessages id="appModule.signIn" />
                    </Button>
                  ) : (
                    <CircularProgress />
                  )}
                </div>
                <div>
                  <Link to="/reset-password" title="Olvidé mi contraseña">
                    <span className="font-size-12">Olvidé mi contraseña</span>
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  authUser: PropTypes.shape({
    username: PropTypes.string,
  }),
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  userSignIn: PropTypes.func.isRequired,
  isLogging: PropTypes.bool,
};

SignIn.defaultProps = {
  authUser: undefined,
  isLogging: false,
};

const mapStateToProps = (state) => ({
  authUser: getAuthUser(state),
  isLogging: isLogging(state),
});

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (credentials) => dispatch(userSignIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
