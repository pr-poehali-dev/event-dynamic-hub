import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const D = '#242940';

const reasons = [
  {
    icon: 'Headphones',
    title: 'Услышать вживую',
    text: 'Никакое описание не заменит личного прослушивания. Сравните десятки систем в одном месте за один день.',
  },
  {
    icon: 'Users',
    title: 'Поговорить с экспертами',
    text: 'Представители брендов и дистрибьюторы готовы ответить на любые вопросы и помочь с выбором.',
  },
  {
    icon: 'GraduationCap',
    title: 'Узнать новое',
    text: 'Мастер-классы, лекции и public talk от ведущих аудиоэкспертов страны — в программе каждой выставки.',
  },
  {
    icon: 'Sparkles',
    title: 'Открыть для себя новинки',
    text: 'Многие бренды делают российские премьеры именно на HI FI SHOW — будьте первыми, кто их услышит.',
  },
];

const tickets = [
  { type: 'Стандартный', price: 'от 600 ₽', desc: 'Вход на все три дня выставки. Доступ во все залы.', features: ['Все три дня', 'Все залы', 'Программа мероприятий'] },
  { type: 'Ранний', price: 'от 400 ₽', desc: 'Скидка 30% при покупке за 30 дней до начала.', features: ['Все три дня', 'Все залы', 'Скидка 30%'], accent: true },
  { type: 'VIP', price: 'от 2 500 ₽', desc: 'Приоритетный вход, закрытые прослушивания, буклет участника.', features: ['Все три дня', 'Приоритетный вход', 'Закрытые сессии', 'Буклет'] },
];

const hotels = [
  { name: '«Бородино Конгресс Отель»', note: 'Место проведения (Москва)', distance: '0 м' },
  { name: 'Ibis Москва Центр Бауманская', note: 'Эконом-вариант рядом', distance: '800 м' },
  { name: 'Mercure Москва Бауманская', note: 'Комфорт-класс', distance: '1.2 км' },
];

export default function VisitorsPage() {
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
            Посетителям
          </h1>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        {/* ЗАЧЕМ ПОСЕЩАТЬ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Зачем посетить выставку
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-[#e8e8ec]">
            {reasons.map((r) => (
              <div key={r.title} className="border-r border-b border-[#e8e8ec] p-7">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ background: '#f0f0f4' }}
                >
                  <Icon name={r.icon as 'Headphones'} size={18} style={{ color: D }} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.06em] uppercase m-0 mb-3" style={{ color: D }}>{r.title}</h3>
                <p className="text-sm font-light text-[#6a6e80] m-0 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* БИЛЕТЫ */}
        <div className="mb-20">
          <h2 className="font-light m-0 mb-10" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Билеты
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {tickets.map((t) => (
              <div
                key={t.type}
                className={`border p-8 flex flex-col ${t.accent ? 'border-[#242940]' : 'border-[#e8e8ec]'}`}
              >
                {t.accent && (
                  <span
                    className="self-start text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 text-white mb-4"
                    style={{ background: D }}
                  >
                    Выгоднее всего
                  </span>
                )}
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] m-0 mb-2">{t.type}</p>
                <div className="font-light mb-3" style={{ fontSize: '2rem', color: D }}>{t.price}</div>
                <p className="text-sm font-light text-[#6a6e80] m-0 mb-6 flex-1">{t.desc}</p>
                <ul className="list-none p-0 m-0 space-y-2 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-light" style={{ color: D }}>
                      <Icon name="Check" size={14} className="shrink-0" style={{ color: D }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/event/moscow-autumn#register"
                  className="block text-center py-3 text-[12px] font-semibold tracking-[0.14em] uppercase no-underline transition-opacity hover:opacity-80"
                  style={t.accent ? { background: D, color: '#fff' } : { border: `1px solid ${D}`, color: D }}
                >
                  Купить
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* КАК ДОБРАТЬСЯ */}
        <div className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-light m-0 mb-6" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Как добраться
            </h2>
            <div className="space-y-4">
              {[
                { icon: 'Train', label: 'Метро', text: 'Станция «Бауманская» (синяя ветка), 5 минут пешком.' },
                { icon: 'Car', label: 'На машине', text: 'Парковка в отеле и на прилегающих улицах. Навигатор: Русаковская ул., 13.' },
                { icon: 'Bus', label: 'Наземный транспорт', text: 'Автобусы 40, 78, 171 — остановка «Русаковская улица».' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: '#f0f0f4' }}>
                    <Icon name={item.icon as 'Train'} size={16} style={{ color: D }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase m-0 mb-0.5" style={{ color: D }}>{item.label}</p>
                    <p className="text-sm font-light text-[#6a6e80] m-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-light m-0 mb-6" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Где остановиться
            </h2>
            <div className="divide-y divide-[#e8e8ec]">
              {hotels.map((h) => (
                <div key={h.name} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold m-0" style={{ color: D }}>{h.name}</p>
                    <p className="text-xs font-light text-[#8890a8] m-0 mt-0.5">{h.note}</p>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.1em] px-3 py-1 shrink-0" style={{ background: '#f0f0f4', color: D }}>
                    {h.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Частые вопросы
          </h2>
          <div className="divide-y divide-[#e8e8ec]">
            {[
              ['Можно ли прийти с детьми?', 'Да, дети до 14 лет проходят бесплатно в сопровождении взрослого.'],
              ['Можно ли делать фото и видео?', 'Фото и видео для личного использования разрешены. Съёмка для СМИ — по аккредитации.'],
              ['Продаётся ли техника прямо на выставке?', 'Как правило, нет. Выставка носит демонстрационный характер. Покупку можно оформить через партнёров-дистрибьюторов.'],
              ['Есть ли гардероб?', 'Да, гардероб работает всё время выставки, услуга бесплатная.'],
              ['Как получить пресс-аккредитацию?', 'Заявки на аккредитацию принимаются через раздел «Медиа» на сайте.'],
            ].map(([q, a]) => (
              <div key={q as string} className="py-5">
                <p className="text-sm font-semibold m-0 mb-2" style={{ color: D }}>{q}</p>
                <p className="text-sm font-light text-[#6a6e80] m-0">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}