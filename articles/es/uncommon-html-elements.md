---
title: Elementos HTML no tan cómunes.
image: 'uncommon-html-elements-banner.png'
date: 'Jul 7, 2020'
datetime: '2020-7-7'
keywords: ['HTML']
readingTime: '2 Mins'
description: 'HTML tiene muchos elementos pero por lo general usamos los mismos, acá algunos elementos no tan cómunes.'
url: 'uncommon-html-elements'
---

Cómo escribí [anteriormente](https://fblind.github.io/es/blog/html-semantic), HTML no es un lenguaje complicado y se trata de presentar y describir tus documentos de la mejor manera con los elementos que tenemos.
Hay elementos comunes y que usamos regularmente, `div`, `section`, `p`, `a`, por decir algunos, pero hay otros que no son tan conocidos y aquí van:


## dl - dd - dt
*[dl](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)* representa una lista descriptiva que consta de grupos con una término o clave (*[dt](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element)*) y su descripción o valor (*[dd](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element)*).

Algunos grupos que pueden ser preguntas y respuestas, un glosario, bibliografía, representación de metadata de un par clave-valor, entre otras.

##### Código:
```html
<dl>
  <dt>¿De donde eres?</dt>
  <dd>Argentina 🇦🇷 </dd>
</dl>
```
##### Ejemplo:
<dl>
  <dt>¿De donde eres?</dt>
  <dd>Argentina 🇦🇷 </dd>
</dl>


## del - ins
*[del](https://html.spec.whatwg.org/multipage/edits.html#the-del-element)* representa que una parte de un texto fue eliminada o cambiada de un documento y por lo general se utiliza con *[ins](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)* que representa un texto que fue agregado a la página y queres mostrar la historia de esos cambios.

Un ejemplo es cuando actualizas una parte de una publicación y queres mostrar la actualización, mostrar los cambios de un código versionado.

##### Código:
```html
<code>
  console.log(<del>"Hello World"</del><ins>"Hola Mundo"</ins>)
</code>
```
##### Ejemplo:
<code>
  console.log(<del>"Hello World"</del><ins>"Hola Mundo"</ins>)
</code>
<br>
<br>

## wbr
*[wbr](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)* representa una oportunidad para hacer un corte de línea y el browser es el que se encarga de aprovechar esa *oportunidad*.
##### Código:
```html
<p>
Achicá la ventana para ver diferentes oportunidades u opciones 😱: <wbr>super<wbr>cali<wbr>fragi<wbr>listic<wbr>expi<wbr>ali<wbr>docious
</p>
```
##### Ejemplo:
<p>
Achicá la ventana para ver diferentes oportunidades u opciones 😱: <wbr>super<wbr>cali<wbr>fragi<wbr>listic<wbr>expi<wbr>ali<wbr>docious
</p>

## kbd
*[kbd](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element)* representa una entrada del usuario, por lo general una entrada a través del teclado.
##### Código:
```html
<p>
Para copiar una texto hay que seleccionar el texto y luego <kbd><kbd>crtl</kbd>+<kbd>c</kbd></kbd>
</p>
```
##### Ejemplo:
<p>
Para copiar una texto hay que seleccionar el texto y luego <kbd><kbd>crtl</kbd> + <kbd>c</kbd></kbd>
</p>

## details
*[details](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)* representa un elemento para relevar información solamente cuando se lo selecciona, sino esa información está escondida y se generalmente se lo utiliza con el elemento *[summary](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)* que representará la leyenda o el título.

##### Código:
```html
<details>
  <summary>
    Click aquí para mostrar/esconder condiciones
  </summary>
  <p>
    Dar el máximo, no darse por vencido y seguir adelante 😺 
  </p>
</details>
```
##### Ejemplo:
<details>
  <summary>
    Click aquí para mostrar/esconder condiciones
  </summary>
  <p>
    Dar el máximo, no darse por vencido y seguir adelante 😺 
  </p>
</details>

<br>

## Conclusión
Espero que les haya sido útil de alguna manera 😊 , *que hayan conocido algún nuevo elemento* y los puedan usar en sus proyectos o tal vez *surgido curiosidad de encontrar nuevos elementos* no tan cómunes.
