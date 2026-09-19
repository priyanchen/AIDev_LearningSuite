import type { CardContent } from './types';

// Session 19 · Logistic Regression, Evaluation, K-Means · 02.09.2026
// Original teaching cards authored from transcript analysis.

export const session19Cards: CardContent[] = [
  {
    number: '00',
    title: { en: 'Session Index', he: 'מפתח המפגש' },
    subtitle: {
      en: 'A ten-card reference for the logistic-regression session',
      he: 'התייחסות של עשרה כרטיסים למפגש הרגרסיה הלוגיסטית',
    },
    sections: [
      {
        heading: { en: 'How to Use', he: 'איך להשתמש' },
        body: {
          en: 'Cards 01, 06, 08 form the philosophical spine. Cards 02, 03, 07 are operational. Cards 04, 05, 09 are interpretive. Card 10 tests recall. Read in order for teaching; consult by name for practice.',
          he: 'כרטיסים 01, 06, 08 מהווים את השדרה הפילוסופית. כרטיסים 02, 03, 07 הם תפעוליים. כרטיסים 04, 05, 09 הם פרשניים. כרטיס 10 בוחן שליטה. קראי לפי הסדר להוראה; היעזרי בשם לתרגול.',
        },
      },
    ],
    principle: {
      en: 'The goal is not to build a model — it is to build a good one',
      he: 'המטרה אינה לבנות מודל — אלא לבנות מודל טוב',
    },
  },
  {
    number: '01',
    title: { en: 'Modeling Discipline', he: 'משמעת המידול' },
    subtitle: {
      en: 'Rules for building models that survive contact with reality',
      he: 'כללים לבניית מודלים ששורדים את המפגש עם המציאות',
    },
    sections: [
      {
        heading: { en: 'Data Leakage', he: 'דליפת נתונים' },
        body: {
          en: 'Fit the scaler on train only. Never on the full dataset. The test set must behave as if it does not exist during training.',
          he: 'התאם את הסקיילר על train בלבד. אף פעם לא על מלוא הנתונים. סט הטסט חייב להתנהג כאילו אינו קיים במהלך האימון.',
        },
      },
      {
        heading: { en: 'Accuracy Illusion', he: 'אשליית הדיוק' },
        body: {
          en: 'A model predicting only the majority class scores 99% on imbalanced data and is useless. On fraud data, throw accuracy out.',
          he: 'מודל שחוזה רק את מחלקת הרוב מקבל 99% על נתונים לא מאוזנים והוא חסר תועלת. על נתוני הונאה, זרקי את הדיוק לפח.',
        },
      },
      {
        heading: { en: 'Choose the Right Metric', he: 'בחרי במדד הנכון' },
        body: {
          en: 'Precision measures against the model. Recall measures against reality. F1 multiplies to punish divergence. Choose by cost of each error type.',
          he: 'Precision נמדד מול המודל. Recall נמדד מול המציאות. F1 מכפיל כדי להעניש סטייה. בחרי לפי מחיר כל סוג שגיאה.',
        },
      },
      {
        heading: { en: 'Threshold Is a Business Decision', he: 'סף הוא החלטה עסקית' },
        body: {
          en: '0.5 is convention, not truth. Always sweep thresholds; decide by domain, not default.',
          he: '0.5 היא מוסכמה, לא אמת. תמיד סרקי ספים; החליטי לפי התחום, לא לפי ברירת המחדל.',
        },
      },
      {
        heading: { en: 'Drop ID Columns', he: 'השמיטי עמודות מזהה' },
        body: {
          en: 'Always drop identifier columns before training. They carry no signal and invite spurious patterns.',
          he: 'תמיד השמיטי עמודות מזהה לפני האימון. הן אינן נושאות אות ומזמינות דפוסים שגויים.',
        },
      },
    ],
    principle: {
      en: 'The goal is not to build a model — it is to build a good one',
      he: 'המטרה אינה לבנות מודל — אלא לבנות מודל טוב',
    },
  },
  {
    number: '02',
    title: { en: 'Installation & Environment', he: 'התקנה וסביבה' },
    subtitle: {
      en: 'A clean Python environment for machine learning',
      he: 'סביבת פייתון נקייה ללמידת מכונה',
    },
    sections: [
      {
        heading: { en: 'Isolated Environment', he: 'סביבה מבודדת' },
        body: {
          en: 'Create a venv: python -m venv venv, then activate. Never install project packages into system Python.',
          he: 'צרי venv: python -m venv venv, ואז הפעילי. אף פעם אל תתקיני חבילות פרויקט לתוך Python המערכתי.',
        },
      },
      {
        heading: { en: 'Core Packages', he: 'חבילות ליבה' },
        body: {
          en: 'pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib. Freeze with pip freeze > requirements.txt.',
          he: 'pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib. הקפיאי עם pip freeze > requirements.txt.',
        },
      },
    ],
    principle: {
      en: 'An isolated environment is discipline, not paranoia',
      he: 'סביבה מבודדת היא משמעת, לא פרנויה',
    },
  },
  {
    number: '03',
    title: { en: 'The ML Pipeline', he: 'צנרת ה-ML' },
    subtitle: {
      en: 'Nine stages from raw data to deployed model',
      he: 'תשעה שלבים מנתונים גולמיים למודל בייצור',
    },
    sections: [
      {
        heading: { en: 'Load & Inspect', he: 'טעינה ובדיקה' },
        body: {
          en: 'Read the CSV. Always inspect target class balance first — it dictates every downstream choice.',
          he: 'קראי את ה-CSV. תמיד בדקי את איזון מחלקות היעד קודם — זה מכתיב כל בחירה הלאה.',
        },
      },
      {
        heading: { en: 'Split, Then Scale', he: 'פצלי, ואז סקיילינג' },
        body: {
          en: 'Split with stratify=y. Then fit_transform scaler on train, transform on test. Never the reverse.',
          he: 'פצלי עם stratify=y. ואז fit_transform סקיילר על אימון, transform על מבחן. אף פעם לא להפך.',
        },
      },
      {
        heading: { en: 'Train, Evaluate, Deploy', he: 'אימון, הערכה, ייצור' },
        body: {
          en: 'Train the model. Evaluate with confusion matrix, precision, recall, F1. Sweep thresholds. Persist with joblib.',
          he: 'אמני את המודל. הערכי עם מטריצת בלבול, precision, recall, F1. סרקי ספים. שמרי עם joblib.',
        },
      },
    ],
    principle: {
      en: 'Order matters — each stage protects the one that follows',
      he: 'הסדר חשוב — כל שלב מגן על זה שאחריו',
    },
  },
  {
    number: '04',
    title: { en: 'Metrics Decoded', he: 'מדדים מפוענחים' },
    subtitle: {
      en: 'The confusion matrix and its four children',
      he: 'מטריצת הבלבול וארבעת ילדיה',
    },
    sections: [
      {
        heading: { en: 'The BabySense Model', he: 'מודל ה-BabySense' },
        body: {
          en: 'A device that beeps when a baby stops breathing. FN (silent when needed) is catastrophe; FP (false alarm) is inconvenience. The cost asymmetry defines the metric to optimize.',
          he: 'מכשיר שמצפצף כשתינוק מפסיק לנשום. FN (שקט כשצריך) הוא אסון; FP (אזעקת שווא) הוא אי-נוחות. אי-סימטריית המחיר מגדירה את המדד למיטוב.',
        },
      },
      {
        heading: { en: 'Precision vs Recall', he: 'Precision מול Recall' },
        body: {
          en: 'Precision: of all model alerts, how many were real. Recall: of all real positives, how many caught. F1 harmonic mean punishes divergence between them.',
          he: 'Precision: מכל התראות המודל, כמה היו אמיתיות. Recall: מכל החיוביים האמיתיים, כמה נתפסו. F1 ממוצע הרמוני מעניש סטייה ביניהם.',
        },
      },
    ],
    principle: {
      en: 'A metric is not good or bad — it is aligned or misaligned with your cost',
      he: 'מדד אינו טוב או רע — הוא מיושר או לא מיושר עם המחיר שלך',
    },
  },
  {
    number: '05',
    title: { en: 'Threshold Strategy', he: 'אסטרטגיית סף' },
    subtitle: {
      en: 'The decision boundary is a business choice',
      he: 'גבול ההחלטה הוא בחירה עסקית',
    },
    sections: [
      {
        heading: { en: 'The Sweep Method', he: 'שיטת הסריקה' },
        body: {
          en: 'Iterate threshold from 0.1 to 0.9. Compute precision, recall, F1 at each. Plot the curves. Read where they cross — decide where they should cross.',
          he: 'איטרי סף מ-0.1 עד 0.9. חשבי precision, recall, F1 בכל אחד. שרטטי את העקומות. קראי היכן הן מצטלבות — החליטי היכן צריכות להצטלב.',
        },
      },
      {
        heading: { en: 'Real Case', he: 'מקרה אמיתי' },
        body: {
          en: 'Credit card fraud dataset. F1-optimal threshold was ~0.9, F1 ≈ 0.6087. Raising the threshold caught the actual fraud pattern that 0.5 buried.',
          he: 'מערך נתוני הונאת אשראי. סף F1-אופטימלי היה כ-0.9, F1 ≈ 0.6087. העלאת הסף תפסה את דפוס ההונאה האמיתי ש-0.5 קבר.',
        },
      },
    ],
    principle: {
      en: 'Every threshold encodes a value judgment — make it consciously',
      he: 'כל סף מקודד שיפוט ערכי — עשי אותו במודעות',
    },
  },
  {
    number: '06',
    title: { en: 'Data Leakage', he: 'דליפת נתונים' },
    subtitle: {
      en: 'The silent corruption of every metric you trust',
      he: 'ההשחתה השקטה של כל מדד שאת סומכת עליו',
    },
    sections: [
      {
        heading: { en: 'What Leakage Is', he: 'מהי דליפה' },
        body: {
          en: 'Any information from outside the training set that reaches the model during training. Evaluation becomes theater when test set influences training.',
          he: 'כל מידע מחוץ לסט האימון שמגיע למודל במהלך האימון. ההערכה הופכת לתיאטרון כשסט המבחן משפיע על האימון.',
        },
      },
      {
        heading: { en: 'Prevention', he: 'מניעה' },
        body: {
          en: 'Split first, always. Every fit-style operation sees train only. Apply fitted transformers to test — never re-fit. Use Pipeline for cross-validation.',
          he: 'פצלי קודם, תמיד. כל פעולת fit רואה אימון בלבד. יישמי טרנספורמרים מותאמים על מבחן — אף פעם אל תתאימי מחדש. השתמשי ב-Pipeline ל-cross-validation.',
        },
      },
    ],
    principle: {
      en: 'If it looks too good, it leaked — verify before you celebrate',
      he: 'אם זה נראה טוב מדי, זה דלף — אמתי לפני שאת חוגגת',
    },
  },
  {
    number: '07',
    title: { en: 'Preprocessing Playbook', he: 'ספר המשחקים של העיבוד המקדים' },
    subtitle: {
      en: 'Decisions to make before the model sees data',
      he: 'החלטות שיש לקבל לפני שהמודל רואה נתונים',
    },
    sections: [
      {
        heading: { en: 'The Hour Problem', he: 'בעיית השעה' },
        body: {
          en: 'Hour 23 and 0 are 1 unit apart in reality, 23 as raw numeric. Use hour_sin = sin(2π·hour/24) and hour_cos. Same for day-of-week, month, angles.',
          he: 'שעה 23 ו-0 במרחק יחידה אחת במציאות, 23 כמספרים גולמיים. השתמשי ב-hour_sin = sin(2π·hour/24) ו-hour_cos. אותו הדבר ליום, חודש, זוויות.',
        },
      },
      {
        heading: { en: 'Class Imbalance', he: 'חוסר איזון מחלקות' },
        body: {
          en: 'First line: class_weight="balanced". Second: stratified split, threshold tuning. Third: SMOTE on train only, after split. Never oversample before splitting.',
          he: 'קו ראשון: class_weight="balanced". שני: פיצול מרובד, כוונון סף. שלישי: SMOTE על אימון בלבד, אחרי פיצול. אף פעם אל תבצעי oversampling לפני פיצול.',
        },
      },
    ],
    principle: {
      en: 'The model learns whatever the data reflects — shape the reflection deliberately',
      he: 'המודל לומד את מה שהנתונים משקפים — עצבי את ההשתקפות בכוונה',
    },
  },
  {
    number: '08',
    title: { en: 'Working with Claude for ML', he: 'עבודה עם Claude ל-ML' },
    subtitle: {
      en: 'How to use LLMs without building blind',
      he: 'איך להשתמש במודלי שפה בלי לבנות בעיוורון',
    },
    sections: [
      {
        heading: { en: 'The Live Case', he: 'המקרה החי' },
        body: {
          en: 'The LLM treated transaction_hour as plain numeric. Hour 23 and 0 are adjacent in reality. As numeric, 23 units apart. The model worked. The error was silent. Only column-by-column review caught it.',
          he: 'ה-LLM טיפל ב-transaction_hour כמספרי פשוט. שעה 23 ו-0 סמוכות במציאות. כמספרים, במרחק 23. המודל עבד. השגיאה הייתה שקטה. רק סקירה עמודה אחר עמודה תפסה אותה.',
        },
      },
      {
        heading: { en: 'Red Flags', he: 'דגלים אדומים' },
        body: {
          en: 'Only accuracy reported → demand precision, recall, F1. Scaler fit on full X → data leakage. Near-perfect metrics → almost certainly leakage. Threshold left at 0.5 → default thinking.',
          he: 'רק דיוק מדווח ← דרשי precision, recall, F1. סקיילר מותאם על X מלא ← דליפת נתונים. מדדים קרובים לשלמות ← כמעט בטוח דליפה. סף נשאר ב-0.5 ← חשיבת ברירת מחדל.',
        },
      },
    ],
    principle: {
      en: 'Claude is a force multiplier — including on your errors',
      he: 'Claude הוא מכפיל כוח — כולל על השגיאות שלך',
    },
  },
  {
    number: '09',
    title: { en: 'K-Means & Clustering', he: 'K-Means ואשכולות' },
    subtitle: {
      en: 'Finding structure in unlabeled data',
      he: 'מציאת מבנה בנתונים לא מתויגים',
    },
    sections: [
      {
        heading: { en: 'The Algorithm', he: 'האלגוריתם' },
        body: {
          en: 'Choose K centers. Assign each point to nearest center. Update each center to mean of assigned points. Repeat until convergence.',
          he: 'בחרי K מרכזים. שייכי כל נקודה למרכז הקרוב. עדכני כל מרכז לממוצע הנקודות המשויכות. חזרי עד התכנסות.',
        },
      },
      {
        heading: { en: 'The Convergence Caveat', he: 'הסתייגות ההתכנסות' },
        body: {
          en: 'K-Means always converges. Does NOT always converge to a good solution. Random initialization can trap in poor local minima. Use init="k-means++" and n_init=10.',
          he: 'K-Means תמיד מתכנס. לא תמיד לפתרון טוב. אתחול אקראי עלול ללכוד במינימום מקומי גרוע. השתמשי ב-init="k-means++" ו-n_init=10.',
        },
      },
      {
        heading: { en: 'Profiling — The Real Work', he: 'פרופיילינג — העבודה האמיתית' },
        body: {
          en: 'Clustering ends when labels appear. Value begins with interpretation. For each cluster: how large, what is the mean of each feature, what distinguishes it, what action does it enable.',
          he: 'האשכול מסתיים כשהתוויות מופיעות. הערך מתחיל בפירוש. לכל אשכול: כמה גדול, מה הממוצע של כל פיצ׳ר, מה מייחד אותו, איזו פעולה הוא מאפשר.',
        },
      },
    ],
    principle: {
      en: 'Finding groups is arithmetic — understanding them is intelligence',
      he: 'מציאת קבוצות היא חשבון — הבנתן היא אינטליגנציה',
    },
  },
  {
    number: '10',
    title: { en: 'Diagnostic Questions', he: 'שאלות אבחון' },
    subtitle: {
      en: 'Interview-grade questions on the session concepts',
      he: 'שאלות ברמת ראיון על מושגי המפגש',
    },
    sections: [
      {
        heading: { en: 'The 99% Trap', he: 'מלכודת ה-99%' },
        body: {
          en: 'Q: A model with 99% accuracy that is useless — describe it. A: On 99/1 imbalanced data, always predicting majority class scores 99% while catching zero positives. Accuracy meaningless; use precision, recall, F1.',
          he: 'ש: מודל עם 99% דיוק שהוא חסר תועלת — תארי. ת: על נתונים 99/1 לא מאוזנים, לחזות תמיד רוב נותן 99% בעוד תופס אפס חיוביים. דיוק חסר משמעות; השתמשי ב-precision, recall, F1.',
        },
      },
      {
        heading: { en: 'Why Scale Only on Train', he: 'למה סקיילינג רק על אימון' },
        body: {
          en: 'Q: Why fit scaler only on train? A: Fitting on full data lets scaler parameters reflect test-set values. Data leakage. Test metrics inflate. Production collapses.',
          he: 'ש: למה להתאים סקיילר רק על אימון? ת: התאמה על נתונים מלאים מאפשרת לפרמטרי הסקיילר לשקף ערכי מבחן. דליפת נתונים. מדדי מבחן מתנפחים. ייצור קורס.',
        },
      },
    ],
    principle: {
      en: 'Interview questions test whether you built the model or the model built you',
      he: 'שאלות ראיון בוחנות אם בנית את המודל או שהמודל בנה אותך',
    },
  },
];
