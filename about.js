/* =========================================
   MISSION & VISION MODAL
   Load AFTER script.js (uses the `lenis` instance if present)
========================================= */

(function () {
  const trigger = document.getElementById('about-open');
  if (!trigger) return;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- build modal ---------- */

  const modal = el('div', 'svc-modal svc-modal--about');
  modal.setAttribute('aria-hidden', 'true');

  const backdrop = el('div', 'svc-modal__backdrop');

  const dialog = el('div', 'svc-modal__dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'about-modal-title');
  dialog.tabIndex = -1;

  const closeBtn = el('button', 'svc-modal__close');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>';

  const aside = el('aside', 'svc-modal__aside');
  const title = el('h2', 'svc-modal__title', 'Mission & Vision');
  title.id = 'about-modal-title';
  aside.append(
    el('span', 'svc-modal__eyebrow', 'FG GUINTU CONSTRUCTION & TRADING, INC.'),
    title,
    el('p', 'svc-modal__tagline', 'Our purpose and where we are headed.')
  );

  const body = el('div', 'svc-modal__body');
  body.setAttribute('data-lenis-prevent', '');
  body.tabIndex = 0;

  /* Mission */
  body.appendChild(el('h3', 'svc-modal__part', 'Our Mission'));
  const list = el('ul', 'svc-modal__list');
  [
    'To provide the best service in the construction industry, offering quality workmanship in every project, while giving work opportunities to construction industry enthusiasts and building their capabilities and competence.',
    'To grow together as a team, continually strive for excellence, and seek improvements in our field of expertise in aid of nation building.'
  ].forEach(function (t) {
    list.appendChild(el('li', null, t));
  });
  body.appendChild(list);

  /* Vision */
  body.appendChild(el('h3', 'svc-modal__part', 'Our Vision'));
  body.appendChild(
    el('p', 'about-modal__vision', 'To be recognized as a Premier Construction Solutions Provider in the country, working with utmost quality and integrity.')
  );

  dialog.append(closeBtn, aside, body);
  modal.append(backdrop, dialog);
  document.body.appendChild(modal);

  /* ---------- open / close ---------- */

  let lastFocus = null;

  function open() {
    lastFocus = document.activeElement;
    body.scrollTop = 0;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('svc-modal-lock');
    if (typeof lenis !== 'undefined' && lenis.stop) lenis.stop();
    dialog.focus();
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('svc-modal-lock');
    if (typeof lenis !== 'undefined' && lenis.start) lenis.start();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = dialog.querySelectorAll('a[href], button, [tabindex="0"]');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
