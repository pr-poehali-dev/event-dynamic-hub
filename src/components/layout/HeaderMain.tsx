import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const D = '#242940';

const LOGO_URL = 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/bucket/29afd07b-f46d-4515-9cc9-a1b67568db59.jpg';

const Logo = () => (
  <Link to="/" className="flex items-center no-underline group">
    <img
      src={LOGO_URL}
      alt="HiFi & High End Show"
      className="h-96 w-auto object-contain"
      style={{ animation: 'logo-shimmer 3s ease-in-out infinite' }}
    />
  </Link>
);

const navLinks = [
  { label: 'О выставке', href: '/about' },
  { label: 'Посетителям', href: '/visitors' },
  { label: 'Участникам', href: '/exhibitors' },
  { label: 'Медиа', href: '/media' },
  { label: 'Премия', href: '/award' },
  { label: 'Контакты', href: '/contacts' },
];

export default function HeaderMain() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8ec]">
      <div className="hidden md:flex border-b border-[#f0f0f4] text-[11px] text-[#8890a8] py-1.5">
        <div className="max-w-[1220px] w-full mx-auto px-6 flex justify-between">
          <span>Международная выставка Hi-Fi &amp; High-End аппаратуры · с 1996 года</span>
          <div className="flex gap-5">
            <Link to="/media" className="hover:text-[#242940] transition-colors no-underline">Пресс-центр</Link>
            <Link to="/contacts" className="hover:text-[#242940] transition-colors no-underline">Контакты</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <Logo />

        <nav className="hidden lg:flex items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`px-4 py-2 text-[13px] tracking-[0.07em] uppercase transition-colors no-underline ${
                pathname === href ? 'text-[#242940] font-semibold' : 'text-[#242940] hover:text-[#8890a8] font-normal'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/event/moscow-autumn#register"
            className="hidden md:inline-block px-6 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase text-white hover:opacity-80 transition-opacity no-underline"
            style={{ background: D }}
          >
            Регистрация
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#e8e8ec] bg-white">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm uppercase tracking-wider border-b border-[#f0f0f4] hover:bg-[#f7f7fa] no-underline"
              style={{ color: D }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}