<template lang="pug">
v-card
  v-card-title.text-center.justify-center.py-6
    v-col(md=12)
      v-row(justify='center', align='center')
        v-img(
          :src='generateImage(this.$route.params.name)',
          max-height='180',
          max-width='150'
        )
      v-row(justify='center')
        h1.font-weight-bold.display-3.primary--text {{ this.$route.params.name }}
  v-card-subtitle
    v-row(justify='center')
      v-col(md=4, v-for='type, _ in poke.types', :key='_')
        v-row(justify='center')
          v-chip.primary.white--text {{ type.type.name }}

    v-container(fluid)
      v-tabs.mt-4(
        icons-and-text,
        color='primary',
        v-model='tab',
        grow,
        slider-color='primary'
      )
        v-tab.flex-row-reverse(href='#about') About
          v-icon.mr-1.mb-n1.mt-n1(flat) mdi-information
        v-tab.flex-row-reverse(href='#moves') Moves
          v-icon.mr-1.mb-n1.mt-n1(flat) mdi-gamepad
        v-tab.flex-row-reverse(href='#state') Base Stat
          v-icon.mr-1.mb-n1.mt-n1(flat) mdi-chart-areaspline
        v-tabs-items(v-model='tab')
          v-tab-item(value='about')
            AboutList(:poke='poke')
          v-tab-item(value='moves')
            PokeMoves(:pokeMoves='poke.moves')
          v-tab-item(value='state')
            BaseStat(:pokeStats='poke.stats')
</template>

<script>
import AboutList from '@/components/poke_details/AboutList'
import PokeMoves from '@/components/poke_details/PokeMoves'
import BaseStat from '@/components/poke_details/BaseStat'
export default {
  components: {
    AboutList,
    PokeMoves,
    BaseStat,
  },
  data: () => ({
    imageUrl: 'https://img.pokemondb.net/artwork/',
    poke: {},
    tab: null,
    items: ['About', 'Game', 'Movies', 'Base states'],
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  created() {
    const pokesName = this.$route.params.name
    this.getPokeDetails(pokesName)
  },
  methods: {
    generateImage(name) {
      return this.imageUrl + name + '.jpg'
    },
    async getPokeDetails(name) {
      try {
        const res = await this.$api.getPokeDetails(name)
        console.log(res)
        this.poke = res
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
