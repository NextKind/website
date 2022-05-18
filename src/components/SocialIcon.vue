<template>
<a button class="social-icon" tag="a" :href="href" target="_blank">
  <font-awesome-icon :icon="[ pack , icon ]" />
</a>
</template>

<script> 
export default {
  props: [ 'href', 'icon', 'pack' ]
}
</script>

<style scoped>
.media-icons .social-icon {
  color: white;
}

.media-icons .social-icon:hover {
  color: #006fc3;
}

.media-icons .social-icon {
  background-color: transparent;
  border-color: transparent;

}

</style>