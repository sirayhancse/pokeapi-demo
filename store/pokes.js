export const state = () => ({ pokes: [] })

export const getters = { getPokes: (state) => state.pokes }

export const mutations = { setPokes: (state, data) => (state.pokes = data) }

export const actions = {
  async fetchPokes({ commit }) {
    try {
      const res = await this.$api.searchPokes('pokemon', 1118, 0)
      commit('setPokes', res.results)
      await localStorage.setItem('pokes', JSON.stringify(res.results))
    } catch (err) {
      console.log(err)
    }
  },
}
