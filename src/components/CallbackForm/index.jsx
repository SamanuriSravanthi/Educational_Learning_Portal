import { useState } from 'react';

function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-[#f8f9fc] py-[68px] md:py-24" id="enroll">
      <div className="mx-auto grid w-[min(1120px,calc(100%-36px))] grid-cols-1 items-start gap-[35px] sm:w-[min(1120px,calc(100%-48px))] md:grid-cols-[.78fr_1.22fr] md:gap-[82px]">
        <div className="md:pt-[30px]">
          <span className="mb-[14px] inline-block text-xs font-extrabold uppercase tracking-[1.2px] text-brand">Your next step</span>
          <h2 className="mb-[14px] font-display text-[clamp(32px,4vw,45px)] leading-[1.12]">Let’s make a plan for your future.</h2>
          <p className="mb-7 text-[15px] leading-[1.75] text-[#697086]">Tell us a little about yourself. Our course team will be in touch to answer your questions and help you get started.</p>
          <div className="mt-[17px] flex items-center gap-3"><span className="grid size-[38px] shrink-0 place-items-center rounded-md border border-[#dedcff] bg-[#f0efff] text-[11px] font-extrabold text-brand" aria-hidden="true">01</span><span><strong className="block text-xs">Personal course guidance</strong><small className="mt-[3px] block text-[11px] text-[#697086]">Get answers from a real person</small></span></div>
          <div className="mt-[17px] flex items-center gap-3"><span className="grid size-[38px] shrink-0 place-items-center rounded-md border border-[#dedcff] bg-[#f0efff] text-[11px] font-extrabold text-brand" aria-hidden="true">02</span><span><strong className="block text-xs">No pressure, just a conversation</strong><small className="mt-[3px] block text-[11px] text-[#697086]">Find out if this course is right for you</small></span></div>
        </div>
        <form className="rounded-lg border border-[#e7e8f0] bg-white p-[21px] shadow-[0_14px_40px_rgb(32_34_56_/_6%)] sm:p-[30px]" onSubmit={handleSubmit}>
          <div className="mb-6"><h3 className="mb-1.5 font-display text-[21px]">Request a callback</h3><p className="text-xs text-[#697086]">Fields marked with * are required.</p></div>
          <div className="grid grid-cols-1 gap-x-[14px] gap-y-[17px] sm:grid-cols-2">
            <label className="flex min-w-0 flex-col gap-[7px] text-xs font-bold text-[#454a60]">Full name *<input className="min-h-11 w-full rounded-[5px] border border-[#dfe1eb] bg-white px-3 py-2.5 text-[13px] font-normal text-[#202238] placeholder:text-[#a0a4b3]" name="name" type="text" placeholder="e.g. Alex Morgan" autoComplete="name" required minLength="2" /></label>
            <label className="flex min-w-0 flex-col gap-[7px] text-xs font-bold text-[#454a60]">Email address *<input className="min-h-11 w-full rounded-[5px] border border-[#dfe1eb] bg-white px-3 py-2.5 text-[13px] font-normal text-[#202238] placeholder:text-[#a0a4b3]" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
            <label className="flex min-w-0 flex-col gap-[7px] text-xs font-bold text-[#454a60]">Phone number *<input className="min-h-11 w-full rounded-[5px] border border-[#dfe1eb] bg-white px-3 py-2.5 text-[13px] font-normal text-[#202238] placeholder:text-[#a0a4b3]" name="phone" type="tel" placeholder="10-digit phone number" autoComplete="tel" inputMode="tel" pattern="[0-9+() .-]{7,20}" title="Enter a valid phone number" required /></label>
            <label className="flex min-w-0 flex-col gap-[7px] text-xs font-bold text-[#454a60]">Select course *<select className="min-h-11 w-full rounded-[5px] border border-[#dfe1eb] bg-white px-3 py-2.5 text-[13px] font-normal text-[#202238] invalid:text-[#a0a4b3]" name="course" defaultValue="" required><option value="" disabled>Choose a course</option><option>Full Stack Developer</option><option>Frontend Development</option><option>Backend Development</option></select></label>
            <label className="flex min-w-0 flex-col gap-[7px] text-xs font-bold text-[#454a60] sm:col-span-2">Message<textarea className="min-h-[88px] w-full resize-y rounded-[5px] border border-[#dfe1eb] bg-white px-3 py-2.5 text-[13px] font-normal text-[#202238] placeholder:text-[#a0a4b3]" name="message" rows="3" placeholder="What would you like to know?" maxLength="500" /></label>
          </div>
          <button className="mt-5 inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-brand px-[22px] font-bold text-white shadow-[0_8px_18px_rgb(79_70_229_/_18%)] transition hover:-translate-y-0.5 hover:bg-[#3e35c6]" type="submit">Send my request <span aria-hidden="true">↗</span></button>
          {submitted && <p className="mt-[14px] text-[13px] leading-[1.5] text-[#207455]" role="status">Thanks for reaching out. Your request is ready, and our team will be in touch.</p>}
        </form>
      </div>
    </section>
  );
}

export default CallbackForm;