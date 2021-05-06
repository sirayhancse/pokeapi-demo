<template lang="pug">
section
  v-container(fluid, style='min-height: 90vh')
    v-row(align='center', justify='center')
      v-col(cols=12, md=6)
        v-form(@submit.prevent='search')
          v-text-field.grey--text(
            prepend-inner-icon='mdi-magnify',
            v-model='q',
            solo,
            @keydown.enter='onPageChange',
            placeholder='Search again'
          )
    v-row(v-if='loader')
      v-col
        v-container
          v-row
            v-col(
              :class='$vuetify.breakpoint.mdAndDown && "py-0 my-0"',
              cols=12,
              md=4,
              lg=3,
              v-for='i in 8',
              :key='i'
            )
              v-skeleton-loader(type='image')
              v-skeleton-loader(type='list-item', tile)
    v-container(v-else)
      v-row(v-if='pokes.length > 0') 
        v-col(cols=12)
          PokesCard(:pokes='pokes')
        v-pagination(
          v-if='pagination_length != 0',
          v-model='page',
          :length='pagination_length',
          @input='onPageChange'
        )
      v-row.justify-center(v-else)
        v-col
          v-container
            v-row
              v-alert(type='error', min-width='100%', dismissible)
                h2.white--text {{ `No Pokemon found for '${$route.query.q}'` }}
            v-row.pa-2(justify='center')
              v-col(md=4)
                v-img(aspect-ration, src='/images/not_found.gif')
</template>

<script>
import PokesCard from '@/components/partials/PokesCard'
export default {
  components: {
    PokesCard,
  },
  data: () => ({
    pokes: [],
    q: '',
    error: false,
    pagination_length: 0,
    page: 1,
    per_page: 12,
    loader: true,
  }),
  watch: {
    '$route.query.q'() {
      this.loader = true
      this.page = parseInt(this.$route.query.page)
      this.q = this.$route.query.q
      this.search()
    },
  },
  mounted() {
    this.page = parseInt(this.$route.query.page)
    this.q = this.$route.query.q
    this.search()
  },
  methods: {
    onPageChange(page) {
      const url = `?q=${this.q || ''}&page=${this.page}`
      this.$router.push(url)
      this.search()
    },
    async search() {
      try {
        const res = await this.$api.searchPokes(
          this.q,
          this.per_page,
          this.page === 1 ? 0 : this.per_page * (this.page - 1)
        )
        this.pokes = res.results
        this.pagination_length = res.count
        this.loader = false
      } catch (err) {
        this.pokes = []
        this.loader = false
        console.log(err)
      }
    },
    set_pagination_length(pokes) {
      if (pokes.length > 0) {
        this.pagination_length =
          parseInt(pokes[0].total_entries) / this.per_page
        this.pagination_length =
          parseInt(pokes[0].total_entries) % this.per_page === 0
            ? this.pagination_length
            : this.pagination_length + 1
      } else {
        this.pagination_length = 1
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
