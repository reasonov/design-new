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
				>
					<div class="service__wrapper">
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
					<div class="service-price">
						{{ service.price }}
					</div>
				</div>
			</div>

			<div class="services-note">
				Стоимость объектов с площадью от 250 кв.м рассчитывается индивидуально
				по договорённости.
			</div>
		</div>
	</section>
</template>

<script setup>
const services = [
	{
		title: "Полный дизайн-проект",
		features: [
			"3D визуализации",
			"Чертёжная, строительная документация",
			"Спецификация материалов",
			"Авторский надзор",
		],
		price: "2500 ₽/м.кв",
	},
	{
		title: "Мини Дизайн-проект",
		features: [
			"3D-визуализация",
			"Строительная, чертёжная документация (Планировочные решения+планы электрики)",
			"Спецификация материалов",
		],
		price: "1800 ₽/м.кв",
	},
	{
		title: "Экспресс дизайн",
		features: [
			"Стилистическая карта (коллаж) с подбором материалов, мебели и оборудования в интерьере",
			"Строительная, чертёжная документация",
			"Спецификация материалов",
		],
		price: "1100 ₽/м.кв",
	},
	{
		title: "Авторский надзор",
		description:
			"Включает в себя полное сопровождение объекта при котором дизайнер является материально-ответственным лицом",
		features: [
			"Регулярный выезд на объект с целью контроля строительных работ в соответствии с проектом",
			"Встречи по подбору и приобретению материалов, мебели и оборудования",
			"Согласование различных вопросов со всеми подрядчиками и специалистами на объекте",
		],
		price: "15 000 ₽/мес",
	},
	{
		title: "Плиточные работы широкого спектра",
		description:
			"Включает в себя полное сопровождение объекта при котором дизайнер является материально-ответственным лицом",
		features: [
			"Профессиональная укдадка и резка керамогранита и керамической плитки любого формата",
			"Изготовление конструкций малых форм из керамогранита",
			"Реставрация и облицовка",
		],
	},
]
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
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
	margin-bottom: 40px;
}

.service-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	padding: 40px 30px;
	border-radius: 15px;
	text-align: center;
	transition: all 0.3s ease;
	border: 1px solid #e2e8f0;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	max-width: 300px;
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
	min-height: 60px;
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

.service-price {
	font-size: 1.1rem;
	font-weight: 600;
	color: #2d3748;
	margin-top: 20px;
	padding-top: 15px;
	border-top: 1px solid #e2e8f0;
}

.services-note {
	text-align: center;
	padding: 20px;
	background: #f1f5f9;
	border-radius: 15px;
	max-width: 800px;
	margin: 0 auto;
	font-size: 0.95rem;
	color: #4a5568;
	border: 1px dashed #a8d8ea;
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
