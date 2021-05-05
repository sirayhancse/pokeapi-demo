<template lang="pug">
v-app
  v-content
    components(:is="Header")
    nuxt
  v-footer(:absolute='!fixed', app)
    span &copy; {{ new Date().getFullYear() }} by &nbsp
    a(href='https://www.linkedin.com/in/sirayhan/') Saiful Islam Rayhan
</template>

<script>
import NavBar from '@/components/NavBar/DefaultNav'
export default {
  data() {
    return {
      fixed: false,
    }
  },
  components: {
    NavBar,
  },
  computed: {
    Header() {
      return this.$route.name === 'index' ? '' : 'NavBar'
    },
  },
}
</script>
