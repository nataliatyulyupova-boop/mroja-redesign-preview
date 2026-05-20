(function () {
  const isRussian = /\/ru\/?$/.test(window.location.pathname) || /\/ru\//.test(window.location.pathname);
  const lang = isRussian ? "ru" : "en";

  const en = {
    htmlLang: "en",
    title: "MROJA Eco-Village",
    description:
      "MROJA is an eco-village in Podlasie: the revival of an abandoned old forest homestead, Belarusian culture, volunteering, and a place for people to recover strength.",
    text: {
      ".mobile-header-button": "Support the project",
      ".header-button": "Support the project",
      ".nav a:nth-child(1)": "What is MROJA",
      ".nav a:nth-child(2)": "Work stages",
      ".nav a:nth-child(3)": "Who we are",
      ".nav a:nth-child(4)": "Contacts",
      ".mobile-menu-nav a:nth-child(1)": "What is MROJA",
      ".mobile-menu-nav a:nth-child(2)": "Work stages",
      ".mobile-menu-nav a:nth-child(3)": "Who we are",
      ".mobile-menu-nav a:nth-child(4)": "Support the project",
      ".mobile-menu-nav a:nth-child(5)": "Contacts",
      ".hero-subtitle-desktop .hero-subtitle-line:nth-child(1)":
        "We are creating an eco-village where you can reset,",
      ".hero-subtitle-desktop .hero-subtitle-line:nth-child(2)":
        "rest from the noise and join the rebirth of this place",
      ".hero-subtitle-mobile span:nth-child(1)": "Take the first step",
      ".hero-subtitle-mobile span:nth-child(2)": "toward a dream that almost came true",
      ".hero-actions .button-gold span": "Присоединиться",
      ".hero-actions .button-glass span": "Learn more",
      "#about-title": "What is MROJA",
      ".about-item:nth-child(1) h3": "Reviving the homestead",
      ".about-item:nth-child(2) h3": "Eco-village and forest rest",
      ".about-item:nth-child(3) h3": "Belarusian cultural layer",
      ".about-item:nth-child(4) h3": "Volunteer participation",
      "#audience-title": "Who chooses MROJA",
      ".audience-grid article:nth-child(1) .copy-mobile": "City residents",
      ".audience-grid article:nth-child(2) .copy-mobile": "Nature lovers",
      ".audience-grid article:nth-child(3) .copy-mobile": "Belarusians in emigration",
      ".audience-grid article:nth-child(4) .copy-mobile": "People after trauma",
      "#mission-title": "Социальная миссия",
      ".mission-grid article:nth-child(1) h3": "Sought help, but nothing changed",
      ".mission-grid article:nth-child(1) p": "Work with psychologists and psychotherapists did not bring the desired result",
      ".mission-grid article:nth-child(2) h3": "Not ready or unable to ask for support",
      ".mission-grid article:nth-child(2) p":
        "No financial means, readiness, or trust to open up to a specialist — a person remains alone with their condition",
      ".mission-grid article:nth-child(3) h3": "Dream of escaping to the forest and working with their hands",
      ".mission-grid article:nth-child(3) p":
        "There is a need to go into nature, engage the body, work with hands, and feel movement and rhythm",
      ".renewal-cards article:nth-child(1) h3": "Working with your hands",
      ".renewal-cards article:nth-child(1) p": "Clears the mind",
      ".renewal-cards article:nth-child(2) h3": "Nature",
      ".renewal-cards article:nth-child(2) p": "Reduces stress",
      ".renewal-cards article:nth-child(3) h3": "Taking part in restoration",
      ".renewal-cards article:nth-child(3) p": "Fills it with meaning",
      ".renewal-cards article:nth-child(4) h3": "Visible result",
      ".renewal-cards article:nth-child(4) p": "Gives a sense of strength",
      ".renewal-cards article:nth-child(5) h3": "People nearby",
      ".renewal-cards article:nth-child(5) p": "Create connection",
      "#restoration-title": "Restoration stages",
      ".team-copy h2": "Who we are",
      ".team-copy h3": "Sergey Gun and Natalia Tiuliupova",
      "#join-title": "Become part of MROJA's birth",
      "#tab-donate strong": "Support with a donation",
      "#tab-help strong": "Come and help",
      "#tab-partner strong": "Become a partner",
      "#tab-share strong": "Tell people about the project",
      "#panel-donate h3": "Support MROJA's restoration",
      "#panel-help h3": "Support MROJA's restoration",
      "#panel-partner h3": "Support MROJA's restoration",
      "#panel-share h3": "Support MROJA with attention",
      ".donate-options > div:nth-child(1) h4": "One-time",
      ".donate-options > div:nth-child(2) h4": "Monthly",
      ".share-button span": "Tell friends",
    },
    html: {
      "#hero-title": "Reviving an abandoned<br>homestead in the forest",
      ".about .section-heading p": "In the forest of Podlasie, Poland, 6 km from the Belarusian border, we bought an abandoned homestead with a 100-year-old house. We will not demolish it — we want to preserve the character of this place and make the old house the heart of a future eco-village",
      ".about-item:nth-child(1) p .copy-desktop": "Taking part in the restoration of a century-old house under the guidance of craftspeople. The house will become a center for meetings, conversations, and encounters with Belarusian culture and traditions",
      ".about-item:nth-child(1) p .copy-mobile": "Taking part in the restoration of a century-old house under the guidance of craftspeople",
      ".about-item:nth-child(2) p .copy-desktop": "A place where you can disconnect from city noise and live simply: chop wood, heat the sauna, collect eggs in the chicken coop, and breathe forest air",
      ".about-item:nth-child(2) p .copy-mobile": "A place where you can disconnect from city noise and live simply",
      ".about-item:nth-child(3) p .copy-desktop": "Culture here will not be decoration — it will become part of everyday life, open to Belarusians and to every guest for whom it resonates",
      ".about-item:nth-child(3) p .copy-mobile": "Culture here will not be decoration — it will become part of everyday life",
      ".about-item:nth-child(4) p .copy-desktop": "We want to carry out many stages of restoring the homestead together with people who feel connected to MROJA. Helping an old house come back to life, a person also regains their own strength",
      ".about-item:nth-child(4) p .copy-mobile": "We want to restore the homestead together with people who feel connected to MROJA",
      ".audience .section-heading p": "MROJA is not for those who are tired, but for those who want<br>to feel alive again",
      ".audience-grid article:nth-child(1) .copy-desktop": "City residents,<br>burned out by noise<br>and overload",
      ".audience-grid article:nth-child(1) p .copy-desktop": "If the city, news, work,<br>and constant tension<br>have drained your strength — here<br>you can exhale and<br>slow down",
      ".audience-grid article:nth-child(1) p .copy-mobile": "If news, work, and tension have drained your strength — here you can exhale and slow down",
      ".audience-grid article:nth-child(2) .copy-desktop": "Those who love nature<br>and dream of living<br>in a village",
      ".audience-grid article:nth-child(2) p .copy-desktop": "If you are not ready<br>to leave everything behind, but want<br>to try village life<br>without pressure and<br>obligations",
      ".audience-grid article:nth-child(2) p .copy-mobile": "If you dream of living in a village but are not ready to leave everything behind — you can try simple life without pressure",
      ".audience-grid article:nth-child(3) .copy-desktop": "Belarusians in<br>emigration",
      ".audience-grid article:nth-child(3) p .copy-desktop": "If you miss a connection<br>with home —<br>here you will find<br>Belarus you can actually<br>visit",
      ".audience-grid article:nth-child(3) p .copy-mobile": "If you miss a connection with home — here you will find Belarus you can actually visit",
      ".audience-grid article:nth-child(4) .copy-desktop": "People who have lived<br>through traumatic experience",
      ".audience-grid article:nth-child(4) p .copy-desktop": "If you are not ready for<br>formal psychological support, but are looking for<br>a place to exhale<br>and regain ground",
      ".audience-grid article:nth-child(4) p .copy-mobile": "If you are not ready for formal psychological support, but are looking for a place to exhale and regain ground",
      ".mission .section-heading p": "Many Belarusians after prison, repression, war, and forced<br>emigration live with anxiety, fatigue, and burnout",
      "#renewal-title": "The revival of a place as a symbol<br>of a person's new birth",
      ".restoration .section-heading p": "Work will move in stages and partly in parallel: first —<br>safety, communications, and the first conditions for people; then — the old<br>house, cabins, sauna, household area, and cultural space",
      ".team-copy p:nth-of-type(1)": "We are a Belarusian couple who were forced to leave our country. Sergey was a political prisoner, and criminal cases were opened against Natalia for political reasons.",
      ".team-copy p:nth-of-type(2)": "With our last savings, we bought an abandoned homestead in the forest of Podlasie. It would have been easier to demolish the old house, but we want to preserve the character of this place. For us, it is a symbol of returning to life.",
      ".team-copy p:nth-of-type(3)": "We dream of building an eco-village — a place for those who feel close to nature, silence, and simple life. For Belarusians, it can become a place of strength, and for guests from other countries — an introduction to our hospitality and Belarusian culture.",
      ".team-copy p:nth-of-type(4)": "In Belarusian, MROJA means a dream destined to come true. We are grateful to Poland and to the people here for the chance of a new beginning. If this story resonates with you — join us.",
      ".join .section-heading p": "MROJA is being created as a shared effort. You can support the project with money, hands, materials, experience, or simply by telling others about us",
      "#tab-donate span": "Any amount helps us move forward: bring in communications, restore the house, and prepare the first conditions for people.",
      "#tab-help span": "You can help with your hands or experience: on-site work, construction, crafts, and working with people.",
      "#tab-partner span": "We are open to cooperation with foundations, initiatives, media, cultural and social organizations.",
      "#tab-share span": "Sharing a link, making a post, sending it to friends, or telling a community also helps a lot.",
      "#panel-donate p:nth-of-type(1)": "To bring the homestead back to life as quickly as possible, we rely on donor support. Your contribution will help restore a place where people who especially need a pause, silence, and human presence can come.",
      "#panel-donate p:nth-of-type(2)": "You can support the project one-time or regularly — through our partners Zrzutka.pl from Poland or BuyMeACoffee from other countries.",
      "#panel-help p:nth-of-type(1)": "If MROJA's mission resonates with you, we will be glad to welcome you to our homestead. We need people from different fields: construction, architecture, landscape, crafts, psychology, culture, and working with people.",
      "#panel-help p:nth-of-type(2)": "You can also help with clearing the territory, landscaping, simple work, everyday tasks, the garden, and preparing the place.",
      "#panel-partner p:nth-of-type(1)": "Right now MROJA is being born almost entirely through our personal initiative. We invest our strength, funds, time, and experience, but the mission of the project is much bigger than our own capacities.",
      "#panel-partner p:nth-of-type(2)": "If you can help with experience, resources, contacts, informational support, or shared opportunities — please contact us.",
      "#panel-share p:nth-of-type(1)": "Your subscription and telling people about the project are very important to us. The more people learn about MROJA, the greater the chance that someone who needs this place will find it.",
      "#panel-share p:nth-of-type(2)": "Join us on social media, follow the restoration of the homestead, and tell your friends about MROJA.",
    },
    stages: [
      ["Territory preparation", "Clear the site, remove debris and dangerous elements, dismantle old remains of structures, preserve stones, wood, and everything that can be reused"],
      ["Water, sewage, and electricity", "Organize basic communications: water, sewage, shower, toilets, electricity, and lighting so people can work and stay at the homestead"],
      ["First places to stay", "Install the first forest cabins and prepare a tent area for volunteers, guests, and project participants"],
      ["Conservation of the old house", "Inspect the house, dismantle dangerous parts, temporarily protect it from rain, and understand which elements can be preserved"],
      ["Restoration of the old house", "Restore the foundation, walls, roof, floors, windows, doors, stove, and interior space with respect for the character of the house"],
      ["Sanitary block and basic comfort", "Build showers, toilets, hot water, and convenient everyday infrastructure for those who come to help or rest"],
      ["Sauna", "Build a sauna as a separate place of warmth, rest, and recovery after work, walks, and forest life"],
      ["Territory arrangement", "Create paths, lighting, a fire pit, rest areas, navigation, an entrance zone, and tidy utility areas"],
      ["Household area", "Create a greenhouse, garden, chicken coop, tool storage, and simple village zones where people can take part in homestead life"],
      ["Common space and cultural events", "Open a house-club for meetings, tea, dinners, books, workshops, Belarusian cultural layer, chamber events, and restorative stays"],
      ["Further development", "Expand cabins and the tent area, improve accessibility, create forest routes, develop workshops, the household area, cultural programs, and social stays"],
    ],
  };

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setHTML(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.innerHTML = value;
    });
  }

  function applyEnglish() {
    document.documentElement.lang = en.htmlLang;
    document.title = en.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", en.description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", en.description);

    Object.entries(en.text).forEach(([selector, value]) => setText(selector, value));
    Object.entries(en.html).forEach(([selector, value]) => setHTML(selector, value));

    document.querySelectorAll("[data-card]").forEach((card, index) => {
      const item = en.stages[index];
      if (!item) return;
      card.querySelector("h3").textContent = item[0];
      card.querySelector("p").textContent = item[1];
    });
  }

  function updateLanguageSwitch() {
    const switches = document.querySelectorAll("[data-lang-switch]");
    switches.forEach((link) => {
      link.textContent = lang === "ru" ? "EN" : "RU";
      link.setAttribute("href", lang === "ru" ? "../" : "ru/");
      link.setAttribute("aria-label", lang === "ru" ? "English version" : "Русская версия");
    });
  }

  if (lang === "en") applyEnglish();
  else document.documentElement.lang = "ru";
  updateLanguageSwitch();
})();
