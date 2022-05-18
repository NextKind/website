<template>

  <div class="home">  
    <HeroImage/>

    <section class="questions is-large">
      <div class="container has-text-centered">
        <p class="subtitle">
          What you may want to know
        </p>
        <p class="title">
          FAQ
        </p>
      </div>
    <ExpandableQuestion heading="What is post-scarcity?">
      <p>Post-scarcity is a theoretical economic situation in which most goods can be produced in great abundance with minimal human labor needed, so that they become available to all very cheaply or even freely. <UniversalLink to="https://en.wikipedia.org/wiki/Post-scarcity_economy">Wikipedia</UniversalLink></p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What do you do in practice?">
      <p>We invest time and money into the research of technology required to achieve fully automatic supply chains.</p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What type of organization are you?">
      <p>The results of our research are open source and free to use to <i>not for profit</i>/<i>community</i> purposes, and the same results are licensed to <i>for profit</i> parties for a fee. We are a <i>for profit</i> to make things happen.</p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What specific technology are you researching?">
      <p>We work on machines and robots listed in the Tech Framework of the Automated Human Habitat page.</p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What is post-scarcity?">
      <p>Post-scarcity is a theoretical economic situation in which most goods can be produced in great abundance with minimal human labor needed, so that they become available to all very cheaply or even freely. <UniversalLink to="https://en.wikipedia.org/wiki/Post-scarcity_economy">Wikipedia</UniversalLink></p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What is your goal?">
      <p>Our current goal is to prove that post-scarcity is possible by developing a fully automatic farm for growing and harvesting of monocarpic plants.</p>
    </ExpandableQuestion>
  </section>

  <CTASection/>
  <RoadMap/>

  <SectionFooter/>
  </div>
</template>



<script>
import HeroImage from '../components/HeroImage.vue'
import UniversalLink from '@/components/UniversalLink.vue'
import SectionFooter from '@/components/SectionFooter.vue'
import ExpandableQuestion from '@/components/ExpandableQuestion.vue'
import CTASection from '@/components/CTASection.vue'
import RoadMap from '@/components/RoadMap.vue'

export default {
  components: { HeroImage, UniversalLink, CTASection, SectionFooter, ExpandableQuestion, RoadMap }
}
</script>

<style scoped>
.questions {
  margin-top: 100px;
  margin-bottom: 100px;
}

.title {
  color: white;
  font-size: 3rem;
  font-family: 'Rajdhani', 'sans-serif';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  word-wrap: break-word;
  margin-bottom: 50px;
}

.subtitle {
  color: #e2e2e2;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 4px;
}
</style>