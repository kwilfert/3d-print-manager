// https://nuxt.com/docs/api/configuration/nuxt-config
import {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'vuetify-nuxt-module',
        '@formkit/auto-animate',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
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