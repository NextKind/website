<template>

  <div>
    <p>The following is a list of communities, projects, creations, and other efforts related to post-scarcity:</p>

    <h2>Active Communities</h2>
    <div class="related-links">
      <a v-for="(item, itemIndex) in communities" :key="itemIndex" :href="item.link" target="_blank">
        <div>
          <img :src="item.icon || placeholderIcon" :alt="item.title">
          <div>
            <h4>{{ item.title }}</h4>
            <div v-if="item.tags" class="related-links-tags">
              <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</span>
            </div>
          </div>
        </div>
        <p>
          {{ item.intro }}
        </p>
      </a>
    </div>

    <h2>Projects, Authors, Works, ...</h2>
    <ul class="related-links">
      <li v-for="(item, itemIndex) in other" :key="itemIndex">
        <a :href="item.link" target="_blank">
          <strong>{{ item.title }}</strong>
          <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</span>
          {{ item.intro }}
        </a>
      </li>
    </ul>

    <p class="note">{{ note }}</p>

    <SectionFooter/>
  </div>
</template>



<script>
import SectionFooter from '@/components/SectionFooter.vue'

export default {
  components: { SectionFooter },
  data () {
    return {
      communities: [],
      other: [],
      placeholderIcon: 'https://placeimg.com/64/64/nature/grayscale',
      note: ''
    }
  },
  async created () {
    let response = await this.axios.get('https://nextkind.org/links/?version=1')
    console.log(response)

    let communities = []
    let other = []

    for (let link of response.data.links) {
      if (link.tags.includes('community')) {
        communities.push(link)
      } else {
        other.push(link)
      }
    }

    this.communities = communities
    this.other = other

    this.note = response.data.note
  }
}
</script>

<style scoped>

.related-links img {
  width: 50px;
}

.related-links > a > div {
  display: flex;
}

.related-links span, .related-links strong {
  display: inline-block;
  margin-right: 10px;
}

.related-links {
  list-style-image: initial;
  list-style-type: disc;
}

</style>