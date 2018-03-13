export default {
  namespaced: true,
  state: () => ({
    open: false,
  }),
  mutations: {
    SET_DRAWER: (state, open) => (state.open = open),
  },
  actions: {
    SET_DRAWER: ({ commit }, { open }) => commit('SET_DRAWER', open),
  },
  getters: {
    GET_DRAWER: state => state.open,
  },
}
