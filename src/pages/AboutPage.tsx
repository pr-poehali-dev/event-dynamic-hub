import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';

const D = '#242940';

const timeline = [
  { year: '1996', text: 'Первая выставка Hi-Fi & High-End Show прошла в Москве. 12 участников, 400 посетителей.' },
  { year: '2001', text: 'Выставка переезжает в формат многоэтажного отеля — каждый номер становится демо-залом.' },
  { year: '2008', text: 'Рекорд посещаемости: более 8 000 гостей за три дня. Впервые добавлен раздел портативного аудио.' },
  { year: '2015', text: 'Запуск выставки в Санкт-Петербурге. Расширение географии по России.' },
  { year: '2019', text: 'Учреждена премия Top High End — награда за выдающиеся продукты по мнению экспертного жюри.' },
  { year: '2024', text: 'Выставка расширяется до четырёх городов: добавляются Екатеринбург и весенняя сессия в Москве.' },
];

const team = [
  { name: 'Ирина Недумова', role: 'Генеральный директор' },
  { name: 'Вячеслав Золотарев', role: 'Технический директор' },
  { name: 'Ирина Дельвина', role: 'Руководитель выставки' },
  { name: 'Юлия Логинова', role: 'PR' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderMain />

      {/* HERO */}
      <div style={{ background: D }} className="py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">О проекте</p>
          <h1
            className="text-white font-light m-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            О выставке
          </h1>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-light m-0 mb-6" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Главное событие<br />индустрии звука
            </h2>
            <p className="text-sm font-light text-[#6a6e80] leading-relaxed m-0 mb-4">
              HI FI SHOW — крупнейшая в России выставка Hi-Fi и High-End аудиовизуальной техники. Ежегодно тысячи меломанов, профессионалов отрасли и просто любителей хорошего звука собираются в одном месте, чтобы услышать лучшее, что создано в мире аудио.
            </p>
            <p className="text-sm font-light text-[#6a6e80] leading-relaxed m-0">
              Формат выставки уникален: экспозиция размещается в номерах и залах отеля, что создаёт камерную атмосферу и позволяет каждому участнику создать идеальные условия для демонстрации своих систем.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['30+', 'лет истории'],
              ['120+', 'брендов-участников'],
              ['10 000+', 'посетителей в год'],
              ['4', 'города России'],
            ].map(([num, label]) => (
              <div key={label} className="border border-[#e8e8ec] p-6">
                <div className="font-light mb-1" style={{ fontSize: '2.5rem', color: D, letterSpacing: '-0.02em' }}>{num}</div>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* МИССИЯ */}
        <div className="border-l-4 pl-8 mb-20" style={{ borderColor: D }}>
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8890a8] mb-3">Миссия</p>
          <p
            className="font-light m-0"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', color: D, lineHeight: 1.5, letterSpacing: '0.02em' }}
          >
            Создать пространство, где производители встречают своих покупателей, где эксперты делятся знаниями, а любители открывают для себя новый уровень звука.
          </p>
        </div>

        {/* ИСТОРИЯ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            История
          </h2>
          <div className="relative">
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-[#e8e8ec]" />
            <div className="space-y-0 divide-y divide-[#e8e8ec]">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-8 py-6">
                  <div
                    className="min-w-[52px] text-right font-bold text-sm shrink-0"
                    style={{ color: D }}
                  >
                    {t.year}
                  </div>
                  <div className="relative pl-6">
                    <div
                      className="absolute left-0 top-1.5 w-2.5 h-2.5 border-2 bg-white rounded-full"
                      style={{ borderColor: D, transform: 'translateX(-50%)' }}
                    />
                    <p className="text-sm font-light text-[#6a6e80] m-0">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* КОМАНДА */}
        <div className="mb-16">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Команда
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
            {team.map((m) => (
              <div key={m.name} className="border-r border-b border-[#e8e8ec] p-7">
                <div
                  className="w-12 h-12 flex items-center justify-center text-white font-semibold text-lg mb-4"
                  style={{ background: D }}
                >
                  {m.name[0]}
                </div>
                <p className="text-sm font-semibold m-0 mb-1" style={{ color: D }}>{m.name}</p>
                <p className="text-xs font-light text-[#8890a8] m-0">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ОРГАНИЗАТОР */}
        <div className="border border-[#e8e8ec] p-8 md:p-10">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#8890a8] mb-3">Организатор</p>
          <h3 className="font-semibold m-0 mb-3 text-xl tracking-wide uppercase" style={{ color: D }}>ООО «Мидэкспо»</h3>
          <p className="text-sm font-light text-[#6a6e80] max-w-2xl m-0">
            Компания «Мидэкспо» специализируется на организации профессиональных выставок в сфере потребительской электроники и аудиовизуальной техники с 1996 года. За эти годы мы выстроили уникальную экосистему, объединяющую ведущих мировых производителей с российской аудиторией.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}