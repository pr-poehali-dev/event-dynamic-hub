import { Link } from 'react-router-dom';

const D = '#242940';
const LOGO_URL = 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/bucket/29afd07b-f46d-4515-9cc9-a1b67568db59.jpg';

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8ec] mt-auto">
      <div className="max-w-[1220px] mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="inline-block mb-4 no-underline">
            <img src={LOGO_URL} alt="HiFi & High End Show" className="h-14 w-auto object-contain" />
          </Link>
          <p className="text-sm text-[#8890a8] font-light leading-relaxed m-0">
            Организатор — «Мидэкспо».<br />Выставка проводится с 1996 года.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase m-0 mb-4" style={{ color: D }}>Мероприятия</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              { label: 'Москва · Осень', to: '/moscow-autumn' },
              { label: 'Санкт-Петербург', to: '/spb' },
              { label: 'Москва · Весна', to: '/moscow-spring' },
              { label: 'Екатеринбург', to: '/ekb' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-[#8890a8] font-light hover:text-[#242940] transition-colors no-underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase m-0 mb-4" style={{ color: D }}>Информация</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              { label: 'О выставке', to: '/about' },
              { label: 'Посетителям', to: '/visitors' },
              { label: 'Участникам', to: '/exhibitors' },
              { label: 'Медиа', to: '/media' },
              { label: 'Премия Top High End', to: '/award' },
              { label: 'Контакты', to: '/contacts' },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-[#8890a8] font-light hover:text-[#242940] transition-colors no-underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase m-0 mb-4" style={{ color: D }}>Документы</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              'Политика конфиденциальности',
              'Пользовательское соглашение',
              'Договор оферты',
              'Согласие на рассылку',
            ].map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-[#8890a8] font-light hover:text-[#242940] transition-colors no-underline">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e8e8ec]">
        <div className="max-w-[1220px] mx-auto px-6 py-4 flex flex-wrap justify-between gap-2 text-[11px] text-[#b0b3c6] font-light">
          <span>© 1996–2026 HI FI SHOW · Мидэкспо. Все права защищены.</span>
          <span>Москва · Санкт-Петербург · Екатеринбург</span>
        </div>
      </div>
    </footer>
  );
}