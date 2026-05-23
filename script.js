const shareText =
  "MROJA — экодеревня на Подляшье. Ребята восстанавливают заброшенный хутор в лесу и создают место для отдыха, беларусской культуры, волонтёрства и восстановления людей. Поддержите или расскажите друзьям.";

function initTabs() {
  const root = document.querySelector("[data-tabs]");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll("[data-tab]"));
  const panels = Array.from(root.querySelectorAll("[data-panel]"));

  function activate(id) {
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === id;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === id;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tab));
  });

  activate("donate");
}

function initCarouselLegacy() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll("[data-card]"));
  const dots = carousel.querySelector("[data-dots]");
  let active = 0;

  cards.forEach((card, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Показать этап ${index + 1}`);
    dot.addEventListener("click", () => setActive(index));
    dots.append(dot);

    card.addEventListener("click", () => {
      if (index !== active) setActive(index);
    });
  });

  const dotButtons = Array.from(dots.querySelectorAll("button"));

  function relative(index) {
    const total = cards.length;
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  function setActive(index) {
    active = (index + cards.length) % cards.length;

    cards.forEach((card, cardIndex) => {
      const diff = relative(cardIndex);
      const abs = Math.abs(diff);
      const direction = Math.sign(diff);
      const positions = {
        0: { tx: 0, ty: 130, tz: 280, rot: 0, scale: 1, opacity: 1, z: 100, sat: 1, bright: 1.03 },
        1: { tx: 220 * direction, ty: 108, tz: 90, rot: -34 * direction, scale: 0.86, opacity: 0.9, z: 80, sat: 0.94, bright: 1 },
        2: { tx: 390 * direction, ty: 114, tz: -170, rot: -58 * direction, scale: 0.68, opacity: 0.66, z: 55, sat: 0.82, bright: 0.96 },
        3: { tx: 510 * direction, ty: 142, tz: -390, rot: -76 * direction, scale: 0.52, opacity: 0.38, z: 30, sat: 0.68, bright: 0.9 },
        4: { tx: 575 * direction, ty: 176, tz: -560, rot: -88 * direction, scale: 0.4, opacity: 0.16, z: 10, sat: 0.55, bright: 0.84 },
      };
      const pos = positions[Math.min(abs, 4)];

      card.className = "restoration-card";
      if (abs <= 4) card.classList.add("is-visible");
      if (diff === 0) card.classList.add("is-active");
      card.style.setProperty("--tx", `${pos.tx}px`);
      card.style.setProperty("--ty", `${pos.ty}px`);
      card.style.setProperty("--tz", `${pos.tz}px`);
      card.style.setProperty("--rot", `${pos.rot}deg`);
      card.style.setProperty("--scale", pos.scale);
      card.style.setProperty("--opacity", pos.opacity);
      card.style.setProperty("--z", pos.z);
      card.style.setProperty("--sat", pos.sat);
      card.style.setProperty("--bright", pos.bright);
    });

    dotButtons.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === active));
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      carousel.classList.add("is-intro");
      setTimeout(() => {
        setActive(1);
        setTimeout(() => setActive(0), 700);
      }, 160);
      observer.disconnect();
    },
    { threshold: 0.35 }
  );

  observer.observe(carousel);
  setActive(0);

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") setActive(active + 1);
    if (event.key === "ArrowLeft") setActive(active - 1);
  });
}

function initCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const stage = carousel.querySelector(".carousel-stage");
  const track = carousel.querySelector("[data-carousel-track]");
  const cards = Array.from(carousel.querySelectorAll("[data-card]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  if (!stage || !track || !cards.length || !prevButton || !nextButton) return;

  let position = 0;
  let animationFrame = null;
  let isDragging = false;
  let isIntroPlaying = false;
  let wasIntersecting = false;
  let hasPlayedIntro = false;
  let startX = 0;
  let startPosition = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  const angleStep = 360 / cards.length;

  function getRadius() {
    const width = carousel.clientWidth || window.innerWidth;
    if (width < 520) return Math.max(680, width * 1.78);
    if (width < 900) return Math.max(390, width * 0.56);
    return Math.min(610, Math.max(470, width * 0.5));
  }

  function relative(index, currentPosition = position) {
    const total = cards.length;
    let diff = index - normalizePosition(currentPosition);
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  }

  function normalizePosition(value) {
    return ((value % cards.length) + cards.length) % cards.length;
  }

  function nearestIndex(currentPosition = position) {
    return ((Math.round(currentPosition) % cards.length) + cards.length) % cards.length;
  }

  function render(currentPosition = position) {
    position = currentPosition;
    const radius = getRadius();
    const normalized = normalizePosition(currentPosition);
    const activeIndex = nearestIndex(currentPosition);

    track.style.setProperty("--ring-radius", `${radius}px`);
    track.style.setProperty("--ring-rotation", `${-normalized * angleStep}deg`);

    cards.forEach((card, cardIndex) => {
      const diff = relative(cardIndex, normalized);
      const abs = Math.abs(diff);
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      const mobileCardWidth = Math.min(260, Math.max(226, window.innerWidth * 0.64));
      const mobileStep = mobileCardWidth + 20;
      const mobileStart = -(stage.clientWidth / 2 - 28 - mobileCardWidth / 2);
      const scale = isMobile ? Math.max(0.76, 1 - abs * 0.12) : Math.max(0.46, 1 - abs * 0.11);
      const opacity = isMobile ? (abs > 1.35 ? 0 : Math.max(0.56, 1 - abs * 0.3)) : (abs > 4.2 ? 0 : Math.max(0.1, 1 - abs * 0.22));
      const blur = isMobile ? 0 : Math.max(0, abs - 1.2) * 0.28;
      const z = Math.round(100 - abs * (isMobile ? 30 : 16));
      const sat = isMobile ? 1 : Math.max(0.55, 1 - abs * 0.08);
      const bright = isMobile ? 1 : Math.max(0.86, 1.03 - abs * 0.04);
      const visibleRange = isMobile ? 1.35 : 4;

      card.className = "restoration-card";
      if (abs <= visibleRange) card.classList.add("is-visible");
      if (cardIndex === activeIndex && abs < 0.5) card.classList.add("is-active");
      card.style.setProperty("--angle", `${cardIndex * angleStep}deg`);
      card.style.setProperty("--radius", `${radius}px`);
      card.style.setProperty("--scale", scale.toFixed(3));
      card.style.setProperty("--opacity", opacity.toFixed(3));
      card.style.setProperty("--blur", `${blur.toFixed(2)}px`);
      card.style.setProperty("--z", z);
      card.style.setProperty("--sat", sat.toFixed(3));
      card.style.setProperty("--bright", bright.toFixed(3));
      card.style.setProperty("--mobile-tx", `${mobileStart + diff * mobileStep}px`);
    });
  }

  function animateTo(targetPosition, duration = 720) {
    if (animationFrame) cancelAnimationFrame(animationFrame);

    const from = position;
    const distance = targetPosition - from;
    const start = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      render(from + distance * easeOutCubic(progress));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        position = normalizePosition(Math.round(targetPosition));
        render(position);
        animationFrame = null;
      }
    }

    animationFrame = requestAnimationFrame(step);
  }

  function playIntro() {
    if (hasPlayedIntro || isIntroPlaying || isDragging) return;

    hasPlayedIntro = true;
    isIntroPlaying = true;
    const start = Math.round(position);
    animateTo(start + 0.72, 560);
    setTimeout(() => {
      animateTo(start, 620);
      setTimeout(() => {
        isIntroPlaying = false;
      }, 650);
    }, 620);
  }

  function snapToNearest() {
    const projected = position + velocity * 0.2;
    animateTo(Math.round(projected), 650);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries.find((item) => item.target === carousel);
      if (!entry) return;
      if (entry.isIntersecting && !wasIntersecting) playIntro();
      wasIntersecting = entry.isIntersecting;
    },
    { threshold: 0.35 }
  );

  observer.observe(carousel);
  render(0);

  function beginDrag(event) {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    isDragging = true;
    isIntroPlaying = false;
    stage.classList.add("is-dragging");
    stage.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startPosition = position;
    lastX = event.clientX;
    lastTime = performance.now();
    velocity = 0;
  }

  function moveDrag(event) {
    if (!isDragging) return;

    const now = performance.now();
    const width = carousel.clientWidth || 1;
    const dragPxPerCard = Math.max(110, Math.min(210, width * 0.16));
    const nextPosition = startPosition - (event.clientX - startX) / dragPxPerCard;
    const dt = Math.max(16, now - lastTime);
    velocity = -((event.clientX - lastX) / dragPxPerCard) / (dt / 1000);
    lastX = event.clientX;
    lastTime = now;
    render(nextPosition);
  }

  function endDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    stage.classList.remove("is-dragging");
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    snapToNearest();
  }

  prevButton.addEventListener("click", () => animateTo(Math.round(position) - 1, 720));
  nextButton.addEventListener("click", () => animateTo(Math.round(position) + 1, 720));
  stage.addEventListener("pointerdown", beginDrag);
  stage.addEventListener("pointermove", moveDrag);
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);
  stage.addEventListener("lostpointercapture", () => {
    if (!isDragging) return;
    isDragging = false;
    stage.classList.remove("is-dragging");
    snapToNearest();
  });

  window.addEventListener("resize", () => render(position));
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") animateTo(Math.round(position) + 1, 720);
    if (event.key === "ArrowLeft") animateTo(Math.round(position) - 1, 720);
  });
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;

  function updateVisibility() {
    button.classList.toggle("is-visible", window.scrollY > 520);
  }

  button.addEventListener("click", () => {
    smoothScrollTo(0);
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
}

function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const closeButton = document.querySelector("[data-menu-close]");
  if (!header || !toggle || !menu || !closeButton) return;

  function setOpen(open) {
    document.body.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
  }

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  toggle.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("is-menu-open"));
  });

  closeButton.addEventListener("click", () => setOpen(false));

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  window.addEventListener(
    "scroll",
    () => {
      if (document.body.classList.contains("is-menu-open")) setOpen(false);
      updateHeader();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setOpen(false);
    updateHeader();
  });

  updateHeader();
}

function smoothScrollTo(targetY) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(1500, Math.max(900, Math.abs(distance) * 0.42));
  const start = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function initSmoothAnchors() {
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      event.stopPropagation();

      const marginTop = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - marginTop;
      smoothScrollTo(Math.max(0, targetY));
      if (history.replaceState) history.replaceState(null, "", hash);
    },
    true
  );
}

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;
  const playButton = document.querySelector("[data-hero-play]");
  const mobileQuery = window.matchMedia("(max-width: 720px)");

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const syncControls = () => {
    video.controls = false;
    if (playButton) playButton.hidden = !mobileQuery.matches;
  };

  const play = () => {
    const promise = video.play();
    if (promise?.then) {
      promise
        .then(() => {
          video.classList.add("is-playing");
          playButton?.classList.add("is-hidden");
        })
        .catch(() => {
          video.classList.remove("is-playing");
          playButton?.classList.remove("is-hidden");
        });
    }
  };

  playButton?.addEventListener("click", play);
  video.addEventListener("play", () => {
    video.classList.add("is-playing");
    playButton?.classList.add("is-hidden");
  });
  video.addEventListener("pause", () => {
    video.classList.remove("is-playing");
    playButton?.classList.remove("is-hidden");
  });
  syncControls();
  play();

  mobileQuery.addEventListener?.("change", syncControls);
  ["touchstart", "pointerdown", "click"].forEach((eventName) => {
    window.addEventListener(eventName, play, { once: true, passive: true });
  });
}

function initShare() {
  const button = document.querySelector("[data-share]");
  const status = document.querySelector("[data-share-status]");
  if (!button) return;

  function showOpened() {
    if (status) status.textContent = "Mail window opened.";
  }

  button.addEventListener("click", () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);
    window.open(`mailto:?subject=MROJA Eco-Village&body=${text}%0A%0A${url}`, "_blank", "noopener");
    showOpened();
  });
}

function initAudienceSlider() {
  const slider = document.querySelector("[data-audience-slider]");
  if (!slider) return;

  const track = slider.querySelector("[data-audience-track]");
  const cards = Array.from(slider.querySelectorAll(".audience-card"));
  const prev = slider.querySelector("[data-audience-prev]");
  const next = slider.querySelector("[data-audience-next]");
  if (!track || cards.length < 2 || !prev || !next) return;

  let active = 0;

  function render() {
    track.style.transform = `translateX(${-active * 100}%)`;
  }

  function go(direction) {
    active = (active + direction + cards.length) % cards.length;
    render();
  }

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));

  window.addEventListener("resize", render);
  render();

  if (window.matchMedia("(max-width: 720px)").matches) {
    slider.classList.add("is-hinting");
    window.setTimeout(() => slider.classList.remove("is-hinting"), 1300);
  }
}

function initMobileBottomNav() {
  const nav = document.querySelector("[data-mobile-bottom-nav]");
  if (!nav) return;

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const links = Array.from(nav.querySelectorAll("a[href^='#']"));
  const targets = links
    .map((link) => {
      const id = link.getAttribute("href").slice(1);
      const target = id === "top" ? document.querySelector(".hero") : document.getElementById(id);
      return { id, link, target };
    })
    .filter((item) => item.target);

  function sync() {
    if (!mobileQuery.matches) {
      nav.classList.remove("is-visible");
      return;
    }

    const hero = document.querySelector(".hero");
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    nav.classList.toggle("is-visible", heroBottom < window.innerHeight - 96);

    let active = "top";
    const anchorLine = window.innerHeight * 0.42;
    targets.forEach(({ id, target }) => {
      const rect = target.getBoundingClientRect();
      if (rect.top <= anchorLine && rect.bottom > 90) active = id;
    });

    links.forEach((link) => {
      const id = link.dataset.navTarget || link.getAttribute("href").slice(1);
      link.classList.toggle("is-active", id === active);
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      const target = hash === "#top" ? document.querySelector(".hero") : document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  mobileQuery.addEventListener?.("change", sync);
  sync();
}

function initGallery() {
  const items = Array.from(document.querySelectorAll("[data-gallery-item]"));
  const lightbox = document.querySelector("[data-gallery-lightbox]");
  if (!items.length || !lightbox) return;

  const initialImage = lightbox.querySelector("[data-gallery-image]");
  const closeButton = lightbox.querySelector("[data-gallery-close]");
  const prevButton = lightbox.querySelector("[data-gallery-prev]");
  const nextButton = lightbox.querySelector("[data-gallery-next]");
  if (!initialImage) return;

  let image = initialImage;
  let stage = image.closest(".gallery-lightbox-stage");
  if (!stage) {
    stage = document.createElement("div");
    stage.className = "gallery-lightbox-stage";
    image.parentNode.insertBefore(stage, image);
    stage.appendChild(image);
  }

  let track = stage.querySelector(".gallery-slider-track");
  if (!track) {
    track = document.createElement("div");
    track.className = "gallery-slider-track";
    stage.appendChild(track);
  }

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  let activeIndex = 0;
  let shownCount = 0;
  let touchStartX = 0;
  let touchDeltaX = 0;
  let isDragging = false;
  let isSliding = false;

  function visibleInitialCount() {
    return mobileQuery.matches ? 3 : 4;
  }

  function reveal(count) {
    const nextCount = Math.min(count, items.length);
    items.forEach((item, index) => {
      const shouldShow = index < nextCount;
      item.classList.toggle("is-gallery-hidden", !shouldShow);
      if (shouldShow && index >= shownCount) {
        item.classList.add("is-gallery-revealing");
        requestAnimationFrame(() => item.classList.remove("is-gallery-revealing"));
      }
    });
    shownCount = nextCount;
  }

  function revealNextBatch() {
    reveal(shownCount + (mobileQuery.matches ? 3 : 4));
  }

  function getGalleryData(index) {
    const item = items[index];
    const source = item.dataset.gallerySrc || item.querySelector("img")?.src || "";
    const alt = item.querySelector("img")?.alt || "";
    return { alt, source };
  }

  function normalizeIndex(index) {
    return (index + items.length) % items.length;
  }

  function buildSlide(index) {
    const { alt, source } = getGalleryData(normalizeIndex(index));
    const slide = document.createElement("div");
    const slideImage = document.createElement("img");
    slide.className = "gallery-slider-slide";
    slideImage.className = "gallery-lightbox-image";
    slideImage.src = source;
    slideImage.alt = alt;
    slide.appendChild(slideImage);
    return slide;
  }

  function resetTrack(index = activeIndex) {
    activeIndex = normalizeIndex(index);
    track.classList.remove("is-dragging");
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    track.replaceChildren(buildSlide(activeIndex));
    image = track.querySelector(".gallery-lightbox-image") || image;
    requestAnimationFrame(() => {
      track.style.transition = "";
    });
  }

  function finishSlide(nextIndex) {
    activeIndex = normalizeIndex(nextIndex);
    isSliding = false;
    isDragging = false;
    resetTrack(activeIndex);
  }

  function setImage(index, direction = 0) {
    if (isSliding) return;

    const nextIndex = normalizeIndex(index);

    if (!direction || !track.children.length) {
      resetTrack(nextIndex);
      return;
    }

    isSliding = true;
    track.classList.remove("is-dragging");
    track.style.transition = "none";
    track.replaceChildren();

    if (direction > 0) {
      track.append(buildSlide(activeIndex), buildSlide(nextIndex));
      track.style.transform = "translateX(0)";
    } else {
      track.append(buildSlide(nextIndex), buildSlide(activeIndex));
      track.style.transform = "translateX(-100%)";
    }

    requestAnimationFrame(() => {
      track.style.transition = "";
      track.style.transform = direction > 0 ? "translateX(-100%)" : "translateX(0)";
    });

    const finish = () => finishSlide(nextIndex);
    track.addEventListener("transitionend", finish, { once: true });
    window.setTimeout(() => {
      if (isSliding) finish();
    }, 560);
  }

  function open(index) {
    resetTrack(index);
    lightbox.hidden = false;
    document.body.classList.add("gallery-lightbox-open");
  }

  function close() {
    lightbox.hidden = true;
    track.replaceChildren();
    isSliding = false;
    isDragging = false;
    document.body.classList.remove("gallery-lightbox-open");
  }

  items.forEach((item, index) => {
    item.addEventListener("click", () => open(index));
  });

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => setImage(activeIndex - 1, -1));
  nextButton?.addEventListener("click", () => setImage(activeIndex + 1, 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") setImage(activeIndex - 1, -1);
    if (event.key === "ArrowRight") setImage(activeIndex + 1, 1);
  });

  stage.addEventListener("touchstart", (event) => {
    if (isSliding || lightbox.hidden) return;
    touchStartX = event.changedTouches[0]?.clientX || 0;
    touchDeltaX = 0;
    isDragging = true;
    track.classList.add("is-dragging");
    track.style.transition = "none";
    track.replaceChildren(buildSlide(activeIndex - 1), buildSlide(activeIndex), buildSlide(activeIndex + 1));
    track.style.transform = "translateX(-100%)";
  }, { passive: true });

  stage.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    touchDeltaX = (event.changedTouches[0]?.clientX || 0) - touchStartX;
    track.style.transform = `translateX(calc(-100% + ${touchDeltaX}px))`;
    event.preventDefault();
  }, { passive: false });

  stage.addEventListener("touchend", (event) => {
    if (!isDragging) return;
    const touchEndX = event.changedTouches[0]?.clientX || 0;
    const delta = touchEndX - touchStartX;
    const direction = delta < 0 ? 1 : -1;
    const nextIndex = normalizeIndex(activeIndex + direction);
    isDragging = false;
    isSliding = true;
    track.classList.remove("is-dragging");
    track.style.transition = "";

    if (Math.abs(delta) > 44) {
      track.style.transform = direction > 0 ? "translateX(-200%)" : "translateX(0)";
      const finish = () => finishSlide(nextIndex);
      track.addEventListener("transitionend", finish, { once: true });
      window.setTimeout(() => {
        if (isSliding) finish();
      }, 560);
    } else {
      track.style.transform = "translateX(-100%)";
      const finish = () => {
        isSliding = false;
        resetTrack(activeIndex);
      };
      track.addEventListener("transitionend", finish, { once: true });
      window.setTimeout(() => {
        if (isSliding) finish();
      }, 560);
    }
  }, { passive: true });

  reveal(visibleInitialCount());

  function maybeRevealOnScroll() {
    const gallery = items[0]?.closest("[data-gallery]");
    if (!gallery || shownCount >= items.length) return;
    const rect = gallery.getBoundingClientRect();
    if (rect.bottom < window.innerHeight + 180) revealNextBatch();
  }

  window.addEventListener("scroll", maybeRevealOnScroll, { passive: true });
  window.addEventListener("resize", maybeRevealOnScroll);
  maybeRevealOnScroll();

  mobileQuery.addEventListener?.("change", () => {
    shownCount = 0;
    reveal(visibleInitialCount());
  });
}

function initMobileGlassHeader() {
  const header = document.querySelector(".mobile-glass-header");
  const support = document.querySelector(".mobile-fixed-support");
  const hero = document.querySelector(".hero");
  if (!header || !hero) return;

  const mobileQuery = window.matchMedia("(max-width: 720px)");

  function sync() {
    if (!mobileQuery.matches) {
      header.classList.remove("is-visible");
      support?.classList.remove("is-visible");
      return;
    }

    const heroBottom = hero.getBoundingClientRect().bottom;
    const visible = heroBottom < window.innerHeight * 0.28;
    header.classList.toggle("is-visible", visible);
    support?.classList.toggle("is-visible", visible);
  }

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  mobileQuery.addEventListener?.("change", sync);
  sync();
}

initTabs();
initCarousel();
initAudienceSlider();
// initShare intentionally stays inactive on mobile-first launch to avoid Safari privacy prompts.
initBackToTop();
initMobileMenu();
initSmoothAnchors();
initMobileBottomNav();
initGallery();
initMobileGlassHeader();
// Native muted autoplay is handled by the video element; avoid extra play() calls on iOS.
