import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const D = '#242940';

const LOGO_URL = 'https://cdn.poehali.dev/projects/bfa2ab91-7ee9-4bb0-8d91-527bb910c1ff/bucket/29afd07b-f46d-4515-9cc9-a1b67568db59.jpg';

interface Props {
  eventTitle: string;
  eventSlug: string;
}

export default function HeaderEvent({ eventTitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8ec]">
      <div className="hidden md:flex border-b border-[#f0f0f4] text-[11px] text-[#8890a8] py-1.5">
        <div className="max-w-[1220px] w-full mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#242940] transition-colors no-underline">Главная</Link>
            <span>/</span>
            <span style={{ color: D }}>{eventTitle}</span>
          </div>
          <div className="flex gap-5">
            <Link to="/media" className="hover:text-[#242940] transition-colors no-underline">Пресс-центр</Link>
            <Link to="/contacts" className="hover:text-[#242940] transition-colors no-underline">Контакты</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center no-underline group">
          <img
            src={LOGO_URL}
            alt="HiFi & High End Show"
            className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/media" className="px-4 py-2 text-[13px] tracking-[0.07em] uppercase text-[#242940] hover:text-[#8890a8] transition-colors no-underline font-normal">Медиа</Link>
            <Link to="/contacts" className="px-4 py-2 text-[13px] tracking-[0.07em] uppercase text-[#242940] hover:text-[#8890a8] transition-colors no-underline font-normal">Контакты</Link>
          </nav>
          <a
            href="#register"
            className="hidden md:inline-block px-6 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase text-white hover:opacity-80 transition-opacity no-underline"
            style={{ background: D }}
          >
            Регистрация
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e8e8ec] bg-white">
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 text-sm uppercase tracking-wider border-b border-[#f0f0f4] hover:bg-[#f7f7fa] no-underline font-semibold"
            style={{ color: D }}
          >
            Регистрация
          </a>
        </div>
      )}
    </header>
  );
}