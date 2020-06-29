<template>
  <article class="card post-card-preview">
    <figure class="post-card-preview-img-container">
      <img
        class="card-img-top img-fluid post-card-preview-img"
        :src="require(`../assets/${post.image}`)"
        :alt="post.title"
      >
    </figure>
    <div class="card-body post-card-preview-content">
      <div class="text-center preview-meta">
        <ul class="preview-meta-menu">
          <li class="preview-meta-info">
            <small class="text-muted"><time :datetime="post.datetime">{{ post.date }}</time></small>
          </li>
          <template v-for="keyword of post.keywords">
            <li :key="keyword" class="preview-meta-info">
              <small class="text-muted">{{ keyword }}</small>
            </li>
          </template>
          <li class="">
            <small class="text-muted">{{ post.readingTime }}</small>
          </li>
        </ul>
      </div>
      <div class="">
        <div>
          <h3 class="post-card-preview-content-title">
            {{ post.title }}
          </h3>
          <p class="post-card-preview-content-text">
            {{ post.description }}
          </p>
        </div>
        <div class="post-card-preview-more float-right">
          <small>
            <nuxt-link class="post-card-preview-more-text" :to="getPostURL(post)">{{ $t('readMore') }} </nuxt-link>
            <i class="fa fa-arrow-right" />
          </small>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
// https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPostURL (post) {
      return this.$i18n.locale === 'es' ? `/es/blog/${post.url}` : `blog/${post.url}`
    }
  }
}
</script>

<style>
.post-card-preview {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  background: var(--white);
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
}

.post-card-preview-img {
  height: 15rem;
  /* object-fit: cover; */
}

.preview-meta {
  margin-bottom: 1rem;
}

.preview-meta-menu {
  list-style-type: disc inside none;
  padding: 0;
}

.preview-meta-menu li {
  display: inline-block;
  position: relative;
}

.preview-meta-info {
  margin-right: 1.5rem;
}

.preview-meta-info:after {
  content: ".";
  font-size: 1rem;
  color: var(--dark);
  position: absolute;
  bottom: 3px;
  right: -14px;
}

.post-card-preview-content {
  padding: 2rem;
  padding-top: 0rem;
}

.post-card-preview-content-text {
  line-height: 2rem;
}

.post-card-preview-more-text {
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bolder;
  cursor: pointer;
}

a.post-card-preview-more-text:link, a.post-card-preview-more-text:visited {
  color: var(--dark);
  text-decoration: none;
}

.post-card-preview-more i {
  color: #cccccc;
  font-size: 0.8rem;
  font-weight: bolder;
}
</style>
