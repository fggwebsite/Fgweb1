/* =========================================
   SERVICE DETAILS MODAL
   Load AFTER script.js (it uses the `lenis` instance if present)
========================================= */

(function () {
  const SERVICES = [
    /* 1 — WATER & WASTEWATER */
    {
      title: 'Water & Wastewater Conveyance Line Construction & Maintenance',
      tagline: 'Conventional and trenchless pipeline construction from 75mm to 2000mm, plus inspection, repair, and no-dig rehabilitation for operating lines.',
      blocks: [
        { part: 'Construction' },
        { p: 'We build water and wastewater conveyance lines using both open-cut and trenchless methods. Each project gets the approach that fits its ground conditions, traffic, and site constraints.' },
        {
          h: 'Pipe Materials',
          p: 'We install a full range of pipe materials, from 75mm to 2000mm in diameter:',
          list: ['PVC', 'HDPE (High-Density Polyethylene)', 'Ductile Iron', 'Steel', 'Concrete', 'Polymer Concrete']
        },
        {
          h: 'Trenchless Pipelaying',
          p: 'We are among the contractors in the Philippines delivering trenchless pipe installation through:',
          list: ['Microtunneling', 'Pipe Jacking', 'Horizontal Directional Drilling (HDD)'],
          after: 'Trenchless methods keep roads open, reduce surface restoration, and keep work going in dense urban areas where open-cut isn\u2019t practical.'
        },
        {
          h: 'Appurtenances',
          p: 'We also build the structures and assemblies a complete conveyance line needs:',
          list: [
            'Gate valves and manholes',
            'Butterfly valves and vaults',
            'Electromagnetic flowmeter (EMF) and pressure-reducing valve (PRV) assemblies',
            'Fire hydrant assemblies',
            'Interceptor box systems',
            'Entry and exit shafts for microtunneling'
          ]
        },
        {
          h: 'Quality Testing',
          p: 'We have the in-house equipment and personnel to carry out the quality tests these works require, so testing doesn\u2019t hold up turnover.'
        },

        { part: 'Maintenance' },
        { p: 'We help utilities and asset owners keep their water and wastewater lines in service through these operations and maintenance works:' },
        {
          list: [
            { t: 'Pipeline CCTV Inspection', d: 'camera surveys that assess pipe condition and pinpoint defects before they become failures.' },
            { t: 'Leak Repairs', d: 'we locate and fix leaks fast to cut water loss and service interruptions.' },
            { t: 'Manhole Repairs', d: 'we restore damaged or deteriorated manholes to stop infiltration and extend their service life.' }
          ]
        },
        {
          h: 'Trenchless Rehabilitation',
          p: 'We renew deteriorated pipes and manholes without excavation, which avoids road closures and shortens downtime:',
          list: [
            { t: 'CIPP Manhole Lining', d: 'a cured-in-place liner that forms a new, watertight structure inside the existing manhole.' },
            { t: 'Cement Mortar Manhole Lining', d: 'a cementitious mortar layer applied to the manhole walls to restore structural strength and seal out infiltration.' },
            { t: 'PVC Fold & Form Lining', d: 'a folded PVC pipe is pulled into the host pipe, then expanded to fit tightly and create a smooth new pipe wall.' },
            { t: 'CIPP Point Repair', d: 'a short resin-saturated patch cured in place over a localized defect to seal cracks, holes, and leaking joints.' },
            { t: 'Quick-Lock Point Repair', d: 'a stainless steel sleeve installed from inside the pipe to seal localized cracks, leaks, and joint defects.' }
          ],
          after: 'CCTV inspection and trenchless rehabilitation work hand in hand. We find the defect, then fix it with minimal disruption.'
        }
      ]
    },

    /* 2 — LAND DEVELOPMENT */
    {
      title: 'Land Development Works',
      tagline: 'Complete site development, from raw land to build-ready.',
      blocks: [
        { p: 'We handle full land development projects, delivering the civil works your site needs under one contractor:' },
        {
          list: [
            { t: 'Site Clearing', d: 'removal of vegetation, debris, and existing structures to prepare the site.' },
            { t: 'Earthworks', d: 'excavation, filling, grading, and compaction to design levels.' },
            { t: 'Road Construction', d: 'access and internal roads built to specification.' },
            { t: 'Drainage Construction', d: 'stormwater systems that protect your site from flooding and erosion.' },
            { t: 'Water and Sewer Lines', d: 'complete water distribution and sewerage networks for your development.' }
          ],
          after: 'One contractor for all the civil works means fewer interfaces, tighter coordination, and a smoother path to turnover.'
        }
      ]
    },

    /* 3 — ROADS & DRAINAGE */
    {
      title: 'Roads & Drainage',
      tagline: 'Road and drainage construction for urban and rural projects.',
      blocks: [
        { p: 'We have the fleet, manpower, and safety equipment to deliver road projects in busy city streets and remote rural sites alike.' },
        {
          list: [
            { t: 'Road Construction', d: 'new roads, widening, and rehabilitation, in both concrete and asphalt pavement.' },
            { t: 'Drainage Systems', d: 'culverts, canals, and stormwater networks that protect roads from water damage and flooding.' },
            { t: 'Traffic and Site Safety', d: 'barriers, signage, and traffic management that keep the public and our crews safe on live roads.' }
          ]
        }
      ]
    },

    /* 4 — MEDIUM-SIZED FACILITIES */
    {
      title: 'Medium-Sized Facilities',
      tagline: 'Commercial and industrial buildings up to five storeys.',
      blocks: [
        { p: 'We build mid-rise facilities for commercial and industrial clients, from structural works through to finishing:' },
        {
          list: [
            { t: 'Commercial Buildings', d: 'offices, retail spaces, and mixed-use buildings.' },
            { t: 'Industrial Facilities', d: 'warehouses, plants, and support buildings.' }
          ],
          after: 'Our civil and utility background means we can also deliver the site works, drainage, and water and sewer connections your building needs, all under one contract.'
        }
      ]
    },

    /* 5 — EQUIPMENT RENTAL */
    {
      title: 'Equipment Rental',
      tagline: 'Well-maintained heavy equipment, available for your project.',
      blocks: [
        { p: 'Our fleet runs our own pipeline, road, and land development projects, so every unit is kept in working condition. When units are free between our projects, we rent them out to other contractors and clients.' },
        {
          h: 'Available equipment includes',
          list: [
            'Excavators & Attachments (Buckets, breakers, vibro hammers)',
            'Dump trucks',
            'Truck with cranes',
            'Air compressors & jackhammers',
            'Tamping Rammers',
            'Plate compactors',
            'Other heavy equipment'
          ],
          after: 'Contact us to check availability and rates for your schedule.'
        }
      ],
      cta: true
    }
  ];

  /* ---------- helpers ---------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- build modal shell ---------- */

  const modal = el('div', 'svc-modal');
  modal.setAttribute('aria-hidden', 'true');

  const backdrop = el('div', 'svc-modal__backdrop');

  const dialog = el('div', 'svc-modal__dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'svc-modal-title');
  dialog.tabIndex = -1;

  const closeBtn = el('button', 'svc-modal__close');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close details');
  closeBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>';

  const aside = el('aside', 'svc-modal__aside');
  const asideNum = el('span', 'svc-modal__num');
  const asideEyebrow = el('span', 'svc-modal__eyebrow', 'SERVICE DETAILS');
  const title = el('h2', 'svc-modal__title');
  title.id = 'svc-modal-title';
  const tagline = el('p', 'svc-modal__tagline');
  const mediaWrap = el('div', 'svc-modal__media');
  const media = el('img');
  media.alt = '';
  mediaWrap.appendChild(media);
  aside.append(asideNum, asideEyebrow, title, tagline, mediaWrap);

  const scroller = el('div', 'svc-modal__body');
  scroller.setAttribute('data-lenis-prevent', '');
  scroller.tabIndex = 0;

  dialog.append(closeBtn, aside, scroller);
  modal.append(backdrop, dialog);
  document.body.appendChild(modal);

  /* ---------- render content ---------- */

  function renderList(items) {
    const ul = el('ul', 'svc-modal__list');
    items.forEach(function (item) {
      const li = el('li');
      if (typeof item === 'string') {
        li.textContent = item;
      } else {
        li.appendChild(el('strong', null, item.t));
        li.appendChild(document.createTextNode(' \u2014 ' + item.d));
      }
      ul.appendChild(li);
    });
    return ul;
  }

  function render(index) {
    const s = SERVICES[index];
    asideNum.textContent = String(index + 1).padStart(2, '0');
    title.textContent = s.title;
    tagline.textContent = s.tagline;

    const card = document.querySelectorAll('.service-card')[index];
    const cardImg = card && card.querySelector('.service-card__img');
    if (cardImg) {
      media.src = cardImg.getAttribute('src');
      mediaWrap.hidden = false;
    } else {
      mediaWrap.hidden = true;
    }

    scroller.textContent = '';

    s.blocks.forEach(function (b) {
      if (b.part) {
        scroller.appendChild(el('h3', 'svc-modal__part', b.part));
        return;
      }
      const section = el('section', 'svc-modal__section');
      if (b.h) section.appendChild(el('h4', 'svc-modal__heading', b.h));
      if (b.p) section.appendChild(el('p', 'svc-modal__text', b.p));
      if (b.list) section.appendChild(renderList(b.list));
      if (b.after) section.appendChild(el('p', 'svc-modal__note', b.after));
      scroller.appendChild(section);
    });

    if (s.cta) {
      // const cta = el('a', 'svc-modal__cta', 'CONTACT US');
      // cta.href = '#contact';
      // cta.addEventListener('click', function () { close(); });
      // scroller.appendChild(cta);
    }

    scroller.scrollTop = 0;
  }

  /* ---------- open / close ---------- */

  let lastFocus = null;

  function open(index) {
    lastFocus = document.activeElement;
    render(index);
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

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      close();
      return;
    }

    // keep keyboard focus inside the dialog
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

  /* ---------- wire up the five service cards ---------- */

  document.querySelectorAll('.service-card').forEach(function (card, index) {
    if (!SERVICES[index]) return;

    // orange bar that grows out of the card's bottom edge on hover / focus
    const bar = el('span', 'service-card__cta');
    bar.setAttribute('aria-hidden', 'true');
    bar.appendChild(el('span', 'service-card__cta-text', 'Click for more info'));
    bar.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>');
    card.appendChild(bar);

    // make the whole card keyboard-accessible
    card.classList.add('is-clickable');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details: ' + SERVICES[index].title);

    card.addEventListener('click', function () { open(index); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(index);
      }
    });
  });
})();