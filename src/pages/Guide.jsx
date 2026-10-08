import Navbar from "../components/Navbar";

import {
  BookOpen,
  CheckCircle2,
  CircleHelp,
  MapPin,
  Moon,
  Route,
  Scale,
  ShieldCheck,
  Timer,
} from "lucide-react";

const sections = [
  {
    id: "what-is-travel",
    icon: Route,
    title: "متى يُعتبر الإنسان مسافرًا؟",
    description:
      "أحكام السفر لا تبدأ بمجرد نية الخروج فقط، بل لا بد من تحقق السفر ومفارقة محل الإقامة وفق الضوابط الفقهية.",
    points: [
      "من الضوابط التي تذكرها دار الإفتاء: مفارقة عمران محل الإقامة والخروج في سفر حقيقي.",
      "لا يُعتبر مجرد التنقل داخل المدينة أو المنطقة سفرًا يترتب عليه القصر.",
      "تختلف بعض التفاصيل باختلاف طبيعة المدن واتصال عمرانها.",
    ],
    note:
      "هذه المسألة لها تفاصيل فقهية، ولذلك يعرض موقعنا الحكم بصورة إرشادية ولا يتعامل مع كل الحالات الخاصة على أنها حالة واحدة.",
    source: "دار الإفتاء المصرية",
    sourceUrl:
      "https://www.dar-alifta.org/ar/Fatwa/Details/18697/بداية-القصر-في-ظل-الاتساع-العمراني",
  },

  {
    id: "distance",
    icon: MapPin,
    title: "ما مسافة السفر التي يشرع معها القصر؟",
    description:
      "تقدير مسافة السفر من المسائل التي وقع فيها خلاف بين الفقهاء.",
    points: [
      "اختارت دار الإفتاء المصرية للفتوى أن مسافة القصر تبلغ نحو 83 كيلومترًا.",
      "هذا التقدير مبني على 48 ميلًا وفق التقدير الذي اعتمدته دار الإفتاء.",
      "هناك تقديرات أخرى عند بعض المذاهب والفقهاء، لذلك لا ينبغي عرض رقم واحد باعتباره محل اتفاق بين الجميع.",
    ],
    highlight: "83 كم تقريبًا",
    note:
      "هذا هو التقدير المعتمد في السياسة الافتراضية لموقعنا، وليس ادعاءً بأن جميع المذاهب متفقة عليه.",
    source: "دار الإفتاء المصرية – فتوى رقم 8831",
    sourceUrl:
      "https://www.dar-alifta.org/ar/fatwa/details/22385/",
  },

  {
    id: "qasr",
    icon: Moon,
    title: "ما هي صلاة القصر؟",
    description:
      "القصر هو أداء الصلاة الرباعية ركعتين للمسافر عند تحقق شروط السفر.",
    points: [
      "الظهر: أربع ركعات في الأصل، وتُصلّى ركعتين للمسافر.",
      "العصر: أربع ركعات في الأصل، وتُصلّى ركعتين للمسافر.",
      "العشاء: أربع ركعات في الأصل، وتُصلّى ركعتين للمسافر.",
      "الفجر لا يُقصر لأنه ركعتان أصلًا.",
      "المغرب لا يُقصر لأنه ثلاث ركعات.",
    ],
    note:
      "القصر يتعلق بعدد ركعات الصلاة، وليس بوقت الصلاة. أما الجمع فهو حكم آخر يتعلق بوقت أداء الصلاتين.",
    source: "دار الإفتاء المصرية",
    sourceUrl:
      "https://dar-alifta.org/ar/fatwa/details/11050/",
  },

  {
    id: "start-qasr",
    icon: CheckCircle2,
    title: "متى يبدأ القصر؟",
    description:
      "لا يبدأ القصر لمجرد وجود نية السفر في الصورة المعتادة، بل بعد تحقق السفر ومفارقة محل الإقامة.",
    points: [
      "من الضوابط التي ذكرتها دار الإفتاء: مفارقة عمران محل الإقامة.",
      "في المدن الحديثة يمكن أن تكون المسألة مرتبطة بمجاوزة حدود العمران المتصل بمحل الإقامة.",
      "هناك أقوال فقهية في بعض الصور الاستثنائية حول بداية الترخص من المنزل عند تحقق العزم والتهيؤ للسفر.",
    ],
    note:
      "لذلك يعتمد الـ Travel Checker في الحالة الأساسية على سؤال المستخدم: هل غادرت عمران محل إقامتك؟",
    source: "دار الإفتاء المصرية",
    sourceUrl:
      "https://www.dar-alifta.org/ar/Fatwa/Details/18697/",
  },

  {
    id: "stay",
    icon: Timer,
    title: "ماذا عن مدة الإقامة؟",
    description:
      "مدة الإقامة المقصودة في الوجهة من أكثر مسائل السفر التي يظهر فيها الخلاف الفقهي.",
    points: [
      "ذكرت دار الإفتاء أن جمهور الفقهاء يربطون الحكم بمن نوى الإقامة أقل من أربعة أيام.",
      "وعند الإمام أبي حنيفة ورد تقدير مختلف يصل إلى أقل من خمسة عشر يومًا.",
      "لذلك لا يعرض موقعنا مدة واحدة باعتبارها محل اتفاق بين جميع الفقهاء.",
    ],
    note:
      "عندما تكون مدة الإقامة مؤثرة في الحكم، ينبغي معرفة القول الفقهي الذي يتبناه المستخدم أو الرجوع إلى أهل العلم في الحالة الخاصة.",
    source: "دار الإفتاء المصرية – فتوى رقم 156",
    sourceUrl:
      "https://dar-alifta.org/ar/fatwa/details/11050/",
  },

  {
    id: "jam",
    icon: BookOpen,
    title: "ما هو جمع الصلاة؟",
    description:
      "الجمع هو أداء صلاتين يمكن الجمع بينهما في وقت إحداهما وفق الضوابط الشرعية.",
    points: [
      "يمكن الجمع بين الظهر والعصر.",
      "يمكن الجمع بين المغرب والعشاء.",
      "لا تُجمع صلاة الفجر مع صلاة أخرى.",
      "جمع التقديم: أداء الصلاتين في وقت الصلاة الأولى.",
      "جمع التأخير: أداء الصلاتين في وقت الصلاة الثانية.",
    ],
    note:
      "الجمع والقصر حكمان مختلفان. فقد يكون المسافر قاصرًا دون أن يجمع، كما أن مجرد ثبوت وصف السفر لا يعني أن كل تفاصيل الجمع متحققة في كل حالة.",
    source: "دار الإفتاء المصرية",
    sourceUrl:
      "https://www.dar-alifta.org/ar/Fatwa/Details/12466/",
  },

  {
    id: "qasr-vs-jam",
    icon: Scale,
    title: "ما الفرق بين القصر والجمع؟",
    description:
      "من أهم الأشياء التي يجب أن يعرفها المسافر أن القصر والجمع ليسا شيئًا واحدًا.",
    comparison: [
      {
        title: "القصر",
        text: "يتعلق بعدد ركعات الصلاة الرباعية.",
        example: "الظهر 4 ← 2 ركعتين.",
      },
      {
        title: "الجمع",
        text: "يتعلق بوقت أداء صلاتين يمكن الجمع بينهما.",
        example: "الظهر والعصر في وقت الظهر أو العصر.",
      },
    ],
    note:
      "قد يجتمع القصر والجمع في سفر واحد، وقد يوجد القصر دون الجمع بحسب الحالة والقول الفقهي المتبع.",
  },

  {
    id: "resident-imam",
    icon: ShieldCheck,
    title: "إذا صليت خلف إمام مقيم",
    description:
      "هذه من الحالات المهمة التي ينبغي ألا يتعامل معها الموقع باعتبارها مجرد مسألة مسافة.",
    points: [
      "إذا صلى المسافر خلف إمام مقيم، فهناك أحكام خاصة بصلاة المسافر خلف المقيم.",
      "لذلك يتضمن Travel Checker هذا السؤال بشكل مستقل.",
      "الحكم التفصيلي في هذه الحالة يحتاج إلى مراعاة صورة الصلاة والمذهب أو القول الفقهي المعتمد.",
    ],
    note:
      "لا ينبغي اختزال هذه المسألة في قاعدة عامة دون بيان تفاصيلها الفقهية.",
    source: "مصادر فقهية متعددة",
  },

  {
    id: "return-home",
    icon: MapPin,
    title: "ماذا يحدث عند العودة إلى محل الإقامة؟",
    description:
      "إذا عاد المسافر إلى محل إقامته وانتهى عنه وصف السفر، فإنه لا يستمر في الترخص بالقصر باعتباره مسافرًا.",
    points: [
      "العودة إلى محل الإقامة تنهي وصف السفر في الصورة التي يكون فيها المكان وطن الإقامة.",
      "إذا كانت الصلاة لم تُؤدَّ أثناء السفر ثم عاد الشخص إلى بلده، فلا يستمر حكم القصر لمجرد أنه كان مسافرًا قبل العودة.",
    ],
    note:
      "توجد صور خاصة تتعلق بتغير محل الإقامة نفسه، ولذلك يختلف الحكم إذا كان الشخص قد انتقل بشكل دائم إلى مكان جديد.",
    source: "دار الإفتاء المصرية – فتوى رقم 4897",
    sourceUrl:
      "https://www.dar-alifta.org/ar/Fatwa/Details/15457/",
  },

  {
    id: "changed-residence",
    icon: CircleHelp,
    title: "ماذا لو تغير محل إقامتي؟",
    description:
      "ليس كل مكان وُلد فيه الإنسان أو يملك فيه منزلًا يظل بالضرورة محل إقامته الشرعي.",
    points: [
      "إذا انتقل الإنسان بشكل دائم مع أسرته إلى مكان آخر واتخذه مقرًا مستقرًا، فقد يصبح المكان الجديد هو محل إقامته.",
      "مجرد وجود شقة أو أقارب في المكان القديم لا يعني بالضرورة بقاء وصف الإقامة فيه.",
      "هذه من المسائل التي تعتمد على حقيقة الاستقرار ونية الإقامة.",
    ],
    note:
      "هذه الحالة مثال واضح على الحالات التي لا ينبغي لموقعنا أن يحسمها بقاعدة آلية بسيطة.",
    source: "دار الإفتاء المصرية – فتوى رقم 8895",
    sourceUrl:
      "https://www.dar-alifta.org/ar/fatwa/details/22632/",
  },
];

function GuideSection({ section, index }) {
  const Icon = section.icon;

  return (
    <article
      id={section.id}
      className="
        scroll-mt-28
        rounded-3xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:shadow-md
        sm:p-6
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-2xl
            bg-emerald-50
            text-emerald-700
            sm:h-12 sm:w-12
            dark:bg-emerald-950/40
            dark:text-emerald-400
          "
        >
          <Icon size={21} className="sm:h-[23px] sm:w-[23px]" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-start gap-2">
            <span className="pt-1 text-xs font-bold text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="text-lg font-extrabold leading-8 text-slate-900 sm:text-xl dark:text-white">
              {section.title}
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-300">
            {section.description}
          </p>
        </div>
      </div>

      {section.highlight && (
        <div
          className="
            my-5 rounded-2xl border
            border-emerald-200
            bg-emerald-50
            p-4 text-center
            sm:my-6 sm:p-5
            dark:border-emerald-900
            dark:bg-emerald-950/30
          "
        >
          <div className="text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
            {section.highlight}
          </div>

          <div className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7 dark:text-slate-400">
            وفق الاختيار المعتمد للمسافة من عدة مصادر فقهية، وليس ادعاءً بأن جميع المذاهب متفقة عليه.
          </div>
        </div>
      )}

      {section.points && (
        <ul className="mt-5 space-y-3 sm:mt-6">
          {section.points.map((point) => (
            <li
              key={point}
              className="
                flex items-start gap-2.5
                text-sm leading-7
                text-slate-700
                sm:gap-3 sm:text-base sm:leading-8
                dark:text-slate-200
              "
            >
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-emerald-600"
              />

              <span className="min-w-0">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {section.comparison && (
        <div className="mt-5 grid gap-4 sm:mt-6 md:grid-cols-2">
          {section.comparison.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border border-slate-200
                bg-slate-50
                p-4
                sm:p-5
                dark:border-slate-700
                dark:bg-slate-800/60
              "
            >
              <h3 className="font-extrabold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                {item.text}
              </p>

              <div className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold leading-6 text-emerald-700 dark:bg-slate-900 dark:text-emerald-400">
                مثال: {item.example}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.note && (
        <div
          className="
            mt-5
            rounded-2xl
            border-r-4
            border-amber-400
            bg-amber-50
            p-4
            sm:mt-6
            dark:bg-amber-950/20
          "
        >
          <div className="mb-1 text-sm font-bold text-amber-800 dark:text-amber-400">
            تنبيه
          </div>

          <p className="text-sm leading-7 text-amber-900 dark:text-amber-200">
            {section.note}
          </p>
        </div>
      )}

      {section.source && (
        <div
          className="
            mt-5 flex flex-col gap-3
            border-t border-slate-100
            pt-5
            sm:mt-6 sm:flex-row sm:items-center sm:justify-between
            dark:border-slate-800
          "
        >
          <div className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            المصدر:{" "}
            <span className="font-bold text-slate-700 dark:text-slate-200">
              {section.source}
            </span>
          </div>

          {section.sourceUrl && (
            <a
              href={section.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                w-fit
                items-center gap-2
                text-sm font-bold
                text-emerald-700
                hover:text-emerald-800
                dark:text-emerald-400
              "
            >
              قراءة المصدر
              <BookOpen size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Guide() {
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
      <Navbar />

      <main
        className="
          mx-auto
          max-w-6xl
          px-4
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          lg:px-8
        "
      >
        {/* Header */}
        <section className="mb-8 text-center sm:mb-10">
          <div
            className="
              mx-auto mb-4 flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-emerald-100
              text-emerald-700
              sm:mb-5 sm:h-16 sm:w-16 sm:rounded-3xl
              dark:bg-emerald-950/50
              dark:text-emerald-400
            "
          >
            <BookOpen size={27} className="sm:h-[30px] sm:w-[30px]" />
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            دليل المسافر
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8 dark:text-slate-300">
            دليلك المختصر لفهم أحكام القصر والجمع وبعض أهم أحكام السفر،
            مع توضيح المسائل التي يوجد فيها خلاف فقهي.
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
            dark:border-emerald-900
            dark:bg-emerald-950/20
          "
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <ShieldCheck
              size={23}
              className="mt-1 shrink-0 text-emerald-700 sm:h-[25px] sm:w-[25px] dark:text-emerald-400"
            />

            <div className="min-w-0">
              <h2 className="font-extrabold text-emerald-900 dark:text-emerald-300">
                كيف تستخدم هذا الدليل؟
              </h2>

              <p className="mt-2 text-sm leading-7 text-emerald-900/80 sm:text-base sm:leading-8 dark:text-emerald-200/80">
                هذا الدليل تعليمي وإرشادي. عند وجود خلاف فقهي، نوضح وجود
                الخلاف بدل تقديم المسألة على أنها محل اتفاق. وفي الحالات
                الخاصة أو المعقدة، يُنصح بالرجوع إلى أهل العلم.
              </p>
            </div>
          </div>
        </section>

        {/* Quick navigation */}
        <nav
          className="
            mb-8 rounded-3xl
            border border-slate-200
            bg-white
            p-4
            shadow-sm
            sm:mb-10 sm:p-5
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <h2 className="mb-4 font-extrabold">
            محتويات الدليل
          </h2>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="
                  rounded-xl
                  bg-slate-50
                  px-3 py-3
                  text-sm font-semibold
                  leading-6
                  text-slate-700
                  transition
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  sm:px-4
                  dark:bg-slate-800
                  dark:text-slate-200
                  dark:hover:bg-emerald-950/40
                  dark:hover:text-emerald-400
                "
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Guide sections */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <GuideSection
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>

        {/* Final CTA */}
        <section
          className="
            mt-8 rounded-3xl
            bg-slate-900
            p-6 text-center
            text-white
            sm:mt-10 sm:p-8
            dark:bg-slate-900
          "
        >
          <h2 className="text-xl font-black sm:text-2xl">
            تريد معرفة الحكم في حالتك؟
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            استخدم أداة التحقق وأجب عن الأسئلة المتعلقة بسفرك لمعرفة النتيجة
            وفق السياسة الفقهية المعتمدة داخل موقعنا.
          </p>

          <a
            href="travel-checker"
            className="
              mt-5 inline-flex
              w-full items-center justify-center
              rounded-xl
              bg-emerald-600
              px-6 py-3
              font-bold
              text-white
              transition
              hover:bg-emerald-700
              sm:mt-6 sm:w-auto
            "
          >
            ابدأ التحقق الآن
          </a>
        </section>
      </main>
    </div>
  );
}

export default Guide;
