const benefits = [
  { icon: '✳', tone: 'violet', title: 'Expert faculty', text: 'Learn with mentors who have built and shipped products in the industry.' },
  { icon: '</>', tone: 'mint', title: 'Real projects', text: 'Turn each new skill into portfolio work you can confidently show.' },
  { icon: '↗', tone: 'peach', title: 'Career support', text: 'Get practical guidance for your job search and next steps.' },
  { icon: '✓', tone: 'blue', title: 'Certification', text: 'Celebrate your progress with a certificate of completion.' },
];

function WhyChooseUs() {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-36px))] py-[68px] sm:w-[min(1120px,calc(100%-48px))] md:py-[94px_100px]" id="about">
      <div className="mx-auto mb-[34px] max-w-[620px] text-center md:mb-12">
        <span className="mb-[14px] inline-block text-xs font-extrabold uppercase tracking-[1.2px] text-brand">A better way to learn</span>
        <h2 className="mb-[14px] font-display text-[clamp(30px,4vw,42px)] leading-[1.15]">Everything You Need to Build Your Career</h2>
        <p className="text-base leading-[1.7] text-[#697086]">Practical skills, meaningful projects, and real career guidance. Learn by doing, with support at every step.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <article className="group relative min-h-0 rounded-[7px] border border-[#e7e8f0] bg-white p-6 shadow-[0_8px_24px_rgb(32_34_56_/_4%)] transition duration-200 hover:-translate-y-[5px] hover:border-[#d6d4ff] hover:shadow-[0_16px_32px_rgb(32_34_56_/_9%)] sm:min-h-[224px]" key={benefit.title}>
            <span className={`grid size-[46px] place-items-center rounded-[7px] text-[19px] font-extrabold ${benefit.tone === 'violet' ? 'bg-[#eeedff] text-[#5148d9]' : benefit.tone === 'mint' ? 'bg-[#e6f5ef] text-[#208b67]' : benefit.tone === 'peach' ? 'bg-[#fff0e6] text-[#c87642]' : 'bg-[#e8f1ff] text-[#3873c8]'}`} aria-hidden="true">{benefit.icon}</span>
            <span className="absolute right-[22px] top-7 text-[11px] font-bold text-[#a9adbd]">0{index + 1}</span>
            <h3 className="mb-2 mt-6 font-display text-[17px]">{benefit.title}</h3>
            <p className="text-[13px] leading-[1.65] text-[#697086]">{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;