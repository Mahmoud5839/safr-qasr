// TravelChecker.jsx
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  MapPin,
  Moon,
  Route,
  UserRound,
} from "lucide-react";

import { checkTravel } from "../../rules/travelChecker";
import TravelResult from "./TravelResult";
import Navbar from "../Navbar";

const initialForm = {
  hasStartedTravel: null,
  hasLeftBuiltUpArea: null,
  distanceKm: "",
  hasReachedDestination: null,
  destinationIsHome: null,
  intendedStayDays: null,
  isReturningHome: false,
  prayingBehindResidentImam: false,
};

const steps = [
  {
    id: "started",
    title: "هل بدأت السفر بالفعل؟",
    description: "أخبرنا أولًا هل بدأت رحلتك أم أنك ما زلت في محل إقامتك.",
    icon: Route,
  },
  {
    id: "builtUpArea",
    title: "هل غادرت عمران محل إقامتك؟",
    description:
      "هذه الخطوة تساعد في تحديد ما إذا كنت قد دخلت في حكم السفر.",
    icon: MapPin,
  },
  {
    id: "distance",
    title: "ما مسافة السفر تقريبًا؟",
    description: "أدخل المسافة التقريبية بين محل إقامتك ووجهتك بالكيلومترات.",
    icon: Route,
  },
  {
    id: "destination",
    title: "هل وصلت إلى وجهتك؟",
    description: "حدد ما إذا كنت قد وصلت بالفعل إلى المكان المقصود.",
    icon: MapPin,
  },
  {
    id: "home",
    title: "هل هذه الوجهة هي محل إقامتك؟",
    description:
      "الوصول إلى محل الإقامة يؤثر في استمرار حكم السفر.",
    icon: UserRound,
  },
  {
    id: "stay",
    title: "كم يومًا تنوي الإقامة؟",
    description:
      "هذه المعلومة مهمة لعرض الأقوال الفقهية المتعلقة بمدة الإقامة.",
    icon: Moon,
  },
  {
    id: "imam",
    title: "هل ستصلي خلف إمام مقيم؟",
    description:
      "الإجابة هنا مهمة عند تحديد حكم القصر في صلاة الجماعة.",
    icon: UserRound,
  },
];

function StepIndicator({ currentStep }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      {steps.map((step, index) => {
        const active = index === currentStep;
        const completed = index < currentStep;

        return (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={[
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all",
                completed
                  ? "bg-emerald-600 text-white"
                  : active
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500",
              ].join(" ")}
            >
              {completed ? <Check size={16} /> : index + 1}
            </div>

            {index !== steps.length - 1 && (
              <div
                className={[
                  "hidden h-px w-5 sm:block",
                  index < currentStep
                    ? "bg-emerald-500"
                    : "bg-slate-200 dark:bg-slate-700",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ChoiceButton({ children, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex min-h-[72px] w-full items-center justify-between rounded-2xl border p-4 text-right transition-all duration-200",
        selected
          ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm dark:border-emerald-400/60 dark:bg-emerald-950/30 dark:text-emerald-100"
          : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-700",
      ].join(" ")}
    >
      <span className="font-semibold">{children}</span>

      <span
        className={[
          "flex h-6 w-6 items-center justify-center rounded-full border",
          selected
            ? "border-emerald-600 bg-emerald-600 text-white"
            : "border-slate-300 dark:border-slate-600",
        ].join(" ")}
      >
        {selected && <Check size={14} />}
      </span>
    </button>
  );
}

export default function TravelChecker({
  onResult,
  className = "",
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const step = steps[currentStep];

  const canContinue = useMemo(() => {
    switch (step.id) {
      case "started":
        return form.hasStartedTravel !== null;

      case "builtUpArea":
        return form.hasLeftBuiltUpArea !== null;

      case "distance":
        return (
          form.distanceKm !== "" &&
          Number(form.distanceKm) >= 0
        );

      case "destination":
        return form.hasReachedDestination !== null;

      case "home":
        return form.destinationIsHome !== null;

      case "stay":
        return true;

      case "imam":
        return true;

      default:
        return false;
    }
  }, [step.id, form]);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };

  const goNext = () => {
    if (!canContinue) {
      setError("من فضلك اختر إجابة للمتابعة.");
      return;
    }

    setError("");

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    calculateResult();
  };

  const goBack = () => {
    if (currentStep === 0) return;

    setCurrentStep((prev) => prev - 1);
    setError("");
  };

  const calculateResult = () => {
    const normalizedForm = {
      ...form,
      distanceKm: Number(form.distanceKm),
      intendedStayDays:
        form.intendedStayDays === "" ||
          form.intendedStayDays === null
          ? null
          : Number(form.intendedStayDays),
    };

    const checkedResult = checkTravel(normalizedForm);

    if (!checkedResult?.success) {
      setError(
        checkedResult?.error?.message ||
        "تعذر تحليل البيانات المدخلة."
      );
      return;
    }

    setResult(checkedResult);

    if (onResult) {
      onResult(checkedResult);
    }
  };

  const resetChecker = () => {
    setForm(initialForm);
    setCurrentStep(0);
    setResult(null);
    setError("");
  };

  if (result) {
    return (
      <div className={className}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
              <Check size={16} />
              تم تحليل الحالة
            </span>

            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              نتيجة حالتك
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              هذه النتيجة مبنية على البيانات التي أدخلتها وعلى
              السياسة الفقهية المعتمدة في الموقع.
            </p>
          </div>

          <TravelResult
            result={result}
            onReset={resetChecker}
          />
        </div>
      </div>
    );
  }

  const Icon = step.icon;

  return (
    <section className={className} dir="rtl">
      <Navbar />
      <div className="mx-auto max-w-3xl pt-20">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Route size={16} />
            مساعد المسافر
          </span>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            اعرف حكم صلاتك أثناء السفر
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            أجب عن الأسئلة التالية، وسيقوم النظام بتحليل حالتك
            وفق القواعد الفقهية الموجودة  .
          </p>

        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
          <StepIndicator currentStep={currentStep} />

          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <Icon size={25} />
            </div>

            <div>
              <div className="mb-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                السؤال {currentStep + 1} من {steps.length}
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          </div>

          <div className="min-h-45">
            {step.id === "started" && (
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={form.hasStartedTravel === true}
                  onClick={() =>
                    updateField("hasStartedTravel", true)
                  }
                >
                  نعم، بدأت السفر
                </ChoiceButton>

                <ChoiceButton
                  selected={form.hasStartedTravel === false}
                  onClick={() =>
                    updateField("hasStartedTravel", false)
                  }
                >
                  لا، لم أبدأ السفر
                </ChoiceButton>
              </div>
            )}

            {step.id === "builtUpArea" && (
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={form.hasLeftBuiltUpArea === true}
                  onClick={() =>
                    updateField("hasLeftBuiltUpArea", true)
                  }
                >
                  نعم، غادرت عمران محل إقامتي
                </ChoiceButton>

                <ChoiceButton
                  selected={form.hasLeftBuiltUpArea === false}
                  onClick={() =>
                    updateField("hasLeftBuiltUpArea", false)
                  }
                >
                  لا، ما زلت داخل محل الإقامة
                </ChoiceButton>
              </div>
            )}

            {step.id === "distance" && (
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  المسافة بالكيلومتر
                </label>

                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={form.distanceKm}
                    onChange={(e) =>
                      updateField("distanceKm", e.target.value)
                    }
                    placeholder="مثال: 120"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg font-bold outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                  <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                    كم
                  </span>
                </div>
              </div>
            )}

            {step.id === "destination" && (
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={form.hasReachedDestination === true}
                  onClick={() =>
                    updateField("hasReachedDestination", true)
                  }
                >
                  نعم، وصلت إلى الوجهة
                </ChoiceButton>

                <ChoiceButton
                  selected={form.hasReachedDestination === false}
                  onClick={() =>
                    updateField("hasReachedDestination", false)
                  }
                >
                  لا، لم أصل بعد
                </ChoiceButton>
              </div>
            )}

            {step.id === "home" && (
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={form.destinationIsHome === true}
                  onClick={() =>
                    updateField("destinationIsHome", true)
                  }
                >
                  نعم، هذا محل إقامتي
                </ChoiceButton>

                <ChoiceButton
                  selected={form.destinationIsHome === false}
                  onClick={() =>
                    updateField("destinationIsHome", false)
                  }
                >
                  لا، ليست محل إقامتي
                </ChoiceButton>
              </div>
            )}

            {step.id === "stay" && (
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  عدد أيام الإقامة المتوقعة
                </label>

                <input
                  type="number"
                  min="0"
                  step="1"
                  value={form.intendedStayDays ?? ""}
                  onChange={(e) =>
                    updateField(
                      "intendedStayDays",
                      e.target.value === ""
                        ? null
                        : e.target.value
                    )
                  }
                  placeholder="اتركه فارغًا إذا لم تحدد مدة"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg font-bold outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />

                <div className="mt-4 flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-800 dark:bg-amber-950/20 dark:text-amber-300">
                  <CircleHelp
                    size={20}
                    className="mt-1 shrink-0"
                  />

                  <p>
                    توجد أقوال فقهية متعددة في بعض مسائل مدة
                    الإقامة، لذلك لن نفترض حكمًا واحدًا عند
                    وجود خلاف معتبر.
                  </p>
                </div>
              </div>
            )}

            {step.id === "imam" && (
              <div className="grid gap-3 sm:grid-cols-2">
                <ChoiceButton
                  selected={
                    form.prayingBehindResidentImam === true
                  }
                  onClick={() =>
                    updateField(
                      "prayingBehindResidentImam",
                      true
                    )
                  }
                >
                  نعم، أصلي خلف إمام مقيم
                </ChoiceButton>

                <ChoiceButton
                  selected={
                    form.prayingBehindResidentImam === false
                  }
                  onClick={() =>
                    updateField(
                      "prayingBehindResidentImam",
                      false
                    )
                  }
                >
                  لا
                </ChoiceButton>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-100 pt-6 dark:border-slate-800">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl px-4 py-3 font-bold text-slate-600 transition hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-30 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ArrowRight size={18} />
              السابق
            </button>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.98]"
            >
              {currentStep === steps.length - 1
                ? "اعرف النتيجة"
                : "التالي"}

              <ArrowLeft size={18} />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-500 dark:text-slate-500">
          هذه الأداة للمساعدة والفهم، ولا تغني عن سؤال أهل العلم
          في الحالات الخاصة أو المسائل التي تحتاج إلى تفصيل.
        </p>
      </div>
    </section>
  );
}