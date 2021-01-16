import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from 'components/CircularProgress';
import { sendResetPasswordRequest } from 'features/Auth';
import { getAuthUser, isLogging, resetRequestSent } from 'features/selectors';

const ResetPassword = ({
  authUser,
  history,
  sendResetPasswordRequest,
  resetRequestSent,
  isLogging,
}) => {
  const [email, setEmail] = useState('');
  const [validCaptcha, setValidCaptcha] = useState(false);

  useEffect(() => {
    if (authUser && authUser.username !== null) history.push('/');
  }, [history, authUser]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    sendResetPasswordRequest(email);
  };

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-login-content">
          <div className="mb-1">
            <Link to="/signin" title="Olvidé mi contraseña">
              <span className="font-size-12">Volver</span>
            </Link>
          </div>
          <div className="app-login-header">
            <h1 className="font-size-28">Recuperar contraseña</h1>
          </div>
          <div>
            <p className="m-0 font-size-14">
              Un correo con instrucciones de recuperación le será enviado a la dirección que ingrese
              a continuación.
            </p>
          </div>
          <div className="app-login-form">
            <form onSubmit={handleSubmitForm}>
              <fieldset>
                <TextField
                  size="small"
                  autoFocus
                  variant="outlined"
                  label="E-mail"
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                  defaultValue={email}
                  margin="normal"
                  className="mt-1 my-sm-3"
                />
                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6Le8C-sZAAAAAFCwJR_UJRe34P4QHYRQGne7NGoQ"
                    onChange={() => setValidCaptcha(true)}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center justify-content-center">
                  {!isLogging ? (
                    <Button
                      size="small"
                      type="submit"
                      className="w-100"
                      disabled={!email || !validCaptcha}
                      variant="contained"
                      color="primary"
                    >
                      Enviar link de recuperación
                    </Button>
                  ) : (
                    <CircularProgress />
                  )}
                </div>
                {resetRequestSent ? (
                  <div className="color-blue">
                    <p>{`Un email de recuperación ha sido enviado a ${email}. Siga las instrucciones contenidas en el mismo para reestablecer su contraseña.`}</p>
                  </div>
                ) : null}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  authUser: PropTypes.shape({
    username: PropTypes.string,
  }),
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  sendResetPasswordRequest: PropTypes.func.isRequired,
  resetRequestSent: PropTypes.bool,
  isLogging: PropTypes.bool,
};

ResetPassword.defaultProps = {
  authUser: undefined,
  resetRequestSent: false,
  isLogging: false,
};

const mapStateToProps = (state) => ({
  authUser: getAuthUser(state),
  isLogging: isLogging(state),
  resetRequestSent: resetRequestSent(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendResetPasswordRequest: (email) => dispatch(sendResetPasswordRequest(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
