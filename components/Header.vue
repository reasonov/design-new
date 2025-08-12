<template>
  <header class="header">
    <div class="container">
      <div class="logo">Ирина Иванова</div>
      <nav class="nav">
        <a href="#services">Услуги</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#about">Обо мне</a>
        <a href="#contact">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: bold;
}
.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #000;
}
</style>