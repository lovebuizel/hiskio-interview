/* eslint-disable no-shadow */

export const state = () => ({
  user: null,
  openAuth: false,
  openCart: false,
  token: '',
  carts: []
})

export const getters = {
  get_user(state) {
    return state.user
  },
  get_openAuth(state) {
    return state.openAuth
  },
  get_openCart(state) {
    return state.openCart
  },
  get_token(state) {
    return state.token
  },
  get_carts(state) {
    return state.carts
  }
}

export const mutations = {
  set_cart(state, { data }) {
    state.carts = data
  },
  toggle_openAuth(state) {
    state.openAuth = !state.openAuth
  },
  toggle_openCart(state) {
    state.openCart = !state.openCart
  },
  set_token(state, { token }) {
    state.token = token
  },
  set_user(state, { account, avatar }) {
    state.user = { account, avatar }
  }
}

export const actions = {
  async post_login({ commit, dispatch }, { account, password }) {
    const res = await this.$axios.post('/api/auth/login', {
      account,
      password,
      confirm: true
    })
    const token = res.data.access_token
    if (res.status !== 200 || !token) return
    commit('set_token', { token })
    commit('toggle_openAuth')
    dispatch('get_me')
  },
  async get_me({ commit, getters }) {
    const res = await this.$axios.get('/api/me', {
      headers: {
        Authorization: `Bearer ${getters.get_token}`
      }
    })
    if (res.status !== 200) return
    commit('set_user', res.data)
  },
  async post_cart({ commit }) {
    const carts = JSON.parse(localStorage.getItem('carts'))
    if (!carts) return
    const res = await this.$axios.post('/api/carts', {
      items: carts,
      coupon: ''
    })
    if (res.status !== 200) return
    commit('set_cart', res.data)
  }
}

