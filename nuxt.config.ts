// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon'
    ],
    content: {

    },
    colorMode: {
        preference: 'system',
        dataValue: 'theme',
        classSuffix: ''
    },
})
