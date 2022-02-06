import  axios  from "axios";

const instance = axios.create({
    baseURL: 'http://projects.nurtech.org/api/'
  });
instance.interceptors.request.use(async (config) => {
    config.headers.Accept = 'application/json'
    config.headers.ContentType = 'application/json';
    console.log(config)
    return config;
});

export const login = async (email, password) => (
    await instance.post('/login', {email: email, password: password})

);
export const getUser = async (token) => (
    await instance.get('/user', {headers: { Authorization: `Bearer ${token}` }})

);
