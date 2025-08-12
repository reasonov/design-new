<template>
	<section id="portfolio" class="portfolio">
		<div class="container">
			<div class="section-header">
				<h2>Портфолио</h2>
				<div class="section-divider"></div>
				<p>Вот некоторые мои работы</p>
			</div>

			<div class="portfolio-masonry">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="project-item"
					:class="`size-${project.size || 'medium'}`"
					@click="openModal(project)"
				>
					<div class="project-card">
						<NuxtImg
							:src="project.image"
							:alt="project.title"
							class="project-image"
							loading="lazy"
						/>
						<div class="project-overlay">
							<div class="project-info">
								<h3>{{ project.title }}</h3>
								<p>{{ project.category }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Модальное окно -->
		<transition name="modal">
			<div v-if="showModal" class="modal-overlay" @click="closeModal">
				<div class="modal-content" @click.stop>
					<button class="close-btn" @click="closeModal">&times;</button>
					<div class="modal-body">
						<NuxtImg
							:src="currentProject.image"
							:alt="currentProject.title"
							class="modal-image"
						/>
						<div class="modal-details">
							<h3>{{ currentProject.title }}</h3>
							<span class="modal-category">{{ currentProject.category }}</span>
							<p>{{ currentProject.description }}</p>
							<div class="modal-tags" v-if="currentProject.tags">
								<span v-for="tag in currentProject.tags" :key="tag" class="tag">
									{{ tag }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</section>
</template>

<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
	{
		title: "Современная гостиная",
		category: "Жилое пространство",
		description:
			"Элегантный интерьер в современном стиле с использованием натуральных материалов",
		image: "/images/work-1.jpg",
		size: "large",
		tags: ["Современный стиль", "Дуб", "Мрамор"],
	},
	{
		title: "Классическая кухня",
		category: "Кухонное пространство",
		description: "Уютная кухня в классическом стиле с индивидуальным дизайном",
		image: "/images/work-2.jpg",
		size: "small",
		tags: ["Классика", "Белый дуб", "Гранит"],
	},
	{
		title: "Минималистичная спальня",
		category: "Спальня",
		description: "Спальня в минималистичном стиле с акцентом на комфорт",
		image: "/images/work-3.jpg",
		size: "medium",
		tags: ["Минимализм", "Текстиль", "Свет"],
	},
	{
		title: "Детская комната",
		category: "Детское пространство",
		description: "Яркая и функциональная детская комната",
		image: "/images/work-4.jpg",
		size: "small",
		tags: ["Дети", "Цвет", "Функциональность"],
	},
	{
		title: "Офисное пространство",
		category: "Коммерческий проект",
		description: "Современный офис с элементами лофта",
		image: "/images/work-5.jpg",
		size: "large",
		tags: ["Офис", "Лофт", "Стекло"],
	},
	{
		title: "Ванная комната",
		category: "Санузел",
		description: "Элегантная ванная комната с мраморной отделкой",
		image: "/images/work-6.jpg",
		size: "medium",
		tags: ["Санузел", "Мрамор", "Хром"],
	},
]

const showModal = ref(false)
const currentProject = ref({})

function openModal(project) {
	currentProject.value = project
	showModal.value = true
	document.body.style.overflow = "hidden"
}

function closeModal() {
	showModal.value = false
	document.body.style.overflow = "auto"
}

onMounted(() => {
	gsap.from(".project-item", {
		opacity: 0,
		y: 30,
		stagger: 0.1,
		duration: 0.6,
		scrollTrigger: {
			trigger: ".portfolio-masonry",
			start: "top 85%",
		},
	})
})
</script>

<style scoped>
.portfolio {
	padding: 100px 0;
	background: white;
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

/* Masonry Grid */
.portfolio-masonry {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: 10px;
	grid-gap: 20px;
	margin-bottom: 60px;
}

.project-item {
	break-inside: avoid;
	margin-bottom: 20px;
}

.project-item.size-small {
	grid-row-end: span 25;
}

.project-item.size-medium {
	grid-row-end: span 35;
}

.project-item.size-large {
	grid-row-end: span 45;
}

.project-card {
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
	height: 100%;
	cursor: pointer;
	transition: all 0.3s ease;
	border: 1px solid #e2e8f0;
}

.project-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
	border-color: #a8d8ea;
}

.project-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transition: transform 0.4s ease;
}

.project-card:hover .project-image {
	transform: scale(1.05);
}

.project-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(transparent, rgba(45, 55, 72, 0.9));
	padding: 30px 20px 20px;
	color: white;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
	opacity: 1;
}

.project-info h3 {
	margin: 0 0 5px 0;
	font-size: 1.2rem;
	font-weight: 500;
}

.project-info p {
	margin: 0;
	font-size: 0.9rem;
	opacity: 0.9;
}

/* Модальное окно */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(45, 55, 72, 0.95);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}

.modal-content {
	background: white;
	border-radius: 15px;
	width: 90%;
	max-width: 1000px;
	max-height: 90vh;
	overflow: hidden;
	position: relative;
	animation: modalAppear 0.3s ease-out;
}

@keyframes modalAppear {
	from {
		opacity: 0;
		transform: scale(0.9) translateY(30px);
	}
	to {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}

.close-btn {
	position: absolute;
	top: 15px;
	right: 15px;
	background: rgba(255, 255, 255, 0.9);
	border: none;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	font-size: 20px;
	color: #2d3748;
	cursor: pointer;
	z-index: 1000;
	transition: all 0.2s ease;
}

.close-btn:hover {
	background: #a8d8ea;
	transform: rotate(90deg);
}

.modal-body {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 25px;
	padding: 25px;
}

.modal-image {
	width: 100%;
	height: 350px;
	object-fit: cover;
	border-radius: 10px;
}

.modal-details {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.modal-details h3 {
	font-size: 1.8rem;
	margin-bottom: 10px;
	color: #2d3748;
	font-weight: 600;
}

.modal-category {
	color: #a8d8ea;
	font-weight: 500;
	margin-bottom: 15px;
	display: block;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 1px;
}

.modal-details p {
	color: #4a5568;
	line-height: 1.6;
	margin-bottom: 20px;
}

.modal-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.tag {
	background: #f1f5f9;
	color: #4a5568;
	padding: 4px 12px;
	border-radius: 15px;
	font-size: 0.8rem;
	font-weight: 500;
}

/* Адаптивность */
@media (max-width: 768px) {
	.portfolio-masonry {
		grid-template-columns: 1fr;
		grid-gap: 15px;
	}

	.modal-body {
		grid-template-columns: 1fr;
		padding: 20px;
	}

	.modal-image {
		height: 250px;
	}

	.section-header h2 {
		font-size: 2rem;
	}
}

/* Анимации */
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}
</style>
