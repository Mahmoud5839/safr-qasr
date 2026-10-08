import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  BookOpen,
  Compass,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "صلاة القصر", href: "#qasr" },
    { name: "الجمع", href: "#jam" },
    { name: "دليل المسافر", href: "guide" },
    { name: "المصادر", href: "sources" },
  ];

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex h-16 items-center justify-between
            rounded-2xl border border-white/20
            bg-white/80 px-4 shadow-lg shadow-black/5
            backdrop-blur-xl
            dark:border-white/10 dark:bg-slate-900/80
          "
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                bg-emerald-900
                text-white
                shadow-md
                transition-transform
                group-hover:scale-105
              "
            >
              <Compass size={23} strokeWidth={1.8} />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight text-emerald-950 dark:text-white">
                زاد المسافر
              </h1>

              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                دليل صلاة المسافر
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  rounded-xl px-4 py-2
                  text-sm font-medium
                  text-slate-600
                  transition
                  hover:bg-emerald-50
                  hover:text-emerald-900
                  dark:text-slate-300
                  dark:hover:bg-emerald-950
                  dark:hover:text-emerald-300
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleDarkMode}
              aria-label="تغيير الوضع"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                text-slate-600
                transition
                hover:bg-slate-100
                dark:text-slate-300
                dark:hover:bg-slate-800
              "
            >
              {isDark ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

            <a
              href="travel-checker"
              className="
                flex items-center gap-2
                rounded-xl
                bg-emerald-900
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-md shadow-emerald-900/10
                transition
                hover:bg-emerald-800
                hover:shadow-lg
              "
            >
              <BookOpen size={17} />
              <span>ابدأ الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="فتح القائمة"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              text-slate-700
              hover:bg-slate-100
              md:hidden
              dark:text-slate-200
              dark:hover:bg-slate-800
            "
          >
            {isMenuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="
              mt-2 overflow-hidden rounded-2xl
              border border-white/20
              bg-white/95 p-3 shadow-xl
              backdrop-blur-xl
              md:hidden
              dark:border-white/10
              dark:bg-slate-900/95
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    rounded-xl px-4 py-3
                    text-sm font-medium
                    text-slate-700
                    transition
                    hover:bg-emerald-50
                    hover:text-emerald-900
                    dark:text-slate-200
                    dark:hover:bg-emerald-950
                    dark:hover:text-emerald-300
                  "
                >
                  {link.name}
                </a>
              ))}

              <div className="my-2 h-px bg-slate-100 dark:bg-slate-800" />

              <button
                onClick={toggleDarkMode}
                className="
                  flex items-center justify-between
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  text-slate-700
                  hover:bg-slate-50
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                "
              >
                <span>الوضع الليلي</span>

                {isDark ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <a
                href="travel-checker"
                onClick={() => setIsMenuOpen(false)}
                className="
                  mt-1 flex items-center
                  justify-center gap-2
                  rounded-xl
                  bg-emerald-900
                  px-4 py-3
                  text-sm font-semibold
                  text-white
                "
              >
                <BookOpen size={17} />
                ابدأ الآن
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;