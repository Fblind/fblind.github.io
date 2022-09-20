(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{251:function(e,o){const t={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"frontmatter-markdown"},[t("h1",[e._v("GIT vs GitHub (gitlab, bitbucket, etc)")]),e._v(" "),t("p",[t("strong",[e._v("GIT")]),e._v(" es un "),t("em",[e._v("sistema de control de versiones")]),e._v(" (version control system o vcs), basicamente nos permite crear "),t("strong",[e._v("repositorios")]),e._v(" donde estaran nuestros archivos, los cuales podemos "),t("strong",[e._v("modificar")]),e._v(" y marcar eso que hicimos como "),t("strong",[e._v("versiones")]),e._v(' (commits) y movernos entre ellas (entre la "historia" de nuestro repositorio), entre otras cosas.')]),e._v(" "),t("p",[t("strong",[e._v("GitHub")]),e._v(" en cambio, es un "),t("em",[e._v("sistema en la nube (una especie de hosting) el cual nos permite almacenar los repositorios")]),e._v(" que querramos. Cuando subimos nuestro codigo a GitHub generalmente lo hacemos a través de git, instalado en nuestras maquinas, haciendo un "),t("strong",[e._v("push")]),e._v(". Para que esto útlimo funcione debemos configurar nuestro "),t("strong",[e._v("origin")]),e._v(" con la url del repositorio que creamos en github.")]),e._v(" "),t("blockquote",[t("p",[e._v("Cabe aclarar que existen otros servicios como gitlab o bitbucket que siguen el mismo princpio que github.")])]),e._v(" "),t("h1",[e._v("SSH vs HTTPS")]),e._v(" "),t("p",[e._v("Ambos son dos "),t("em",[e._v("protocolos que existen para comunicarse")]),e._v(" entre dos partes a través de internet.")]),e._v(" "),t("p",[t("strong",[e._v("HTTPS")]),e._v(" es el más común y el cual es usado en primer lugar por la web, es seguro porque las paquetes que se envian entre las partes estan encriptaods.")]),e._v(" "),t("p",[t("strong",[e._v("SSH")]),e._v(" es otro protocolo y tiene caracteristicas parecidas pero se usa principalmente para conectarse a través de una computadora a otra (generalmente desde una computadora local a un servidor).")]),e._v(" "),t("p",[e._v("Con github tenemos la opcion de comunicarnos con cualquiera de los dos, si elegimos https vamos a tener que setear nuestro origin con la url de https que nos va a proveer github y cada vez que hagamos una interacion con el servicio (push, pull, fetch) vamos a tener que autenticarnos con nuetro usuario y contraseña.")]),e._v(" "),t("p",[e._v("En cambio si usamos ssh, no necesitamos autenticarnos cada vez que interactuemos con el servicio, pero si vamos a tener que crear una clave ssh en nuestra maquina y luego asociarla en nuestra cuenta de github, cabe aclarar que si queremos hacer alguna acción pero estamos en otra computadora debemos configurar ssh nuevamente o usar https.")]),e._v(" "),t("ul",[t("li",[e._v("https://www.toolsqa.com/git/ssh-protocol/")]),e._v(" "),t("li",[e._v("https://docs.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh")])])])}]};e.exports={attributes:{title:"GIT Stuffs",url:"git-stuffs"},meta:{resourcePath:"/home/fack/Documentos/Proyectos/personal-website/garden/git-stuffs.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);