import type { CardContent } from './types';

// Session 18 · Data Science (Module Session 5) · 30.08.2026
// Dr. Zuari's model-building session: multivariate linear regression, train/test split, R², RMSE/MAE, multicollinearity.
// Cards authored from transcript analysis. Original teaching material.

export const session18Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — where building a model turns out to be the easy two lines, and evaluating it is everything else`,
      he: `מפתח של אחד-עשר כרטיסים — איפה שלבנות מודל מתגלה כשתי השורות הקלות, ולהעריך אותו זה כל השאר`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `Last session's theory becomes real code: a multivariate linear regression model built, trained, and evaluated end to end. The session covers the train/test split discipline, what R² actually measures against a real baseline, when to reach for RMSE versus MAE, why a suspiciously perfect score should worry you instead of exciting you, and closes with a live group exercise building a full regression dashboard with Claude.`,
          he: `התיאוריה של המפגש הקודם הופכת לקוד אמיתי: מודל רגרסיה ליניארית מרובת-משתנים נבנה, מאומן, ומוערך מקצה לקצה. המפגש מכסה את משמעת פיצול האימון/בדיקה, מה R² בעצם מודד מול בייסליין אמיתי, מתי להושיט יד ל-RMSE לעומת MAE, למה ציון מושלם באופן חשוד צריך לדאוג אותך במקום להרגיש אותך, ונסגר בתרגיל קבוצתי חי שבונה דשבורד רגרסיה מלא עם Claude.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the correction Dr. Zuari made to a student's assumption that's worth internalizing before anything else. Card 06 covers the exact moment a great-looking result should make you suspicious rather than happy.`,
          he: `כרטיס 01 הוא התיקון שד״ר זוארי עשה להנחה של סטודנט ששווה להטמיע לפני כל דבר אחר. כרטיס 06 מכסה את הרגע המדויק שבו תוצאה שנראית מעולה צריכה לעשות אותך חשדנית במקום שמחה.`,
        },
      },
    ],
    principle: {
      en: `The two lines of code that build a model are the easy part of this session — the discipline is in everything you do before and after those two lines.`,
      he: `שתי שורות הקוד שבונות מודל הן החלק הקל של המפגש הזה — המשמעת נמצאת בכל מה שעושים לפני ואחרי שתי השורות האלה.`,
    },
  },
  {
    number: '01',
    title: { en: `Training Doesn't Improve a Model — It Creates One`, he: `אימון לא משפר מודל — הוא יוצר אחד` },
    subtitle: {
      en: `Before .fit() runs, there is no model at all — training isn't an upgrade step, it's the step where the model comes into existence`,
      he: `לפני ש-.fit() רץ, אין מודל בכלל — אימון הוא לא צעד שדרוג, הוא הצעד שבו המודל בא לעולם`,
    },
    sections: [
      {
        heading: { en: `The Question That Exposed a Real Misconception`, he: `השאלה שחשפה תפיסה מוטעית אמיתית` },
        body: {
          en: `A student, seeing an R² of roughly 0.43 after training, asked directly: does training again make the model better, since now it has actually "seen" the score? Dr. Zuari's correction was precise — training isn't a step that improves an already-existing model, because before that step runs, no model exists at all. There's nothing to improve; there's only something about to be created for the first time.`,
          he: `סטודנט, שראה R² של בערך 0.43 אחרי אימון, שאל ישירות: האם אימון שוב הופך את המודל לטוב יותר, כיוון שעכשיו הוא בעצם "ראה" את הציון? התיקון של ד״ר זוארי היה מדויק — אימון הוא לא צעד שמשפר מודל שכבר קיים, כי לפני שהצעד הזה רץ, אין מודל בכלל. אין מה לשפר; יש רק משהו שעומד להיווצר בפעם הראשונה.`,
        },
      },
      {
        heading: { en: `Why Retraining Won't Fix a Low Score`, he: `למה אימון חוזר לא יתקן ציון נמוך` },
        body: {
          en: `The direct consequence: a low R² doesn't mean "train it a bit more and it'll improve" — running .fit() again on the exact same data and model produces the exact same weights, because it's finding the same optimal line every time. A genuinely weak score means the model family itself is the wrong tool for this data, not that the training process was somehow incomplete.`,
          he: `ההשלכה הישירה: R² נמוך לא אומר "תאמני אותו עוד קצת וזה ישתפר" — הרצת .fit() שוב על אותם בדיוק נתונים ומודל מייצרת את אותם בדיוק משקלים, כי היא מוצאת את אותו קו אופטימלי בכל פעם. ציון חלש באמת אומר שמשפחת המודל עצמה היא הכלי הלא נכון לנתונים האלה, לא שתהליך האימון היה איכשהו לא שלם.`,
        },
      },
    ],
    principle: {
      en: `A weak score isn't a call to train harder — it's a call to ask whether this is even the right kind of model for the problem.`,
      he: `ציון חלש הוא לא קריאה לאמן יותר קשה — הוא קריאה לשאול אם זה בכלל הסוג הנכון של מודל לבעיה.`,
    },
  },
  {
    number: '02',
    title: { en: `Split Before You Touch Anything Else`, he: `מפצלות לפני שנוגעות בכל דבר אחר` },
    subtitle: {
      en: `Eighty-twenty, never sorted first, and a fixed random_state whenever the experiment needs to be reproduced exactly`,
      he: `שמונים-עשרים, לעולם לא ממוינות קודם, ו-random_state קבוע בכל פעם שהניסוי צריך להיות משוחזר בדיוק`,
    },
    sections: [
      {
        heading: { en: `Why the Data Must Stay Unsorted`, he: `למה הנתונים חייבים להישאר לא ממוינים` },
        body: {
          en: `A student asked whether the data needed to be sorted before splitting — Dr. Zuari's answer was the opposite of what she expected: never sort first. Sorting risks accidentally introducing a structure into the split that isn't actually representative — train_test_split shuffles randomly specifically so the eighty percent and the twenty percent both look like the whole dataset, not like two different slices of it.`,
          he: `סטודנטית שאלה אם הנתונים צריכים להיות ממוינים לפני הפיצול — התשובה של ד״ר זוארי הייתה ההפך ממה שהיא ציפתה לו: לעולם לא למיין קודם. מיון מסכן להכניס בטעות מבנה לתוך הפיצול שלא באמת מייצג — train_test_split מערבב באקראי ספציפית כדי ששמונים האחוז ועשרים האחוז ייראו שניהם כמו כל מערך הנתונים, לא כמו שני חלקים שונים ממנו.`,
        },
      },
      {
        heading: { en: `random_state Isn't Magic — It's a Reproducibility Lock`, he: `random_state הוא לא קסם — הוא מנעול שחזוריות` },
        body: {
          en: `Without fixing random_state, every run of the split produces a different shuffle, and two people running the identical code get different train and test sets. Setting it to any fixed number — Dr. Zuari joked it could be a birth year — locks that randomness in place, so the exact same split happens every time, letting the same experiment be reproduced exactly by anyone using the same number.`,
          he: `בלי לקבע את random_state, כל הרצה של הפיצול מייצרת ערבוב שונה, ושני אנשים שמריצים בדיוק את אותו קוד מקבלים סטי אימון ובדיקה שונים. קביעה שלו למספר קבוע כלשהו — ד״ר זוארי התבדח שזה יכול להיות שנת לידה — נועלת את האקראיות הזו במקום, כך שבדיוק אותו פיצול קורה בכל פעם, ומאפשרת לאותו ניסוי בדיוק להיות משוחזר על ידי כל מי שמשתמש באותו מספר.`,
        },
      },
    ],
    principle: {
      en: `A split that isn't random risks hiding a pattern in plain sight — and a split that isn't reproducible means nobody, including you, can trust the same result twice.`,
      he: `פיצול שהוא לא אקראי מסכן להסתיר דפוס לעין כל — ופיצול שהוא לא בר-שחזור אומר שאף אחד, כולל את עצמך, לא יכול לסמוך על אותה תוצאה פעמיים.`,
    },
  },
  {
    number: '03',
    title: { en: `The Whole Build Is Two Lines`, he: `כל הבנייה היא שתי שורות` },
    subtitle: {
      en: `Instantiate the class, call .fit() on the training data — everything from last session's gradient descent theory collapses into this`,
      he: `יוצרות מופע של המחלקה, קוראות ל-.fit() על נתוני האימון — כל התיאוריה של ירידת הגרדיאנט מהמפגש הקודם מתכווצת לזה`,
    },
    sections: [
      {
        heading: { en: `Import, Instantiate, Fit`, he: `Import, Instantiate, Fit` },
        body: {
          en: `Everything explained across last session — the straight-line formula, the cost function, gradient descent walking downhill step by step — collapses into importing the LinearRegression class, creating an instance of it, and calling .fit() with the training features and training target. That single call is what actually runs the optimization and finds the weights.`,
          he: `כל מה שהוסבר לאורך המפגש הקודם — נוסחת הקו הישר, פונקציית העלות, ירידת הגרדיאנט שהולכת במורד צעד אחרי צעד — מתכווץ לייבוא מחלקת LinearRegression, יצירת מופע שלה, וקריאה ל-.fit() עם פיצ׳רי האימון והמטרה של האימון. הקריאה הבודדת הזו היא מה שבעצם מריץ את האופטימיזציה ומוצא את המשקלים.`,
        },
      },
      {
        heading: { en: `An Untrained Model Can Do Nothing`, he: `מודל לא מאומן לא יכול לעשות כלום` },
        body: {
          en: `Right after instantiating the class but before calling .fit(), the object exists but is genuinely useless — it holds no information at all, no data, nothing learned. Only after training does calling .predict() on new feature values become meaningful, returning an actual forecast rather than nothing at all.`,
          he: `מיד אחרי יצירת מופע המחלקה אבל לפני קריאה ל-.fit(), האובייקט קיים אבל באמת חסר תועלת — הוא לא מחזיק שום מידע בכלל, שום נתונים, שום דבר שנלמד. רק אחרי האימון קריאה ל-.predict() על ערכי פיצ׳ר חדשים הופכת למשמעותית, ומחזירה תחזית ממשית במקום כלום בכלל.`,
        },
      },
    ],
    principle: {
      en: `The building step is deliberately anticlimactic — two lines of code exist so that all the real effort can go into deciding what to feed them and how to judge what comes back.`,
      he: `שלב הבנייה הוא במכוון אנטי-קלימקטי — שתי שורות קוד קיימות כדי שכל המאמץ האמיתי יוכל ללכת להחלטה מה להזין להן ואיך לשפוט מה שחוזר.`,
    },
  },
  {
    number: '04',
    title: { en: `R² Means "Better Than Just Guessing the Average"`, he: `R² אומר "יותר טוב מסתם לנחש את הממוצע"` },
    subtitle: {
      en: `The Peri-and-Moshe story: a model only counts as good relative to the dumbest possible model that ignores every feature`,
      he: `הסיפור של פרי ומשה: מודל נחשב טוב רק ביחס למודל הכי טיפש האפשרי שמתעלם מכל פיצ׳ר`,
    },
    sections: [
      {
        heading: { en: `The Dumb Model: Just Guess the Average`, he: `המודל הטיפש: פשוט לנחש את הממוצע` },
        body: {
          en: `Dr. Zuari's running story: Peri is asked to estimate a property's value knowing nothing except the sale prices of every other unit in the same building — no square footage, no room count, nothing else. With that little information, the best possible guess is simply the average price in the building — that average is the "dumb model," the baseline every real model has to beat.`,
          he: `הסיפור החוזר של ד״ר זוארי: מפרי מבקשים להעריך שווי נכס בלי לדעת כלום חוץ ממחירי המכירה של כל שאר היחידות באותו בניין — בלי מטראז׳, בלי מספר חדרים, שום דבר אחר. עם כל כך מעט מידע, הניחוש הכי טוב האפשרי הוא פשוט הממוצע של המחירים בבניין — הממוצע הזה הוא "המודל הטיפש", הבייסליין שכל מודל אמיתי צריך לנצח.`,
        },
      },
      {
        heading: { en: `R² Is the Improvement Over That Guess`, he: `R² הוא השיפור מעל הניחוש הזה` },
        body: {
          en: `Moshe then arrives with actual square footage and builds a real regression model. R² measures exactly the gap this closes: the distance between the dumb average-guess and reality, versus the distance between the regression model's prediction and reality. The closer that ratio sits to one, the more of the original gap the real model has actually explained.`,
          he: `משה אז מגיע עם מטראז׳ אמיתי ובונה מודל רגרסיה אמיתי. R² מודד בדיוק את הפער שזה סוגר: המרחק בין ניחוש הממוצע הטיפש למציאות, מול המרחק בין התחזית של מודל הרגרסיה למציאות. ככל שהיחס הזה יושב קרוב יותר לאחד, ככה המודל האמיתי בעצם הסביר יותר מהפער המקורי.`,
        },
      },
    ],
    principle: {
      en: `An R² of 0.43 doesn't mean the model is 43% accurate — it means it closed 43% of the gap between guessing blindly and knowing the truth.`,
      he: `R² של 0.43 לא אומר שהמודל מדויק ב-43% — הוא אומר שהוא סגר 43% מהפער בין ניחוש עיוור לידיעת האמת.`,
    },
  },
  {
    number: '05',
    title: { en: `RMSE, MAE, or Adjusted R² — Match the Metric to the Data`, he: `RMSE, MAE, או Adjusted R² — התאימו את המדד לנתונים` },
    subtitle: {
      en: `Wide-spread data explodes under squaring — that's the signal to reach for MAE instead of RMSE`,
      he: `נתונים עם פיזור רחב מתפוצצים תחת העלאה בריבוע — זה הסיגנל להושיט יד ל-MAE במקום RMSE`,
    },
    sections: [
      {
        heading: { en: `Why RMSE Can "Explode"`, he: `למה RMSE יכול "להתפוצץ"` },
        body: {
          en: `RMSE takes each prediction error, squares it, averages those squares, then takes the square root — and Dr. Zuari's specific warning was that widely spread data makes those squared errors blow up into enormous numbers before the square root brings them back down. MAE skips the squaring entirely, using absolute value instead, which keeps the error scale stable even when individual errors vary wildly.`,
          he: `RMSE לוקח כל שגיאת תחזית, מעלה אותה בריבוע, ממצע את הריבועים, ואז לוקח שורש ריבועי — והאזהרה הספציפית של ד״ר זוארי הייתה שנתונים עם פיזור רחב גורמים לשגיאות המרובעות האלה להתפוצץ למספרים ענקיים לפני שהשורש הריבועי מוריד אותן בחזרה. MAE מדלג על ההעלאה בריבוע לגמרי, ומשתמש בערך מוחלט במקום, מה ששומר על סולם השגיאה יציב גם כשהשגיאות הבודדות משתנות בפראות.`,
        },
      },
      {
        heading: { en: `In Practice, Compute Both`, he: `בפועל, מחשבים את שניהם` },
        body: {
          en: `Dr. Zuari's own habit, stated directly: compute all three metrics — R², RMSE, and MAE — every time, rather than committing to just one in advance. Comparing models is only meaningful when the same metrics are reported side by side, and neither RMSE nor MAE means anything as a raw number on its own — only as a basis for comparison between models.`,
          he: `הנוהג של ד״ר זוארי עצמו, נאמר ישירות: לחשב את כל שלושת המדדים — R², RMSE, ו-MAE — בכל פעם, במקום להתחייב לאחד בלבד מראש. השוואת מודלים משמעותית רק כשאותם מדדים מדווחים זה לצד זה, ולא RMSE ולא MAE אומרים כלום כמספר גולמי בפני עצמו — רק כבסיס להשוואה בין מודלים.`,
        },
      },
      {
        heading: { en: `Adjusted R² Fixes a Different Bias`, he: `Adjusted R² מתקן הטיה שונה` },
        body: {
          en: `A separate problem: plain R² is biased upward simply by adding more features, regardless of whether they actually help — a model with forty columns will tend to score higher than one with four, purely from the extra columns. Adjusted R² penalizes for feature count directly in its formula, so it doesn't reward a model just for being bigger.`,
          he: `בעיה נפרדת: R² רגיל מוטה כלפי מעלה פשוט מהוספת עוד פיצ׳רים, בלי קשר לשאלה אם הם באמת עוזרים — מודל עם ארבעים עמודות ייטה לקבל ציון גבוה יותר מאחד עם ארבע, פשוט בגלל העמודות הנוספות. Adjusted R² מעניש על כמות הפיצ׳רים ישירות בנוסחה שלו, כך שהוא לא מתגמל מודל רק על היותו גדול יותר.`,
        },
      },
    ],
    principle: {
      en: `Each metric fixes a specific weakness of the others — the right choice depends on what could go wrong with your specific data, not on which one is more familiar.`,
      he: `כל מדד מתקן חולשה ספציפית של האחרים — הבחירה הנכונה תלויה במה שיכול להשתבש עם הנתונים הספציפיים שלך, לא באיזה מהם יותר מוכר.`,
    },
    exampleUrl: 'https://www.kaggle.com/code/ruchi798/housing-prices-eda-and-prediction',
  },
  {
    number: '06',
    title: { en: `A Near-Perfect Score Is a Red Flag, Not a Celebration`, he: `ציון כמעט-מושלם הוא דגל אדום, לא חגיגה` },
    subtitle: {
      en: `Feeding the model a feature that's secretly the answer produces a great R² and a completely useless model`,
      he: `להזין למודל פיצ׳ר שהוא בסתר התשובה מייצר R² מעולה ומודל חסר תועלת לגמרי`,
    },
    sections: [
      {
        heading: { en: `The Demonstration`, he: `ההדגמה` },
        body: {
          en: `Dr. Zuari built this live: alongside the real square-footage feature, he added a second feature defined as exactly double the price — the target the model is supposed to predict. With the answer already sitting inside the inputs, the model naturally scores extremely high, but this tells you nothing about whether the model has learned anything real about property prices.`,
          he: `ד״ר זוארי בנה את זה בשידור חי: לצד פיצ׳ר המטראז׳ האמיתי, הוא הוסיף פיצ׳ר שני שמוגדר כבדיוק כפול המחיר — היעד שהמודל אמור לחזות. עם התשובה כבר יושבת בתוך הקלטים, המודל מקבל באופן טבעי ציון גבוה מאוד, אבל זה לא אומר כלום על השאלה אם המודל למד משהו אמיתי על מחירי נכסים.`,
        },
      },
      {
        heading: { en: `Why a 0.95+ Score Should Make You Suspicious`, he: `למה ציון של 0.95+ צריך לעשות אותך חשדנית` },
        body: {
          en: `Dr. Zuari's explicit rule of thumb: seeing R² at 0.95 or higher in real-world data is a sign something is wrong almost every time, not evidence of a great model. Genuine real-world relationships are rarely this clean — the far more likely explanation is a leaked feature, a duplicated column, or some other accidental shortcut feeding the answer directly into the input.`,
          he: `כלל האצבע המפורש של ד״ר זוארי: לראות R² של 0.95 ומעלה בנתוני עולם אמיתי הוא סימן שמשהו לא בסדר כמעט תמיד, לא הוכחה למודל מעולה. יחסים אמיתיים בעולם האמיתי לעיתים רחוקות כל כך נקיים — ההסבר הרבה יותר סביר הוא פיצ׳ר שדלף, עמודה כפולה, או קיצור דרך מקרי אחר שמזין את התשובה ישירות לתוך הקלט.`,
        },
      },
    ],
    principle: {
      en: `An unusually great score is a prompt to go looking for what's wrong, not a reason to stop looking — the best models in the real world are good, rarely perfect.`,
      he: `ציון מעולה באופן יוצא דופן הוא הנחיה ללכת לחפש מה לא בסדר, לא סיבה להפסיק לחפש — המודלים הכי טובים בעולם האמיתי הם טובים, לעיתים רחוקות מושלמים.`,
    },
  },
  {
    number: '07',
    title: { en: `Name Every Step, or Get a Mediocre Model`, he: `כנו כל שלב, או קבלו מודל בינוני` },
    subtitle: {
      en: `The live group exercise — specify preprocessing, the metrics, and the dashboard explicitly, or the agent decides for you`,
      he: `התרגיל הקבוצתי החי — לציין עיבוד מקדים, מדדים, ודשבורד במפורש, או שהסוכן מחליט בשבילך`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: hand the raw housing data to Claude and explicitly name the goal — a linear regression model that predicts price, wrapped in a dashboard. Two: name every preprocessing step by its actual term — filling missing values, normalizing, removing outliers — rather than trusting a vague "clean the data" instruction. Three: explicitly list every metric to compute — R², Adjusted R², RMSE, MAE — since none of them appear automatically. Four: verify the result by testing the dashboard's predict function against known values.`,
          he: `אחת: למסור את נתוני הדיור הגולמיים ל-Claude ולכנות במפורש את המטרה — מודל רגרסיה ליניארית שחוזה מחיר, עטוף בדשבורד. שתיים: לכנות כל שלב עיבוד מקדים במונח האמיתי שלו — מילוי ערכים חסרים, נרמול, הסרת חריגים — במקום לסמוך על הוראת "נקה את הנתונים" מעורפלת. שלוש: לפרט במפורש כל מדד לחשב — R², Adjusted R², RMSE, MAE — כי אף אחד מהם לא מופיע אוטומטית. ארבע: לאמת את התוצאה על ידי בדיקת פונקציית החיזוי של הדשבורד מול ערכים ידועים.`,
        },
      },
      {
        heading: { en: `What Happened With the Vague Prompt`, he: `מה קרה עם ה-prompt המעורפל` },
        body: {
          en: `Live, a student who gave a shorter, less specific request ended up with a dashboard missing the exact metrics Dr. Zuari had asked for — no RMSE, no MAE displayed anywhere. The fix wasn't rebuilding from scratch; it was going back and explicitly requesting the missing pieces by name, confirming that nothing gets included by default that wasn't asked for directly.`,
          he: `בשידור חי, סטודנטית שנתנה בקשה קצרה יותר ופחות ספציפית הגיעה לדשבורד שחסר בדיוק את המדדים שד״ר זוארי ביקש — בלי RMSE, בלי MAE מוצג בשום מקום. התיקון לא היה לבנות מחדש מאפס; זה היה לחזור ולבקש במפורש את החלקים החסרים בשם, מה שאישר ששום דבר לא נכלל כברירת מחדל שלא התבקש ישירות.`,
        },
      },
    ],
    principle: {
      en: `An agent building a model needs the exact same specification a human engineer would need — a shorter prompt doesn't produce a smarter model, only a less complete one.`,
      he: `סוכן שבונה מודל צריך בדיוק את אותה מפרט שמהנדסת אנושית הייתה צריכה — prompt קצר יותר לא מייצר מודל חכם יותר, רק אחד פחות שלם.`,
    },
  },
  {
    number: '08',
    title: { en: `"Everything You Don't Ask For, He Does What He Thinks Is Right"`, he: `"כל מה שלא מבקשים, הוא עושה מה שהוא חושב שנכון"` },
    subtitle: {
      en: `Dr. Zuari's own rule, stated directly, for what happens in the gap between a vague instruction and a precise one`,
      he: `הכלל של ד״ר זוארי עצמו, נאמר ישירות, למה שקורה בפער בין הוראה מעורפלת לאחת מדויקת`,
    },
    sections: [
      {
        heading: { en: `The Rule, Verbatim`, he: `הכלל, מילה במילה` },
        body: {
          en: `When a student's dashboard was missing the metrics Dr. Zuari had asked the whole class to include, his explanation was direct and became the rule for the rest of the exercise: everything you don't explicitly ask for, the agent fills in based on what it thinks is reasonable — which is not the same as what you actually wanted.`,
          he: `כשהדשבורד של סטודנטית חסר את המדדים שד״ר זוארי ביקש מכל הכיתה לכלול, ההסבר שלו היה ישיר והפך לכלל לשאר התרגיל: כל מה שלא מבקשים במפורש, הסוכן ממלא על בסיס מה שהוא חושב שהגיוני — מה שהוא לא אותו דבר כמו מה שבאמת רצית.`,
        },
      },
      {
        heading: { en: `Precise Requests, Read Left to Right`, he: `בקשות מדויקות, נקראות משמאל לימין` },
        body: {
          en: `The working prompts read almost like a script, stage by stage: build a linear regression model using scikit-learn, handle missing values, normalize the columns, encode categorical ones, remove outliers, then compute R², Adjusted R², RMSE, and MAE — each stage named explicitly, in the exact order it needs to happen, rather than compressed into a single vague sentence and left for the model to interpret.`,
          he: `ה-prompts שעבדו נקראו כמעט כמו תסריט, שלב אחרי שלב: לבנות מודל רגרסיה ליניארית באמצעות scikit-learn, לטפל בערכים חסרים, לנרמל את העמודות, לקודד את הקטגוריאליות, להסיר חריגים, ואז לחשב R², Adjusted R², RMSE, ו-MAE — כל שלב מכונה במפורש, בסדר המדויק שהוא צריך לקרות בו, במקום דחוס למשפט מעורפל אחד ומושאר לפרשנות המודל.`,
        },
      },
    ],
    principle: {
      en: `A precise prompt isn't extra effort spent on politeness — it's the only mechanism that exists for closing the gap between what an agent assumes and what you actually need.`,
      he: `prompt מדויק הוא לא מאמץ נוסף שמושקע בנימוס — זה המנגנון היחיד שקיים לסגירת הפער בין מה שסוכן מניח למה שאת באמת צריכה.`,
    },
  },
  {
    number: '09',
    title: { en: `Weights Aren't Independent — They're a System`, he: `משקלים הם לא עצמאיים — הם מערכת` },
    subtitle: {
      en: `A counter-intuitive negative weight on room count wasn't a bug — it was two correlated features balancing each other out`,
      he: `משקל שלילי לא-אינטואיטיבי על מספר חדרים לא היה באג — הוא היה שני פיצ׳רים מתואמים שמאזנים אחד את השני`,
    },
    sections: [
      {
        heading: { en: `The Confusion`, he: `הבלבול` },
        body: {
          en: `A student found his model assigning a negative weight to room count — implying, absurdly, that a huge apartment with one giant room would be predicted more expensive than the identical apartment split into five rooms. His instinct was to manually fix that one weight directly.`,
          he: `סטודנט מצא שהמודל שלו הקצה משקל שלילי למספר חדרים — מרמז, בצורה אבסורדית, שדירה ענקית עם חדר אחד גדול תהיה חזויה יקרה יותר מאותה דירה בדיוק שמפוצלת לחמישה חדרים. האינסטינקט שלו היה לתקן ידנית את המשקל הבודד הזה ישירות.`,
        },
      },
      {
        heading: { en: `Why You Can't Fix Just One Weight`, he: `למה אי אפשר לתקן רק משקל אחד` },
        body: {
          en: `Dr. Zuari's explanation: room count and square footage are highly correlated — bigger apartments tend to have more rooms — so the two features are effectively carrying overlapping information. When features overlap this much, the model often balances them against each other, letting one skew positive and the other skew negative, rather than treating each in isolation the way the student expected. The weights aren't computed independently — they're solved together, as one connected system.`,
          he: `ההסבר של ד״ר זוארי: מספר חדרים ומטראז׳ מתואמים מאוד — דירות גדולות יותר נוטות להיות עם יותר חדרים — אז שני הפיצ׳רים בעצם נושאים מידע חופף. כשפיצ׳רים חופפים כל כך, המודל לעיתים קרובות מאזן אותם אחד מול השני, נותן לאחד להטות חיובי ולשני להטות שלילי, במקום להתייחס לכל אחד בבידוד באופן שהסטודנט ציפה לו. המשקלים לא מחושבים באופן עצמאי — הם נפתרים יחד, כמערכת מחוברת אחת.`,
        },
      },
    ],
    principle: {
      en: `An unintuitive weight is a signal to check for correlated features, not to override the number by hand — the fix is removing the redundancy, not silencing the symptom.`,
      he: `משקל לא-אינטואיטיבי הוא סיגנל לבדוק פיצ׳רים מתואמים, לא לעקוף את המספר ידנית — התיקון הוא הסרת היתירות, לא השתקת הסימפטום.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic regression trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על רגרסיה`,
    },
    sections: [
      {
        heading: { en: `On Training and Improvement`, he: `על אימון ושיפור` },
        body: {
          en: `A model's R² comes out at 0.43. A student suggests calling .fit() again to improve it. Why won't this work? Answer: before .fit() runs, no model exists at all — training isn't an upgrade to an existing model, it's the step that creates it. Running it again on the same data and features finds the exact same optimal weights every time; a genuinely weak score means the model family is wrong for this data, not that training was incomplete.`,
          he: `ה-R² של מודל יוצא 0.43. סטודנט מציע לקרוא ל-.fit() שוב כדי לשפר אותו. למה זה לא יעבוד? תשובה: לפני ש-.fit() רץ, אין מודל בכלל — אימון הוא לא שדרוג למודל קיים, הוא הצעד שיוצר אותו. הרצה שוב על אותם נתונים ופיצ׳רים מוצאת בדיוק את אותם משקלים אופטימליים בכל פעם; ציון חלש באמת אומר שמשפחת המודל שגויה לנתונים האלה, לא שהאימון היה לא שלם.`,
        },
      },
      {
        heading: { en: `On R²'s Meaning`, he: `על המשמעות של R²` },
        body: {
          en: `A model scores R² = 0.6. What does this actually say about the model's accuracy? Answer: it doesn't measure accuracy directly — it measures how much of the gap between a "dumb" baseline (always guessing the average) and reality this model closed. An R² of 0.6 means the model explained 60% of that gap, not that its predictions are 60% correct.`,
          he: `מודל מקבל R² = 0.6. מה זה בעצם אומר על הדיוק של המודל? תשובה: זה לא מודד דיוק ישירות — זה מודד כמה מהפער בין בייסליין "טיפש" (תמיד לנחש את הממוצע) למציאות המודל הזה סגר. R² של 0.6 אומר שהמודל הסביר 60% מהפער הזה, לא שהתחזיות שלו נכונות ב-60%.`,
        },
      },
      {
        heading: { en: `On a Suspiciously High Score`, he: `על ציון גבוה באופן חשוד` },
        body: {
          en: `A model built on real-world housing data returns R² = 0.97. Should this be celebrated? Answer: no — Dr. Zuari's rule of thumb is that scores this high on real data are almost always a red flag, not a triumph. The far more likely explanation is a leaked feature — some input that's secretly derived from or nearly identical to the target — rather than a genuinely excellent model.`,
          he: `מודל שנבנה על נתוני דיור אמיתיים מחזיר R² = 0.97. האם זה צריך להיחגג? תשובה: לא — כלל האצבע של ד״ר זוארי הוא שציונים כאלה גבוהים על נתונים אמיתיים כמעט תמיד דגל אדום, לא ניצחון. ההסבר הרבה יותר סביר הוא פיצ׳ר שדלף — קלט כלשהו שנגזר בסתר מהיעד או כמעט זהה לו — במקום מודל מעולה באמת.`,
        },
      },
      {
        heading: { en: `On Multicollinearity`, he: `על מולטיקוליניאריות` },
        body: {
          en: `A regression model assigns a negative weight to room count, which seems to contradict common sense. What's the most likely cause, and why is manually overriding that one weight the wrong fix? Answer: room count is likely highly correlated with square footage, another feature already in the model — when features overlap this heavily, the model balances their weights against each other as one connected system rather than scoring each independently. Manually forcing one weight positive breaks that balance rather than fixing the underlying redundancy; the real fix is removing one of the correlated features.`,
          he: `מודל רגרסיה מקצה משקל שלילי למספר חדרים, מה שנראה סותר את ההיגיון הבריא. מה הסיבה הסבירה ביותר, ולמה לעקוף ידנית את המשקל הבודד הזה הוא התיקון הלא נכון? תשובה: מספר חדרים כנראה מתואם מאוד עם מטראז׳, פיצ׳ר אחר שכבר במודל — כשפיצ׳רים חופפים כל כך, המודל מאזן את המשקלים שלהם אחד מול השני כמערכת מחוברת אחת במקום לתת ציון לכל אחד באופן עצמאי. לכפות ידנית משקל אחד לחיובי שובר את האיזון הזה במקום לתקן את היתירות הבסיסית; התיקון האמיתי הוא הסרת אחד מהפיצ׳רים המתואמים.`,
        },
      },
    ],
    principle: {
      en: `A memorized metric name answers "what to compute." These questions only answer to "what the number actually tells you about the model."`,
      he: `שם מדד שמושנן עונה על "מה לחשב". השאלות האלה עונות רק ל"מה המספר בעצם אומר לך על המודל".`,
    },
  },
];
