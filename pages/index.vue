<template lang="pug">
v-container(fill-height)
  HomeSearchBox
</template>

<script>
import HomeSearchBox from '@/components/home/SearchBox'
import PokesCard from '@/components/partials/PokesCard'
export default {
  components: {
    HomeSearchBox,
    PokesCard,
  },

  data: () => ({}),
  methods: {},
}
</script>

<style lang="sass"></style>
