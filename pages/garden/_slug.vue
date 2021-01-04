<template>
  <div>
    <banner :background="'garden-cover.jpg'">
      <!-- <div class="container">
        <h1 class="banner-title no-border">
          &nbsp;
        </h1>
        <h3 class="banner-subtitle">
          &nbsp;
        </h3>
      </div> -->
    </banner>
    <main class="container main">
      <article class="card post-card-preview full-post about-content">
        <div class="card-body post-card-preview-content blog-content">
          <h1 class="text-center mt-4 mb-4">
            {{ title }}
          </h1>
          <component :is="dynamicComponent" />
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
export default {
  name: 'GardenSlug',
  components: { Banner },
  data () {
    return {
      // image: null,
      title: null,
      // description: null,
      url: null,
      dynamicComponent: null
    }
  },
  // computed: {
  //   ogImage () {
  //     const imageChunks = this.image.split('.')
  //     const ext = imageChunks.length ? imageChunks[imageChunks.length - 1] : '.png'
  //     return `${process.env.BASE_URL}/images/articles/${this.url}_thumbnail.${ext}`
  //   }
  // },
  created () {
    const markdown = require(`~/garden/${this.$route.params.slug}.md`)
    // this.image = markdown.attributes.image || null
    this.title = markdown.attributes.title
    // this.description = markdown.attributes.description
    this.url = markdown.attributes.url
    this.dynamicComponent = markdown.vue.component

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Facundo Soria Guerrero' },
        { name: 'twitter:card', content: 'summary' },
        // { name: 'twitter:site', content: process.env.BASE_URL + this.$router.currentRoute.fullPath },
        { name: 'twitter:creator', content: '@fack_nos' },
        { name: 'twitter:description', content: this.description },
        // { name: 'twitter:image', content: this.ogImage },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:url', content: process.env.BASE_URL + this.$router.currentRoute.fullPath },
        { property: 'og:image', content: this.ogImage }
      ]
    }
  }
}
</script>

<style>
.about-content {
  padding: 2rem;
  padding-top: 0rem;
  padding-bottom: 4rem;
}
.full-post {
  position: relative;
  top: -100px;
}
.about-content p {
  line-height: 1.7rem;
}
.post-card-preview {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  background: var(--white);
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
}

blockquote {
  border-left: 5px solid blue;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
}

h1.banner-title.no-border {
    border-bottom: 0;
}

@media (max-width: 450px) {
  .blog-content {
    padding-right: 0;
    padding-left: 0;
  }
}

body code {
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(0,0,0,0.04);
  border-radius: 3px;
}

body code::before,
body code::after {
  letter-spacing: -0.2em;
  content: "\00a0";
}

body pre {
  word-wrap: normal;
}

body pre>code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

body .highlight {
  margin-bottom: 16px;
}

body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

body .highlight pre,
body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border-radius: 3px;
}

body pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

body pre code::before,
body pre code::after {
  content: normal;
}

</style>
