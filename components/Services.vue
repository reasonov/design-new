<template>
  <section id="services" class="services">
    <div class="container">
      <h2>Наши услуги</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Дизайн проекты</h3>
          <p>Полный дизайн-проект под ваш вкус и бюджет</p>
        </div>
        <div class="service-card">
          <h3>Ремонт под ключ</h3>
          <p>Ремонт и отделка с нашим контролем качества</p>
        </div>
        <div class="service-card">
          <h3>Консультации</h3>
          <p>Бесплатная консультация по любым вопросам</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 80px 0;
  background: #f9f9f9;
}
h2 {
  text-align: center;
  margin-bottom: 40px;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.service-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}
</style>