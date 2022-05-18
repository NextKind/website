<template>
  <section class="section-cta is-small">
      <div class="container">
        <p class="subtitle">
          Join Us
        </p>
        <p class="title">
          Invest your own time and/or money
        </p>
        <p class="text">
           Come and say hello on Discord or send an email.  
        </p>
        <div class="buttons-cta">
          <a class="button"
            href="#" 
            target="_blank"
          >
            <font-awesome-icon :icon="[ 'fab' , 'discord' ]" /> Discord
          </a>
          <a class="button"
            href="#" 
            target="_blank"
          >
            <font-awesome-icon :icon="[ 'fas' , 'envelope' ]" /> Email Us
          </a>
        </div> 
      </div>   
  </section>  
</template>

<style scoped>
.section-cta {
    background: linear-gradient(90deg, #00B0E0, #006fc3);
    padding-top: 40px;
    padding-bottom: 40px;
    }

.section-cta .title {
  color: white;
  font-size: 2.5rem;
  font-family: 'Rajdhani', 'sans-serif';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  word-wrap: break-word;
  margin-bottom: 10px;
  text-align: left;
}

.section-cta .subtitle {
  color: #222831;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 4px;
  text-align: left;
}

.section-cta .text {
  text-align: left;
  color: #222831;
  font-weight: 300;
  font-size: 1.18rem;
  margin-bottom: 20px;
}

.buttons-cta .button {
  background-color: transparent;
  border-color: white;
  border-width: 3px;
  border-radius: 0;
  color: white;
  height: 3em;
  margin-right: 20px;
  margin-bottom: 20px;
}

.buttons-cta .button:hover, .buttons-cta .button:focus, .buttons-cta .button:active {
  border-color: #006fc3;
  background-color: #006fc3;
  color: white;
}

.svg-inline--fa {
  margin-right: 0.5em;
}

@media (max-width: 520px) {
  .section-cta .title, .section-cta .subtitle, .buttons-cta .button {
    margin-left: 30px;
  }
} 
</style>