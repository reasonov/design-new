export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ирина Иванова | Дизайн интерьеров',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Профессиональный дизайн интерьеров. Уникальные решения для вашего дома.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image'],
  ssr: true,
  target: 'static'
})
