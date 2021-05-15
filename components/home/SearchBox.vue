<template lang="pug">
v-container(fluid) 
  v-row(justify='center', align='center')
    v-col(cols=12)
      v-row(justify='center')
        v-img(max-height='150', max-width='250', src='/images/pokeApi.png')
    v-col(lg=10)
      v-form(@submit.prevent='search')
        v-text-field.grey--text(
          v-model='query',
          solo,
          rounded,
          placeholder='search by any keyword'
        )
        v-row.justify-end(no-gutters)
          v-col(cols=4, sm=2, md=2)
            v-btn.text-capitalize.hover-line.primary.white--text(
              depressed,
              rounded,
              large,
              width='100%',
              type='submit'
            ) Search
              v-spacer
              v-icon(right) mdi-arrow-right
</template>
<script>
export default {
  data: () => ({
    query: '',
  }),
  methods: {
    search() {
      this.query &&
        this.$router.push({
          name: 'pokes-search',
          query: { q: this.query },
        })
    },
  },
}
</script>
<style lang="sass" scoped></style>
