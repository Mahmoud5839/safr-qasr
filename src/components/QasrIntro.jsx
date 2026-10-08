import {
  ArrowLeft,
  BookOpen,
  Check,
  ExternalLink,
  Info,
} from "lucide-react";

import {
  qasrRuling,
  qasrDistance,
  travelerPrayers,
} from "../data/rulings";

import sources from "../data/sources";

function PrayerCard({ prayer }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
        sm:p-6
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
            {prayer.name}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
            {prayer.description}
          </p>
        </div>

        {prayer.canBeShortened && (
          <div
            className="
              flex h-9 w-9
              shrink-0
              items-center justify-center
              rounded-full
              bg-emerald-100
              text-emerald-700
              dark:bg-emerald-950
              dark:text-emerald-400
            "
          >
            <Check size={18} />
          </div>
        )}
      </div>

      <div
        className="
          mt-5
          flex items-end justify-between
          gap-3
          border-t border-slate-100
          pt-4
          sm:mt-6
          sm:pt-5
          dark:border-slate-800
        "
      >
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            عدد الركعات للمسافر
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            {prayer.travelerRakahs}
          </p>
        </div>

        <span
          className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold sm:px-3 sm:text-xs ${
            prayer.canBeShortened
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          }`}
        >
          {prayer.status}
        </span>
      </div>
    </div>
  );
}

function QasrIntro() {
  return (
    <section
      id="qasr"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f2]
        py-14
        sm:py-20
        dark:bg-slate-950
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-32
            top-20
            h-64
            w-64
            rounded-full
            bg-emerald-100/50
            blur-3xl
            sm:h-72
            sm:w-72
            dark:bg-emerald-900/10
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-20
            h-64
            w-64
            rounded-full
            bg-amber-100/40
            blur-3xl
            sm:h-72
            sm:w-72
            dark:bg-amber-900/10
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-50
              px-3
              py-2
              text-xs
              font-medium
              text-emerald-700
              sm:mb-5
              sm:px-4
              sm:text-sm
              dark:bg-emerald-950/50
              dark:text-emerald-400
            "
          >
            <BookOpen size={15} />

            <span>صلاة القصر</span>
          </div>

          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-3xl
              md:text-4xl
              dark:text-white
            "
          >
            {qasrRuling.title}
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-8
              text-slate-600
              sm:mt-5
              sm:text-lg
              sm:leading-9
              dark:text-slate-300
            "
          >
            {qasrRuling.shortDescription}
          </p>
        </div>

        {/* Main explanation */}
        <div
          className="
            mx-auto
            mt-8
            max-w-4xl
            rounded-3xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            sm:mt-12
            sm:p-8
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-2xl
                bg-emerald-100
                text-emerald-700
                sm:h-12 sm:w-12
                dark:bg-emerald-950
                dark:text-emerald-400
              "
            >
              <BookOpen size={21} className="sm:h-[23px] sm:w-[23px]" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                باختصار
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-8
                  text-slate-600
                  sm:mt-3
                  sm:text-base
                  dark:text-slate-300
                "
              >
                {qasrRuling.description}
              </p>
            </div>
          </div>
        </div>

        {/* Prayer cards */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 text-center sm:mb-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              كيف تكون الصلاة للمسافر؟
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 sm:mt-3 sm:text-base dark:text-slate-400">
              القصر يتعلق بالصلوات الرباعية فقط.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {travelerPrayers.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        </div>

        {/* Distance */}
        <div
          className="
            mx-auto
            mt-12
            max-w-4xl
            rounded-3xl
            border border-emerald-200
            bg-emerald-50
            p-5
            sm:mt-16
            sm:p-7
            dark:border-emerald-900/50
            dark:bg-emerald-950/20
          "
        >
          <div className="flex items-start gap-3 sm:gap-5">
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-2xl
                bg-emerald-100
                text-emerald-700
                sm:h-12 sm:w-12
                dark:bg-emerald-950
                dark:text-emerald-400
              "
            >
              <Info size={21} className="sm:h-[23px] sm:w-[23px]" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-emerald-700 sm:text-sm dark:text-emerald-400">
                مسافة السفر
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                {qasrDistance.displayValue}
              </h3>

              <p className="mt-2 text-sm leading-8 text-slate-600 sm:mt-3 sm:text-base dark:text-slate-300">
                {qasrDistance.note}
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 text-center sm:mb-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              أهم النقاط
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {qasrRuling.principles.map((principle) => (
              <div
                key={principle.id}
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-5
                  sm:p-6
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-600 sm:mt-3 dark:text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fiqh note */}
        <div
          className="
            mx-auto
            mt-12
            max-w-4xl
            rounded-3xl
            border border-blue-200
            bg-blue-50
            p-5
            sm:mt-16
            sm:p-6
            dark:border-blue-900/50
            dark:bg-blue-950/20
          "
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <Info
              size={21}
              className="mt-1 shrink-0 text-blue-600 sm:h-[23px] sm:w-[23px] dark:text-blue-400"
            />

            <div className="min-w-0">
              <h3 className="font-bold text-blue-900 dark:text-blue-300">
                {qasrRuling.note.title}
              </h3>

              <p className="mt-2 text-sm leading-8 text-blue-800 sm:mt-3 sm:text-base dark:text-blue-200">
                {qasrRuling.note.text}
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 text-center sm:mb-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              المصادر
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 sm:mt-3 sm:text-base dark:text-slate-400">
              تم الاعتماد على مصادر شرعية موثوقة، مع بيان المصدر المرتبط بكل
              معلومة.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
            {qasrRuling.sourceReferences.map((reference) => {
              const source = sources[reference.sourceId];

              if (!source) return null;

              return (
                <a
                  key={`${reference.sourceId}-${reference.title}`}
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-4
                    transition
                    hover:border-emerald-300
                    hover:shadow-md
                    sm:gap-4
                    sm:p-5
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:hover:border-emerald-700
                  "
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-emerald-700 sm:text-sm dark:text-emerald-400">
                        {source.name}
                      </p>

                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500 sm:px-2.5 sm:py-1 sm:text-xs dark:bg-slate-800 dark:text-slate-400">
                        {source.label}
                      </span>
                    </div>

                    <h4 className="mt-1.5 text-sm font-bold leading-6 text-slate-900 sm:mt-2 sm:text-base dark:text-white">
                      {reference.title}
                    </h4>

                    {(reference.fatwaNumber || reference.date) && (
                      <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs dark:text-slate-400">
                        {reference.fatwaNumber &&
                          `فتوى رقم ${reference.fatwaNumber}`}
                        {reference.fatwaNumber && reference.date && " • "}
                        {reference.date}
                      </p>
                    )}
                  </div>

                  <ExternalLink
                    size={18}
                    className="
                      shrink-0
                      text-slate-400
                      transition
                      group-hover:text-emerald-600
                      sm:h-5 sm:w-5
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-16">
          <a
            href="#jam"
            className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-emerald-700
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-emerald-700/20
              transition
              hover:bg-emerald-800
              sm:w-auto
              sm:text-base
            "
          >
            تعرف على الجمع
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default QasrIntro;