<script setup>
// get full year
const year = new Date().getFullYear();
</script>

<template>
  <!-- Footer -->
  <footer class="footer-area">
    <div class="container">
      <div class="footer-content text-center">
        <NuxtLink to="/" class="logo">
          <NuxtImg src="logo.png" alt="Logo" />
        </NuxtLink>
        <ul class="footer-menu">
          <li>
            <NuxtLink to="/about">About me</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/resume">Resume</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
        <p class="copyright">© {{ year }} Andrei Carpen</p>
      </div>
    </div>
  </footer>
</template>
