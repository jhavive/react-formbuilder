// import { showSnackBar, showLoginTenant } from "../actions";
// import {  showLoginTenant } from '../'

import config from '../app-config/api-endpoint'

export const jsonHandling = (response) => {
    if(response.status/100!==2 && response.status/100!==3){
        throw Error(response.statusText);
    }
    try{
        return response.json()
    } catch(e){
        response
    }
}

const createConfig = (type, headers={}, body={}) => {
    let config = {
        method: type,
        headers
    }
    if( type === 'post' || type === 'put' ){
        config.body = JSON.stringify(body)
        if(!headers['Content-Type'])
        headers['Content-Type'] = 'application/json'
    }
    return config
}

const getHeader = () => ({"Authorization": 'Token '+window.localStorage.getItem('token')}) 

const request = (url, config) => {
    return fetch(url, config)
    .then(response => {
        switch(response.status){
        case 401:
        case 403: 
            break
        case 400:
            throw new Error(response.status)
        case 500:
            // dispatch(showSnackBar("OOPS!! Some error occured"))
            throw new Error(response.status)
        default: 
            return response.json()
        }
    })
    .catch(e => {
        console.log(e)
        throw new Error(0)
    })
}

const appendUrl = (endpoints) => {
    return config.baseURL+'/'+endpoints+(endpoints.includes('?')?'':'/')
} 

export const login = () => {
    return request(url, createConfig(post, header))
}

export const get = (endpoint, headers={}) => {
    return request(appendUrl(endpoint), createConfig('get', headers))
}

export const post = (endpoint, body, headers={}) => {
    return request(appendUrl(endpoint), createConfig('post', headers, body))
}

export const putRequest = (endpoint, body, headers={}) => {
    return request(appendUrl(endpoint), createConfig('put', headers, body))
}

export const deleteRequest = (endpoint, headers={}) => {
    return request(appendUrl(endpoint), createConfig('delete', headers))
}

export const adminGet = (url) => {
    return request(url, createConfig('get', getHeader()))
}

export const adminPost = (url, body) => {
    return request(url, createConfig('post', getHeader(), body))
}

export const adminPut = (url, body) => {
    return request(url, createConfig('put', getHeader(), body))
}

export const adminDelete = (url) => {
    return request(url, createConfig('delete', getHeader()))
}

// export const logoutAdmin = () => {
//   let auth = window.gapi.auth2.getAuthInstance();
//   auth.signOut().then(function () {
//     auth.disconnect();
//     window.location.reload()
//   });
// }