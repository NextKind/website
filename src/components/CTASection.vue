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
            href="https://discord.gg/qCgwcdGFYk" 
            target="_blank"
          >
            <font-awesome-icon :icon="[ 'fab' , 'discord' ]" /> Discord
          </a>
          <a class="button"
            href="mailto:humans@nextkind.org"
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
  font-size: 2.5rem !important;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: left;
}

.section-cta .subtitle {
  color: #222831 !important;
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
  color: white !important;
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

@media (max-width: 1035px) {
  .section-cta .title, .section-cta .subtitle, .buttons-cta .button, .section-cta .text {
    margin-left: 30px;
  }
} 
</style>