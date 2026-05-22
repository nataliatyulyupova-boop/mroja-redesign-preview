(function () {
  const path = window.location.pathname;
  const lang = /\/ru(?:\/|$)/.test(path)
    ? "ru"
    : /\/by(?:\/|$)/.test(path)
      ? "by"
      : /\/pl(?:\/|$)/.test(path)
        ? "pl"
        : "en";

  const dictionaries = {
    en: {
      htmlLang: "en",
      title: "Restoring an Abandoned Homestead in the Forest — MROJA",
      description:
        "MROJA is a forest homestead for those who dream of escaping the city: simple life, glamping, hands-on restoration, nature and living Belarusian culture.",
      canonical: "https://mroja.me/",
      ogTitle: "Restoring an Abandoned Homestead in the Forest — MROJA",
      ogDescription:
        "A forest homestead for those who dream of escaping the city: glamping, simple life, hands-on restoration, nature and living Belarusian culture.",
      twitterTitle: "Restoring an Abandoned Homestead in the Forest — MROJA",
      twitterDescription:
        "A forest homestead for those who dream of escaping the city: simple life, glamping, hands-on restoration, nature and living Belarusian culture.",
      nav: ["What is MROJA", "Work stages", "Who we are", "Contacts", "Support the project"],
      heroTitle: "Reviving an abandoned<br>homestead in the forest",
      heroDesktop: [
        "We are creating an eco-village where you can reset,",
        "rest from the noise and join the rebirth of this place",
      ],
      heroMobile: ["Take the first step", "toward a dream that almost came true"],
      heroJoin: "Join us",
      heroLearn: "Learn more",
      aboutTitle: "What is MROJA",
      aboutSubtitle: "A place of strength and transformation through simple actions",
      aboutCards: [
        ["Glamping", "Tents, summer cabins, fire pit and simple amenities"],
        ["Reviving the homestead", "You can come, help with your hands and become part of this place's revival"],
        ["Forest and nature", "The homestead is surrounded by forest on all four sides - birch, pine and oak"],
        ["Village experience", "Chop firewood, light a fire, collect eggs and earn rewards"],
      ],
      audienceTitle: "Who chooses MROJA",
      audienceSubtitle: "For those who dream of escaping the city",
      audienceCards: [
        ["City people", "If news, work and constant pressure drained you - here you can breathe and slow down"],
        ["Drawn to the forest", "If you dream of life outside the city but cannot leave everything behind - try it here"],
        ["Belarusians abroad", "If you miss home - here is a Belarus you can actually come to"],
        ["After hard times", "If therapy is not enough and you need a place to breathe, nature and hands-on work can help"],
      ],
      galleryTitle: "Gallery",
      missionTitle: "Social mission",
      missionLead:
        "Many Belarusians who have lived through prison, repression, war or forced emigration are dealing with anxiety, exhaustion and burnout",
      missionPoints: [
        "Sought help, but nothing changed",
        "Are not ready or able to ask for support",
        "Dream of escaping to the forest and working with their hands",
      ],
      missionAccent: "MROJA is a place of strength and recovery for those who need it most",
      stagesTitle: "Work stages",
      stages: [
        {
          title: "Site preparation",
          text: "Clear the area, remove waste, level the ground and sow grass",
          meta: [["Amount", "3500 eur"], ["Own funds", "3500 eur"], ["Status", "done"]],
        },
        {
          title: "Utilities",
          text: "Water, sewage, electricity and basic conditions",
          meta: [["Amount", "12000 eur"], ["Own funds", "3000 eur"], ["Status", "fundraising open", true]],
        },
        {
          title: "Places to stay",
          text: "Tent area, summer cabins and basic comfort for guests and volunteers",
          meta: [["Amount", "35000 eur"], ["Status", "planned"]],
        },
        {
          title: "House restoration",
          text: "Strengthen the structure, walls, roof and interior space",
          meta: [["Amount", "30000 eur"], ["Own funds", "3000 eur"], ["Status", "planned"]],
        },
        {
          title: "Utility block",
          text: "Separate building with showers, toilets and storage space",
          meta: [["Amount", "12000 eur"], ["Own funds", "3000 eur"], ["Status", "planned"]],
        },
        {
          title: "Further development",
          text: "Infrastructure, retreats, workshops and the quest app",
          meta: [["Format", "1 eur per month"], ["Status", "fundraising open", true]],
        },
      ],
      stageSupport: [
        ["Support PLN", "Zrzutka / Poland"],
        ["Support EUR", "Buy Me a Coffee / other countries"],
      ],
      teamTitle: "Who we are",
      teamAlt: "Sergey Gun and Natalia Tiuliupova",
      teamText: [
        "We are a Belarusian couple who were forced to leave our country. Sergey Gun was a political prisoner, and Natalia Tiuliupova also faced political persecution in Belarus.",
        "We bought an abandoned homestead in the forest of Podlasie. It would have been easier to demolish the old house, but we want to preserve its character and bring life back to this place.",
        "Sergey works with wood, builds and restores houses. In Belarus, he had a chicken farm with 600+ hens, and he has helped more than 10 old houses return to life. Natalia launches projects, builds communication, gathers people around an idea, and turns chaos into a clear system.",
        "We dream of building an eco-village - a place of strength where people from different countries can come to rest, work with their hands, live closer to nature, and touch living Belarusian culture.",
      ],
      joinTitle: "Become part of MROJA's birth",
      joinText:
        "To bring the homestead back to life faster, we need support. Even 1 eur will help create a place where people can come for silence, a pause, and human warmth.",
      donation: [
        ["Support PLN", "Zrzutka / Poland"],
        ["Support EUR", "Buy Me a Coffee / other countries"],
      ],
      contactsTitle: "Contacts",
      copyright: "© Copyright 2026",
    },
    ru: {
      htmlLang: "ru",
      title: "Восстанавливаем заброшенный хутор в лесу — MROJA",
      description:
        "MROJA — место для тех, кто мечтает сбежать из города: глэмпинг, простая жизнь, восстановление хутора, природа и живая беларусская культура.",
      canonical: "https://mroja.me/ru/",
      ogTitle: "Восстанавливаем заброшенный хутор в лесу — MROJA",
      ogDescription:
        "Место для тех, кто мечтает сбежать из города: глэмпинг, простая жизнь, восстановление хутора, природа и живая беларусская культура.",
      twitterTitle: "Восстанавливаем заброшенный хутор в лесу — MROJA",
      twitterDescription:
        "Место для тех, кто мечтает сбежать из города: глэмпинг, простая жизнь, восстановление хутора, природа и живая беларусская культура.",
      nav: ["Что такое MROJA", "Этапы работ", "Кто мы", "Контакты", "Поддержать проект"],
      heroTitle: "Восстанавливаем заброшенный<br>хутор в лесу",
      heroDesktop: [
        "Создаем экодеревню, где можно перезагрузиться,",
        "отдохнуть от шума и присоединиться к перерождению этого места",
      ],
      heroMobile: ["Сделай первый шаг", "к несбывшейся мечте"],
      heroJoin: "Присоединиться",
      heroLearn: "Узнать подробнее",
      aboutTitle: "Что такое MROJA",
      aboutSubtitle: "Место силы и трансформации через простые действия",
      aboutCards: [
        ["Глэмпинг", "Палатки, летние домики, костер и простые удобства"],
        ["Восстановление хутора", "Можно приехать, помочь руками и стать частью возрождения места"],
        ["Лес и природа", "Хутор окружен лесом с 4-х сторон - березовым, сосновым и дубовым"],
        ["Деревенский опыт", "Рубите дрова, разжигайте костер, собирайте яйца и получайте награды"],
      ],
      audienceTitle: "Кто выбирает MROJA",
      audienceSubtitle: "Для тех, кто мечтает сбежать из города",
      audienceCards: [
        ["Городские жители", "Если новости, работа и постоянное напряжение забрали силы - здесь можно выдохнуть и замедлиться"],
        ["Тянет в лес", "Если вы мечтаете пожить за городом, но не готовы все бросить - попробуйте здесь"],
        ["Беларусы в эмиграции", "Если вам не хватает дома - здесь вас ждет Беларусь, в которую можно приехать"],
        ["После трудного опыта", "Если терапии недостаточно и нужно место, где можно выдохнуть, природа и работа руками помогут"],
      ],
      galleryTitle: "Галерея",
      missionTitle: "Социальная миссия",
      missionLead:
        "Многие беларусы после тюрьмы, репрессий, войны и вынужденной эмиграции живут в состоянии тревоги, усталости и выгорания",
      missionPoints: [
        "Искали помощи, но состояние не изменилось",
        "Не готовы или не могут обратиться за поддержкой",
        "Мечтают сбежать в лес и поработать руками",
      ],
      missionAccent: "MROJA - место силы и восстановления для тех, кому это особенно нужно",
      stagesTitle: "Этапы работ",
      stages: [
        { title: "Подготовка участка", text: "Расчистить территорию, убрать мусор, выровнять землю, засеять травой", meta: [["Сумма", "3500 eur"], ["Собственные средства", "3500 eur"], ["Статус", "сделано"]] },
        { title: "Коммуникации", text: "Вода, канализация, электричество и базовые условия", meta: [["Сумма", "12000 eur"], ["Собственные средства", "3000 eur"], ["Статус", "открыт сбор", true]] },
        { title: "Места для проживания", text: "Палаточная зона, летние домики, баня и удобства для гостей и волонтеров", meta: [["Сумма", "35000 eur"], ["Статус", "в ожидании"]] },
        { title: "Восстановление дома", text: "Укрепить конструкцию, стены, крышу и внутреннее пространство", meta: [["Сумма", "30000 eur"], ["Собственные средства", "3000 eur"], ["Статус", "в ожидании"]] },
        { title: "Хозблок", text: "Отдельная постройка с душевыми, туалетами и хозяйственным блоком", meta: [["Сумма", "12000 eur"], ["Собственные средства", "3000 eur"], ["Статус", "в ожидании"]] },
        { title: "Дальнейшее развитие", text: "Расширение инфраструктуры, ретриты, мастерские и приложение с квестами", meta: [["Формат", "1 eur в месяц"], ["Статус", "открыт сбор", true]] },
      ],
      stageSupport: [["Поддержать PLN", "Zrzutka / Польша"], ["Поддержать EUR", "Buy Me a Coffee / другие страны"]],
      teamTitle: "Кто мы?",
      teamAlt: "Сергей Гунь и Наталья Тюлюпова",
      teamText: [
        "Мы - пара беларусов, вынужденных уехать из своей страны. Сергей Гунь был политзаключенным, Наталья Тюлюпова также находилась на родине под политическими преследованиями.",
        "Мы купили заброшенный хутор в лесу на Подляшье. Старый дом проще было бы снести, но мы хотим сохранить его характер и вернуть этому месту жизнь.",
        "Сергей работает с деревом, строит и восстанавливает дома. В Беларуси у него был курятник на 600+ кур, а за его плечами - более 10 старых домов, которым он помог вернуться к жизни. Наталья запускает проекты, выстраивает коммуникацию, собирает людей вокруг идеи и превращает хаос в понятную систему.",
        "Мы мечтаем построить экодеревню - место силы, куда смогут приезжать люди из разных стран: отдохнуть, поработать руками, пожить ближе к природе и прикоснуться к живой беларусской культуре.",
      ],
      joinTitle: "Станьте частью рождения MROJA",
      joinText:
        "Чтобы хутор быстрее ожил, нам нужна поддержка. Даже 1 eur поможет создать место, куда люди смогут приехать за тишиной, передышкой и человеческим теплом.",
      donation: [["Поддержать PLN", "Zrzutka / Польша"], ["Поддержать EUR", "Buy Me a Coffee / другие страны"]],
      contactsTitle: "Контакты",
      copyright: "© Copyright 2026",
    },
    by: {
      htmlLang: "be",
      title: "Адраджаем закінуты хутар у лесе — MROJA",
      description:
        "MROJA — месца для тых, хто марыць вырвацца з горада: глэмпінг, простае жыццё, адраджэнне хутара, прырода і жывая беларуская культура.",
      canonical: "https://mroja.me/by/",
      ogTitle: "Адраджаем закінуты хутар у лесе — MROJA",
      ogDescription:
        "Месца для тых, хто марыць вырвацца з горада: глэмпінг, простае жыццё, адраджэнне хутара, прырода і жывая беларуская культура.",
      twitterTitle: "Адраджаем закінуты хутар у лесе — MROJA",
      twitterDescription:
        "Месца для тых, хто марыць вырвацца з горада: глэмпінг, простае жыццё, адраджэнне хутара, прырода і жывая беларуская культура.",
      nav: ["Што такое MROJA", "Этапы работ", "Хто мы", "Кантакты", "Падтрымаць праект"],
      heroTitle: "Аднаўляем закінуты<br>хутар у лесе",
      heroDesktop: ["Ствараем экавёску, дзе можна перазагрузіцца,", "адпачыць ад шуму і далучыцца да перараджэння гэтага месца"],
      heroMobile: ["Зрабі першы крок", "да мары, якая амаль здзейснілася"],
      heroJoin: "Далучыцца",
      heroLearn: "Даведацца больш",
      aboutTitle: "Што такое MROJA",
      aboutSubtitle: "Месца сілы і трансфармацыі праз простыя дзеянні",
      aboutCards: [
        ["Глэмпінг", "Палаткі, летнія домікі, вогнішча і простыя выгоды"],
        ["Аднаўленне хутара", "Можна прыехаць, дапамагчы рукамі і стаць часткай адраджэння месца"],
        ["Лес і прырода", "Хутар акружаны лесам з чатырох бакоў - бярозавым, сасновым і дубовым"],
        ["Вясковы досвед", "Каліце дровы, распальвайце вогнішча, збірайце яйкі і атрымлівайце ўзнагароды"],
      ],
      audienceTitle: "Хто выбірае MROJA",
      audienceSubtitle: "Для тых, хто марыць збегчы з горада",
      audienceCards: [
        ["Гарадскія жыхары", "Калі навіны, праца і пастаяннае напружанне забралі сілы - тут можна выдыхнуць і запаволіцца"],
        ["Цягне ў лес", "Калі вы марыце пажыць за горадам, але не гатовыя ўсё кінуць - паспрабуйце тут"],
        ["Беларусы за мяжой", "Калі вам не хапае дому - тут вас чакае Беларусь, у якую можна прыехаць"],
        ["Пасля цяжкіх часоў", "Калі псіхалагічнай дапамогі недастаткова і трэба месца для выдыху, прырода і праца рукамі могуць дапамагчы"],
      ],
      galleryTitle: "Галерэя",
      missionTitle: "Сацыяльная місія",
      missionLead: "Многія беларусы пасля турмы, рэпрэсій, вайны і вымушанай эміграцыі жывуць у стане трывогі, стомы і выгарання",
      missionPoints: ["Шукалі дапамогі, але стан не змяніўся", "Не гатовыя або не могуць звярнуцца па падтрымку", "Мараць збегчы ў лес і папрацаваць рукамі"],
      missionAccent: "MROJA - месца сілы і аднаўлення для тых, каму гэта асабліва патрэбна",
      stagesTitle: "Этапы работ",
      stages: [
        { title: "Падрыхтоўка ўчастка", text: "Расчысціць тэрыторыю, прыбраць смецце, выраўнаваць зямлю і засеяць травой", meta: [["Сума", "3500 eur"], ["Уласныя сродкі", "3500 eur"], ["Статус", "зроблена"]] },
        { title: "Камунікацыі", text: "Вада, каналізацыя, электрычнасць і базавыя ўмовы", meta: [["Сума", "12000 eur"], ["Уласныя сродкі", "3000 eur"], ["Статус", "адкрыты збор", true]] },
        { title: "Месцы для пражывання", text: "Намётавая зона, летнія домікі, лазня і выгоды для гасцей і валанцёраў", meta: [["Сума", "35000 eur"], ["Статус", "у чаканні"]] },
        { title: "Аднаўленне дома", text: "Умацаваць канструкцыю, сцены, дах і ўнутраную прастору", meta: [["Сума", "30000 eur"], ["Уласныя сродкі", "3000 eur"], ["Статус", "у чаканні"]] },
        { title: "Гаспадарчы блок", text: "Асобная пабудова з душавымі, туалетамі і гаспадарчай часткай", meta: [["Сума", "12000 eur"], ["Уласныя сродкі", "3000 eur"], ["Статус", "у чаканні"]] },
        { title: "Далейшае развіццё", text: "Пашырэнне інфраструктуры, рэтрыты, майстэрні і дадатак з квэстамі", meta: [["Фармат", "1 eur у месяц"], ["Статус", "адкрыты збор", true]] },
      ],
      stageSupport: [["Падтрымаць PLN", "Zrzutka / Польшча"], ["Падтрымаць EUR", "Buy Me a Coffee / іншыя краіны"]],
      teamTitle: "Хто мы?",
      teamAlt: "Сяргей Гунь і Наталля Цюлюпава",
      teamText: [
        "Мы - пара беларусаў, вымушаных з'ехаць са сваёй краіны. Сяргей Гунь быў палітвязнем, Наталля Цюлюпава таксама знаходзілася на радзіме пад палітычным пераследам.",
        "Мы купілі закінуты хутар у лесе на Падляшшы. Стары дом прасцей было б знесці, але мы хочам захаваць яго характар і вярнуць гэтаму месцу жыццё.",
        "Сяргей працуе з дрэвам, будуе і аднаўляе дамы. У Беларусі ў яго быў куратнік на 600+ курэй, а за плячыма - больш за 10 старых дамоў, якім ён дапамог вярнуцца да жыцця. Наталля запускае праекты, выбудоўвае камунікацыю, збірае людзей вакол ідэі і ператварае хаос у зразумелую сістэму.",
        "Мы марым пабудаваць экавёску - месца сілы, куды змогуць прыязджаць людзі з розных краін: адпачыць, папрацаваць рукамі, пажыць бліжэй да прыроды і дакрануцца да жывой беларускай культуры.",
      ],
      joinTitle: "Станьце часткай нараджэння MROJA",
      joinText: "Каб хутар хутчэй ажыў, нам патрэбная падтрымка. Нават 1 eur дапаможа стварыць месца, куды людзі змогуць прыехаць па цішыню, перадышку і чалавечае цяпло.",
      donation: [["Падтрымаць PLN", "Zrzutka / Польшча"], ["Падтрымаць EUR", "Buy Me a Coffee / іншыя краіны"]],
      contactsTitle: "Кантакты",
      copyright: "© Copyright 2026",
    },
    pl: {
      htmlLang: "pl",
      title: "Odnawiamy opuszczone siedlisko w lesie — MROJA",
      description:
        "MROJA to miejsce dla tych, którzy marzą o ucieczce z miasta: glamping, proste życie, odnowa starego siedliska, natura i żywa białoruska kultura.",
      canonical: "https://mroja.me/pl/",
      ogTitle: "Odnawiamy opuszczone siedlisko w lesie — MROJA",
      ogDescription:
        "Miejsce dla tych, którzy marzą o ucieczce z miasta: glamping, proste życie, odnowa starego siedliska, natura i żywa białoruska kultura.",
      twitterTitle: "Odnawiamy opuszczone siedlisko w lesie — MROJA",
      twitterDescription:
        "Miejsce dla tych, którzy marzą o ucieczce z miasta: glamping, proste życie, odnowa starego siedliska, natura i żywa białoruska kultura.",
      nav: ["Czym jest MROJA", "Etapy prac", "Kim jesteśmy", "Kontakt", "Wesprzyj projekt"],
      heroTitle: "Odnawiamy opuszczone<br>siedlisko w lesie",
      heroDesktop: ["Tworzymy ekowioskę, w której można się zresetować,", "odpocząć od hałasu i dołączyć do odrodzenia tego miejsca"],
      heroMobile: ["Zrób pierwszy krok", "w stronę marzenia, które prawie się spełniło"],
      heroJoin: "Dołącz",
      heroLearn: "Dowiedz się więcej",
      aboutTitle: "Czym jest MROJA",
      aboutSubtitle: "Miejsce siły i transformacji przez proste działania",
      aboutCards: [
        ["Glamping", "Namioty, letnie domki, ognisko i proste udogodnienia"],
        ["Odnowa siedliska", "Możesz przyjechać, pomóc własnymi rękami i stać się częścią odrodzenia tego miejsca"],
        ["Las i natura", "Siedlisko otacza las z czterech stron - brzozowy, sosnowy i dębowy"],
        ["Wiejski rytm", "Rąb drewno, rozpalaj ognisko, zbieraj jajka i zdobywaj nagrody"],
      ],
      audienceTitle: "Kto wybiera MROJA",
      audienceSubtitle: "Dla tych, którzy marzą o ucieczce z miasta",
      audienceCards: [
        ["Mieszkańcy miasta", "Jeśli wiadomości, praca i ciągłe napięcie odebrały ci siły - tutaj możesz odetchnąć i zwolnić"],
        ["Ciągnie do lasu", "Jeśli marzysz o życiu poza miastem, ale nie możesz wszystkiego zostawić - spróbuj tutaj"],
        ["Białorusini za granicą", "Jeśli tęsknisz za domem - tutaj czeka Białoruś, do której naprawdę można przyjechać"],
        ["Po trudnych doświadczeniach", "Jeśli terapia nie wystarcza i potrzebujesz miejsca, by odetchnąć, natura i praca rękami mogą pomóc"],
      ],
      galleryTitle: "Galeria",
      missionTitle: "Misja społeczna",
      missionLead: "Wielu Białorusinów po więzieniu, represjach, wojnie i przymusowej emigracji żyje w stanie lęku, zmęczenia i wypalenia",
      missionPoints: ["Szukali pomocy, ale nic się nie zmieniło", "Nie są gotowi lub nie mogą poprosić o wsparcie", "Marzą o ucieczce do lasu i pracy rękami"],
      missionAccent: "MROJA to miejsce siły i regeneracji dla tych, którzy najbardziej tego potrzebują",
      stagesTitle: "Etapy prac",
      stages: [
        { title: "Przygotowanie terenu", text: "Oczyścić teren, usunąć odpady, wyrównać ziemię i zasiać trawę", meta: [["Kwota", "3500 eur"], ["Środki własne", "3500 eur"], ["Status", "zrobione"]] },
        { title: "Media", text: "Woda, kanalizacja, elektryczność i podstawowe warunki", meta: [["Kwota", "12000 eur"], ["Środki własne", "3000 eur"], ["Status", "zbiórka otwarta", true]] },
        { title: "Miejsca pobytu", text: "Strefa namiotowa, letnie domki, sauna i wygody dla gości oraz wolontariuszy", meta: [["Kwota", "35000 eur"], ["Status", "planowane"]] },
        { title: "Renowacja domu", text: "Wzmocnić konstrukcję, ściany, dach i wnętrze", meta: [["Kwota", "30000 eur"], ["Środki własne", "3000 eur"], ["Status", "planowane"]] },
        { title: "Blok gospodarczy", text: "Osobny budynek z prysznicami, toaletami i częścią gospodarczą", meta: [["Kwota", "12000 eur"], ["Środki własne", "3000 eur"], ["Status", "planowane"]] },
        { title: "Dalszy rozwój", text: "Rozbudowa infrastruktury, pobyty regeneracyjne, warsztaty i aplikacja z questami", meta: [["Format", "1 eur miesięcznie"], ["Status", "zbiórka otwarta", true]] },
      ],
      stageSupport: [["Wesprzyj PLN", "Zrzutka / Polska"], ["Wesprzyj EUR", "Buy Me a Coffee / inne kraje"]],
      teamTitle: "Kim jesteśmy?",
      teamAlt: "Siarhiej Huń i Natalia Tiuliupova",
      teamText: [
        "Jesteśmy parą Białorusinów, którzy musieli wyjechać ze swojego kraju. Siarhiej Huń był więźniem politycznym, a Natalia Tiuliupova również doświadczała w ojczyźnie prześladowań politycznych.",
        "Kupiliśmy opuszczone siedlisko w lesie na Podlasiu. Stary dom łatwiej byłoby rozebrać, ale chcemy zachować jego charakter i przywrócić temu miejscu życie.",
        "Siarhiej pracuje z drewnem, buduje i odnawia domy. W Białorusi miał kurnik na ponad 600 kur, a za sobą ma ponad 10 starych domów, którym pomógł wrócić do życia. Natalia uruchamia projekty, buduje komunikację, gromadzi ludzi wokół idei i zamienia chaos w czytelny system.",
        "Marzymy o zbudowaniu ekowioski - miejsca siły, do którego ludzie z różnych krajów będą mogli przyjechać, odpocząć, popracować rękami, żyć bliżej natury i dotknąć żywej kultury białoruskiej.",
      ],
      joinTitle: "Stań się częścią narodzin MROJA",
      joinText: "Aby siedlisko szybciej ożyło, potrzebujemy wsparcia. Nawet 1 eur pomoże stworzyć miejsce, do którego ludzie będą mogli przyjechać po ciszę, oddech i ludzkie ciepło.",
      donation: [["Wesprzyj PLN", "Zrzutka / Polska"], ["Wesprzyj EUR", "Buy Me a Coffee / inne kraje"]],
      contactsTitle: "Kontakt",
      copyright: "© Copyright 2026",
    },
  };

  const dict = dictionaries[lang] || dictionaries.en;

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

  function setPairText(selector, pair) {
    setText(`${selector} strong`, pair[0]);
    setText(`${selector} small`, pair[1]);
  }

  function applyTranslations() {
    document.documentElement.lang = dict.htmlLang;
    document.title = dict.title;
    const ogTitle = dict.ogTitle || dict.title;
    const ogDescription = dict.ogDescription || dict.description;
    const twitterTitle = dict.twitterTitle || ogTitle;
    const twitterDescription = dict.twitterDescription || ogDescription;

    document.querySelector('meta[name="description"]')?.setAttribute("content", dict.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", dict.canonical);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", ogDescription);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", dict.canonical);
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", "https://mroja.me/assets/og-mroja.jpg");
    document.querySelector('meta[name="twitter:card"]')?.setAttribute("content", "summary_large_image");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", twitterTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", twitterDescription);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", "https://mroja.me/assets/og-mroja.jpg");

    setText(".mobile-header-button", dict.nav[4]);
    setText(".header-button", dict.nav[4]);
    setText(".nav > a:nth-of-type(1)", dict.nav[0]);
    setText(".nav > a:nth-of-type(2)", dict.nav[1]);
    setText(".nav > a:nth-of-type(3)", dict.nav[2]);
    setText(".nav > a:nth-of-type(4)", dict.nav[3]);
    setText(".mobile-menu-nav > a:nth-of-type(1)", dict.nav[0]);
    setText(".mobile-menu-nav > a:nth-of-type(2)", dict.nav[1]);
    setText(".mobile-menu-nav > a:nth-of-type(3)", dict.nav[2]);
    setText(".mobile-menu-nav > a:nth-of-type(4)", dict.nav[4]);
    setText(".mobile-menu-nav > a:nth-of-type(5)", dict.nav[3]);

    setHTML("#hero-title", dict.heroTitle);
    setText(".hero-subtitle-desktop .hero-subtitle-line:nth-child(1)", dict.heroDesktop[0]);
    setText(".hero-subtitle-desktop .hero-subtitle-line:nth-child(2)", dict.heroDesktop[1]);
    setText(".hero-subtitle-mobile span:nth-child(1)", dict.heroMobile[0]);
    setText(".hero-subtitle-mobile span:nth-child(2)", dict.heroMobile[1]);
    setText(".hero-actions .button-gold span", dict.heroJoin);
    setText(".hero-actions .button-glass span", dict.heroLearn);

    setText("#about-title", dict.aboutTitle);
    setText(".about-section-heading p", dict.aboutSubtitle);
    dict.aboutCards.forEach(([title, text], index) => {
      const card = `.about-section-card:nth-child(${index + 1})`;
      setText(`${card} h3`, title);
      setText(`${card} p`, text);
    });

    setText("#audience-title", dict.audienceTitle);
    setText(".audience-section-heading p", dict.audienceSubtitle);
    dict.audienceCards.forEach(([title, text], index) => {
      const card = `.audience-card:nth-child(${index + 1})`;
      setText(`${card} h3`, title);
      setText(`${card} p`, text);
    });

    setText("#gallery-title", dict.galleryTitle);

    setText("#mission-title", dict.missionTitle);
    setText(".mission-card-lead", dict.missionLead);
    dict.missionPoints.forEach((text, index) => {
      setText(`.mission-points article:nth-child(${index + 1}) h3`, text);
    });
    setText(".mission-accent", dict.missionAccent);

    setText("#restoration-title", dict.stagesTitle);
    document.querySelectorAll("[data-card]").forEach((card, index) => {
      const item = dict.stages[index];
      if (!item) return;
      card.querySelector("h3").textContent = item.title;
      card.querySelector("p").textContent = item.text;
      const meta = card.querySelector(".stage-card-meta");
      if (meta) {
        meta.innerHTML = item.meta
          .map(([label, value, accent]) => `<span><strong>${label}:</strong> ${accent ? `<em>${value}</em>` : value}</span>`)
          .join("");
      }
    });

    setPairText(".stage-support-button-dark .stage-support-text", dict.stageSupport[0]);
    setPairText(".stage-support-button-light .stage-support-text", dict.stageSupport[1]);

    setText("#team-title", dict.teamTitle);
    const teamImage = document.querySelector(".about-us-photo");
    if (teamImage) teamImage.alt = dict.teamAlt;
    dict.teamText.forEach((text, index) => {
      setText(`.about-us-copy p:nth-child(${index + 1})`, text);
    });

    setText("#join-title", dict.joinTitle);
    setText(".join-inner > p", dict.joinText);
    setPairText(".join-actions .donation-pill-dark .donation-pill-text", dict.donation[0]);
    setPairText(".join-actions .donation-pill-light .donation-pill-text", dict.donation[1]);
    setText(".mobile-support-pill-primary span", dict.donation[0][0]);
    setText(".mobile-support-pill-primary small", dict.donation[0][1]);
    setText(".mobile-support-pill-light span", dict.donation[1][0]);
    setText(".mobile-support-pill-light small", dict.donation[1][1]);

    setText("#contacts-title", dict.contactsTitle);
    setText(".copyright-section p", dict.copyright);
  }

  function updateLanguageSwitch() {
    const hrefs = { en: "/", ru: "/ru/", by: "/by/", pl: "/pl/" };
    document.querySelectorAll("[data-language-option]").forEach((link) => {
      const target = link.dataset.languageOption || "en";
      link.textContent = target.toUpperCase();
      link.href = hrefs[target] || "/";
      const isActive = target === lang;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
      link.addEventListener("click", () => {
        try {
          localStorage.setItem("preferredLanguage", target);
        } catch (error) {}
      });
    });
  }

  applyTranslations();
  updateLanguageSwitch();
})();
