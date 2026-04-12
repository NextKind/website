<template>
  <a v-if="to.includes('http') || to.includes('mailto:')" :href="to" target="_blank">🔗 <slot></slot></a>
  <NuxtLink v-else :to="to"><slot></slot></NuxtLink>
</template>

<script>
export default {
  props: ['to']
}
</script>

<style scoped>
</style>