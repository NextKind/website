<template>
<footer>
  <div class="content">
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">Contact</li>
        <li><a class="email" href="mailto:info@nextkind.org">info@nextkind.org</a></li>
      
      <div class="media-icons">
          <SocialIcon 
            pack="fab" 
            icon="facebook-square"
            href="https://www.facebook.com/Transhuma">
          </SocialIcon>
          <SocialIcon 
            pack="fab" 
            icon="youtube"
            href="https://www.youtube.com/channel/UCm9HY_xXLYbTWCvz-wR44FQ">
          </SocialIcon>
          <SocialIcon 
            pack="fab" 
            icon="discord"
            href="https://discord.gg/hhVTMTUx">
          </SocialIcon>
        </div>
        </ul>
      <ul class="box">
        <li class="link_name">The Next Kind</li>
        <li>The Next Kind is a new society actively working towards the world of post-scarcity.</li>
      </ul>
      <ul class="box">
        <li class="link_name">Links</li>
        <li><router-link :to="{ path: '/' }">Home</router-link></li>
        <li><a href="https://discord.gg/hhVTMTUx">Join Us on Discord</a></li>
        <li><a href="https://transhuma.tech/#/framework/overview">The Tech Framework</a></li>
        <li><a href="http://transhuma.tech/#the-future-we-are-building">The Future We Are Building</a></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">© 2022 The Next Kind. All Rights Reserved.
      </span>
    </div>
  </div>
  <div class="cookies">
    We use cookies to understand where you came from and how you interact with the website content. Continue browsing if you agree.
  </div>  
</footer>
</template>

<script>
import SocialIcon from '@/components/SocialIcon.vue';

export default {
  components: { SocialIcon }
}
</script>

<style>
footer {
  background: #111;
  width: 100%;
}

footer .content {
  max-width: 1800px;
  margin: auto;
  padding: 80px 40px 40px 40px;
}

.box {
  background-color: #111 !important;
  font-size: 1em;
  color: #888 !important;
  min-width: 300px;
}

.copyright_text {
  color: #888 !important;
}

.media-icons {
  padding-top: 15px;
}

.media-icons .social-icon {
  margin-right: 20px;
}

footer .content .link-boxes{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

footer .content .link-boxes .box{
  width: calc(100% / 4 - 10px);
}

.content .link-boxes .box .link_name{
  font-family: 'Rajdhani', 'sans-serif';
  color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 30px;
  position: relative;
  text-transform: uppercase;
}

.content .link-boxes .box li{
  margin: 6px 0;
  list-style: none;
}
.content .link-boxes .box li a{
  color: #888;
  font-weight: 400;
}

.content .link-boxes .box li a.email {
  color: #006fc3;
}

.content .link-boxes .box li a.email:hover {
  color: #00f8ff;
}

.content .link-boxes .box li a:hover{
  color: #006fc3;
}

footer .bottom-details{
  width: 100%;
  background: rgb(0, 0, 0);
}

footer .bottom-details .bottom_text{
  margin: auto;
  padding: 20px 40px;
  justify-content: space-between;
  text-align: center;
}

.bottom-details .bottom_text a {
  margin-right: 10px;
}

.cookies {
  text-align: center;
  position: fixed;
  width: 100vw;
  bottom: 0;
  font-size: 9px;
  background: linear-gradient(hsla(0,0%,100%,0),#111);
  color: #888;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media (max-width: 900px) {
  footer .content .link-boxes{
    flex-wrap: wrap;
  }

  footer .bottom-details .bottom_text {
    flex-wrap: wrap;
  }

}

@media (max-width: 700px){
  footer{
    position: relative;
  }

  .media-icons a{
    height: 35px;
    width: 35px;
    font-size: 14px;
    line-height: 35px;
  }

  footer .content .link-boxes .box{
    width: calc(100% / 3 - 10px);
  }
  
  .bottom-details .bottom_text span,
  .bottom-details .bottom_text a{
    font-size: 12px;
  }
}

@media (max-width: 520px){
  .media-icons{
    margin-top: 16px;
  }
  footer .content .link-boxes .box{
    width: calc(100% / 2 - 10px);
  }
}
</style>