import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        overflow-hidden
        bg-[#f8f7f2]
        pt-28
        dark:bg-slate-950
      "
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -right-40 top-20
            h-96 w-96 rounded-full
            bg-emerald-900/5
            blur-3xl
            dark:bg-emerald-400/5
          "
        />

        <div
          className="
            absolute -left-40 bottom-10
            h-96 w-96 rounded-full
            bg-amber-500/5
            blur-3xl
            dark:bg-amber-400/5
          "
        />

        {/* Islamic geometric pattern */}
        <div
          className="
            absolute right-0 top-0
            h-full w-1/3
            opacity-[0.035]
            dark:opacity-[0.04]
          "
          style={{
            backgroundImage: `
              linear-gradient(30deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(150deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(30deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(150deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(60deg, #064e3b 25%, transparent 25.5%, transparent 75%, #064e3b 75%)
            `,
            backgroundSize: "80px 140px",
          }}
        />
      </div>

      <div
        className="
          relative mx-auto flex min-h-[calc(100vh-7rem)]
          max-w-7xl items-center
          px-6 py-16
          lg:px-8
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-emerald-900/10
                bg-white/70
                px-4 py-2
                text-sm font-medium
                text-emerald-900
                shadow-sm
                backdrop-blur
                dark:border-emerald-400/10
                dark:bg-slate-900/60
                dark:text-emerald-300
              "
            >
              <Sparkles size={15} />

              <span>دليلك لفهم صلاة المسافر</span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-5xl font-extrabold
                leading-[1.2]
                tracking-tight
                text-slate-900
                sm:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              مسافر؟
              <br />

              <span className="text-emerald-900 dark:text-emerald-400">
                اعرف كيف تصلي.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7 max-w-xl
                text-lg leading-9
                text-slate-600
                sm:text-xl
                dark:text-slate-300
              "
            >
              دليل مبسط لأحكام صلاة المسافر، القصر والجمع،
              والرخص المتعلقة بالسفر، مع الاعتماد على مصادر
              شرعية موثوقة.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="travel-checker"
                className="
                  group flex items-center
                  justify-center gap-3
                  rounded-2xl
                  bg-emerald-900
                  px-7 py-4
                  text-base font-bold
                  text-white
                  shadow-xl
                  shadow-emerald-900/15
                  transition-all
                  hover:-translate-y-1
                  hover:bg-emerald-800
                  hover:shadow-2xl
                "
              >
                <span>أنا مسافر الآن</span>

                <ArrowLeft
                  size={19}
                  className="
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />
              </a>

              <a
                href="guide"
                className="
                  flex items-center
                  justify-center gap-2
                  rounded-2xl
                  border border-slate-200
                  bg-white/70
                  px-7 py-4
                  text-base font-semibold
                  text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-all
                  hover:-translate-y-1
                  hover:border-emerald-200
                  hover:text-emerald-900
                  dark:border-slate-700
                  dark:bg-slate-900/60
                  dark:text-slate-200
                  dark:hover:border-emerald-800
                  dark:hover:text-emerald-400
                "
              >
                <BookOpen size={18} />
                تصفح الدليل
              </a>
            </div>

            {/* Trust */}
            <div
              className="
                mt-9 flex items-center gap-3
                text-sm text-slate-500
                dark:text-slate-400
              "
            >
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  bg-emerald-100
                  text-emerald-800
                  dark:bg-emerald-950
                  dark:text-emerald-400
                "
              >
                <ShieldCheck size={18} />
              </div>

              <span>
                محتوى موثق مع توضيح المسائل التي فيها خلاف فقهي
              </span>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-[520px]">
              {/* Outer glow */}
              <div
                className="
                  absolute inset-8
                  rounded-[3rem]
                  bg-emerald-900/10
                  blur-3xl
                  dark:bg-emerald-400/10
                "
              />

              {/* Main card */}
              <div
                className="
                  absolute inset-8
                  flex flex-col items-center
                  justify-center
                  overflow-hidden
                  rounded-[3rem]
                  border border-white
                  bg-white/80
                  shadow-2xl
                  backdrop-blur-xl
                  dark:border-slate-800
                  dark:bg-slate-900/80
                "
              >
                {/* Decorative circle */}
                <div
                  className="
                    absolute -top-24
                    h-56 w-56
                    rounded-full
                    border-[24px]
                    border-emerald-900/5
                    dark:border-emerald-400/5
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative flex h-28 w-28
                    items-center justify-center
                    rounded-full
                    bg-emerald-900
                    text-white
                    shadow-xl
                    shadow-emerald-900/20
                    dark:bg-emerald-700
                  "
                >
                  <BookOpen size={48} strokeWidth={1.5} />
                </div>

                <h3
                  className="
                    mt-8 text-2xl font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  صلاة المسافر
                </h3>

                <p
                  className="
                    mt-2 text-center
                    text-sm leading-7
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  القصر • الجمع • أحكام السفر
                </p>

                {/* Prayer mini cards */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    ["الظهر", "٢"],
                    ["العصر", "٢"],
                    ["العشاء", "٢"],
                  ].map(([name, number]) => (
                    <div
                      key={name}
                      className="
                        min-w-[75px]
                        rounded-2xl
                        bg-emerald-50
                        px-4 py-3
                        text-center
                        dark:bg-emerald-950/60
                      "
                    >
                      <div className="text-xl font-bold text-emerald-900 dark:text-emerald-300">
                        {number}
                      </div>

                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div
                className="
                  absolute bottom-8 left-0
                  flex items-center gap-3
                  rounded-2xl
                  border border-white
                  bg-white/90
                  px-5 py-4
                  shadow-xl
                  backdrop-blur
                  dark:border-slate-800
                  dark:bg-slate-900/90
                "
              >
                <ShieldCheck
                  className="text-emerald-700 dark:text-emerald-400"
                  size={23}
                />

                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">
                    مصادر موثوقة
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    مع توضيح الخلاف الفقهي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="
          absolute bottom-0 right-0 left-0
          h-24
          bg-gradient-to-t
          from-[#f8f7f2]
          to-transparent
          dark:from-slate-950 
        "
      />
    </section>
  );
}

export default Hero;