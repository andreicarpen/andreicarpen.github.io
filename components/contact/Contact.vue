<template>
  <!-- Contact -->
  <section class="contact-area" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
    <div class="container">
      <div class="gx-row d-flex justify-content-between" style="gap:16px">
        <div class="contact-infos">
          <h3 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
            Reach
          </h3>
          <ul class="contact-details">
            <li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800"
              data-aos-easing="ease-in-out-sine">
              <div class="icon-box shadow-box">
                <i class="iconoir-mail"></i>
              </div>
              <div class="right">
                <span>EMAIL</span>
                <h4>
                  <a href="mailto:andreicarpen@gmail.com">andreicarpen@gmail.com</a>
                </h4>
              </div>
            </li>

            <li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800"
              data-aos-easing="ease-in-out-sine">
              <div class="icon-box shadow-box">
                <i class="iconoir-phone"></i>
              </div>
              <div class="right">
                <span>WhatsApp</span>
                <h4>
                  <a href="https://wa.me/+40730513553" target="_blank">+40 730 513 553</a>
                </h4>
              </div>
            </li>

            <li class="d-flex align-items-center" data-aos="fade-up" data-aos-duration="800"
              data-aos-easing="ease-in-out-sine">
              <div class="icon-box shadow-box">
                <i class="iconoir-pin-alt"></i>
              </div>
              <div class="right">
                <span>Current Location</span>
                <h4>Johor Bahru, Malaysia</h4>
              </div>
            </li>
          </ul>

          <h3 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
            Network
          </h3>
          <ul class="social-links d-flex align-center" data-aos="fade-up" data-aos-duration="800"
            data-aos-easing="ease-in-out-sine">
            <li>
              <NuxtLink to="https://www.linkedin.com/in/andreicarpen" target="_blank"><i class="iconoir-linkedin"></i>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://www.instagram.com/andreicarpen" target="_blank"><i class="iconoir-instagram"></i>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine"
          class="contact-form aos-init aos-animate order-first">
          <div class="shadow-box">
            <!-- Form content -->
            <NuxtImg src="bg1.png" alt="BG" class="bg-img" />
            <NuxtImg src="icon3.png" alt="Icon" />
            <h1>Let’s work <span>together.</span></h1>

            <video autoplay ref="videoPlayer" class="video-js" style="border-radius: 30px"></video>

            <a href="https://calendly.com/andreicarpen/discovery-call" target="_blank"
              download="Andrei Carpen Resume.pdf" class="theme-btn mt-3" style="width: 100%; text-align: center">Book a
              meeting</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "~/assets/css/videoplayer.css";
import { ref, onMounted } from "vue";
const videoPlayer = ref();
let player = null;
onMounted(() => {
  player = videojs(
    videoPlayer.value,
    {
      autoplay: true,
      controls: true,
      fluid: true,
      enableSmoothSeeking: true,
      sources: [
        {
          src: "https://d3s9kvub6l7pwc.cloudfront.net/contact-54.webm",
          type: "video/webm",
        },
      ],
    },
    function onPlayerReady() {
      console.log("Player is ready!");
      this.volume(0.5);
    }
  );
});
</script>
