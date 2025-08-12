<template>
  <section id="about" class="about">
    <div class="container about-content">
      <div class="about-image">
        <div class="image-wrapper">
          <NuxtImg 
            src="/images/about.jpg" 
            alt="Ирина Иванова" 
            class="profile-image"
          />
        </div>
      </div>
      
      <div class="about-text">
        <div class="section-header">
          <h2>Обо мне</h2>
          <div class="section-divider"></div>
        </div>
        
        <p class="about-description">
          Я — Ирина Иванова, дизайнер интерьеров с 10-летним опытом. 
          Создаю пространства, в которых хочется жить.
        </p>
        
        <p class="about-mission">
          Моя цель — сделать ваш дом уютным, стильным и индивидуальным. 
          Каждый проект — это уникальная история, рассказанная через дизайн.
        </p>
        
        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Проектов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10</div>
            <div class="stat-label">Лет опыта</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Довольных клиентов</div>
          </div>
        </div>
        
        <div class="about-signature">
          <div class="signature-line"></div>
          <div class="signature-name">Ирина Иванова</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.about-image', {
    opacity: 0,
    x: -30,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    }
  })
  
  gsap.from('.about-text', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    }
  })
})
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: #f8f9fa;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.profile-image {
  width: 100%;
  height: auto;
  display: block;
  border: 5px solid white;
}

.about-text {
  padding: 20px;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2d3748;
  font-weight: 600;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: #a8d8ea;
  margin: 15px 0;
  border-radius: 2px;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 25px;
  color: #4a5568;
}

.about-mission {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: #4a5568;
  font-style: italic;
  padding-left: 20px;
  border-left: 2px solid #a8d8ea;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.85rem;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-signature {
  margin-top: 30px;
}

.signature-line {
  width: 100px;
  height: 1px;
  background: #a8d8ea;
  margin-bottom: 15px;
}

.signature-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #2d3748;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .about-image {
    order: -1;
  }
}
</style>
