export default function({ $axios, store }) {
  $axios.onRequest(config => {
    if (!config.headers.common.Authorization) {
      if (store.getters['user/loggedIn']) {
        if (!store.getters['user/tokenExpired']) {
          console.warn(
            'global access token not set, setting access token for this request'
          )
          $axios.setToken(store.state.user.user.token.access_token, 'Bearer')
          config.headers.common['Authorization'] =
            'Bearer ' + store.state.user.user.token.access_token
        } else {
          // TODO: Token no longer valid, try to refresh the token
        }
      }
    }
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code == 401) {
      store.commit('user/LOGOUT')
    }
  })
}
