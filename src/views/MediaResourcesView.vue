<template>

  <div class="related">
    <div class="container has-text-centered">
      <p class="subtitle" style="margin-top: 60px;">
        Graphics and guidelines for third party mentions
      </p>
      <p class="title" style="margin-top: 60px;">
        Logos
      </p>
    </div>

    <div class="container">
      <p>Normal text...</p>
      <p>
        <UniversalLink to="">
          <img src="" alt="">
        </UniversalLink>
      </p>
    </div>

    <SectionFooter/>
  </div>
</template>



<script>
import SectionFooter from '@/components/SectionFooter.vue'
import UniversalLink from '@/components/UniversalLink.vue'

export default {
  components: { SectionFooter, UniversalLink }
}
</script>

<style scoped>

</style>