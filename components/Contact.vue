<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Связаться со мной</h2>
      <p>Оставьте заявку, и я свяжусь с вами в ближайшее время</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Сообщение" required></textarea>
        <button type="submit" class="btn">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  alert('Спасибо за ваше сообщение!')
}
</script>

<style scoped>
.contact {
  padding: 80px 0;
  text-align: center;
}
.contact-form {
  max-width: 600px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>