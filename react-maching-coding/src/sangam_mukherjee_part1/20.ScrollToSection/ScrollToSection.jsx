import React, { useEffect, useRef, useState } from 'react';
const style = {
  section:
    'bg-blue-400 text-white w-full h-[600px] flex justify-center items-center gap-4',
  navLinks: 'list-none px-4 py-2 bg-green-400 cursor-pointer',
  nav: 'w-full flex gap-4',
};
const sections = [
  {
    name: 'Header',
    style: style.section,
  },
  {
    name: 'About us',
    style: style.section,
  },
  {
    name: 'Features',
    style: style.section,
  },
  {
    name: 'Footer',
    style: style.section,
  },
];

const ScrollToSection = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const currentSection = useRef(null);

  useEffect(() => {
    if (currentSection.current) {
      currentSection.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentIndex]);

  function handleCurrenIndex(idx) {
    setCurrentIndex(idx);
  }
  return (
    <>
      <header>
        <Navbar sections={sections} onHandleCurrentIndex={handleCurrenIndex} />
      </header>
      {sections &&
        sections.length > 0 &&
        sections.map((section, index) => (
          <section
            key={section.name}
            className={section.style}
            ref={index === currentIndex ? currentSection : null}
          >
            <p className="text-3xl">{section.name}</p>
          </section>
        ))}
    </>
  );
};

function Navbar({ sections, onHandleCurrentIndex }) {
  const navMenu = sections.map((ele) => ele.name);
  return (
    <nav className={style.nav}>
      {navMenu.map((menu, idx) => (
        <li
          key={menu}
          onClick={() => onHandleCurrentIndex(idx)}
          className={style.navLinks}
        >
          {menu}
        </li>
      ))}
    </nav>
  );
}

export default ScrollToSection;
