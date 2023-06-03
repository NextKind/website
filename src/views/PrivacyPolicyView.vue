<template>

  <div class="media-resources article">
    <div class="container has-text-centered">
      <p class="subtitle" style="margin-top: 60px;">
        How NextKind handles your data
      </p>
      <p class="title" style="margin-top: 60px;">
        Privacy Policy
      </p>

      <p class="justified" style="margin-bottom: 20px;">The main website, nextkind.org, does not collect any data about you or your devices.</p>
      <p class="justified" style="margin-bottom: 20px;">NEXTKIND Lab (lab.nextkind.org) collects your email in order to allow you to log into the project management system (GitLab). It will also collect other information that you may choose provide for your profile's display, such as your name or profile picture. You can make your profile private or delete your account anytime from the User Settings menu.</p>
      <p style="margin-bottom: 60px;">Should you have any questions, please feel free to contact humans@nextkind.org.</p>
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