// https://nuxt.com/docs/api/configuration/nuxt-config
import {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'vuetify-nuxt-module'
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
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            // @TODO: list all vuetify module options
        }
    }
})
