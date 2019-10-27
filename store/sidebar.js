export const state = () => ({
  showSidebar: false
})

export const getters = {

}

export const actions = {}

export const mutations = {
  SET_TOGGLE_SIDEBAR (state, payload) {
    state.showSidebar = payload
  }
}
