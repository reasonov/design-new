<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="logo">Анастасия Масликова</div>
          <p class="footer-description">
            Профессиональный дизайн интерьеров с индивидуальным подходом
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#4a5568"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-2 15v-5H7v-2h3V7.5a3.5 3.5 0 113.5 3.5H13v5h-3z" fill="#4a5568"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3.5-3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-8 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#4a5568"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="link-column">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#portfolio">Портфолио</a></li>
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
          
          <div class="link-column">
            <h4>Услуги</h4>
            <ul>
              <li><a href="#">Дизайн проекты</a></li>
              <li><a href="#">Ремонт под ключ</a></li>
              <li><a href="#">Консультации</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} Анастасия Масликова. Все права защищены.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f1f5f9;
  color: #4a5568;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 15px;
  color: #2d3748;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: #4a5568;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.social-link:hover {
  background: #a8d8ea;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.link-column h4 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 500;
}

.link-column ul {
  list-style: none;
  padding: 0;
}

.link-column li {
  margin-bottom: 12px;
}

.link-column a {
  color: #4a5568;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.link-column a:hover {
  color: #2d3748;
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
  text-align: center;
}

.copyright {
  font-size: 0.9rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .logo {
    font-size: 1.4rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>