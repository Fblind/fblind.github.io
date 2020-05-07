
import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Facundo Soria Guerrero | Full-Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      // TODO: Add all types of favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/753a7d77ab.js', crossorigin: 'anonymous', async: true, defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-165687640-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n', {
        locales: [{
          code: 'en',
          name: 'EN'
        }, {
          code: 'es',
          name: 'ES'
        }],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              hiIam: 'Hello! I\'m',
              developer: 'developer',
              moreExpiriencedInTheBackend: 'more experienced in the back-end',
              aboutMe: 'about me',
              background: 'background',
              contactMe: 'contact me',
              aboutMeFirst: 'I love everything about programming. As a software professional, I also like constantly research and learning.',
              aboutMeSecond: 'I consider myself a <a href="https://manifesto.softwarecraftsmanship.org/#/en">Software Craftsman</a>, always striving to deliver <strong class="text-primary">well-crafted software</strong>, constantly <strong class="text-primary">adding value</strong>, and a professional who <strong class="text-primary">collaborates and creates productive partnerships</strong> with customers.',
              aboutMeThird: 'I like writing about what I know, my research and the things I’m learning, and I hope one day this will help someone. Currently the topics I’m interested are JavaScript, NodeJS, VueJS, APIs, Agile techniques, productivity, remote work, systems design and architecture.',
              aboutMeForth: 'Besides being curious about programming, I’m an animal lover (I have two dogs 🐶🐶 and a cat🐱) and sports lover ⚽.',
              backgroundFirst: 'I’ve been working in the software industry for more than ten years, along these years I worked in several industries, companies and technologies. From big companies like <a href="https://www.accenture.com/ar-es">Accenture</a> to startups like <a href="https://www.betterez.com/">Betterez</a>, likewise <a href="https://devecoop.com/">my own company</a> where I learned not only tech stuff but many soft skills, business, team management, among others.',
              backgroundSecond: 'While I was studying at the university I was an <a href="http://www.pdep.com.ar/quines-somos/quienes-fuimos">assistant professor at “Programming Paradigms”</a>. This experience made me realize the importance of teaching and learning, it is a rewarding journey.',
              contactMeFirst: 'If you need help or a software developer for your project or if you have any doubts or just want to chat, don’t hesitate to contact me through email at <a href="mailto:fblind@gmail.com">fblind@gmail.com</a>, <a href="https://www.linkedin.com/in/facundo-soria-guerrero-425a5695/?locale=en_US">LinkedIn</a> or <a href="https://github.com/fblind">Github</a>.',
              developerDescription: 'a<strong class="text-primary"> full-stack</strong> web developer',
              about: {
                title: 'Facundo Soria Guerrero | Full-Stack Developer',
                description: 'Hi!, I\'m full stack developer, don\'t hesitate to contact me if you need help with your projects'
              }
            },
            es: {
              hiIam: 'Hola! soy',
              developer: 'desarrollador',
              moreExpiriencedInTheBackend: 'más experimentado en el back-end',
              aboutMe: 'sobre mi',
              background: 'historial',
              contactMe: 'contactame',
              aboutMeFirst: 'Me apasiona todo lo relacionado con la programación. Como profesional de la industria del software me gusta instruirme y tratar de aprender continuamente.',
              aboutMeSecond: 'Me considero un <a href="http://manifesto.softwarecraftsmanship.org/#/es">Artesano del software</a> tratando de entregar <strong class="text-primary">software bien diseñado</strong>, agregando <strong class="text-primary">valor constantemente</strong>, considerándose un profesional que <strong class="text-primary">colabora y se asocia</strong> productivamente con los clientes.',
              aboutMeThird: 'Me gusta escribir sobre lo que sé, sobre lo que investigo y lo que voy aprendiendo, y espero que algun dia le pueda servir a alguien. Actualmente los temas que veo y me interesan son JavaScript, NodeJS, VueJS, técnicas ágiles, productividad, trabajo remoto, diseño y arquitectura de sistemas y APIs.',
              aboutMeForth: 'Aparte de amar la programación amo los animales (principalmente mis dos perros 🐶🐶 y mi gato 🐱) y los deportes ⚽.',
              backgroundFirst: 'Trabajo en la industria del software desde hace diez años, en todos esos años trabajé en diferentes tecnologías, industrias y compañías. Desde compañías grandes como <a href="https://www.accenture.com/ar-es">Accenture</a> a startups como <a href="https://www.betterez.com/">Betterez</a> pasando por haber tenido la gran experiencia de haber tenido <a href="https://devecoop.com/">mi propia compañía</a> donde aprendi muchisimo sobre hábilidades blandas, negocios, manejo de equipos y demás.',
              backgroundSecond: 'Mientras estudiaba en la facultad tuve la posibilidad de ser <a href="http://www.pdep.com.ar/quines-somos/quienes-fuimos">ayudante de Paradigmas de la programación</a> donde descubrí lo importante y lo lindo que es enseñar y aprender.',
              contactMeFirst: 'Si necesitas una mano o un desarrollador para tu proyecto, cualquier otra duda o simplemente charlar, me podes contactar por mail a <a href="mailto:fblind@gmail.com">fblind@gmail.com</a>, <a href="https://www.linkedin.com/in/facundo-soria-guerrero-425a5695/?locale=en_US">LinkedIn</a> o <a href="https://github.com/fblind">Github</a>.',
              developerDescription: 'desarrollador web <strong class="text-primary">full-stack</strong>',
              about: {
                title: 'Facundo Soria Guerrero | Desarrollador Full-Stack',
                description: 'Hola!, Soy un desarrollador full stack, no dudes en contactarme si necesitas ayuda con tus proyectos'
              }
            }
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'articles'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      })
    }
  },
  // TODO: remove when implement all the website
  router: {
    middleware: 'redirect-about'
  }
}
