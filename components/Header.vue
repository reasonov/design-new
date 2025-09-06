<template>
	<header class="header">
		<div class="container">
			<div class="header-content">
				<div class="header__wrapper">
					<div class="logo">Анастасия Масликова</div>
				</div>
				<nav class="nav">
					<a href="#services" class="nav-link">Услуги</a>
					<a href="#portfolio" class="nav-link">Портфолио</a>
					<a href="#about" class="nav-link">Обо мне</a>
					<a href="#contact" class="nav-link btn-nav">Связаться</a>
				</nav>
				<button class="mobile-menu-btn" @click="toggleMenu">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			<!-- Мобильное меню -->
			<transition name="mobile-menu">
				<div v-if="isMenuOpen" class="mobile-menu">
					<a href="#services" class="mobile-link" @click="closeMenu">Услуги</a>
					<a href="#portfolio" class="mobile-link" @click="closeMenu"
						>Портфолио</a
					>
					<a href="#about" class="mobile-link" @click="closeMenu">Обо мне</a>
					<a href="#contact" class="mobile-link mobile-btn" @click="closeMenu"
						>Связаться</a
					>
				</div>
			</transition>
		</div>
	</header>
</template>

<script setup>
const isMenuOpen = ref(false)

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
	isMenuOpen.value = false
}
</script>

<style scoped>
.header {
	padding: 20px 0;
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(10px);
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1000;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	transition: all 0.3s ease;
}

.header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-family: "Playfair Display", serif;
	font-size: 1.6rem;
	font-weight: 500;
	color: #2d3748;
}

.nav {
	display: flex;
	align-items: center;
	gap: 30px;
}

.nav-link {
	text-decoration: none;
	color: #4a5568;
	font-weight: 500;
	transition: all 0.3s ease;
	position: relative;
	font-size: 1rem;
}

.nav-link:hover {
	color: #2d3748;
}

.nav-link::after {
	content: "";
	position: absolute;
	bottom: -5px;
	left: 0;
	width: 0;
	height: 2px;
	background: #a8d8ea;
	transition: width 0.3s ease;
}

.nav-link:hover::after {
	width: 100%;
}

.btn-nav {
	background: #a8d8ea;
	color: #2d3748 !important;
	padding: 10px 25px;
	border-radius: 30px;
	box-shadow: 0 3px 10px rgba(168, 216, 234, 0.2);
}

.btn-nav:hover {
	transform: translateY(-2px);
	box-shadow: 0 5px 15px rgba(168, 216, 234, 0.3);
}

.btn-nav::after {
	display: none;
}

/* Мобильное меню */
.mobile-menu-btn {
	display: none;
	flex-direction: column;
	background: none;
	border: none;
	cursor: pointer;
	padding: 5px;
}

.mobile-menu-btn span {
	width: 25px;
	height: 2px;
	background: #2d3748;
	margin: 3px 0;
	transition: 0.3s;
	border-radius: 1px;
}

.mobile-menu {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: rgba(255, 255, 255, 0.98);
	backdrop-filter: blur(10px);
	padding: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
	border-radius: 0 0 15px 15px;
}

.mobile-link {
	display: block;
	padding: 15px 0;
	text-decoration: none;
	color: #2d3748;
	font-weight: 500;
	border-bottom: 1px solid #e2e8f0;
	transition: all 0.3s ease;
}

.mobile-link:last-child {
	border-bottom: none;
}

.mobile-link:hover {
	color: #4a5568;
	padding-left: 10px;
}

.mobile-btn {
	background: #a8d8ea;
	color: #2d3748 !important;
	text-align: center;
	border-radius: 30px;
	margin-top: 10px;
	border-bottom: none;
}

/* Анимации мобильного меню */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: all 0.3s ease;
}

.mobile-menu-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}

.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}

@media (max-width: 768px) {
	.nav {
		display: none;
	}

	.mobile-menu-btn {
		display: flex;
	}

	.logo {
		font-size: 1.4rem;
	}
}

.logo__image {
	width: 60px;
	height: 60px;
}
</style>
