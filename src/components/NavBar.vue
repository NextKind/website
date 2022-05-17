<template>
  <div class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ path: '/' }">
        <img :src="require('../assets/nextkind-logo.png')" alt="NextKind">
      </router-link>
        

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="menuOpen = !menuOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :style="menuOpen ? 'display: block;' : 'display: none;'">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <router-link :to="{ path: '/' }" class="navbar-item" @click="scrollToTop">Home</router-link>
        <router-link :to="{ path: '/about' }" class="navbar-item" @click="scrollToTop">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
methods: { 
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>

.navbar {
  background-color: #191C23;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-item, .navbar-link {
  color: white;
  font-family: 'Rajdhani', 'sans-serif';
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;

}

.navbar-item:hover, a.navbar-item:focus {
  background-color: transparent;
  color: #f90bc2;
}

.navbar-brand img {
    max-height: 3rem;
    padding-right: 20px;
}

.navbar-end {
  font-size: 0.8rem;
  color: white;
}

@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: #191C23 !important;
  }
}

.navbar-burger, .navbar-burger:active {
  color: white !important;
}

@media screen and (min-width: 700px) {
  .navbar-menu {
    display: flex !important;
  }
}
</style>