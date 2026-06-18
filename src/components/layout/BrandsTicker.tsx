import { brands } from '@/data/events';

export default function BrandsTicker() {
  const doubled = [...brands, ...brands];
  return (
    <div className="border-y border-[#e8e8ec] py-6 overflow-hidden bg-[#f7f7fa]">
      <div className="flex w-max animate-marquee">
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