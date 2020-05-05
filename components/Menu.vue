<template>
  <header class="container-fluid header">
    <nav class="navbar navbar-expand-lg header-menu container">
      <div class="collapse navbar-collapse text-dark">
        <ul class="navbar-nav header-menu-items ml-md-auto">
          <li class="nav-item header-menu-item mr-2 active">
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item header-menu-item mr-2">
            <a class="nav-link">Sobre mi</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
.header {
  background: none;
  position: fixed;
  padding: 0px 0px 0.5rem 0px;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 997;
}
.active {
  padding-bottom: 0.2rem;
  border-bottom: solid 2px var(--blue);
}
</style>
