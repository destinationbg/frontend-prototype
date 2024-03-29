const messages = {
  about: {
    title: 'За проекта',
    description: 'Ние изграждаме този уебсайт напълно доброволно.',
  },
  search: {
    title: 'Търсене',
    description: 'Може да търсите както по имена на забележителности, така и по туристически райони, общини и категории.',
  },
  category: {
    subtitle: 'Категория',
  },
  categories: {
    title: 'Категории',
    subtitle: 'Впусни се в ново приключение',
    description: 'Влез в очарователния свят на България с история и природна красота. Нашите категории те канят да изследваш многото съкровища на страната, от древни руини до зашеметяващи природни пейзажи.',
  },
  subcategories: {
    title: 'Подкатегории',
  },
  contact: {
    title: 'Контакти',
    description: 'Ние изграждаме този уебсайт заедно с помощта на хора като теб. Ако си запален по историята и културата на България, ще се радваме да допринесеш за нашия проект. Твоят принос ще помогне да направим този проект още по-вълнуващ и ангажиращ за обществеността.',
    form: {
      title: 'Пишете ни',
      label: {
        name: 'Име',
        email: 'Имейл',
        subject: 'Заглавие',
        message: 'Въведете Вашето съобщение тук...',
      },
      result: {
        success: 'Вашето съобщение е изпратено успешно към нас!',
        error: 'Възникна грешка и Вашето съобщение не беше изпратено.',
      },
      button: 'Изпращане',
    },
  },
  error: {
    title: 'Грешка 404 - страницата не съществува',
    message: 'Страницата, която се опитвате да достъпите, не може да бъде намерена!',
    button: 'Назад към сайта',
  },
  homepage: {
    title: 'Начало',
    slogan: {
      title: 'България - красива и магична дестинация за всеки пътешественик',
      description: 'Най-подробният дигитален каталог на забележителности в България, съдържащ авторски снимки и богата историческа информация.',
      descriptions: {
        v0: 'Копривщица е исторически град с добре запазена архитектура от 19 век и традиционни български обичаи.',
        v1: 'България е дом на над 20 000 исторически и културни паметника, включително древни тракийски гробници, средновековни крепости и османски джамии.',
        v2: 'България е дом на над 50 природни парка и резервати, включително Природен парк Рилски манастир и Национален парк Пирин, като и двата са обект на световното наследство на ЮНЕСКО.',
        v3: 'България е дом на над 50 минерални извора, много от които използват натурални минерални води за терапевтични цели.',
        v4: 'България е дом на най-старото златно съкровище в света, Варненският некропол, датиращ от 4500 г. пр. н. е.',
        v5: 'В България се намира Розовата долина, където се произвежда световноизвестното българско розово масло.',
        v6: 'България е известна с традиционното си народно изкуство, включително грънчарство, дърворезба и производство на текстил.',
        v7: 'Несебър е древен град на брега на Черно море, известен със своята добре запазена средновековна архитектура и обект на световното наследство на ЮНЕСКО.',
        v8: 'Пловдив има добре запазен стар град, който датира от римския период и е обект на световното наследство на ЮНЕСКО.',
        v9: 'Велико Търново е бил столица на Второто българско царство и предлага поглед към средновековната история на страната.',
        v10: 'Рилският манастир, основан през 10 век, е един от най-важните културни и духовни обекти в страната и обект на световното наследство на ЮНЕСКО.',
        v11: 'Планините Пирин, Рила и Стара планина са популярни дестинации за туризъм, ски и алпинизъм.',
        v12: 'България има богата история на тракийската цивилизация, с много археологически обекти като Тракийската гробница в Казанлък, обект на световното наследство на ЮНЕСКО.',
        v13: 'България има разнообразна гама от културни фестивали и събития през цялата година, като Международния фестивал на маскарадните игри Сурва.',
        v14: 'Средновековната крепост Белоградчик, разположена в северозападна България, предлага поглед към военната история на страната.',
        v15: 'Античният град Сердика, сега известен като София, е бил важен римски град и столица на провинция Дакия Средиземноморска.',
        v16: 'Асеновата крепост предлага поглед към средновековната история и военната архитектура на страната, разположена в Родопите',
        v17: 'Средновековният град Мелник, разположен в Пирин планина, предлага поглед към средновековната история и архитектура на страната.',
        v18: 'Древният град Одесос, сега известен като Варна, е бил важно римско пристанище и център на търговия и култура.',
        v19: 'България играе ключова роля в разпространението на християнството в Източна Европа, с много древни църкви и манастири в цялата страна.',
      },
      button: 'Виж забележителностите',
    },
    locations: {
      featured: {
        title: 'Най-популярните',
        description: 'Избери забележителност измежду най-популярните, които нашите потребители посещават в този момент.',
      },
      categories: {
        title: 'Избери от категория',
        description: 'Открий някои от най-зрелищните места и паметници в България.',
        viewAllCategories: 'Всички {n} категории',
      },
    },
    destinations: {
      title: 'Популярни туристически райони',
      description: 'Посети емблематични и уникални забележителности, които определят културата и историята на районите в България.',
      locations_count: '<strong>{count}</strong> локации в района',
    },
  },
  place: {
    subtitle: 'Забележителност',
    buttons: {
      wantToVisit: 'Искам да посетя',
      map: {
        show: 'Покажи локацията на карта',
        hide: 'Скрий картата',
        coordinates: 'GPS координати',
      },
      favorite: {
        make: 'Добави в любими',
        undo: 'Махни от любими',
      },
      share: 'Сподели',
    },
    visitors: {
      score: '0 посетители | 1 посетител | {n} посетители',
      describe: 'Това е броят на нашите потребители, които са посетили тази локация.',
    },
    reviews: {
      text: '(няма ревюта) | (1 ревю) | ({n} ревюта)',
      title: 'Ревюта',
      description: 'Защото твоето мнение е от значение!',
      stars: '1 звезда | {n} звезди',
      addReview: 'Разкажи твоята история',
    },
    weather: {
      cloudy: 'облачно {temperature} {unit}',
    },
    unesco: {
      label: 'ЮНЕСКО',
      title: 'Тази забележителност е част от културното наследство на ЮНЕСКО.',
    },
    photography: {
      author: 'Фотограф: {author}',
      more: 'Виж всички снимки',
    },
    contents: {
      about: 'Относно',
      aiGenerated: 'Текстът е изцяло генериран от изкуствен интелект и е възможно да съдържа доста грешки. Ако желаеш да го коригираш, можеш да го направиш чрез нашето <a href="{repo}" target="blank">GitHub хранилище</a>.',
      copyrights: 'Цялото текстово съдържание на тази страница е предоставено напълно доброволно от потребителите на сайта чрез нашето <a href="{repo}" target="blank">GitHub хранилище</a> и ние не носим отговорност за авторските права върху него.',
      author: 'Автор на съдържанието е | Автори на съдържанието са',
    },
    listenAudio: 'Слушай текста под формата на аудио',
  },
  places: {
    title: 'Забележителности',
    subtitle: 'Потопи се в наследството',
    description: 'Открий красотата и наследството на България. Разгледай нейните най-емблематични забележителности, всяка от които показва богатото културно наследство на страната, архитектурната красота и природните чудеса.',
    map: {
      button: {
        details: 'Детайли',
      },
    },
  },
  privacy: {
    title: 'Лични данни',
  },
  region: {
    subtitle: 'Туристически район',
  },
  regions: {
    title: 'Туристически райони',
    subtitle: 'Открий идеалната си дестинация',
    description: 'Тръгни на пътешествие из спиращите дъха туристически райони на България и се потопи в богатата история на страната, разнообразната култура и зашеметяващата природна красота.',
    municipality: 'Община {title}',
    places: 'Няма добавени забележителности. | 1 забележителност | {n} забележителности',
    searchPlaceholder: 'Търсене на община...',
    showLabels: 'Показване имената на районите върху картата',
  },
  municipality: {
    title: 'Община',
  },
  municipalities: {
    title: 'Общини',
  },
  terms: {
    title: 'Общи условия',
  },
  cookies: {
    title: 'Политика за бисквитките',
  },
  user: {
    rate: 'Оцени със звезда',
    location: 'Локация',
    website: 'Личен уебсайт',
    email: 'Имейл',
    photos: 'Снимки',
    reviews: 'Ревюта',
  },
}

export default messages
