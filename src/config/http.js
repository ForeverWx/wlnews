import axios from 'axios';
import storage from '../config/storage'

axios.interceptors.request.use(
    config => {
        console.log(storage.get('token'))
        if (storage.get('token')) {
            config.headers['Authorization'] = 'Bearer ' + storage.get('token') // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

export function post(method) {
    axios
        .post( String(method)
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            conswole.log(error);
        });
}

export async function postp(method, params) {
    return new Promise((resolve, reject) => {
        axios.post( String(method), (JSON.parse(JSON.stringify(params))), Headers = {contentType: "application/json; charset=utf-8"}
        ).then(res => {
            console.log("数据");
            console.log(res.data.result);
            storage.set("tree", res.data.result);
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data)
        });
    });
}

export async function postlogin(method, params) {
    return new Promise((resolve, reject) => {
        axios.post(String(method), (JSON.parse(JSON.stringify(params))), Headers = {contentType: "application/json; charset=utf-8"}
        ).then(res => {
            storage.set("token", res.data.token);
            resolve(res.data.token);
        }).catch(err => {
            reject(err.data)
        });
    });
}


export async function gettree(method) {
    return new Promise((resolve, reject) => {
        axios.get(String(method), Headers = {contentType: "application/json; charset=utf-8"}
        ).then(res => {
            storage.set("tree", res.data.data);
            resolve(res.data.data);
        }).catch(err => {
            reject(err.data)
        });
    });
}

export function deletep(method, params) {
    axios
        .delete( String(method),
            (JSON.parse(JSON.stringify(params))
            ), Headers = {contentType: "application/json; charset=utf-8"}
        )
        .then(function (response) {
            console.log(response.data.result);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function get(method) {
    return new Promise((resolve, reject) => {
        axios.get( String(method)
        ).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function getp(method, params) {
    return new Promise((resolve, reject) => {
        axios.get( String(method), {
            params: params
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data)
        })
    });
}
