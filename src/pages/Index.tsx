import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/dbd7ff40-fd1c-4162-bf40-8a4b5b9576c3.jpg';

const EVENT_DATE = new Date('2026-10-09T10:00:00');

const cities = [
  {
    city: 'Москва',
    label: 'Осень 2026',
    venue: 'Гостиница «Аэростар», 9 этажей',
    date: '9–11 октября 2026',
    status: 'Скоро',
    soon: true,
  },
  {
    city: 'Санкт-Петербург',
    label: 'Ноябрь 2026',
    venue: 'Holiday Inn Московские ворота',
    date: '21–23 ноября 2026',
    status: 'Регистрация',
    soon: false,
  },
  {
    city: 'Москва',
    label: 'Весна 2027',
    venue: 'Гостиница «Аэростар»',
    date: '17–19 апреля 2027',
    status: 'Анонс',
    soon: false,
  },
  {
    city: 'Екатеринбург',
    label: 'Июнь 2027',
    venue: 'Отель «Хаятт Ридженси»',
    date: '12–14 июня 2027',
    status: 'Анонс',
    soon: false,
  },
];

const news = [
  {
    tag: 'Анонс',
    date: '17 июня 2026',
    title: 'McIntosh представит флагманский усилитель MC3500 на московской выставке',
    city: 'Москва · Осень',
  },
  {
    tag: 'Программа',
    date: '17 июня 2026',
    title: 'Jazz & Rock Sound: вечерний концерт на виниле в главном зале',
    city: 'Москва · Осень',
  },
  {
    tag: 'Участники',
    date: '16 июня 2026',
    title: 'К выставке в Санкт-Петербурге присоединились ещё 14 брендов',
    city: 'Санкт-Петербург',
  },
  {
    tag: 'Билеты',
    date: '15 июня 2026',
    title: 'Открыта ранняя регистрация на все четыре события сезона',
    city: 'Все города',
  },
  {
    tag: 'Пресса',
    date: '14 июня 2026',
    title: 'Журнал «Салон AV» — партнёр выставки HI FI SHOW 2026',
    city: 'Все города',
  },
  {
    tag: 'Анонс',
    date: '12 июня 2026',
    title: 'Focal представит новую линейку Utopia III на выставке в Москве',
    city: 'Москва · Осень',
  },
];

const brands = [
  'McIntosh', 'Bowers & Wilkins', 'Focal', 'Naim Audio', 'Marantz',
  'Sonus faber', 'Dynaudio', 'Pro-Ject', 'Audio-Technica', 'KEF',
  'Cambridge Audio', 'Accuphase', 'Luxman', 'Pass Labs',
];

const navLinks = ['Выставки', 'Участникам', 'Посетителям', 'Пресс-центр', 'О проекте'];

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(target.getTime() - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(t);
  }, [target]);
  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  return { d, h, m, s };
}

const HES_DARK = '#242940';

const Index = () => {
  const { d, h, m, s } = useCountdown(EVENT_DATE);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#242940] overflow-x-hidden" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>

      {/* ── TOP BAR ── */}
      <div className="hidden md:block border-b border-[#e8e8ec] text-xs text-[#8890a8] py-2">
        <div className="max-w-[1220px] mx-auto px-6 flex justify-between items-center">
          <span>Международная выставка Hi-Fi &amp; High-End аппаратуры · с 1996 года</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#242940] transition-colors">EN</a>
            <span className="text-[#e8e8ec]">|</span>
            <a href="#" className="hover:text-[#242940] transition-colors">Пресс-центр</a>
            <span className="text-[#e8e8ec]">|</span>
            <a href="#" className="hover:text-[#242940] transition-colors">Контакты</a>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8ec]">
        <div className="max-w-[1220px] mx-auto px-6 flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <div
              className="flex flex-col items-center justify-center w-11 h-11 border-2"
              style={{ borderColor: HES_DARK }}
            >
              <span className="text-[10px] font-700 tracking-[0.15em] leading-none" style={{ color: HES_DARK }}>HI FI</span>
              <div className="w-full h-px my-[3px]" style={{ background: HES_DARK }} />
              <span className="text-[8px] font-300 tracking-[0.2em] leading-none" style={{ color: HES_DARK }}>SHOW</span>
            </div>
            <div>
              <div className="text-[13px] font-700 tracking-[0.22em] uppercase leading-none" style={{ color: HES_DARK }}>
                HI FI SHOW
              </div>
              <div className="text-[10px] font-300 tracking-[0.18em] uppercase text-[#8890a8] mt-0.5">
                Hi-Fi &amp; High-End
              </div>
            </div>
          </a>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-5 py-2 text-[13px] font-400 tracking-[0.08em] uppercase text-[#242940] hover:text-[#8890a8] transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-block px-6 py-2.5 text-[12px] font-600 tracking-[0.12em] uppercase text-white transition-opacity hover:opacity-80 no-underline"
              style={{ background: HES_DARK }}
            >
              Билеты
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name="Menu" size={22} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#e8e8ec] bg-white">
            {navLinks.map((link) => (
              <a key={link} href="#" className="block px-6 py-3 text-sm uppercase tracking-wider border-b border-[#f0f0f4] hover:bg-[#f7f7fa] no-underline" style={{ color: HES_DARK }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative">
        {/* image */}
        <div className="relative h-[560px] md:h-[680px] overflow-hidden">
          <img src={HERO_IMG} alt="HI FI SHOW" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(36,41,64,0.82) 0%, rgba(36,41,64,0.45) 55%, rgba(36,41,64,0.10) 100%)' }} />

          {/* hero content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1220px] mx-auto px-6 w-full">
              <p className="text-[11px] font-600 tracking-[0.28em] uppercase text-white/70 mb-5">
                Ближайшее мероприятие
              </p>
              <h1
                className="text-white font-300 leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', letterSpacing: '0.04em' }}
              >
                Выставка<br />
                Hi-Fi &amp; High-End<br />
                <span className="font-700">Москва · Осень</span>
              </h1>
              <p className="text-white/75 text-base font-300 mb-8 max-w-md">
                9–11 октября 2026 · Гостиница «Аэростар»<br />
                9 этажей · более 120 брендов
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="px-8 py-3 text-[12px] font-600 tracking-[0.14em] uppercase text-white no-underline hover:opacity-80 transition-opacity"
                  style={{ background: HES_DARK }}
                >
                  Зарегистрироваться
                </a>
                <a
                  href="#"
                  className="px-8 py-3 text-[12px] font-600 tracking-[0.14em] uppercase border border-white text-white no-underline hover:bg-white hover:text-[#242940] transition-colors"
                >
                  Программа
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN BAR */}
        <div style={{ background: HES_DARK }}>
          <div className="max-w-[1220px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] font-400 tracking-[0.2em] uppercase text-white/50 hidden sm:block">
              До открытия выставки
            </p>
            <div className="flex gap-6 md:gap-10">
              {[['Дней', d], ['Часов', h], ['Минут', m], ['Секунд', s]].map(([label, val]) => (
                <div key={label as string} className="text-center">
                  <div className="text-white font-700 tabular-nums" style={{ fontSize: '2rem', lineHeight: 1 }}>
                    {String(val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="hidden md:inline-block px-6 py-2.5 text-[11px] font-600 tracking-[0.14em] uppercase border border-white/30 text-white/70 hover:border-white hover:text-white transition-colors no-underline"
            >
              Купить билет →
            </a>
          </div>
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-[11px] font-600 tracking-[0.28em] uppercase text-[#8890a8] mb-3">Сезон 2026–2027</p>
            <h2 className="font-300 m-0" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Мероприятия
            </h2>
          </div>
          <a href="#" className="text-[12px] font-600 tracking-[0.14em] uppercase text-[#8890a8] hover:text-[#242940] transition-colors no-underline">
            Все мероприятия →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
          {cities.map((c) => (
            <a
              key={c.city + c.label}
              href="#"
              className={`group block border-r border-b border-[#e8e8ec] p-8 no-underline transition-colors hover:bg-[#f7f7fa] ${c.soon ? 'bg-[#f7f7fa]' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-[10px] font-700 tracking-[0.2em] uppercase px-3 py-1 ${
                    c.soon
                      ? 'text-white'
                      : 'text-[#8890a8] border border-[#e8e8ec]'
                  }`}
                  style={c.soon ? { background: HES_DARK } : {}}
                >
                  {c.status}
                </span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="text-[#c8cad6] group-hover:text-[#242940] transition-colors group-hover:translate-x-1 duration-200"
                />
              </div>

              <p className="text-[11px] font-400 tracking-[0.2em] uppercase text-[#8890a8] mb-1">{c.label}</p>
              <h3 className="font-700 m-0 mb-2" style={{ fontSize: '1.35rem', letterSpacing: '0.04em', color: HES_DARK }}>
                {c.city}
              </h3>
              <p className="text-sm text-[#8890a8] font-300 m-0 mt-3">{c.date}</p>
              <p className="text-xs text-[#b0b3c6] font-300 m-0 mt-1">{c.venue}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── BRANDS MARQUEE ── */}
      <div className="border-y border-[#e8e8ec] py-5 overflow-hidden bg-[#f7f7fa]">
        <div className="flex w-max animate-marquee">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-[12px] font-400 tracking-[0.22em] uppercase text-[#8890a8] px-8 flex items-center gap-8"
            >
              {b}<span className="text-[#c8cad6] text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── NEWS ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-[11px] font-600 tracking-[0.28em] uppercase text-[#8890a8] mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
              Обновляется в реальном времени
            </p>
            <h2 className="font-300 m-0" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Новости и анонсы
            </h2>
          </div>
          <a href="#" className="text-[12px] font-600 tracking-[0.14em] uppercase text-[#8890a8] hover:text-[#242940] transition-colors no-underline">
            Все новости →
          </a>
        </div>

        <div className="divide-y divide-[#e8e8ec]">
          {news.map((n, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-start gap-6 py-6 no-underline hover:bg-[#f7f7fa] -mx-4 px-4 transition-colors"
            >
              <div className="hidden sm:flex flex-col items-center pt-1 min-w-[80px]">
                <span className="text-[10px] font-600 tracking-[0.18em] uppercase text-[#8890a8]">{n.date.split(' ')[0]}</span>
                <span className="text-[10px] font-300 text-[#b0b3c6] tracking-wide">{n.date.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="w-px self-stretch bg-[#e8e8ec] hidden sm:block" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[10px] font-700 tracking-[0.18em] uppercase px-2 py-0.5 border"
                    style={{ color: HES_DARK, borderColor: '#c8cad6' }}
                  >
                    {n.tag}
                  </span>
                  <span className="text-[11px] text-[#b0b3c6] font-300">{n.city}</span>
                </div>
                <h4
                  className="font-400 m-0 group-hover:text-[#5a6080] transition-colors"
                  style={{ fontSize: '1rem', textTransform: 'none', letterSpacing: '0', color: HES_DARK }}
                >
                  {n.title}
                </h4>
              </div>
              <Icon
                name="ArrowRight"
                size={16}
                className="text-[#c8cad6] group-hover:text-[#242940] mt-1 shrink-0 transition-all group-hover:translate-x-1 duration-200"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <div style={{ background: HES_DARK }}>
        <div className="max-w-[1220px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white font-300 m-0 mb-2"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '0.04em' }}
            >
              Не пропустите событие<br />в вашем городе
            </h2>
            <p className="text-white/50 text-sm font-300 m-0">
              Анонсы, программа и состав участников — первыми.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-0 w-full md:w-auto md:min-w-[420px]">
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="flex-1 h-12 px-5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-7 text-[12px] font-600 tracking-[0.14em] uppercase bg-white text-[#242940] hover:bg-white/90 transition-colors whitespace-nowrap border-0 cursor-pointer"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#e8e8ec]">
        <div className="max-w-[1220px] mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex flex-col items-center justify-center w-9 h-9 border-2 shrink-0"
                style={{ borderColor: HES_DARK }}
              >
                <span className="text-[8px] font-700 tracking-[0.1em] leading-none" style={{ color: HES_DARK }}>HI FI</span>
                <div className="w-full h-px my-[2px]" style={{ background: HES_DARK }} />
                <span className="text-[7px] font-300 tracking-[0.15em] leading-none" style={{ color: HES_DARK }}>SHOW</span>
              </div>
              <div>
                <div className="text-[11px] font-700 tracking-[0.2em] uppercase" style={{ color: HES_DARK }}>HI FI SHOW</div>
                <div className="text-[9px] font-300 tracking-[0.15em] uppercase text-[#8890a8]">Hi-Fi & High-End</div>
              </div>
            </div>
            <p className="text-sm text-[#8890a8] font-300 leading-relaxed">
              Организатор — «Мидэкспо».<br />Выставка проводится с 1996 года.
            </p>
          </div>

          {[
            { title: 'Выставки', links: ['Москва · Осень', 'Санкт-Петербург', 'Москва · Весна', 'Екатеринбург'] },
            { title: 'Информация', links: ['Участникам', 'Посетителям', 'Пресс-центр', 'Мобильное приложение'] },
            { title: 'Компания', links: ['О проекте', 'История', 'Команда', 'Контакты'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-700 tracking-[0.22em] uppercase text-[#242940] m-0 mb-5">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#8890a8] font-300 hover:text-[#242940] transition-colors no-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e8e8ec]">
          <div className="max-w-[1220px] mx-auto px-6 py-5 flex flex-wrap justify-between gap-3 text-[11px] text-[#b0b3c6] font-300">
            <span>© 1996–2026 HI FI SHOW · Мидэкспо. Все права защищены.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#242940] transition-colors no-underline">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#242940] transition-colors no-underline">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
