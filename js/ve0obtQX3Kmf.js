/* ================================================
   SodaSlim® — Main JavaScript
   Site: https://getsodasliim.com/
   ================================================ */
'use strict';

/* ──────────────────────────────────────────────
   CONFIGURATION — Update affiliateLink here only
   ────────────────────────────────────────────── */
const SITE = {
  affiliateLink: 'https://mwebxara.com/12622/2162/2/?&subid=soslm',   // ← change this one variable
  name:          'SodaSlim®',
  url:           'https://getsodasliim.com'
};

/* ──────────────────────────────────────────────
   SHARED NAVIGATION
   ────────────────────────────────────────────── */
function buildNav() {
  const path = window.location.pathname;
  const isRoot   = path === '/' || path === '/index.html' || path === '';
  const isBlog   = path.startsWith('/blog');
  const isContact= path.includes('contact');

  const links = [
    { href:'/',          label:'Home',    active: isRoot    },
    { href:'/blog/',     label:'Blog',    active: isBlog    },
    { href:'/contact.html', label:'Contact', active: isContact }
  ];

  const navHtml = `
<nav class="navbar" id="mainNav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="navbar-inner">
      <a href="/" class="navbar-brand" aria-label="SodaSlim Home">
        <span class="brand-highlight">Soda</span>Slim<sup>®</sup>
      </a>
      <ul class="navbar-nav" role="list">
        ${links.map(l => `
          <li>
            <a href="${l.href}"
               class="nav-link${l.active ? ' active' : ''}"
               ${l.active ? 'aria-current="page"' : ''}>
              ${l.label}
            </a>
          </li>`).join('')}
      </ul>
      <div class="navbar-cta">
        <a href="${SITE.affiliateLink}" class="btn btn-accent btn-sm aff-link">
          <i class="fas fa-shopping-cart" aria-hidden="true"></i> Order Now
        </a>
      </div>
      <button class="navbar-toggle" id="navToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false" aria-controls="mobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <nav class="mobile-nav" aria-label="Mobile navigation">
      ${links.map(l => `
        <a href="${l.href}"
           class="mobile-nav-link${l.active ? ' active' : ''}"
           ${l.active ? 'aria-current="page"' : ''}>
          ${l.label}
        </a>`).join('')}
      <div class="mobile-nav-cta">
        <a href="${SITE.affiliateLink}" class="btn btn-accent aff-link"
           style="width:100%;justify-content:center;">
          <i class="fas fa-shopping-cart" aria-hidden="true"></i>
          Order SodaSlim® Now
        </a>
      </div>
    </nav>
  </div>
</nav>
<div class="sticky-mobile-cta" role="complementary" aria-label="Sticky order button">
  <a href="${SITE.affiliateLink}" class="btn btn-accent aff-link">
    <i class="fas fa-bolt" aria-hidden="true"></i>
    Claim Your SodaSlim® — Limited Offer
  </a>
</div>`;

  const ph = document.getElementById('header-placeholder');
  if (ph) ph.innerHTML = navHtml;
}

/* ──────────────────────────────────────────────
   SHARED FOOTER
   ────────────────────────────────────────────── */
function buildFooter() {
  const year = new Date().getFullYear();
  const footerHtml = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="footer-brand-link">
          <span class="brand-highlight">Soda</span>Slim<sup>®</sup>
        </a>
        <p class="footer-about">
          SodaSlim® is a daily wellness supplement crafted to support healthy weight
          management, natural metabolism, sustained energy, and overall vitality as
          part of a balanced, active lifestyle.
        </p>
        <div class="footer-secure">
          <span class="secure-tag"><i class="fas fa-lock"></i> SSL Secure</span>
          <span class="secure-tag"><i class="fas fa-shield-alt"></i> GMP Manufactured</span>
          <span class="secure-tag"><i class="fas fa-award"></i> Premium Quality</span>
          <span class="secure-tag"><i class="fas fa-undo"></i> Satisfaction Guarantee</span>
        </div>
      </div>
      <div>
        <h3 class="footer-col-title">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="/" class="footer-link">Home</a></li>
          <li><a href="/blog/" class="footer-link">Blog</a></li>
          <li><a href="/contact.html" class="footer-link">Contact Us</a></li>
          <li><a href="${SITE.affiliateLink}" class="footer-link aff-link">Order SodaSlim®</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title">Legal</h3>
        <ul class="footer-links">
          <li><a href="/shipping-policy.html" class="footer-link">Shipping Policy</a></li>
          <li><a href="/return-policy.html"   class="footer-link">Return Policy</a></li>
          <li><a href="/privacy-policy.html"  class="footer-link">Privacy Policy</a></li>
          <li><a href="/terms-of-service.html" class="footer-link">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title">Blog Topics</h3>
        <ul class="footer-links">
          <li><a href="/blog/morning-routine-for-weight-loss.html" class="footer-link">Morning Routines</a></li>
          <li><a href="/blog/hydration-tips-for-weight-loss.html"  class="footer-link">Hydration Tips</a></li>
          <li><a href="/blog/healthy-weight-management-tips.html"  class="footer-link">Weight Management</a></li>
          <li><a href="/blog/"                                       class="footer-link">View All Posts →</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-disclaimer">
        <strong>Affiliate Disclosure:</strong> This website earns a commission on qualifying
        purchases made through affiliate links at no additional cost to you.
        <strong>General Wellness Disclaimer:</strong> The information on this website is intended
        for general informational and educational purposes only and does not constitute medical
        advice. These statements have not been evaluated by the Food and Drug Administration.
        This product is not intended to diagnose, treat, cure, or prevent any disease.
        Individual results may vary. Consult a qualified healthcare professional before
        beginning any supplement or wellness program.
      </p>
      <p class="footer-copy">
        &copy; <span class="yr">${year}</span> SodaSlim®. All rights reserved. &nbsp;|&nbsp;
        <a href="/privacy-policy.html">Privacy Policy</a> &nbsp;|&nbsp;
        <a href="/terms-of-service.html">Terms of Service</a>
      </p>
    </div>
  </div>
</footer>`;

  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.innerHTML = footerHtml;
}

/* ──────────────────────────────────────────────
   MOBILE MENU
   ────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });

  document.addEventListener('click', e => {
    const nav = document.getElementById('mainNav');
    if (nav && !nav.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }
  });
}

/* ──────────────────────────────────────────────
   NAVBAR SCROLL SHADOW
   ────────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ──────────────────────────────────────────────
   SCROLL REVEAL
   ────────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -44px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ──────────────────────────────────────────────
   FAQ ACCORDION
   ────────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.setAttribute('aria-expanded', 'false');

    const toggle = () => {
      const opening = !item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        const iq = i.querySelector('.faq-q');
        if (iq) iq.setAttribute('aria-expanded', 'false');
      });
      if (opening) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
    };

    q.addEventListener('click', toggle);
    q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}

/* ──────────────────────────────────────────────
   APPLY AFFILIATE LINKS
   ────────────────────────────────────────────── */
function applyAffLinks() {
  document.querySelectorAll('.aff-link').forEach(el => { el.href = SITE.affiliateLink; });
}

/* ──────────────────────────────────────────────
   YEAR
   ────────────────────────────────────────────── */
function setYear() {
  const y = new Date().getFullYear();
  document.querySelectorAll('.yr').forEach(el => { el.textContent = y; });
}

/* ──────────────────────────────────────────────
   SMOOTH SCROLL
   ────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (document.querySelector('.navbar')?.offsetHeight || 80) + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });
}

/* ──────────────────────────────────────────────
   CONTACT FORM VALIDATION
   ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const escape = str => {
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  };

  const setErr = (f, msg) => {
    f.classList.add('is-invalid');
    const e = f.parentElement.querySelector('.form-err');
    if (e) { e.textContent = msg; e.style.display = 'block'; }
  };
  const clrErr = f => {
    f.classList.remove('is-invalid');
    const e = f.parentElement?.querySelector('.form-err');
    if (e) e.style.display = 'none';
  };
  const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.querySelectorAll('.form-control').forEach(f => f.addEventListener('input', () => clrErr(f)));

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const name    = document.getElementById('cName');
    const email   = document.getElementById('cEmail');
    const subject = document.getElementById('cSubject');
    const message = document.getElementById('cMessage');
    const success = document.getElementById('fSuccess');
    const error   = document.getElementById('fError');

    [success, error].forEach(el => { if (el) el.style.display = 'none'; });
    [name, email, subject, message].forEach(f => clrErr(f));

    if (!name?.value.trim())   { setErr(name,    'Please enter your name.'); ok = false; }
    if (!email?.value.trim())  { setErr(email,   'Please enter your email.'); ok = false; }
    else if (!validEmail(email.value.trim())) { setErr(email, 'Please enter a valid email address.'); ok = false; }
    if (!subject?.value.trim()) { setErr(subject, 'Please enter a subject.'); ok = false; }
    if (!message?.value.trim()) { setErr(message, 'Please enter your message.'); ok = false; }

    if (ok && success) {
      success.style.display = 'block';
      form.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ──────────────────────────────────────────────
   BLOG SEARCH (simple client-side)
   ────────────────────────────────────────────── */
function initBlogSearch() {
  const input = document.getElementById('blogSearch');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.blog-card, .featured-article').forEach(card => {
      card.style.display = q && !card.textContent.toLowerCase().includes(q) ? 'none' : '';
    });
  });
}

/* ──────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();

  requestAnimationFrame(() => {
    initMobileMenu();
    initNavScroll();
    applyAffLinks();
    setYear();
  });

  initScrollReveal();
  initFAQ();
  initSmoothScroll();
  initContactForm();
  initBlogSearch();
});