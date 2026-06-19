import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import HeaderEvent from '@/components/layout/HeaderEvent';
import Footer from '@/components/layout/Footer';
import BrandsTicker from '@/components/layout/BrandsTicker';
import { events } from '@/data/events';
import type { RoomEntry } from '@/data/events';

const D = '#242940';

const TABS = [
  { id: 'about',        label: 'О выставке' },
  { id: 'participants', label: 'Участники и бренды' },
  { id: 'program',      label: 'Программа' },
  { id: 'media',        label: 'Фото и видео' },
  { id: 'subscribe',    label: 'Подписка' },
];

function NavigationModal({ rooms, onClose }: { rooms: RoomEntry[]; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ type: 'room' | 'search'; data: RoomEntry[] } | null>(null);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const byRoom = rooms.filter(r => r.room.toLowerCase() === q);
    if (byRoom.length) { setResults({ type: 'room', data: byRoom }); return; }
    const byName = rooms.filter(r =>
      r.companies.some(c => c.toLowerCase().includes(q)) ||
      r.brands.some(b => b.toLowerCase().includes(q))
    );
    setResults({ type: 'search', data: byName });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 px-4" style={{ background: 'rgba(36,41,64,0.7)' }}>
      <div className="bg-white w-full max-w-xl shadow-2xl">
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#e8e8ec]">
          <h3 className="m-0 text-base font-semibold tracking-[0.08em] uppercase" style={{ color: D }}>
            Навигация по выставке
          </h3>
          <button onClick={onClose} className="text-[#8890a8] hover:text-[#242940] transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="px-7 py-6">
          <p className="text-sm text-[#8890a8] font-light mb-4 m-0">
            Введите название компании, бренда или номер комнаты
          </p>
          <div className="flex gap-0">
            <input
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setResults(null); }}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Например: McIntosh или 101"
              className="flex-1 h-11 px-4 text-sm border border-[#e8e8ec] border-r-0 outline-none focus:border-[#242940] transition-colors"
            />
            <button
              onClick={handleSearch}
              className="h-11 px-6 text-[12px] font-semibold tracking-[0.14em] uppercase text-white transition-opacity hover:opacity-80 whitespace-nowrap border-0 cursor-pointer"
              style={{ background: D }}
            >
              Найти
            </button>
          </div>

          {results && (
            <div className="mt-6">
              {results.data.length === 0 ? (
                <p className="text-sm text-[#8890a8] font-light">Ничего не найдено.</p>
              ) : (
                <div className="divide-y divide-[#e8e8ec]">
                  {results.data.map((r) => (
                    <div key={r.room} className="py-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[11px] font-semibold tracking-[0.2em] uppercase px-3 py-1 text-white"
                          style={{ background: D }}
                        >
                          Комната {r.room}
                        </span>
                      </div>
                      <p className="text-sm m-0 mb-1" style={{ color: D }}>
                        <span className="font-semibold">Компании: </span>
                        {r.companies.join(', ')}
                      </p>
                      <p className="text-sm m-0 text-[#8890a8] font-light">
                        <span className="font-normal text-[#242940]">Бренды: </span>
                        {r.brands.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find(e => e.slug === slug);
  const [activeTab, setActiveTab] = useState('about');
  const [navOpen, setNavOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-4" style={{ color: D }}>Мероприятие не найдено</h2>
          <Link to="/" className="text-sm text-[#8890a8] hover:text-[#242940] no-underline">← На главную</Link>
        </div>
      </div>
    );
  }

  const grouped: Record<string, typeof event.participants> = {};
  event.participants.forEach(p => {
    const letter = p.company[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(p);
  });

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderEvent eventTitle={event.title} eventSlug={event.slug} />

      {/* ── HERO ── */}
      <section className="relative h-[540px] md:h-[620px] overflow-hidden">
        <img src={event.heroImage} alt={event.title} className="w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(36,41,64,0.88) 0%, rgba(36,41,64,0.5) 55%, rgba(36,41,64,0.1) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1220px] mx-auto px-6 w-full">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-4">
              {event.season} · {event.city}
            </p>
            <h1
              className="text-white font-light leading-[1.08] m-0 mb-3"
              style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3.2rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              Выставка аудио и<br />видеотехники высокого класса
            </h1>
            <p className="text-white/60 font-light text-sm tracking-widest italic mb-1">
              Это будет по-настоящему масштабно и зрелищно!
            </p>
            <div className="w-14 h-px bg-white/30 my-5" />
            <p className="text-white font-semibold tracking-[0.1em] uppercase text-sm mb-1">{event.venue}</p>
            <p className="text-white/60 font-light tracking-[0.08em] text-sm mb-8">{event.dates} · {event.address}</p>
            <div className="flex flex-wrap gap-3" id="register">
              <a
                href="#register"
                className="inline-block px-9 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-white no-underline hover:opacity-80 transition-opacity"
                style={{ background: D }}
              >
                Зарегистрироваться
              </a>
              <button
                onClick={() => setNavOpen(true)}
                className="px-9 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
                style={{ background: 'transparent' }}
              >
                Навигация по выставке
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <div className="border-b border-[#e8e8ec] bg-white sticky top-[148px] z-40">
        <div className="max-w-[1220px] mx-auto px-6 flex overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#242940] text-[#242940]'
                  : 'border-transparent text-[#8890a8] hover:text-[#242940]'
              }`}
              style={{ background: 'transparent' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1220px] mx-auto px-6 py-14 w-full flex-1">

        {/* О ВЫСТАВКЕ */}
        {activeTab === 'about' && (
          <div>
            <h2 className="font-light m-0 mb-10" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              О выставке
            </h2>
            <div className="grid md:grid-cols-2 gap-14 mb-14">
              <div>
                <p className="text-sm font-light text-[#6a6e80] leading-relaxed m-0 mb-5">
                  {event.about.description}
                </p>
                <div className="mt-6">
                  <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#8890a8] mb-4">Особенности</p>
                  <ul className="list-none p-0 m-0 space-y-3">
                    {event.about.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm font-light" style={{ color: D }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: D }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: event.about.floors, label: 'Этажей' },
                    { num: event.about.exhibitors, label: 'Участников' },
                    { num: `${(event.about.visitors / 1000).toFixed(0)}K+`, label: 'Посетителей' },
                  ].map(({ num, label }) => (
                    <div key={label} className="border border-[#e8e8ec] p-5 text-center">
                      <div className="font-light mb-1" style={{ fontSize: '2rem', color: D, lineHeight: 1 }}>{num}</div>
                      <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8890a8]">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="border border-[#e8e8ec] p-6 flex flex-col gap-3">
                  {[
                    { icon: 'Calendar', label: 'Даты', value: event.dates },
                    { icon: 'MapPin',   label: 'Место', value: event.venue },
                    { icon: 'Navigation', label: 'Адрес', value: event.address },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon name={icon as 'Calendar'} size={15} className="mt-0.5 shrink-0" style={{ color: D }} />
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8890a8] mr-2">{label}</span>
                        <span className="text-sm font-light" style={{ color: D }}>{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="#register"
                    onClick={() => setActiveTab('about')}
                    className="px-8 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-white no-underline hover:opacity-80 transition-opacity"
                    style={{ background: D }}
                  >
                    Зарегистрироваться
                  </a>
                  <button
                    onClick={() => setNavOpen(true)}
                    className="px-8 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase border border-[#242940] hover:bg-[#f7f7fa] transition-colors cursor-pointer"
                    style={{ background: 'transparent', color: D }}
                  >
                    Навигация
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* УЧАСТНИКИ */}
        {activeTab === 'participants' && (
          <div>
            <h2 className="font-light m-0 mb-10" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Участники и бренды
            </h2>
            {event.participants.length === 0 ? (
              <p className="text-[#8890a8] font-light">Список участников будет опубликован ближе к дате выставки.</p>
            ) : (
              Object.keys(grouped).sort().map(letter => (
                <div key={letter} className="mb-10">
                  <div
                    className="text-2xl font-bold tracking-[0.1em] mb-4 pb-2 border-b-2"
                    style={{ color: D, borderColor: D }}
                  >
                    {letter}
                  </div>
                  <div className="divide-y divide-[#e8e8ec]">
                    {grouped[letter].map(p => (
                      <div key={p.company} className="py-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <a
                              href={p.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base font-semibold tracking-[0.06em] uppercase no-underline hover:text-[#5a6080] transition-colors"
                              style={{ color: D }}
                            >
                              {p.company}
                            </a>
                            <p className="text-sm font-light text-[#6a6e80] mt-2 m-0 max-w-2xl">{p.description}</p>
                          </div>
                          <div className="md:min-w-[220px]">
                            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">Бренды</p>
                            <div className="flex flex-wrap gap-2">
                              {p.brands.map(b => (
                                <a
                                  key={b.name}
                                  href={b.site}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1 border border-[#d0d3df] no-underline hover:border-[#242940] hover:text-[#242940] transition-colors text-[#5a6080]"
                                >
                                  {b.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* ПРОГРАММА */}
        {activeTab === 'program' && (
          <div>
            <h2 className="font-light m-0 mb-10" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Программа
            </h2>
            {event.program.length === 0 ? (
              <p className="text-[#8890a8] font-light">Программа будет опубликована ближе к дате выставки.</p>
            ) : (
              <div className="divide-y divide-[#e8e8ec]">
                {event.program.map((p, i) => (
                  <div key={i} className="py-5 flex gap-6 items-start">
                    <div className="min-w-[60px]">
                      <span className="text-base font-bold" style={{ color: D }}>{p.time}</span>
                    </div>
                    <div className="w-px self-stretch bg-[#e8e8ec]" />
                    <div className="flex-1">
                      <p className="text-base font-normal m-0" style={{ color: D }}>{p.title}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {p.speaker && (
                          <span className="text-[11px] text-[#8890a8] font-light flex items-center gap-1">
                            <Icon name="User" size={12} /> {p.speaker}
                          </span>
                        )}
                        {p.room && (
                          <span className="text-[11px] text-[#8890a8] font-light flex items-center gap-1">
                            <Icon name="MapPin" size={12} /> {p.room}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* МЕДИА */}
        {activeTab === 'media' && (
          <div>
            <h2 className="font-light m-0 mb-10" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Фото и видео
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#f0f0f4] flex items-center justify-center border border-[#e8e8ec] hover:border-[#242940] transition-colors cursor-pointer group"
                >
                  <Icon name="Image" size={28} className="text-[#c8cad6] group-hover:text-[#8890a8] transition-colors" />
                </div>
              ))}
            </div>
            <p className="text-sm text-[#8890a8] font-light mt-6">Фотоматериалы будут добавлены после проведения выставки.</p>
          </div>
        )}

        {/* ПОДПИСКА */}
        {activeTab === 'subscribe' && (
          <div className="max-w-xl">
            <h2 className="font-light m-0 mb-4" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Подписка на рассылку
            </h2>
            <p className="text-[#8890a8] font-light mb-8">
              Получайте новости о составе участников, программе мероприятий и специальных предложениях для посетителей.
            </p>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full h-11 px-4 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">E-mail *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-11 px-4 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors"
                />
              </div>
              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" id="consent" className="mt-0.5 cursor-pointer" />
                <label htmlFor="consent" className="text-xs text-[#8890a8] font-light cursor-pointer">
                  Я согласен(а) на получение информационных сообщений в соответствии с{' '}
                  <a href="#" className="underline hover:text-[#242940]">политикой конфиденциальности</a>
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 h-12 px-10 text-[12px] font-semibold tracking-[0.16em] uppercase text-white hover:opacity-80 transition-opacity self-start cursor-pointer border-0"
                style={{ background: D }}
              >
                Подписаться
              </button>
            </form>
          </div>
        )}
      </div>

      <BrandsTicker
        exhibitionPartners={event.exhibitionPartners}
        mediaPartners={event.mediaPartners}
      />
      <Footer />

      {navOpen && <NavigationModal rooms={event.rooms} onClose={() => setNavOpen(false)} />}
    </div>
  );
}