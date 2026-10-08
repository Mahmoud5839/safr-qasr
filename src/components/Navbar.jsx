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
    { name: "صلاة القصر", href: "/#qasr" },
    { name: "الجمع", href: "/#jam" },
    { name: "دليل المسافر", href: "/guide" },
    { name: "المصادر", href: "/sources" },
  ];

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 w-full max-w-7xl px-3 sm:mt-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            flex min-h-14 items-center justify-between
            rounded-2xl
            border border-white/20
            bg-white/85
            px-3 py-2
            shadow-lg shadow-black/5
            backdrop-blur-xl
            sm:min-h-16 sm:px-4
            dark:border-white/10
            dark:bg-slate-900/85
          "
        >
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-emerald-900
                text-white
                shadow-md
                transition-transform
                group-hover:scale-105
                sm:h-11 sm:w-11
              "
            >
              <Compass size={22} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <h1
                className="
                  truncate
                  text-sm font-bold leading-tight
                  text-emerald-950
                  sm:text-lg
                  dark:text-white
                "
              >
                زاد المسافر
              </h1>

              <p
                className="
                  hidden text-[10px] font-medium
                  text-slate-500
                  xs:block
                  sm:text-xs
                  dark:text-slate-400
                "
              >
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
                  rounded-xl
                  px-3 py-2
                  text-sm font-medium
                  text-slate-600
                  transition
                  hover:bg-emerald-50
                  hover:text-emerald-900
                  lg:px-4
                  dark:text-slate-300
                  dark:hover:bg-emerald-950
                  dark:hover:text-emerald-300
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={
                isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"
              }
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
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <a
              href="travel-checker"
              className="
                flex items-center gap-2
                rounded-xl
                bg-emerald-900
                px-4 py-2.5
                text-sm font-semibold
                text-white
                shadow-md shadow-emerald-900/10
                transition
                hover:bg-emerald-800
                hover:shadow-lg
                lg:px-5
              "
            >
              <BookOpen size={17} />
              <span>ابدأ الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              text-slate-700
              transition
              hover:bg-slate-100
              md:hidden
              dark:text-slate-200
              dark:hover:bg-slate-800
            "
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={[
            "overflow-hidden transition-all duration-200 md:hidden",
            isMenuOpen
              ? "mt-2 max-h-128 opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          ].join(" ")}
        >
          <div
            className="
              rounded-2xl
              border border-white/20
              bg-white/95
              p-3
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-slate-900/95
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    min-h-11
                    rounded-xl
                    px-4 py-3
                    text-sm font-semibold
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

              {/* Dark Mode */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="
                  flex min-h-11
                  items-center justify-between
                  rounded-xl
                  px-4 py-3
                  text-sm font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-50
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                "
              >
                <span>الوضع الليلي</span>

                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <a
                href="travel-checker"
                onClick={closeMenu}
                className="
                  mt-1
                  flex min-h-11
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-900
                  px-4 py-3
                  text-sm font-semibold
                  text-white
                  transition
                  hover:bg-emerald-800
                "
              >
                <BookOpen size={17} />
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;