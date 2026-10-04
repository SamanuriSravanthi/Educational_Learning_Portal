function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#f8f9fc] [background-image:radial-gradient(#dfe1ee_0.8px,transparent_0.8px)] [background-position:right_top] [background-size:22px_22px]" id="home">
      <div className="mx-auto grid min-h-[590px] w-[min(1120px,calc(100%-36px))] items-center gap-8 py-[55px] sm:w-[min(1120px,calc(100%-48px))] sm:py-[68px_56px] md:grid-cols-[1fr_.88fr] md:gap-[62px] md:py-[68px_56px]">
        <div className="relative z-[1]">
          <span className="mb-5 inline-flex items-center gap-[9px] text-[11px] font-extrabold tracking-[1.5px] text-[#575d75]"><span className="size-2 rounded-full bg-[#55b99a]" /> LEARN <i className="not-italic text-brand">•</i> BUILD <i className="not-italic text-brand">•</i> GROW</span>
          <h1 className="max-w-[600px] font-display text-[clamp(45px,5.5vw,68px)] leading-[1.06]">Become a <span className="text-brand">Full Stack Developer</span></h1>
          <p className="mb-7 mt-[22px] max-w-[500px] text-base leading-[1.75] text-[#697086]">Learn HTML, CSS, JavaScript, React and backend technologies through practical real-world projects.</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-md bg-brand px-[22px] font-bold text-white shadow-[0_8px_18px_rgb(79_70_229_/_18%)] transition hover:-translate-y-0.5 hover:bg-[#3e35c6]" href="#enroll">Enroll Now <span aria-hidden="true">↗</span></a>
            <a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-md border border-[#e7e8f0] bg-white px-[22px] font-bold text-[#202238] transition hover:-translate-y-0.5 hover:border-brand hover:text-brand" href="#courses">Explore Course <span aria-hidden="true">↓</span></a>
          </div>
          <div className="mt-8 flex items-center gap-3.5">
            <div className="flex pl-1" aria-hidden="true"><span className="-ml-1 grid size-[33px] place-items-center rounded-full border-2 border-[#f8f9fc] bg-[#d8d8f7] text-[9px] font-extrabold text-[#3c3c76]">JD</span><span className="-ml-1 grid size-[33px] place-items-center rounded-full border-2 border-[#f8f9fc] bg-[#f4d8ca] text-[9px] font-extrabold text-[#804d34]">AM</span><span className="-ml-1 grid size-[33px] place-items-center rounded-full border-2 border-[#f8f9fc] bg-[#c9e6de] text-[9px] font-extrabold text-[#286651]">SK</span><span className="-ml-1 grid size-[33px] place-items-center rounded-full border-2 border-[#f8f9fc] bg-[#202238] text-[9px] font-extrabold text-white">+</span></div>
            <p className="text-xs text-[#697086]"><strong className="text-[#202238]">2,400+</strong> learners building their future</p>
          </div>
        </div>
        <div className="relative min-h-[min(78vw,370px)] md:min-h-[414px]">
          <div className="absolute inset-[4px_14px_12px_5px] overflow-hidden rounded-[10px] border-[8px] border-white bg-[#dfe5ed] bg-[linear-gradient(180deg,transparent_58%,rgb(21_28_44_/_36%)),url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85')] bg-cover bg-center shadow-[0_24px_54px_rgb(32_34_56_/_13%)] md:inset-[12px_18px_18px_20px]" role="img" aria-label="Developer working on a laptop in a bright studio" />
          <div className="absolute bottom-7 right-[34px] flex items-center gap-2 text-xs font-bold text-white md:bottom-[37px] md:right-[42px]"><span className="size-[7px] rounded-full bg-[#75dfb3] shadow-[0_0_0_4px_rgb(117_223_179_/_24%)]" /> Learn by building</div>
          <div className="absolute bottom-[61px] right-[-4px] flex items-center gap-3 rounded-md border border-[#e7e8f0]/80 bg-white px-3 py-2.5 shadow-[0_12px_32px_rgb(32_34_56_/_12%)] md:bottom-[77px] md:right-[-12px] md:px-[17px] md:py-[14px]"><span className="grid size-[38px] place-items-center rounded-md bg-[#eeedff] font-display text-base font-bold text-brand">&#123;&#125;</span><span><strong className="mb-[3px] block text-xs">Real-world skills</strong><small className="block text-[10px] text-[#697086]">Made for your next role</small></span></div>
          <div className="absolute right-[-2px] top-[-3px] grid size-12 rotate-[8deg] place-items-center rounded-full border border-[#dedcff] bg-[#f0efff] font-display text-[17px] font-bold text-brand md:size-[60px]">JS</div>
        </div>
      </div>
      <div className="mx-auto flex w-[min(1120px,calc(100%-36px))] items-center gap-4 pb-5 text-[9px] font-extrabold tracking-[1.2px] text-[#85899a] sm:w-[min(1120px,calc(100%-48px))]"><span>YOUR NEXT CHAPTER STARTS HERE</span><span className="h-px flex-1 bg-[#e1e2eb]" /><span>01 — 06 MONTHS</span></div>
    </section>
  );
}

export default HeroSection;