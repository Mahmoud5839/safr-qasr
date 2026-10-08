export const qasrRuling = {
  id: "qasr-introduction",

  title: "ما هي صلاة القصر؟",

  shortDescription:
    "القصر هو أداء الصلاة الرباعية ركعتين للمسافر، وفق الضوابط الشرعية المتعلقة بالسفر.",

  description:
    "شرع الله تعالى قصر الصلاة في السفر تخفيفًا عن المسافر ورفعًا للحرج عنه. ويكون القصر في الصلوات الرباعية فقط.",

  note: {
    type: "fiqh-difference",

    title: "تنبيه فقهي",

    text:
      "توجد مسائل خلافية في بعض تفاصيل أحكام القصر، مثل تقدير مسافة السفر ومدة الإقامة وبعض الحالات الخاصة. لذلك يعرض الموقع الحكم مع توضيح مصدره والخلاف عند الحاجة.",
  },

  prayers: [
    {
      id: "fajr",
      name: "الفجر",
      regularRakahs: 2,
      travelerRakahs: 2,
      canBeShortened: false,
      status: "لا تُقصر",
      description: "صلاة الفجر ركعتان أصلًا.",
    },

    {
      id: "dhuhr",
      name: "الظهر",
      regularRakahs: 4,
      travelerRakahs: 2,
      canBeShortened: true,
      status: "تُقصر",
      description:
        "تصبح صلاة الظهر ركعتين للمسافر إذا تحققت شروط القصر.",
    },

    {
      id: "asr",
      name: "العصر",
      regularRakahs: 4,
      travelerRakahs: 2,
      canBeShortened: true,
      status: "تُقصر",
      description:
        "تصبح صلاة العصر ركعتين للمسافر إذا تحققت شروط القصر.",
    },

    {
      id: "maghrib",
      name: "المغرب",
      regularRakahs: 3,
      travelerRakahs: 3,
      canBeShortened: false,
      status: "لا تُقصر",
      description: "صلاة المغرب ثلاث ركعات ولا تدخل في القصر.",
    },

    {
      id: "isha",
      name: "العشاء",
      regularRakahs: 4,
      travelerRakahs: 2,
      canBeShortened: true,
      status: "تُقصر",
      description:
        "تصبح صلاة العشاء ركعتين للمسافر إذا تحققت شروط القصر.",
    },
  ],

  principles: [
    {
      id: "four-rakah-prayers",

      title: "القصر يكون في الصلوات الرباعية",

      description:
        "الظهر والعصر والعشاء هي الصلوات التي تكون أربع ركعات في الأصل، وهي التي يتعلق بها حكم القصر.",
    },

    {
      id: "travel-condition",

      title: "القصر مرتبط بالسفر",

      description:
        "القصر من رخص السفر، فلا يُشرع للمقيم لمجرد وجود المشقة العادية.",
    },

    {
      id: "distance",

      title: "مسافة السفر",

      description:
        "اختارت دار الإفتاء المصرية للفتوى أن مسافة السفر التي يشرع معها القصر تبلغ نحو 83 كيلومترًا، مع بيانها لوجود خلاف فقهي في تقدير المسافة.",
    },

    {
      id: "residence",

      title: "مدة الإقامة",

      description:
        "توجد تفاصيل وخلاف فقهي في المدة التي يتحول فيها المسافر إلى مقيم، ولذلك لا ينبغي تقديم رقم واحد باعتباره محل اتفاق بين جميع الفقهاء.",
    },

    {
      id: "return-home",

      title: "الرجوع إلى محل الإقامة",

      description:
        "إذا عاد المسافر إلى محل إقامته وانتفى عنه وصف السفر، فإنه لا يترخص بالقصر باعتباره مسافرًا.",
    },
  ],

  sourceReferences: [
    {
      sourceId: "darAlIfta",

      title: "حكم قصر الصلاة للمسافر",

      fatwaNumber: "156",

      date: "18 فبراير 2003",

      url:
        "https://www.dar-alifta.org/ar/Fatwa/Details/11050/%D8%AD%D9%83%D9%85-%D9%82%D8%B5%D8%B1-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9-%D9%84%D9%84%D9%85%D8%B3%D8%A7%D9%81%D8%B1",
    },

    {
      sourceId: "darAlIfta",

      title: "تحديد مسافة قصر الصلاة للمسافر بالكيلومتر",

      fatwaNumber: "8831",

      date: "10 ديسمبر 2025",

      url:
        "https://www.dar-alifta.org/ar/fatwa/details/22385/%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF-%D9%85%D8%B3%D8%A7%D9%81%D8%A9-%D9%82%D8%B5%D8%B1-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9-%D9%84%D9%84%D9%85%D8%B3%D8%A7%D9%81%D8%B1-%D8%A8%D8%A7%D9%84%D9%83%D9%8A%D9%84%D9%88%D9%85%D8%AA%D8%B1",
    },

    {
      sourceId: "darAlIfta",

      title: "حكم قصر الصلاة بعد الرجوع من السفر",

      fatwaNumber: "4897",

      date: "25 ديسمبر 1996",

      url:
        "https://www.dar-alifta.org/ar/Fatwa/Details/15457/%D8%AD%D9%83%D9%85-%D9%82%D8%B5%D8%B1-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D8%B1%D8%AC%D9%88%D8%B9-%D9%85%D9%86-%D8%A7%D9%84%D8%B3%D9%81%D8%B1",
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

export const qasrDistance = {
  value: 83,

  unit: "km",

  displayValue: "83 كم تقريبًا",

  sourceId: "darAlIfta",

  sourceReference:
    "تحديد مسافة قصر الصلاة للمسافر بالكيلومتر",

  note:
    "هذا هو التقدير الذي اختارته دار الإفتاء المصرية للفتوى لمسافة السفر التي يشرع معها القصر، مع وجود خلاف فقهي في تقدير المسافة.",
};

export const travelerPrayers = qasrRuling.prayers;
export default qasrRuling;