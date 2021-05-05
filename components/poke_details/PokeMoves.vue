<template lang="pug">
v-container(:class='$vuetify.breakpoint.mdAndDown && "pa-0"')
  v-card
    v-row(justify='center')
      v-col(md=4, v-for='pokeMove, _ in pokeMoves', :key='_')
        v-row.ma-2(justify='center')
          v-chip.primary.white--text {{ pokeMove.move.name }}
</template>
<script>
export default {
  props: {
    pokeMoves: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
  methods: {},
}
</script>
<style lang="sass" scoped></style>
