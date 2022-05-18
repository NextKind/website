<template>
<section id="cd-timeline" class="cd-container">

  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-movie">
    </div> <!-- cd-timeline-img -->

<div class="cd-timeline-content">
      <h2>March/April 2022</h2>
      <p>A group of like-minded people joined and the Next Kind was founded. (What Transhuma was meant to become.)</p>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->

  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-picture">
    </div> <!-- cd-timeline-img -->

<div class="cd-timeline-content">
      <h2>September 2021</h2>
      <p>The search for the first place, where to start prototyping the tech and grow an experimental community, has begun.</p>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->

  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-location">
    </div> <!-- cd-timeline-img -->

<div class="cd-timeline-content">
      <h2>April 2021</h2>
      <p>First version of the <UniversalLink to="https://sigma.mirek.cc/">Sigma Modular Construction System</UniversalLink> was published.</p>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->

  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-location">
    </div> 

<div class="cd-timeline-content">
      <h2>December 2020</h2>
      <p>First version of the <i>_Construct</i> community planning software was published.</p>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->

  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-movie">
    </div> <!-- cd-timeline-img -->
<div class="cd-timeline-content">
      <h2>June 2020</h2>
      <p><i>The Future We Are Building</i> book published and Transhuma was founded.</p>
    </div> <!-- cd-timeline-content -->
  </div> <!-- cd-timeline-block -->
</section> <!-- cd-timeline -->
</template>

<style scoped>
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

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}
#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #008CD0;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
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

.cd-timeline-img {
  background: #00f8ff;
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

.cd-timeline-content p {
  color: rgba(255,255,255,.7);
  font-size: 13px;
  font-size: 0.8125rem;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
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
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #222831;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
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