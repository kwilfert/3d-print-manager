import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['@/assets/css/main.css'],
    modules: [
        'vuetify-nuxt-module',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/color-mode'
    ],
    plugins: ['~/plugins/lightwidget.ts'],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            theme: {
                themes: {
                    light: {
                        dark: false,
                    },
                    dark: {
                        dark: true,
                        colors: {
                            primary: '#191825',
                            secondary: '#865DFF',
                            tertiary: '#E384FF',
                            accent: '#FFA3FD',
                            //needed for dark mode iframe
                            //'on-background': '#121212'
                        }
                    }
                }
            }
        },
        moduleOptions: {}
    },
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        logLevel: 'info', // Enable detailed logging
        server: {
            hmr: {
                overlay: true,
                port: 24678, // Specify a port for HMR
                protocol: 'ws' // Ensure WebSocket protocol is used
            }
        }
    }
})