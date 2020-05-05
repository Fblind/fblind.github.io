<template>
  <div>
    <banner :background="image" />
    <main class="container main">
      <article class="card post-card-preview full-post about-content">
        <div class="card-body post-card-preview-content">
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
    const markdown = require(`~/articles/${this.$route.params.slug}.md`)
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

</style>
