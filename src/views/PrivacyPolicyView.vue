<template>

  <div class="media-resources">
    <div class="container has-text-centered">
      <p class="subtitle" style="margin-top: 60px;">
        How NextKind handles your data
      </p>
      <p class="title" style="margin-top: 60px;">
        Privacy Policy
      </p>

      <p style="margin-top: 20px; margin-bottom: 60px;">
        NextKind does not collect or store any personal data.
      </p>
    </div>


    <SectionFooter/>
  </div>
</template>



<script>
import SectionFooter from '@/components/SectionFooter.vue'

export default {
  components: { SectionFooter }
}
</script>

<style scoped>

p {
  color: #ddd;
}

</style>