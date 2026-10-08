import {
  QASR_DISTANCE,
  QASR_STATUS,
  JAM_STATUS,
  TRAVEL_STATUS,
  TRAVEL_POLICY,
  travelPolicy,
  travelSources,
  getTravelSource,
} from "../data/travelRules";

/* -------------------------------------------------------------------------- */
/* Utility functions                                                          */
/* -------------------------------------------------------------------------- */

function isBoolean(value) {
  return typeof value === "boolean";
}

function isValidNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function normalizeInput(input = {}) {
  return {
    hasStartedTravel: Boolean(input.hasStartedTravel),

    hasLeftBuiltUpArea: Boolean(input.hasLeftBuiltUpArea),

    distanceKm:
      typeof input.distanceKm === "number"
        ? input.distanceKm
        : Number(input.distanceKm),

    hasReachedDestination: Boolean(input.hasReachedDestination),

    destinationIsHome: Boolean(input.destinationIsHome),

    intendedStayDays:
      input.intendedStayDays === null ||
      input.intendedStayDays === undefined ||
      input.intendedStayDays === ""
        ? null
        : Number(input.intendedStayDays),

    isReturningHome: Boolean(input.isReturningHome),

    prayingBehindResidentImam: Boolean(input.prayingBehindResidentImam),
  };
}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export function validateTravelInput(input = {}) {
  const errors = [];

  if (!isBoolean(input.hasStartedTravel)) {
    errors.push("hasStartedTravel must be a boolean.");
  }

  if (!isBoolean(input.hasLeftBuiltUpArea)) {
    errors.push("hasLeftBuiltUpArea must be a boolean.");
  }

  if (
    input.distanceKm === undefined ||
    input.distanceKm === null ||
    input.distanceKm === ""
  ) {
    errors.push("distanceKm is required.");
  } else if (!isValidNumber(Number(input.distanceKm))) {
    errors.push(
      "distanceKm must be a valid number greater than or equal to 0.",
    );
  }

  if (!isBoolean(input.hasReachedDestination)) {
    errors.push("hasReachedDestination must be a boolean.");
  }

  if (!isBoolean(input.destinationIsHome)) {
    errors.push("destinationIsHome must be a boolean.");
  }

  if (
    input.intendedStayDays !== null &&
    input.intendedStayDays !== undefined &&
    input.intendedStayDays !== ""
  ) {
    if (!isValidNumber(Number(input.intendedStayDays))) {
      errors.push(
        "intendedStayDays must be a valid number greater than or equal to 0.",
      );
    }
  }

  if (!isBoolean(input.isReturningHome)) {
    errors.push("isReturningHome must be a boolean.");
  }

  if (!isBoolean(input.prayingBehindResidentImam)) {
    errors.push("prayingBehindResidentImam must be a boolean.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/* -------------------------------------------------------------------------- */
/* State detection                                                            */
/* -------------------------------------------------------------------------- */

export function determineTravelStatus(input) {
  const {
    hasStartedTravel,
    hasLeftBuiltUpArea,
    hasReachedDestination,
    destinationIsHome,
    isReturningHome,
  } = input;

  if (isReturningHome || destinationIsHome) {
    return TRAVEL_STATUS.TRAVEL_ENDED;
  }

  if (!hasStartedTravel || !hasLeftBuiltUpArea) {
    return TRAVEL_STATUS.RESIDENT;
  }

  if (hasReachedDestination) {
    return TRAVEL_STATUS.TRAVELER;
  }

  return TRAVEL_STATUS.TRAVELER;
}

/* -------------------------------------------------------------------------- */
/* Distance evaluation                                                        */
/* -------------------------------------------------------------------------- */

export function evaluateDistance(distanceKm) {
  if (!isValidNumber(distanceKm)) {
    return {
      status: QASR_STATUS.UNCERTAIN,
      qualifies: false,
      distanceKm: null,
      thresholdKm: QASR_DISTANCE.DEFAULT_KM,
      differenceKm: null,
      message: "لم يتم إدخال مسافة سفر صحيحة.",
    };
  }

  const qualifies = distanceKm >= QASR_DISTANCE.DEFAULT_KM;

  return {
    status: qualifies ? QASR_STATUS.AVAILABLE : QASR_STATUS.NOT_AVAILABLE,

    qualifies,

    distanceKm,

    thresholdKm: QASR_DISTANCE.DEFAULT_KM,

    differenceKm: Number((distanceKm - QASR_DISTANCE.DEFAULT_KM).toFixed(3)),

    message: qualifies
      ? `المسافة المدخلة ${distanceKm} كم، وهي تبلغ أو تتجاوز حد ${QASR_DISTANCE.DEFAULT_KM} كم المختار في الموقع.`
      : `المسافة المدخلة ${distanceKm} كم، وهي أقل من حد ${QASR_DISTANCE.DEFAULT_KM} كم المختار في الموقع.`,
  };
}

/* -------------------------------------------------------------------------- */
/* Qasr evaluation                                                            */
/* -------------------------------------------------------------------------- */

export function evaluateQasr(input) {
  const {
    hasStartedTravel,
    hasLeftBuiltUpArea,
    destinationIsHome,
    isReturningHome,
    prayingBehindResidentImam,
  } = input;

  const distanceResult = evaluateDistance(input.distanceKm);

  /* 1. Returned home */
  if (isReturningHome || destinationIsHome) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,

      canShorten: false,

      reason: "انتهى حكم السفر بالعودة إلى محل الإقامة.",

      code: "RETURNED_HOME",

      distance: distanceResult,

      sources: [travelSources.qasrDistance],
    };
  }

  /* 2. Has not started */
  if (!hasStartedTravel) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,

      canShorten: false,

      reason:
        "لم يبدأ السفر بعد، ولذلك لا تنطبق رخصة القصر باعتبار الشخص مسافرًا.",

      code: "NOT_STARTED",

      distance: distanceResult,
    };
  }

  /* 3. Has not left built-up area */
  if (!hasLeftBuiltUpArea) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,

      canShorten: false,

      reason: "لم تتم مفارقة عمران محل الإقامة بعد.",

      code: "INSIDE_RESIDENCE",

      distance: distanceResult,
    };
  }

  /* 4. Distance does not qualify */
  if (!distanceResult.qualifies) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,

      canShorten: false,

      reason: "المسافة أقل من الحد المطلوب للقصر .",

      code: "DISTANCE_TOO_SHORT",

      distance: distanceResult,
    };
  }

  // 5. Intended stay duration
  const stayResult = evaluateStayDuration(input.intendedStayDays);

  if (stayResult.value !== null && stayResult.value > 4) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,
      canShorten: false,
      reason:
        "إذا نويت او حددت الإقامة وكانت اكثر من 4 أيام فلا يجوز القصر ومن اليوم الاول تتم الصلاة لأنك اصبحت الأن مقيما ومن أهل البلدة.أما إذا لم تحدد مدة الإقامة أو كانت أقل من 4 أيام فيجوز القصر.",
      code: "STAY_DURATION_EXCEEDED",
      distance: distanceResult,
      stay: stayResult,
      sources: [travelSources.qasrDistance, travelSources.qasrGeneral],
    };
  }

  /* 6. Resident Imam */
  if (prayingBehindResidentImam) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,

      canShorten: false,

      reason:
        "إذا صلى المسافر خلف إمام مقيم، فإنه يتابعه ويتم الصلاة. وإذا أراد الجمع فلا حرج عليه سواء جمع تقديم او تأخير",

      code: "BEHIND_RESIDENT_IMAM",

      distance: distanceResult,
    };
  }

  /* 7. Everything needed for the default policy is satisfied */
  return {
    status: QASR_STATUS.AVAILABLE,

    canShorten: true,

    reason:
      "تحققت في الحالة المدخلة شروط القصر وفق القواعد الفقهية المرتطبة بهذه المسألة .",

    code: "QASR_AVAILABLE",

    distance: distanceResult,

    sources: [travelSources.qasrDistance, travelSources.qasrGeneral],
  };
}

/* -------------------------------------------------------------------------- */
/* Jam evaluation                                                             */
/* -------------------------------------------------------------------------- */

export function evaluateJam(input) {
  const {
    hasStartedTravel,
    hasLeftBuiltUpArea,
    destinationIsHome,
    isReturningHome,
  } = input;

  if (isReturningHome || destinationIsHome) {
    return {
      status: JAM_STATUS.NOT_AVAILABLE,

      canCombine: false,

      reason: "انتهى حكم السفر بالعودة إلى محل الإقامة.",

      code: "RETURNED_HOME",
    };
  }

  if (!hasStartedTravel) {
    return {
      status: JAM_STATUS.NOT_AVAILABLE,

      canCombine: false,

      reason: "لم يبدأ السفر بعد.",

      code: "NOT_STARTED",
    };
  }

  if (!hasLeftBuiltUpArea) {
    return {
      status: JAM_STATUS.NOT_AVAILABLE,

      canCombine: false,

      reason: "لم تتم مفارقة عمران محل الإقامة بعد.",

      code: "INSIDE_RESIDENCE",
    };
  }

  const distanceResult = evaluateDistance(input.distanceKm);

  if (!distanceResult.qualifies) {
    return {
      status: JAM_STATUS.NOT_AVAILABLE,

      canCombine: false,

      reason:
        "بحسب معيار المسافة المطلوبة للقصر , لم تبلغ الرحلة مسافة السفر المطلوبة.",

      code: "DISTANCE_TOO_SHORT",
    };
  }

  const stayResult = evaluateStayDuration(input.intendedStayDays);

  if (stayResult.value !== null && stayResult.value > 4) {
    return {
      status: QASR_STATUS.NOT_AVAILABLE,
      canShorten: false,
      reason:
        "يجوز الجمع إذا كنت تصلي خلف إمام مقيم او كنت تصلي وحدك وإذا كنت نويت او حددت مدة الاقامة فلا يجوز الجمع",
      code: "STAY_DURATION_EXCEEDED",
      distance: distanceResult,
      stay: stayResult,
      sources: [travelSources.qasrDistance, travelSources.qasrGeneral],
    };
  }

  return {
    status: JAM_STATUS.AVAILABLE,

    canCombine: true,

    reason:
      "السفر المتحقق من شروطه يمكن أن يكون سببًا للجمع وفق السياسة الفقهية المعروضة في الموقع، مع مراعاة أن تفاصيل الجمع لها أحكام مستقلة.",

    code: "JAM_TRAVEL_AVAILABLE",

    warning:
      "إتاحة الجمع هنا لا تعني أن كل صورة من صور الجمع صحيحة دون مراعاة شروط جمع التقديم أو التأخير.",

    sources: [travelSources.qasrAndJam],
  };
}

/* -------------------------------------------------------------------------- */
/* Stay duration evaluation                                                   */
/* -------------------------------------------------------------------------- */

export function evaluateStayDuration(intendedStayDays) {
  if (
    intendedStayDays === null ||
    intendedStayDays === undefined ||
    intendedStayDays === ""
  ) {
    return {
      status: "unknown",

      value: null,

      message: "لم يتم تحديد مدة الإقامة المقصودة.",

      fiqhDifference: true,
    };
  }

  const days = Number(intendedStayDays);

  if (!isValidNumber(days)) {
    return {
      status: "unknown",

      value: null,

      message: "مدة الإقامة المدخلة غير صحيحة.",

      fiqhDifference: true,
    };
  }

  const source = getTravelSource(travelSources.qasrGeneral);

  const opinions = travelPolicy.stayDuration.opinions.map((opinion) => ({
    id: opinion.id,

    label: opinion.label,

    maxDaysExclusive: opinion.maxDaysExclusive,

    remainsTraveler: days < opinion.maxDaysExclusive,

    description: opinion.description,

    source,
  }));

  return {
    status: "school-dependent",

    value: days,

    fiqhDifference: true,

    opinions,

    message:
      "حكم الإقامة بعد الوصول يختلف باختلاف القول الفقهي المعتمد، لذلك يعرض الموقع الآراء بدل فرض حكم واحد على الجميع.",
  };
}

/* -------------------------------------------------------------------------- */
/* Source collection                                                          */
/* -------------------------------------------------------------------------- */

function collectSources(results = []) {
  const sourceMap = new Map();

  results.forEach((result) => {
    if (!result) return;

    const references = result.sources || [];

    references.forEach((sourceReference) => {
      const source = getTravelSource(sourceReference);

      if (!source) return;

      const key = source.url || `${source.sourceId}-${source.title}`;

      if (!sourceMap.has(key)) {
        sourceMap.set(key, source);
      }
    });
  });

  return Array.from(sourceMap.values());
}

/* -------------------------------------------------------------------------- */
/* Main Rules Engine                                                          */
/* -------------------------------------------------------------------------- */

export function checkTravel(input = {}) {
  const validation = validateTravelInput(input);

  if (!validation.isValid) {
    return {
      success: false,

      error: {
        code: "INVALID_INPUT",

        message: "يرجى مراجعة البيانات المدخلة.",

        details: validation.errors,
      },

      input: null,

      travelStatus: TRAVEL_STATUS.UNCERTAIN,

      qasr: {
        status: QASR_STATUS.UNCERTAIN,
      },

      jam: {
        status: JAM_STATUS.UNCERTAIN,
      },

      stay: {
        status: "unknown",
      },

      sources: [],
    };
  }

  const normalizedInput = normalizeInput(input);

  const travelStatus = determineTravelStatus(normalizedInput);

  const qasrResult = evaluateQasr(normalizedInput);
  const jamResult = evaluateJam(normalizedInput);
  const stayResult = evaluateStayDuration(normalizedInput.intendedStayDays);

  const sources = collectSources([qasrResult, jamResult, stayResult]);

  return {
    success: true,

    policy: {
      id: TRAVEL_POLICY.DEFAULT,

      name: travelPolicy.name,

      qasrDistanceKm: travelPolicy.qasrDistanceKm,
    },

    input: normalizedInput,

    travelStatus,

    qasr: qasrResult,

    jam: jamResult,

    stay: stayResult,

    sources,

    meta: {
      generatedBy: "Travel Rules Engine",

      version: "1.0.0",

      fiqhDifferencesShown: travelPolicy.principles.showFiqhDifferences,

      disclaimer:
        "هذه النتيجة إرشادية مبنية على السياسة والمصادر الفقهية المحددة في الموقع، ولا تغني عن سؤال أهل العلم في الحالات الخاصة أو المختلف فيها.",
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Simple helpers for UI                                                      */
/* -------------------------------------------------------------------------- */

export function canShortenPrayer(input) {
  const result = checkTravel(input);

  return (
    result.success &&
    result.qasr.status === QASR_STATUS.AVAILABLE &&
    result.qasr.canShorten === true
  );
}

export function canCombinePrayer(input) {
  const result = checkTravel(input);

  return (
    result.success &&
    result.jam.status === JAM_STATUS.AVAILABLE &&
    result.jam.canCombine === true
  );
}

export function getTravelSummary(input) {
  const result = checkTravel(input);

  if (!result.success) {
    return {
      title: "البيانات غير مكتملة",

      message: "يرجى إدخال البيانات المطلوبة أولًا.",

      status: "error",
    };
  }

  if (result.travelStatus === TRAVEL_STATUS.TRAVEL_ENDED) {
    return {
      title: "انتهى حكم السفر",

      message: "تحتاج الحالة الآن إلى أحكام المقيم، وليس أحكام المسافر.",

      status: "ended",
    };
  }

  if (result.qasr.status === QASR_STATUS.AVAILABLE) {
    return {
      title: "أنت في حكم المسافر",

      message:
        "القصر متاح وفق السياسة الافتراضية للتطبيق، مع مراعاة حالة الصلاة خلف الإمام المقيم.",

      status: "traveler",
    };
  }

  return {
    title: "القصر غير متاح حاليًا",

    message: result.qasr.reason || "لم تتحقق شروط القصر وفق البيانات الحالية.",

    status: "resident-or-not-qualified",
  };
}

/* -------------------------------------------------------------------------- */
/* Default export                                                             */
/* -------------------------------------------------------------------------- */

export default {
  checkTravel,

  validateTravelInput,

  determineTravelStatus,

  evaluateDistance,

  evaluateQasr,

  evaluateJam,

  evaluateStayDuration,

  canShortenPrayer,

  canCombinePrayer,

  getTravelSummary,
};
