const highlights = [
  { icon: '◷', label: 'Duration', value: '6 months', note: 'A clear, guided learning path' },
  { icon: '⌘', label: 'Projects', value: '5+ real projects', note: 'Build a portfolio as you learn' },
  { icon: '⌁', label: 'Technologies', value: '10+ technologies', note: 'Modern tools, end to end' },
  { icon: '✦', label: 'Certificate', value: 'Course completion', note: 'Recognize your hard work' },
];

function CourseHighlights() {
  return (
    <section className="bg-[#f8f9fc] py-[68px] md:py-[92px_100px]" id="courses">
      <div className="mx-auto w-[min(1120px,calc(100%-36px))] sm:w-[min(1120px,calc(100%-48px))]">
        <div className="mx-auto mb-[34px] max-w-[620px] text-center md:mb-12">
          <span className="mb-[14px] inline-block text-xs font-extrabold uppercase tracking-[1.2px] text-brand">The course at a glance</span>
          <h2 className="mb-[14px] font-display text-[clamp(30px,4vw,42px)] leading-[1.15]">Everything You Need to Become a Developer</h2>
          <p className="text-base leading-[1.7] text-[#697086]">A focused curriculum designed to take you from first line of code to launch-ready projects.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <article className="min-h-0 rounded-[7px] border border-[#e7e8f0] bg-white p-[22px] shadow-[0_6px_20px_rgb(32_34_56_/_4%)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_26px_rgb(32_34_56_/_9%)] sm:min-h-[205px]" key={item.label}>
              <div className="mb-[18px] flex items-center justify-between"><span className="grid size-[42px] place-items-center rounded-md bg-[#eeedff] text-[22px] text-brand" aria-hidden="true">{item.icon}</span><span className="text-[11px] font-bold text-[#a9adbd]">0{index + 1}</span></div>
              <p className="mb-[5px] text-xs font-semibold text-[#697086]">{item.label}</p>
              <h3 className="mb-[7px] font-display text-lg">{item.value}</h3>
              <span className="text-[11px] text-[#85899a]">{item.note}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseHighlights;