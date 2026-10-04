function Footer() {
  return (
    <footer className="bg-[#1d1f32] text-white" id="contact">
      <div className="mx-auto grid w-[min(1120px,calc(100%-36px))] grid-cols-2 gap-x-4 gap-y-7 py-9 sm:w-[min(1120px,calc(100%-48px))] sm:gap-x-6 md:grid-cols-[1.35fr_.8fr_1.1fr_1fr] md:gap-10 md:py-[52px_45px]">
        <div className="col-span-2 md:col-span-1">
          <a className="inline-flex items-center gap-2.5 font-display text-[21px] font-bold" href="#home"><span className="grid size-[34px] place-items-center rounded-[9px] bg-brand text-[23px] text-white" aria-hidden="true">e</span><span>Edu<span className="text-brand">Learn</span></span></a>
          <p className="mt-[14px] text-xs text-[#b4b6c5]">Learn with purpose. Build what’s next.</p>
        </div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1.5 mt-[5px] font-display text-[13px]">Quick links</h3><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#home">Home</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#about">About us</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#courses">Course overview</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#enroll">Contact</a></div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1.5 mt-[5px] font-display text-[13px]">Explore</h3><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#courses">Full Stack Development</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#courses">Frontend Development</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#courses">Backend Development</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="#courses">Student projects</a></div>
        <div className="flex flex-col items-start gap-[11px]"><h3 className="mb-1.5 mt-[5px] font-display text-[13px]">Get in touch</h3><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="mailto:hello@edulearn.example">hello@edulearn.example</a><a className="text-[11px] text-[#b4b6c5] transition-colors hover:text-[#c7c4ff]" href="tel:+18005550148">+1 (800) 555-0148</a><span className="text-[11px] text-[#b4b6c5]">Mon–Fri, 9am–5pm</span></div>
      </div>
      <div className="mx-auto flex min-h-[55px] w-[min(1120px,calc(100%-36px))] items-center justify-between gap-[15px] border-t border-white/10 text-[9px] text-[#a5a7b8] sm:w-[min(1120px,calc(100%-48px))] sm:text-[10px]"><span>© {new Date().getFullYear()} EduLearn. All rights reserved.</span><a className="text-[#d7d8e2] transition-colors hover:text-[#c7c4ff]" href="#home">Back to top ↑</a></div>
    </footer>
  );
}

export default Footer;