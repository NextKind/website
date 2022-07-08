<template>

  <div class="related">
    <div class="container has-text-centered">
      <p class="subtitle" style="margin-top: 60px;">
        The following is a list of communities, projects, creations, and other efforts related to post-scarcity
      </p>
      <p class="title" style="margin-top: 60px;">
        Active Physical Communities
      </p>
    </div>

    <div class="related-links" style="margin-top: 60px;">
      <a class="related-links-card" v-for="(item, itemIndex) in communities" :key="itemIndex" :href="item.link" target="_blank">
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

    <div class="container has-text-centered">
      <p class="title">
        Projects, Authors, Works, ...
      </p>
    </div>

    <ul class="related-links" style="margin-top: 60px;">
      <li v-for="(item, itemIndex) in other" :key="itemIndex">
        <UniversalLink :to="item.link">
          <strong>{{ item.title }}</strong>
          <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</span>
          {{ item.intro }}
        </UniversalLink>
      </li>
    </ul>

    <p class="note">To embed this list on your website, or to add something, please follow <UniversalLink to="https://github.com/NextKind/website">github.com/NextKind/website</UniversalLink>.</p>

    <SectionFooter/>
  </div>
</template>



<script>
import SectionFooter from '@/components/SectionFooter.vue'
import UniversalLink from '@/components/UniversalLink.vue'

export default {
  components: { SectionFooter, UniversalLink },
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
      if (link.tags.includes('community') && link.tags.includes('physical')) {
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

.related {
  color: white;
}

.related-links, .note {
  margin-bottom: 70px !important;
}

div.related-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.related-links img {
  width: 70px;
  margin-right: 15px;
}

.related-links-card {
  background-color: #222831;
  padding: 15px;
  flex-basis: 30%;
  margin: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 1000px) {
  .related-links-card {
    width: 100%;
    flex-basis: 100%;
  }
}

.related-links-card > div {
  margin-bottom: 15px;
}

.related-links-card h4 {
  font-size: 1.7em;
  color: white;
}

.related-links > a > div {
  display: flex;
}

.related-links span, .related-links strong {
  display: inline-block;
  margin-right: 10px;
}

.related-links, .note {
  width: 80vw;
}
.related-links, .note, .related .subtitle, .related .title {
  margin: auto;
}

@media screen and (max-width: 1000px) {
  .related-links, .note, .related .subtitle, .related .title {
    width: 80vw;
  }
}

.related .title {
  font-size: 3rem;
  letter-spacing: .075em;
}

.related-links li {
  margin-bottom: 10px;
}

.related-links span {
  display: inline-block;
  padding: 0px 5px;
  background-color: #444;
  color: #eee;
  border-radius: 3px;
  font-size: .8em;
}

div.related-links a, div.related-links a:active, div.related-links a:visited, div.related-links a:hover {
  color: #fff;
}

div.related-links a:hover {
  background-color: #2f3844;
}

.note {
  font-size: .8em;
  color: #ccc;
  text-align: center;
}

</style>