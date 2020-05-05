<template>
  <header class="container-fluid header" :class="headerClass">
    <nav class="navbar navbar-expand-lg header-menu container">
      <div class="collapse navbar-collapse text-dark">
        <ul class="navbar-nav header-menu-items ml-md-auto">
          <!-- <li class="nav-item header-menu-item mr-2">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item header-menu-item mr-2">
            <a class="nav-link">Sobre mi</a>
          </li> -->
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="nav-item header-menu-item mr-2"
          >
            <nuxt-link
              class="nav-link"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      headerClass: ''
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateMenuClass)
  },
  destroy () {
    window.removeEventListener('scroll', this.updateMenuClass)
  },
  methods: {
    updateMenuClass () {
      const currentYPosition = window.scrollY
      if (currentYPosition > 100) {
        this.headerClass = 'header-scrolled shadow bg-light'
        return
      }
      this.headerClass = ''
    }
  }
}
</script>

<style>
.header {
  background: none;
  position: fixed;
  padding: 0px 0px 0.5rem 0px;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 997;
}
.active {
  padding-bottom: 0.2rem;
  border-bottom: solid 2px var(--blue);
}
.nav-link {
  color: var(--dark)
}
</style>
