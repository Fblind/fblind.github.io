<template>
  <header class="container-fluid header" :class="headerClass">
    <nav class="navbar navbar-expand-lg header-menu container">
      <b-navbar-brand>
        <nuxt-link :to="localePath('index')">
          <img :src="require(`~/assets/${logo}`)" class="d-inline-block align-top logo" alt="logo">
        </nuxt-link>
      </b-navbar-brand>
      <ul class="navbar-nav header-menu-items ml-auto text-dark">
        <nuxt-link class="nav-link capitalize" :to="localePath('index')">
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link class="nav-link capitalize" :to="localePath('about')">
          {{ $t('aboutMe') }}
        </nuxt-link>
        <nuxt-link class="nav-link capitalize" :to="localePath('garden')">
          {{ $t('myGarden') }} 🌱
        </nuxt-link>
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
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      headerClass: '',
      logo: 'logo.png'
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
      if (currentYPosition > 50) {
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

.capitalize {
  text-transform: capitalize;
}

.logo {
  width: 2rem;
}

@media (min-width: 300px) {
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
}

</style>
