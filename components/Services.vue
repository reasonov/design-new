<template>
	<section id="services" class="services">
		<div class="container">
			<div class="section-header">
				<h2>Наши услуги</h2>
				<div class="section-divider"></div>
				<p>Профессиональные решения для вашего интерьера</p>
			</div>

			<div class="services-grid">
				<div
					v-for="(service, index) in services"
					:key="index"
					class="service-card"
					ref="serviceCards"
				>
					<div class="service-icon">
						<div class="icon-bg"></div>
						<span class="service-number">{{ index + 1 }}</span>
					</div>
					<h3>{{ service.title }}</h3>
					<p>{{ service.description }}</p>
					<div class="service-features">
						<ul>
							<li v-for="feature in service.features" :key="feature">
								{{ feature }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const serviceCards = ref([])

const services = [
	{
		title: "Дизайн проекты",
		description: "Полный дизайн-проект под ваш вкус и бюджет",
		features: [
			"Планировочные решения",
			"3D визуализации",
			"Спецификации материалов",
			"Авторский надзор",
		],
	},
	{
		title: "Ремонт под ключ",
		description: "Ремонт и отделка с нашим контролем качества",
		features: [
			"Демонтажные работы",
			"Черновые работы",
			"Чистовая отделка",
			"Уборка помещения",
		],
	},
	{
		title: "Консультации",
		description: "Бесплатная консультация по любым вопросам",
		features: [
			"Анализ пространства",
			"Выбор стиля",
			"Подбор материалов",
			"Смета работ",
		],
	},
]

onMounted(() => {
	// Анимация появления карточек при скролле
	if (serviceCards.value.length > 0) {
		serviceCards.value.forEach((card, index) => {
			gsap.from(card, {
				opacity: 0,
				y: 30,
				duration: 0.6,
				delay: index * 0.2,
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			})
		})
	}
})
</script>

<style scoped>
.services {
	padding: 100px 0;
	background: #f8f9fa;
	color: #4a5568;
}

.section-header {
	text-align: center;
	margin-bottom: 60px;
}

.section-header h2 {
	font-size: 2.5rem;
	margin-bottom: 20px;
	font-weight: 600;
	color: #2d3748;
}

.section-divider {
	width: 60px;
	height: 3px;
	background: #a8d8ea;
	margin: 15px auto;
	border-radius: 2px;
}

.section-header p {
	font-size: 1.1rem;
	color: #4a5568;
	font-weight: 300;
}

.services-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
}

.service-card {
	background: white;
	padding: 40px 30px;
	border-radius: 15px;
	text-align: center;
	transition: all 0.3s ease;
	border: 1px solid #e2e8f0;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	opacity: 1; /* Важно: карточки видимы по умолчанию */
}

.service-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
	border-color: #a8d8ea;
}

.service-icon {
	position: relative;
	width: 70px;
	height: 70px;
	margin: 0 auto 25px;
}

.icon-bg {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #a8d8ea;
	border-radius: 50%;
	opacity: 0.2;
}

.service-number {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.8rem;
	font-weight: 600;
	color: #2d3748;
}

.service-card h3 {
	font-size: 1.4rem;
	margin-bottom: 15px;
	font-weight: 600;
	color: #2d3748;
}

.service-card p {
	margin-bottom: 25px;
	line-height: 1.6;
	color: #4a5568;
}

.service-features ul {
	text-align: left;
	list-style: none;
	padding: 0;
}

.service-features li {
	padding: 8px 0 8px 25px;
	position: relative;
	font-size: 0.95rem;
	color: #4a5568;
}

.service-features li::before {
	content: "•";
	position: absolute;
	left: 0;
	color: #a8d8ea;
	font-weight: bold;
	font-size: 1.2rem;
}

@media (max-width: 768px) {
	.services {
		padding: 60px 0;
	}

	.section-header h2 {
		font-size: 2rem;
	}

	.services-grid {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>
