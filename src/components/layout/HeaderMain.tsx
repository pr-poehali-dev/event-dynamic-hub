import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const D = '#242940';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 no-underline group">
    <div className="flex flex-col items-center justify-center w-11 h-11 border-2 shrink-0 group-hover:opacity-80 transition-opacity" style={{ borderColor: D }}>
      <span className="text-[10px] font-bold tracking-[0.15em] leading-none" style={{ color: D }}>HI FI</span>
      <div className="w-full h-px my-[3px]" style={{ background: D }} />
      <span className="text-[8px] font-light tracking-[0.2em] leading-none" style={{ color: D }}>SHOW</span>
    </div>
    <div>
      <div className="text-[13px] font-bold tracking-[0.22em] uppercase leading-none" style={{ color: D }}>HI FI SHOW</div>
      <div className="text-[10px] font-light tracking-[0.18em] uppercase text-[#8890a8] mt-0.5">Hi-Fi &amp; High-End</div>
    </div>
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
            to="/moscow-autumn#register"
            className="hidden md:inline-block px-6 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase text-white hover:opacity-80 transition-opacity no-underline"
            style={{ background: D }}
          >
            Билеты
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
