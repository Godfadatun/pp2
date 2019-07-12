import { LocalStorage } from 'quasar'

export function user (state,data) {
    state.user = data
}

export function logout (state) {
    state.user = null
    state.isLoggedIn = null
    LocalStorage.set('lu-token', '')
}
