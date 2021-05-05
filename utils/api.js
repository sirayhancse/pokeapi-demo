class API {
  constructor(options) {
    this.$http = options.http
  }

  get(resource, params = {}) {
    return this.$http.$get(resource, {
      params,
    })
  }

  post(resource, data = {}, params = {}) {
    return this.$http.$post(resource, data, {
      params,
    })
  }

  async searchPokes(query, limit, offset) {
    const res = await this.get(`/${query}/?limit=${limit}&offset=${offset}`)
    return res
  }

  async getPokeDetails(name) {
    const res = await this.get('/pokemon/' + name)
    return res
  }
}

export default API
