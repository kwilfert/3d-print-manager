import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('Swal', Swal)
})