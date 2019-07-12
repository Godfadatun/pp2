import { LocalStorage } from 'quasar'

export default {
  user: null,
  product: null,
  isLoggedIn: LocalStorage.getItem('nwps-token') ? LocalStorage.getItem('nwps-token') : null,
};
