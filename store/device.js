export const state = () => ({
  device: 'mobile'
})

export const getters = {

}

export const actions = {}

export const mutations = {
  SET_DEVICE (state, payload) {
    state.device = payload
  }
}
