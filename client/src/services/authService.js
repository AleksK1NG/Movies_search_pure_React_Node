import http from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt());

export const login = async (email, password) => {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const loginWithJwt = jwt => {
  localStorage.setItem(tokenKey, jwt);
};

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

// export default {
//   login,
//   logout,
//   getCurrentUser,
//   loginWithJwt,
//   getJwt
// }
