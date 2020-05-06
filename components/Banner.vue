<template>
  <section class="banner" :style="styles">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    styles () {
      const backgroundURl = this.background ? require(`~/assets/${this.background}`) : null
      return backgroundURl ? { 'background-image': `url(${backgroundURl})` } : {}
    }
  }
}
</script>

<style>
.banner {
  background-attachment: fixed;
  background-color: var(--white);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  padding: 4rem 0 10rem 0;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
