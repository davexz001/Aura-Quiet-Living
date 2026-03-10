/* ═══════════════════════════════════════════════════════════════
   AURA — QUIET LIVING  |  app.js
   Features: Custom cursor · Loader · Scroll reveal · Smooth nav ·
             Products (filter + detail) · Journal detail ·
             Cart drawer · Checkout · Marquee · Newsletter
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ────────────────────────────────────────────────────── */
const PRODUCTS = [
  { id:'p1', name:'Aura Harmony', tagline:'Listen naturally.', description:'Audio that feels like the open air. Constructed with warm acoustic fabric and recycled sandstone composite.', longDescription:'Experience sound as it was meant to be heard—unconfined and organic. The Aura Harmony headphones feature our proprietary open-air driver technology, encased in a breathable acoustic fabric that adapts to your temperature. The headband is crafted from a recycled sandstone composite, offering a unique, cool-to-the-touch texture that grounds you in the present moment.', price:429, category:'Audio', imageUrl:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', features:['Organic Noise Cancellation','50h Battery Life','Natural Soundstage'] },
  { id:'p2', name:'Aura Epoch',   tagline:'Moments, not minutes.', description:'A timepiece designed for wellness. Ceramic casing with a strap made from sustainable vegan leather.', longDescription:'Time is not a sequence of numbers, but a flow of moments. The Aura Epoch rethinks the smartwatch interface, using a calm E-Ink hybrid display that mimics paper. It tracks stress through skin temperature and heart rate variability, gently vibrating to remind you to breathe. The ceramic casing is hypoallergenic, polished by hand for 48 hours.', price:349, category:'Wearable', imageUrl:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', features:['Stress Monitoring','E-Ink Hybrid Display','7-Day Battery'] },
  { id:'p3', name:'Aura Canvas',  tagline:'Capture the warmth.', description:'A display that mimics the properties of paper. Soft on the eyes, vivid in colour, textured to the touch.', longDescription:"Screens shouldn't feel like looking into a lightbulb. Aura Canvas uses a matte, nano-etched OLED panel that scatters ambient light, creating a display that looks and feels like high-quality magazine paper. Perfect for reading, sketching, or displaying art, it brings a tactile warmth to your digital life.", price:1099, category:'Mobile', imageUrl:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', features:['Paper-like OLED','Portrait Lens','Sandstone Texture'] },
  { id:'p4', name:'Aura Essence', tagline:'Return to nature.', description:'An air purifier that doubles as a sculpture. Whisper quiet, diffusing subtle natural scents.', longDescription:'Clean air is the foundation of a clear mind. Aura Essence uses a moss-based bio-filter combined with HEPA technology to scrub pollutants from your home. It gently diffuses natural essential oils—cedar, bergamot, and rain—orchestrated to match the time of day.', price:599, category:'Home', imageUrl:'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=800', features:['Bio-HEPA Filter','Aromatherapy','Silent Night Mode'] },
  { id:'p5', name:'Aura Beam',    tagline:'Light that breathes.', description:'Smart circadian lighting that follows the sun. Casts a warm, candle-like glow in the evenings.', longDescription:"Artificial light disrupts our natural rhythms. Aura Beam syncs with your local sunrise and sunset, providing cool, energising light during the day and transitioning to a warm, amber glow free of blue light in the evening. Controls are touchless—a simple wave adjusts brightness.", price:249, category:'Home', imageUrl:'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800', features:['Circadian Rhythm Sync','Warm Dimming','Touchless Control'] },
  { id:'p6', name:'Aura Scribe',  tagline:'Thought in motion.', description:'A digital stylus with the friction of graphite. Charges wirelessly when attached to Aura Canvas.', longDescription:'The connection between hand and brain is sacred. Aura Scribe features a custom elastomer tip that replicates the microscopic friction of graphite on paper. Weighted perfectly for balance, it disappears in your hand, leaving only your thoughts.', price:129, category:'Mobile', imageUrl:'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=800', features:['Zero Latency','Textured Tip','Wireless Charging'] }
];

const ARTICLES = [
  { id:1, title:'The Psychology of Texture', date:'April 12, 2025', excerpt:'Why our fingertips crave natural surfaces in a world of glass and plastic.', image:'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800', body:[
    { type:'p', text:'We live in a frictionless world. Our phones are smooth glass, our laptops polished aluminium, our countertops engineered quartz. There is no resistance, no grit, no grain. And yet, our biology craves it.' },
    { type:'p', text:'The fingertips are among the most densely innervated parts of the human body. They are designed to read the story of an object—its age, its origin, its temperature. When we deny them this input, we experience a subtle form of sensory deprivation.' },
    { type:'q', text:'"To touch is to know. To feel is to be grounded."' },
    { type:'p', text:'At Aura, we design for the hand as much as for the eye. We choose materials that have a voice. Sandstone that warms under your palm. Fabric that has a weave you can trace. Wood that remembers the forest.' }
  ]},
  { id:2, title:'Living with Less', date:'March 28, 2025', excerpt:'A conversation with architect Hiroshi Nakamura on the art of empty space.', image:'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', body:[
    { type:'p', text:'Emptiness is not nothing. In Japanese architecture, the concept of Ma refers to the space between things—the pause that gives shape to the whole.' },
    { type:'p', text:'"We tend to fill our lives with noise," Nakamura says, sipping tea in his studio in Kyoto. "We buy more devices to save time, but end up with less time than ever. True luxury is the absence of intrusion."' },
    { type:'p', text:'This philosophy drives every curve of our new collection. We asked ourselves: what can we remove? How much can we take away until only the essential remains?' }
  ]},
  { id:3, title:'Spring Moodboard', date:'March 15, 2025', excerpt:'Notes from the design studio: morning mist, wet stone, and pale linen.', image:'https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=800', body:[
    { type:'p', text:'Spring in the studio is a time of awakening. The light shifts from the harsh, low angles of winter to a softer, diffused glow. We find ourselves drawn to paler tones—the grey of wet pavement, the cream of unbleached linen, the dusty green of sage.' },
    { type:'p', text:'Our moodboard this month is a study in softness. It is about the transition state—neither cold nor hot, neither dark nor bright. It is the dawn of the year.' }
  ]}
];

/* ── STATE ───────────────────────────────────────────────────── */
let cartItems = [];
let activeFilter = 'all';
let currentView = 'home';

/* ── DOM REFS ────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const loader       = $('loader');
const nav          = $('nav');
const navLogo      = $('navLogo');
const hamburger    = $('hamburger');
const mobileMenu   = $('mobileMenu');
const cursor       = $('cursor');
const cursorFollow = $('cursorFollower');
const cartBtn      = $('cartBtn');
const mobileCartBtn= $('mobileCartBtn');
const cartEl       = $('cart');
const cartBackdrop = $('cartBackdrop');
const cartClose    = $('cartClose');
const cartCountEl  = $('cartCount');
const mobileCartCount = $('mobileCartCount');
const cartItemsEl  = $('cartItems');
const cartTotalEl  = $('cartTotal');
const cartItemCount= $('cartItemCount');
const checkoutBtn  = $('checkoutBtn');
const productGrid  = $('productGrid');
const journalGrid  = $('journalGrid');
const viewHome     = $('viewHome');
const viewProduct  = $('viewProduct');
const viewJournal  = $('viewJournal');
const viewCheckout = $('viewCheckout');
const footer       = $('footer');
const newsletterEmail = $('newsletterEmail');
const newsletterBtn   = $('newsletterBtn');
const newsletterStatus= $('newsletterStatus');

/* ── LOADER ──────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    initReveal();
  }, 1800);
});

/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});
function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollow.style.left = followerX + 'px';
  cursorFollow.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

function addHoverListeners() {
  $$('a, button, .product-card, .journal-card, .filter, .size-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ── NAVBAR ──────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
$$('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Smooth scroll for all [data-scroll] links
function bindScrollLinks() {
  $$('[data-scroll]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.scroll;
      if (currentView !== 'home') {
        showView('home');
        setTimeout(() => scrollTo(id), 100);
      } else {
        scrollTo(id);
      }
    });
  });
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

// Logo always goes home
navLogo.addEventListener('click', e => {
  e.preventDefault();
  showView('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
let revealObserver;
function initReveal() {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => revealObserver.observe(el));
}

function observeNew() {
  if (!revealObserver) return;
  $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ── VIEW MANAGER ────────────────────────────────────────────── */
function showView(view) {
  currentView = view;
  viewHome.style.display     = view === 'home'     ? '' : 'none';
  viewProduct.classList.toggle('view--hidden', view !== 'product');
  viewJournal.classList.toggle('view--hidden', view !== 'journal');
  viewCheckout.classList.toggle('view--hidden', view !== 'checkout');
  footer.style.display = view === 'checkout' ? 'none' : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (view === 'home') {
    setTimeout(() => {
      initReveal();
      addHoverListeners();
    }, 50);
  }
}

/* ── PRODUCTS ────────────────────────────────────────────────── */
function renderProducts(filter = 'all') {
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  productGrid.innerHTML = list.map(p => `
    <article class="product-card reveal" data-id="${p.id}">
      <div class="product-card__img-wrap">
        <img class="product-card__img" src="${p.imageUrl}" alt="${p.name}" loading="lazy"/>
        <div class="product-card__overlay">
          <span class="product-card__cta">View Details</span>
        </div>
      </div>
      <div class="product-card__info">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__cat">${p.category}</p>
        <span class="product-card__price">$${p.price}</span>
      </div>
    </article>
  `).join('');

  $$('.product-card').forEach(card => {
    card.addEventListener('click', () => openProduct(card.dataset.id));
  });

  observeNew();
  addHoverListeners();
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const sizeHtml = p.category === 'Wearable' ? `
    <div class="product-detail__sizes">
      <span class="product-detail__sizes-label">Select Size</span>
      <div class="size-btns">
        <button class="size-btn" data-size="S">S</button>
        <button class="size-btn" data-size="M">M</button>
        <button class="size-btn" data-size="L">L</button>
      </div>
    </div>` : '';

  viewProduct.innerHTML = `
    <div class="product-detail">
      <button class="back-btn" id="backFromProduct">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Shop
      </button>
      <div class="product-detail__grid">
        <div class="product-detail__img">
          <img src="${p.imageUrl}" alt="${p.name}" />
        </div>
        <div class="product-detail__info">
          <p class="product-detail__cat">${p.category}</p>
          <h1 class="product-detail__name">${p.name}</h1>
          <p class="product-detail__price">$${p.price}</p>
          <p class="product-detail__desc">${p.longDescription || p.description}</p>
          ${sizeHtml}
          <button class="product-detail__add" id="addToCartBtn">
            Add to Cart — $${p.price}
          </button>
          <ul class="product-detail__features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;

  showView('product');

  $('backFromProduct').addEventListener('click', () => {
    showView('home');
    setTimeout(() => scrollTo('products'), 80);
  });

  $('addToCartBtn').addEventListener('click', () => {
    addToCart(p);
    $('addToCartBtn').textContent = '✓ Added to Cart';
    setTimeout(() => { $('addToCartBtn').textContent = `Add to Cart — $${p.price}`; }, 1800);
  });

  $$('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  addHoverListeners();
}

/* Filter buttons */
$$('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProducts(activeFilter);
  });
});

/* ── JOURNAL ─────────────────────────────────────────────────── */
function renderJournal() {
  journalGrid.innerHTML = ARTICLES.map(a => `
    <article class="journal-card reveal" data-id="${a.id}">
      <div class="journal-card__img-wrap">
        <img class="journal-card__img" src="${a.image}" alt="${a.title}" loading="lazy"/>
      </div>
      <p class="journal-card__date">${a.date}</p>
      <h3 class="journal-card__title">${a.title}</h3>
      <p class="journal-card__excerpt">${a.excerpt}</p>
    </article>
  `).join('');

  $$('.journal-card').forEach(card => {
    card.addEventListener('click', () => openArticle(Number(card.dataset.id)));
  });

  observeNew();
  addHoverListeners();
}

function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;

  const bodyHtml = a.body.map(block =>
    block.type === 'q'
      ? `<blockquote>${block.text}</blockquote>`
      : `<p>${block.text}</p>`
  ).join('');

  viewJournal.innerHTML = `
    <div class="journal-detail">
      <div class="journal-detail__hero">
        <img src="${a.image}" alt="${a.title}" />
      </div>
      <div class="journal-detail__card">
        <div class="journal-detail__meta">
          <button class="back-btn" id="backFromJournal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Journal
          </button>
          <span style="font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--stone)">${a.date}</span>
        </div>
        <h1 class="journal-detail__title">${a.title}</h1>
        <div class="journal-detail__body">${bodyHtml}</div>
        <div class="journal-detail__end">Aura</div>
      </div>
    </div>`;

  showView('journal');

  $('backFromJournal').addEventListener('click', () => {
    showView('home');
    setTimeout(() => scrollTo('journal'), 80);
  });

  addHoverListeners();
}

/* ── CART ────────────────────────────────────────────────────── */
function openCart() {
  cartEl.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartEl.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
mobileCartBtn.addEventListener('click', () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); openCart(); });
cartClose.addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);

function addToCart(product) {
  cartItems.push(product);
  updateCart();
  openCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const count = cartItems.length;
  cartCountEl.textContent = count;
  mobileCartCount.textContent = count;
  cartItemCount.textContent = count;

  const total = cartItems.reduce((s, i) => s + i.price, 0);
  cartTotalEl.textContent = `$${total}`;

  if (count === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart__empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        <p>Your cart is empty.</p>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cartItems.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item__img">
          <img src="${item.imageUrl}" alt="${item.name}" />
        </div>
        <div class="cart-item__details">
          <div class="cart-item__top">
            <span class="cart-item__name">${item.name}</span>
            <span class="cart-item__price">$${item.price}</span>
          </div>
          <span class="cart-item__cat">${item.category}</span>
          <button class="cart-item__remove" data-index="${i}">Remove</button>
        </div>
      </div>`).join('');

    $$('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.index)));
    });
  }
}

checkoutBtn.addEventListener('click', () => {
  if (cartItems.length === 0) return;
  closeCart();
  openCheckout();
});

/* ── CHECKOUT ────────────────────────────────────────────────── */
function openCheckout() {
  const total = cartItems.reduce((s, i) => s + i.price, 0);
  viewCheckout.innerHTML = `
    <div class="checkout">
      <button class="back-btn" id="backFromCheckout">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Shop
      </button>
      <div class="checkout__grid">
        <div>
          <h1 class="checkout__title">Checkout</h1>
          <p class="checkout__note">This is a sample site — purchasing is disabled.</p>
          <div class="form-section">
            <h2>Contact Information</h2>
            <div class="form-field"><input type="email" placeholder="Email address" disabled/></div>
          </div>
          <div class="form-section">
            <h2>Shipping Address</h2>
            <div class="form-row">
              <div class="form-field"><input type="text" placeholder="First name" disabled/></div>
              <div class="form-field"><input type="text" placeholder="Last name" disabled/></div>
            </div>
            <div class="form-field"><input type="text" placeholder="Address" disabled/></div>
            <div class="form-row">
              <div class="form-field"><input type="text" placeholder="City" disabled/></div>
              <div class="form-field"><input type="text" placeholder="Postal code" disabled/></div>
            </div>
          </div>
          <button class="btn btn--dark btn--full" disabled style="opacity:0.5;border-radius:0;font-size:0.75rem;letter-spacing:0.15em;padding:1.2rem">
            Pay Now — $${total}
          </button>
        </div>
        <div>
          <h2 class="order-summary__title">Order Summary</h2>
          <div class="order-summary__items">
            ${cartItems.map(item => `
              <div class="order-item">
                <div class="order-item__img">
                  <img src="${item.imageUrl}" alt="${item.name}"/>
                  <span class="order-item__badge">1</span>
                </div>
                <div class="order-item__info">
                  <p class="order-item__name">${item.name}</p>
                  <p class="order-item__cat">${item.category}</p>
                </div>
                <span class="order-item__price">$${item.price}</span>
              </div>`).join('')}
          </div>
          <div class="order-totals">
            <div class="order-totals__row"><span>Subtotal</span><span>$${total}</span></div>
            <div class="order-totals__row"><span>Shipping</span><span>Free</span></div>
            <div class="order-totals__total">
              <span>Total</span>
              <span>$${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  showView('checkout');

  $('backFromCheckout').addEventListener('click', () => showView('home'));
  addHoverListeners();
}

/* ── NEWSLETTER ──────────────────────────────────────────────── */
newsletterBtn.addEventListener('click', () => {
  const val = newsletterEmail.value.trim();
  if (!val || !val.includes('@')) {
    newsletterStatus.textContent = 'Please enter a valid email.';
    return;
  }
  newsletterStatus.textContent = 'Subscribing...';
  setTimeout(() => {
    newsletterStatus.textContent = '✓ You are subscribed. Welcome to Aura.';
    newsletterEmail.value = '';
  }, 1200);
});

/* ── FOOTER SCROLL LINKS ─────────────────────────────────────── */
function bindFooterLinks() {
  $$('.footer__col a, .footer__col a').forEach(link => {
    const scroll = link.getAttribute('data-scroll') || link.getAttribute('href')?.replace('#','');
    if (!scroll) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      if (currentView !== 'home') {
        showView('home');
        setTimeout(() => scrollTo(scroll), 100);
      } else {
        scrollTo(scroll);
      }
    });
  });
}

/* ── KEYBOARD ACCESSIBILITY ──────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCart();
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  }
});

/* ── INIT ────────────────────────────────────────────────────── */
function init() {
  renderProducts();
  renderJournal();
  bindScrollLinks();
  bindFooterLinks();
  addHoverListeners();
  updateCart();
}

init();
