<template lang="pug">
v-container(:class='$vuetify.breakpoint.mdAndDown && "pa-0"')
  v-row
    v-col.mt-5(cols=12, sm=6, md=4, lg=3, v-for='poke, _ in pokes', :key='_')
      v-row.mb-2(justify='center', align="center")
        v-img(
          :src='generateImage(poke.name)',
          max-height='120',
          max-width='100'
        )
      v-row(justify='center' align="center")
        a.pokemon__list-title(:href='`/pokes/details/${poke.name}`') {{ poke.name }}
</template>
<script>
export default {
  props: {
    pokes: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    imageUrl: 'https://img.pokemondb.net/artwork/',
  }),
  methods: {
    generateImage(name) {
      return this.imageUrl + name + '.jpg'
    },
  },
}
</script>
<style lang="sass" scoped>
.pokemon
  &__list
    margin: 20px 0
    &-item
      text-align: center
      margin: 20px 0

    &-title
      font-size: 18px
      margin:
        top: 10px
      color: black
      display: block
      text-decoration: none
      &:hover
        color: orange
    .ant-row
      margin:
        right: 0 !important
        left: 0 !important
</style>
