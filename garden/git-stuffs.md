---
title: GIT Stuffs
url: "git-stuffs"
---

# GIT vs GitHub (gitlab, bitbucket, etc)

**GIT** es un _sistema de control de versiones_ (version control system o vcs), basicamente nos permite crear **repositorios** donde estaran nuestros archivos, los cuales podemos **modificar** y marcar eso que hicimos como **versiones** (commits) y movernos entre ellas (entre la "historia" de nuestro repositorio), entre otras cosas.

**GitHub** en cambio, es un _sistema en la nube (una especie de hosting) el cual nos permite almacenar los repositorios_ que querramos. Cuando subimos nuestro codigo a GitHub generalmente lo hacemos a través de git, instalado en nuestras maquinas, haciendo un **push**. Para que esto útlimo funcione debemos configurar nuestro **origin** con la url del repositorio que creamos en github.

> Cabe aclarar que existen otros servicios como gitlab o bitbucket que siguen el mismo princpio que github.

# SSH vs HTTPS

Ambos son dos _protocolos que existen para comunicarse_ entre dos partes a través de internet.

**HTTPS** es el más común y el cual es usado en primer lugar por la web, es seguro porque las paquetes que se envian entre las partes estan encriptaods.

**SSH** es otro protocolo y tiene caracteristicas parecidas pero se usa principalmente para conectarse a través de una computadora a otra (generalmente desde una computadora local a un servidor).

Con github tenemos la opcion de comunicarnos con cualquiera de los dos, si elegimos https vamos a tener que setear nuestro origin con la url de https que nos va a proveer github y cada vez que hagamos una interacion con el servicio (push, pull, fetch) vamos a tener que autenticarnos con nuetro usuario y contraseña.

En cambio si usamos ssh, no necesitamos autenticarnos cada vez que interactuemos con el servicio, pero si vamos a tener que crear una clave ssh en nuestra maquina y luego asociarla en nuestra cuenta de github, cabe aclarar que si queremos hacer alguna acción pero estamos en otra computadora debemos configurar ssh nuevamente o usar https.

- https://www.toolsqa.com/git/ssh-protocol/
- https://docs.github.com/es/github/authenticating-to-github/connecting-to-github-with-ssh
