<template>
  <section class="about-area">
    <div class="container">
      <div class="d-flex about-me-wrap align-items-start" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <div class="col-6 col-md-4 p-lg-1">
          <video autoplay loop ref="videoPlayer" class="video-js" style="border-radius: 30px"></video>
        </div>

        <div class="about-details mb-4 p-lg-1" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">

          <div class="about-details-inner shadow-box">
            <NuxtImg src="icon2.png" style="width: 40px" alt="Star" class="star-icon" />

            <p>
              My life has taken me on adventures from Romania to Denmark, from
              Spain to Indonesia. I've led exciting design projects and worked
              closely with multicultural teams to bring unique concepts to reality.
            </p>
            <br>

            <p>
              I am passionate about making people's lives better through design and love being involved in impactful
              projects that shape the future of humanity.
            </p>

          </div>
        </div>
      </div>


    </div>
  </section>
  <section class="service-area">
    <div class="container">
      <div class="row p-lg-1">
        <!-- Content -->
        <div class="col-md-12" style="background: none">
          <h1 class="section-heading mb-4" data-aos="fade-up" data-aos-duration="800"
            data-aos-easing="ease-in-out-sine">
            <NuxtImg src="star-2.png" alt="Star" /> My Hobbies
            <NuxtImg src="star-2.png" alt="Star" />
          </h1>

          <div class="service-content-wrap" data-aos="fade-up" data-aos-duration="800"
            data-aos-easing="ease-in-out-sine">
            <div class="service-content-inner shadow-box">
              <div class="service-items">
                <div class="service-item">
                  <h4 class="mb-3">
                    <i class="iconoir-design-pencil icon"></i> Arts & crafts
                  </h4>
                  <p style="font-size: 16px">
                    I enjoy immersing myself in creative pursuits like design,
                    pottery, photography, painting, songwriting and
                    jewelry-making. I am addicted to the thrill of learning
                    something new for the first time. Every day I need to
                    express myself.
                  </p>
                </div>
                <div class="service-item">
                  <h4 class="mb-3">
                    <i class="iconoir-brain icon"></i> Psychology
                  </h4>
                  <p style="font-size: 16px">
                    As a kid I was lucky to have a very patient mother, who
                    answered all my questions. And since then, I have never
                    stopped asking. I am curious and I like to understand why we
                    do or react in a certain way. Every day I need to learn
                    something new.
                  </p>
                </div>
                <div class="service-item">
                  <h4 class="mb-3">
                    <i class="iconoir-developer icon"></i> Think & Create
                  </h4>
                  <p style="font-size: 16px">
                    Over the years, I have trained my brain to crave creation. I
                    just love to build digital things. I get excited when a
                    friend asks me to help with an idea for a small SaaS, or
                    when a friend needs an idea for a brand name. Every day I
                    need to create.
                  </p>
                </div>
                <div class="service-item">
                  <h4 class="mb-3">
                    <i class="iconoir-archery icon"></i> Sports
                  </h4>
                  <p style="font-size: 16px">
                    Being outside, playing, was a big part of my childhood. Sadly, as a
                    young adult, I was always indoors. However, in the last
                    couple of years I rediscovered my passion for sports with
                    pilates, muai thai, bouldering & squash. Every day I need to
                    move my body.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="row" style="padding:0 16px;">
       
        <div class="col-lg-4 mb-4 p-lg-1" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine" >
              <div class="about-crenditials-box info-box shadow-box h-full">
                <NuxtLink class="overlay-link" to="/resume"></NuxtLink>
                <NuxtImg src="bg1.png" alt="BG" class="bg-img" />
                <NuxtImg src="resume-logos.png" alt="Sign" />
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>Resume</h4>
                    <h1>Discover My Career Journey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                  </div>

                  <NuxtLink to="/resume" class="about-btn">
                    <NuxtImg src="icon.svg" style="width: 48px" alt="Button" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mb-4 p-lg-1" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine" >
              <div class="about-project-box info-box shadow-box h-full">
                <NuxtLink class="overlay-link" to="/portfolio"></NuxtLink>
                <NuxtImg src="bg1.png" alt="BG" class="bg-img" />
                <NuxtImg src="my-works.png" :placeholder="[400, 30, 50]" alt="My Works" />
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>PORTFOLIO</h4>
                    <h1>Explore My Case Studies</h1>
                  </div>
                  <NuxtLink to="/portfolio" class="about-btn">
                    <NuxtImg src="icon.svg" style="width:48px" alt="Button" />
                  </NuxtLink>
                </div>
              </div>
            </div>


           

            <div class="col-lg-3 mb-4 p-lg-1" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
              <div class="about-contact-box info-box shadow-box h-full">
                <NuxtLink class="overlay-link" to="/contact"></NuxtLink>
                <NuxtImg src="bg1.png" alt="BG" class="bg-img" />
                <NuxtImg src="icon2.png" alt="Icon" class="star-icon" />
                <h1>Let's <br />work <span>together.</span></h1>
                <NuxtLink to="/contact" class="about-btn">
                  <NuxtImg src="icon.svg" style="width: 48px" alt="Button" />
                </NuxtLink>
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

const videoPlayer = ref(null);

onMounted(() => {
  const player = videojs(
    videoPlayer.value,
    {
      autoplay: true,
      controls: false,
      fluid: true,
      enableSmoothSeeking: true,
      muted: true,
      sources: [
        {
          src: "https://d3s9kvub6l7pwc.cloudfront.net/about.webm",
          type: "video/webm",
        },
      ],
    },
    function onPlayerReady() {
      console.log("Player is ready!");
    }
  );
});
</script>
