const D = '#242940';

function Ticker({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: `marquee${reverse ? '-reverse' : ''} 41.7s linear infinite` }}
      >
        {doubled.map((b, i) => (
          <span
            key={i}
            className="text-[11px] font-normal tracking-[0.24em] uppercase text-[#8890a8] px-7 flex items-center gap-6 whitespace-nowrap"
          >
            {b}
            <span className="text-[#d0d3df] text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

interface Props {
  exhibitionPartners: string[];
  mediaPartners: string[];
}

export default function BrandsTicker({ exhibitionPartners, mediaPartners }: Props) {
  return (
    <div className="border-y border-[#e8e8ec] bg-[#f7f7fa]">
      <div className="py-3">
        <p
          className="text-[9px] font-semibold tracking-[0.3em] uppercase text-center mb-2"
          style={{ color: D }}
        >
          Партнёры выставки
        </p>
        <Ticker items={exhibitionPartners} />
      </div>
      <div className="border-t border-[#e8e8ec] py-3">
        <p
          className="text-[9px] font-semibold tracking-[0.3em] uppercase text-center mb-2"
          style={{ color: D }}
        >
          Информационные партнёры
        </p>
        <Ticker items={mediaPartners} reverse />
      </div>
    </div>
  );
}
