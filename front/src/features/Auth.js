import http from 'config/Api';
import { showSnackbarMessage } from 'features/Common';
import * as LocalStorage from 'util/localStorage';

// ----------------------------------- Actions ---------------------------------
// Action Types
const USER_LANDS_TO = 'auth/user_lands_to';
const LOAD_USER = 'auth/load_user';
const LOAD_TOKEN = 'auth/user_login';
const CLEAR_USER_DATA = 'auth/clear_user_data';
export const RESET_PASSWORD_START = 'auth/reset_password_start';
export const RESET_PASSWORD_END = 'auth/reset_password_end';
export const VALIDATE_TOKEN_START = 'auth/validate_token_start';
export const VALIDATE_TOKEN_END = 'auth/validate_token_end';
export const CONFIRM_PASSWORD_START = 'auth/confirm_password_start';
export const CONFIRM_PASSWORD_END = 'auth/confirm_password_end';
export const LOGIN_START = 'auth/login_start';
export const LOGIN_END = 'auth/login_end';
export const USER_FETCH_START = 'auth/user_fetch_start';
export const USER_FETCH_END = 'auth/user_fetch_end';

// Action Creators
export const userLandsTo = (url) => ({ type: USER_LANDS_TO, payload: url });
export const loadUser = (user) => ({ type: LOAD_USER, payload: user });
export const loadToken = (token) => ({ type: LOAD_TOKEN, payload: token });
export const clearUserData = () => ({ type: CLEAR_USER_DATA });
export const resetPasswordStart = () => ({ type: RESET_PASSWORD_START });
export const resetPasswordEnd = () => ({ type: RESET_PASSWORD_END });
export const validateTokenStart = () => ({ type: VALIDATE_TOKEN_START });
export const validateTokenEnd = (tokenIsValid) => ({
  type: VALIDATE_TOKEN_END,
  payload: tokenIsValid,
});
export const confirmPasswordStart = () => ({ type: CONFIRM_PASSWORD_START });
export const confirmPasswordEnd = () => ({ type: CONFIRM_PASSWORD_END });
export const loginStart = () => ({ type: LOGIN_START });
export const loginEnd = () => ({ type: LOGIN_END });
export const userFetchStart = () => ({ type: USER_FETCH_START });
export const userFetchEnd = () => ({ type: USER_FETCH_END });

// ----------------------------------- Reducer ---------------------------------
// Init State
const INIT_STATE = {
  token: localStorage.getItem('token'),
  refresh: localStorage.getItem('refresh'),
  initURL: '',
  authUser: LocalStorage.getUserInfo(),
  logging: false,
  fetching: false,
  tokenIsValid: undefined,
  resetRequestSent: false,
  passwordConfirmed: false,
};

// Reducer
export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START: {
      return { ...state, logging: true };
    }
    case LOGIN_END: {
      return { ...state, logging: false };
    }
    case USER_FETCH_START: {
      return { ...state, fetching: true };
    }
    case USER_FETCH_END: {
      return { ...state, fetching: false };
    }
    case RESET_PASSWORD_START: {
      return { ...state, logging: true };
    }
    case RESET_PASSWORD_END: {
      return { ...state, logging: false, resetRequestSent: payload };
    }
    case VALIDATE_TOKEN_START: {
      return { ...state, logging: true };
    }
    case VALIDATE_TOKEN_END: {
      return { ...state, logging: false, tokenIsValid: payload };
    }
    case CONFIRM_PASSWORD_START: {
      return { ...state, logging: true };
    }
    case CONFIRM_PASSWORD_END: {
      return { ...state, logging: false, passwordConfirmed: payload };
    }
    case USER_LANDS_TO: {
      return { ...state, initURL: payload };
    }
    case LOAD_TOKEN: {
      const { token, refresh } = payload;
      return { ...state, token, refresh };
    }
    case LOAD_USER: {
      return { ...state, authUser: action.payload };
    }
    case CLEAR_USER_DATA: {
      return {
        ...state,
        token: null,
        refresh: null,
        authUser: null,
      };
    }
    default:
      return state;
  }
};

// ----------------------------------- Side Effects ----------------------------
// Thunks
export const userSignIn = (credentials) => (dispatch) => {
  dispatch(loginStart());
  http.defaults.headers.common.Authorization = undefined;
  return http
    .post('api/token', credentials)
    .then(({ data }) => {
      // credentials = {username, password}
      if (data.access) {
        const { access, refresh } = data;
        const tokenObj = { token: access, refresh };
        LocalStorage.setToken(tokenObj);
        http.defaults.headers.common.Authorization = `Bearer ${LocalStorage.getAccessToken()}`;
        http.defaults.headers.common['access-token'] = `Bearer ${LocalStorage.getAccessToken()}`;
        dispatch(loadToken(tokenObj));
        dispatch(loginEnd());
      } else {
        dispatch(loginEnd());
        dispatch(showSnackbarMessage('Usuario y/o contraseña incorrectos. Intente nuevamente.'));
      }
    })
    .catch((error) => {
      dispatch(loginEnd());
      if (error.response && error.response.data.password)
        dispatch(showSnackbarMessage('Debe ingresar una contraseña.'));
      if (error.response && error.response.data.username)
        dispatch(showSnackbarMessage('Debe ingresar un usuario.'));
      if (error.response && error.response.data.detail)
        dispatch(showSnackbarMessage('Usuario y/o contraseña incorrectos. Intente nuevamente.'));
    });
};

export const fetchUser = () => (dispatch) => {
  dispatch(userFetchStart());
  return http
    .post('api/token/me')
    .then(({ data }) => {
      if (data.id) {
        LocalStorage.setUser(data);
        dispatch(loadUser(data));
      }
      dispatch(userFetchEnd());
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.config.url === `${error.response.config.baseURL}/api/token/refresh`
      ) {
        localStorage.clear();
        dispatch(clearUserData());
        console.log(error);
      }
      console.log(error);
      dispatch(userFetchEnd());
    });
};

export const userSignOut = () => (dispatch) => {
  return http
    .post('api/token/logout', { refresh: localStorage.getItem('refresh') })
    .then(({ data }) => {
      localStorage.clear();
      dispatch(clearUserData());
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        dispatch(clearUserData());
      } else {
        dispatch(showSnackbarMessage(error.message));
      }
    });
};

export const sendResetPasswordRequest = (email) => (dispatch) => {
  dispatch(resetPasswordStart());
  http.defaults.headers.common.Authorization = undefined;
  return http
    .post('api/password_reset/', { email })
    .then(({ data }) => {
      dispatch(showSnackbarMessage('Email enviado.'));
      dispatch(resetPasswordEnd(true));
    })
    .catch((error) => {
      dispatch(resetPasswordEnd(false));
      if (error.response && error.response.data.email)
        dispatch(showSnackbarMessage(error.response.data.email));
      console.log(error);
    });
};

export const validateToken = (token) => (dispatch) => {
  dispatch(validateTokenStart());
  http.defaults.headers.common.Authorization = undefined;
  return http
    .post('api/password_reset/validate_token/', { token })
    .then(({ data }) => {
      dispatch(showSnackbarMessage('Link válido. Sigue las instrucciones para finalizar.'));
      dispatch(validateTokenEnd(true));
    })
    .catch((error) => {
      dispatch(showSnackbarMessage('Link expirado. Inicia el proceso nuevamente.'));
      dispatch(validateTokenEnd(false));
      console.log(error);
    });
};

export const confirmPassword = (password, token) => (dispatch) => {
  dispatch(confirmPasswordStart());
  http.defaults.headers.common.Authorization = undefined;
  return http
    .post('api/password_reset/confirm/', { password, token })
    .then(({ data }) => {
      dispatch(showSnackbarMessage('Contraseña actualizada exitosamente'));
      dispatch(confirmPasswordEnd(true));
    })
    .catch((error) => {
      dispatch(showSnackbarMessage('Error de conexión. Intente nuevamente.'));
      dispatch(confirmPasswordEnd(false));
      console.log(error);
    });
};
