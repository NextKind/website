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