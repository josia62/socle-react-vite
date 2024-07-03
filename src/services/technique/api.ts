import axios from 'axios';
import store from '../redux/store';
import {encryptData} from './encryption';

enum serveError {
  INTERNAL_SERVER = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNVALAIBLE = 503,
}

export const headers = (token = '') => {
  const state: any = store.getState();
  if (token !== '') {
    token = `Bearer ${token}`;
  }
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: state.auth?.accessToken
      ? `Bearer ${state.auth?.accessToken}`
      : token,
  };
};

export const headersUpload = (token = '') => {
  const state: any = store.getState();
  if (token !== '') {
    token = `Bearer ${token}`;
  }
  return {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    Authorization: state.auth?.accessToken
      ? `Bearer ${state.auth?.accessToken}`
      : token,
  };
};

export const catchError = (error: any) => {
  let data,
    status = 500;

  if (error?.status) {
    status = error.status;
  } else {
    data = error?.response?.data;
    status = error?.response?.status;
  }
  serveurStatus(status);
  return {data, status};
};

const serveurStatus = (status: any) => {
  if (
    status === serveError.BAD_GATEWAY ||
    status === serveError.SERVICE_UNVALAIBLE
  ) {}
};

export const get = async (url: string, token: string, data?: any) => {
  try {
    let res;
    if (!data) {
      res = await axios.get(url, {
        headers: token ? headers(token) : headers(),
      });
    } else {
      res = await axios.get(url, {
        headers: token ? headers(token) : headers(),
        params: data,
      });
    }
    return res.data;
  } catch (error) {
    return catchError(error);
  }
};

export const post = async (url: string, data: any, token = '', encryption = false) => {
  try {
    if (encryption) {
      const response = encryptData(data);
      data = {
        data: response,
      };
    }
    const res = await axios.post(url, data, {
      headers: headers(token),
    });
    return res.data;
  } catch (error) {
    return catchError(error);
  }
};

export const put = async (url: string, data = {}, token = '', params = {}) => {
  try {
    let res;
    if (!Object.keys(params || {}).length) {
      res = await axios.put(url, data, {
        headers: headers(token),
      });
    } else {
      res = await axios.put(`${url}/${params}`, data, {
        headers: headers(token),
      });
    }
    return res.data;
  } catch (error) {
    return catchError(error);
  }
};

export const remove = async (url: string, token: string) => {
  try {
    const res = await axios.delete(url, {
      headers: token ? headers(token) : headers(),
    });
    return res.data;
  } catch (error) {
    return catchError(error);
  }
};

export const patch = async () => {};

export default {
  get,
  patch,
  post,
  put,
  remove,
};
