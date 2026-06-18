import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';

const D = '#242940';

const nominees = [
  { category: 'Лучший усилитель', winner: 'McIntosh MA12000', brand: 'McIntosh Laboratory', country: 'США' },
  { category: 'Лучшая акустическая система', winner: 'Focal Utopia III', brand: 'Focal', country: 'Франция' },
  { category: 'Лучший ЦАП', winner: 'dCS Vivaldi One', brand: 'dCS', country: 'Великобритания' },
  { category: 'Лучший виниловый проигрыватель', winner: 'Linn LP12 Klimax', brand: 'Linn', country: 'Великобритания' },
  { category: 'Лучшее портативное устройство', winner: 'Astell&Kern A&ultima SP3000', brand: 'Astell&Kern', country: 'Южная Корея' },
];

const jury = [
  { name: 'Александр Ростов', role: 'Главный редактор, Stereo & Video' },
  { name: 'Игорь Вильнер', role: 'Аудиокритик, Audiophile Magazine' },
  { name: 'Михаил Коган', role: 'Президент Российской аудиофильской ассоциации' },
  { name: 'Елена Самойлова', role: 'Hi-Fi эксперт, STEREO.RU' },
];

export default function AwardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderMain />

      {/* HERO */}
      <div style={{ background: D }} className="py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Специальный раздел</p>
          <h1
            className="text-white font-light m-0 mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            Премия<br />Top High End
          </h1>
          <div className="w-14 h-px bg-white/30 my-6" />
          <p className="text-white/60 font-light max-w-xl text-base m-0">
            Ежегодная премия за выдающиеся достижения в области Hi-Fi и High-End аудиотехники. Победители определяются независимым жюри из ведущих аудиоэкспертов страны.
          </p>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        {/* ПОБЕДИТЕЛИ */}
        <div className="mb-20">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8890a8] mb-3">Сезон 2025–2026</p>
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Победители
          </h2>

          <div className="divide-y divide-[#e8e8ec]">
            {nominees.map((n, i) => (
              <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="sm:min-w-[280px]">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8890a8] m-0 mb-1">
                    {n.category}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold m-0" style={{ color: D }}>{n.winner}</p>
                  <p className="text-sm text-[#8890a8] font-light m-0 mt-0.5">{n.brand} · {n.country}</p>
                </div>
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center text-sm"
                  style={{ background: '#f5e96a', color: D, fontWeight: 700 }}
                  title="Победитель"
                >
                  ★
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* КРИТЕРИИ */}
        <div className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-light m-0 mb-6" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Критерии оценки
            </h2>
            <div className="space-y-4">
              {[
                ['Звуковые характеристики', 'Точность воспроизведения, динамика, детализация, сцена.'],
                ['Инженерные решения', 'Оригинальность конструкции, применение новых технологий.'],
                ['Соотношение цена/качество', 'Оправданность стоимости в контексте класса устройства.'],
                ['Эргономика и дизайн', 'Удобство управления, качество исполнения, эстетика.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-l-2 pl-5" style={{ borderColor: D }}>
                  <p className="text-sm font-semibold m-0" style={{ color: D }}>{title}</p>
                  <p className="text-sm font-light text-[#8890a8] m-0 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-light m-0 mb-6" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Жюри
            </h2>
            <div className="divide-y divide-[#e8e8ec]">
              {jury.map((j) => (
                <div key={j.name} className="py-4">
                  <p className="text-sm font-semibold m-0" style={{ color: D }}>{j.name}</p>
                  <p className="text-xs font-light text-[#8890a8] m-0 mt-0.5">{j.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-[#e8e8ec] p-10 text-center">
          <h3 className="font-light m-0 mb-3" style={{ fontSize: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Номинировать устройство
          </h3>
          <p className="text-sm font-light text-[#8890a8] max-w-sm mx-auto mb-6 m-0">
            Любой участник выставки может подать заявку на номинирование устройства. Приём заявок до 1 октября 2026.
          </p>
          <a
            href="/contacts"
            className="inline-block px-10 py-3 text-[12px] font-semibold tracking-[0.16em] uppercase text-white no-underline hover:opacity-80 transition-opacity"
            style={{ background: D }}
          >
            Подать заявку
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
