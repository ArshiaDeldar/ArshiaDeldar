import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "خانه" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "about", label: "درباره من" },
  { id: "contact", label: "تماس" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      dir="rtl"
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050b18]/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Navbar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <span className="text-white">پورتفولیو</span>
            <span className="text-blue-500">&lt;/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => handleNavigation(section.id)}
                  className={`text-sm transition duration-300 ${
                    isActive
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={() => handleNavigation("contact")}
            className="hidden rounded-full border border-blue-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 md:block"
          >
            تماس با من
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-[400px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#081122]/95 p-3 shadow-2xl backdrop-blur-xl">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => handleNavigation(section.id)}
                  className={`block rounded-xl px-4 py-3.5 text-sm transition duration-300 ${
                    isActive
                      ? "bg-blue-500/10 font-medium text-white"
                      : "text-gray-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}

            {/* Mobile Contact Button */}
            <a
              href="#contact"
              onClick={() => handleNavigation("contact")}
              className="mt-2 flex items-center justify-center rounded-xl bg-gradient-to-l from-blue-500 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              تماس با من
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
