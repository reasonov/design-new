<template>
  <section id="about" class="about">
    <div class="container about-content">
      <div class="about-text">
        <h2>Обо мне</h2>
        <p>Я — Ирина Иванова, дизайнер интерьеров с 10-летним опытом. Создаю пространства, в которых хочется жить.</p>
        <p>Моя цель — сделать ваш дом уютным, стильным и индивидуальным.</p>
      </div>
      <div class="about-image">
        <NuxtImg src="/images/about.jpg" alt="Ирина Иванова" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 80px 0;
  background: #f1f1f1;
}
.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
}
.about-text {
  flex: 1;
}
.about-image img {
  max-width: 100%;
  border-radius: 10px;
}
</style>