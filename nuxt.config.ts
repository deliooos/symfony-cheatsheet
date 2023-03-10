// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@nuxt/image-edge'
    ],
    plugins: [
        { src: '~/plugins/vercel.ts', mode: 'client' },
    ],
    content: {
        highlight: {
            theme: 'github-dark'
        }
    },
    colorMode: {
        preference: 'system',
        dataValue: 'theme',
        classSuffix: ''
    },
})
