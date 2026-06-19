import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { news } from '@/data/events';

const D = '#242940';

const allNews = [
  ...news,
  { tag: 'Итоги', date: '10 июня 2026', title: 'Итоги выставки HI FI SHOW Москва-Весна 2026: рекордная посещаемость', city: 'Москва · Весна' },
  { tag: 'Участники', date: '5 июня 2026', title: 'Sonus faber и Luxman впервые выступят совместно на одной площадке', city: 'Санкт-Петербург' },
  { tag: 'Анонс', date: '1 июня 2026', title: 'HI FI SHOW Екатеринбург 2026: полный список участников опубликован', city: 'Екатеринбург' },
  { tag: 'Пресса', date: '28 мая 2026', title: 'Stereo & Video — официальный медиапартнёр всех четырёх выставок сезона', city: 'Все города' },
  { tag: 'Программа', date: '20 мая 2026', title: 'Мастер-классы и лекции: опубликована деловая программа Санкт-Петербурга', city: 'Санкт-Петербург' },
];

const tags = ['Все', 'Анонс', 'Участники', 'Программа', 'Итоги', 'Пресса', 'Регистрация'];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderMain />

      {/* HERO */}
      <section className="border-b border-[#e8e8ec] bg-[#f7f7fa]">
        <div className="max-w-[1220px] mx-auto px-6 py-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#8890a8] mb-3">HI FI & HIGH END SHOW</p>
          <h1 className="m-0 font-light" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.05em', textTransform: 'uppercase', color: D }}>
            Новости
          </h1>
        </div>
      </section>

      {/* FILTER */}
      <div className="border-b border-[#e8e8ec] bg-white sticky top-[148px] z-40">
        <div className="max-w-[1220px] mx-auto px-6 flex gap-1 overflow-x-auto py-3">
          {tags.map(tag => (
            <button
              key={tag}
              className="px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap border border-[#e8e8ec] text-[#8890a8] hover:border-[#242940] hover:text-[#242940] transition-colors cursor-pointer"
              style={{ background: 'transparent' }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* NEWS LIST */}
      <main className="flex-1">
        <div className="max-w-[1220px] mx-auto px-6 py-14">
          <div className="divide-y divide-[#e8e8ec]">
            {allNews.map((n, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-start gap-6 py-6 no-underline hover:bg-[#f7f7fa] -mx-3 px-3 transition-colors"
              >
                <div className="hidden sm:block min-w-[110px] pt-0.5 text-right shrink-0">
                  <span className="text-[11px] font-light text-[#b0b3c6]">{n.date}</span>
                </div>
                <div className="w-px self-stretch bg-[#e8e8ec] hidden sm:block shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2 py-0.5 border border-[#d0d3df]"
                      style={{ color: D }}
                    >
                      {n.tag}
                    </span>
                    {n.city && (
                      <span className="text-[10px] font-light text-[#b0b3c6] tracking-wider">{n.city}</span>
                    )}
                  </div>
                  <p className="text-base font-normal m-0 group-hover:text-[#5a6080] transition-colors leading-snug" style={{ color: D }}>
                    {n.title}
                  </p>
                  <span className="text-[11px] font-light text-[#b0b3c6] sm:hidden mt-1 block">{n.date}</span>
                </div>
                <Icon name="ArrowRight" size={15} className="text-[#c8cad6] group-hover:text-[#242940] mt-1 shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}