import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from 'components/CircularProgress';
import { validateToken, confirmPassword } from 'features/Auth';
import { getAuthUser, isLogging, tokenIsValid, passwordConfirmed } from 'features/selectors';

const ConfirmPassword = ({
  match,
  validateToken,
  authUser,
  history,
  confirmPassword,
  tokenIsValid,
  isLogging,
  passwordConfirmed,
}) => {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    validateToken(match.params.token);
  }, [match.params.token, validateToken]);

  useEffect(() => {
    if (authUser && authUser.username !== null) history.push('/');
  }, [history, authUser]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    confirmPassword(password, match.params.token);
  };

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        {tokenIsValid ? (
          <>
            <div className="app-login-content">
              {passwordConfirmed ? (
                <>
                  <div>
                    <p>
                      Su contraseña ha sido actualizada exitosamente. Haga click en el siguiente
                      enlace para volver al login.
                    </p>
                  </div>
                  <Link to="/signin" title="Login">
                    <span className="font-size-12">Ir al login</span>
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-1">
                    <Link to="/signin" title="Login">
                      <span className="font-size-12">Ir al login</span>
                    </Link>
                  </div>
                  <div className="app-login-header">
                    <h1 className="font-size-28">Nueva contraseña</h1>
                  </div>
                  <div>
                    <p>
                      A continuación, ingrese una nueva contraseña para ingresar a la plataforma. Esta contraseña reemplazará a la anterior.
                    </p>
                  </div>
                  <div className="app-login-form">
                    <form onSubmit={handleSubmitForm}>
                      <fieldset>
                        <TextField
                          autoFocus
                          type="password"
                          variant="outlined"
                          label="Nueva contraseña"
                          fullWidth
                          required
                          onChange={(event) => setPassword(event.target.value)}
                          defaultValue={password}
                          margin="normal"
                          className="mt-1 my-sm-3"
                        />
                        <TextField
                          variant="outlined"
                          type="password"
                          label="Confirmar contraseña"
                          error={password !== password2}
                          fullWidth
                          required
                          onChange={(event) => setPassword2(event.target.value)}
                          defaultValue={password2}
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
                              disabled={!password || !password2 || password !== password2}
                              color="primary"
                            >
                              Establecer nueva contraseña
                            </Button>
                          ) : (
                            <CircularProgress />
                          )}
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <span>
            {typeof tokenIsValid === 'boolean' ? (
              <span className="p-3">
                Link inválido o expirado. Intente repetir el proceso nuevamente.
              </span>
            ) : (
              ''
            )}
          </span>
        )}
      </div>
    </div>
  );
};

ConfirmPassword.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object,
  }).isRequired,
  validateToken: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    username: PropTypes.string,
  }),
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  confirmPassword: PropTypes.func.isRequired,
  tokenIsValid: PropTypes.bool,
  isLogging: PropTypes.bool,
  passwordConfirmed: PropTypes.bool,
};

ConfirmPassword.defaultProps = {
  authUser: undefined,
  tokenIsValid: false,
  isLogging: false,
  passwordConfirmed: false,
};

const mapStateToProps = (state) => ({
  authUser: getAuthUser(state),
  isLogging: isLogging(state),
  tokenIsValid: tokenIsValid(state),
  passwordConfirmed: passwordConfirmed(state),
});

const mapDispatchToProps = (dispatch) => ({
  validateToken: (token) => dispatch(validateToken(token)),
  confirmPassword: (password, token) => dispatch(confirmPassword(password, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
