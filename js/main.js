/**
 * main.js
 * Core interactivity:
 * - Layout-shift free Typewriter engine with reduced-motion fallback
 * - Sticky navigation & active scroll spy
 * - Mobile menu drawer
 * - Testimonials carousel (arrows, dots, touch swipe)
 * - Copy email to clipboard + toast alert
 * - IntersectionObserver scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Typewriter Animation Engine
  // Sequence:
  // 1. AI/ML Engineer in Progress
  // 2. UI/UX Designer
  // 3. Machine Learning Developer
  // 4. Generative AI Builder
  // -----------------------------------------------------------------
  const typewriterEl = document.getElementById('typewriter-role');
  const roles = [
    'AI/ML Engineer in Progress',
    'UI/UX Designer',
    'Machine Learning Developer',
    'Generative AI Builder'
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typewriterEl) {
    if (prefersReducedMotion) {
      typewriterEl.textContent = roles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 80;
      const deleteSpeed = 40;
      const pauseDuration = 1900;

      function typeLoop() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
          charIndex--;
          typewriterEl.textContent = currentRole.substring(0, charIndex);
        } else {
          charIndex++;
          typewriterEl.textContent = currentRole.substring(0, charIndex);
        }

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
          delay = pauseDuration;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 400;
        }

        setTimeout(typeLoop, delay);
      }

      typeLoop();
    }
  }

  // -----------------------------------------------------------------
  // 2. Sticky Navbar & Scroll Spy
  // -----------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  function onScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 110;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -----------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // -----------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -----------------------------------------------------------------
  // 4. Testimonials Carousel
  // -----------------------------------------------------------------
  const track = document.getElementById('testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dots = document.querySelectorAll('.carousel-dot');

  if (track && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });

    // Touch Swipe for Mobile
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 45;
      if (startX - endX > threshold) {
        goToSlide(currentIndex + 1);
      } else if (endX - startX > threshold) {
        goToSlide(currentIndex - 1);
      }
    }
  }

  // -----------------------------------------------------------------
  // 5. Copy Email & Toast
  // Target email: ZeyadElshanab@gmail.com
  // -----------------------------------------------------------------
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  let toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'ZeyadElshanab@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Copied: ' + email);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Copied: ' + text);
    } catch (_) {
      showToast('Email: ' + text);
    }
    document.body.removeChild(ta);
  }

  // -----------------------------------------------------------------
  // 6. Scroll Reveal Observer
  // -----------------------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
});
