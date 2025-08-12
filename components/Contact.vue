<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2>Связаться со мной</h2>
        <div class="section-divider"></div>
        <p>Оставьте заявку, и я свяжусь с вами в ближайшее время</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5568">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Телефон</h4>
              <p>+7 (999) 123-45-67</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5568">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Email</h4>
              <p>hello@interior-design.ru</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5568">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Адрес</h4>
              <p>г. Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <input 
              type="text" 
              placeholder="Ваше имя *" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              placeholder="Ваш email *" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <input 
              type="tel" 
              placeholder="Ваш телефон" 
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <textarea 
              placeholder="Сообщение *" 
              required
              class="form-textarea"
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-submit">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.')
}
</script>

<style scoped>
.contact {
  padding: 100px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  color: #2d3748;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: #a8d8ea;
  margin: 15px auto;
  border-radius: 2px;
}

.section-header p {
  font-size: 1.1rem;
  color: #4a5568;
  font-weight: 300;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.info-icon {
  background: #f1f5f9;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-text h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 500;
  color: #2d3748;
}

.info-text p {
  color: #4a5568;
  line-height: 1.5;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  width: 100%;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #2d3748;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #94a3b8;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #a8d8ea;
  background: white;
  box-shadow: 0 0 0 3px rgba(168, 216, 234, 0.1);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.btn-submit {
  background: #a8d8ea;
  color: #2d3748;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(168, 216, 234, 0.3);
}

.btn-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(168, 216, 234, 0.4);
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
