const setToken = (tokenObj) => {
  const { token, refresh } = tokenObj;
  localStorage.setItem('token', token);
  localStorage.setItem('refresh', refresh);
};

const setUser = (userObj) => {
  const { id, username, first_name, last_name, email } = userObj;
  localStorage.setItem('id', id);
  localStorage.setItem('username', username);
  localStorage.setItem('first_name', first_name);
  localStorage.setItem('last_name', last_name);
  localStorage.setItem('email', email);
};

const clearToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
};

const getAccessToken = () => localStorage.getItem('token');
const getRefreshToken = () => localStorage.getItem('refresh');
const getUserInfo = () => ({
  id: localStorage.getItem('id'),
  username: localStorage.getItem('username'),
  first_name: localStorage.getItem('first_name'),
  last_name: localStorage.getItem('last_name'),
  email: localStorage.getItem('email'),
});

export { setToken, setUser, getAccessToken, getRefreshToken, getUserInfo, clearToken };
