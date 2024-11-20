<script setup> 
useHead({
  title: "Andrei Carpen | Projects",
})

onMounted(() => {
  const { $anime } = useNuxtApp();

  let animationTimeout; // Variable to store the timeout for debouncing

  if ('IntersectionObserver' in window) {
    // Define options for Intersection Observer
    const options = {
      threshold: 0 // Trigger when any part of the element is visible
    };

    // Callback function to handle intersection changes
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when the element enters the viewport
          $anime({ targets: entry.target, translateY: [20, 0], translateZ: 0, opacity: [0, 1], easing: 'easeInOutQuad', duration: 800 });
        } else {
          // Reset the opacity when the element exits the viewport
          entry.target.style.opacity = '0';
        }
      });
    };

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Get the elements with class 'fade-up' and observe each of them
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(element => {
      // Set initial opacity to 0
      element.style.opacity = '0';
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    window.addEventListener('scroll', () => {
      clearTimeout(animationTimeout); // Clear previous timeout

      // Debounce the scroll event with a timeout of 200 milliseconds
      animationTimeout = setTimeout(() => {
        // Check if the element is in the viewport and trigger animation accordingly
        fadeUpElements.forEach(element => {
          if (isElementInViewport(element)) {
            $anime({ targets: element, translateY: [20, 0], translateZ: 0, opacity: [0, 1], easing: 'easeInOutQuad', duration: 800 });
          } else {
            element.style.opacity = '0';
          }
        });
      }, 200); // Adjust the debounce delay as needed
    });
  }
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
</script>

<template> 
   <Portfolio />
</template>

