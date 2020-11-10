<template>
  <div>
    <banner :background="'garden-cover.jpg'">
      <!-- <div class="container"></div> -->
    </banner>
    <main class="container main">
      <p>This is my garden and I use it as a continuous way of learning and to keep what I discovered in one place...</p>
      <ul>
        <li v-for="essay of essays" :key="essay.title">
          <nuxt-link :to="getEssayURL(essay)">{{ essay.title }} </nuxt-link>
        </li>
      </ul>
      <span>Photo by <a href="https://unsplash.com/@yendvu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Yen Vu</a> on <a href="https://unsplash.com/s/photos/gardening-landscape?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import img from '~/assets/garden-cover.jpg'
import garden from '~/garden'

export default {
  name: 'Garden',
  components: { Banner },
  asyncData ({ app }) {
    //const locale = app.i18n.locale === 'es' ? 'es' : 'en'
    async function asyncImport (name) {
      const wholeMD = await import(`~/garden/${name}.md`)
      return wholeMD.attributes
    }

    return Promise.all(garden.map(asyncImport))
      .then((res) => {
        return {
          essays: res.reverse()
        }
      })
  },
  methods: {
    getEssayURL (essay) {
      return `garden/${essay.url}`
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Facundo Soria Guerrero' },
        { name: 'description', content: this.$t('about.description') },
        { property: 'og:title', content: this.$t('about.title') },
        { property: 'og:description', content: this.$t('about.description') },
        { property: 'og:url', content: process.env.BASE_URL + this.$router.currentRoute.fullPath },
        { property: 'og:image', content: process.env.BASE_URL + img },
        { name: 'twitter:description', content: this.$t('about.description') },
        { name: 'twitter:image', content: process.env.BASE_URL + img }
      ]
    }
  }
}
</script>
