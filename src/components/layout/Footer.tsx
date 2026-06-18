import { Link } from 'react-router-dom';

const D = '#242940';

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8ec] mt-auto">
      <div className="max-w-[1220px] mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col items-center justify-center w-9 h-9 border-2 shrink-0" style={{ borderColor: D }}>
              <span className="text-[8px] font-bold tracking-[0.1em] leading-none" style={{ color: D }}>HI FI</span>
              <div className="w-full h-px my-[2px]" style={{ background: D }} />
              <span className="text-[7px] font-light tracking-[0.12em] leading-none" style={{ color: D }}>SHOW</span>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: D }}>HI FI SHOW</div>
              <div className="text-[9px] font-light tracking-[0.15em] uppercase text-[#8890a8]">Hi-Fi & High-End</div>
            </div>
          </div>
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
