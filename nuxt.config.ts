// https://nuxt.com/docs/api/configuration/nuxt-config
import {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['@/assets/css/main.css'],
    modules: [
        'vuetify-nuxt-module',
        '@formkit/auto-animate',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        "@nuxtjs/tailwindcss"
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {},

        moduleOptions: {}
    }
})