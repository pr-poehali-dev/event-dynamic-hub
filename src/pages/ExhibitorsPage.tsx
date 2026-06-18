import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const D = '#242940';

const benefits = [
  {
    icon: 'Users',
    title: 'Целевая аудитория',
    text: 'Тысячи платёжеспособных меломанов, дилеров и прессы — за три дня в одном месте.',
  },
  {
    icon: 'Volume2',
    title: 'Живая демонстрация',
    text: 'Отдельный номер или зал — идеальная среда для честного прослушивания вашей системы.',
  },
  {
    icon: 'TrendingUp',
    title: 'Продажи и контракты',
    text: 'Прямой контакт с конечными покупателями и дилерами ускоряет принятие решений.',
  },
  {
    icon: 'Newspaper',
    title: 'Медиапокрытие',
    text: 'Ведущие аудиоиздания страны освещают выставку. Ваш продукт — в центре внимания прессы.',
  },
];

const packages = [
  {
    name: 'Стандарт',
    price: 'от 80 000 ₽',
    features: [
      'Стандартный номер отеля',
      '2 пропуска для сотрудников',
      'Упоминание в каталоге',
      'Размещение логотипа на сайте',
    ],
  },
  {
    name: 'Расширенный',
    price: 'от 150 000 ₽',
    accent: true,
    features: [
      'Улучшенный номер или мини-сьют',
      '4 пропуска для сотрудников',
      'Расширенное описание в каталоге',
      'Логотип на сайте и в соцсетях',
      'Упоминание в пресс-релизах',
    ],
  },
  {
    name: 'Премиум',
    price: 'от 300 000 ₽',
    features: [
      'Сьют или конференц-зал',
      '8 пропусков для сотрудников',
      'Спонсорский блок в каталоге',
      'Баннер в зоне регистрации',
      'Слот в программе мероприятий',
      'Пресс-конференция на площадке',
    ],
  },
];

const steps = [
  { num: '01', title: 'Оставьте заявку', text: 'Заполните форму ниже или напишите нам на почту. Мы свяжемся в течение одного рабочего дня.' },
  { num: '02', title: 'Выберите пакет', text: 'Менеджер подберёт подходящий формат участия и ответит на вопросы об условиях.' },
  { num: '03', title: 'Подпишите договор', text: 'Заключаем договор, фиксируем место и условия. Вносится предоплата 50%.' },
  { num: '04', title: 'Подготовьтесь', text: 'Мы поможем с логистикой и подготовкой демо-зала. Монтаж — за день до открытия.' },
];

export default function ExhibitorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderMain />

      <div style={{ background: D }} className="py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Информация</p>
          <h1
            className="text-white font-light m-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            Участникам
          </h1>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        {/* ПРЕИМУЩЕСТВА */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Преимущества участия
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
            {benefits.map((b) => (
              <div key={b.title} className="border-r border-b border-[#e8e8ec] p-7">
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: '#f0f0f4' }}>
                  <Icon name={b.icon as 'Users'} size={18} style={{ color: D }} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.06em] uppercase m-0 mb-3" style={{ color: D }}>{b.title}</h3>
                <p className="text-sm font-light text-[#6a6e80] m-0 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ПАКЕТЫ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Пакеты участия
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`border p-8 flex flex-col ${p.accent ? 'border-[#242940]' : 'border-[#e8e8ec]'}`}
              >
                {p.accent && (
                  <span className="self-start text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 text-white mb-4" style={{ background: D }}>
                    Популярный выбор
                  </span>
                )}
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] m-0 mb-2">{p.name}</p>
                <div className="font-light mb-6" style={{ fontSize: '1.8rem', color: D }}>{p.price}</div>
                <ul className="list-none p-0 m-0 space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-light" style={{ color: D }}>
                      <Icon name="Check" size={14} className="shrink-0 mt-0.5" style={{ color: D }} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className="block text-center py-3 text-[12px] font-semibold tracking-[0.14em] uppercase no-underline transition-opacity hover:opacity-80"
                  style={p.accent ? { background: D, color: '#fff' } : { border: `1px solid ${D}`, color: D }}
                >
                  Оставить заявку
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* КАК СТАТЬ УЧАСТНИКОМ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Как стать участником
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
            {steps.map((s) => (
              <div key={s.num} className="border-r border-b border-[#e8e8ec] p-7">
                <div className="font-light text-4xl mb-4" style={{ color: '#d0d3df' }}>{s.num}</div>
                <h3 className="text-sm font-semibold tracking-[0.06em] uppercase m-0 mb-3" style={{ color: D }}>{s.title}</h3>
                <p className="text-sm font-light text-[#6a6e80] m-0 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ФОРМА ЗАЯВКИ */}
        <div id="apply" className="border border-[#e8e8ec] p-8 md:p-12">
          <h2 className="font-light m-0 mb-2" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Заявка на участие
          </h2>
          <p className="text-sm font-light text-[#8890a8] mb-8 m-0">Заполните форму — менеджер свяжется с вами в течение одного рабочего дня.</p>

          <form className="grid md:grid-cols-2 gap-5 max-w-2xl">
            {[
              { label: 'Компания *', placeholder: 'Название компании', type: 'text' },
              { label: 'Контактное лицо *', placeholder: 'Имя и фамилия', type: 'text' },
              { label: 'E-mail *', placeholder: 'your@company.com', type: 'email' },
              { label: 'Телефон', placeholder: '+7 (___) ___-__-__', type: 'tel' },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-11 px-4 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors bg-white"
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">Комментарий</label>
              <textarea
                rows={4}
                placeholder="Бренды, которые планируете представить, пожелания по площади..."
                className="w-full px-4 py-3 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors resize-none bg-white"
              />
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <input type="checkbox" id="agree" className="mt-0.5 cursor-pointer" />
              <label htmlFor="agree" className="text-xs text-[#8890a8] font-light cursor-pointer">
                Согласен(а) на обработку персональных данных в соответствии с{' '}
                <a href="#" className="underline hover:text-[#242940]">политикой конфиденциальности</a>
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="h-12 px-12 text-[12px] font-semibold tracking-[0.16em] uppercase text-white hover:opacity-80 transition-opacity border-0 cursor-pointer"
                style={{ background: D }}
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
