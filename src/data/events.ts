export interface Participant {
  company: string;
  site: string;
  description: string;
  brands: { name: string; site: string }[];
}

export interface Program {
  time: string;
  title: string;
  speaker?: string;
  room?: string;
}

export interface RoomEntry {
  room: string;
  companies: string[];
  brands: string[];
}

export interface EventAbout {
  description: string;
  highlights: string[];
  floors: number;
  exhibitors: number;
  visitors: number;
}

export interface Event {
  id: string;
  slug: string;
  city: string;
  season: string;
  title: string;
  venue: string;
  dates: string;
  dateFrom: Date;
  dateTo: Date;
  address: string;
  heroImage: string;
  about: EventAbout;
  participants: Participant[];
  program: Program[];
  rooms: RoomEntry[];
}

export const events: Event[] = [
  {
    id: 'moscow-autumn',
    slug: 'moscow-autumn',
    city: 'Москва',
    season: 'Осень',
    title: 'Москва · Осень 2026',
    venue: '«Бородино Конгресс Отель»',
    dates: '23–25 октября 2026',
    dateFrom: new Date('2026-10-23'),
    dateTo: new Date('2026-10-25'),
    address: 'Москва, Русаковская ул., 13',
    heroImage: 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/eb0c05a3-9381-4339-9d60-08eb4dea949c.jpg',
    about: {
      description: 'Флагманское мероприятие сезона — осенняя московская выставка собирает крупнейший состав участников и самую широкую аудиторию. Девять этажей «Бородино Конгресс Отеля» превращаются в настоящий город звука: каждый номер — отдельный демо-зал с уникальной системой.',
      highlights: [
        'Более 120 брендов из 20 стран',
        'Российские и мировые премьеры новинок',
        'Вечерние концерты Jazz & Vinyl',
        'Вручение премии Top High End',
        'Зона портативного аудио и наушников',
      ],
      floors: 9,
      exhibitors: 65,
      visitors: 5000,
    },
    participants: [
      {
        company: 'АудиоМания',
        site: 'https://audiomania.ru',
        description: 'Крупнейший российский интернет-магазин Hi-Fi и High-End аудиотехники. На выставке представит акустические системы, усилители и источники ведущих мировых брендов.',
        brands: [
          { name: 'Focal', site: 'https://focal.com' },
          { name: 'Naim', site: 'https://naimaudio.com' },
        ],
      },
      {
        company: 'Аудиосфера',
        site: 'https://audiosfera.ru',
        description: 'Авторизованный дистрибьютор премиальной аудио- и видеотехники в России. Специализация — референсное двухканальное воспроизведение.',
        brands: [
          { name: 'McIntosh', site: 'https://mcintoshlabs.com' },
          { name: 'Sonus faber', site: 'https://sonusfaber.com' },
        ],
      },
      {
        company: 'Вектор',
        site: '#',
        description: 'Поставщик профессионального и бытового аудиооборудования. Представляет решения для построения домашних кинотеатров высокого уровня.',
        brands: [
          { name: 'Bowers & Wilkins', site: 'https://bowerswilkins.com' },
          { name: 'Rotel', site: 'https://rotel.com' },
        ],
      },
      {
        company: 'Гармония Звука',
        site: '#',
        description: 'Эксклюзивный дистрибьютор аналоговых источников воспроизведения в России. Коллекция виниловых проигрывателей и фонокорректоров.',
        brands: [
          { name: 'Pro-Ject', site: 'https://project-audio.com' },
          { name: 'Ortofon', site: 'https://ortofon.com' },
        ],
      },
      {
        company: 'Домашние Технологии',
        site: '#',
        description: 'Интегратор систем умного дома и High-End аудио. Демонстрирует полностью интегрированные мультирумные аудиорешения.',
        brands: [
          { name: 'Linn', site: 'https://linn.co.uk' },
          { name: 'Sonos', site: 'https://sonos.com' },
        ],
      },
    ],
    program: [
      { time: '11:00', title: 'Открытие выставки. Приветственное слово организаторов', room: 'Главный зал' },
      { time: '12:00', title: 'Мастер-класс: «Как выбрать первый Hi-Fi усилитель»', speaker: 'Алексей Никитин', room: 'Зал A' },
      { time: '13:30', title: 'Public Talk: «Аналог vs Цифра — вечный спор»', speaker: 'Дискуссия', room: 'Зал B' },
      { time: '15:00', title: 'Квиз: «Угадай бренд по звуку»', room: 'Зал C' },
      { time: '16:30', title: 'Лекция: «История меломана: от кассеты до стримера»', speaker: 'Игорь Соколов', room: 'Зал A' },
      { time: '18:00', title: 'Вечерний сеанс: Jazz & Vinyl', room: 'Главный зал' },
    ],
    rooms: [
      { room: '101', companies: ['АудиоМания'], brands: ['Focal', 'Naim'] },
      { room: '102', companies: ['Аудиосфера'], brands: ['McIntosh', 'Sonus faber'] },
      { room: '103', companies: ['Вектор'], brands: ['Bowers & Wilkins', 'Rotel'] },
      { room: '201', companies: ['Гармония Звука'], brands: ['Pro-Ject', 'Ortofon'] },
      { room: '202', companies: ['Домашние Технологии'], brands: ['Linn', 'Sonos'] },
    ],
  },
  {
    id: 'spb',
    slug: 'spb',
    city: 'Санкт-Петербург',
    season: 'Ноябрь',
    title: 'Санкт-Петербург 2026',
    venue: 'Holiday Inn Московские ворота',
    dates: '21–23 ноября 2026',
    dateFrom: new Date('2026-11-21'),
    dateTo: new Date('2026-11-23'),
    address: 'Санкт-Петербург, Московский пр., 97А',
    heroImage: 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/3a78c91f-faf9-4d97-b809-3e3b199315a0.jpg',
    about: {
      description: 'Петербургская выставка отличается особой атмосферой: классическая архитектура Holiday Inn на Московском проспекте создаёт идеальный фон для прослушивания музыки высокого класса. Камерный формат позволяет уделить каждому гостю максимум внимания.',
      highlights: [
        'Акцент на британский и скандинавский Hi-Fi',
        'Специальная программа для меломанов',
        'Дегустация звука: слепое прослушивание',
        'Встречи с представителями брендов',
        'Зона винила и аналогового звука',
      ],
      floors: 5,
      exhibitors: 32,
      visitors: 2000,
    },
    participants: [
      {
        company: 'Балтик Аудио',
        site: '#',
        description: 'Ведущий петербургский салон Hi-Fi техники с 15-летней историей. Представляет британские и скандинавские бренды с фокусом на музыкальность и детальность звука.',
        brands: [
          { name: 'KEF', site: 'https://kef.com' },
          { name: 'Cambridge Audio', site: 'https://cambridgeaudio.com' },
        ],
      },
      {
        company: 'Вектор Звука',
        site: '#',
        description: 'Петербургский интегратор аудиосистем. Специализация — референсное стерео и многоканальные системы для требовательных слушателей.',
        brands: [
          { name: 'Dynaudio', site: 'https://dynaudio.com' },
          { name: 'Marantz', site: 'https://marantz.com' },
        ],
      },
      {
        company: 'Северная Акустика',
        site: '#',
        description: 'Дистрибьютор скандинавских и финских аудиобрендов в Северо-Западном регионе. Эксклюзивное представительство нескольких нишевых производителей.',
        brands: [
          { name: 'Amphion', site: 'https://amphion.fi' },
          { name: 'Auralic', site: 'https://auralic.com' },
        ],
      },
      {
        company: 'Аудио Эксперт',
        site: '#',
        description: 'Специализированный салон High-End техники в Санкт-Петербурге. Индивидуальный подбор и инсталляция аудиосистем любого уровня сложности.',
        brands: [
          { name: 'Accuphase', site: 'https://accuphase.com' },
          { name: 'Harbeth', site: 'https://harbeth.co.uk' },
        ],
      },
    ],
    program: [
      { time: '11:00', title: 'Торжественное открытие выставки', room: 'Холл 1-го этажа' },
      { time: '12:30', title: 'Лекция: «Акустика помещения и её влияние на звук»', speaker: 'Михаил Петров', room: 'Зал A' },
      { time: '14:00', title: 'Дегустация звука: слепое сравнение усилителей', speaker: 'Эксперты Балтик Аудио', room: 'Зал B' },
      { time: '15:30', title: 'Мастер-класс: «Виниловый проигрыватель: настройка и уход»', room: 'Зал C' },
      { time: '17:00', title: 'Public Talk: «Стриминг или физический носитель — что лучше?»', speaker: 'Дискуссия', room: 'Зал A' },
      { time: '19:00', title: 'Вечер классической музыки на Hi-Fi системах', room: 'Главный зал' },
    ],
    rooms: [
      { room: '201', companies: ['Балтик Аудио'], brands: ['KEF', 'Cambridge Audio'] },
      { room: '202', companies: ['Вектор Звука'], brands: ['Dynaudio', 'Marantz'] },
      { room: '301', companies: ['Северная Акустика'], brands: ['Amphion', 'Auralic'] },
      { room: '302', companies: ['Аудио Эксперт'], brands: ['Accuphase', 'Harbeth'] },
    ],
  },
  {
    id: 'moscow-spring',
    slug: 'moscow-spring',
    city: 'Москва',
    season: 'Весна',
    title: 'Москва · Весна 2027',
    venue: '«Бородино Конгресс Отель»',
    dates: '17–19 апреля 2027',
    dateFrom: new Date('2027-04-17'),
    dateTo: new Date('2027-04-19'),
    address: 'Москва, Русаковская ул., 13',
    heroImage: 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/2f50ffac-85f1-4019-aa6e-182deca61701.jpg',
    about: {
      description: 'Весенняя московская выставка — это особое настроение обновления и открытий. После зимнего перерыва индустрия собирается вновь, чтобы представить новинки первого квартала и анонсировать продукты, которые появятся летом и осенью.',
      highlights: [
        'Первые анонсы новинок сезона 2027',
        'Акцент на портативное аудио и наушники',
        'Специальный раздел сетевого стриминга',
        'Мастер-классы по настройке систем',
        'Встреча меломанов весеннего сезона',
      ],
      floors: 7,
      exhibitors: 45,
      visitors: 3000,
    },
    participants: [
      {
        company: 'АудиоМания',
        site: 'https://audiomania.ru',
        description: 'Традиционный участник весенней выставки. Представит новинки первого квартала 2027 года и специальные весенние предложения.',
        brands: [
          { name: 'Focal', site: 'https://focal.com' },
          { name: 'Naim', site: 'https://naimaudio.com' },
          { name: 'Devialet', site: 'https://devialet.com' },
        ],
      },
      {
        company: 'Мобильный Звук',
        site: '#',
        description: 'Специализированный магазин портативной аудиотехники высокого класса. Наушники, ЦАП-усилители и плееры топовых мировых брендов.',
        brands: [
          { name: 'Astell&Kern', site: 'https://astellnkern.com' },
          { name: 'Sennheiser', site: 'https://sennheiser.com' },
          { name: 'Audeze', site: 'https://audeze.com' },
        ],
      },
      {
        company: 'Цифровой Звук',
        site: '#',
        description: 'Дистрибьютор сетевых стримеров и цифровых источников. Специализация — интеграция Hi-Fi в современный цифровой быт.',
        brands: [
          { name: 'Roon', site: 'https://roonlabs.com' },
          { name: 'Auralic', site: 'https://auralic.com' },
        ],
      },
    ],
    program: [
      { time: '11:00', title: 'Открытие весенней выставки', room: 'Главный зал' },
      { time: '12:00', title: 'Презентация: «Новинки Hi-Fi 2027»', speaker: 'Редакция Stereo & Video', room: 'Зал A' },
      { time: '13:30', title: 'Мастер-класс: «Портативный High-End: реально ли?»', speaker: 'Артём Быков', room: 'Зал B' },
      { time: '15:00', title: 'Демо: стриминговые системы Roon vs. локальный файловый сервер', room: 'Зал C' },
      { time: '16:30', title: 'Лекция: «Наушники высокого класса: выбор и настройка»', speaker: 'Команда Мобильного Звука', room: 'Зал A' },
      { time: '18:00', title: 'Закрытое прослушивание для прессы', room: 'VIP-зал' },
    ],
    rooms: [
      { room: '101', companies: ['АудиоМания'], brands: ['Focal', 'Naim', 'Devialet'] },
      { room: '201', companies: ['Мобильный Звук'], brands: ['Astell&Kern', 'Sennheiser', 'Audeze'] },
      { room: '202', companies: ['Цифровой Звук'], brands: ['Roon', 'Auralic'] },
    ],
  },
  {
    id: 'ekb',
    slug: 'ekb',
    city: 'Екатеринбург',
    season: 'Июнь',
    title: 'Екатеринбург 2027',
    venue: 'Отель «Хаятт Ридженси»',
    dates: '12–14 июня 2027',
    dateFrom: new Date('2027-06-12'),
    dateTo: new Date('2027-06-14'),
    address: 'Екатеринбург, ул. Бориса Ельцина, 8',
    heroImage: 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/6f12c5a1-4e8c-43e7-aaea-5c62f1efeae8.jpg',
    about: {
      description: 'Екатеринбург — первый уральский город в истории HI FI SHOW. Столица Урала с её богатой промышленной и культурной историей становится новой точкой на карте российского аудиофильства. Современный «Хаятт Ридженси» обеспечит идеальные условия для демонстрации техники.',
      highlights: [
        'Дебютная выставка в Екатеринбурге',
        'Специальная программа для уральских меломанов',
        'Фокус на доступный High-End',
        'Семинары для начинающих аудиофилов',
        'Обменная зона винила',
      ],
      floors: 4,
      exhibitors: 28,
      visitors: 1500,
    },
    participants: [
      {
        company: 'Урал Аудио',
        site: '#',
        description: 'Первый специализированный Hi-Fi салон в Екатеринбурге. Открылся в 2020 году и быстро стал центром уральского аудиофильского сообщества.',
        brands: [
          { name: 'Dali', site: 'https://dali-speakers.com' },
          { name: 'Rega', site: 'https://rega.co.uk' },
        ],
      },
      {
        company: 'Звуковая Лаборатория',
        site: '#',
        description: 'Уральский дистрибьютор и инсталлятор Hi-Fi систем. Работает с корпоративными и частными клиентами по всему Уральскому федеральному округу.',
        brands: [
          { name: 'Arcam', site: 'https://arcam.co.uk' },
          { name: 'Monitor Audio', site: 'https://monitoraudio.com' },
        ],
      },
      {
        company: 'АудиоМания',
        site: 'https://audiomania.ru',
        description: 'Федеральный участник, представляющий интересы ведущих брендов в Екатеринбурге. Возможность живого прослушивания систем, обычно недоступных в регионе.',
        brands: [
          { name: 'Focal', site: 'https://focal.com' },
          { name: 'Bowers & Wilkins', site: 'https://bowerswilkins.com' },
        ],
      },
    ],
    program: [
      { time: '11:00', title: 'Торжественное открытие. Первая выставка в Екатеринбурге', room: 'Главный зал' },
      { time: '12:00', title: 'Семинар: «Hi-Fi с чего начать: практическое руководство»', speaker: 'Команда Урал Аудио', room: 'Зал A' },
      { time: '13:30', title: 'Демо: «Доступный High-End — миф или реальность?»', room: 'Зал B' },
      { time: '15:00', title: 'Мастер-класс: «Акустическая обработка комнаты своими руками»', speaker: 'Звуковая Лаборатория', room: 'Зал A' },
      { time: '16:30', title: 'Обменная зона: приносите свой винил', room: 'Лобби' },
      { time: '18:00', title: 'Закрытое прослушивание для участников и прессы', room: 'VIP-зал' },
    ],
    rooms: [
      { room: '101', companies: ['Урал Аудио'], brands: ['Dali', 'Rega'] },
      { room: '102', companies: ['Звуковая Лаборатория'], brands: ['Arcam', 'Monitor Audio'] },
      { room: '201', companies: ['АудиоМания'], brands: ['Focal', 'Bowers & Wilkins'] },
    ],
  },
];

export const brands = [
  'McIntosh', 'Bowers & Wilkins', 'Focal', 'Naim Audio', 'Marantz',
  'Sonus faber', 'Dynaudio', 'Pro-Ject', 'Audio-Technica', 'KEF',
  'Cambridge Audio', 'Accuphase', 'Luxman', 'Pass Labs', 'Linn',
];

export const news = [
  { tag: 'Анонс', date: '17 июня 2026', title: 'McIntosh представит флагманский усилитель MC3500 на московской выставке', city: 'Москва · Осень' },
  { tag: 'Программа', date: '17 июня 2026', title: 'Jazz & Rock Sound: вечерний концерт на виниле в главном зале', city: 'Москва · Осень' },
  { tag: 'Участники', date: '16 июня 2026', title: 'К выставке в Санкт-Петербурге присоединились ещё 14 брендов', city: 'Санкт-Петербург' },
  { tag: 'Регистрация', date: '15 июня 2026', title: 'Открыта ранняя регистрация на все четыре события сезона', city: 'Все города' },
  { tag: 'Пресса', date: '14 июня 2026', title: 'Журнал «Салон AV» — партнёр выставки HI FI SHOW 2026', city: 'Все города' },
  { tag: 'Анонс', date: '12 июня 2026', title: 'Focal представит новую линейку Utopia III на выставке в Москве', city: 'Москва · Осень' },
];

export function getNextEvent(): Event {
  const now = new Date();
  const upcoming = events.find(e => e.dateTo >= now);
  return upcoming ?? events[0];
}

export function getEventStatus(event: Event): 'current' | 'soon' | 'upcoming' | 'announced' {
  const now = new Date();
  if (event.dateFrom <= now && event.dateTo >= now) return 'current';
  const diff = event.dateFrom.getTime() - now.getTime();
  if (diff > 0 && diff < 60 * 24 * 3600 * 1000) return 'soon';
  if (event.participants.length > 0) return 'upcoming';
  return 'announced';
}
