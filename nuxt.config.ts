// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: { autoImport: false },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
})
