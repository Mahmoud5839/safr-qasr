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
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {prayer.name}
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {prayer.description}
          </p>
        </div>

        {prayer.canBeShortened && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            <Check size={18} />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            عدد الركعات للمسافر
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            {prayer.travelerRakahs}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${
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
      className="relative overflow-hidden bg-[#f8f7f2] py-20 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-900/10" />

        <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl dark:bg-amber-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            <BookOpen size={16} />

            <span>صلاة القصر</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {qasrRuling.title}
          </h2>

          <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">
            {qasrRuling.shortDescription}
          </p>
        </div>

        {/* Main explanation */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <BookOpen size={23} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                باختصار
              </h3>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                {qasrRuling.description}
              </p>
            </div>
          </div>
        </div>

        {/* Prayer cards */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              كيف تكون الصلاة للمسافر؟
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              القصر يتعلق بالصلوات الرباعية فقط.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {travelerPrayers.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        </div>

        {/* Distance */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-emerald-200 bg-emerald-50 p-7 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <Info size={23} />
            </div>

            <div>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                مسافة السفر
              </p>

              <h3 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
                {qasrDistance.displayValue}
              </h3>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                {qasrDistance.note}
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              أهم النقاط
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {qasrRuling.principles.map((principle) => (
              <div
                key={principle.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fiqh note */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <div className="flex items-start gap-4">
            <Info
              size={23}
              className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
            />

            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-300">
                {qasrRuling.note.title}
              </h3>

              <p className="mt-3 leading-8 text-blue-800 dark:text-blue-200">
                {qasrRuling.note.text}
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              المصادر
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              تم الاعتماد على مصادر شرعية موثوقة، مع بيان المصدر المرتبط بكل
              معلومة.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {qasrRuling.sourceReferences.map((reference) => {
              const source = sources[reference.sourceId];

              if (!source) return null;

              return (
                <a
                  key={`${reference.sourceId}-${reference.title}`}
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                        {source.name}
                      </p>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {source.label}
                      </span>
                    </div>

                    <h4 className="mt-2 font-bold text-slate-900 dark:text-white">
                      {reference.title}
                    </h4>

                    {(reference.fatwaNumber || reference.date) && (
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {reference.fatwaNumber &&
                          `فتوى رقم ${reference.fatwaNumber}`}
                        {reference.fatwaNumber && reference.date && " • "}
                        {reference.date}
                      </p>
                    )}
                  </div>

                  <ExternalLink
                    size={20}
                    className="shrink-0 text-slate-400 transition group-hover:text-emerald-600"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#jam"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
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