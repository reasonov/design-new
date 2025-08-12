<template>
	<section class="hero">
		<div class="container hero-content">
			<h1>Создаю интерьеры, которые вдохновляют</h1>
			<p>Индивидуальные решения для вашего дома</p>
			<a href="#portfolio" class="btn">Смотреть работы</a>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from "vue"
import { gsap } from "gsap"

onMounted(() => {
	gsap.from(".hero-content", { opacity: 0, y: 30, duration: 1 })
})
</script>

<style scoped>
.hero {
	background: url("/images/hero-bg.jpg") no-repeat center center/cover;
	height: 100vh;
	display: flex;
	align-items: center;
	color: white;
	text-align: center;
}
.hero-content h1 {
	font-size: 3rem;
	margin-bottom: 20px;
}
.hero-content p {
	font-size: 1.2rem;
	margin-bottom: 30px;
}
</style>
