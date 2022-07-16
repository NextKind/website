<template>
<section class="cd-timeline cd-container">

  <RoadMapStep when="June 2020">
    <p><i>The Future We Are Building</i> book published and Transhuma was founded.</p>
  </RoadMapStep>
  <RoadMapStep when="December 2020">
    <p>First version of the <i>_Construct</i> community planning software was published.</p>
  </RoadMapStep>
  <RoadMapStep when="April 2021">
    <p>First version of the <UniversalLink to="https://sigma.mirek.cc/">Sigma Modular Construction System</UniversalLink> was published.</p>
  </RoadMapStep>
  <RoadMapStep when="September 2021">
    <p>The search for the first place, where to start prototyping the tech and grow an experimental community, has begun.</p>
  </RoadMapStep>
  <RoadMapStep when="March/April 2022">
    <p>A group of like-minded people joined and the Next Kind was founded. (What Transhuma was meant to become.)</p>
  </RoadMapStep>
  <RoadMapStep when="July 2022">
    <p>We found a temporary plot of land where we could unite physically and start working on prototypes.</p>
  </RoadMapStep>
</section>

<section class="cd-timeline cd-container future">
  <!-- <div class="cd-timeline-block"></div> -->
  <RoadMapStep when="Autumn/Winter 2023">
    <p>A working 3D simulation of the farm, with software ready to be deployed to the physical prototype.</p>
  </RoadMapStep>
  <RoadMapStep when="Summer/Autumn 2023">
    <p>A working prototype of the farm.</p>
  </RoadMapStep>
  <RoadMapStep when="Next">
    <p>Acquiring land, community project, and the beginning of construction.</p>
  </RoadMapStep>
</section>
</template>

<script>
import RoadMapStep from '@/components/RoadMapStep.vue'

export default {
  components: { RoadMapStep }
}

</script>

<style>
.cd-container {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 10%;
  border-radius: 2px;
}
.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

.cd-timeline {
  position: relative;
  padding: 2em 0;
}
.cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #008CD0;
}

.cd-timeline.future::before {
  background: #333;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: -2em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #008CD0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline.future .cd-timeline-img {
  box-shadow: 0 0 0 4px #333, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img {
  background: #00f8ff;
}

.cd-timeline.future .cd-timeline-img {
  background: #555;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #222831;
  border-radius: 2px;
  padding: 1em;
}

.cd-timeline.future .cd-timeline-content {
  background: #2e323a;
}

@media (max-width: 500px) {
  .timeline-content-info-title, .timeline-content-info-date {  
    display: block;
    width:100%;
  } 
}

.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  color: #006fc3;
  margin-top:0;
  margin-bottom: 5px;
}

.cd-timeline.future .cd-timeline-content h2 {
  color: #909090;
}

.cd-timeline-content p {
  color: white;
  font-size: 13px;
  font-size: 0.8125rem;
}

.cd-timeline.future .cd-timeline-content p {
  color: #a8a8a8;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 15px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #222831;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
    font-family: 'Rajdhani', 'sans-serif';
    text-transform: uppercase;
    font-weight: 700;

  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more {
    font-size: 14px;
    font-size: 0.875rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 36%;
    margin: 0 5%
  }
  .cd-timeline-content::before {
    top: 30px;
    left: 100%;
    border-color: transparent;
    border-left-color: #222831;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 30px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #222831;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
}
</style>