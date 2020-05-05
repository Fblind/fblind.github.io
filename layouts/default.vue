<template>
  <div>
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    Menu,
    Footer
  }
}
</script>
<style>
body {
  background: var(--light)
}
</style>
