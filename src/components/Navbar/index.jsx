import { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-[#e7e8f0]/75 bg-white/95 backdrop-blur-[14px]">
      <nav className="mx-auto flex h-[70px] w-[min(1120px,calc(100%-36px))] items-center justify-between sm:h-[78px] sm:w-[min(1120px,calc(100%-48px))]" aria-label="Main navigation">
        <a className="inline-flex items-center gap-2.5 font-display text-[21px] font-bold" href="#home" onClick={closeMenu} aria-label="EduLearn home">
          <span className="grid size-[34px] place-items-center rounded-[9px] bg-brand text-[23px] text-white" aria-hidden="true">e</span>
          <span>Edu<span className="text-brand">Learn</span></span>
        </a>
        <button
          className="flex size-[42px] flex-col items-center justify-center gap-[5px] rounded-md border border-[#e7e8f0] bg-white md:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-0.5 w-[18px] rounded-sm bg-[#202238] transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} /><span className={`h-0.5 w-[18px] rounded-sm bg-[#202238] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} /><span className={`h-0.5 w-[18px] rounded-sm bg-[#202238] transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[69px] flex-col items-stretch gap-[18px] border-b border-[#e7e8f0] bg-white px-6 py-5 shadow-[0_14px_24px_rgb(32_34_56_/_8%)] md:static md:flex md:flex-row md:items-center md:gap-[42px] md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <div className="flex flex-col items-stretch md:flex-row md:gap-8">
            {links.map((link) => (
              <a className="border-b border-[#f0f0f5] py-3 text-sm font-semibold text-[#555b70] transition-colors hover:text-brand md:border-0 md:py-0" key={link.label} href={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
          </div>
          <a className="inline-flex min-h-11 w-fit items-center justify-center gap-2.5 rounded-md bg-brand px-[18px] text-sm font-bold text-white shadow-[0_8px_18px_rgb(79_70_229_/_18%)] transition hover:-translate-y-0.5 hover:bg-[#3e35c6] hover:shadow-[0_12px_24px_rgb(79_70_229_/_24%)]" href="#enroll" onClick={closeMenu}>Enroll Now <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;