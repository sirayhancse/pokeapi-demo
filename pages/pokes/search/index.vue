<template lang="pug">
section
  v-container(fluid, style='min-height: 90vh')
    v-row(align='center', justify='center')
      v-col(cols=12, md=6)
        v-form(@submit.prevent='filterPokes')
          v-text-field.grey--text(
            prepend-inner-icon='mdi-magnify',
            v-model='q',
            solo,
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
      v-row(v-if='filterPokes().length > 0') 
        v-col(cols=12)
          PokesCard(:pokes='filterPokes()')
      //-   v-pagination(
      //-     v-if='paginationLength != 0',
      //-     v-model='page',
      //-     :length='paginationLength',
      //-     @input='onPageChange'
      //-   )
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
import { mapGetters } from 'vuex'
import PokesCard from '@/components/partials/PokesCard'
export default {
  components: {
    PokesCard,
  },
  data: () => ({
    q: '',
    error: false,
    // paginationLength: 0,
    // page: 1,
    // perPage: 24,
    loader: true,
  }),
  computed: mapGetters({
    pokes: 'pokes/getPokes',
  }),
  watch: {
    '$route.query.q'() {
      this.loader = true
      // this.page = parseInt(this.$route.query.page)
      this.q = this.$route.query.q
    },
  },
  mounted() {
    // this.page = parseInt(this.$route.query.page)
    this.q = this.$route.query.q
    this.filterPokes()
  },
  methods: {
    // onPageChange(page) {
    //   const url = `?q=${this.q || ''}&page=${this.page}`
    //   this.$router.push(url)
    //   this.filterPokes()
    // },
    filterPokes() {
      const filterValue = this.q.toLowerCase()
      const filter = (poke) => poke.name.toLowerCase().includes(filterValue)
      if (filter) {
        this.loader = false
        return this.pokes.filter(filter)
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
