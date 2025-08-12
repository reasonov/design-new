<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2>Портфолио</h2>
      <div class="portfolio-grid">
        <NuxtImg v-for="i in 6" :key="i" :src="`/images/work-${i}.jpg`" :alt="`Работа ${i}`" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.portfolio-grid img', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.portfolio-grid',
      start: 'top 80%'
    }
  })
})
</script>

<style scoped>
.portfolio {
  padding: 80px 0;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.portfolio-grid img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>