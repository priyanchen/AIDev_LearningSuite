import type { CardContent } from './types';

// Session 12 · Python (Module Session 9, final) · 09.08.2026
// Dr. Zuari's closing Python session: modules, packages, pip, and virtual environments.
// Cards authored from transcript analysis. Original teaching material.

export const session12Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — the last Python session, spent on how files talk to each other`,
      he: `מפתח של אחד-עשר כרטיסים — המפגש האחרון בפייתון, מוקדש לאיך שקבצים מדברים אחד עם השני`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The final session of the Python module, and Dr. Zuari named it directly as one of the heaviest. Three things stack on top of each other: importing functions between your own scripts, installing packages other people wrote, and isolating each project in its own virtual environment so versions never collide. A live OpenAI API demo ties all three together — and exposes a real security mistake along the way.`,
          he: `המפגש האחרון של מודול הפייתון, וד״ר זוארי כינה אותו ישירות כאחד הכבדים. שלושה דברים נערמים אחד על השני: ייבוא פונקציות בין הסקריפטים שלך עצמך, התקנת חבילות שאנשים אחרים כתבו, ובידוד כל פרויקט בסביבה וירטואלית משלו כדי שגרסאות לעולם לא יתנגשו. הדגמת API חיה של OpenAI קושרת את שלושתם יחד — וחושפת טעות אבטחה אמיתית בדרך.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the distinction Dr. Zuari repeated more than any other this session — read it first. Card 02 is the venv setup sequence in the exact order it has to happen. Card 09 explains the "phantom print" that confused the room.`,
          he: `כרטיס 01 הוא ההבחנה שד״ר זוארי חזר עליה יותר מכל אחרת במפגש הזה — כדאי לקרוא אותו קודם. כרטיס 02 הוא רצף הקמת ה-venv בסדר המדויק שבו הוא חייב לקרות. כרטיס 09 מסביר את "ההדפסה הרפאית" שבלבלה את הכיתה.`,
        },
      },
    ],
    principle: {
      en: `Everything this session teaches is really one skill: knowing exactly where a piece of code lives before you ask Python to reach for it.`,
      he: `כל מה שהמפגש הזה מלמד הוא בעצם כישור אחד: לדעת בדיוק איפה חתיכת קוד גרה לפני שמבקשים מפייתון להושיט יד אליה.`,
    },
  },
  {
    number: '01',
    title: { en: `Import ≠ Use`, he: `ייבוא ≠ שימוש` },
    subtitle: {
      en: `Bringing a function into scope and actually calling it are two separate, unrelated steps`,
      he: `להביא פונקציה לתוך ההיקף ובאמת לקרוא לה הם שני צעדים נפרדים, לא קשורים`,
    },
    sections: [
      {
        heading: { en: `The Demonstration`, he: `ההדגמה` },
        body: {
          en: `Dr. Zuari wrote \`from calc import total_calc\` in a fresh script and ran it. The line turned yellow — Python's signal that it actually did something — and a student asked why nothing had changed. His answer: the function was brought in, but never called. Importing it made it available; it did nothing on its own, because nothing asked it to.`,
          he: `ד״ר זוארי כתב \`from calc import total_calc\` בסקריפט חדש והריץ אותו. השורה הפכה לצהובה — הסימן של פייתון שמשהו באמת קרה — וסטודנטית שאלה למה שום דבר לא השתנה. התשובה שלו: הפונקציה הובאה, אבל מעולם לא נקראה. ייבוא שלה הפך אותה לזמינה; היא לא עשתה כלום בעצמה, כי שום דבר לא ביקש ממנה.`,
        },
      },
      {
        heading: { en: `Why the Distinction Keeps Coming Back`, he: `למה ההבחנה חוזרת` },
        body: {
          en: `Several students conflated the two all session — bringing a function in and immediately assuming it had run. Dr. Zuari's fix was to name the two steps out loud every time: first the import line at the top, doing nothing but making the tool available; then, separately, a real call with real arguments, which is the only line that produces a result.`,
          he: `כמה סטודנטים בלבלו בין השניים לאורך כל המפגש — הבאת פונקציה והנחה מיידית שהיא רצה. התיקון של ד״ר זוארי היה לכנות את שני הצעדים בקול בכל פעם: קודם שורת הייבוא למעלה, שלא עושה כלום חוץ מלהפוך את הכלי לזמין; ואז, בנפרד, קריאה אמיתית עם ארגומנטים אמיתיים, שהיא השורה היחידה שמייצרת תוצאה.`,
        },
      },
    ],
    principle: {
      en: `An import statement is a promise the code could run — never proof that it did.`,
      he: `שורת ייבוא היא הבטחה שהקוד יכול לרוץ — לעולם לא הוכחה שהוא רץ.`,
    },
  },
  {
    number: '02',
    title: { en: `Build a Virtual Environment`, he: `בונות סביבה וירטואלית` },
    subtitle: {
      en: `The exact three-step order — environment, then packages, then run — that Dr. Zuari repeated for every confused student`,
      he: `הסדר המדויק של שלושת השלבים — סביבה, אחר כך חבילות, אחר כך הרצה — שד״ר זוארי חזר עליו לכל סטודנט מבולבל`,
    },
    sections: [
      {
        heading: { en: `Step One: Create It`, he: `שלב אחת: יוצרות אותה` },
        body: {
          en: `From the command palette, run "Python: Create Environment," choose venv, and pick a Python version. This builds a \`.venv\` folder inside the project — a completely fresh, isolated Python install with none of the packages already on the main machine.`,
          he: `מפלטת הפקודות, מריצות "Python: Create Environment", בוחרות venv, ובוחרות גרסת פייתון. זה בונה תיקיית \`.venv\` בתוך הפרויקט — התקנת פייתון טרייה לגמרי ומבודדת, בלי אף חבילה שכבר קיימת במכונה הראשית.`,
        },
      },
      {
        heading: { en: `Step Two: Confirm, Then Install`, he: `שלב שתיים: לאשר, ואז להתקין` },
        body: {
          en: `Before installing anything, check the bottom status bar for the venv's dotted path — that is the only reliable confirmation the environment is active. Close and reopen the terminal if needed; it should auto-activate. Only then run \`pip install\` — every package installed in this state lands inside \`.venv\`, not on the main Python.`,
          he: `לפני שמתקינות כל דבר, בודקות את שורת הסטטוס התחתונה לנתיב המנוקד של ה-venv — זה האישור האמין היחיד שהסביבה פעילה. סוגרות ופותחות מחדש את הטרמינל אם צריך; היא אמורה להתפעל אוטומטית. רק אז מריצות \`pip install\` — כל חבילה שמותקנת במצב הזה נוחתת בתוך \`.venv\`, לא על הפייתון הראשי.`,
        },
      },
      {
        heading: { en: `Step Three: Run Inside It`, he: `שלב שלוש: מריצות בתוכה` },
        body: {
          en: `Running the script only works if it runs on the venv's interpreter, not the general one. Dr. Zuari stressed this as the step most people skip: the same file can be run from several places, and only one of them has the package you just installed.`,
          he: `הרצת הסקריפט עובדת רק אם היא רצה על המתורגמן של ה-venv, לא על הכללי. ד״ר זוארי הדגיש את זה כשלב שהכי הרבה אנשים מדלגים עליו: אותו קובץ אפשר להריץ ממקומות שונים, ורק אחד מהם מחזיק את החבילה שהתקנת עכשיו.`,
        },
      },
    ],
    principle: {
      en: `A virtual environment only protects you if all three steps happen in that exact order — skip step three and the isolation was pointless.`,
      he: `סביבה וירטואלית מגנה עלייך רק אם שלושת השלבים קורים בדיוק בסדר הזה — לדלג על שלב שלוש והבידוד היה חסר טעם.`,
    },
    guideUrl: '/install#venv',
  },
  {
    number: '03',
    title: { en: `Two Syntaxes for Reaching Into Another File`, he: `שני תחבירים להושיט יד לקובץ אחר` },
    subtitle: {
      en: `import the whole module and prefix everything, or pull specific names straight into scope`,
      he: `לייבא את כל המודול ולתת קידומת לכל דבר, או למשוך שמות ספציפיים ישר לתוך ההיקף`,
    },
    sections: [
      {
        heading: { en: `Whole-Module Import`, he: `ייבוא מודול שלם` },
        body: {
          en: `\`import calc\` brings in everything defined in \`calc.py\`, but every name from it must be reached through the module: \`calc.total_calc(...)\`. This is the form Dr. Zuari reached for with libraries carrying dozens of functions — importing them one by one "with tweezers" made no sense, so the whole file comes in at once, kept safely namespaced behind its own prefix.`,
          he: `\`import calc\` מביא הכול שמוגדר ב-\`calc.py\`, אבל כל שם ממנו חייב להיות מושג דרך המודול: \`calc.total_calc(...)\`. זו הצורה שד״ר זוארי הושיט אליה עם ספריות שנושאות עשרות פונקציות — ייבוא אותן אחת-אחת "בפינצטה" לא היה הגיוני, אז כל הקובץ נכנס בבת אחת, שמור בבטחה תחת מרחב שמות משלו.`,
        },
      },
      {
        heading: { en: `Named Import`, he: `ייבוא שמי` },
        body: {
          en: `\`from calc import total_calc\` pulls only that one name directly into scope — no prefix, called as \`total_calc(...)\`. Right for reaching into your own small scripts where two or three functions are needed by name, not the whole file.`,
          he: `\`from calc import total_calc\` מושכת רק את השם הזה ישירות לתוך ההיקף — בלי קידומת, נקראת כ-\`total_calc(...)\`. נכון להושטת יד לסקריפטים הקטנים שלך עצמך שבהם שתיים-שלוש פונקציות נחוצות בשם, לא כל הקובץ.`,
        },
      },
      {
        heading: { en: `Aliasing Shortens Either Form`, he: `כינוי מקצר כל אחת מהצורות` },
        body: {
          en: `\`import numpy as np\` still requires the module prefix on every call, but shortens it from a long name typed dozens of times to two letters. The convention exists purely for typing volume — it changes nothing about how the import behaves.`,
          he: `\`import numpy as np\` עדיין דורש קידומת מודול על כל קריאה, אבל מקצר אותה משם ארוך שמוקלד עשרות פעמים לשתי אותיות. המוסכמה קיימת אך ורק לנפח ההקלדה — היא לא משנה כלום באיך שהייבוא מתנהג.`,
        },
      },
    ],
    principle: {
      en: `Choose the syntax by how many names you actually need, not by habit — one or two names, import them by name; a whole library, import the module and keep the prefix.`,
      he: `בוחרות את התחביר לפי כמה שמות באמת צריך, לא מתוך הרגל — שם אחד או שניים, מייבאים אותם בשם; ספרייה שלמה, מייבאים את המודול ושומרים על הקידומת.`,
    },
  },
  {
    number: '04',
    title: { en: `Read the Bottom Status Bar`, he: `קוראות את שורת הסטטוס התחתונה` },
    subtitle: {
      en: `The single line that tells you which Python is about to run — check it before anything else`,
      he: `השורה היחידה שמספרת איזה פייתון עומד לרוץ — בודקות אותה לפני כל דבר אחר`,
    },
    sections: [
      {
        heading: { en: `What It Actually Shows`, he: `מה היא בעצם מראה` },
        body: {
          en: `Every Python file, when open, shows the active interpreter in the bottom bar. Inside a virtual environment, this reads as a path ending in \`.venv\`. Outside one, it shows a bare version number pointing at the machine's general Python. This single glance is what separates "installed and about to work" from "installed somewhere unrelated."`,
          he: `כל קובץ פייתון, כשהוא פתוח, מראה את המתורגמן הפעיל בשורה התחתונה. בתוך סביבה וירטואלית, זה נקרא כנתיב שמסתיים ב-\`.venv\`. מחוץ לה, זה מראה מספר גרסה חשוף שמצביע על הפייתון הכללי של המכונה. המבט הבודד הזה הוא מה שמפריד בין "מותקן ועומד לעבוד" ל"מותקן איפשהו לא קשור".`,
        },
      },
      {
        heading: { en: `Why Multiple Pythons Made This Necessary`, he: `למה כמה פייתונים הפכו את זה להכרחי` },
        body: {
          en: `Dr. Zuari pointed out that most machines in the room had several Python installations stacked up from past setup attempts. \`pip install\` succeeding proves nothing about which one received the package — the status bar is the only place that answers that question before the error does.`,
          he: `ד״ר זוארי ציין שלרוב המכונות בכיתה היו כמה התקנות פייתון שנערמו מניסיונות הקמה קודמים. הצלחת \`pip install\` לא מוכיחה כלום לגבי מי קיבל את החבילה — שורת הסטטוס היא המקום היחיד שעונה על השאלה הזו לפני שהשגיאה עונה.`,
        },
      },
    ],
    principle: {
      en: `A successful pip install and a successful import are two different claims — the status bar is what lets you verify both point at the same Python.`,
      he: `pip install מוצלח וייבוא מוצלח הם שתי טענות שונות — שורת הסטטוס היא מה שמאפשר לאמת ששתיהן מצביעות על אותו פייתון.`,
    },
  },
  {
    number: '05',
    title: { en: `Whole Module or Named Import — Which One`, he: `מודול שלם או ייבוא שמי — איזה` },
    subtitle: {
      en: `A decision that turns on how many names you need and how much namespace safety you want`,
      he: `החלטה שנשענת על כמה שמות צריך וכמה בטיחות מרחב-שמות רוצים`,
    },
    sections: [
      {
        heading: { en: `Few Names, Small Files → Named Import`, he: `מעט שמות, קבצים קטנים ← ייבוא שמי` },
        body: {
          en: `Reaching into your own two-function script is exactly the case for \`from calc import total_calc, average\` — no ambiguity risk, and no reason to type a module prefix on every call for something this contained.`,
          he: `הושטת יד לסקריפט הדו-פונקציה שלך עצמך היא בדיוק המקרה עבור \`from calc import total_calc, average\` — אין סיכון עמימות, ואין סיבה להקליד קידומת מודול בכל קריאה למשהו מוכל כל כך.`,
        },
      },
      {
        heading: { en: `Many Names, Third-Party Libraries → Whole-Module Import`, he: `הרבה שמות, ספריות צד שלישי ← ייבוא מודול שלם` },
        body: {
          en: `A library like pandas defines far too many functions to name individually, and some of those names could collide with names already used elsewhere in the script. \`import pandas as pd\` keeps everything behind a short, unambiguous prefix — a decision made once at the import line that prevents naming conflicts for the entire file.`,
          he: `ספרייה כמו pandas מגדירה יותר מדי שמות מכדי לכנות אותם אחד-אחד, וכמה מהשמות האלה יכולים להתנגש בשמות שכבר בשימוש במקום אחר בסקריפט. \`import pandas as pd\` שומרת הכול מאחורי קידומת קצרה וחד-משמעית — החלטה שנעשית פעם אחת בשורת הייבוא ומונעת התנגשויות שמות לכל הקובץ.`,
        },
      },
    ],
    principle: {
      en: `The size of what you're importing from should decide the syntax, not which one is shorter to type in the moment.`,
      he: `הגודל של ממה שמייבאים צריך להחליט על התחביר, לא איזה מהם קצר יותר להקליד ברגע הזה.`,
    },
  },
  {
    number: '06',
    title: { en: `Two Live Failures`, he: `שני כשלים חיים` },
    subtitle: {
      en: `A key left in plain sight in the code, and a package that installed somewhere the script couldn't see`,
      he: `מפתח שהושאר גלוי בקוד, וחבילה שהתקינה במקום שהסקריפט לא ראה`,
    },
    sections: [
      {
        heading: { en: `A Hardcoded API Key Is Not a Small Mistake`, he: `מפתח API קשיח הוא לא טעות קטנה` },
        body: {
          en: `Dr. Zuari pasted his OpenAI key directly into the script to get the demo working, then stopped and flagged it explicitly: this file must never be shared as-is. Anyone who receives it can run requests against his billed account. It works, and it's exactly the shape of a costly leak.`,
          he: `ד״ר זוארי הדביק את מפתח ה-OpenAI שלו ישירות לתוך הסקריפט כדי לגרום להדגמה לעבוד, ואז עצר וסימן את זה במפורש: הקובץ הזה אסור לעולם לשתף כמות שהוא. כל מי שמקבל אותו יכול להריץ בקשות מול החשבון המחויב שלו. זה עובד, וזו בדיוק הצורה של דליפה יקרה.`,
        },
      },
      {
        heading: { en: `ModuleNotFoundError After a Successful Install`, he: `ModuleNotFoundError אחרי התקנה מוצלחת` },
        body: {
          en: `\`pip install openai\` ran cleanly, but the script still raised \`ModuleNotFoundError: No module named 'openai'\`. The pip run and the script run had used two different Python installations — the package was real, just installed somewhere the script never looked. Closing and reopening the terminal, or explicitly checking the interpreter path, is what surfaces this mismatch.`,
          he: `\`pip install openai\` רץ בנקיות, אבל הסקריפט עדיין העלה \`ModuleNotFoundError: No module named 'openai'\`. הריצה של pip והריצה של הסקריפט השתמשו בשתי התקנות פייתון שונות — החבילה הייתה אמיתית, פשוט מותקנת במקום שהסקריפט אף פעם לא הביט בו. סגירה ופתיחה מחדש של הטרמינל, או בדיקה מפורשת של נתיב המתורגמן, זה מה שחושף את חוסר ההתאמה הזה.`,
        },
      },
    ],
    principle: {
      en: `"It's installed" and "it's visible to this script" are two different claims — confusing them is where both of this session's failures came from.`,
      he: `"זה מותקן" ו"זה נראה לסקריפט הזה" הן שתי טענות שונות — הבלבול ביניהן הוא מאיפה הגיעו שני הכשלים של המפגש הזה.`,
    },
  },
  {
    number: '07',
    title: { en: `Debug a ModuleNotFoundError`, he: `אתרו באג ModuleNotFoundError` },
    subtitle: {
      en: `The exact recovery sequence Dr. Zuari walked two separate students through live`,
      he: `רצף ההתאוששות המדויק שד״ר זוארי הוביל דרכו שתי סטודנטיות בנפרד בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: check the bottom status bar — is a \`.venv\` path showing, or the bare general Python? Two: if no venv shows, close the terminal completely and reopen it; it should auto-activate. Three: reinstall the package specifically while that venv path is confirmed active — the earlier install may have landed on the wrong interpreter. Four: rerun the script, from the same terminal, and only then trust the result.`,
          he: `אחת: בודקים את שורת הסטטוס התחתונה — מוצג נתיב \`.venv\`, או הפייתון הכללי החשוף? שתיים: אם לא מוצג venv, סוגרים את הטרמינל לגמרי ופותחים אותו מחדש; הוא אמור להתפעל אוטומטית. שלוש: מתקינים מחדש את החבילה ספציפית בזמן שנתיב ה-venv הזה מאושר כפעיל — ההתקנה הקודמת אולי נחתה על המתורגמן הלא נכון. ארבע: מריצים מחדש את הסקריפט, מאותו טרמינל, ורק אז בוטחים בתוצאה.`,
        },
      },
      {
        heading: { en: `The Trap in the Middle`, he: `המלכודת באמצע` },
        body: {
          en: `A student assumed the venv was active because she had created one earlier in the session — but a fresh terminal doesn't remember that. Re-verifying at the status bar, every single time, beats trusting memory of a step performed minutes ago.`,
          he: `סטודנטית הניחה שה-venv פעיל כי היא יצרה אחד קודם במפגש — אבל טרמינל טרי לא זוכר את זה. אימות מחדש בשורת הסטטוס, בכל פעם, מנצח לסמוך על זיכרון של שלב שבוצע לפני כמה דקות.`,
        },
      },
    ],
    principle: {
      en: `A ModuleNotFoundError after a successful install is never a package problem — it's always an environment-identity problem.`,
      he: `ModuleNotFoundError אחרי התקנה מוצלחת הוא לעולם לא בעיית חבילה — זו תמיד בעיית זהות-סביבה.`,
    },
  },
  {
    number: '08',
    title: { en: `Ask the LLM What's Inside, Not to Guess Blindly`, he: `שאלו את ה-LLM מה יש בפנים, לא לנחש בעיוורון` },
    subtitle: {
      en: `A student's honest objection — "I feel like a parrot" — and the difference between copying and understanding`,
      he: `התנגדות כנה של סטודנטית — "אני מרגישה כמו תוכי" — וההבדל בין העתקה להבנה`,
    },
    sections: [
      {
        heading: { en: `What LLMs Are Good For Here`, he: `למה LLM טוב פה` },
        body: {
          en: `Dr. Zuari offered two honest ways to learn what functions a package holds: open its documentation, or simply ask an AI assistant. Both are legitimate — nobody memorizes every function in pandas, and asking is faster than reading source. He used exactly this to write the OpenAI API call in the demo.`,
          he: `ד״ר זוארי הציע שתי דרכים כנות ללמוד אילו פונקציות חבילה מחזיקה: לפתוח את התיעוד שלה, או פשוט לשאול עוזר AI. שתיהן לגיטימיות — אף אחד לא משנן כל פונקציה ב-pandas, ולשאול מהיר יותר מלקרוא קוד מקור. הוא השתמש בדיוק בזה כדי לכתוב את קריאת ה-API של OpenAI בהדגמה.`,
        },
      },
      {
        heading: { en: `The Line That Cannot Be Skipped`, he: `הקו שאי אפשר לדלג עליו` },
        body: {
          en: `A student pushed back mid-session: she didn't want to just copy-paste terminal commands, she wanted the concept behind why each step was needed. Dr. Zuari's response validated this directly — using an LLM to find what a package offers is fine; using it as a replacement for understanding why an install, an environment, and a run happen in that order is not the same thing.`,
          he: `סטודנטית דחפה נגד באמצע המפגש: היא לא רצתה רק להעתיק-להדביק פקודות טרמינל, היא רצתה את המושג שמאחורי למה כל שלב נחוץ. התגובה של ד״ר זוארי אישרה את זה ישירות — להשתמש ב-LLM כדי למצוא מה חבילה מציעה זה בסדר; להשתמש בו כתחליף להבנת למה התקנה, סביבה, והרצה קורים בסדר הזה זה לא אותו דבר.`,
        },
      },
    ],
    principle: {
      en: `An LLM can save you a documentation search — it cannot save you from needing to know why the three-step order exists.`,
      he: `LLM יכול לחסוך לכן חיפוש בתיעוד — הוא לא יכול לחסוך לכן את הצורך לדעת למה סדר שלושת השלבים קיים.`,
    },
  },
  {
    number: '09',
    title: { en: `The Phantom Print`, he: `ההדפסה הרפאית` },
    subtitle: {
      en: `Importing a script runs the whole file — every top-level line, including ones that were never meant to be reused`,
      he: `ייבוא סקריפט מריץ את כל הקובץ — כל שורה ברמה העליונה, כולל כאלה שמעולם לא היו אמורות לחזור על עצמן`,
    },
    sections: [
      {
        heading: { en: `The Moment It Broke Intuition`, he: `הרגע שבו זה שבר אינטואיציה` },
        body: {
          en: `Dr. Zuari added a stray \`print("Hi")\` to \`calc.py\`, outside any function, then imported just the two calculation functions from another file. "Hi" printed anyway — even though nobody had asked for it, and even though only two specific functions were named in the import line.`,
          he: `ד״ר זוארי הוסיף \`print("Hi")\` תועה ל-\`calc.py\`, מחוץ לכל פונקציה, ואז ייבא רק את שתי פונקציות החישוב מקובץ אחר. "Hi" הודפס בכל זאת — למרות שאף אחד לא ביקש את זה, ולמרות ששתי פונקציות ספציפיות בלבד כונו בשורת הייבוא.`,
        },
      },
      {
        heading: { en: `Why: Import Executes the File`, he: `למה: ייבוא מריץ את הקובץ` },
        body: {
          en: `An import doesn't selectively extract named pieces — it runs the entire target file top to bottom, then hands back whatever names were requested. Anything at the top level that isn't wrapped in a function — a stray print, a test call, a line meant only for running the file directly — runs too, as a side effect nobody asked for.`,
          he: `ייבוא לא מחלץ באופן סלקטיבי חלקים שמוכם — הוא מריץ את כל קובץ היעד מלמעלה למטה, ואז מחזיר איזה שמות שביקשו. כל דבר ברמה העליונה שלא עטוף בפונקציה — הדפסה תועה, קריאת בדיקה, שורה שמיועדת רק להרצת הקובץ ישירות — רץ גם הוא, כתופעת לוואי שאף אחד לא ביקש.`,
        },
      },
      {
        heading: { en: `The Fix: __name__ == "__main__"`, he: `התיקון: __name__ == "__main__"` },
        body: {
          en: `Wrapping test or run-only code in \`if __name__ == "__main__":\` creates a real line between "code meant to be reused elsewhere" and "code meant to run only when this file itself is executed directly." Python sets a hidden variable, \`__name__\`, that reads \`"__main__"\` only when the file is run directly — and something else, the module's own name, when it's imported. The guarded block runs in the first case and stays silent in the second.`,
          he: `עטיפת קוד בדיקה או קוד-להרצה-בלבד ב-\`if __name__ == "__main__":\` יוצרת קו אמיתי בין "קוד שמיועד לשימוש חוזר במקום אחר" ל"קוד שמיועד לרוץ רק כשהקובץ הזה עצמו מבוצע ישירות". פייתון מגדירה משתנה נסתר, \`__name__\`, שקורא \`"__main__"\` רק כשהקובץ רץ ישירות — ומשהו אחר, השם של המודול עצמו, כשהוא מיובא. הבלוק המשומר רץ במקרה הראשון ונשאר שקט בשני.`,
        },
      },
    ],
    principle: {
      en: `An import is never selective — it runs everything at the top level of a file. The __name__ guard is the only way to write code that behaves differently depending on how it was reached.`,
      he: `ייבוא לעולם לא סלקטיבי — הוא מריץ הכול ברמה העליונה של קובץ. שומר ה-__name__ הוא הדרך היחידה לכתוב קוד שמתנהג אחרת בהתאם לאיך שהגיעו אליו.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic Python trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על פייתון`,
    },
    sections: [
      {
        heading: { en: `On Import vs. Use`, he: `על ייבוא מול שימוש` },
        body: {
          en: `A script runs \`from calc import total_calc\` and nothing else, and nothing visible happens. Was the import a failure? Answer: no — an import statement only makes a function available; it never calls it. Nothing happening is exactly correct behavior, since the function was never actually invoked.`,
          he: `סקריפט מריץ \`from calc import total_calc\` ולא כלום אחר, ושום דבר גלוי לא קורה. האם הייבוא נכשל? תשובה: לא — שורת ייבוא רק הופכת פונקציה לזמינה; היא לעולם לא קוראת לה. שום דבר לא קורה זו התנהגות נכונה בדיוק, כי הפונקציה מעולם לא נקראה בפועל.`,
        },
      },
      {
        heading: { en: `On the Phantom Print`, he: `על ההדפסה הרפאית` },
        body: {
          en: `A file has a stray \`print("loaded")\` outside any function. Another script imports one specific function from it, and "loaded" prints anyway. Why? Answer: importing a file runs the entire file top to bottom, not just the named piece being extracted — any top-level code, including prints, executes as a side effect. Wrapping it in \`if __name__ == "__main__":\` would have prevented this.`,
          he: `לקובץ יש \`print("loaded")\` תועה מחוץ לכל פונקציה. סקריפט אחר מייבא פונקציה ספציפית אחת ממנו, ו-"loaded" מודפס בכל זאת. למה? תשובה: ייבוא קובץ מריץ את כל הקובץ מלמעלה למטה, לא רק את החלק שמכונה שמחולץ — כל קוד ברמה העליונה, כולל הדפסות, מתבצע כתופעת לוואי. עטיפה ב-\`if __name__ == "__main__":\` הייתה מונעת את זה.`,
        },
      },
      {
        heading: { en: `On ModuleNotFoundError`, he: `על ModuleNotFoundError` },
        body: {
          en: `\`pip install requests\` completes with no errors, but running the script still raises \`ModuleNotFoundError\`. What's the most likely cause, and what's the first thing to check? Answer: the install and the script ran on two different Python interpreters — most likely a virtual environment wasn't active during one of the two steps. Check the interpreter path in the bottom status bar first, before reinstalling anything.`,
          he: `\`pip install requests\` מסתיים בלי שגיאות, אבל הרצת הסקריפט עדיין מעלה \`ModuleNotFoundError\`. מה הסיבה הסבירה ביותר, ומה הדבר הראשון לבדוק? תשובה: ההתקנה והסקריפט רצו על שני מתורגמני פייתון שונים — הכי סביר שסביבה וירטואלית לא הייתה פעילה בזמן אחד משני השלבים. בודקים את נתיב המתורגמן בשורת הסטטוס התחתונה קודם, לפני שמתקינים מחדש כל דבר.`,
        },
      },
      {
        heading: { en: `On Virtual Environments`, he: `על סביבות וירטואליות` },
        body: {
          en: `Two separate projects both use pandas, but one needs an older version for code written a year ago and the other needs the newest release. Why does giving each project its own virtual environment solve this, when installing pandas once on the main Python cannot? Answer: a virtual environment is a fully isolated Python install per project — updating a package inside one has zero effect on any other environment. Installed once on the shared main Python, there is only one version available, and updating it for one project breaks any other project relying on the old behavior.`,
          he: `שני פרויקטים נפרדים משתמשים שניהם ב-pandas, אבל אחד צריך גרסה ישנה יותר לקוד שנכתב לפני שנה והשני צריך את הגרסה החדשה ביותר. למה לתת לכל פרויקט סביבה וירטואלית משלו פותר את זה, כשלהתקין pandas פעם אחת על הפייתון הראשי לא יכול? תשובה: סביבה וירטואלית היא התקנת פייתון מבודדת לגמרי לכל פרויקט — עדכון חבילה בתוך אחת אין לו שום השפעה על אף סביבה אחרת. מותקן פעם אחת על הפייתון הראשי המשותף, יש רק גרסה אחת זמינה, ועדכונה עבור פרויקט אחד שובר כל פרויקט אחר שנשען על ההתנהגות הישנה.`,
        },
      },
    ],
    principle: {
      en: `A memorized command answers "what to type." These questions only answer to "why it had to be typed in that order."`,
      he: `פקודה שמושננת עונה על "מה להקליד". השאלות האלה עונות רק ל"למה זה היה חייב להיות מוקלד בסדר הזה".`,
    },
  },
];
