import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import BrandsTicker from '@/components/layout/BrandsTicker';
import { events, news, getNextEvent, getEventStatus } from '@/data/events';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/files/dbd7ff40-fd1c-4162-bf40-8a4b5b9576c3.jpg';

const D = '#242940';

const statusLabel: Record<string, { text: string; bg: string; color: string }> = {
  current:   { text: 'Идёт сейчас', bg: '#e8f5e9', color: '#2e7d32' },
  soon:      { text: 'Скоро',       bg: D,         color: '#fff'    },
  upcoming:  { text: 'Регистрация', bg: '#f0f0f4',  color: D        },
  announced: { text: 'Анонс',       bg: '#f0f0f4',  color: D        },
};

export default function Index() {
  const next = getNextEvent();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242940]">
      <HeaderMain />

      {/* ── HERO ── */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img src={HERO_IMG} alt="HI FI SHOW" className="w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(36,41,64,0.88) 0%, rgba(36,41,64,0.55) 55%, rgba(36,41,64,0.15) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1220px] mx-auto px-6 w-full">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-5">
              Ближайшее мероприятие
            </p>
            <h1
              className="text-white font-light leading-[1.08] mb-4 m-0"
              style={{ fontSize: 'clamp(1.6rem, 5vw, 3.6rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              Выставка аудио и<br />видеотехники высокого класса
            </h1>
            <div className="w-16 h-px bg-white/40 my-5" />
            <p className="text-white font-semibold tracking-[0.12em] uppercase text-base mb-1">
              Москва, «Бородино Конгресс Отель»
            </p>
            <p className="text-white/70 font-light tracking-[0.1em] uppercase text-sm mb-8">
              23–25 Октября 2026
            </p>
            <Link
              to={`/event/${next.slug}#register`}
              className="inline-block px-10 py-3.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-white no-underline hover:opacity-80 transition-opacity border border-white/30 hover:border-white"
              style={{ background: D }}
            >
              Регистрация
            </Link>
          </div>
        </div>
      </section>

      <BrandsTicker
        exhibitionPartners={next.exhibitionPartners}
        mediaPartners={next.mediaPartners}
      />

      {/* ── 4 СОБЫТИЯ ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16 w-full">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8890a8] mb-2">Сезон 2026–2027</p>
            <h2 className="font-light m-0" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Мероприятия
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
          {events.map((ev) => {
            const st = getEventStatus(ev);
            const badge = statusLabel[st];
            return (
              <Link
                key={ev.id}
                to={`/event/${ev.slug}`}
                className={`group flex flex-col border-r border-b border-[#e8e8ec] p-7 no-underline transition-colors hover:bg-[#f7f7fa] ${
                  st === 'soon' || st === 'current' ? 'bg-[#f7f7fa]' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1"
                    style={{ background: badge.bg, color: badge.color }}
                  >
                    {badge.text}
                  </span>
                  <Icon
                    name="ArrowRight"
                    size={15}
                    className="text-[#c8cad6] group-hover:text-[#242940] group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-normal tracking-[0.2em] uppercase text-[#8890a8] m-0 mb-1">{ev.season}</p>
                  <h3
                    className="font-bold m-0 mb-3"
                    style={{ fontSize: '1.2rem', letterSpacing: '0.03em', color: D, textTransform: 'uppercase' }}
                  >
                    {ev.city}
                  </h3>
                  <p className="text-sm text-[#8890a8] font-normal m-0">{ev.dates}</p>
                  <p className="text-xs text-[#b0b3c6] font-light m-0 mt-1">{ev.venue}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── ЛЕНТА БРЕНДОВ ── */}
      <BrandsTicker />

      {/* ── НОВОСТИ ── */}
      <section className="max-w-[1220px] mx-auto px-6 py-16 w-full">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8890a8] mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Обновляется в реальном времени
            </p>
            <h2 className="font-light m-0" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Новости и анонсы
            </h2>
          </div>
          <a href="#" className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#8890a8] hover:text-[#242940] transition-colors no-underline">
            Все новости →
          </a>
        </div>

        <div className="divide-y divide-[#e8e8ec]">
          {news.map((n, i) => (
            <a key={i} href="#" className="group flex items-start gap-6 py-5 no-underline hover:bg-[#f7f7fa] -mx-3 px-3 transition-colors">
              <div className="hidden sm:block min-w-[90px] pt-0.5 text-right">
                <span className="text-[11px] font-light text-[#b0b3c6]">{n.date}</span>
              </div>
              <div className="w-px self-stretch bg-[#e8e8ec] hidden sm:block" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 border border-[#d0d3df]"
                    style={{ color: D }}
                  >
                    {n.tag}
                  </span>
                  <span className="text-[11px] text-[#b0b3c6] font-light">{n.city}</span>
                </div>
                <p className="text-sm font-normal m-0 group-hover:text-[#5a6080] transition-colors" style={{ color: D }}>
                  {n.title}
                </p>
              </div>
              <Icon
                name="ArrowRight"
                size={15}
                className="text-[#c8cad6] group-hover:text-[#242940] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-all duration-200"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ── ПОДПИСКА ── */}
      <div style={{ background: D }}>
        <div className="max-w-[1220px] mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white font-light m-0 mb-2"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Не пропустите событие<br />в вашем городе
            </h2>
            <p className="text-white/50 text-sm font-light m-0">Анонсы, программа и состав участников — первыми.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-0 w-full md:w-auto md:min-w-[420px]">
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="flex-1 h-12 px-5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-7 text-[12px] font-semibold tracking-[0.14em] uppercase bg-white text-[#242940] hover:bg-white/90 transition-colors whitespace-nowrap border-0 cursor-pointer"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}