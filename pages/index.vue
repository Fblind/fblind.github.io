<template>
  <div>
    <banner :background="'background.png'">
      <div class="container">
        <h1 class="banner-title">{{$t('homeTitle')}}</h1>
        <h3 class="banner-subtitle">{{$t('homeSubtitle')}}</h3>
      </div>
    </banner>
    <main class="container main">
      <template v-for="post of posts">
        <post-card :key="post.title" :post="post" />
      </template>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import PostCard from '~/components/PostCard.vue'
import articles from '~/articles'

export default {
  name: 'Index',
  components: { Banner, PostCard },
  asyncData ({ app }) {
    const locale = app.i18n.locale === 'es' ? 'es' : 'en'
    async function asyncImport (blogName) {
      const wholeMD = await import(`~/articles/${locale}/${blogName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(articles[locale].map(asyncImport))
      .then((res) => {
        return {
          posts: res
        }
      })
  }
}

</script>

<style>
.banner-title {
  font-size: 4rem;
  padding-bottom: 1rem;
  border-bottom: solid 2px var(--white);
  text-shadow: 2px 2px 2px var(--dark);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform .4s, opacity .4s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
