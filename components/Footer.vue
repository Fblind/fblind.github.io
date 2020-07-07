<template>
  <footer class="footer">
    <ul class="icons">
      <!-- <li><a href="https://medium.com/@fblind" class="icon brands fab fa-medium"><span class="label">Medium</span></a></li> -->
      <li><a href="https://dev.to/fblind" class="icon brands fab fa-dev"><span class="label">DEV Profile</span></a></li>
      <li><a href="https://twitter.com/fack_nos" class="icon brands fa fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="https://github.com/fblind" class="icon brands fa fa-github"><span class="label">Github</span></a></li>
      <li><a href="https://www.linkedin.com/in/facundo-soria-guerrero-425a5695/?locale=en_US" class="icon brands fa fa-linkedin"><span class="label">LinkedIn</span></a></li>
      <li><a href="mailto:fblind@gmail.com" class="icon brands fa fa-envelope"><span class="label">Email</span></a></li>
    </ul>
  </footer>
</template>

<style>
.footer {
  background:var(--light);
  padding: 4rem 0 4rem 0;
  text-align: center;
}
.footer .icons a {
  -moz-transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.35;
}

.footer .icons a:hover {
  opacity: 0.75;
}

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}

.icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-weight: 400;
}

.icon > .label {
  display: none;
}

.icon:before {
  line-height: inherit;
}

.icon.solid:before {
  font-weight: 900;
}

ul.icons {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.icons li {
  display: inline-block;
  padding: 0 1.25em 0 0;
}

ul.icons li:last-child {
  padding-right: 0;
}

ul.icons li .icon {
  color: inherit;
}

ul.icons li .icon:before {
  font-size: 1.75em;
}
</style>
