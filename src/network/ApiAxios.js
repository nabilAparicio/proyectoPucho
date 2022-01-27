import  axios  from "axios";

const instance = axios.create({
    baseURL: 'http://projects.nurtech.org/api/'
  });
// instance.interceptors.request.use(async (config) => {
//     const token = localStorage.getItem('token');
//     config.headers.Authorization = (token ? token : '');
//     config.headers.Accept = 'application/json'
//     config.headers.ContentType = 'application/json';
//     return config;
// });

export const login = async (email, password) => (
    await instance.post('/login', {email: email, password: password})

);