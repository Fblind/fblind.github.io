<template>
  <div class="main-about">
    <banner>
      <div class="container text-left">
        <div class="row">
          <div class="col text-dark">
            <h4>{{ $t('hiIam') }}</h4>
            <h1 class="display-3">
              Facundo Soria Guerrero
            </h1>
            <h1 v-html="$t('developerDescription')" />
            <h4>{{ $t('moreExpiriencedInTheBackend') }}</h4>
          </div>
          <div class="col d-none d-lg-block">
            <img src="~/assets/me.png" class="img-me" alt="">
            <p class="bg-primary background-me img-fluid" />
          </div>
        </div>
      </div>
    </banner>
    <main class="container main">
      <article class="card post-card-preview full-post about-content">
        <h1 class="display-4">
          {{ $t('aboutMe') }}<strong class="text-primary">.</strong>
        </h1>
        <p v-html="$t('aboutMeFirst')" />
        <p v-html="$t('aboutMeSecond')" />
        <p v-html="$t('aboutMeThird')" />
        <p v-html="$t('aboutMeForth')" />
        <h1 class="display-4">
          {{ $t('background') }}<strong class="text-primary">.</strong>
        </h1>
        <p v-html="$t('backgroundFirst')" />
        <p v-html="$t('backgroundSecond')" />
        <h1 class="display-4">
          {{ $t('contactMe') }}<strong class="text-primary">.</strong>
        </h1>
        <p v-html="$t('contactMeFirst')" />
      </article>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import img from '~/assets/me.png'
export default {
  name: 'About',
  components: { Banner },
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

<style>
.full-post {
  position: relative;
  top: -100px;
}

.post-card-preview {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  background: var(--white);
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
}

.img-me {
  height: 20rem;
  border-radius: 5px;
  position: relative;
  z-index: 99;
}

.background-me {
  height: 20rem;
  width: 20rem;
  border-radius: 5px;
  position: absolute;
  top: 15%;
  left: 25%;
}

.main-about {
  background: linear-gradient(90deg, var(--blue) 50%, var(--light) 50%) no-repeat;
}

.about-content {
  padding: 2rem;
  padding-top: 0rem;
  padding-bottom: 4rem;
}

.about-content p {
  line-height: 1.7rem;
}

@media screen and (max-width: 576px) {
  .display-4 {
    font-size: 3rem
  }
}

</style>
