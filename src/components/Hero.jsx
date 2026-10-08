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
        pt-24 sm:pt-28
        dark:bg-slate-950
      "
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -right-32 top-20
            h-72 w-72
            rounded-full
            bg-emerald-900/5
            blur-3xl
            sm:-right-40 sm:h-96 sm:w-96
            dark:bg-emerald-400/5
          "
        />

        <div
          className="
            absolute -left-32 bottom-10
            h-72 w-72
            rounded-full
            bg-amber-500/5
            blur-3xl
            sm:-left-40 sm:h-96 sm:w-96
            dark:bg-amber-400/5
          "
        />

        {/* Islamic geometric pattern */}
        <div
          className="
            absolute right-0 top-0
            h-full
            w-full
            opacity-[0.025]
            sm:w-1/2
            lg:w-1/3
            dark:opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(30deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(150deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(30deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(150deg, #064e3b 12%, transparent 12.5%, transparent 87%, #064e3b 87.5%, #064e3b),
              linear-gradient(60deg, #064e3b 25%, transparent 25.5%, transparent 75%, #064e3b 75%)
            `,
            backgroundSize: "60px 105px",
          }}
        />
      </div>

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100vh-6rem)]
          max-w-7xl
          items-center
          px-4 py-12
          sm:px-6 sm:py-16
          lg:px-8
        "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Text */}
          <div className="w-full max-w-2xl">
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex max-w-full
                items-center gap-2
                rounded-full
                border border-emerald-900/10
                bg-white/70
                px-3 py-2
                text-xs font-semibold
                text-emerald-900
                shadow-sm
                backdrop-blur
                sm:mb-6 sm:px-4 sm:text-sm
                dark:border-emerald-400/10
                dark:bg-slate-900/60
                dark:text-emerald-300
              "
            >
              <Sparkles size={14} className="shrink-0 sm:h-4 sm:w-4" />

              <span>دليلك لفهم صلاة المسافر</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-extrabold
                leading-[1.25]
                tracking-tight
                text-slate-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              مسافر؟
              <br />

              <span className="text-emerald-900 dark:text-emerald-400">
                اعرف كيف تصلي.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-8
                text-slate-600
                sm:mt-7
                sm:text-lg
                sm:leading-9
                lg:text-xl
                dark:text-slate-300
              "
            >
              دليل مبسط لأحكام صلاة المسافر، القصر والجمع،
              والرخص المتعلقة بالسفر، مع الاعتماد على مصادر
              شرعية موثوقة.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                grid
                gap-3
                sm:mt-9
                sm:flex
                sm:flex-row
              "
            >
              <a
                href="/#travel-checker"
                className="
                  group
                  flex min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-emerald-900
                  px-6 py-3.5
                  text-base font-bold
                  text-white
                  shadow-xl
                  shadow-emerald-900/15
                  transition-all
                  hover:-translate-y-1
                  hover:bg-emerald-800
                  hover:shadow-2xl
                  sm:w-auto
                  sm:px-7 sm:py-4
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
                href="/guide"
                className="
                  flex min-h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border border-slate-200
                  bg-white/70
                  px-6 py-3.5
                  text-base font-semibold
                  text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-all
                  hover:-translate-y-1
                  hover:border-emerald-200
                  hover:text-emerald-900
                  sm:w-auto
                  sm:px-7 sm:py-4
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
                mt-7
                flex
                items-start
                gap-3
                text-xs
                leading-6
                text-slate-500
                sm:mt-9
                sm:items-center
                sm:text-sm
                dark:text-slate-400
              "
            >
              <div
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
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
                  flex flex-col
                  items-center
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
                    relative
                    flex h-28 w-28
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

                <h2
                  className="
                    mt-8
                    text-2xl font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  صلاة المسافر
                </h2>

                <p
                  className="
                    mt-2
                    text-center
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
          pointer-events-none
          absolute bottom-0 right-0 left-0
          h-16
          bg-gradient-to-t
          from-[#f8f7f2]
          to-transparent
          sm:h-24
          dark:from-slate-950
        "
      />
    </section>
  );
}

export default Hero;