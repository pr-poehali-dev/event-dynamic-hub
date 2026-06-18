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
    participants: [
      {
        company: 'Балтик Аудио',
        site: '#',
        description: 'Ведущий петербургский салон Hi-Fi техники с 15-летней историей. Представляет британские и скандинавские бренды.',
        brands: [
          { name: 'KEF', site: 'https://kef.com' },
          { name: 'Cambridge Audio', site: 'https://cambridgeaudio.com' },
        ],
      },
      {
        company: 'Вектор Звука',
        site: '#',
        description: 'Петербургский интегратор аудиосистем. Специализация — референсное стерео и многоканальные системы.',
        brands: [
          { name: 'Dynaudio', site: 'https://dynaudio.com' },
          { name: 'Marantz', site: 'https://marantz.com' },
        ],
      },
    ],
    program: [
      { time: '11:00', title: 'Открытие выставки', room: 'Главный зал' },
      { time: '13:00', title: 'Лекция: «Акустика помещения и её влияние на звук»', speaker: 'Михаил Петров', room: 'Зал A' },
      { time: '15:30', title: 'Мастер-класс: «Виниловый проигрыватель своими руками»', room: 'Зал B' },
    ],
    rooms: [
      { room: '201', companies: ['Балтик Аудио'], brands: ['KEF', 'Cambridge Audio'] },
      { room: '202', companies: ['Вектор Звука'], brands: ['Dynaudio', 'Marantz'] },
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
    participants: [],
    program: [],
    rooms: [],
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
    participants: [],
    program: [],
    rooms: [],
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
  { tag: 'Билеты', date: '15 июня 2026', title: 'Открыта ранняя регистрация на все четыре события сезона', city: 'Все города' },
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
