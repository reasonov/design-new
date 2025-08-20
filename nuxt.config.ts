import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
	app: {
		baseURL: "/design-new/", // ВАЖНО: замените на имя вашего репозитория
		head: {
			title: "Анастасия Масликова | Дизайн интерьеров",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content:
						"Профессиональный дизайн интерьеров. Уникальные решения для вашего дома.",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/НАЗВАНИЕ-РЕПОЗИТОРИЯ/favicon.ico",
				},
			],
		},
	},
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/image"],
	ssr: true,
	target: "static",

	// Генерация статического сайта
	nitro: {
		prerender: {
			crawlLinks: true,
		},
	},
})
