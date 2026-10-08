import { travelSources } from "../data/travelRules";
import Navbar from "../components/Navbar";

import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function normalizeSources(sourceObject) {
  if (!sourceObject) return [];

  return Object.entries(sourceObject)
    .map(([key, source]) => {
      if (!source || typeof source !== "object") return null;

      return {
        id: source.id || source.sourceId || key,
        key,
        name:
          source.name ||
          source.sourceName ||
          source.title ||
          "مصدر شرعي",
        title: source.title || source.name || source.sourceName || "",
        description:
          source.description ||
          source.summary ||
          "مصدر من المصادر المعتمدة في قاعدة بيانات المشروع.",
        url: source.url || source.link || null,
        type: source.type || source.category || "مصدر فقهي",
      };
    })
    .filter(Boolean);
}

function SourceCard({ source }) {
  return (
    <article
      className="
        group rounded-[1.75rem]
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
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-2xl
            bg-emerald-50
            text-emerald-700
            sm:h-12 sm:w-12
            dark:bg-emerald-950/40
            dark:text-emerald-400
          "
        >
          <BookOpen size={21} className="sm:hidden" />
          <BookOpen size={23} className="hidden sm:block" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="break-words text-lg font-black text-slate-900 sm:text-xl dark:text-white">
              {source.name}
            </h2>

            <span
              className="
                rounded-full
                bg-slate-100
                px-2.5 py-1
                text-[11px] font-bold
                text-slate-600
                sm:px-3 sm:text-xs
                dark:bg-slate-800
                dark:text-slate-300
              "
            >
              {source.type}
            </span>
          </div>

          {source.title && source.title !== source.name && (
            <p className="mt-1 break-words text-sm font-semibold text-slate-500 dark:text-slate-400">
              {source.title}
            </p>
          )}
        </div>
      </div>

      <p className="mt-5 break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-300">
        {source.description}
      </p>

      <div
        className="
          mt-5
          flex flex-col items-start gap-4
          border-t border-slate-100
          pt-5
          sm:mt-6
          sm:flex-row sm:items-center sm:justify-between
          dark:border-slate-800
        "
      >
        <span className="text-xs font-semibold leading-6 text-slate-400">
          المصدر المستخدم في قاعدة أحكام السفر
        </span>

        {source.url ? (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-full shrink-0
              items-center justify-center gap-2
              rounded-xl
              bg-emerald-600
              px-4 py-2.5
              text-sm font-bold
              text-white
              transition
              hover:bg-emerald-700
              sm:w-auto
            "
          >
            زيارة المصدر
            <ExternalLink size={15} />
          </a>
        ) : (
          <span className="text-xs font-semibold text-amber-600">
            الرابط غير متوفر
          </span>
        )}
      </div>
    </article>
  );
}

export default function Sources() {
  const sources = normalizeSources(travelSources);

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#f8f7f2]
        text-slate-900
        dark:bg-slate-950
        dark:text-white
      "
    >
      <main
        className="
          mx-auto max-w-6xl
          px-4
          pb-14
          pt-28
          sm:px-6
          sm:pb-20
          lg:px-8
        "
      >
        <Navbar />

        {/* Header */}
        <section className="mb-8 text-center sm:mb-10">
          <div
            className="
              mx-auto mb-4
              flex h-14 w-14
              items-center justify-center
              rounded-3xl
              bg-emerald-100
              text-emerald-700
              sm:mb-5
              sm:h-16 sm:w-16
              dark:bg-emerald-950/50
              dark:text-emerald-400
            "
          >
            <ShieldCheck size={27} className="sm:hidden" />
            <ShieldCheck size={30} className="hidden sm:block" />
          </div>

          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
            <Sparkles size={15} />
            مصادر الأحكام
          </div>

          <h1 className="text-2xl font-black tracking-tight sm:text-4xl">
            المصادر الشرعية
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-300">
            المصادر التي يعتمد عليها المشروع في بناء الأحكام والمعلومات
            المتعلقة بصلاة القصر والجمع وأحكام السفر.
          </p>
        </section>

        {/* Important notice */}
        <section
          className="
            mb-8 rounded-3xl
            border border-emerald-200
            bg-emerald-50
            p-5
            sm:mb-10 sm:p-6
            dark:border-emerald-900/60
            dark:bg-emerald-950/20
          "
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <ShieldCheck
              size={22}
              className="mt-1 shrink-0 text-emerald-700 sm:hidden dark:text-emerald-400"
            />

            <ShieldCheck
              size={24}
              className="mt-1 hidden shrink-0 text-emerald-700 sm:block dark:text-emerald-400"
            />

            <div className="min-w-0">
              <h2 className="font-black text-emerald-900 dark:text-emerald-300">
                لماذا نعرض المصادر؟
              </h2>

              <p className="mt-2 text-sm leading-7 text-emerald-900/80 sm:text-base sm:leading-8 dark:text-emerald-200/80">
                الهدف أن يستطيع المستخدم الرجوع إلى المصدر الأصلي للحكم،
                ومعرفة الجهة التي صدر عنها، بدل الاكتفاء بالنص المعروض داخل
                الموقع.
              </p>
            </div>
          </div>
        </section>

        {/* Sources */}
        {sources.length > 0 ? (
          <section>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
                  مصادر المشروع
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {sources.length} مصادر مرتبطة بقاعدة أحكام السفر.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {sources.map((source) => (
                <SourceCard
                  key={source.id}
                  source={source}
                />
              ))}
            </div>
          </section>
        ) : (
          <section
            className="
              rounded-3xl
              border border-slate-200
              bg-white
              p-6
              text-center
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <BookOpen
              size={30}
              className="mx-auto text-slate-400 sm:h-8 sm:w-8"
            />

            <h2 className="mt-4 text-lg font-black sm:text-xl">
              لا توجد مصادر معروضة حاليًا
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
              تأكد من أن travelSources مُصدّرة من ملف قواعد السفر.
            </p>
          </section>
        )}

        {/* Footer note */}
        <section
          className="
            mt-8 rounded-3xl
            border border-slate-200
            bg-white
            p-5
            sm:mt-10 sm:p-6
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <p className="text-sm leading-7 text-slate-500 sm:leading-8 dark:text-slate-400">
            <strong className="text-slate-700 dark:text-slate-200">
              تنبيه:
            </strong>{" "}
            عرض المصدر لا يعني أن جميع المصادر تتفق في كل تفاصيل المسألة.
            عند وجود خلاف فقهي، يسعى المشروع إلى توضيح وجود الخلاف وربط
            الحكم بالمصدر المرتبط به.
          </p>
        </section>
      </main>
    </div>
  );
}
