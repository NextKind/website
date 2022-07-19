<template>

  <div class="media-resources">
    <div class="container has-text-centered">
      <p class="subtitle" style="margin-top: 60px;">
        Graphics and guidelines for third party mentions
      </p>
      <p class="title" style="margin-top: 60px;">
        Logos
      </p>
    </div>

    <div class="container logos">
      <p>
        <span>
          <img src="/media/logos/NextKind-Logo-Dark-Background.png" alt="NextKind Logo Dark Background">
          <br><br>
          <a href="/media/logos/NextKind-Logo-Dark-Background.png" target="_blank">Download PNG</a> |
          <a href="/media/logos/NextKind-Logo-Dark-Background.svg" target="_blank">Download SVG</a>
        </span>
        <span>
          <img src="/media/logos/NextKind-Logo-Light-Background.png" alt="NextKind Logo Light Background">
          <br><br>
          <a href="/media/logos/NextKind-Logo-Light-Background.png" target="_blank">Download PNG</a> |
          <a href="/media/logos/NextKind-Logo-Light-Background.svg" target="_blank">Download SVG</a>
        </span>
      </p>

      <p>
        <span>
          <img src="/media/logos/NextKind-Logo-Square-Dark-Background.png" alt="NextKind Logo Square Dark Background">
          <br><br>
          <a href="/media/logos/NextKind-Logo-Square-Dark-Background.png" target="_blank">Download PNG</a> |
          <a href="/media/logos/NextKind-Logo-Square-Dark-Background.svg" target="_blank">Download SVG</a>
        </span>
        <span>
          <img src="/media/logos/NextKind-Logo-Square-Light-Background.png" alt="NextKind Logo Square Light Background">
          <br><br>
          <a href="/media/logos/NextKind-Logo-Square-Light-Background.png" target="_blank">Download PNG</a> |
          <a href="/media/logos/NextKind-Logo-Square-Light-Background.svg" target="_blank">Download SVG</a>
        </span>
      </p>
    </div>

    <div class="container has-text-centered">
      <p class="title" style="margin-top: 60px;">
        Writing The Name
      </p>
      <p style="margin-top: 20px;">
        <strong class="correct">✔ NEXTKIND</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong class="correct">✔ NextKind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong class="correct">✔ The NextKind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ NEXT KIND</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ Next Kind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ nextkind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ Nextkind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ The Nextkind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ The Next Kind</strong>
      </p>
      <p style="margin-top: 10px;">
        <strong>✘ the next kind</strong>
      </p>
    </div>

    <div class="container has-text-centered" style="margin-bottom: 60px;">
      <p class="title" style="margin-top: 60px;">
        Who We Are
      </p>

      <p style="margin-top: 20px;">
        A for-profit community developing the missing chunks of post-scarcity-enabling tech. <em>(84 characters)</em>
      </p>

      <p style="margin-top: 20px;">
        A for-profit community developing the missing chunks of post-scarcity-enabling tech in the fields of packing, shipping, and farming. Open-source, licensable to for-profits, free for non-profits, communities and individuals. <em>(223 characters)</em>
      </p>
    </div>

    <div class="container has-text-centered" style="margin-bottom: 60px;">
      <p class="title" style="margin-top: 60px;">
        Fonts
      </p>

      <p style="margin-top: 20px;">
        <UniversalLink to="https://fonts.google.com/specimen/Rajdhani?query=raj#standard-styles">Rajdhani <em>(Headings, Titles)</em></UniversalLink>
      </p>

      <p style="margin-top: 20px;">
        <UniversalLink to="https://fonts.google.com/specimen/Ubuntu?query=ubuntu">Ubuntu <em>(Subtitles, Text)</em></UniversalLink>
      </p>
    </div>

    <div class="container has-text-centered" style="margin-bottom: 60px;">
      <p class="title" style="margin-top: 60px;">
        Colors
      </p>

      <p class="colors">
        <span style="background: #006fc3;">#006FC3</span>
        <span style="background: #00f8ff;">#00F8FF</span>
        <span style="background: #191C23;">#191C23</span>
        <span style="background: #222831;">#222831</span>
        <span style="background: #333333;">#333333</span>
        <span style="background: #888888;">#888888</span>
        <span style="background: #FFFFFF;">#FFFFFF</span>
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

.media-resources {
  color: #ddd;
}

.media-resources strong {
  color: #ddd;
  font-size: 1.2em;
  font-weight: solid;
}

.media-resources strong.correct {
  color: #00f8ff;
}

.logos > p {
  display: flex;
}

.logos span {
  display: block;
  flex-grow: 1;
  text-align: center;
  box-sizing: border-box;
  margin: 5px;
  padding: 20px;
}

.logos img {
  height: 70px;
}

.logos > p:last-child img {
  height: 140px;
}

.logos > p span:first-child {
  background-color: #222831;
  color: #fff;
}

.logos > p span:last-child {
  background-color: #fff;
  color: #333;
}

@media screen and (max-width: 600px) {
  .logos > p {
    display: block;
  }
}

.media-resources em {
  color: #888;
}

.colors span {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 5px solid black;
  color: white;
  box-sizing: border-box;
  padding-top: 33px;
  text-shadow: 0px 0px 3px black;
}
</style>