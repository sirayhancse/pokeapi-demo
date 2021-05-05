<template lang="pug">
div
  v-app-bar.white.elevation-0(app, flat)
    v-toolbar-items
      v-btn(text, tile, x-large, @click='$router.push({ name: "index" })')
        v-img(max-height='100', max-width='100', src='/images/pokeApi.png')
</template>
<script>
export default {
  data: () => ({}),
}
</script>
<style lang="sass" scoped></style>
