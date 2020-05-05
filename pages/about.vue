<template>
  <div class="main-about">
    <banner>
      <div class="container text-left">
        <div class="row">
          <div class="col text-dark">
            <h4 >Hola!, soy</h4>
            <h1 class="display-3">Facundo Soria Guerrero</h1>
            <h1>desarrollador <strong class="text-primary">full-stack</strong></h1>
            <h4>más experimentado en el backend</h4>
          </div>
          <div class="col">
            <img src="~/assets/me.png" class="img-me" alt="">
            <p class="bg-primary background-me img-fluid"></p>
          </div>
        </div>
      </div>
    </banner>
    <main class="container main">
      <article class="card post-card-preview full-post about-content">
        <h1 class="display-4">Sobre mi<strong class="text-primary">.</strong></h1>
        <p>Me apasiona todo lo relacionado con la programación. Como profesional de la industria del software me gusta instruirme y tratar de aprender continuamente.</p>
        <p>Me considero un <a href="http://manifesto.softwarecraftsmanship.org/#/es">Artesano del software</a> tratando de entregar <strong class="text-primary">software bien diseñado</strong>, agregando <strong class="text-primary">valor constantemente</strong>, considerándose un profesional que <strong class="text-primary">colabora y se asocia</strong> productivamente con los clientes.</p>
        <p>Me gusta escribir sobre lo que sé, sobre lo que investigo y lo que voy aprendiendo, y espero que algun dia le pueda servir a alguien. Actualmente los temas que veo y me interesan son JavaScript, NodeJS, VueJS, técnicas ágiles, productividad, trabajo remoto, diseño y arquitectura de sistemas y APIs.</p>
        <p>Aparte de amar la programación amo los animales (principalmente mis dos perros 🐶🐶 y mi gato 🐱) y los deportes ⚽.</p>
        <h1 class="display-4">Historial<strong class="text-primary">.</strong></h1>
        <p>Trabajo en la industria del software desde hace diez años, en todos esos años trabajé en diferentes tecnologías, industrias y compañías. Desde compañías grandes como <a href="https://www.accenture.com/ar-es">Accenture</a> a startups como <a href="https://www.betterez.com/">Betterez</a> pasando por haber tenido la gran experiencia de haber tenido <a href="https://devecoop.com/">mi propia compañía</a> donde aprendi muchisimo sobre soft skills, negocios, manejo de equipos y demás.</p>
        <p>Mientras estudiaba en la facultad tuve la posibilidad de ser <a href="http://www.pdep.com.ar/quines-somos/quienes-fuimos">ayudante de Paradigmas de la programación</a> donde descubrí lo importante y lo lindo que es enseñar y aprender.</p>
        <h1 class="display-4">Contacto<strong class="text-primary">.</strong></h1>
        <p>Si necesitas una mano o un desarrollador para tu proyecto, cualquier otra duda o simplemente charlar, me podes contactar por mail a <a href="mailto:fblind@gmail.com">fblind@gmail.com</a>, o por <a href="https://www.linkedin.com/in/facundo-soria-guerrero-425a5695/?locale=en_US">LinkedIn</a> o <a href="https://github.com/fblind">Github</a>.</p>
      </article>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
export default {
  name: 'About',
  components: { Banner }
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
</style>
