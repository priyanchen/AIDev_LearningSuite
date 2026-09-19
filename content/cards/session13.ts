import type { CardContent } from './types';

// Session 13 · Data Science (Module Session 0, opener) · 12.08.2026
// Dr. Zuari's opening Data Science session: EDA, variable types, descriptive statistics, bias, then credential hygiene.
// Cards authored from transcript analysis. Original teaching material.

export const session13Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — the first Data Science session, where every number gets a discipline attached to it`,
      he: `מפתח של אחד-עשר כרטיסים — המפגש הראשון במדעי הנתונים, שבו לכל מספר מצטרפת משמעת`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `Module 4 opens with the statistics every future model evaluation will lean on: exploratory data analysis, how to type a variable correctly, central tendency and dispersion measures built from first principles rather than handed down as formulas, correlation, and two real stories about data that lied without being wrong. The session closes on a return to a Session 12 theme — properly hiding an API key — now done for real with a .env file.`,
          he: `מודול 4 נפתח בסטטיסטיקה שכל הערכת מודל עתידית תישען עליה: ניתוח נתונים חוקר, איך לסווג משתנה נכון, מדדי מיקום מרכזי ופיזור שנבנים מעקרונות ראשונים במקום להימסר כנוסחאות, קורלציה, ושני סיפורים אמיתיים על נתונים ששיקרו בלי לטעות. המפגש נסגר בחזרה לנושא ממפגש 12 — הסתרת מפתח API כמו שצריך — הפעם באמת, עם קובץ .env.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 02 is the vocabulary — read it before anything else in this module. Card 09 explains where the "1.5" in the box-plot rule actually comes from. Card 07 is the credential-hygiene playbook this course has been building toward since Session 12.`,
          he: `כרטיס 02 הוא אוצר המילים — כדאי לקרוא אותו לפני כל דבר אחר במודול הזה. כרטיס 09 מסביר מאיפה ה-1.5 בכלל תיבת הפיזור באמת מגיע. כרטיס 07 הוא ספר ההיגיינה של פרטי הגישה שהקורס בנה לקראתו מאז מפגש 12.`,
        },
      },
    ],
    principle: {
      en: `None of the numbers in this session mean anything until you ask what they're standing in for.`,
      he: `אף אחד מהמספרים במפגש הזה לא אומר כלום עד ששואלים במקום מה הם עומדים.`,
    },
  },
  {
    number: '01',
    title: { en: `Tukey's Discipline — Never Trust the Raw Numbers`, he: `המשמעת של טוקי — לעולם לא לסמוך על המספרים הגולמיים` },
    subtitle: {
      en: `Exploratory Data Analysis as a cycle with no fixed endpoint, and why an insight is not yet an explanation`,
      he: `ניתוח נתונים חוקר כמעגל בלי נקודת סיום קבועה, ולמה תובנה היא עדיין לא הסבר`,
    },
    sections: [
      {
        heading: { en: `The Cycle Has No Finish Line`, he: `למעגל אין קו סיום` },
        body: {
          en: `Dr. Zuari credited the concept to John Tukey: exploratory data analysis (EDA) — compute measures, build graphs, summarize into tables, and let the results raise new questions that send you back to collect more data. It can run for many cycles before anything solid emerges, and looking at raw data alone, before any of this, yields nothing — "you can't understand a single thing."`,
          he: `ד״ר זוארי ייחס את המושג לג׳ון טוקי: ניתוח נתונים חוקר (EDA) — לחשב מדדים, לבנות גרפים, לסכם בטבלאות, ולתת לתוצאות להעלות שאלות חדשות ששולחות בחזרה לאסוף עוד נתונים. זה יכול לרוץ הרבה מעגלים לפני שמשהו מוצק מתגבש, והסתכלות על נתונים גולמיים בלבד, לפני כל זה, לא מניבה כלום — "אי אפשר להבין שום דבר."`,
        },
      },
      {
        heading: { en: `An Insight Is Not Yet an Explanation`, he: `תובנה היא עדיין לא הסבר` },
        body: {
          en: `Discovering that third-class Titanic passengers survived least is a real insight, but a lesser analyst stops there. Dr. Zuari's distinction: a good analyst goes further and asks why — searching for the ship's deck layout, testing whether the pattern holds up under scrutiny — because data almost never states the "why" on its own, only the "what."`,
          he: `לגלות ששורדי מחלקה שלישית בטיטניק היו הכי מעטים היא תובנה אמיתית, אבל אנליסט פחות טוב עוצר שם. ההבחנה של ד״ר זוארי: אנליסט טוב הולך רחוק יותר ושואל למה — מחפש את פריסת סיפון הספינה, בודק אם הדפוס עומד בבחינה — כי נתונים כמעט אף פעם לא אומרים את ה"למה" בעצמם, רק את ה"מה".`,
        },
      },
    ],
    principle: {
      en: `Data rarely explains itself — the discipline this session teaches is to keep asking why after you've already found something.`,
      he: `נתונים לעיתים רחוקות מסבירים את עצמם — המשמעת שהמפגש הזה מלמד היא להמשיך לשאול למה אחרי שכבר מצאת משהו.`,
    },
  },
  {
    number: '02',
    title: { en: `The Four Words Every Dataset Runs On`, he: `ארבע המילים שכל מערך נתונים רץ עליהן` },
    subtitle: {
      en: `DataFrame, feature, record, outcome variable — plus the type taxonomy that decides which chart and which measure`,
      he: `DataFrame, feature, record, משתנה תוצא — ובתוספת טקסונומיית הסוגים שקובעת איזה גרף ואיזה מדד`,
    },
    sections: [
      {
        heading: { en: `Structured Data and Its Vocabulary`, he: `נתונים מובנים ואוצר המילים שלהם` },
        body: {
          en: `Working with the Titanic dataset, Dr. Zuari fixed four terms: the dataframe is the table itself; a feature is a column; a record is a row; the outcome variable is the one column being predicted — survived, in this case. Not all data fits a table this way — images, video, and audio are "unstructured" and need different handling entirely.`,
          he: `בעבודה עם מערך הנתונים של הטיטניק, ד״ר זוארי קבע ארבעה מונחים: ה-dataframe היא הטבלה עצמה; feature היא עמודה; record היא שורה; משתנה התוצא הוא העמודה היחידה שמנסים לחזות — שרד, במקרה הזה. לא כל הנתונים מתאימים לטבלה כך — תמונות, וידאו ואודיו הם "לא מובנים" וצריכים טיפול שונה לגמרי.`,
        },
      },
      {
        heading: { en: `Quantitative vs. Categorical`, he: `כמותי מול קטגוריאלי` },
        body: {
          en: `Every column splits first into quantitative (expresses an amount — room count, property size) or categorical (expresses a category — neighborhood, sea view). Quantitative further splits into continuous (weight, speed — mathematically infinite values between any two points) or discrete (room count, number of children). The practical rule Dr. Zuari gave, since the mathematical definition rarely applies cleanly: few distinct values in a column (roughly seven or fewer) leans discrete; many distinct values leans continuous.`,
          he: `כל עמודה מתחלקת קודם לכמותית (מבטאת כמות — מספר חדרים, גודל נכס) או קטגוריאלית (מבטאת קטגוריה — שכונה, נוף לים). כמותי מתחלק הלאה לרציף (משקל, מהירות — מתמטית אינסוף ערכים בין כל שתי נקודות) או בדיד (מספר חדרים, מספר ילדים). הכלל המעשי שד״ר זוארי נתן, כיוון שההגדרה המתמטית לעיתים רחוקות חלה בנקיות: מעט ערכים שונים בעמודה (בערך שבעה או פחות) נוטה לבדיד; הרבה ערכים שונים נוטה לרציף.`,
        },
      },
      {
        heading: { en: `The ID Number Trap`, he: `מלכודת תעודת הזהות` },
        body: {
          en: `An ID number looks numeric but is categorical — adding five to it means nothing. Categorical itself splits into nominal (no meaningful order — country, hair color), ordinal (order matters — academic degree, flight class), and binary (exactly two values — survived or not). Misjudging this decides which chart is wrong, which measure is meaningless, and which model can't be trusted before analysis even begins.`,
          he: `תעודת זהות נראית מספרית אבל היא קטגוריאלית — להוסיף לה חמש לא אומר כלום. קטגוריאלי עצמו מתחלק לנומינלי (בלי סדר משמעותי — מדינה, צבע שיער), אורדינלי (הסדר משנה — תואר אקדמי, מחלקת טיסה), ובינארי (בדיוק שני ערכים — שרד או לא). לטעות בזה קובע איזה גרף שגוי, איזה מדד חסר משמעות, ואיזה מודל אי אפשר לסמוך עליו עוד לפני שהניתוח בכלל מתחיל.`,
        },
      },
    ],
    principle: {
      en: `Knowing what kind of column you have decides everything downstream — which chart, which measure, which model.`,
      he: `לדעת איזה סוג עמודה יש לך קובע הכול בהמשך — איזה גרף, איזה מדד, איזה מודל.`,
    },
  },
  {
    number: '03',
    title: { en: `Building the Measures From Scratch`, he: `בונים את המדדים מאפס` },
    subtitle: {
      en: `Mean, median, and mode, then variance built by hand — each fixing a specific failure of the one before it`,
      he: `ממוצע, חציון, ושכיח, ואז שונות שנבנית ידנית — כל אחד מתקן כשל ספציפי של הקודם לו`,
    },
    sections: [
      {
        heading: { en: `Central Tendency, Built From an Idea Each`, he: `מיקום מרכזי, בנוי מרעיון לכל אחד` },
        body: {
          en: `The mean is what Dr. Zuari called "the socialist measure" — take everyone's salary, pool it, and redistribute equally. The median is the value with exactly half the data above it and half below. The mode is simply the most frequent value — distinct from "frequency" itself, which counts how often it repeats, a distinction he flagged as a common point of confusion.`,
          he: `הממוצע הוא מה שד״ר זוארי כינה "המדד הסוציאליסטי" — לקחת את המשכורת של כולם, לאחד, ולחלק שווה בשווה. החציון הוא הערך שבדיוק חמישים אחוז מהנתונים מעליו וחמישים אחוז מתחתיו. השכיח הוא פשוט הערך הנפוץ ביותר — נבדל מ"שכיחות" עצמה, שסופרת כמה פעמים הוא חוזר, הבחנה שהוא סימן כנקודת בלבול נפוצה.`,
        },
      },
      {
        heading: { en: `Deviations Sum to Zero — So Square Them`, he: `הסטיות מסתכמות באפס — אז מעלים אותן בריבוע` },
        body: {
          en: `Two datasets can share the exact same mean while looking nothing alike, which is what forces the need for a dispersion measure. Building variance live, Dr. Zuari's class tried summing each value's deviation from the mean directly — it always comes out to zero, because positive and negative deviations cancel. The fix: square every deviation before summing, which also turns every term positive.`,
          he: `שני מערכי נתונים יכולים לחלוק בדיוק את אותו ממוצע בזמן שהם נראים שונים לגמרי, וזה מה שמכריח את הצורך במדד פיזור. בבניית השונות בשידור חי, הכיתה של ד״ר זוארי ניסתה לסכם את הסטייה של כל ערך מהממוצע ישירות — זה תמיד יוצא אפס, כי סטיות חיוביות ושליליות מתקזזות. התיקון: להעלות כל סטייה בריבוע לפני הסיכום, מה שגם הופך כל איבר לחיובי.`,
        },
      },
      {
        heading: { en: `Standard Deviation Undoes the Squaring`, he: `סטיית התקן מבטלת את ההעלאה בריבוע` },
        body: {
          en: `Squaring deviations distorts units — "three shekels squared" means nothing to anyone. Standard deviation is variance's square root, and it exists purely to restore interpretable units: a standard deviation of ten means an observation typically lands about ten units from the mean.`,
          he: `העלאת סטיות בריבוע מעוותת יחידות — "שלושה שקלים בריבוע" לא אומר כלום לאף אחד. סטיית תקן היא השורש הריבועי של השונות, והיא קיימת אך ורק כדי להחזיר יחידות ניתנות לפרשנות: סטיית תקן של עשר אומרת שתצפית בדרך כלל נוחתת בערך עשר יחידות מהממוצע.`,
        },
      },
    ],
    principle: {
      en: `Each measure in this sequence exists to fix a specific, named failure of the one before it.`,
      he: `כל מדד ברצף הזה קיים כדי לתקן כשל ספציפי ומכונה בשם של הקודם לו.`,
    },
  },
  {
    number: '04',
    title: { en: `A Number Without a Translation Is Useless`, he: `מספר בלי תרגום הוא חסר תועלת` },
    subtitle: {
      en: `Computing a statistic is the easy part — saying what it means to a person who didn't ask for the formula is the actual skill`,
      he: `לחשב סטטיסטי זה החלק הקל — לומר מה זה אומר לאדם שלא ביקש את הנוסחה זה הכישור האמיתי`,
    },
    sections: [
      {
        heading: { en: `The CEO Report Test`, he: `מבחן הדיווח למנכ״ל` },
        body: {
          en: `Dr. Zuari's running example: reporting "average profit was ten billion dollars" to a CEO who asks "what does that mean" — you cannot answer with the formula. A statistic that can't be translated into a plain sentence about what it implies for the business is not yet useful, no matter how correctly it was computed.`,
          he: `הדוגמה החוזרת של ד״ר זוארי: לדווח "הרווח הממוצע היה עשרה מיליארד דולר" למנכ״ל ששואל "מה זה אומר" — אי אפשר לענות עם הנוסחה. סטטיסטי שאי אפשר לתרגם למשפט פשוט על מה זה מרמז לעסק הוא עדיין לא שימושי, לא משנה כמה נכון הוא חושב.`,
        },
      },
      {
        heading: { en: `Same Data, Different Measure, Different Argument`, he: `אותם נתונים, מדד שונה, טענה שונה` },
        body: {
          en: `In the wage-dispute role-play, the CEO reports the mean salary and the union representative reports the median — same company, same data, opposite impressions. Because the mean is pulled toward extreme high earners while the median stays put, whoever wants a higher-looking number reaches for the mean, and whoever wants the typical worker's reality reaches for the median.`,
          he: `במשחק התפקידים של סכסוך השכר, המנכ״ל מדווח על ממוצע השכר ונציג העובדים מדווח על החציון — אותה חברה, אותם נתונים, רשמים הפוכים. כיוון שהממוצע נמשך לכיוון מרוויחים גבוהים קיצוניים בעוד החציון נשאר במקום, מי שרוצה מספר שנראה גבוה יותר פונה לממוצע, ומי שרוצה את המציאות של העובד הטיפוסי פונה לחציון.`,
        },
      },
    ],
    principle: {
      en: `Computing a statistic is trivial; translating it into a sentence someone can actually act on is the entire job.`,
      he: `לחשב סטטיסטי זה טריוויאלי; לתרגם אותו למשפט שמישהי באמת יכולה לפעול לפיו זו כל העבודה.`,
    },
  },
  {
    number: '05',
    title: { en: `Which Measure Fits Which Variable`, he: `איזה מדד מתאים לאיזה משתנה` },
    subtitle: {
      en: `Mean is quantitative-only, mode works on either type, and outliers get removed only when the task calls for it`,
      he: `ממוצע רק לכמותי, שכיח עובד על שני הסוגים, וחריגים מוסרים רק כשהמשימה דורשת זאת`,
    },
    sections: [
      {
        heading: { en: `Central Tendency by Variable Type`, he: `מיקום מרכזי לפי סוג משתנה` },
        body: {
          en: `Dr. Zuari drilled this as a direct quiz: mean can only be computed on quantitative data — averaging categories is meaningless. Median, same restriction — only quantitative. Mode is the one measure that works on both quantitative and categorical data, since "most frequent value" makes sense regardless of type.`,
          he: `ד״ר זוארי תרגל את זה כמבחן ישיר: ממוצע אפשר לחשב רק על נתונים כמותיים — לחשב ממוצע של קטגוריות חסר משמעות. חציון, אותה הגבלה — רק כמותי. שכיח הוא המדד היחיד שעובד גם על כמותי וגם על קטגוריאלי, כיוון ש"הערך הנפוץ ביותר" הגיוני בלי קשר לסוג.`,
        },
      },
      {
        heading: { en: `Two Equivalent Outlier Rules`, he: `שני כללי חריגים שקולים` },
        body: {
          en: `Finding outliers via 1.5×IQR beyond Q1/Q3, or via roughly 2–3 standard deviations from the mean, are two different techniques that land on nearly the same threshold for data close to normal. Which one to use is a real choice, not a right-versus-wrong question — but IQR wins whenever the data may already be distorted by the outliers being hunted.`,
          he: `מציאת חריגים באמצעות 1.5×IQR מעבר ל-Q1/Q3, או באמצעות בערך 2-3 סטיות תקן מהממוצע, הן שתי טכניקות שונות שנוחתות כמעט על אותו סף עבור נתונים קרובים לנורמליים. איזה מהם להשתמש היא בחירה אמיתית, לא שאלה של נכון-מול-לא-נכון — אבל IQR מנצח בכל פעם שהנתונים כבר עשויים להיות מעוותים על ידי החריגים שמחפשים.`,
        },
      },
      {
        heading: { en: `Removing Outliers Is a Task Decision, Not a Reflex`, he: `הסרת חריגים היא החלטת משימה, לא רפלקס` },
        body: {
          en: `A student asked directly whether outliers should always be dropped, and Dr. Zuari's answer was no. Fraud detection and anomaly detection exist specifically because the outliers are the interesting part — dropping them there would delete the entire point of the model. Remove outliers only when the task is about modeling the bulk of the data, not the extremes.`,
          he: `סטודנטית שאלה ישירות אם חריגים תמיד צריכים להימחק, והתשובה של ד״ר זוארי הייתה לא. זיהוי הונאות וזיהוי אנומליות קיימים בדיוק כי החריגים הם החלק המעניין — למחוק אותם שם ימחק את כל הטעם של המודל. מסירים חריגים רק כשהמשימה עוסקת במידול רוב הנתונים, לא הקצוות.`,
        },
      },
    ],
    principle: {
      en: `The right measure is chosen by the variable's type and the question being asked, never by habit.`,
      he: `המדד הנכון נבחר לפי סוג המשתנה והשאלה שנשאלת, לעולם לא לפי הרגל.`,
    },
  },
  {
    number: '06',
    title: { en: `Three Ways Numbers Lie Without Being Wrong`, he: `שלוש דרכים שבהן מספרים משקרים בלי לטעות` },
    subtitle: {
      en: `Correlation isn't causation, a huge sample can still be biased, and self-selected reviews aren't a random sample`,
      he: `קורלציה היא לא סיבתיות, מדגם ענק עדיין יכול להיות מוטה, וביקורות בבחירה עצמית הן לא מדגם אקראי`,
    },
    sections: [
      {
        heading: { en: `Correlation ≠ Causation`, he: `קורלציה ≠ סיבתיות` },
        body: {
          en: `Dr. Zuari's classic line: "correlation does not imply causation" — a strong correlation between two stocks can come entirely from an unrelated third factor, like a factory closing in Taiwan, that both happen to react to. The discipline: correlation results should always be reported as "we expect that," never "because."`,
          he: `המשפט הקלאסי של ד״ר זוארי: "קורלציה לא גוררת סיבתיות" — קורלציה חזקה בין שתי מניות יכולה לנבוע לגמרי מגורם שלישי לא קשור, כמו סגירת מפעל בטייוואן, ששתיהן במקרה מגיבות אליו. המשמעת: תוצאות קורלציה תמיד צריכות להיות מדווחות כ"אנחנו מצפים ש", לעולם לא "בגלל ש".`,
        },
      },
      {
        heading: { en: `A Bigger Sample Isn't Automatically Better`, he: `מדגם גדול יותר הוא לא בהכרח טוב יותר` },
        body: {
          en: `In the 1936 story Dr. Zuari told, one polling company surveyed ten million people and another surveyed two thousand — and the smaller, more representative sample won. The larger poll had reached respondents only by phone and car registry, a channel skewed toward wealthier households, building bias directly into the sample regardless of its size.`,
          he: `בסיפור מ-1936 שד״ר זוארי סיפר, חברת סקרים אחת סקרה עשרה מיליון אנשים ואחרת סקרה אלפיים — והמדגם הקטן והמייצג יותר ניצח. הסקר הגדול הגיע לנשאלים רק דרך טלפון ורישום רכב, ערוץ מוטה לכיוון משקי בית עשירים יותר, שבנה הטיה ישירות לתוך המדגם בלי קשר לגודלו.`,
        },
      },
      {
        heading: { en: `Reviews Are a Self-Selected Sample`, he: `ביקורות הן מדגם בבחירה עצמית` },
        body: {
          en: `The restaurant example: a reviewer treated to special service by a chef who spotted them writes a glowing review; an ordinary customer with an ordinary experience often doesn't bother reviewing at all, or leaves a low score when treatment is merely average. Review scores are systematically skewed by who chooses to leave one, not a random sample of every diner's experience.`,
          he: `דוגמת המסעדה: מבקרת שקיבלה שירות מיוחד משף שזיהה אותה כותבת ביקורת מהללת; לקוח רגיל עם חוויה רגילה לעיתים קרובות בכלל לא טורח לכתוב ביקורת, או משאיר ציון נמוך כשהיחס רק ממוצע. ציוני ביקורות מוטים באופן שיטתי לפי מי שבוחר להשאיר אחת, לא מדגם אקראי של חוויית כל סועד.`,
        },
      },
    ],
    principle: {
      en: `A wrong number is easy to catch — a correctly computed number built on biased or misread data is not.`,
      he: `מספר שגוי קל לתפוס — מספר שחושב נכון אבל בנוי על נתונים מוטים או שגויי קריאה, לא.`,
    },
  },
  {
    number: '07',
    title: { en: `Get the Key Out of the Script, For Real This Time`, he: `להוציא את המפתח מהסקריפט, הפעם באמת` },
    subtitle: {
      en: `.env, .gitignore, .env.example, and a README — the full credential-hygiene chain, demonstrated end to end`,
      he: `.env, .gitignore, .env.example, ו-README — שרשרת ההיגיינה המלאה של פרטי גישה, מודגמת מקצה לקצה`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: ask Claude Code directly to create a .env file and load the key from it via python-dotenv, rather than hardcoding the key in the script. Two: confirm the .env file is added to .gitignore before the first commit — this is the step that actually matters, since a hidden key that still gets committed is not protected at all. Three: create a .env.example with the same variable names but no real values, so a collaborator knows exactly what to fill in without ever seeing the real key. Four: have the agent write a README with setup instructions and generate requirements.txt, so anyone who clones the repository can reproduce the environment from scratch.`,
          he: `אחת: לבקש מ-Claude Code ישירות ליצור קובץ .env ולטעון את המפתח ממנו דרך python-dotenv, במקום לקבע את המפתח בסקריפט. שתיים: לאשר שקובץ ה-.env נוסף ל-.gitignore לפני ה-commit הראשון — זה השלב שבאמת משנה, כי מפתח מוסתר שעדיין נכנס ל-commit הוא לא מוגן בכלל. שלוש: ליצור .env.example עם אותם שמות משתנים אבל בלי ערכים אמיתיים, כדי שמשתפת פעולה תדע בדיוק מה למלא בלי לראות את המפתח האמיתי אף פעם. ארבע: לתת לסוכן לכתוב README עם הוראות הקמה וליצור requirements.txt, כדי שכל מי ש-clones את הריפוזיטורי יוכל לשחזר את הסביבה מאפס.`,
        },
      },
      {
        heading: { en: `What Never Gets Committed`, he: `מה שלעולם לא נכנס ל-commit` },
        body: {
          en: `Dr. Zuari was explicit about a second file that also stays out of GitHub: the virtual environment itself. A collaborator doesn't need your exact environment — they need the requirements list so they can build their own, identically isolated one.`,
          he: `ד״ר זוארי היה מפורש לגבי קובץ שני שגם נשאר מחוץ ל-GitHub: הסביבה הווירטואלית עצמה. משתפת פעולה לא צריכה את הסביבה המדויקת שלך — היא צריכה את רשימת הדרישות כדי לבנות משלה, מבודדת באופן זהה.`,
        },
      },
    ],
    principle: {
      en: `A key that's merely "not visible in the file you're looking at" is not protected — .gitignore is what makes the difference permanent.`,
      he: `מפתח שהוא רק "לא נראה בקובץ שאת מסתכלת עליו" הוא לא מוגן — .gitignore הוא מה שהופך את ההבדל לקבוע.`,
    },
  },
  {
    number: '08',
    title: { en: `Let the Agent Scaffold Credentials, Don't Let It Read Them`, he: `תני לסוכן לבנות את שלד פרטי הגישה, אל תני לו לקרוא אותם` },
    subtitle: {
      en: `A single instruction produced the entire .env pattern — and a live near-miss showed exactly what can still go wrong`,
      he: `הוראה אחת ייצרה את כל דפוס ה-.env — ותקרית קרובה בשידור חי הראתה בדיוק מה עדיין יכול להשתבש`,
    },
    sections: [
      {
        heading: { en: `What Worked`, he: `מה עבד` },
        body: {
          en: `A single request — create a .env, read the key from it, gitignore it — produced the full pattern at once: the dotenv import, the os.getenv() call, the .gitignore entry, and a .env.example template, faster and more completely than writing it by hand.`,
          he: `בקשה אחת — צרי .env, קראי את המפתח ממנו, gitignore אותו — ייצרה את כל הדפוס בבת אחת: ייבוא ה-dotenv, קריאת ה-os.getenv(), הרשומה ב-.gitignore, ותבנית .env.example, מהר יותר ושלם יותר מכתיבה ידנית.`,
        },
      },
      {
        heading: { en: `The Catch, Caught Live`, he: `התקלה, נתפסת בשידור חי` },
        body: {
          en: `While installing and verifying the package, the agent's own output briefly echoed the real key value — something Dr. Zuari explicitly hadn't wanted it to read. His rule for exactly this situation: if a model reads a raw secret even by accident, rotate it immediately. The safest assumption is that it may now be trained on or retained somewhere, and the cost of a needless rotation is far smaller than the cost of a leaked key.`,
          he: `בזמן התקנה ואימות של החבילה, הפלט של הסוכן עצמו הדהד בקצרה את ערך המפתח האמיתי — משהו שד״ר זוארי במפורש לא רצה שהוא יקרא. הכלל שלו בדיוק למצב הזה: אם מודל קורא סוד גולמי אפילו בטעות, מחליפים אותו מיד. ההנחה הבטוחה ביותר היא שהוא אולי עכשיו מאומן עליו או שמור איפשהו, ועלות ההחלפה המיותרת קטנה בהרבה מעלות מפתח שדלף.`,
        },
      },
    ],
    principle: {
      en: `Delegate the scaffolding to the agent — never the secret itself.`,
      he: `להאציל את השלד לסוכן — לעולם לא את הסוד עצמו.`,
    },
  },
  {
    number: '09',
    title: { en: `Why 1.5, Why Squared`, he: `למה 1.5, למה בריבוע` },
    subtitle: {
      en: `The math behind variance's squaring and the box plot's whisker rule — both chosen for reasons, not by convention`,
      he: `המתמטיקה שמאחורי ההעלאה בריבוע של השונות וכלל השפמים של תיבת הפיזור — שניהם נבחרו מסיבה, לא ממוסכמה`,
    },
    sections: [
      {
        heading: { en: `Why Square Instead of Taking Absolute Value`, he: `למה בריבוע במקום ערך מוחלט` },
        body: {
          en: `Both squaring and absolute value remove the negative sign, so a student asked why variance doesn't just use absolute deviation instead. Dr. Zuari gave two reasons: mean absolute deviation exists as a real, named measure but is rarely used because its resulting number is hard to communicate meaningfully, and because absolute value is mathematically not differentiable at zero — a property that matters once these measures feed into the optimization math behind model training.`,
          he: `גם העלאה בריבוע וגם ערך מוחלט מסירות את הסימן השלילי, אז סטודנט שאל למה השונות לא פשוט משתמשת בסטייה מוחלטת במקום. ד״ר זוארי נתן שתי סיבות: סטייה מוחלטת ממוצעת קיימת כמדד אמיתי ומכונה בשם אבל לעיתים נדירות בשימוש כי המספר שהיא מייצרת קשה לתקשר בעל משמעות, ומכיוון שערך מוחלט הוא מתמטית לא גזיר באפס — תכונה שמשנה ברגע שהמדדים האלה מוזנים למתמטיקת האופטימיזציה שמאחורי אימון מודל.`,
        },
      },
      {
        heading: { en: `1.5×IQR Is a Robust Stand-In for the Std-Dev Rule`, he: `1.5×IQR הוא תחליף עמיד לכלל סטיית התקן` },
        body: {
          en: `The box plot's whiskers stretch to Q3 plus 1.5×IQR and Q1 minus 1.5×IQR — and Dr. Zuari showed why 1.5 specifically: for a roughly normal distribution, that boundary lands almost exactly where three standard deviations from the mean would. The advantage of using IQR instead of standard deviation directly: IQR is built from quartiles and the median, which stay stable even when the data already contains the extreme outliers being hunted — while standard deviation, computed on that same contaminated data, is already distorted by the very values it's supposed to help flag.`,
          he: `השפמים של תיבת הפיזור נמתחים ל-Q3 ועוד 1.5×IQR ול-Q1 פחות 1.5×IQR — וד״ר זוארי הראה למה דווקא 1.5: עבור התפלגות שקרובה לנורמלית, הגבול הזה נוחת כמעט בדיוק במקום שבו שלוש סטיות תקן מהממוצע היו נוחתות. היתרון בשימוש ב-IQR במקום בסטיית תקן ישירות: IQR נבנה מרבעונים ומהחציון, שנשארים יציבים גם כשהנתונים כבר מכילים את החריגים הקיצוניים שמחפשים — בעוד סטיית תקן, מחושבת על אותם נתונים מזוהמים, כבר מעוותת בדיוק על ידי הערכים שהיא אמורה לעזור לסמן.`,
        },
      },
    ],
    principle: {
      en: `Box-plot whiskers are a robust proxy for the same standard-deviation outlier rule, translated into a measure the outliers can't corrupt while you're using it to find them.`,
      he: `שפמי תיבת הפיזור הם תחליף עמיד לאותו כלל חריגים של סטיית תקן, מתורגם למדד שהחריגים לא יכולים לקלקל בזמן שמשתמשים בו כדי למצוא אותם.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic statistics trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על סטטיסטיקה`,
    },
    sections: [
      {
        heading: { en: `On Variance`, he: `על שונות` },
        body: {
          en: `Why does variance square each deviation from the mean instead of simply taking its absolute value, when both approaches equally remove the negative sign? Answer: mean absolute deviation is a real measure but its result is hard to communicate meaningfully, and — the more fundamental reason — absolute value isn't mathematically differentiable at zero, a property that matters once these measures are used inside the optimization math behind model training.`,
          he: `למה השונות מעלה בריבוע כל סטייה מהממוצע במקום פשוט לקחת ערך מוחלט, כששתי הגישות מסירות באותה מידה את הסימן השלילי? תשובה: סטייה מוחלטת ממוצעת היא מדד אמיתי אבל התוצאה שלו קשה לתקשר בעל משמעות, וה-הסיבה היסודית יותר — ערך מוחלט הוא מתמטית לא גזיר באפס, תכונה שמשנה ברגע שהמדדים האלה משמשים בתוך מתמטיקת האופטימיזציה שמאחורי אימון מודל.`,
        },
      },
      {
        heading: { en: `On Mean vs. Median`, he: `על ממוצע מול חציון` },
        body: {
          en: `A company reports a high average salary, but half its employees earn far below that average. What does this mismatch tell you about the distribution's shape? Answer: this is a positive (right) skew — a small number of very high earners pull the mean upward while leaving the median, which reflects the typical worker, largely unaffected.`,
          he: `חברה מדווחת על שכר ממוצע גבוה, אבל חצי מהעובדים שלה מרוויחים הרבה מתחת לממוצע הזה. מה אי-ההתאמה הזו אומרת על צורת ההתפלגות? תשובה: זו הטיה חיובית (ימינה) — מספר קטן של מרוויחים גבוהים מאוד מושך את הממוצע כלפי מעלה בזמן שמשאיר את החציון, שמשקף את העובד הטיפוסי, כמעט ללא השפעה.`,
        },
      },
      {
        heading: { en: `On Correlation and Normalization`, he: `על קורלציה ונרמול` },
        body: {
          en: `In the loan-grade example, raw counts of late payments were shown to rise as loan grade got riskier — but Dr. Zuari flagged this as biased before it could support any correlation claim. Why does showing percentages instead of raw counts matter here? Answer: if riskier grades simply had more loans issued in total, raw late-payment counts would climb even with no real relationship to risk at all — percentages control for how many loans exist in each grade, which is required before the pattern can honestly be read as a correlation.`,
          he: `בדוגמת דרגת ההלוואה, ספירות גולמיות של תשלומים מאוחרים הוצגו כעולות ככל שדרגת ההלוואה נהייתה מסוכנת יותר — אבל ד״ר זוארי סימן את זה כמוטה לפני שזה יכול לתמוך בטענת קורלציה כלשהי. למה חשוב להציג אחוזים במקום ספירות גולמיות כאן? תשובה: אם לדרגות מסוכנות יותר פשוט הונפקו יותר הלוואות בסך הכול, ספירות תשלומים מאוחרים גולמיות היו מטפסות גם בלי שום קשר אמיתי לסיכון בכלל — אחוזים מבקרים כמה הלוואות קיימות בכל דרגה, מה שנדרש לפני שאפשר לקרוא את הדפוס בכנות כקורלציה.`,
        },
      },
      {
        heading: { en: `On IQR vs. Standard Deviation`, he: `על IQR מול סטיית תקן` },
        body: {
          en: `How is the 1.5×IQR outlier rule related to the standard-deviation method, and why might IQR be preferred when a dataset is already suspected to contain extreme outliers? Answer: 1.5×IQR lands close to where roughly three standard deviations from the mean would for a near-normal distribution, but IQR is built from quartiles and the median, which stay stable under contamination — while standard deviation, computed directly on outlier-contaminated data, is already distorted by the very values it's meant to help flag.`,
          he: `איך כלל החריגים של 1.5×IQR קשור לשיטת סטיית התקן, ולמה IQR עשוי להיות מועדף כשכבר חושדים שמערך נתונים מכיל חריגים קיצוניים? תשובה: 1.5×IQR נוחת קרוב למקום שבו בערך שלוש סטיות תקן מהממוצע היו נוחתות עבור התפלגות קרובה לנורמלית, אבל IQR נבנה מרבעונים ומהחציון, שנשארים יציבים תחת זיהום — בעוד סטיית תקן, מחושבת ישירות על נתונים מזוהמים בחריגים, כבר מעוותת בדיוק על ידי הערכים שהיא אמורה לעזור לסמן.`,
        },
      },
    ],
    principle: {
      en: `A memorized formula answers "how to compute it." These questions only answer to "why it was built that way."`,
      he: `נוסחה שמושננת עונה על "איך מחשבים את זה". השאלות האלה עונות רק ל"למה זה נבנה ככה".`,
    },
  },
];
