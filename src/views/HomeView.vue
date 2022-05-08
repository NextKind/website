<template>
  <section class="hero">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png">
      <p>The Next Kind is a new society actively working towards the world of post-scarcity.</p>
    </div>
  </section>

  <section class="questions">
    <ExpandableQuestion heading="What is post-scarcity?">
      <p>Post-scarcity is a theoretical economic situation in which most goods can be produced in great abundance with minimal human labor needed, so that they become available to all very cheaply or even freely. <UniversalLink to="https://en.wikipedia.org/wiki/Post-scarcity_economy">Wikipedia</UniversalLink></p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What do you do in practice?">
      <p>We invest time and money into the research of technology required to achieve fully automatic supply chains.</p>
    </ExpandableQuestion>
    <ExpandableQuestion heading="What type of organization are you?">
      <p>The results of our research are open source and free to use to <i>not for profit</i>/<i>community</i> purposes, and the same is licensed to <i>for profit</i> parties for a fee. We are a <i>for profit</i> to make things happen.</p>
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

  <section class="invest">
    <h1 class="heading">Join Us</h1>
    <p>Invest your own time and/or money. Come and say hello on <UniversalLink to="https://discord.gg/qH4dzk4D">Discord</UniversalLink> or send an email to <UniversalLink to="mailto:mirek@nextkind.org">mirek@nextkind.org</UniversalLink></p>
  </section>

  <section class="timeline">
    <div class="event">
      <span class="date">March, April 2022</span>
      <p>A group of like-minded people joined and the Next Kind was founded. (What Transhuma was meant to become.)</p>
    </div>
    <div class="event">
      <span class="date">September 2021</span>
      <p>The search for the first place, where to start prototyping the tech and grow an experimental community, has begun.</p>
    </div>
    <div class="event">
      <span class="date">April 2021</span>
      <p>First version of the <UniversalLink to="https://sigma.mirek.cc/">Sigma Modular Construction System</UniversalLink> was published.</p>
    </div>
    <div class="event">
      <span class="date">December 2020</span>
      <p>First version of the <i>_Construct</i> community planning software was published.</p>
    </div>
    <div class="event">
      <span class="date">June 2020</span>
      <p><i>The Future We Are Building</i> book published and Transhuma was founded.</p>
    </div>
  </section>

  <SectionFooter/>

</template>



<script>
import UniversalLink from '@/components/UniversalLink.vue'
import SectionFooter from '@/components/SectionFooter.vue'
import ExpandableQuestion from '@/components/ExpandableQuestion.vue'

export default {
  components: { UniversalLink, SectionFooter, ExpandableQuestion }
}
</script>