import sources from "./sources";


/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

export const TRAVEL_POLICY = {
  DEFAULT: "darAlIfta",
};

export const TRAVEL_STATUS = {
  RESIDENT: "resident",
  TRAVELER: "traveler",
  TRAVEL_ENDED: "travel-ended",
  UNCERTAIN: "uncertain", 
};

export const QASR_STATUS = {
  AVAILABLE: "available",
  NOT_AVAILABLE: "not-available",
  UNCERTAIN: "uncertain",
};

export const JAM_STATUS = {
  AVAILABLE: "available",
  NOT_AVAILABLE: "not-available",
  UNCERTAIN: "uncertain",
};

export const PRAYER_STATUS = {
  FULL: "full",
  SHORTENED: "shortened",
};

/* -------------------------------------------------------------------------- */
/* Core thresholds                                                            */
/* -------------------------------------------------------------------------- */


export const QASR_DISTANCE = {
  DEFAULT_KM: 83,

  DISPLAY: "83 كم تقريبًا",

  SOURCE_ID: "darAlIfta",

  SOURCE_TITLE: "تحديد مسافة قصر الصلاة للمسافر بالكيلومتر",

  NOTE:
    "هذه هي المسافة المختارة للفتوى في الموقع بناءً على فتوى دار الإفتاء المصرية، مع وجود خلاف فقهي في تقدير مسافة السفر.",
};

/**
 * Stay-duration opinions.
 *
 * We deliberately do NOT convert this into one universal rule.
 * Different schools have different details.
 */
export const STAY_DURATION_OPINIONS = {
  JUMHUR: {
    id: "jumhur",
    label: "قول الجمهور",
    maxDaysExclusive: 4,
    description:
      "من أشهر ما نُقل عن جمهور الفقهاء أن من نوى إقامة أقل من أربعة أيام يبقى في حكم المسافر، مع وجود تفاصيل في احتساب الأيام وتفريعات أخرى.",
    sourceId: "darAlIfta",
  },

  HANAFI: {
    id: "hanafi",
    label: "مذهب أبي حنيفة",
    maxDaysExclusive: 15,
    description:
      "عند الإمام أبي حنيفة يرتبط انتهاء حكم السفر بنية إقامة خمسة عشر يومًا فأكثر، مع تفاصيل مذهبية أخرى.",
    sourceId: "darAlIfta",
  },
};

/* -------------------------------------------------------------------------- */
/* Source helpers                                                             */
/* -------------------------------------------------------------------------- */


export const travelSources = {
  qasrDistance: {
    sourceId: "darAlIfta",
    title: "تحديد مسافة قصر الصلاة للمسافر بالكيلومتر",
    url: "https://dar-alifta.org/ar/fatwa/details/22385/",
    reference: "فتوى رقم 8831",
  },

  qasrGeneral: {
    sourceId: "darAlIfta",
    title: "حكم قصر الصلاة للمسافر",
    url: "https://dar-alifta.org/ar/fatwa/details/11050/",
    reference: "فتوى رقم 156",
  },

  leavingResidence: {
    sourceId: "islamWeb",
    title: "أحوال الجمع للمسافر إذا كان نازلا أو كان سائرا",
    url: "https://www.islamweb.net/ar/fatwa/180475/",
    reference: "فتوى رقم 180475",
  },

  residentImam: {
    sourceId: "islamWeb",
    title: "مسافة القصر، وبداية القصر عند اتصال البنيان، وحكم الاقتداء بالمقيم",
    url: "https://www.islamweb.net/amp/ar/fatwa/458668/",
    reference: "فتوى رقم 458668",
  },

  qasrAndJam: {
    sourceId: "islamWeb",
    title: "أحوال الجمع والقصر للمسافر",
    url: "https://islamweb.net/ar/fatwa/108818/",
    reference: "فتوى رقم 108818",
  },

  returningHome: {
    sourceId: "darAlIfta",
    title: "حكم قصر الصلاة بعد الرجوع من السفر",
    url: "https://dar-alifta.org/ar/Fatwa/Details/15457/",
    reference: "فتوى رقم 4897",
  },

  changedResidence: {
    sourceId: "darAlIfta",
    title:
      "حكم قصر الصلاة لمن غيّر محلّ إقامته حال سفره إلى بيته في البلد",
    url: "https://dar-alifta.org/ar/fatwa/details/22632/",
    reference: "فتوى رقم 8895",
  },
};

/* -------------------------------------------------------------------------- */
/* Travel state                                                               */
/* -------------------------------------------------------------------------- */

export const travelStates = {
  BEFORE_DEPARTURE: {
    id: "before-departure",
    label: "لم يبدأ السفر",
    description:
      "الشخص ما زال داخل محل إقامته ولم يفارق عمران البلد.",
  },

  TRAVELING: {
    id: "traveling",
    label: "في حكم المسافر",
    description:
      "بدأ السفر وفارق محل الإقامة وتحققت شروط مسافة السفر بحسب السياسة المختارة.",
  },

  AT_DESTINATION: {
    id: "at-destination",
    label: "في الوجهة",
    description:
      "وصل إلى وجهته، ويحتاج الحكم هنا إلى النظر في طبيعة الوجهة ومدة الإقامة المقصودة.",
  },

  RETURNED_HOME: {
    id: "returned-home",
    label: "عاد إلى محل الإقامة",
    description:
      "انتهى وصف السفر بالعودة إلى محل الإقامة.",
  },

  UNCERTAIN: {
    id: "uncertain",
    label: "الحالة تحتاج تفصيلًا",
    description:
      "المعلومات المتاحة لا تكفي لإصدار نتيجة آلية آمنة.",
  },
};

/* -------------------------------------------------------------------------- */
/* Rule definitions                                                            */
/* -------------------------------------------------------------------------- */

export const travelRules = [
  {
    id: "TRAVEL_001",

    title: "القصر لا يبدأ بمجرد نية السفر",

    category: "travel-state",

    priority: 100,

    condition: {
      type: "not-started",
    },

    result: {
      travelStatus: TRAVEL_STATUS.RESIDENT,

      qasr: QASR_STATUS.NOT_AVAILABLE,

      jam: JAM_STATUS.NOT_AVAILABLE,

      message:
        "ما دمت لم تبدأ السفر ولم تفارق محل إقامتك، فلا تأخذ بأحكام قصر المسافر.",

      shortMessage: "لم تبدأ أحكام السفر بعد.",
    },

    sources: [
      travelSources.leavingResidence,
      travelSources.qasrGeneral,
    ],
  },

  {
    id: "TRAVEL_002",

    title: "مفارقة عمران البلد",

    category: "travel-state",

    priority: 90,

    condition: {
      type: "must-leave-residence-boundary",
    },

    result: {
      message:
        "يبدأ اعتبار السفر في هذه الصورة بعد مفارقة محل الإقامة وعمران البلد، وليس بمجرد الخروج من المنزل.",

      shortMessage: "يجب مفارقة عمران البلد.",
    },

    sources: [travelSources.leavingResidence],
  },

  {
    id: "TRAVEL_003",

    title: "مسافة القصر",

    category: "distance",

    priority: 80,

    condition: {
      type: "distance",
      operator: "gte",
      value: QASR_DISTANCE.DEFAULT_KM,
    },

    result: {
      qasr: QASR_STATUS.AVAILABLE,

      message:
        "بحسب السياسة المعتمدة في هذا الموقع، بلغت مسافة السفر الحد المختار للقصر، وهو نحو 83 كم.",

      shortMessage: "مسافة السفر تحقق حد القصر.",
    },

    sources: [travelSources.qasrDistance],
  },

  {
    id: "TRAVEL_004",

    title: "مسافة أقل من حد القصر",

    category: "distance",

    priority: 80,

    condition: {
      type: "distance",
      operator: "lt",
      value: QASR_DISTANCE.DEFAULT_KM,
    },

    result: {
      qasr: QASR_STATUS.NOT_AVAILABLE,

      jam: JAM_STATUS.NOT_AVAILABLE,

      message:
        "بحسب معيار المسافة، لم تبلغ الرحلة الحد الذي تُبنى عليه رخصة القصر.",

      shortMessage: "المسافة أقل من الحد المختار للقصر.",
    },

    sources: [travelSources.qasrDistance],
  },

  {
    id: "TRAVEL_005",

    title: "الوصول إلى محل إقامة حقيقي",

    category: "residence",

    priority: 95,

    condition: {
      type: "destination-is-home",
      value: true,
    },

    result: {
      travelStatus: TRAVEL_STATUS.TRAVEL_ENDED,

      qasr: QASR_STATUS.NOT_AVAILABLE,

      message:
        "إذا كانت الوجهة هي محل إقامتك الذي عاد إليه وصف الاستقرار، ينتهي حكم السفر عند الوصول إليها.",

      shortMessage: "الوصول إلى محل الإقامة ينهي حكم السفر.",
    },

    sources: [
      travelSources.returningHome,
      travelSources.changedResidence,
    ],
  },

  {
    id: "TRAVEL_006",

    title: "العودة إلى محل الإقامة",

    category: "return",

    priority: 110,

    condition: {
      type: "returned-home",
      value: true,
    },

    result: {
      travelStatus: TRAVEL_STATUS.TRAVEL_ENDED,

      qasr: QASR_STATUS.NOT_AVAILABLE,

      jam: JAM_STATUS.NOT_AVAILABLE,

      message:
        "بعد العودة إلى محل الإقامة ينتهي وصف السفر، فلا يُستعمل القصر باعتبار الشخص مسافرًا.",

      shortMessage: "انتهى السفر بالعودة إلى محل الإقامة.",
    },

    sources: [travelSources.returningHome],
  },

  {
    id: "TRAVEL_007",

    title: "الإقامة المقصودة",

    category: "stay-duration",

    priority: 70,

    condition: {
      type: "stay-duration",
      comparison: "school-dependent",
    },

    result: {
      qasr: QASR_STATUS.UNCERTAIN,

      message:
        "حكم القصر بعد الوصول يتأثر بمدة الإقامة المقصودة، وهذه من المسائل التي فيها خلاف فقهي. لذلك لا يفرض الموقع رقمًا واحدًا على جميع المذاهب.",

      shortMessage: "مدة الإقامة تحتاج تحديد الرأي الفقهي.",
    },

    sources: [travelSources.qasrGeneral],
  },

  {
    id: "TRAVEL_008",

    title: "الصلاة خلف الإمام المقيم",

    category: "imam",

    priority: 100,

    condition: {
      type: "behind-resident-imam",
      value: true,
    },

    result: {
      qasr: QASR_STATUS.NOT_AVAILABLE,

      message:
        "إذا صلى المسافر خلف إمام مقيم وأتم الإمام الصلاة، فإنه يتابعه ويتم الصلاة.",

      shortMessage:
        "خلف الإمام المقيم: تُصلّى الصلاة تامة مع الإمام.",
    },

    sources: [travelSources.residentImam],
  },

  {
    id: "TRAVEL_009",

    title: "القصر والجمع حكمان مختلفان",

    category: "jam-and-qasr",

    priority: 40,

    condition: {
      type: "always",
    },

    result: {
      message:
        "القصر يتعلق بعدد ركعات الصلاة الرباعية، أما الجمع فيتعلق بأداء صلاتين في وقت إحداهما. لذلك لا يلزم أن يكون الحكم في الاثنين واحدًا.",

      shortMessage: "القصر والجمع رخصتان مختلفتان.",
    },

    sources: [travelSources.qasrAndJam],
  },
];

/* -------------------------------------------------------------------------- */
/* Policy configuration                                                        */
/* -------------------------------------------------------------------------- */

export const travelPolicy = {
  id: TRAVEL_POLICY.DEFAULT,

  name: "Dar Al-Ifta Egypt – Default Application Policy",

  qasrDistanceKm: QASR_DISTANCE.DEFAULT_KM,

  distanceDescription:
    "83 كم تقريبًا، وهو التقدير المختار للفتوى في فتوى دار الإفتاء المصرية لعام 2025.",

  stayDuration: {
    showFiqhDifference: true,

    opinions: [
      STAY_DURATION_OPINIONS.JUMHUR,
      STAY_DURATION_OPINIONS.HANAFI,
    ],
  },

  principles: {
    requireLeavingBuiltUpArea: true,

    requireTravelDistance: true,

    homeEndsTravel: true,

    residentImamRequiresCompletion: true,

    showFiqhDifferences: true,
  },
};

/* -------------------------------------------------------------------------- */
/* Validation metadata                                                        */
/* -------------------------------------------------------------------------- */

export const travelCheckerFields = {
  hasStartedTravel: {
    type: "boolean",
    required: true,
  },

  hasLeftBuiltUpArea: {
    type: "boolean",
    required: true,
  },

  distanceKm: {
    type: "number",
    required: true,
    min: 0,
  },

  hasReachedDestination: {
    type: "boolean",
    required: true,
  },

  destinationIsHome: {
    type: "boolean",
    required: true,
  },

  intendedStayDays: {
    type: "number",
    required: false,
    min: 0,
  },

  isReturningHome: {
    type: "boolean",
    required: true,
  },

  prayingBehindResidentImam: {
    type: "boolean",
    required: true,
  },
};

/* -------------------------------------------------------------------------- */
/* Export helper                                                              */
/* -------------------------------------------------------------------------- */

export function getTravelSource(sourceReference) {
  if (!sourceReference) return null;

  const source = sources[sourceReference.sourceId];

  if (!source) return null;

  return {
    ...sourceReference,
    source,
  };
}

export default travelRules;