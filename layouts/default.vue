<template lang="pug">
v-app
  v-content
    components(:is='Header')
    nuxt
  v-footer(:absolute='!fixed', app)
    span &copy; {{ new Date().getFullYear() }} by &nbsp
    a(href='https://www.linkedin.com/in/sirayhan/') Saiful Islam Rayhan
</template>

<script>
import NavBar from '@/components/NavBar/DefaultNav'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      fixed: false,
    }
  },
  computed: {
    Header() {
      return this.$route.name === 'index' ? '' : 'NavBar'
    },
  },
  created() {
    this.$store.dispatch('pokes/fetchPokes')
  },
}
</script>
