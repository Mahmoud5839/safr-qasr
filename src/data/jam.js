export const jamRuling = {
  id: "jam-introduction",

  title: "ما هو جمع الصلاة؟",

  shortDescription:
    "الجمع هو أداء صلاتين يمكن الجمع بينهما في وقت إحداهما، جمع تقديم أو جمع تأخير، وفق الضوابط الشرعية.",

  description:
    "الجمع رخصة شرعية يُقصد بها التيسير ورفع الحرج في بعض الأحوال، ومن بينها السفر. ويكون الجمع بين الظهر والعصر، وبين المغرب والعشاء.",

  note: {
    type: "fiqh-difference",

    title: "تنبيه فقهي",

    text:
      "الجمع في السفر من المسائل التي وقع فيها خلاف فقهي؛ فجمهور الفقهاء يجيزون الجمع للمسافر بشروطه، بينما للحنفية تفصيل مختلف في الجمع. لذلك يعرض الموقع الحكم مع بيان المصدر والخلاف عند الحاجة.",
  },

  types: [
    {
      id: "jam-taqdim",

      title: "جمع التقديم",

      shortTitle: "تقديم",

      description:
        "أداء الصلاتين في وقت الصلاة الأولى.",

      example:
        "مثل أن يصلي المسافر الظهر والعصر في وقت الظهر.",

      icon: "ArrowUp",
    },

    {
      id: "jam-takhir",

      title: "جمع التأخير",

      shortTitle: "تأخير",

      description:
        "تأخير الصلاة الأولى حتى وقت الصلاة الثانية، ثم أداء الصلاتين في وقت الثانية.",

      example:
        "مثل أن يؤخر المسافر الظهر ويصليه مع العصر في وقت العصر.",

      icon: "ArrowDown",
    },
  ],

  prayers: [
    {
      id: "dhuhr-asr",

      firstPrayer: "الظهر",

      secondPrayer: "العصر",

      description:
        "يجوز جمع الظهر مع العصر تقديمًا أو تأخيرًا عند تحقق سبب الجمع وشروطه.",
    },

    {
      id: "maghrib-isha",

      firstPrayer: "المغرب",

      secondPrayer: "العشاء",

      description:
        "يجوز جمع المغرب مع العشاء تقديمًا أو تأخيرًا عند تحقق سبب الجمع وشروطه.",
    },
  ],

  principles: [
    {
      id: "only-combinable-prayers",

      title: "ما الصلوات التي تُجمع؟",

      description:
        "الجمع يكون بين الظهر والعصر، وبين المغرب والعشاء. أما الفجر فلا يُجمع مع صلاة أخرى.",
    },

    {
      id: "taqdim",

      title: "جمع التقديم",

      description:
        "في جمع التقديم تؤدى الصلاة الأولى ثم الصلاة الثانية في وقت الصلاة الأولى.",
    },

    {
      id: "takhir",

      title: "جمع التأخير",

      description:
        "في جمع التأخير تؤدى الصلاة الأولى ثم الثانية في وقت الصلاة الثانية.",
    },

    {
      id: "travel",

      title: "الجمع في السفر",

      description:
        "الجمع للمسافر رخصة عند جمهور الفقهاء، مع وجود خلاف فقهي في بعض تفاصيل الجمع وشروطه.",
    },

    {
      id: "order",

      title: "الترتيب بين الصلاتين",

      description:
        "في جمع التقديم يبدأ المصلي بالصلاة الأولى؛ فيصلي الظهر قبل العصر، والمغرب قبل العشاء.",
    },

    {
      id: "choice",

      title: "الجمع ليس هو القصر",

      description:
        "الجمع يتعلق بأداء صلاتين في وقت إحداهما، بينما القصر يتعلق بعدد ركعات الصلاة الرباعية. وقد يجمع المسافر أو لا يجمع، كما أن الجمع والقصر حكمان مختلفان.",
    },
  ],

  sourceReferences: [
    {
      sourceId: "darAlIfta",

      title: "حكم الجمع في المطار للمسافر",

      fatwaNumber: "3166",

      date: "13 سبتمبر 2003",

      url:
        "https://www.dar-alifta.org/ar/Fatwa/Details/12466/%D8%AD%D9%83%D9%85-%D8%A7%D9%84%D8%AC%D9%85%D8%B9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B1-%D9%84%D9%84%D9%85%D8%B3%D8%A7%D9%81%D8%B1",
    },

    {
      sourceId: "darAlIfta",

      title: "مراعاة الترتيب بين الصلاتين عند الجمع بينهما",

      fatwaNumber: "7138",

      date: "4 سبتمبر 2022",

      url:
        "https://dar-alifta.org/ar/fatwa/details/17884/%D9%85%D8%B1%D8%A7%D8%B9%D8%A7%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D8%AA%D9%8A%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%AA%D9%8A%D9%86-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%AC%D9%85%D8%B9-%D8%A8%D9%8A%D9%86%D9%87%D9%85%D8%A7",
    },

    {
      sourceId: "islamWeb",

      title: "أحوال الجمع والقصر للمسافر",

      fatwaNumber: "108818",

      date: "2 يونيو 2008",

      url:
        "https://www.islamweb.net/ar/fatwa/108818/%D8%A3%D8%AD%D9%88%D8%A7%D9%84-%D8%A7%D9%84%D8%AC%D9%85%D8%B9-%D9%88%D8%A7%D9%84%D9%82%D8%B5%D8%B1-%D9%84%D9%84%D9%85%D8%B3%D8%A7%D9%81%D8%B1",
    },
  ],
};

export const jamTypes = jamRuling.types;

export const combinablePrayers = jamRuling.prayers;

export default jamRuling;