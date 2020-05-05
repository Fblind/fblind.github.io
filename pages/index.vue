<template>
  <div>
    <banner :background="'background.jpg'">
      <div class="container">
        <h1 class="banner-title">Hola!, Soy Facundo</h1>
        <h3 class="banner-subtitle">Desarrollador full-stack, curioso de la programación y amante de los animales</h3>
      </div>
    </banner>
    <main class="container main">
      <post-card :post="post" />
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import PostCard from '~/components/PostCard.vue'
export default {
  name: 'Index',
  components: { Banner, PostCard },
  data () {
    return {
      post: {
        title: '¿Qué es GIT? y Porque deberías usarlo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, culpa. Exercitationem dignissimos quisquam quas, quos rerum vitae repellendus possimus et distinctio ex sit, provident architecto harum animi officia vero tempore.',
        image: '',
        thumbnail: '',
        url: ''
      }
    }
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
</style>
