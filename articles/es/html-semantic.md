---
title: Semántica en HTML.
image: 'html-semantic-banner.png'
date: 'Jun 28, 2020'
datetime: '2020-6-28'
keywords: ['HTML']
readingTime: '2 Mins'
description: 'HTML es un lenguaje simple para aprender, sin muchas complicaciones, pero hay algo muy importante que no siempre se toma tan en cuenta cuando se lo usa, la semántica.'
url: 'html-semantic'
---

La historia detrás de este post es porque en las últimas semanas estuve enseñando las bases de HTML a unos amigos y me hizo pensar muchas cosas, pero principalmente me hizo darme cuenta que es verdad que *cuando uno enseña o trata de explicar algo aprende más*, y además ver que haya *gente que quiere entrar al mundo del desarrollo web* y que yo pueda ayudar en ese proceso me pone muy contento 😄.

Obviamente lo que hice antes fue *repasar y ver un poco cómo poder enseñarlo*, principalmente viendo videos y leyendo por internet (gracias mozilla y frontendmasters 🎉👏👏). HTML de por sí no es un lenguaje que tiene muchas complicaciones, por lo que quise hacer foco en lo que a mi me parece lo más importante: la **semántica** de los elementos (comentario aparte, cuando comencé a usar HTML esto casi ni lo tenía en cuenta 🤦)

> ### HTML se trata de **estructurar nuestro contenido y describirlo** de la mejor manera.

## ¿ De qué hablo cuando digo *semántica* ?

Significa saber realmente **qué significado tiene cada elemento HTML** (si es que tiene, por ejemplo un `div` o un `span` son contenedores genéricos sin ningún significado especial ni semántica) y entender qué es lo que queremos transmitir y cómo podemos hacerlo de la mejor manera.

Es importante a la hora de crear nuestros documentos, pensar varias veces cual es el mejor elemento que describe lo que queremos hacer. Gracias a HTML5 hoy tenemos muchos *nuevos elementos semánticos* y tenemos que aprovecharlos y tomarnos el tiempo necesario antes de escribir nuestro documento.

HTML5 nos trajo nuevos elementos que nos ayudan a describir mejor nuestro contenido, cómo `header`, `footer`, `main`, entre otros que nos ayudan a describir nuestro layout y son usados en gran parte hoy en día. Pero no solo quedémonos con eso, no siempre usemos div, también tenemos `section` y `article`, no solo usemos img, también tenemos `figure` y `picture`, usemos `strong` y `em` en vez de `b` o `i`...

Todo esto no sólo nos ayuda a sacarle provecho a nuestro HTML y que realmente se entienda mientras que lo creamos sino que también sirve para que los buscadores nos encuentren y los dispositivos de asistencia puedan llevar una mejor experiencia, por lo que por mi parte cada vez que esté creando un componente **me voy a preguntar dos veces que quiero describir, transmitir y cuál es el mejor elemento para ello**.
