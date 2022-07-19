<template>
  <a v-if="to.includes('http') || to.includes('mailto:')" :href="to" target="_blank">🔗 <slot></slot></a>
  <router-link v-else :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  props: ['to']
}
</script>

<style scoped>
</style>