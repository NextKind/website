<template>
  <section class="homepage hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          The NextKind is a new community actively working towards the world of post-scarcity
        </p>
      </div>
    </div>
  </section>  
</template>

<style >
.homepage .hero-body {
    background-image: linear-gradient(to bottom, rgba(0, 248, 255, 0.60), rgba(0, 111, 195, 0.60)), url('../assets/The Next Kind Community.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -200px;
}

.homepage .container .title {
  font-size: 4rem !important;
  font-weight: 700;
}

.homepage .hero-texts {
  text-align: left;
}

.container.has-text-left {
  padding-top: 150px;
}

@media (max-width: 520px) {
  .homepage .container .title {
    font-size: 2rem !important;
  }

  .homepage .container .subtitle {
    font-size: 1.5rem;
    color: #f90bc2;
  }
}
</style>