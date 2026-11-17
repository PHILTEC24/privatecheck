export const STRINGS = {
  en: {
    dir: 'ltr',
    brand: 'PrivateCheck',
    tag: 'Reproductive health triage',
    nav: { assess: 'Assessment', validation: 'Validation', dashboard: 'Analytics' },
    switch: 'العربية',
    landing: {
      eyebrow: 'Privacy-first health triage',
      h1a: 'Understand your reproductive health',
      h1b: 'risk signals — privately.',
      sub: 'A 60-second confidential assessment that helps you identify risk signals worth a medical conversation. No account. No uploads. No tracking.',
      cta: 'Start assessment',
      secondary: 'How it works',
      disclaimer: 'Educational triage only. Not a diagnosis. All answers stay on your device.',
      trustTitle: 'Built for trust',
      trust: [
        { t: 'On-device', d: 'Answers never leave your browser.' },
        { t: 'Clinically bounded', d: 'Triage only — never a diagnosis.' },
        { t: 'Bilingual', d: 'English & Arabic, first-class.' }
      ],
      howTitle: 'How it works',
      steps: [
        { n: '01', t: 'Answer 7 questions', d: 'Structured, plain-language, ~60 seconds.' },
        { n: '02', t: 'Get triage guidance', d: 'Low, moderate, or urgent — with clear reasons.' },
        { n: '03', t: 'Share with a clinician', d: 'Anonymous printable summary for real handoff.' }
      ],
      statsTitle: 'Designed for real-world deployment',
      stats: [
        { v: '0', l: 'bytes of PII stored' },
        { v: '100%', l: 'auditable rule engine' },
        { v: 'EN/AR', l: 'bilingual with RTL' }
      ]
    },
    quiz: { q: 'Question', of: 'of', exit: 'Clear & exit' },
    result: {
      title: 'Your triage summary',
      sub: 'Generated on this device. Nothing was uploaded.',
      level: 'Triage level',
      levels: { low: 'Low risk', moderate: 'Moderate', urgent: 'Urgent' },
      red: 'Red-flag signals',
      mod: 'Modifiable risk factors',
      ctx: 'Context notes',
      none: 'None identified.',
      boundaryTitle: 'What this tool is not',
      boundary: 'Not a diagnosis. Does not measure fertility, sperm quality, or hormones. Does not replace a clinical exam or lab tests. If you have severe pain, sudden swelling, or a new lump, seek urgent care regardless of this result.',
      summaryBtn: 'Generate doctor summary',
      clear: 'Clear my data & exit'
    },
    summary: { title: 'Doctor summary', sub: 'Copy, download, or print. No identifiers.', copy: 'Copy', download: 'Download .txt', print: 'Print', clear: 'Clear data' },
    validation: {
      title: 'Engine validation report',
      sub: 'Transparency on rule-engine behavior.',
      agreement: 'Agreement with guideline labels',
      urgent: 'Urgent detection rate',
      total: 'Synthetic profiles',
      profiles: 'Profile results',
      expected: 'Expected',
      predicted: 'Predicted',
      ok: 'match',
      fail: 'mismatch'
    },
    dashboard: {
      title: 'Anonymized analytics',
      sub: 'Aggregate counts only. No PII stored.',
      total: 'Assessments run',
      levels: 'Triage distribution',
      codes: 'Top risk-signal codes',
      empty: 'No assessments yet — run one to populate analytics.'
    },
    footer: { left: 'Prototype · Future Health Digital Innovation Challenge 2026', right: 'No PII · No diagnosis · No tracking' }
  },
  ar: {
    dir: 'rtl',
    brand: 'PrivateCheck',
    tag: 'فرز صحة الإنجاب',
    nav: { assess: 'التقييم', validation: 'التحقق', dashboard: 'التحليلات' },
    switch: 'English',
    landing: {
      eyebrow: 'فرز صحي يحافظ على الخصوصية',
      h1a: 'افهم مؤشرات المخاطر لصحتك الإنجابية',
      h1b: 'بخصوصية تامة.',
      sub: 'تقييم سري يستغرق ٦٠ ثانية لمساعدتك على تحديد إشارات تستدعي استشارة طبية. بدون حساب، بدون رفع بيانات، بدون تتبع.',
      cta: 'ابدأ التقييم',
      secondary: 'كيف يعمل',
      disclaimer: 'فرز تعليمي فقط. ليس تشخيصاً. جميع إجاباتك تبقى على جهازك.',
      trustTitle: 'مصمم للثقة',
      trust: [
        { t: 'على الجهاز', d: 'لا تغادر إجاباتك متصفحك.' },
        { t: 'محدد طبياً', d: 'فرز فقط — ليس تشخيصاً.' },
        { t: 'ثنائي اللغة', d: 'الإنجليزية والعربية بوضوح.' }
      ],
      howTitle: 'كيف يعمل',
      steps: [
        { n: '٠١', t: 'أجب على ٧ أسئلة', d: 'مباشرة ولغة بسيطة، حوالي ٦٠ ثانية.' },
        { n: '٠٢', t: 'احصل على توجيه', d: 'منخفض، متوسط، أو عاجل — مع أسباب واضحة.' },
        { n: '٠٣', t: 'شاركه مع طبيبك', d: 'ملخص مجهول للطباعة.' }
      ],
      statsTitle: 'مصمم للنشر الفعلي',
      stats: [
        { v: '٠', l: 'بيانات شخصية مخزنة' },
        { v: '١٠٠٪', l: 'محرك قواعد قابل للتدقيق' },
        { v: 'EN/AR', l: 'ثنائي اللغة ودعم RTL' }
      ]
    },
    quiz: { q: 'السؤال', of: 'من', exit: 'مسح وخروج' },
    result: {
      title: 'ملخص الفرز',
      sub: 'تم إنشاؤه على هذا الجهاز. لم يتم رفع أي شيء.',
      level: 'مستوى الفرز',
      levels: { low: 'منخفض', moderate: 'متوسط', urgent: 'عاجل' },
      red: 'إشارات تحذيرية',
      mod: 'عوامل خطر قابلة للتعديل',
      ctx: 'ملاحظات سياقية',
      none: 'لا يوجد.',
      boundaryTitle: 'ما لا تقوم به الأداة',
      boundary: 'ليست تشخيصاً. لا تقيس الخصوبة أو جودة السائل المنوي أو الهرمونات. لا تغني عن الفحص السريري أو التحاليل. عند وجود ألم شديد أو تورم مفاجئ أو كتلة جديدة، اطلب رعاية عاجلة.',
      summaryBtn: 'أنشئ ملخصاً للطبيب',
      clear: 'امسح بياناتي واخرج'
    },
    summary: { title: 'ملخص الطبيب', sub: 'انسخ أو نزّل أو اطبع. بدون هوية.', copy: 'نسخ', download: 'تنزيل', print: 'طباعة', clear: 'مسح البيانات' },
    validation: {
      title: 'تقرير التحقق',
      sub: 'شفافية في سلوك محرك القواعد.',
      agreement: 'التوافق مع التسميات',
      urgent: 'معدل كشف العاجل',
      total: 'ملفات اصطناعية',
      profiles: 'نتائج الملفات',
      expected: 'المتوقع',
      predicted: 'المتوقع من المحرك',
      ok: 'مطابق',
      fail: 'غير مطابق'
    },
    dashboard: {
      title: 'تحليلات مجهولة',
      sub: 'أعداد تجميعية فقط. لا بيانات شخصية.',
      total: 'عدد التقييمات',
      levels: 'توزيع الفرز',
      codes: 'أكواد الخطر الأكثر',
      empty: 'لا توجد تقييمات بعد — جرّب التقييم.'
    },
    footer: { left: 'نموذج أولي · تحدي الابتكار الرقمي للصحة ٢٠٢٦', right: 'بدون بيانات شخصية · بدون تشخيص · بدون تتبع' }
  }
};

export const QUESTIONS = {
  en: [
    { id: 'age', q: 'What is your age group?', opts: [['Under 18','under18'],['18–34','18_34'],['35–49','35_49'],['50 or older','50plus']] },
    { id: 'mumps', q: 'Have you had mumps (or orchitis / testicular inflammation) after puberty?', opts: [['Yes','yes'],['No','no'],["I don't know",'unknown']] },
    { id: 'testicular_pain', q: 'Do you currently have testicular pain, swelling, or a noticeable lump?', opts: [['Yes, currently','yes'],['No','no']] },
    { id: 'varicocele', q: 'Have you ever been told you have a varicocele (enlarged vein in the scrotum)?', opts: [['Yes','yes'],['No','no'],["I don't know",'unknown']] },
    { id: 'metabolic', q: 'Do you have diabetes, obesity (BMI ≥30), or long-term high blood pressure?', opts: [['Yes, one or more','yes'],['No','no']] },
    { id: 'lifestyle', q: 'In the last year, have you regularly: smoked, used anabolic steroids, or worked in high-heat environments?', opts: [['Yes, one or more','yes'],['No','no']] },
    { id: 'trying', q: 'Are you currently trying to conceive for 12+ months without success?', opts: [['Yes','yes'],['No / not applicable','no']] }
  ],
  ar: [
    { id: 'age', q: 'ما فئتك العمرية؟', opts: [['أقل من 18','under18'],['18–34','18_34'],['35–49','35_49'],['50 أو أكثر','50plus']] },
    { id: 'mumps', q: 'هل أصبت بالنكاف (أو التهاب الخصية) بعد البلوغ؟', opts: [['نعم','yes'],['لا','no'],['لا أعرف','unknown']] },
    { id: 'testicular_pain', q: 'هل تعاني حالياً من ألم أو تورم أو كتلة في الخصية؟', opts: [['نعم حالياً','yes'],['لا','no']] },
    { id: 'varicocele', q: 'هل أخبرك طبيب يوماً أن لديك دوالي الخصية؟', opts: [['نعم','yes'],['لا','no'],['لا أعرف','unknown']] },
    { id: 'metabolic', q: 'هل لديك سكري أو سمنة (BMI ≥30) أو ارتفاع مزمن بالضغط؟', opts: [['نعم واحد أو أكثر','yes'],['لا','no']] },
    { id: 'lifestyle', q: 'خلال العام الماضي، هل كنت بانتظام تدخن أو تستخدم منشطات أو تعمل في حرارة عالية؟', opts: [['نعم واحد أو أكثر','yes'],['لا','no']] },
    { id: 'trying', q: 'هل تحاول الإنجاب لأكثر من ١٢ شهراً دون نجاح؟', opts: [['نعم','yes'],['لا / لا ينطبق','no']] }
  ]
};
