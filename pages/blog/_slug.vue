<template>
  <div>
    <banner :background="image">
      <div class="container">
        <h1 class="banner-title no-border">
          &nbsp;
        </h1>
        <h3 class="banner-subtitle">
          &nbsp;
        </h3>
      </div>
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
  name: 'Post',
  // transition: {
  //   name: 'slide-fade'
  // },
  components: { Banner },
  // async asyncData ({ params }) {
  //   const markdown = await require(`~/articles/${params.slug}.md`)
  //   return {
  //     image: markdown.attributes.image || null,
  //     title: markdown.attributes.title,
  //     dynamicComponent: markdown.vue.component
  //   }
  // },
  data () {
    return {
      image: null,
      title: null,
      dynamicComponent: null
    }
  },
  created () {
    const locale = this.$i18n.locale === 'es' ? 'es' : 'en'
    const markdown = require(`~/articles/${locale}/${this.$route.params.slug}.md`)
    this.image = markdown.attributes.image || null
    this.title = markdown.attributes.title
    this.dynamicComponent = markdown.vue.component

    // Use Async Components for the benefit of code splitting
    // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
    // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
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
</style>
