const topics = [
  { icon: '5', title: 'HTML & CSS', text: 'Create accessible, responsive interfaces from the ground up.', color: 'topic-lilac' },
  { icon: 'JS', title: 'JavaScript', text: 'Bring your ideas to life with the language of the web.', color: 'topic-yellow' },
  { icon: 'R', title: 'React.js', text: 'Build fast, reusable interfaces with modern React.', color: 'topic-cyan' },
  { icon: 'J', title: 'Java', text: 'Learn object-oriented foundations used across the industry.', color: 'topic-orange' },
  { icon: 'DB', title: 'SQL', text: 'Model, query, and manage data with confidence.', color: 'topic-green' },
  { icon: '{ }', title: 'Backend development', text: 'Connect APIs, servers, and databases into real products.', color: 'topic-pink' },
];

function LearningSection() {
  return (
    <section className="mx-auto grid w-[min(1120px,calc(100%-36px))] grid-cols-1 gap-[38px] py-[68px] sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-[.72fr_1.28fr] md:gap-[76px] md:py-[102px]">
      <div className="self-center md:max-w-none">
        <span className="mb-[14px] inline-block text-xs font-extrabold uppercase tracking-[1.2px] text-brand">Skills that work together</span>
        <h2 className="mb-4 font-display text-[clamp(30px,4vw,42px)] leading-[1.15]">Learn the tools behind the web</h2>
        <p className="mb-5 text-[15px] leading-[1.75] text-[#697086]">Start with the fundamentals, then bring everything together to build complete applications from front end to back end.</p>
        <a className="inline-flex items-center gap-[9px] text-[13px] font-bold text-brand" href="#enroll">See the full course <span className="transition-transform hover:translate-x-[3px] hover:-translate-y-[3px]" aria-hidden="true">↗</span></a>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {topics.map((topic, index) => (
          <article className="relative min-h-0 rounded-[7px] border border-[#e7e8f0] bg-white p-[18px] transition duration-200 hover:-translate-y-[3px] hover:border-[#c9c6ff] sm:min-h-[184px]" key={topic.title}>
            <span className={`mb-4 grid size-[39px] place-items-center rounded-md font-display text-[15px] font-bold ${topic.color === 'topic-lilac' ? 'bg-[#eeedff] text-[#5148d9]' : topic.color === 'topic-yellow' ? 'bg-[#fff4ce] text-[#a87513]' : topic.color === 'topic-cyan' ? 'bg-[#e2f4f7] text-[#287e8a]' : topic.color === 'topic-orange' ? 'bg-[#fff0e6] text-[#bb6634]' : topic.color === 'topic-green' ? 'bg-[#e6f5ef] text-[#208b67]' : 'bg-[#fce9f1] text-[#b54477]'}`} aria-hidden="true">{topic.icon}</span>
            <span className="absolute right-[18px] top-[29px] text-[10px] font-bold text-[#aaadbb]">0{index + 1}</span>
            <h3 className="mb-1.5 font-display text-[15px]">{topic.title}</h3>
            <p className="text-[11px] leading-[1.55] text-[#697086]">{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LearningSection;