import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BookOpen,
  ExternalLink,
  Info,
  Link,
} from "lucide-react";

import {
  jamRuling,
  jamTypes,
  combinablePrayers,
} from "../data/jam";

import sources from "../data/sources";

function TypeIcon({ type }) {
  if (type === "jam-taqdim") {
    return <ArrowUp size={22} />;
  }

  return <ArrowDown size={22} />;
}

function JamIntro() {
  return (
    <section
      id="jam"
      className="relative overflow-hidden bg-white py-20 dark:bg-slate-950"
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
            <Link size={16} />

            <span>الجمع بين الصلوات</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {jamRuling.title}
          </h2>

          <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">
            {jamRuling.shortDescription}
          </p>
        </div>

        {/* Main explanation */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <BookOpen size={23} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                باختصار
              </h3>

              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                {jamRuling.description}
              </p>
            </div>
          </div>
        </div>

        {/* Types */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              نوعا الجمع
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              يمكن أن يكون الجمع تقديمًا أو تأخيرًا حسب الحالة والسبب المبيح.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {jamTypes.map((type) => (
              <div
                key={type.id}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                    <TypeIcon type={type.id} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {type.title}
                    </h4>

                    <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                      {type.description}
                    </p>

                    <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <span className="font-bold text-slate-900 dark:text-white">
                        مثال:
                      </span>{" "}
                      {type.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combinable prayers */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              الصلوات التي يمكن جمعها
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              الجمع لا يشمل جميع الصلوات.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {combinablePrayers.map((pair) => (
              <div
                key={pair.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {pair.firstPrayer} + {pair.secondPrayer}
                  </h4>
                </div>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>

          {/* Fajr */}
          <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
            <div className="flex items-start gap-4">
              <Info className="mt-1 shrink-0 text-amber-600" size={22} />

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  وماذا عن الفجر؟
                </h4>

                <p className="mt-2 leading-8 text-slate-700 dark:text-slate-300">
                  صلاة الفجر لا تُجمع مع صلاة أخرى، ويجب أداؤها في وقتها.
                </p>
              </div>
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
            {jamRuling.principles.map((principle) => (
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
                {jamRuling.note.title}
              </h3>

              <p className="mt-3 leading-8 text-blue-800 dark:text-blue-200">
                {jamRuling.note.text}
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
            {jamRuling.sourceReferences.map((reference) => {
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
            href="guide"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
          >
            انتقل إلى دليل المسافر
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default JamIntro;