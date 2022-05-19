<template>
  <a class="question" @click="expanded = !expanded">
    <div class="visible"><h3 class="heading">{{ heading }}</h3></div>
    <div class="expanding" :style="{ display: expanded ? 'block': 'none' }">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  props: ['heading'],
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style scoped>
.visible, .expanding {
  max-width: 1000px;
  margin: auto;
  justify-content: center;
}

.heading {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Rajdhani', 'sans-serif';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  padding: 15px 20px;
  background-color: #222831;
  font-size: 1.1rem;
  color: #006fc3;
  text-align: left;
}

.expanding {
  padding: 15px 20px;
  color: #ddd;
  font-weight: 300;
  margin-top: -20px;
  margin-bottom: 20px;
  background-color: #222831;
}

@media (max-width: 1035px) {
  .visible, .expanding {
    margin-right: 30px;
    margin-left: 30px;
  }
}
</style>