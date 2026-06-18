import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const D = '#242940';

const contacts = [
  { icon: 'Mail', label: 'Общие вопросы', value: 'info@hifishow.ru', href: 'mailto:info@hifishow.ru' },
  { icon: 'Mail', label: 'Участие в выставке', value: 'exhibitors@hifishow.ru', href: 'mailto:exhibitors@hifishow.ru' },
  { icon: 'Mail', label: 'Пресс-служба', value: 'press@hifishow.ru', href: 'mailto:press@hifishow.ru' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', href: 'tel:+74951234567' },
];

const requisites = [
  ['Полное наименование', 'Общество с ограниченной ответственностью «Мидэкспо»'],
  ['Сокращённое наименование', 'ООО «Мидэкспо»'],
  ['ИНН', '7700000000'],
  ['КПП', '770001001'],
  ['ОГРН', '1027700000000'],
  ['Юридический адрес', '105082, г. Москва, ул. Русаковская, д. 13, офис 500'],
  ['Банк', 'АО «Альфа-Банк», г. Москва'],
  ['Расчётный счёт', '40702810000000000000'],
  ['Корреспондентский счёт', '30101810200000000593'],
  ['БИК', '044525593'],
];

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: D }}>
      <HeaderMain />

      <div style={{ background: D }} className="py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Организатор</p>
          <h1
            className="text-white font-light m-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            Контакты
          </h1>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-6 py-16 w-full">

        <div className="grid md:grid-cols-2 gap-16 mb-20">

          {/* КОНТАКТЫ */}
          <div>
            <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Связаться с нами
            </h2>
            <div className="space-y-0 divide-y divide-[#e8e8ec]">
              {contacts.map((c) => (
                <div key={c.label} className="py-5 flex items-center gap-4">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: '#f0f0f4' }}>
                    <Icon name={c.icon as 'Mail'} size={16} style={{ color: D }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8890a8] m-0 mb-0.5">{c.label}</p>
                    <a
                      href={c.href}
                      className="text-sm font-normal no-underline hover:text-[#5a6080] transition-colors"
                      style={{ color: D }}
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-[#e8e8ec] p-6">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] m-0 mb-2">Режим работы офиса</p>
              <p className="text-sm font-normal m-0" style={{ color: D }}>Пн–Пт: 10:00 – 19:00 (МСК)</p>
              <p className="text-sm font-light text-[#8890a8] m-0 mt-0.5">Сб–Вс: выходной</p>
            </div>
          </div>

          {/* ФОРМА */}
          <div>
            <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Написать нам
            </h2>
            <form className="flex flex-col gap-4">
              {[
                { label: 'Имя *', placeholder: 'Ваше имя', type: 'text' },
                { label: 'E-mail *', placeholder: 'your@email.com', type: 'email' },
                { label: 'Тема', placeholder: 'Краткая тема обращения', type: 'text' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full h-11 px-4 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors bg-white"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8890a8] mb-2">Сообщение *</label>
                <textarea
                  rows={5}
                  placeholder="Ваш вопрос или сообщение..."
                  className="w-full px-4 py-3 text-sm border border-[#e8e8ec] outline-none focus:border-[#242940] transition-colors resize-none bg-white"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="agree" className="mt-0.5 cursor-pointer" />
                <label htmlFor="agree" className="text-xs text-[#8890a8] font-light cursor-pointer">
                  Согласен(а) на обработку персональных данных в соответствии с{' '}
                  <a href="#" className="underline hover:text-[#242940]">политикой конфиденциальности</a>
                </label>
              </div>
              <button
                type="submit"
                className="h-12 px-10 text-[12px] font-semibold tracking-[0.16em] uppercase text-white hover:opacity-80 transition-opacity border-0 cursor-pointer self-start"
                style={{ background: D }}
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* РЕКВИЗИТЫ */}
        <div>
          <h2 className="font-light m-0 mb-8" style={{ fontSize: '1.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Банковские реквизиты
          </h2>
          <div className="border border-[#e8e8ec] divide-y divide-[#e8e8ec]">
            {requisites.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 sm:gap-6">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8890a8] sm:min-w-[240px] shrink-0">{label}</span>
                <span className="text-sm font-light" style={{ color: D }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
