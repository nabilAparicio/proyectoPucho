import  axios  from "axios";

const instance = axios.create({
    baseURL: 'http://projects.nurtech.org/api/'
  });
instance.interceptors.request.use(async (config) => {
    config.headers.Accept = 'application/json'
    config.headers.ContentType = 'application/json';
    return config;
});

export const login = async (email, password) => (
    await instance.post('/login', {email: email, password: password})
    .then((res) => {
        return res.data
    })
    .catch((e) => {
        return e.response
    })
);
export const getUser = async (token) => (
    await instance.get('/user', {headers: { Authorization: `Bearer ${token}` }})
    .then((res) => {
        return res.data
    })
    .catch((e) => {
        return e.response
    })
);
export const getClients = async (token, idUser) => (
    await instance.get(`users/${idUser}/clients`, {headers: { Authorization: `Bearer ${token}` }})
    .then((res) => {
        return res.data
    })
    .catch((e) => {
        return e.response
    })
);