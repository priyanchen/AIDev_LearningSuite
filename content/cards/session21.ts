import type { CardContent } from './types';

// Session 21 · Data Science (Module Session 8) · 09.09.2026
// Dr. Zuari's session: cross-validation, hyperparameters vs parameters, Grid Search, LightGBM/CatBoost, live CRM project.
// Cards authored from transcript analysis. Original teaching material.

export const session21Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — from why a single train/test split can lie to you, through to three different ways of building a faster forest of trees`,
      he: `מפתח של אחד-עשר כרטיסים — מלמה פיצול אימון/בדיקה בודד יכול לשקר לך, ועד לשלוש דרכים שונות לבנות יער עצים מהיר יותר`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The model-family roadmap from prior sessions gets its missing pieces: cross-validation as the fix for a lucky or unlucky random split, the real distinction between a model's parameters and its hyperparameters, Grid Search as the brute-force way to tune those hyperparameters, and two newer boosted-tree models — LightGBM and CatBoost — each solving a specific weakness in XGBoost. The session closes with a live group project building a full lead-scoring system end to end.`,
          he: `למפת הדרכים של משפחות המודלים מהמפגשים הקודמים מתווספים החלקים החסרים: אימות-הצלבה כתיקון לפיצול אקראי בר-מזל או חסר-מזל, ההבחנה האמיתית בין הפרמטרים של מודל להיפר-פרמטרים שלו, Grid Search כדרך הכוח הגס לכוון את ההיפר-פרמטרים האלה, ושני מודלי עצי-הגברה חדשים יותר — LightGBM ו-CatBoost — שכל אחד פותר חולשה ספציפית ב-XGBoost. המפגש נסגר בפרויקט קבוצתי חי שבונה מערכת ניקוד לידים מלאה מקצה לקצה.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the distinction Dr. Zuari says students confuse most often. Card 09 is the richest technical material — how three different models each speed up the same underlying idea in a different way.`,
          he: `כרטיס 01 הוא ההבחנה שד״ר זוארי אומר שסטודנטים הכי מבלבלים ביניה. כרטיס 09 הוא החומר הטכני העשיר ביותר — איך שלושה מודלים שונים כל אחד מאיץ את אותו רעיון בסיסי בדרך אחרת.`,
        },
      },
    ],
    principle: {
      en: `Everything in this session exists to answer one question honestly: how sure can you actually be that your model's score means what you think it means?`,
      he: `כל מה שבמפגש הזה קיים כדי לענות בכנות על שאלה אחת: כמה את באמת יכולה להיות בטוחה שהציון של המודל שלך אומר את מה שאת חושבת שהוא אומר?`,
    },
  },
  {
    number: '01',
    title: { en: `Parameters Are the Dial — Hyperparameters Are the Gears`, he: `פרמטרים הם החוגה — היפר-פרמטרים הם גלגלי השיניים` },
    subtitle: {
      en: `One is learned during training and adjusts itself; the other is decided before training even starts, and never changes on its own`,
      he: `אחד נלמד במהלך האימון ומכוון את עצמו; השני מוחלט לפני שהאימון בכלל מתחיל, ולעולם לא משתנה מעצמו`,
    },
    sections: [
      {
        heading: { en: `The Distinction, in Dr. Zuari's Own Terms`, he: `ההבחנה, במונחים של ד״ר זוארי עצמו` },
        body: {
          en: `Dr. Zuari asked the class to separate two things that sound similar but aren't: a model's parameters are what training actually produces — the weights it settles on, like how much importance it assigns to one feature versus another. Hyperparameters are structural choices made before training ever runs — how many trees to build, how deep each tree can grow, how big a step the learning rate takes. His image: hyperparameters are the gears of the machine; parameters are the dial that gets tuned once those gears are already in place.`,
          he: `ד״ר זוארי ביקש מהכיתה להפריד בין שני דברים שנשמעים דומים אבל לא: הפרמטרים של מודל הם מה שהאימון בעצם מייצר — המשקלים שהוא מתיישב עליהם, כמו כמה חשיבות הוא מקצה לפיצ׳ר אחד לעומת אחר. היפר-פרמטרים הם החלטות מבניות שנעשות לפני שהאימון בכלל רץ — כמה עצים לבנות, כמה עמוק כל עץ יכול לגדול, כמה גדול הצעד שקצב הלמידה לוקח. הדימוי שלו: היפר-פרמטרים הם גלגלי השיניים של המכונה; פרמטרים הם החוגה שמכוונים ברגע שגלגלי השיניים כבר במקום.`,
        },
      },
      {
        heading: { en: `Why the Order Can't Reverse`, he: `למה הסדר לא יכול להתהפך` },
        body: {
          en: `The practical consequence follows directly from the definition: hyperparameters must be set before .fit() ever runs, because they define the architecture .fit() will optimize inside of. There's no version of events where training first happens and the hyperparameters get decided afterward — by the time training starts, the gears are already fixed.`,
          he: `ההשלכה המעשית נובעת ישירות מההגדרה: היפר-פרמטרים חייבים להיקבע לפני ש-.fit() בכלל רץ, כי הם מגדירים את הארכיטקטורה ש-.fit() יבצע אופטימיזציה בתוכה. אין גרסת אירועים שבה האימון קורה קודם וההיפר-פרמטרים נקבעים אחר כך — עד שהאימון מתחיל, גלגלי השיניים כבר קבועים.`,
        },
      },
    ],
    principle: {
      en: `If a setting can only be answered before you've seen the trained model, it's a hyperparameter — if it's a number the training process hands back to you, it's a parameter.`,
      he: `אם הגדרה מסוימת ניתנת לענות עליה רק לפני שראית את המודל המאומן, זה היפר-פרמטר — אם זה מספר שתהליך האימון מחזיר לך, זה פרמטר.`,
    },
  },
  {
    number: '02',
    title: { en: `The Roadmap, Completed`, he: `מפת הדרכים, שלמה` },
    subtitle: {
      en: `A recap Dr. Zuari built with the class, question by question — every stage of building a model, in the order it actually happens`,
      he: `סיכום שד״ר זוארי בנה עם הכיתה, שאלה אחר שאלה — כל שלב בבניית מודל, בסדר שבו הוא בעצם קורה`,
    },
    sections: [
      {
        heading: { en: `The Eight Stages, Called Out by Name`, he: `שמונה השלבים, מכונים בשם` },
        body: {
          en: `Rebuilt live by asking the class to fill in each step: data collection, then data analysis (understanding distributions and relationships before touching a model), then preprocessing (dropping irrelevant columns, encoding categorical ones, filling missing values, normalizing), then the train/test split, then training with .fit(), then generating predictions on the held-out set, then evaluation with the appropriate metrics for the problem type.`,
          he: `נבנה מחדש בשידור חי על ידי בקשה מהכיתה למלא כל שלב: איסוף נתונים, אחר כך ניתוח נתונים (הבנת התפלגויות ויחסים לפני שנוגעים במודל), אחר כך עיבוד מקדים (הסרת עמודות לא רלוונטיות, קידוד קטגוריאליות, מילוי ערכים חסרים, נרמול), אחר כך פיצול אימון/בדיקה, אחר כך אימון עם .fit(), אחר כך יצירת תחזיות על הסט המוחזק בצד, ואחר כך הערכה עם המדדים המתאימים לסוג הבעיה.`,
        },
      },
      {
        heading: { en: `Which Steps Skip Which Models`, he: `אילו שלבים מדלגים על אילו מודלים` },
        body: {
          en: `The recap doubled as a review of which model families need which steps: every tree-based model — CART, Random Forest, XGBoost — skips normalization entirely, since trees split on thresholds rather than distances and don't care about column scale. But every one of them still needs categorical encoding, same as linear and logistic regression.`,
          he: `הסיכום שימש גם כסקירה של אילו משפחות מודלים צריכות אילו שלבים: כל מודל מבוסס-עץ — CART, Random Forest, XGBoost — מדלג על נרמול לגמרי, כי עצים מפצלים על סף ערכים ולא על מרחקים ולא אכפת להם מסולם העמודה. אבל כל אחד מהם עדיין צריך קידוד קטגוריאלי, בדיוק כמו רגרסיה ליניארית ולוגיסטית.`,
        },
      },
    ],
    principle: {
      en: `A recap that only lists the steps is a checklist — this one earns its place by also naming which steps each specific model gets to skip.`,
      he: `סיכום שרק מפרט את השלבים הוא רשימת בדיקה — זה מרוויח את מקומו גם על ידי כינוי אילו שלבים כל מודל ספציפי יכול לדלג עליהם.`,
    },
  },
  {
    number: '03',
    title: { en: `Cross-Validation — Why One Split Can Lie`, he: `אימות-הצלבה — למה פיצול אחד יכול לשקר` },
    subtitle: {
      en: `A student's sharp objection — the eighty-twenty split is random, so a great score might just mean you got lucky`,
      he: `התנגדות חדה של סטודנט — הפיצול שמונים-עשרים הוא אקראי, אז ציון מעולה יכול פשוט להיות מזל`,
    },
    sections: [
      {
        heading: { en: `Erez's Objection`, he: `ההתנגדות של ארז` },
        body: {
          en: `A student, Erez, pushed back on the whole evaluation process: since train_test_split shuffles randomly, isn't it possible to get an unusually good recall or precision purely because that particular eighty-twenty split happened to fall in the model's favor — Dr. Zuari's own phrase was that the model "got lucky"? Running the split again with a different random draw might produce a noticeably different, less flattering score.`,
          he: `סטודנט, ארז, התנגד לכל תהליך ההערכה: מכיוון ש-train_test_split מערבב באקראי, האם אפשר לקבל ריקול או דיוק חריג באיכותו פשוט כי הפיצול שמונים-עשרים הספציפי הזה יצא לטובת המודל — הביטוי של ד״ר זוארי עצמו היה שהמודל "יצא בפוקס"? הרצת הפיצול שוב עם הגרלה אקראית שונה עלולה לייצר ציון שונה באופן ניכר ופחות מחמיא.`,
        },
      },
      {
        heading: { en: `The Fix: Repeat the Split, Many Times`, he: `התיקון: לחזור על הפיצול, הרבה פעמים` },
        body: {
          en: `Dr. Zuari's answer confirmed the objection was correct, and the fix is exactly what it sounds like: instead of trusting one split, repeat the entire process many times over, drawing a different test fold each round, training a genuinely new model each time, and collecting a full set of scores rather than a single number. cross_val_score with ten folds means ten separate ninety-ten splits, ten separately trained models, and ten separate scores — never the same model reused, never the same test data seen twice.`,
          he: `התשובה של ד״ר זוארי אישרה שההתנגדות הייתה נכונה, והתיקון הוא בדיוק מה שהוא נשמע: במקום לסמוך על פיצול אחד, לחזור על כל התהליך פעמים רבות, להגריל קפל בדיקה שונה בכל סבב, לאמן מודל חדש באמת בכל פעם, ולאסוף סט שלם של ציונים במקום מספר בודד. cross_val_score עם עשרה קפלים אומר עשרה פיצולים תשעים-עשרה נפרדים, עשרה מודלים שאומנו בנפרד, ועשרה ציונים נפרדים — לעולם לא אותו מודל בשימוש חוזר, לעולם לא אותם נתוני בדיקה שנראים פעמיים.`,
        },
      },
    ],
    principle: {
      en: `A score from a single split is a data point, not a verdict — the only way to know whether it's representative is to generate more of them.`,
      he: `ציון מפיצול בודד הוא נקודת נתון, לא פסק דין — הדרך היחידה לדעת אם הוא מייצג היא לייצר עוד כאלה.`,
    },
  },
  {
    number: '04',
    title: { en: `Read a Range, Not a Verdict`, he: `קראי טווח, לא פסק דין` },
    subtitle: {
      en: `A cross-validation result of 58.57% with a standard deviation of 3.60 doesn't mean the model scores 58.57% — it means it scores somewhere in a band`,
      he: `תוצאת אימות-הצלבה של 58.57% עם סטיית תקן של 3.60 לא אומרת שהמודל מקבל 58.57% — היא אומרת שהוא מקבל ציון אי-שם ברצועה`,
    },
    sections: [
      {
        heading: { en: `Mean and Standard Deviation, Together`, he: `ממוצע וסטיית תקן, יחד` },
        body: {
          en: `Ten folds produce ten AUC scores. Averaging them gives the headline number — in the live demo, 58.57%. But Dr. Zuari insisted the standard deviation matters just as much: at roughly 3.60, it tells you how much those ten individual scores actually varied from one another, which is exactly what the single-split approach could never show.`,
          he: `עשרה קפלים מייצרים עשרה ציוני AUC. ממוצע שלהם נותן את המספר הראשי — בהדגמה החיה, 58.57%. אבל ד״ר זוארי התעקש שסטיית התקן חשובה באותה מידה: בבערך 3.60, היא אומרת לך כמה עשרת הציונים הבודדים בעצם השתנו זה מזה, מה שבדיוק גישת הפיצול הבודד לעולם לא הייתה יכולה להראות.`,
        },
      },
      {
        heading: { en: `Why This Is Where the Statistics Course Pays Off`, he: `למה כאן קורס הסטטיסטיקה משתלם` },
        body: {
          en: `Dr. Zuari's direct remark to the class: this is the moment the standard-deviation material from the statistics session finally becomes useful in practice. Taking the mean plus or minus one standard deviation defines a confidence range — a statement like "this model's true AUC likely sits somewhere between about 55% and 62%" is a fundamentally more honest claim than a single flat percentage.`,
          he: `הערה ישירה של ד״ר זוארי לכיתה: זה הרגע שבו חומר סטיית התקן ממפגש הסטטיסטיקה סוף סוף הופך שימושי בפועל. לקיחת הממוצע פלוס או מינוס סטיית תקן אחת מגדירה טווח ביטחון — טענה כמו "ה-AUC האמיתי של המודל הזה כנראה נמצא אי-שם בין כ-55% ל-62%" היא טענה בסיסית יותר כנה מאחוז שטוח בודד.`,
        },
      },
    ],
    principle: {
      en: `A model score without its spread attached is half the information — the spread is what tells you whether the number is stable or just one lucky roll.`,
      he: `ציון מודל בלי הפיזור שלו מצורף הוא חצי מהמידע — הפיזור הוא מה שאומר לך אם המספר יציב או סתם הטלה אחת בת-מזל.`,
    },
  },
  {
    number: '05',
    title: { en: `Which Boosted Tree — and the "Don't Use a Cannon" Rule`, he: `איזה עץ מוגבר — וכלל ה"אל תשתמש בתותח"` },
    subtitle: {
      en: `XGBoost, LightGBM, and CatBoost solve overlapping problems — the choice comes down to how much categorical data you're actually carrying`,
      he: `XGBoost, LightGBM, ו-CatBoost פותרים בעיות חופפות — הבחירה מגיעה לכמה נתונים קטגוריאליים את בעצם נושאת`,
    },
    sections: [
      {
        heading: { en: `The Category That Explodes Column Count`, he: `הקטגוריה שמנפחת את מספר העמודות` },
        body: {
          en: `Dr. Zuari's motivating example: a single categorical column with fifteen distinct values needs fourteen dummy columns once one-hot encoded — and real-world datasets rarely have just one such column. Multiply fourteen columns by dozens of categorical fields across a real dataset, and the encoding step alone becomes a serious cost before training even starts.`,
          he: `הדוגמה המניעה של ד״ר זוארי: עמודה קטגוריאלית בודדת עם חמש עשרה ערכים נבדלים צריכה ארבע עשרה עמודות דמה ברגע שמקודדים בשיטת one-hot — ובמערכי נתונים אמיתיים לעיתים רחוקות יש רק עמודה אחת כזאת. הכפילו ארבע עשרה עמודות בעשרות שדות קטגוריאליים לאורך מערך נתונים אמיתי, וצעד הקידוד לבדו הופך לעלות רצינית לפני שהאימון בכלל מתחיל.`,
        },
      },
      {
        heading: { en: `CatBoost's Answer — and When to Skip It`, he: `התשובה של CatBoost — ומתי לדלג עליה` },
        body: {
          en: `CatBoost's core pitch: hand it the names of the categorical columns directly, and it handles them internally, with no manual encoding required at all. But Dr. Zuari immediately added the guardrail — quoting a phrase from his own teacher: don't use a cannon to kill a mosquito. If a dataset barely has categorical columns to begin with, CatBoost's main advantage doesn't apply, and reaching for XGBoost is the simpler, equally valid choice.`,
          he: `ההצעה המרכזית של CatBoost: תן לו את שמות העמודות הקטגוריאליות ישירות, והוא מטפל בהן פנימית, בלי שום קידוד ידני נדרש בכלל. אבל ד״ר זוארי הוסיף מיד את גדר הבטיחות — ציטוט של ביטוי מהמורה שלו עצמו: אל תשתמשי בתותח כדי להרוג יתוש. אם למערך נתונים בקושי יש עמודות קטגוריאליות מלכתחילה, היתרון המרכזי של CatBoost לא רלוונטי, והפנייה ל-XGBoost היא הבחירה הפשוטה יותר, ותקפה באותה מידה.`,
        },
      },
    ],
    principle: {
      en: `A model's headline feature is only an advantage if your data actually has the problem that feature was built to solve.`,
      he: `התכונה הראשית של מודל היא יתרון רק אם לנתונים שלך באמת יש את הבעיה שהתכונה הזו נבנתה כדי לפתור.`,
    },
  },
  {
    number: '06',
    title: { en: `More Features Isn't Automatically Better`, he: `יותר פיצ׳רים זה לא אוטומטית יותר טוב` },
    subtitle: {
      en: `A student's instinct — that keeping low-importance features helps fine-tuning — met a direct correction`,
      he: `אינסטינקט של סטודנט — ששמירה על פיצ׳רים בעלי חשיבות נמוכה עוזרת לכוונון עדין — נתקל בתיקון ישיר`,
    },
    sections: [
      {
        heading: { en: `Niv's Question`, he: `השאלה של ניב` },
        body: {
          en: `A student, Niv, having seen a model rebuilt using only its top four most-important features, asked directly: wouldn't keeping the less-important variables too help achieve a more precise result during fine-tuning? The underlying assumption was that quantity of information could only help.`,
          he: `סטודנט, ניב, שראה מודל נבנה מחדש תוך שימוש רק בארבעת הפיצ׳רים החשובים ביותר שלו, שאל ישירות: האם שמירה גם על המשתנים הפחות-חשובים לא הייתה עוזרת להשיג תוצאה מדויקת יותר במהלך כוונון עדין? ההנחה הבסיסית הייתה שכמות מידע יכולה רק לעזור.`,
        },
      },
      {
        heading: { en: `Why the Assumption Is Wrong`, he: `למה ההנחה שגויה` },
        body: {
          en: `Dr. Zuari's correction: the amount of data isn't what determines accuracy. His concrete example — two columns that happen to carry essentially the same information can actively confuse the model rather than help it, without necessarily being labeled as highly correlated in any obvious way. Extra columns are far more likely to be dead weight, or worse, than a secret source of precision.`,
          he: `התיקון של ד״ר זוארי: כמות הנתונים היא לא מה שקובע את הדיוק. הדוגמה הקונקרטית שלו — שתי עמודות שבמקרה נושאות בעצם את אותו מידע יכולות לבלבל את המודל באופן פעיל במקום לעזור לו, מבלי בהכרח להיות מתויגות כמתואמות מאוד בכל דרך גלויה. סביר הרבה יותר שעמודות נוספות הן משקל מת, או גרוע מזה, מאשר מקור סודי לדיוק.`,
        },
      },
    ],
    principle: {
      en: `The real reason to drop low-importance features is cost and speed at scale, not accuracy — but the assumption that they're at least harmless is the part that turns out to be wrong.`,
      he: `הסיבה האמיתית להסיר פיצ׳רים בעלי חשיבות נמוכה היא עלות ומהירות בקנה מידה, לא דיוק — אבל ההנחה שהם לפחות לא מזיקים היא החלק שמתגלה כשגוי.`,
    },
  },
  {
    number: '07',
    title: { en: `Grid Search — Trading Time for Certainty`, he: `Grid Search — סחר זמן בתמורה לוודאות` },
    subtitle: {
      en: `Every hyperparameter combination, crossed with every cross-validation fold — the brute-force way to find the best settings`,
      he: `כל שילוב היפר-פרמטרים, מוצלב עם כל קפל אימות-הצלבה — הדרך של כוח גס למצוא את ההגדרות הטובות ביותר`,
    },
    sections: [
      {
        heading: { en: `The Arithmetic Behind the Name`, he: `החשבון מאחורי השם` },
        body: {
          en: `Dr. Zuari worked the combinatorics live: three options for number of trees, three for max depth, two for learning rate is eighteen total combinations. Cross that with ten cross-validation folds for each combination, and the grid search actually trains one hundred and eighty separate models — all just to identify a single best hyperparameter set. Adding even one more option to any dimension of the grid pushed the live demo's total from fifty-four combinations to two hundred and seventy.`,
          he: `ד״ר זוארי עבד את הקומבינטוריקה בשידור חי: שלוש אפשרויות למספר עצים, שלוש לעומק מקסימלי, שתיים לקצב הלמידה זה שמונה עשרה שילובים בסך הכול. הצליבו את זה עם עשרה קפלי אימות-הצלבה לכל שילוב, וה-grid search בעצם מאמן מאה שמונים מודלים נפרדים — הכול רק כדי לזהות סט היפר-פרמטרים אחד הטוב ביותר. הוספת אפילו אפשרות אחת נוספת לכל ממד של הרשת דחפה את הסך הכולל בהדגמה החיה מחמישים וארבעה שילובים למאתיים שבעים.`,
        },
      },
      {
        heading: { en: `Why This Explains the Wait`, he: `למה זה מסביר את ההמתנה` },
        body: {
          en: `This is exactly why grid search visibly takes longer as the grid grows — it isn't inefficiency, it's the direct cost of exhaustively testing every combination rather than guessing. The output at the end is simple: the specific learning rate, max depth, and number of trees that scored best across all folds, ready to be used for the final model.`,
          he: `זה בדיוק למה grid search לוקח באופן נראה לעין יותר זמן ככל שהרשת גדלה — זה לא חוסר יעילות, זה העלות הישירה של בדיקה ממצה של כל שילוב במקום ניחוש. הפלט בסוף פשוט: קצב הלמידה, העומק המקסימלי, ומספר העצים הספציפיים שקיבלו את הציון הטוב ביותר על פני כל הקפלים, מוכנים לשימוש עבור המודל הסופי.`,
        },
      },
    ],
    principle: {
      en: `Grid search doesn't skip the hard work of tuning by hand — it replaces guessing with an exhaustive count, and the wait time is that count made visible.`,
      he: `Grid search לא מדלג על העבודה הקשה של כוונון ידני — הוא מחליף ניחוש בספירה ממצה, וזמן ההמתנה הוא הספירה הזו כשהיא נראית לעין.`,
    },
  },
  {
    number: '08',
    title: { en: `Build the System on Fake Data First`, he: `בנו את המערכת על נתונים מזויפים קודם` },
    subtitle: {
      en: `The live CRM project's opening move — synthetic data lets the whole architecture get built before a single real record is touched`,
      he: `המהלך הפותח של פרויקט ה-CRM החי — נתונים סינתטיים מאפשרים לכל הארכיטקטורה להיבנות לפני שנוגעים ברשומה אמיתית אחת`,
    },
    sections: [
      {
        heading: { en: `The Scenario That Motivates It`, he: `התרחיש שמניע את זה` },
        body: {
          en: `Dr. Zuari's framing question to the class: imagine arriving at an organization that doesn't allow AI tools to touch its real data at all. Are you stuck? His answer: not remotely — take just the column names and what each one represents, without any real values, generate synthetic data that mimics the same structure, and build the entire system against that instead.`,
          he: `שאלת המסגור של ד״ר זוארי לכיתה: תדמיינו שהגעתם לארגון שלא מאפשר לכלי AI בכלל לגעת בנתונים האמיתיים שלו. האם את תקועה? התשובה שלו: ממש לא — קחי רק את שמות העמודות ואת מה שכל אחת מייצגת, בלי שום ערכים אמיתיים, צרי נתונים סינתטיים שמחקים את אותו מבנה, ובני את כל המערכת מולם במקום.`,
        },
      },
      {
        heading: { en: `What Stays Real, and When`, he: `מה נשאר אמיתי, ומתי` },
        body: {
          en: `The one exception: final model training still needs genuine data — synthetic data can't substitute for that step. But everything around it — the database schema, the intake form, the dashboard, the deployment pipeline — can be built, tested, and verified end to end against synthetic data, with real records swapped in only at the very end, a step that doesn't require an AI tool at all.`,
          he: `החריג היחיד: אימון המודל הסופי עדיין צריך נתונים אמיתיים — נתונים סינתטיים לא יכולים להחליף את הצעד הזה. אבל כל מה שסביבו — סכימת מסד הנתונים, טופס הקליטה, הדשבורד, צנרת הפריסה — אפשר לבנות, לבדוק, ולאמת מקצה לקצה מול נתונים סינתטיים, עם רשומות אמיתיות שמוחלפות פנימה רק בסוף ממש, צעד שלא דורש כלי AI בכלל.`,
        },
      },
    ],
    principle: {
      en: `A data-access restriction blocks one specific step of the pipeline, not the entire project — synthetic data is how you keep building around the blocker instead of stopping at it.`,
      he: `מגבלת גישה לנתונים חוסמת שלב ספציפי אחד של הצנרת, לא את כל הפרויקט — נתונים סינתטיים הם איך שממשיכים לבנות סביב החוסם במקום לעצור בו.`,
    },
  },
  {
    number: '09',
    title: { en: `Three Ways to Speed Up a Forest of Trees`, he: `שלוש דרכים להאיץ יער של עצים` },
    subtitle: {
      en: `XGBoost bootstraps rows and columns, LightGBM bins values into buckets, CatBoost forces every split to mirror itself — three different fixes for the same underlying cost`,
      he: `XGBoost עושה bootstrap לשורות ולעמודות, LightGBM מקבץ ערכים לדליים, CatBoost כופה על כל פיצול לשקף את עצמו — שלושה תיקונים שונים לאותה עלות בסיסית`,
    },
    sections: [
      {
        heading: { en: `XGBoost: Sample Rows and Columns Both`, he: `XGBoost: לדגום שורות ועמודות גם וגם` },
        body: {
          en: `Random Forest already samples rows when building each tree. XGBoost's overfitting defense goes one step further, sampling columns as well as rows for every individual tree — so no single tree ever sees the full feature set, forcing the ensemble as a whole to discover a wider variety of patterns instead of all converging on the same few dominant features.`,
          he: `Random Forest כבר דוגם שורות כשהוא בונה כל עץ. ההגנה של XGBoost מפני התאמת יתר הולכת צעד אחד רחוק יותר, דוגמת גם עמודות וגם שורות לכל עץ בודד — כך שאף עץ בודד לעולם לא רואה את סט הפיצ׳רים המלא, מה שכופה על האנסמבל כמכלול לגלות מגוון רחב יותר של דפוסים במקום שכולם יתכנסו לאותם כמה פיצ׳רים דומיננטיים.`,
        },
      },
      {
        heading: { en: `LightGBM: Bin Values Before Searching for Splits`, he: `LightGBM: לקבץ ערכים לפני חיפוש פיצולים` },
        body: {
          en: `Finding the correct split point in a column with a hundred or more distinct values means checking each one individually — expensive work repeated at every node of every tree. LightGBM's fix, credited by Dr. Zuari to Microsoft's original paper: group continuous values into bins first, so the split search only has to check boundaries between a handful of buckets rather than every raw value — the same underlying idea, computed far more cheaply.`,
          he: `מציאת נקודת הפיצול הנכונה בעמודה עם מאה או יותר ערכים נבדלים אומרת בדיקת כל אחד בנפרד — עבודה יקרה שחוזרת על עצמה בכל צומת של כל עץ. התיקון של LightGBM, מיוחס על ידי ד״ר זוארי למאמר המקורי של Microsoft: לקבץ ערכים רציפים לדליים קודם, כך שחיפוש הפיצול צריך רק לבדוק גבולות בין כמה דליים במקום כל ערך גולמי — אותו רעיון בסיסי, מחושב בהרבה פחות עלות.`,
        },
      },
      {
        heading: { en: `CatBoost: Symmetric Trees and Native Categories`, he: `CatBoost: עצים סימטריים וקטגוריות מובנות` },
        body: {
          en: `CatBoost's two innovations work together: it accepts categorical columns directly, with no one-hot encoding step at all, avoiding the dummy-column explosion entirely. And it builds symmetric trees — the exact same split rule applied across an entire level of the tree, mirror-imaged left to right — meaning the split only has to be computed once per level instead of once per node, at the cost of some flexibility in exchange for real speed.`,
          he: `שני החידושים של CatBoost עובדים יחד: הוא מקבל עמודות קטגוריאליות ישירות, בלי שום שלב קידוד one-hot בכלל, ומונע לגמרי את פיצוץ עמודות הדמה. והוא בונה עצים סימטריים — אותו כלל פיצול בדיוק מיושם על פני שכבה שלמה של העץ, כתמונת ראי משמאל לימין — כלומר הפיצול צריך להיות מחושב רק פעם אחת לשכבה במקום פעם אחת לצומת, במחיר של קצת גמישות בתמורה למהירות ממשית.`,
        },
      },
    ],
    principle: {
      en: `Every improvement here trades some flexibility for speed at scale — none of them makes the underlying tree-building idea smarter, they just make it cheaper to repeat thousands of times.`,
      he: `כל שיפור כאן סוחר קצת גמישות במהירות בקנה מידה — אף אחד מהם לא הופך את רעיון בניית העץ הבסיסי לחכם יותר, הם פשוט הופכים אותו לזול יותר לחזור עליו אלפי פעמים.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic model-tuning trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על כוונון מודלים`,
    },
    sections: [
      {
        heading: { en: `On Parameters vs Hyperparameters`, he: `על פרמטרים מול היפר-פרמטרים` },
        body: {
          en: `Is the number of trees in an XGBoost model a parameter or a hyperparameter, and why does the distinction matter for the order in which you'd set it? Answer: it's a hyperparameter — it's a structural choice made before .fit() runs, not something training produces. Because it must be fixed before training starts, there's no sequence in which you'd train the model first and then decide the tree count afterward.`,
          he: `האם מספר העצים במודל XGBoost הוא פרמטר או היפר-פרמטר, ולמה ההבחנה חשובה לסדר שבו היית קובעת אותו? תשובה: זה היפר-פרמטר — זו בחירה מבנית שנעשית לפני ש-.fit() רץ, לא משהו שהאימון מייצר. מכיוון שהוא חייב להיקבע לפני שהאימון מתחיל, אין רצף שבו היית מאמנת את המודל קודם ואז מחליטה על מספר העצים אחר כך.`,
        },
      },
      {
        heading: { en: `On Cross-Validation`, he: `על אימות-הצלבה` },
        body: {
          en: `A single train/test split gives a model an AUC of 71%. Why isn't that number, by itself, trustworthy? Answer: because the split is random, that 71% could reflect a genuinely good model, or it could simply be a lucky draw for this particular split. Only repeating the process across multiple folds and looking at the mean and standard deviation across all of them reveals whether 71% is representative or an outlier.`,
          he: `פיצול אימון/בדיקה בודד נותן למודל AUC של 71%. למה המספר הזה, בפני עצמו, לא אמין? תשובה: מכיוון שהפיצול אקראי, ה-71% הזה יכול לשקף מודל טוב באמת, או שהוא יכול פשוט להיות הגרלה בת-מזל לפיצול הספציפי הזה. רק חזרה על התהליך על פני כמה קפלים והבטה בממוצע ובסטיית התקן על פני כולם חושפת אם 71% מייצג או חריג.`,
        },
      },
      {
        heading: { en: `On Feature Importance`, he: `על חשיבות פיצ׳רים` },
        body: {
          en: `A model trained on four high-importance features performs about the same as one trained on all twenty original features. What's the actual reason to prefer the four-feature version — better accuracy, or something else? Answer: something else — cost and training speed at scale. Feature count doesn't reliably determine accuracy, and extra low-importance columns can even carry redundant information that confuses the model rather than helping it.`,
          he: `מודל שאומן על ארבעה פיצ׳רים בעלי חשיבות גבוהה מתפקד בערך כמו אחד שאומן על כל עשרים הפיצ׳רים המקוריים. מה הסיבה האמיתית להעדיף את גרסת ארבעת הפיצ׳רים — דיוק טוב יותר, או משהו אחר? תשובה: משהו אחר — עלות ומהירות אימון בקנה מידה. מספר הפיצ׳רים לא קובע דיוק באופן אמין, ועמודות נוספות בעלות חשיבות נמוכה יכולות אפילו לשאת מידע יתיר שמבלבל את המודל במקום לעזור לו.`,
        },
      },
      {
        heading: { en: `On Model Choice`, he: `על בחירת מודל` },
        body: {
          en: `A dataset has almost no categorical columns. Is CatBoost still the right choice over XGBoost? Answer: no — CatBoost's main advantage is native handling of categorical columns without one-hot encoding, and if a dataset barely has any, that advantage doesn't apply. Reaching for CatBoost anyway is "using a cannon to kill a mosquito" — XGBoost is the simpler, equally valid choice here.`,
          he: `למערך נתונים כמעט אין עמודות קטגוריאליות. האם CatBoost עדיין הבחירה הנכונה מעל XGBoost? תשובה: לא — היתרון המרכזי של CatBoost הוא טיפול מובנה בעמודות קטגוריאליות בלי קידוד one-hot, ואם למערך נתונים בקושי יש כאלה, היתרון הזה לא רלוונטי. הפנייה ל-CatBoost בכל זאת היא "שימוש בתותח כדי להרוג יתוש" — XGBoost היא הבחירה הפשוטה יותר, ותקפה באותה מידה, כאן.`,
        },
      },
    ],
    principle: {
      en: `A memorized model name answers "what to import." These questions only answer to "what problem this specific choice actually solves."`,
      he: `שם מודל שמושנן עונה על "מה לייבא". השאלות האלה עונות רק ל"איזו בעיה הבחירה הספציפית הזו בעצם פותרת".`,
    },
  },
];
