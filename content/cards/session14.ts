import type { CardContent } from './types';

// Session 14 · Data Science (Module Session 1) · 16.08.2026
// Dr. Zuari's pandas/numpy session: vectorization, Series/DataFrame, .loc/.iloc, describe() pitfalls, Streamlit deployment.
// Cards authored from transcript analysis. Original teaching material.

export const session14Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — where lists stop being enough, and the object grammar from Session 3 returns`,
      he: `מפתח של אחד-עשר כרטיסים — איפה שרשימות מפסיקות להספיק, והדקדוק של אובייקטים ממפגש 3 חוזר`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The session opens with a broken promise: a plain Python list can't do the arithmetic you'd expect. That failure motivates NumPy and, on top of it, pandas — the package Dr. Zuari called mandatory for everything the course builds from here on. The session covers Series and DataFrame objects, filtering and sorting, the .loc/.iloc distinction, describe()'s blind spot around variable types, and closes by deploying a real Streamlit dashboard, built with an agent, straight to the web.`,
          he: `המפגש נפתח בהבטחה שבורה: רשימת פייתון רגילה לא יכולה לעשות את החשבון שהיית מצפה לו. הכשל הזה מניע את NumPy, ומעליו, את pandas — החבילה שד״ר זוארי כינה חובה לכל מה שהקורס בונה מכאן והלאה. המפגש מכסה אובייקטי Series ו-DataFrame, סינון ומיון, ההבחנה בין .loc ל-.iloc, הנקודה העיוורת של describe() סביב סוגי משתנים, ונסגר בפריסת דשבורד Streamlit אמיתי, שנבנה עם סוכן, ישר לרשת.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the connective thread running through the whole session — read it first. Card 06 covers the describe() trap that directly extends Session 13's variable-typing lesson. Card 07 is the dashboard-to-web deployment sequence, several students hit live during class.`,
          he: `כרטיס 01 הוא החוט המחבר שרץ לאורך כל המפגש — כדאי לקרוא אותו קודם. כרטיס 06 מכסה את מלכודת ה-describe() שמרחיבה ישירות את שיעור סוגי המשתנים ממפגש 13. כרטיס 07 הוא רצף הפריסה מדשבורד לרשת, שכמה סטודנטים נתקלו בו בשידור חי בכיתה.`,
        },
      },
    ],
    principle: {
      en: `Pandas is not a new subject — it's the same object grammar you already know, pointed at a table instead of a string.`,
      he: `Pandas היא לא נושא חדש — זה אותו דקדוק אובייקטים שכבר את מכירה, מכוון לטבלה במקום למחרוזת.`,
    },
  },
  {
    number: '01',
    title: { en: `Same Object Grammar, New Data Type`, he: `אותו דקדוק אובייקטים, סוג נתונים חדש` },
    subtitle: {
      en: `A DataFrame and Series follow the exact attributes-and-methods pattern taught since strings in Session 3`,
      he: `DataFrame ו-Series עוקבים אחרי בדיוק אותו דפוס תכונות-ומתודות שנלמד מאז מחרוזות במפגש 3`,
    },
    sections: [
      {
        heading: { en: `The Sentence Keeps Returning`, he: `המשפט ממשיך לחזור` },
        body: {
          en: `Dr. Zuari deliberately repeated, almost word for word, the phrase used for strings, lists, and classes: every object has attributes and methods. A pandas Series has \`index\`, \`values\`, \`dtype\`, and \`name\` as attributes, reachable with a dot, exactly the way \`len()\` and slicing worked on a string in the first Python sessions.`,
          he: `ד״ר זוארי חזר במכוון, כמעט מילה במילה, על המשפט ששימש למחרוזות, רשימות, ומחלקות: לכל אובייקט יש תכונות ומתודות. ל-Series של pandas יש \`index\`, \`values\`, \`dtype\`, ו-\`name\` כתכונות, שמגיעים אליהן עם נקודה, בדיוק כמו ש-\`len()\` וחיתוך עבדו על מחרוזת במפגשי הפייתון הראשונים.`,
        },
      },
      {
        heading: { en: `Recognize the Pattern, Not the Package`, he: `לזהות את הדפוס, לא את החבילה` },
        body: {
          en: `The instruction wasn't to memorize every pandas method — Dr. Zuari was explicit that the slide deck holds "infinite" methods and that's not the goal. The goal was recognizing, on sight, that any new object — whether it's a Series today or an unfamiliar library's class next month — answers to the same two questions: what does it hold, and what can it do.`,
          he: `ההוראה לא הייתה לשנן כל מתודה של pandas — ד״ר זוארי היה מפורש שהמצגת מחזיקה מתודות "אינסופיות" וזו לא המטרה. המטרה הייתה לזהות, במבט, שכל אובייקט חדש — בין אם זה Series היום או מחלקה לא מוכרת של ספרייה בחודש הבא — עונה לאותן שתי שאלות: מה הוא מחזיק, ומה הוא יכול לעשות.`,
        },
      },
    ],
    principle: {
      en: `Every object you'll meet from here on is a variation on a pattern this course already taught you — the discipline is recognizing it, not relearning it.`,
      he: `כל אובייקט שתפגשי מכאן והלאה הוא וריאציה על דפוס שהקורס הזה כבר לימד אותך — המשמעת היא לזהות אותו, לא ללמוד אותו מחדש.`,
    },
  },
  {
    number: '02',
    title: { en: `Install NumPy and Pandas, and Confirm the Environment Matches`, he: `להתקין NumPy ו-Pandas, ולוודא שהסביבה תואמת` },
    subtitle: {
      en: `The install command is trivial — the failure almost everyone hit was a mismatch between notebook and environment`,
      he: `פקודת ההתקנה טריוויאלית — הכשל שכמעט כולם נתקלו בו היה חוסר התאמה בין המחברת לסביבה`,
    },
    sections: [
      {
        heading: { en: `Two Packages, One Foundation`, he: `שתי חבילות, יסוד אחד` },
        body: {
          en: `\`pip install numpy\` and \`pip install pandas\`, confirmed the same way as always — run \`import numpy\` and \`import pandas\`, and a clean run with no red error is the only proof either package actually installed. Dr. Zuari was explicit that pandas is built directly on top of NumPy, so a minimal working knowledge of NumPy — mainly the array object — comes first.`,
          he: `\`pip install numpy\` ו-\`pip install pandas\`, מאושרים באותה דרך כמו תמיד — מריצים \`import numpy\` ו-\`import pandas\`, וריצה נקייה בלי שגיאה אדומה היא ההוכחה היחידה שהחבילה באמת התקינה. ד״ר זוארי היה מפורש שפאנדס בנויה ישירות על גבי NumPy, אז ידע מינימלי ועובד על NumPy — בעיקר אובייקט המערך — בא קודם.`,
        },
      },
      {
        heading: { en: `The Real Failure: Kernel vs. Environment`, he: `הכשל האמיתי: kernel מול סביבה` },
        body: {
          en: `Nearly every student who got stuck installing had already succeeded once and then hit a wall — installing in the terminal but running the notebook on a different, unrelated Python kernel; or installing successfully but never restarting the notebook to pick up the new package. Dr. Zuari's fix, repeated to student after student: close the notebook completely, reopen it, and try the import again before assuming anything is actually broken.`,
          he: `כמעט כל סטודנט שנתקע בהתקנה כבר הצליח פעם אחת ואז פגע בקיר — התקנה בטרמינל אבל הרצת המחברת על kernel פייתון אחר, לא קשור; או התקנה מוצלחת אבל בלי לעולם להפעיל מחדש את המחברת כדי שהיא תקלוט את החבילה החדשה. התיקון של ד״ר זוארי, שחזר על עצמו לסטודנטית אחרי סטודנטית: לסגור את המחברת לגמרי, לפתוח אותה מחדש, ולנסות את הייבוא שוב לפני שמניחים ששבר משהו באמת.`,
        },
      },
    ],
    principle: {
      en: `A green install and a green import can still point at two different Pythons — restarting the notebook is the cheapest way to rule that out.`,
      he: `התקנה ירוקה וייבוא ירוק עדיין יכולים להצביע על שני פייתונים שונים — הפעלה מחדש של המחברת היא הדרך הכי זולה לשלול את זה.`,
    },
  },
  {
    number: '03',
    title: { en: `The Filter-and-Sort Pipeline`, he: `צנרת הסינון והמיון` },
    subtitle: {
      en: `Build a boolean mask, hand it to .loc, chain it into a sentence read left to right`,
      he: `בונים מסכת בוליאנית, מוסרים אותה ל-.loc, משרשרים אותה למשפט שנקרא משמאל לימין`,
    },
    sections: [
      {
        heading: { en: `The Mask Comes First`, he: `המסכה קודם` },
        body: {
          en: `Comparing a Series to a value — \`series > 0\` — doesn't filter anything by itself; it returns a same-length Series of True/False, called a boolean mask. Dr. Zuari's naming convention: store it in a variable, often just called \`mask\`, before ever touching \`.loc\`.`,
          he: `השוואת Series לערך — \`series > 0\` — לא מסננת שום דבר בעצמה; היא מחזירה Series באותו אורך של True/False, שנקרא מסכה בוליאנית. מוסכמת השמות של ד״ר זוארי: לשמור אותה במשתנה, לרוב פשוט בשם \`mask\`, לפני שנוגעים בכלל ב-\`.loc\`.`,
        },
      },
      {
        heading: { en: `.loc Reads Like a Sentence`, he: `.loc נקרא כמו משפט` },
        body: {
          en: `\`series.loc[mask]\` reads left to right: take the series, then filter it, then optionally sort it — the same "screenplay" quality Dr. Zuari pointed out in lists and dictionaries earlier in the course. Long chains get wrapped in parentheses rather than crammed onto one line, specifically so they can break across lines and stay readable for someone without a wide monitor.`,
          he: `\`series.loc[mask]\` נקרא משמאל לימין: לוקחים את הסדרה, ואז מסננים אותה, ואז אופציונלית ממיינים אותה — אותה איכות "תסריט" שד״ר זוארי הצביע עליה ברשימות ובמילונים קודם בקורס. שרשראות ארוכות נעטפות בסוגריים במקום להידחס לשורה אחת, בדיוק כדי שיוכלו להישבר בין שורות ולהישאר קריאות למישהי בלי מסך רחב.`,
        },
      },
    ],
    principle: {
      en: `A filter is never applied directly — a mask is built first, then handed to .loc as an instruction, not a calculation.`,
      he: `סינון לעולם לא מבוצע ישירות — מסכה נבנית קודם, ואז נמסרת ל-.loc כהוראה, לא כחישוב.`,
    },
  },
  {
    number: '04',
    title: { en: `Read the Dtype Before You Trust the Column`, he: `קראי את ה-dtype לפני שאת סומכת על העמודה` },
    subtitle: {
      en: `A price column with a "$" inside it isn't a number to pandas — it's an object, and math on it silently fails`,
      he: `עמודת מחיר עם "$" בפנים היא לא מספר בשביל pandas — היא object, וחשבון עליה נכשל בשקט`,
    },
    sections: [
      {
        heading: { en: `Why Object Dtype Is a Warning Sign`, he: `למה dtype של object הוא סימן אזהרה` },
        body: {
          en: `A column showing dtype \`object\` instead of \`int64\` or \`float64\` means pandas isn't treating its contents as numbers at all — often because a stray character, like a currency symbol, is embedded in every value. No arithmetic operation on that column will work until the string is cleaned and the column is explicitly converted with \`.astype()\`.`,
          he: `עמודה שמראה dtype של \`object\` במקום \`int64\` או \`float64\` אומרת שpandas בכלל לא מתייחסת לתוכן שלה כמספרים — לעיתים קרובות כי תו תועה, כמו סימן מטבע, מוטמע בכל ערך. שום פעולה אריתמטית על העמודה הזו לא תעבוד עד שהמחרוזת מנוקה והעמודה מומרת במפורש עם \`.astype()\`.`,
        },
      },
      {
        heading: { en: `Cleaning Requires .str, Not the String Method Directly`, he: `ניקוי דורש .str, לא את שיטת המחרוזת ישירות` },
        body: {
          en: `A Series holding text can't call \`.replace()\` the way a raw string can — the operation has to be reached through the \`.str\` accessor first: \`series.str.replace('$', '')\`. This is the same pattern as \`.loc\`: pandas objects require going through their own dedicated interface rather than borrowing a method from the underlying type directly.`,
          he: `Series שמחזיק טקסט לא יכול לקרוא ל-\`.replace()\` באותה דרך שמחרוזת גולמית יכולה — הפעולה חייבת להגיע דרך ה-accessor של \`.str\` קודם: \`series.str.replace('$', '')\`. זה אותו דפוס כמו \`.loc\`: אובייקטי pandas דורשים לעבור דרך הממשק הייעודי שלהם במקום לשאול מתודה מהטיפוס הבסיסי ישירות.`,
        },
      },
    ],
    principle: {
      en: `Dtype is not decoration — it's the first thing to check, because it tells you exactly which operations are still safe.`,
      he: `dtype הוא לא קישוט — זה הדבר הראשון לבדוק, כי הוא אומר בדיוק אילו פעולות עדיין בטוחות.`,
    },
  },
  {
    number: '05',
    title: { en: `.iloc for Position, .loc for Label — and Respect the Recommendation`, he: `.iloc למיקום, .loc לתווית — ומכבדים את ההמלצה` },
    subtitle: {
      en: `Bracket indexing sometimes still works by luck — Wes McKinney's own advice is to never rely on that luck`,
      he: `אינדוקס בסוגריים לפעמים עדיין עובד במזל — ההמלצה של Wes McKinney עצמו היא לעולם לא לסמוך על המזל הזה`,
    },
    sections: [
      {
        heading: { en: `The Mechanic Analogy`, he: `אנלוגיית המכונאי` },
        body: {
          en: `Dr. Zuari introduced Wes McKinney, pandas' creator, with a repair-shop comparison: fixing a washing machine with parts the manufacturer didn't recommend might work, until it doesn't. Raw bracket indexing on a Series can behave inconsistently — \`series[-1]\` isn't guaranteed to return the last element the way it does on a list. McKinney's own guidance, which Dr. Zuari passed on directly, is to always reach for \`.iloc\` for position-based indexing.`,
          he: `ד״ר זוארי הציג את Wes McKinney, יוצר pandas, עם השוואה למוסך: לתקן מכונת כביסה עם חלקים שהיצרן לא המליץ עליהם אולי עובד, עד שזה לא. אינדוקס גולמי בסוגריים על Series יכול להתנהג בצורה לא עקבית — \`series[-1]\` לא מובטח להחזיר את האיבר האחרון באותה דרך שהוא עושה ברשימה. ההנחיה של מקינני עצמו, שד״ר זוארי העביר ישירות, היא תמיד להושיט יד ל-\`.iloc\` לאינדוקס מבוסס-מיקום.`,
        },
      },
      {
        heading: { en: `Label-Based Slicing Includes the Endpoint`, he: `חיתוך מבוסס-תווית כולל את נקודת הסיום` },
        body: {
          en: `Every slice taught up to this point — lists, strings, \`.iloc\` — excludes the final index. \`.loc\` breaks that pattern on purpose: \`df.loc['date':'sales']\` includes both named endpoints, because label-based slicing follows a different logical rule than position-based slicing. Missing this exception is what caused visible confusion in class the moment \`.loc\` returned one extra column nobody expected.`,
          he: `כל חיתוך שנלמד עד הנקודה הזו — רשימות, מחרוזות, \`.iloc\` — לא כולל את האינדקס האחרון. \`.loc\` שוברת את הדפוס הזה בכוונה: \`df.loc['date':'sales']\` כוללת את שני התוויות בשמם, כי חיתוך מבוסס-תווית עוקב אחרי כלל לוגי שונה מחיתוך מבוסס-מיקום. פספוס החריג הזה הוא מה שגרם לבלבול גלוי בכיתה ברגע ש-.loc החזירה עמודה נוספת אחת שאף אחד לא ציפה לה.`,
        },
      },
    ],
    principle: {
      en: `Choose .iloc when you're thinking in positions, .loc when you're thinking in names — and remember .loc is the one exception that includes its endpoint.`,
      he: `בוחרים ב-.iloc כשחושבים במיקומים, ב-.loc כשחושבים בשמות — וזוכרים ש-.loc הוא החריג היחיד שכולל את נקודת הסיום שלו.`,
    },
  },
  {
    number: '06',
    title: { en: `describe() Doesn't Know Statistics — It Only Computes`, he: `describe() לא יודעת סטטיסטיקה — היא רק מחשבת` },
    subtitle: {
      en: `Calling mean() on an ID column produces a number pandas never questions — that judgment call is still yours`,
      he: `קריאה ל-mean() על עמודת ID מייצרת מספר שpandas לעולם לא מפקפקת בו — שיקול הדעת הזה עדיין שלך`,
    },
    sections: [
      {
        heading: { en: `A Number With No Question Attached`, he: `מספר בלי שאלה מצורפת` },
        body: {
          en: `Calling \`.describe()\` on a full table computes mean, standard deviation, and quartiles for every column that looks numeric — including an ID column, where averaging is meaningless. Dr. Zuari's line: "Python doesn't understand statistics, it does what we tell it" — it sees digits and computes, with no concept of Session 13's quantitative-versus-categorical distinction unless a human applies it first.`,
          he: `קריאה ל-\`.describe()\` על טבלה שלמה מחשבת ממוצע, סטיית תקן, ורבעונים לכל עמודה שנראית מספרית — כולל עמודת ID, שבה חישוב ממוצע חסר משמעות. השורה של ד״ר זוארי: "פייתון לא מבינה סטטיסטיקה, היא עושה מה שאנחנו אומרים לה" — היא רואה ספרות ומחשבת, בלי שום מושג של ההבחנה כמותי-מול-קטגוריאלי ממפגש 13 אלא אם בן אדם מיישם אותה קודם.`,
        },
      },
      {
        heading: { en: `describe(include='all') Fixes Half the Problem`, he: `describe(include='all') מתקנת חצי מהבעיה` },
        body: {
          en: `Adding \`include='all'\` makes pandas surface both sets of measures side by side — count/mean/std for quantitative columns, and unique/top/freq for categorical ones — which at least keeps the two vocabularies from being conflated. But it still doesn't know that a numeric-looking ID column belongs in the categorical bucket; that reclassification, via \`.astype()\`, is a decision only the analyst can make.`,
          he: `הוספת \`include='all'\` גורמת ל-pandas להציג את שתי קבוצות המדדים זו לצד זו — count/mean/std לעמודות כמותיות, ו-unique/top/freq לקטגוריאליות — מה שלפחות שומר על שני אוצרות המילים מלהתערבב. אבל היא עדיין לא יודעת שעמודת ID שנראית מספרית שייכת לדלי הקטגוריאלי; הסיווג המחדש הזה, דרך \`.astype()\`, הוא החלטה שרק האנליסטית יכולה לקבל.`,
        },
      },
    ],
    principle: {
      en: `A computed statistic and a meaningful statistic are not the same claim — pandas only guarantees the first one.`,
      he: `סטטיסטי שחושב וסטטיסטי שיש לו משמעות הן לא אותה טענה — pandas מבטיחה רק את הראשונה.`,
    },
  },
  {
    number: '07',
    title: { en: `From DataFrame to Live Dashboard`, he: `מ-DataFrame לדשבורד חי` },
    subtitle: {
      en: `Folder, data file, agent-built Streamlit app, GitHub push, then a live URL — the full ship sequence, demonstrated once`,
      he: `תיקייה, קובץ נתונים, אפליקציית Streamlit שנבנתה בידי סוכן, push ל-GitHub, ואז כתובת חיה — רצף השילוח המלא, מודגם פעם אחת`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: create a project folder and place the data file directly inside it. Two: ask an agent to build a Streamlit dashboard against that file — KPIs, filters, and charts, described in plain language rather than planned out cell by cell. Three: run it locally to confirm it works. Four: push the project to GitHub. Five: connect share.streamlit.io to that repository and deploy — the platform reads the file straight from GitHub rather than storing any data of its own.`,
          he: `אחת: ליצור תיקיית פרויקט ולשים את קובץ הנתונים ישירות בתוכה. שתיים: לבקש מסוכן לבנות דשבורד Streamlit מול הקובץ הזה — KPI-ים, פילטרים, וגרפים, מתוארים בשפה פשוטה במקום מתוכננים תא-תא. שלוש: להריץ אותו מקומית כדי לאשר שהוא עובד. ארבע: לדחוף את הפרויקט ל-GitHub. חמש: לחבר את share.streamlit.io לריפוזיטורי הזה ולפרוס — הפלטפורמה קוראת את הקובץ ישר מ-GitHub במקום לאחסן נתונים משלה.`,
        },
      },
      {
        heading: { en: `What Broke When the Sequence Was Skipped`, he: `מה נשבר כשדילגו על הרצף` },
        body: {
          en: `Several students tried uploading files to Streamlit manually through the browser instead of pushing through GitHub, and hit missing-package errors and unrecognized files. Dr. Zuari's fix each time was the same: let the agent handle the GitHub connection directly rather than doing it by hand, since in real deployments this handoff is automated, not manual.`,
          he: `כמה סטודנטים ניסו להעלות קבצים ל-Streamlit ידנית דרך הדפדפן במקום לדחוף דרך GitHub, ונתקלו בשגיאות חבילה חסרה וקבצים לא מזוהים. התיקון של ד״ר זוארי בכל פעם היה אותו דבר: לתת לסוכן לטפל בחיבור ל-GitHub ישירות במקום לעשות את זה ידנית, כי בפריסות אמיתיות המסירה הזו אוטומטית, לא ידנית.`,
        },
      },
    ],
    principle: {
      en: `A dashboard isn't finished when it runs locally — it's finished when someone else can open a URL and see it without your machine involved at all.`,
      he: `דשבורד לא גמור כשהוא רץ מקומית — הוא גמור כשמישהי אחרת יכולה לפתוח כתובת ולראות אותו בלי שהמחשב שלך מעורב בכלל.`,
    },
  },
  {
    number: '08',
    title: { en: `Delegate the Chart Code, Not the Choice of What Matters`, he: `להאציל את קוד הגרף, לא את הבחירה מה חשוב` },
    subtitle: {
      en: `An agent can generate any KPI you name — deciding which KPI is worth naming stays a human, business-specific call`,
      he: `סוכן יכול לייצר כל KPI שתכני, אבל להחליט איזה KPI שווה לכנות נשאר קריאה אנושית, ספציפית לעסק`,
    },
    sections: [
      {
        heading: { en: `What the Agent Handled Well`, he: `מה הסוכן טיפל בו טוב` },
        body: {
          en: `Describing the dashboard in plain language — filters, a correlation view, sortable columns — produced working Streamlit code fast, including the boilerplate for reading the CSV, building charts, and wiring up interactivity. This is exactly the kind of mechanical, well-specified work Dr. Zuari had the agent take on directly.`,
          he: `תיאור הדשבורד בשפה פשוטה — פילטרים, תצוגת קורלציה, עמודות ניתנות למיון — ייצר קוד Streamlit עובד מהר, כולל הבויילרפלייט לקריאת ה-CSV, בניית גרפים, וחיבור האינטראקטיביות. זה בדיוק הסוג של עבודה מכנית וממופרטת היטב שד״ר זוארי נתן לסוכן לקחת ישירות.`,
        },
      },
      {
        heading: { en: `Where Dr. Zuari Drew the Line`, he: `איפה ד״ר זוארי סימן את הקו` },
        body: {
          en: `A student asked whether the agent could simply be told "build me a KPI." Dr. Zuari's answer: that instruction is too vague to be useful, because the agent has no idea what matters to this business — different companies care about entirely different numbers, and choosing which metric represents "doing well" is explicitly a judgment "we don't hand off to the chat."`,
          he: `סטודנטית שאלה אם אפשר פשוט לומר לסוכן "תבנה לי KPI". התשובה של ד״ר זוארי: ההוראה הזו מעורפלת מדי מכדי להיות שימושית, כי לסוכן אין מושג מה חשוב לעסק הזה — חברות שונות אכפת להן ממספרים שונים לגמרי, ובחירת המדד שמייצג "מצב טוב" היא במפורש שיקול דעת "שאנחנו לא מוסרים לצ׳אט".`,
        },
      },
    ],
    principle: {
      en: `A well-specified chart request gets you working code fast — an underspecified one just moves the judgment call somewhere you can't see it.`,
      he: `בקשת גרף ממופרטת היטב מביאה קוד עובד מהר — אחת לא ממופרטת פשוט מזיזה את שיקול הדעת למקום שלא רואים אותו.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Lists Can't Do Vectorized Math`, he: `למה רשימות לא יכולות לעשות חשבון וקטורי` },
    subtitle: {
      en: `A NumPy array is typed, contiguous memory built for elementwise operations — a list was never designed for that job`,
      he: `מערך NumPy הוא זיכרון עם טיפוס אחיד ורציף, בנוי לפעולות איבר-איבר — רשימה מעולם לא תוכננה לעבודה הזו`,
    },
    sections: [
      {
        heading: { en: `The Demo That Broke Intuition`, he: `ההדגמה ששברה אינטואיציה` },
        body: {
          en: `\`[1, 5, 7, 9] + 2\` doesn't add two to every element — it either errors or produces something unrelated to what a student expects, because \`+\` on a list means concatenation, not arithmetic. Converting that same list into a NumPy array with \`np.array([...])\` and adding two works exactly as expected, elementwise, instantly.`,
          he: `\`[1, 5, 7, 9] + 2\` לא מוסיפה שתיים לכל איבר — היא או מפילה שגיאה או מייצרת משהו לא קשור למה שסטודנטית מצפה, כי \`+\` על רשימה אומר שרשור, לא חשבון. המרת אותה רשימה למערך NumPy עם \`np.array([...])\` והוספת שתיים עובדת בדיוק כמצופה, איבר-איבר, מיידית.`,
        },
      },
      {
        heading: { en: `Why the Difference Exists`, he: `למה ההבדל קיים` },
        body: {
          en: `A Python list is a general-purpose container — it can hold mixed types, and its \`+\` operator was defined for joining sequences together. A NumPy array is a specialized structure built specifically to hold one fixed type in contiguous memory, which is exactly what makes elementwise operations both meaningful and fast. Pandas' Series is built directly on top of this array, which is why a Series inherits the same vectorized behavior — and why, Dr. Zuari noted, most modern models are built on this package somewhere behind the scenes.`,
          he: `רשימת פייתון היא מיכל כללי — היא יכולה להחזיק טיפוסים מעורבים, והאופרטור \`+\` שלה הוגדר לחיבור רצפים יחד. מערך NumPy הוא מבנה מתמחה שנבנה ספציפית להחזיק טיפוס קבוע אחד בזיכרון רציף, מה שבדיוק הופך פעולות איבר-איבר גם משמעותיות וגם מהירות. ה-Series של pandas בנוי ישירות על גבי המערך הזה, ולכן Series יורש את אותה התנהגות וקטורית — ולמה, ד״ר זוארי ציין, רוב המודלים המודרניים בנויים על החבילה הזו איפשהו מאחורי הקלעים.`,
        },
      },
    ],
    principle: {
      en: `A list and an array look similar on the surface but are built for opposite jobs — one for holding anything, one for computing on everything at once.`,
      he: `רשימה ומערך נראים דומים על פני השטח אבל בנויים לעבודות הפוכות — אחד להחזיק כל דבר, אחד לחשב על הכול בבת אחת.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic pandas trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על pandas`,
    },
    sections: [
      {
        heading: { en: `On Vectorization`, he: `על וקטוריזציה` },
        body: {
          en: `Why does \`[1, 2, 3] + 2\` fail to add two to each element, while \`pd.Series([1, 2, 3]) + 2\` works exactly as expected? Answer: a plain list is a general-purpose container whose \`+\` operator means concatenation, not arithmetic; a Series is built on top of NumPy's array, a structure specifically designed to hold one fixed type in contiguous memory so elementwise operations are both meaningful and fast.`,
          he: `למה \`[1, 2, 3] + 2\` נכשלת בלהוסיף שתיים לכל איבר, בעוד ש-\`pd.Series([1, 2, 3]) + 2\` עובדת בדיוק כמצופה? תשובה: רשימה רגילה היא מיכל כללי שהאופרטור \`+\` שלו אומר שרשור, לא חשבון; Series בנוי על גבי המערך של NumPy, מבנה שמתוכנן ספציפית להחזיק טיפוס קבוע אחד בזיכרון רציף כך שפעולות איבר-איבר הן גם משמעותיות וגם מהירות.`,
        },
      },
      {
        heading: { en: `On describe()`, he: `על describe()` },
        body: {
          en: `Calling \`.describe()\` on a table produces a mean and standard deviation for a column of unique ID numbers. Is this result useful, and why did pandas compute it anyway? Answer: it's not useful — averaging an identifier is meaningless — but pandas has no concept of Session 13's quantitative-versus-categorical distinction; it saw digits and computed blindly, exactly as instructed. Recognizing and reclassifying that column is the analyst's job, not the library's.`,
          he: `קריאה ל-\`.describe()\` על טבלה מייצרת ממוצע וסטיית תקן לעמודת מספרי ID ייחודיים. האם התוצאה שימושית, ולמה pandas חישבה אותה בכל זאת? תשובה: היא לא שימושית — חישוב ממוצע של מזהה חסר משמעות — אבל ל-pandas אין מושג של ההבחנה כמותי-מול-קטגוריאלי ממפגש 13; היא ראתה ספרות וחישבה בעיוורון, בדיוק כפי שהתבקשה. לזהות ולסווג מחדש את העמודה הזו זו העבודה של האנליסטית, לא של הספרייה.`,
        },
      },
      {
        heading: { en: `On .loc vs. .iloc`, he: `על .loc מול .iloc` },
        body: {
          en: `\`df.loc['a':'c']\` returns rows through label 'c' inclusive, while \`df.iloc[0:3]\` excludes the row at position 3, following the exclusive-endpoint rule used everywhere else in Python. Why does .loc break that pattern? Answer: .loc is label-based, and label-based slicing follows a different convention on purpose — it includes both named endpoints because labels aren't sequential positions, while .iloc is position-based and stays consistent with every other slice taught in the course.`,
          he: `\`df.loc['a':'c']\` מחזירה שורות עד לתווית 'c' כולל, בעוד \`df.iloc[0:3]\` לא כוללת את השורה במיקום 3, בעקבות כלל נקודת-הסיום-לא-כלולה שנמצא בכל מקום אחר בפייתון. למה .loc שוברת את הדפוס הזה? תשובה: .loc מבוססת תווית, וחיתוך מבוסס-תווית עוקב אחרי מוסכמה שונה בכוונה — הוא כולל את שני התוויות בשם כי תוויות הן לא מיקומים סדרתיים, בעוד .iloc מבוססת מיקום ונשארת עקבית עם כל חיתוך אחר שנלמד בקורס.`,
        },
      },
      {
        heading: { en: `On the String Accessor`, he: `על ה-accessor של מחרוזות` },
        body: {
          en: `Calling \`.replace('$', '')\` directly on a price column raises an error, but \`series.str.replace('$', '')\` works. Why is the extra \`.str\` required? Answer: a pandas Series is its own object type, not a raw string — string-specific methods have to be reached through the dedicated \`.str\` accessor, the same "go through the recommended interface" pattern behind why \`.loc\`/\`.iloc\` are preferred over raw bracket indexing.`,
          he: `קריאה ל-\`.replace('$', '')\` ישירות על עמודת מחיר מעלה שגיאה, אבל \`series.str.replace('$', '')\` עובדת. למה ה-\`.str\` הנוסף נדרש? תשובה: Series של pandas הוא טיפוס אובייקט משלו, לא מחרוזת גולמית — מתודות ספציפיות למחרוזת חייבות להגיע דרך ה-accessor הייעודי של \`.str\`, אותו דפוס "לעבור דרך הממשק המומלץ" שעומד מאחורי למה \`.loc\`/\`.iloc\` מועדפים על פני אינדוקס גולמי בסוגריים.`,
        },
      },
    ],
    principle: {
      en: `A memorized method call answers "what to type." These questions only answer to "why the object was built to require it."`,
      he: `קריאת מתודה שמושננת עונה על "מה להקליד". השאלות האלה עונות רק ל"למה האובייקט נבנה כך שידרוש את זה".`,
    },
  },
];
