export const sources = {
  darAlIfta: {
    id: "dar-alifta",
    name: "دار الإفتاء المصرية",
    shortName: "دار الإفتاء",
    type: "official",
    label: "مصدر رسمي",
    description:
      "جهة الإفتاء الرسمية في جمهورية مصر العربية، وتُستخدم كمصدر أساسي في الموقع.",
  },

  islamWeb: {
    id: "islamweb",
    name: "إسلام ويب",
    shortName: "إسلام ويب",
    type: "fatwa",
    label: "مصدر فقهي",
    description:
      "موسوعة إسلامية تقدم فتاوى ومواد علمية في مختلف أبواب الفقه.",
  },

  ibnBaz: {
    id: "ibn-baz",
    name: "موقع الشيخ عبد العزيز بن باز",
    shortName: "ابن باز",
    type: "scholarly",
    label: "مصدر فقهي",
    description:
      "الموقع الرسمي لفتاوى ومواد الشيخ عبد العزيز بن باز رحمه الله.",
  },

  islamQA: {
    id: "islamqa",
    name: "الإسلام سؤال وجواب",
    shortName: "الإسلام سؤال وجواب",
    type: "scholarly",
    label: "مصدر فقهي",
    description:
      "موقع متخصص في الإجابة عن الأسئلة الشرعية والفقهية.",
  },
};

export const sourceList = Object.values(sources);

export default sources;