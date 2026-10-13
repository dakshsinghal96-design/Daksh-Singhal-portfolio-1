/* ============================================================
   WedIn Udaipur — Motion & Interactions
   Header, parallax, reveals, shortlist, compare drawer,
   3D tilt, toasts, ripple page transitions, mobile nav.
   Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---- Sticky header state ---- */
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Hero parallax (scroll-based layered) ---- */
  if (!reduce) {
    const layers = $$('[data-parallax]');
    if (layers.length) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (ticking) return; ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          layers.forEach(l => {
            const speed = parseFloat(l.dataset.parallax);
            l.style.transform = `translate3d(0, ${y * speed * -0.12}px, 0)`;
          });
          ticking = false;
        });
      }, { passive: true });
    }
  }

  /* ---- Scroll reveal ---- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* ---- 3D hover tilt on venue cards ---- */
  if (!reduce && window.matchMedia('(hover:hover)').matches) {
    $$('[data-tilt]').forEach(card => {
      const max = 7;
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-10px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---- Toast host ---- */
  let toastHost = $('.toast-host');
  if (!toastHost) { toastHost = document.createElement('div'); toastHost.className = 'toast-host'; document.body.appendChild(toastHost); }
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>';
  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.innerHTML = CHECK + '<span>' + msg + '</span>';
    toastHost.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(20px)'; setTimeout(() => t.remove(), 300); }, 2400);
  }

  /* ---- Shortlist microinteraction (heart morph + particle burst) ---- */
  $$('.heart-btn').forEach(btn => {
    if (!btn.querySelector('.burst')) {
      const b = document.createElement('span'); b.className = 'burst';
      for (let i = 0; i < 6; i++) {
        const p = document.createElement('i');
        const ang = (Math.PI * 2 * i) / 6;
        p.style.setProperty('--bx', (Math.cos(ang) * 26).toFixed(0) + 'px');
        p.style.setProperty('--by', (Math.sin(ang) * 26).toFixed(0) + 'px');
        b.appendChild(p);
      }
      btn.appendChild(b);
    }
    btn.addEventListener('click', () => {
      const saved = btn.classList.toggle('saved');
      const name = btn.dataset.name || 'Venue';
      toast(saved ? name + ' added to shortlist' : name + ' removed from shortlist');
    });
  });

  /* ---- Compare drawer ---- */
  const drawer = $('#compareDrawer');
  const slots = $('#compareSlots');
  const selected = new Map();
  function renderDrawer() {
    if (!drawer) return;
    drawer.classList.toggle('open', selected.size > 0);
    if (slots) {
      slots.innerHTML = '';
      selected.forEach((data, id) => {
        const el = document.createElement('div');
        el.className = 'cd-slot';
        el.innerHTML = `<span class="thumb ${data.ph}"></span><span class="cd-name">${data.name}</span>
          <button class="cd-rm" aria-label="Remove" data-rm="${id}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`;
        slots.appendChild(el);
      });
    }
    const count = $('#compareCount'); if (count) count.textContent = selected.size;
  }
  $$('.compare-check input').forEach(cb => {
    cb.addEventListener('change', () => {
      const card = cb.closest('[data-venue]') || cb.closest('.venue-card');
      const id = cb.value;
      if (cb.checked) {
        if (selected.size >= 4) { cb.checked = false; toast('Compare up to 4 venues'); return; }
        selected.set(id, { name: cb.dataset.name || 'Venue', ph: cb.dataset.ph || 'ph-1' });
        toast(cb.dataset.name + ' added to compare');
      } else selected.delete(id);
      renderDrawer();
    });
  });
  if (slots) slots.addEventListener('click', e => {
    const rm = e.target.closest('[data-rm]'); if (!rm) return;
    const id = rm.dataset.rm; selected.delete(id);
    const cb = $(`.compare-check input[value="${id}"]`); if (cb) cb.checked = false;
    renderDrawer();
  });
  const clearBtn = $('#compareClear');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    selected.clear(); $$('.compare-check input').forEach(c => c.checked = false); renderDrawer();
  });

  /* ---- Popular chips open on hero search focus (already CSS-driven; add persistence) ---- */
  const searchCard = $('.search-card');
  if (searchCard) {
    searchCard.addEventListener('focusin', () => searchCard.classList.add('open'));
  }

  /* ---- Ripple page transition on internal links ---- */
  const wipe = document.createElement('div'); wipe.className = 'ripple-wipe'; document.body.appendChild(wipe);
  if (!reduce) {
    $$('a[data-transition]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || a.target === '_blank') return;
        e.preventDefault();
        wipe.classList.add('go');
        setTimeout(() => { window.location.href = href; }, 460);
      });
    });
  }

  /* ---- Mobile menu ---- */
  const burger = $('.hamburger'); const menu = $('#mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  /* ---- Count-up for stat numbers ---- */
  $$('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(ent => {
        if (!ent.isIntersecting) return;
        io.disconnect();
        let cur = 0; const step = target / 48;
        const tick = () => { cur += step; if (cur >= target) { el.textContent = target + suffix; }
          else { el.textContent = Math.floor(cur) + suffix; requestAnimationFrame(tick); } };
        tick();
      });
    }, { threshold: 0.6 });
    io.observe(el);
  });

  /* ---- Filter chips (listing) toggle ---- */
  $$('[data-filter-chip]').forEach(c => c.addEventListener('click', () => {
    c.classList.toggle('active');
    const active = $$('[data-filter-chip].active').length;
    const note = $('#filterNote'); if (note) note.textContent = active ? `${active} filters applied` : 'No filters applied';
  }));

  /* expose toast for inline use */
  window.WedIn = { toast };
})();
