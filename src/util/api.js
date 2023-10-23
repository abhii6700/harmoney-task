import axios from 'axios';

const messageBoardInstance = axios.create({
  baseURL: 'https://mapi.harmoney.dev',
});

function createBaseApiRequest(instance) {
  instance.interceptors.request.use(
    async (config) => {
      const accessToken = 'VGUBo49O_zxLnrq7';
      config.headers.Authorization = accessToken;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const GET = async (url, options = {}) => {
    try {
      const response = await instance.get(url, options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const POST = async (url, data, options = {}) => {
    try {
      const response = await instance.post(url, data, options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const PUT = async (url, data, options = {}) => {
    try {
      const response = await instance.put(url, data, options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const PATCH = async (url, data, options = {}) => {
    try {
      const response = await instance.patch(url, data, options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const DELETE = async (url, options = {}) => {
    try {
      const response = await instance.delete(url, options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return { get: GET, post: POST, patch: PATCH, put: PUT, delete: DELETE };
}

export const messageRequest = createBaseApiRequest(messageBoardInstance);
