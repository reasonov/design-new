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
		y: 60,
		duration: 1.2,
		ease: "back.out(1.2)",
		stagger: 0.3,
	})
})
</script>

<style scoped>
.hero {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
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
	font-size: 3.8rem;
	margin-bottom: 20px;
	font-weight: 700;
	line-height: 1.15;
	background: linear-gradient(135deg, #ffffff, #e0f7fa, #b2ebf2);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
	letter-spacing: -0.5px;
	font-family: "Montserrat", sans-serif;
}

.hero-subtitle {
	font-size: 1.4rem;
	margin-bottom: 40px;
	color: #ffffff;
	font-weight: 300;
	text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
	letter-spacing: 0.5px;
	opacity: 0.98;
}

.hero-buttons {
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	display: inline-block;
	padding: 16px 38px;
	border-radius: 32px;
	text-decoration: none;
	font-weight: 500;
	font-size: 1.12rem;
	transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
	border: 2px solid transparent;
	position: relative;
	overflow: hidden;
	backface-visibility: hidden;
	transform: translateZ(0);
}

.btn::after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1px;
	height: 1px;
	background: rgba(255, 255, 255, 0.4);
	border-radius: 50%;
	transform: translate(-50%, -50%) scale(0);
	transition: transform 0.8s ease-out;
	z-index: -1;
}

.btn:active::after {
	transform: translate(-50%, -50%) scale(100);
}

.btn-primary {
	background: #a8d8ea;
	color: #1a3e5d;
	box-shadow: 0 6px 18px rgba(168, 216, 234, 0.4);
}

.btn-primary:hover {
	transform: translateY(-4px);
	box-shadow: 0 10px 30px rgba(168, 216, 234, 0.55);
	filter: brightness(1.05);
}

.btn-secondary {
	background: transparent;
	color: white;
	border-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(4px);
}

.btn-secondary:hover {
	background: rgba(255, 255, 255, 0.12);
	transform: translateY(-4px);
	border-color: white;
	box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
	.hero-title {
		font-size: 2.7rem;
	}

	.hero-subtitle {
		font-size: 1.15rem;
	}

	.hero-buttons {
		flex-direction: column;
		align-items: center;
	}

	.btn {
		width: 85%;
		max-width: 260px;
	}
}
</style>
