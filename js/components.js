// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question')?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Animate on scroll (simple)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.observe').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Shared components
const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div style="display:flex;align-items:center;gap:2rem">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">س</div>
      <span class="nav-logo-text">سلامات</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">الرئيسية</a></li>
      <li><a href="about.html">من نحن</a></li>
      <li><a href="packages.html">الباقات</a></li>
      <li><a href="blog.html">المدونة</a></li>
      <li><a href="contact.html">تواصل معنا</a></li>
    </ul>
  </div>
  <div class="nav-cta">
    <a href="login.html" class="btn btn-outline">تسجيل الدخول</a>
    <a href="packages.html" class="btn btn-primary">ابدأ الآن</a>
  </div>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon">س</div>
          <span class="footer-logo-text">سلامات</span>
        </div>
        <p>مع سلامات، تستطيع تحويل زوار موقعك إلى عملاء فعليين بسهولة، من خلال تحليل بياناتهم وفهم احتياجاتهم واستهدافهم بحملات واتساب.</p>
      </div>
      <div>
        <h4 class="footer-heading">روابط مهمة</h4>
        <ul class="footer-links">
          <li><a href="about.html">من نحن</a></li>
          <li><a href="packages.html">الباقات</a></li>
          <li><a href="blog.html">المدونة</a></li>
          <li><a href="contact.html">تواصل معنا</a></li>
          <li><a href="privacy.html">سياسة الخصوصية</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">تواصل معنا</h4>
        <div class="footer-contact-item">
          <span>📱</span>
          <span>+966531356367</span>
        </div>
        <div class="footer-contact-item">
          <span>✉️</span>
          <span>info@sallamaat.com</span>
        </div>
        <div class="footer-contact-item">
          <span>⏰</span>
          <span>السبت – الخميس، 9ص – 6م</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 سلامات. جميع الحقوق محفوظة.</p>
    </div>
  </div>
</footer>`;

function injectComponents() {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Re-run nav scripts after injection
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  injectComponents();

  // FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
