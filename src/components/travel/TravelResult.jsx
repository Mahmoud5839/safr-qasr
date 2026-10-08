import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  MapPin,
  RotateCcw,
  ShieldAlert,
  XCircle,
} from "lucide-react";

function ResultBadge({ available, label }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold",
        available
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
      ].join(" ")}
    >
      {available ? (
        <CheckCircle2 size={17} />
      ) : (
        <XCircle size={17} />
      )}

      {label}
    </div>
  );
}

function getTravelStatusText(status) {
  switch (status) {
    case "traveler":
      return "أنت في حكم المسافر";

    case "resident":
      return "أنت لست في حكم المسافر في هذه الحالة";

    case "travel-ended":
      return "انتهى حكم السفر";

    default:
      return "حالة السفر تحتاج إلى مزيد من التحقق";
  }
}

function getSourceTitle(source) {
  return (
    source?.title ||
    source?.name ||
    source?.sourceName ||
    "المصدر الشرعي"
  );
}

function getSourceUrl(source) {
  return source?.url || source?.link || null;
}

export default function TravelResult({
  result,
  onReset,
}) {
  const qasrAvailable = Boolean(
    result?.qasr?.canShorten
  );

  const jamAvailable = Boolean(
    result?.jam?.canCombine
  );

  const statusText = getTravelStatusText(
    result?.travelStatus
  );

  const sources = result?.sources || [];

  return (
    <div dir="rtl" className="space-y-5">
      {/* Main status */}
      <div className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 dark:border-emerald-900/50 dark:from-emerald-950/30 dark:to-slate-900 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <MapPin size={20} />
              <span className="font-bold">
                حالة السفر
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
              {statusText}
            </h2>

            {result?.distance?.distanceKm !== undefined && (
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                المسافة المدخلة:{" "}
                <strong>
                  {result.distance.distanceKm} كم
                </strong>
              </p>
            )}
          </div>

          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
            <CheckCircle2 size={38} />
          </div>
        </div>
      </div>

      {/* Qasr + Jam */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-500">
                صلاة القصر
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {qasrAvailable ? "متاح" : "غير متاح"}
              </h3>
            </div>

            <ResultBadge
              available={qasrAvailable}
              label={qasrAvailable ? "القصر متاح" : "لا يوجد قصر"}
            />
          </div>

          <p className="leading-8 text-slate-600 dark:text-slate-400">
            {result?.qasr?.reason ||
              "لا توجد تفاصيل إضافية."}
          </p>

          {result?.qasr?.warning && (
            <div className="mt-4 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-800 dark:bg-amber-950/20 dark:text-amber-300">
              <ShieldAlert
                size={19}
                className="mt-1 shrink-0"
              />

              <span>{result.qasr.warning}</span>
            </div>
          )}
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-slate-500">
                الجمع
              </p>

              <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                {jamAvailable ? "متاح كسبب" : "غير متاح"}
              </h3>
            </div>

            <ResultBadge
              available={jamAvailable}
              label={
                jamAvailable
                  ? "السفر سبب للجمع"
                  : "غير متاح"
              }
            />
          </div>

          <p className="leading-8 text-slate-600 dark:text-slate-400">
            {result?.jam?.reason ||
              "لا توجد تفاصيل إضافية."}
          </p>

          {result?.jam?.warning && (
            <div className="mt-4 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-800 dark:bg-amber-950/20 dark:text-amber-300">
              <AlertCircle
                size={19}
                className="mt-1 shrink-0"
              />

              <span>{result.jam.warning}</span>
            </div>
          )}
        </div>
      </div>

      {/* Stay duration */}
      {result?.stayDuration && (
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen
              size={21}
              className="text-emerald-600"
            />

            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              مدة الإقامة
            </h3>
          </div>

          {result.stayDuration.fiqhDifference ? (
            <div className="rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-800 dark:bg-blue-950/20 dark:text-blue-300">
              توجد آراء فقهية مختلفة في هذه المسألة، ولذلك
              يعرض الموقع الخلاف بدلًا من إخفائه.
            </div>
          ) : (
            <p className="leading-8 text-slate-600 dark:text-slate-400">
              {result.stayDuration.description ||
                "تم تحليل مدة الإقامة."}
            </p>
          )}
        </div>
      )}

      {/* Sources */}
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <BookOpen
              size={22}
              className="text-emerald-600"
            />

            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              المصادر
            </h3>
          </div>

          <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
            يمكنك الرجوع إلى المصادر المرتبطة بالحكم المعروض.
          </p>
        </div>

        {sources.length > 0 ? (
          <div className="space-y-3">
            {sources.map((source, index) => {
              const url = getSourceUrl(source);

              return (
                <div
                  key={
                    source?.sourceId ||
                    source?.id ||
                    source?.url ||
                    index
                  }
                  className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {getSourceTitle(source)}
                    </p>

                    {source?.sourceName && (
                      <p className="mt-1 text-sm text-slate-500">
                        {source.sourceName}
                      </p>
                    )}
                  </div>

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800"
                    >
                      فتح المصدر
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-50 p-5 text-sm text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
            لا توجد مصادر مرتبطة بالنتيجة الحالية.
          </div>
        )}
      </div>

      {/* Reset */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <RotateCcw size={17} />
          إعادة التقييم
        </button>
      </div>
    </div> 
  );
}