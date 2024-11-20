<template>
  <!-- Breadcrumb -->
  <section class="breadcrumb-area">
    <div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
      <div class="breadcrumb-content">
        <p>DESIGN STUDIO PROJECT</p>
        <h1 class="section-heading">
          <NuxtImg src="star-2.png" alt="Star" /> Lifedrops
          <NuxtImg src="star-2.png" alt="Star" />
        </h1>
      </div>
    </div>
    <!-- Project Details -->
    <div class="video-wrap">
      <div class="container">
        <div class="video">
          <video autoplay controls ref="videoPlayer" class="video-js" poster="/lifedrops-still.jpg"
            style="border-radius: 30px">
            <track kind="chapters" src="lifedrops.vtt" srclang="en" label="Chapters" default />
          </video>
        </div>
      </div>
    </div>
  </section>

  <section class="project-details-wrap mt-4">
    <div class="container">
      <div class="project-about-2 d-flex shadow-box mb-24" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <NuxtImg src="bg1.png" alt="BG" class="bg-img" />
        <div class="left-details p-4 container-fluid">
          <NuxtImg src="icon2.png" alt="Icon" class="star-icon" />
          <ul>
            <li>
              <p>Year</p>
              <h4>2016</h4>
            </li>
            <li>
              <p>Platform</p>
              <h4>iOS</h4>
            </li>
            <li>
              <p>My Role</p>
              <h4>Junior UX/UI Designer</h4>
            </li>

          </ul>
        </div>
        <div class="right-details">
          <h2>Description</h2>
          <p>Lifedrops is a digital platform designed to capture and preserve life’s precious moments through video
            memories. It offers a private, user-friendly space where individuals can create, edit, and store personal
            video content, functioning like a private TikTok for families and friends.
          </p>
          <p>
            This project marked the start of my journey as a UX/UI designer and
            remains a testament to my passion for product design.
          </p>
          <h2>My responsibilities</h2>
          <ul>
            <li><b>1. User Interviews:</b> Conducted interviews with 10 users to gather insights and understand user
              needs.</li>
            <li><b>2. User Flows:</b> Developed detailed user flows to map out the user journey and optimize the
              experience.</li>
            <li><b>3. Wireframes:</b> Created wireframes to visualize the structure and layout of the product.</li>
            <li><b>4. UI Design:</b> Designed the user interface to ensure a visually appealing and user-friendly
              experience.</li>
            <li><b>5. UX Design:</b> Focused on enhancing user satisfaction by improving the usability and accessibility
              provided in the interaction with the product.</li>
            <li><b>6. Branding:</b> Developed the branding strategy to create a cohesive and recognizable identity for
              the product.</li>
          </ul>
        </div>
      </div>
      <div class="shadow-box p-4 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
        <h2>Final Designs</h2>
        <p>With our primary focus on speed, the MVP includes just a few functionalities: recording, storing, and sharing
          videos.</p>
       
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-tutorial.webp" alt="Project Details">
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-screens.webp" alt="Project Details">
      </div>

      <div class="shadow-box p-4 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
        <h2>User Interviews</h2>
        <p>Insights from diverse user interviews have been instrumental in shaping Lifedrops. We understood that even if
          people replaced physical memories with digital ones, they haven't found a easy way to store and organize them.
        </p>

      </div>


      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-empathy.webp" alt="Project Details">
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-user-journey.webp" alt="Project Details">
      </div>
      <div class="shadow-box p-4 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
        <h2>Branding</h2>
        <p>The success of an app also comes from the simplicity of its brand. For the branding, we came up with the idea
          of a drop that starts empty and over time is filled by one or multiple people with joys, memories, or beliefs.
        </p>
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-branding.webp" alt="Project Details">
      </div>
      <div class="shadow-box p-4 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
        <h2>Wireframes</h2>
        <p>Wireframes served as a blueprint for the product team, mapping out the placement of essential elements like
          Drops, Question Sets, and the Social feature. We spent a lot in this stage to define exactly how the user will
          navigate through the app.</p>
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-wireframe1.webp" alt="Project Details">
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-wireframe2.webp" alt="Project Details">
      </div>
      <div class="project-details-2-img mb-4" data-aos="fade-up" data-aos-duration="800"
        data-aos-easing="ease-in-out-sine">
        <img src="/lifedrops-wireframe3.webp" alt="Project Details">
      </div>

      <div class="shadow-box p-4 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-sine">
        <h2 class="pb-3">
          Important lessons

        </h2>
        <h4>Test Design on Real Devices</h4>
        <p>It is best to check the design on a real phone to see if the font sizes, icons, and colors are suitable for a
          handheld device.</p>

        <h4>Focus on End Users</h4>
        <p>When designing, it is crucial to have the end users of the product in mind. This way, you'll focus on
          designing larger elements for older individuals.</p>




        <h4>Smart and Simple Branding</h4>

        <p>Having smart and simple branding makes it much easier to communicate the project's functionalities.
        </p>

      </div>

    </div>
    <div class="container d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="800"
      data-aos-easing="ease-in-out-sine">
      <a href="/readyflytalent" class="big-btn shadow-box"> Previous Project </a>
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
          src: "https://d3s9kvub6l7pwc.cloudfront.net/lifedrops-final-v4.webm",
          type: "video/webm",
        },
      ],
    },
    function onPlayerReady() {
      console.log("Player is ready!");
    }
  );

  const $window = window;
  const $videoWrap = document.querySelector('.video-wrap');
  const $video = document.querySelector('.video');
  const videoHeight = $video.offsetHeight;

  const handleScroll = () => {
    const windowScrollTop = $window.pageYOffset;
    const videoBottom = videoHeight + $videoWrap.getBoundingClientRect().top;

    if (windowScrollTop > videoBottom) {
      $videoWrap.style.height = `${videoHeight}px`;
      $video.classList.add('stuck');
    } else {
      $videoWrap.style.height = 'auto';
      $video.classList.remove('stuck');
    }
  };

  $window.addEventListener('scroll', handleScroll);

  return {
    handleScroll,
  };
});
</script>
