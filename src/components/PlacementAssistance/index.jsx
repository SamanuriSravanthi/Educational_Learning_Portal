const support = ['Resume preparation', 'Interview preparation', 'Coding practice', 'Mock interviews', 'Placement guidance'];

function PlacementAssistance() {
  return (
    <section className="bg-[#24263d] py-[62px] text-white md:py-[76px]">
      <div className="mx-auto grid w-[min(1120px,calc(100%-36px))] grid-cols-1 items-center gap-9 sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-[.9fr_1.1fr] md:gap-[90px]">
        <div>
          <span className="mb-[15px] inline-block text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#b8b4ff]">More than just a course</span>
          <h2 className="mb-[13px] font-display text-[clamp(35px,4vw,46px)] leading-[1.1]">Get Career Ready</h2>
          <p className="mb-6 max-w-[420px] text-[15px] leading-[1.7] text-[#c5c7d5]">Take your new skills into the world with focused support for every part of your job search.</p>
          <a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-md bg-white px-[22px] font-bold text-[#252742] transition hover:-translate-y-0.5 hover:bg-[#eeedff]" href="#enroll">Talk to an advisor <span aria-hidden="true">↗</span></a>
        </div>
        <ul className="m-0 list-none p-0">
          {support.map((item, index) => (
            <li className="grid min-h-[58px] grid-cols-[28px_1fr_auto] items-center gap-[14px] border-b border-white/15 text-sm font-semibold first:border-t" key={item}><span className="grid size-[25px] place-items-center rounded-full bg-[#454660] text-xs text-[#a9f0d3]" aria-hidden="true">✓</span><span>{item}</span><small className="text-[10px] text-[#9699ad]">0{index + 1}</small></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlacementAssistance;