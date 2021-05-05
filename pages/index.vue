<template lang="pug">
v-container(fill-height)
  HomeSearchBox
  section.ma-4
    v-divider
    v-row(v-if='pokes.length > 0') 
      v-col(cols=12)
        PokesCard(:pokes='pokes')
</template>

<script>
import HomeSearchBox from '@/components/home/SearchBox'
import PokesCard from '@/components/partials/PokesCard'
export default {
  components: {
    HomeSearchBox,
    PokesCard,
  },
  data: () => ({
    pokes: [],
  }),
  methods: {
    async fetchPokes() {
      try {
        const res = await this.$api.searchPokes('pokemon', 20, 20)
        this.pokes = res.results
      } catch (err) {
        this.pokes = []
      }
    },
  },
  created() {
    this.fetchPokes()
  },
}
</script>

<style lang="sass"></style>
