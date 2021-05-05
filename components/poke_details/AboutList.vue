<template lang="pug">
v-container.ma-2
    v-row(justify='center')
      v-list(dense)
        v-list-item
          v-row
            v-col(cols=12)
                v-row
                    v-list-item-content 
                        h2.primary--text Height: 
                    v-list-item-content.align-end 
                        h4 {{ poke.height }}
            v-col(cols=12)
                v-row
                    v-list-item-content 
                        h2.primary--text Weight: 
                    v-list-item-content.align-end 
                        h4 {{ poke.weight }}
            v-col(cols=12)
                v-row
                    v-list-item-content 
                        h2.primary--text Abilities: 
                    v-list-item-content.align-end 
                        h4(v-for='ability_obj in poke.abilities') {{ ability_obj.ability.name }} 
            v-col(cols=12 v-if='poke && poke.species && poke.species.egg_groups')
                v-row
                    v-list-item-content 
                        h2.primary--text Egg Groups: 
                    v-list-item-content.align-end 
                        h4(v-for='egg in poke.species.egg_groups') {{ egg.name }} 
</template>
<script>
export default {
  props: {
    poke: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  methods: {},
}
</script>
<style lang="sass" scoped></style>
