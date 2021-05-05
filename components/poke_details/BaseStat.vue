<template lang="pug">
v-container
  v-card.mx-auto.text-center(color='primary', max-width='1100')
    v-card-title
      v-spacer
      v-col.ma-0(cols='2')
        v-select(:items='items', v-model='sparkType', dense, solo)
    v-card-text
      v-sheet.white--text(color='primary')
        v-sparkline(
          :value='baseStatValues',
          :labels='baseStatLabels',
          color='white',
          height='100',
          padding='10',
          stroke-linecap='round',
          smooth='',
          label-size=5,
          :type='sparkType'
        )
</template>
<script>
export default {
  props: {
    pokeStats: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    items: ['bars', 'trend'],
    sparkType: 'bars',
    baseStatLabels: [],
    baseStatValues: [],
  }),
  methods: {
    initiatePokeStat() {
      this.pokeStats.forEach((baseStat) => {
        this.baseStatValues.push(baseStat.base_stat)
        this.baseStatLabels.push(
          `${baseStat.stat.name} (${baseStat.base_stat})`
        )
        // return baseStat.base_stat
      })
      console.log(this.baseStatValues)
    },
  },
  created() {
    this.initiatePokeStat()
  },
}
</script>
<style lang="sass" scoped></style>
