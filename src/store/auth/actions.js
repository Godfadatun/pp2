import axios from 'axios'
import { LocalStorage } from 'quasar'

export function user ({commit}) {
    return new Promise((resolve, reject) => {
    axios.get("api/user")
    .then(response => {
        if(response.data.status == 'success'){
            commit('user', response.data.user);
            resolve(response);
        }
      })
    .catch(err => {
        LocalStorage.set('ilu', '')
        reject(err);
    })
})
};

export function logout ({commit}) {
    return new Promise((resolve, reject) => {
    axios.get("api/logout")
    .then(response => {
        commit('logout');
        resolve(response);
      })
    .catch(err => {
        reject(err);
    })
})
};
