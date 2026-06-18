import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const D = '#242940';

const pressReleases = [
  { date: '17 июня 2026', title: 'HI FI SHOW Москва-Осень 2026: состав участников и программа', size: '340 КБ' },
  { date: '10 июня 2026', title: 'HI FI SHOW открывает регистрацию на все четыре события сезона', size: '210 КБ' },
  { date: '1 апреля 2026', title: 'Итоги выставки HI FI SHOW Москва-Весна 2026', size: '580 КБ' },
  { date: '15 ноября 2025', title: 'Итоги выставки HI FI SHOW Санкт-Петербург 2025', size: '420 КБ' },
];

const publications = [
  { source: 'Stereo & Video', date: 'Июнь 2026', title: 'HI FI SHOW 2026: чего ждать от главной выставки осени' },
  { source: 'Салон AV', date: 'Май 2026', title: 'Предварительный обзор участников московской выставки' },
  { source: 'STEREO.RU', date: 'Апрель 2026', title: 'Репортаж с весенней выставки в Москве' },
  { source: 'Hi-Fi News Russia', date: 'Декабрь 2025', title: 'Итоги года: лучшие дебюты на выставках Hi Fi Show' },
];

const downloads = [
  { label: 'Логотип HI FI SHOW (SVG)', icon: 'Image', size: '12 КБ' },
  { label: 'Пресс-кит 2026 (PDF)', icon: 'FileText', size: '4.2 МБ' },
  { label: 'Фото с выставки 2025 (ZIP)', icon: 'Archive', size: '180 МБ' },
  { label: 'Баннеры для партнёров (ZIP)', icon: 'Layout', size: '8.5 МБ' },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderMain />

      <div style={{ background: D }} className="py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Пресс-центр</p>
          <h1
            className="text-white font-light m-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            Медиа
          </h1>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        {/* АККРЕДИТАЦИЯ */}
        <div className="border-l-4 pl-8 mb-20" style={{ borderColor: D }}>
          <h2 className="font-light m-0 mb-3" style={{ fontSize: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Аккредитация СМИ
          </h2>
          <p className="text-sm font-light text-[#6a6e80] max-w-xl m-0 mb-5">
            Журналисты и блогеры с аудиторией от 5 000 подписчиков могут получить бесплатную аккредитацию. Заявки принимаются за 14 дней до начала выставки.
          </p>
          <a
            href="mailto:press@hifishow.ru"
            className="inline-block px-8 py-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-white no-underline hover:opacity-80 transition-opacity"
            style={{ background: D }}
          >
            Запросить аккредитацию
          </a>
        </div>

        {/* ПРЕСС-РЕЛИЗЫ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Пресс-релизы
          </h2>
          <div className="divide-y divide-[#e8e8ec]">
            {pressReleases.map((r, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center gap-6 py-5 no-underline hover:bg-[#f7f7fa] -mx-3 px-3 transition-colors"
              >
                <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: '#f0f0f4' }}>
                  <Icon name="FileText" size={16} style={{ color: D }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-normal m-0 group-hover:text-[#5a6080] transition-colors" style={{ color: D }}>{r.title}</p>
                  <p className="text-xs font-light text-[#8890a8] m-0 mt-0.5">{r.date}</p>
                </div>
                <span className="text-[11px] font-light text-[#b0b3c6] shrink-0">{r.size}</span>
                <Icon name="Download" size={15} className="text-[#c8cad6] group-hover:text-[#242940] shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* ПУБЛИКАЦИИ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Публикации о выставке
          </h2>
          <div className="divide-y divide-[#e8e8ec]">
            {publications.map((p, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-start gap-6 py-5 no-underline hover:bg-[#f7f7fa] -mx-3 px-3 transition-colors"
              >
                <div className="hidden sm:block min-w-[130px] shrink-0 pt-0.5 text-right">
                  <span
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase px-2 py-0.5 border border-[#d0d3df]"
                    style={{ color: D }}
                  >
                    {p.source}
                  </span>
                </div>
                <div className="w-px self-stretch bg-[#e8e8ec] hidden sm:block shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-normal m-0 group-hover:text-[#5a6080] transition-colors" style={{ color: D }}>{p.title}</p>
                  <p className="text-xs font-light text-[#8890a8] m-0 mt-0.5">{p.date}</p>
                </div>
                <Icon name="ArrowRight" size={15} className="text-[#c8cad6] group-hover:text-[#242940] mt-0.5 shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* ГАЛЕРЕЯ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Фотогалерея
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#f0f0f4] border border-[#e8e8ec] hover:border-[#242940] transition-colors cursor-pointer flex items-center justify-center group"
              >
                <Icon name="Image" size={24} className="text-[#c8cad6] group-hover:text-[#8890a8] transition-colors" />
              </div>
            ))}
          </div>
          <p className="text-sm text-[#8890a8] font-light mt-5">Фотоматериалы с прошлых выставок. Для коммерческого использования — запросите разрешение.</p>
        </div>

        {/* СКАЧАТЬ МАТЕРИАЛЫ */}
        <div>
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Скачать материалы
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {downloads.map((d) => (
              <a
                key={d.label}
                href="#"
                className="group flex items-center gap-4 border border-[#e8e8ec] p-5 no-underline hover:border-[#242940] transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: '#f0f0f4' }}>
                  <Icon name={d.icon as 'Image'} size={18} style={{ color: D }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold m-0" style={{ color: D }}>{d.label}</p>
                  <p className="text-xs font-light text-[#8890a8] m-0 mt-0.5">{d.size}</p>
                </div>
                <Icon name="Download" size={16} className="text-[#c8cad6] group-hover:text-[#242940] shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
