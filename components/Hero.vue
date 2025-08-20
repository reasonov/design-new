<template>
	<section class="hero">
		<div class="container hero-content">
			<div class="hero-text">
				<h1 class="hero-title">Создаю интерьеры, которые вдохновляют</h1>
				<p class="hero-subtitle">
					Индивидуальные решения для вашего пространства
				</p>
				<div class="hero-buttons">
					<a href="#portfolio" class="btn btn-primary">Смотреть работы</a>
					<a href="#contact" class="btn btn-secondary">Связаться</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from "vue"
import { gsap } from "gsap"

onMounted(() => {
	gsap.from(".hero-text", {
		opacity: 0,
		y: 50,
		duration: 1,
		ease: "power2.out",
	})
})
</script>

<style scoped>
.hero {
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url("/images/hero-bg.jpg") no-repeat center center/cover;
	height: 100vh;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
}

.hero-content {
	position: relative;
	z-index: 2;
	text-align: center;
	color: white;
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
}

.hero-title {
	font-size: 3.5rem;
	margin-bottom: 20px;
	font-weight: 600;
	line-height: 1.2;
	text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
	font-size: 1.3rem;
	margin-bottom: 40px;
	color: rgba(255, 255, 255, 0.95);
	font-weight: 300;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.hero-buttons {
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	display: inline-block;
	padding: 15px 35px;
	border-radius: 30px;
	text-decoration: none;
	font-weight: 500;
	font-size: 1.1rem;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	border: 2px solid transparent;
	position: relative;
	overflow: hidden;
}

.btn-primary {
	background: #a8d8ea;
	color: #2d3748;
	box-shadow: 0 5px 15px rgba(168, 216, 234, 0.3);
}

.btn-primary:hover {
	transform: translateY(-3px);
	box-shadow: 0 8px 25px rgba(168, 216, 234, 0.4);
}

.btn-secondary {
	background: transparent;
	color: white;
	border-color: rgba(255, 255, 255, 0.8);
}

.btn-secondary:hover {
	background: rgba(255, 255, 255, 0.15);
	transform: translateY(-3px);
	border-color: white;
}

@media (max-width: 768px) {
	.hero-title {
		font-size: 2.5rem;
	}

	.hero-subtitle {
		font-size: 1.1rem;
	}

	.hero-buttons {
		flex-direction: column;
		align-items: center;
	}

	.btn {
		width: 80%;
		max-width: 250px;
	}
}
</style>
