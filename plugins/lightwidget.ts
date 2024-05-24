export default defineNuxtPlugin(() => {
    if (process.client) {
        const script = document.createElement('script');
        script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
    }
});
