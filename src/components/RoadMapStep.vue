<template>
  <div class="cd-timeline-block">
    <div class="cd-timeline-img">
    </div> <!-- cd-timeline-img -->

    <div class="cd-timeline-content">
      <h2>{{ when }}</h2>
      <slot></slot>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->
</template>

<script>
export default {
  props: [ 'when' ]
}
</script>