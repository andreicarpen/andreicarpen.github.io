// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "~/assets/css/iconoir.css",
    'bootstrap/dist/css/bootstrap.css',
    "~/assets/css/style.css",
  ],

  plugins: [
    { src: '@/plugins/spline-viewer.client.ts', ssr: false }, // Assuming spline-viewer is client-side only
  ],

  // compiler options
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag === 'spline-viewer';
      }
    }
  },

  modules: ["@nuxt/image","@hypernym/nuxt-anime"],
  app: {
    head: {
    meta: [
      // ...other meta tags
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Andrei Carpen | Product Designer' },
      { hid: 'og-description', property: 'og:description', content: 'Product and UI/UX designer with a passion for creating intuitive and impactful user experiences.' },
      { hid: 'og-image', property: 'og:image', content: '/site-thumbnail.jpg' },
    ]
  }}
});