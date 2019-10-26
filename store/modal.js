export const state = () => ({
  showModal: false
})

export const getters = {

}

export const actions = {}

export const mutations = {
  SET_TOGGLE_MODAL (state, payload) {
    state.showModal = payload
  }
}
