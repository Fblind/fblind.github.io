---
title: Uncommon HTML elements.
image: 'uncommon-html-elements-banner.png'
date: 'Jul 7, 2020'
datetime: '2020-7-7'
keywords: ['HTML']
readingTime: '2 Mins'
description: 'HTML has a lot of elements but usually, we use the same, here you have a list of not so common elements.'
url: 'uncommon-html-elements'
---

As I [previously](https://fblind.github.io/blog/html-semantic) wrote in one of my articles, HTML is a simple language to use and is about presenting and describing our documents in the best possible way with the elements that HTML provides us.
In HTML we have some common, regularly used elements, just as `div`, `section`, `p` and `a` for example. Today I’ll present to you some elements that are not so common:

## dl - dd - dt
*[dl](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)* represents a descriptive list: a group containing a key or term (*[dt](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element)*) and its descriptions or values (*[dd](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element)*)

Some examples of groups are pairs of questions and answers, a glossary, a bibliography, a metadata representation of a key-value pair, among others.

##### Code:
```html
<dl>
 <dt>Where are you from?</dt>
 <dd>Argentina 🇦🇷 </dd>
</dl>
```
##### Example:
<dl>
 <dt>Where are you from?</dt>
 <dd>Argentina 🇦🇷 </dd>
</dl>

## del - ins
*[del](https://html.spec.whatwg.org/multipage/edits.html#the-del-element)* represents a text content that was deleted or changed in the document and is generally used with the *[ins](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)* element which represents a text that was added or updated, when you want to show the history of these changes in your webpage.

Some examples are when you updated a post and want to show those changes or when you want to show your changes in a git repository.

##### Code:
```html
<code>
 console.log(<del>"Hola Mundo"</del><ins>"Hello World"</ins>)
</code>
```
##### Example:
<code>
 console.log(<del>"Hola Mundo"</del><ins>"Hello World"</ins>)
</code>
<br>
<br>

## wbr
*[wbr](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)* represents a choice or an opportunity for the browser to break your text line.

##### Code:
```html
<p>
Hey!, resize your window and check the different options 😱:
<wbr>super<wbr>cali<wbr>fragi<wbr>listic<wbr>expi<wbr>ali<wbr>docious
</p>
```
##### Example:
<p>
Hey!, resize your window and check the different options 😱:
<wbr>super<wbr>cali<wbr>fragi<wbr>listic<wbr>expi<wbr>ali<wbr>docious
</p>

## kbd
*[kbd](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element)* represents a user input. It is usually used to represent a keyboard input.

##### Code:
```html
<p>
To copy a text you should select your text and then
<kbd><kbd>crtl</kbd>+<kbd>c</kbd></kbd>
</p>
```
##### Example:
<p>
To copy a text you should select your text and then
<kbd><kbd>crtl</kbd>+<kbd>c</kbd></kbd>
</p>

## details
*[details](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)* represents something that you want to hide, and display only when the user selects it. It is usually used with the *[summary](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element)* element that will display the title or legend of your hidden content.

##### Code:
```html
<details>
 <summary>
   Click here to hide/show the terms and conditions
 </summary>
 <p>
   Do your best, don't give up and continue learning and moving on 😺
 </p>
</details>
```
##### Example:
<details>
 <summary>
   Click here to hide/show the terms and conditions
 </summary>
 <p>
   Do your best, don't give up and continue learning and moving on 😺
 </p>
</details>

<br>

## Conclusion
I hope this has been useful in some way 😊. Maybe *you have discovered new elements* to use in your projects, or maybe this article has made you *curious to find new uncommon elements*.
