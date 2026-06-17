import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/dbd7ff40-fd1c-4162-bf40-8a4b5b9576c3.jpg';

const EVENT_DATE = new Date('2026-10-09T10:00:00');

const cities = [
  {
    city: 'Москва · Осень',
    venue: 'Гостиница «Аэростар», 9 этажей',
    date: '9–11 октября 2026',
    status: 'Скоро',
    soon: true,
  },
  {
    city: 'Санкт-Петербург',
    venue: 'Holiday Inn Московские ворота',
    date: '21–23 ноября 2026',
    status: 'Регистрация',
    soon: false,
  },
  {
    city: 'Москва · Весна',
    venue: 'Гостиница «Аэростар»',
    date: '17–19 апреля 2027',
    status: 'Анонс',
    soon: false,
  },
  {
    city: 'Екатеринбург',
    venue: 'Отель «Хаятт Ридженси»',
    date: '12–14 июня 2027',
    status: 'Анонс',
    soon: false,
  },
];

const news = [
  {
    tag: 'АНОНС',
    time: '12 минут назад',
    title: 'McIntosh представит флагманский усилитель MC3500 на московской выставке',
    city: 'Москва · Осень',
  },
  {
    tag: 'ПРОГРАММА',
    time: '1 час назад',
    title: 'Jazz & Rock Sound: вечерний концерт на виниле в главном зале',
    city: 'Москва · Осень',
  },
  {
    tag: 'УЧАСТНИКИ',
    time: '3 часа назад',
    title: 'К выставке в Санкт-Петербурге присоединились ещё 14 брендов',
    city: 'Санкт-Петербург',
  },
  {
    tag: 'БИЛЕТЫ',
    time: 'сегодня',
    title: 'Открыта ранняя регистрация на все четыре события сезона',
    city: 'Все города',
  },
];

const marqueeBrands = [
  'McIntosh', 'Bowers & Wilkins', 'Focal', 'Naim', 'Marantz', 'Sonus faber',
  'Dynaudio', 'Pro-Ject', 'Audio-Technica', 'KEF', 'Cambridge Audio',
];

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

const Index = () => {
  const { d, h, m, s } = useCountdown(EVENT_DATE);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display font-700 text-xl tracking-[0.2em]">
            HI<span className="text-primary">FI</span>SHOW
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-500">
            {['Выставки', 'Участникам', 'Посетителям', 'Пресс-центр', 'О проекте'].map((i) => (
              <a key={i} href="#" className="hover:text-foreground transition-colors">{i}</a>
            ))}
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-600 rounded-full px-5">
            Купить билет
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="HI FI SHOW" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay" />
        </div>

        <div className="container relative z-10 pb-20 pt-32">
          <div className="flex items-center gap-2 text-primary text-sm font-600 tracking-widest mb-6 animate-float-up">
            <span className="live-dot" /> БЛИЖАЙШЕЕ СОБЫТИЕ · МОСКВА
          </div>
          <h1
            className="font-display font-700 uppercase leading-[0.9] text-balance animate-float-up"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', animationDelay: '0.1s' }}
          >
            Выставка<br />
            <span className="text-primary">High-End</span> аудио
          </h1>
          <p
            className="mt-6 max-w-xl text-lg text-muted-foreground animate-float-up"
            style={{ animationDelay: '0.2s' }}
          >
            Главное событие индустрии звука с 1996 года. Девять этажей премиальной
            акустики, винила и портативного аудио.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8 animate-float-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-4">
              {[['Дней', d], ['Часов', h], ['Минут', m], ['Секунд', s]].map(([label, val]) => (
                <div key={label as string} className="text-center">
                  <div className="font-display font-700 text-4xl md:text-5xl tabular-nums">
                    {String(val).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <div className="flex items-center gap-2 text-foreground font-500">
                <Icon name="Calendar" size={16} className="text-primary" /> 9–11 октября 2026
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Icon name="MapPin" size={16} className="text-primary" /> Гостиница «Аэростар», Москва
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-600 rounded-full px-8 h-12">
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary rounded-full px-8 h-12 font-500">
              <Icon name="Play" size={18} className="mr-2" /> Смотреть тизер
            </Button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-5 overflow-hidden bg-secondary/30">
        <div className="flex w-max animate-marquee">
          {[...marqueeBrands, ...marqueeBrands].map((b, i) => (
            <span key={i} className="font-display text-xl uppercase tracking-wider text-muted-foreground/60 px-8 flex items-center gap-8">
              {b} <span className="text-primary text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* CITIES */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-primary text-sm font-600 tracking-widest mb-3">ГЕОГРАФИЯ СЕЗОНА</div>
            <h2 className="font-display font-700 uppercase text-5xl md:text-6xl leading-none">Четыре города</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Выберите ближайшее к вам событие. Каждая выставка — со своей программой и составом участников.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cities.map((c, i) => (
            <div
              key={c.city}
              className={`group relative rounded-2xl p-6 flex flex-col justify-between min-h-[260px] border transition-all duration-300 hover:-translate-y-2 animate-float-up ${
                c.soon
                  ? 'bg-primary text-primary-foreground border-primary lg:scale-105 shadow-[0_20px_60px_-15px_hsl(35_92%_55%/0.5)]'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-600 uppercase tracking-widest px-3 py-1 rounded-full ${
                  c.soon ? 'bg-primary-foreground/15' : 'bg-secondary text-muted-foreground'
                }`}>
                  {c.soon && <span className="live-dot" />}{c.status}
                </span>
                <Icon name="ArrowUpRight" size={22} className="opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </div>
              <div>
                <h3 className={`font-display font-600 uppercase text-2xl leading-tight mb-3 ${c.soon ? '' : ''}`}>
                  {c.city}
                </h3>
                <div className={`text-sm font-500 ${c.soon ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                  {c.date}
                </div>
                <div className={`text-xs mt-1 ${c.soon ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {c.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE NEWS FEED */}
      <section className="container pb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="live-dot" />
          <h2 className="font-display font-700 uppercase text-4xl md:text-5xl">Лента событий</h2>
          <span className="text-xs uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1 ml-2">
            в реальном времени
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {news.map((n, i) => (
            <article
              key={i}
              className="group flex gap-5 items-start bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 animate-float-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name="Radio" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="text-primary font-600 tracking-widest">{n.tag}</span>
                  <span className="text-muted-foreground">{n.time}</span>
                </div>
                <h3 className="font-500 text-lg leading-snug group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
                  <Icon name="MapPin" size={13} /> {n.city}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-border bg-transparent hover:bg-secondary rounded-full px-8 h-12 font-500">
            Все новости <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-secondary/40 border border-border p-10 md:p-16 text-center">
          <div className="absolute inset-0 grain opacity-10" />
          <div className="relative">
            <Icon name="Mail" size={36} className="text-primary mx-auto mb-5" />
            <h2 className="font-display font-700 uppercase text-3xl md:text-5xl mb-4">
              Не пропустите событие в вашем городе
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Подпишитесь — и узнавайте об анонсах, программе и новых участниках первыми.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш e-mail"
                className="flex-1 h-12 rounded-full bg-background border border-border px-5 outline-none focus:border-primary transition-colors"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-600 rounded-full h-12 px-8">
                Подписаться
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-display font-700 text-2xl tracking-[0.2em] mb-3">
              HI<span className="text-primary">FI</span>SHOW
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Международная выставка High-End аудио. Организатор — «Мидэкспо», с 1996 года.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="space-y-2">
              <div className="font-600 mb-3">Навигация</div>
              {['Выставки', 'Участникам', 'Посетителям'].map((i) => (
                <a key={i} href="#" className="block text-muted-foreground hover:text-foreground">{i}</a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-600 mb-3">Контакты</div>
              <a href="#" className="block text-muted-foreground hover:text-foreground">Пресс-центр</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground">Мобильное приложение</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground">О проекте</a>
            </div>
          </div>
        </div>
        <div className="container py-5 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© 1996–2026 HI FI SHOW · Мидэкспо</span>
          <span>Москва · Санкт-Петербург · Екатеринбург</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
