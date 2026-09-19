import type { CardContent } from './types';

// Session 4 · Python (Module Session 1) · 08.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session04Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — objects revisited, four data structures, the course's first error, the first agent build`,
      he: `מפתח של אחד-עשר כרטיסים — אובייקטים בחזרה, ארבעה מבני נתונים, השגיאה הראשונה בקורס, ובניית הסוכן הראשונה`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `This session extends the object framing from Session 3 — attributes and methods — across four concrete data structures: strings revisited, lists, tuples, and dictionaries. It also contains the course's first live error, walked through line by line, and the first exercise where an AI agent writes working code instead of just answering a question.`,
          he: `המפגש הזה מרחיב את מסגור האובייקטים ממפגש 3 — תכונות ומתודות — לארבעה מבני נתונים קונקרטיים: מחרוזות בחזרה, רשימות, Tuples ומילונים. הוא כולל גם את השגיאה החיה הראשונה בקורס, שנקראת שורה אחר שורה, ואת התרגיל הראשון שבו סוכן AI כותב קוד עובד במקום רק לענות על שאלה.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the throughline — read it first. Card 06 covers a trap that appears twice in this session in two different disguises. Card 08 explains the editor's AI modes that the homework in Card 07 depends on.`,
          he: `כרטיס 01 הוא חוט השדרה — כדאי לקרוא אותו ראשון. כרטיס 06 מכסה מלכודת שמופיעה פעמיים במפגש הזה, בשני תחפושות שונות. כרטיס 08 מסביר את מצבי ה-AI של העורך שעליהם מבוסס שיעורי הבית בכרטיס 07.`,
        },
      },
    ],
    principle: {
      en: `One mental model, four containers — learn the touch once, reuse it everywhere.`,
      he: `מודל מנטלי אחד, ארבעה מכלים — לומדות את המגע פעם אחת, ומשתמשות בו בכל מקום.`,
    },
  },
  {
    number: '01',
    title: { en: `One Syntax, Every Object`, he: `תחביר אחד, כל אובייקט` },
    subtitle: {
      en: `The attribute-vs-method pattern from Session 3 turns out to be the entire language`,
      he: `ההבחנה בין תכונה למתודה ממפגש 3 מתגלה כשפה כולה`,
    },
    sections: [
      {
        heading: { en: `The Promise`, he: `ההבטחה` },
        body: {
          en: `Dr. Zuari stated it directly: everything learned about indexing, slicing, and dot-access will be completely identical across every object type still to come. This is not a simplification for beginners — it is a literal description of how Python is built.`,
          he: `ד״ר זוארי אמר את זה במפורש: כל מה שנלמד על אינדוקסים, פרוסות (slicing) וגישה בנקודה יהיה זהה לחלוטין בכל סוגי האובייקטים שעוד יבואו. זו לא הפשטה למתחילות — זו תיאור מדויק של איך פייתון בנויה.`,
        },
      },
      {
        heading: { en: `Proof by Repetition`, he: `הוכחה בחזרה` },
        body: {
          en: `Indexing and slicing were taught on strings, then reused without a single syntax change on lists and tuples. Method calls with dot-and-parentheses worked identically for a string's \`.upper()\`, a list's \`.append()\`, and a dictionary's \`.get()\`.`,
          he: `אינדוקסים ופרוסות נלמדו על מחרוזות, ואז חזרו על עצמם בלי שינוי תחבירי אחד ברשימות וב-Tuples. קריאות למתודות עם נקודה וסוגריים עבדו באותה צורה בדיוק עבור \`.upper()\` של מחרוזת, \`.append()\` של רשימה, ו-\`.get()\` של מילון.`,
        },
      },
      {
        heading: { en: `What Actually Changes`, he: `מה כן משתנה` },
        body: {
          en: `What differs between types isn't the syntax — it's two properties: whether order matters (position carries meaning) and whether the object is mutable (it can change after creation). Every card from here on is really about locating a new type on those two axes.`,
          he: `מה שכן משתנה בין הסוגים זה לא התחביר — אלא שתי תכונות: האם לסדר יש משמעות (למיקום יש ערך), והאם האובייקט ניתן לשינוי אחרי היצירה. כל כרטיס מכאן והלאה בעצם ממקם סוג חדש על שני הצירים האלה.`,
        },
      },
    ],
    principle: {
      en: `Don't learn four data structures — learn one grammar and four sets of properties.`,
      he: `אל תלמדי ארבעה מבני נתונים — למדי דקדוק אחד וארבע קבוצות של תכונות.`,
    },
  },
  {
    number: '02',
    title: { en: `Editor Continuity`, he: `רציפות בסביבת העבודה` },
    subtitle: {
      en: `Cursor vs. VS Code, folders vs. files, and why the fastest fix is choosing one tool and staying there`,
      he: `Cursor מול VS Code, תיקייה מול קובץ, ולמה התיקון המהיר ביותר הוא לבחור כלי אחד ולהישאר בו`,
    },
    sections: [
      {
        heading: { en: `Open the Folder, Not the File`, he: `פתחי תיקייה, לא קובץ` },
        body: {
          en: `The session's most recurring confusion: files "disappearing." Nothing was ever lost — students who opened a single file directly, instead of using Open Folder on the whole project directory, simply couldn't see sibling files because the editor was scoped to one file, not the project tree. The fix, every time, was the same: open the folder that contains everything, not a file inside it.`,
          he: `הבלבול החוזר ביותר במפגש: קבצים ש"נעלמו". שום דבר לא באמת אבד — סטודנטיות שפתחו קובץ בודד ישירות, במקום לעשות Open Folder על כל תיקיית הפרויקט, פשוט לא ראו קבצים אחרים כי העורך היה ממוקד לקובץ אחד ולא לעץ הפרויקט. התיקון, בכל פעם, היה זהה: לפתוח את התיקייה שמכילה הכול, לא קובץ שבתוכה.`,
        },
      },
      {
        heading: { en: `Pick One Editor`, he: `בחרי כלי אחד` },
        body: {
          en: `Students who split time between Cursor and VS Code hit friction each time: keyboard shortcuts differ silently by OS, saved notebook cells stopped appearing after switching tools, and interpreter selection had to be redone. Dr. Zuari's advice was explicit — pick one editor and stay in it for the course.`,
          he: `סטודנטיות שחילקו זמן בין Cursor ל-VS Code נתקלו בחיכוך בכל פעם: קיצורי מקלדת משתנים בשקט לפי מערכת ההפעלה, תאים שמורים במחברת הפסיקו להופיע אחרי מעבר בין כלים, ובחירת המפרש (interpreter) הייתה צריכה להיעשות מחדש. עצת ד״ר זוארי הייתה מפורשת — לבחור עורך אחד ולהישאר בו לאורך הקורס.`,
        },
      },
      {
        heading: { en: `The Notebook Interpreter Trap`, he: `מלכודת הבורר של המחברת` },
        body: {
          en: `Every fresh notebook needs Python 3 selected as its kernel via the popup in the top right — and this reset happens per notebook, not once per project. This is why code that ran five minutes ago in one tab throws an immediate error in a brand-new one.`,
          he: `כל מחברת חדשה צריכה שייבחר בה Python 3 כ-kernel דרך החלונית בפינה הימנית העליונה — וזה קורה מחדש לכל מחברת, לא פעם אחת לכל הפרויקט. זו הסיבה שקוד שרץ לפני חמש דקות בלשונית אחת זורק שגיאה מיידית בלשונית חדשה.`,
        },
      },
    ],
    principle: {
      en: `Most "broken" environments are unopened folders and unselected kernels, not broken code.`,
      he: `רוב הסביבות ה"שבורות" הן תיקיות שלא נפתחו ו-kernels שלא נבחרו — לא קוד שבור.`,
    },
  },
  {
    number: '03',
    title: { en: `Assign, Operate, Print`, he: `הצבה, פעולה, הדפסה` },
    subtitle: {
      en: `The three-step loop behind nearly every cell this session — and the habit that matters once notebooks disappear`,
      he: `הלולאה בת שלושת השלבים שמאחורי כמעט כל תא במפגש הזה — וההרגל שיחשוב כשהמחברות ייעלמו`,
    },
    sections: [
      {
        heading: { en: `The Loop`, he: `הלולאה` },
        body: {
          en: `Nearly every demonstrated cell followed the same shape: assign a value to a variable, run an operation on it (an index, a slice, a method call), then display the result. That loop, repeated across four data types, is the actual content of the session.`,
          he: `כמעט כל תא שהודגם עקב אחרי אותה צורה: הצבת ערך למשתנה, הפעלת פעולה עליו (אינדוקס, פרוסה, קריאה למתודה), ואז הצגת התוצאה. הלולאה הזו, שחוזרת על פני ארבעה סוגי נתונים, היא התוכן האמיתי של המפגש.`,
        },
      },
      {
        heading: { en: `Why print() Even Though the Notebook Shows Values Anyway`, he: `למה בכל זאת print()` },
        body: {
          en: `A notebook cell auto-displays its last expression, so \`age\` alone on a line shows \`5\` with no \`print()\` call at all. That convenience disappears the moment code moves into a \`.py\` script — scripts show nothing unless explicitly told to. The instruction was to wrap every display in \`print()\` starting now, so the habit is already built before the safety net is gone.`,
          he: `תא במחברת מציג אוטומטית את הביטוי האחרון שלו, כך ש-\`age\` לבדו בשורה מציג \`5\` בלי שום קריאה ל-\`print()\`. הנוחות הזו נעלמת ברגע שהקוד עובר לסקריפט \`.py\` — סקריפטים לא מציגים כלום אלא אם מבקשים מהם במפורש. ההנחיה הייתה לעטוף כל הצגה ב-\`print()\` כבר מעכשיו, כדי שההרגל ייבנה לפני שרשת הביטחון נעלמת.`,
        },
      },
    ],
    principle: {
      en: `The notebook is forgiving; the habit you build should assume it isn't.`,
      he: `המחברת סלחנית; ההרגל שבונות צריך להניח שהיא לא תהיה.`,
    },
  },
  {
    number: '04',
    title: { en: `Reading the Traceback`, he: `קריאת ה-Traceback` },
    subtitle: {
      en: `What a Python error actually tells you, using the session's first live crash as the specimen`,
      he: `מה שגיאת פייתון באמת אומרת לך, דרך הקריסה החיה הראשונה של המפגש`,
    },
    sections: [
      {
        heading: { en: `No Error Is Not the Same as Correct`, he: `אין שגיאה זה לא אומר נכון` },
        body: {
          en: `A cell can run cleanly, with no red text at all, and still not have produced the output you meant — a missing \`print()\` looks identical to success at a glance. The only reliable check is what actually printed, not whether the cell finished without complaint.`,
          he: `תא יכול לרוץ בלי שום טקסט אדום ועדיין לא להפיק את הפלט שהתכוונת אליו — \`print()\` חסר נראה בדיוק כמו הצלחה במבט חטוף. הבדיקה היחידה שאפשר לסמוך עליה היא מה שבאמת הודפס, לא אם התא סיים בלי תלונות.`,
        },
      },
      {
        heading: { en: `The Anatomy of the First Error`, he: `אנטומיה של השגיאה הראשונה` },
        body: {
          en: `The session's first traceback — trying to change one character inside a string — read, from the bottom line up: the exception type and message (\`TypeError: 'str' object does not support item assignment\`), and above it the exact line of code that triggered it. Read that bottom line first — it names both what went wrong and which object caused it.`,
          he: `ה-traceback הראשון של המפגש — ניסיון לשנות תו בודד בתוך מחרוזת — קרא, מהשורה התחתונה כלפי מעלה: סוג החריגה וההודעה שלה (\`TypeError: 'str' object does not support item assignment\`), ומעליה השורה המדויקת בקוד שגרמה לזה. קראי את השורה התחתונה קודם — היא נותנת שם גם למה שהשתבש וגם לאובייקט שגרם לזה.`,
        },
      },
      {
        heading: { en: `Errors Halt Everything`, he: `שגיאה עוצרת הכול` },
        body: {
          en: `An unhandled error is not a warning — it was named directly as catastrophic, because every line of code after it never runs. This is the reasoning behind defensive tools like \`.get()\` on dictionaries, covered in Card 06.`,
          he: `שגיאה לא מטופלת היא לא אזהרה — היא כונתה במפורש קטסטרופלית, כי כל שורת קוד שאחריה פשוט לא רצה. זה ההיגיון שמאחורי כלים הגנתיים כמו \`.get()\` על מילונים, שמכוסה בכרטיס 06.`,
        },
      },
    ],
    principle: {
      en: `Read the last line of the traceback first — it is the answer, not the noise.`,
      he: `קראי את השורה האחרונה ב-traceback קודם — היא התשובה, לא הרעש.`,
    },
  },
  {
    number: '05',
    title: { en: `Choosing a Container`, he: `בחירת מכל הנתונים` },
    subtitle: {
      en: `List, tuple, or dictionary — the question to ask before writing square or curly brackets`,
      he: `רשימה, Tuple או מילון — השאלה שכדאי לשאול לפני שכותבות סוגריים מרובעים או מסולסלים`,
    },
    sections: [
      {
        heading: { en: `Position or Name?`, he: `מיקום או שם?` },
        body: {
          en: `If items will be retrieved by their position in an order — first, last, third — reach for a list or tuple. If items will be retrieved by a meaningful label instead of a position, reach for a dictionary. Dr. Zuari's own example was a stock-price lookup: nobody wants to remember that a company's price sits at "whichever index happens to be thirty-seven."`,
          he: `אם פריטים ייאספו לפי מיקום בסדר — ראשון, אחרון, שלישי — פונות לרשימה או ל-Tuple. אם פריטים ייאספו לפי תווית משמעותית ולא לפי מיקום, פונות למילון. הדוגמה של ד״ר זוארי עצמו הייתה חיפוש מחיר מניה: אף אחד לא רוצה לזכור שהמחיר של חברה יושב ב"איזה שהוא אינדקס שבמקרה הוא שלושים ושבע".`,
        },
      },
      {
        heading: { en: `Changeable or Protected?`, he: `ניתן לשינוי או מוגן?` },
        body: {
          en: `If the collection should stay editable after creation, choose a list. If the goal is specifically to prevent any later line of code — yours or someone else's — from accidentally changing the values, choose a tuple. Dr. Zuari named this directly: a tuple is a protective mechanism, not a smaller list.`,
          he: `אם האוסף צריך להישאר ניתן לעריכה אחרי היצירה, בוחרות ברשימה. אם המטרה היא בדיוק למנוע משורת קוד מאוחרת — שלך או של מישהי אחרת — לשנות בטעות את הערכים, בוחרות ב-Tuple. ד״ר זוארי אמר את זה במפורש: Tuple הוא מנגנון הגנה, לא רשימה קטנה יותר.`,
        },
      },
    ],
    principle: {
      en: `Immutability isn't a missing feature — sometimes it's the feature you're choosing.`,
      he: `אי-שינוי הוא לא תכונה חסרה — לפעמים זו בדיוק התכונה שבוחרות בה.`,
    },
  },
  {
    number: '06',
    title: { en: `The Item-Assignment Trap`, he: `מלכודת השמת הפריט` },
    subtitle: {
      en: `Why the exact same error hits strings and tuples, and how one quoting mistake prints the wrong thing silently`,
      he: `למה אותה שגיאה בדיוק פוגעת במחרוזות וב-Tuples, ואיך טעות מרכאות אחת מדפיסה את הדבר הלא נכון בשקט`,
    },
    sections: [
      {
        heading: { en: `The Error, Twice`, he: `השגיאה, פעמיים` },
        body: {
          en: `\`name[0] = "J"\` on a string, and the identical-looking assignment on a tuple, throw the same class of error — \`object does not support item assignment\` — because both types are immutable by design. Seeing it once, on a string, should make the second appearance, on a tuple, unsurprising instead of confusing.`,
          he: `\`name[0] = "J"\` על מחרוזת, והצבה שנראית זהה על Tuple, זורקות את אותו סוג שגיאה — \`object does not support item assignment\` — כי שני הסוגים אינם ניתנים לשינוי מעצם התכנון. לראות את זה פעם אחת, על מחרוזת, צריך להפוך את ההופעה השנייה, על Tuple, לצפויה במקום מבלבלת.`,
        },
      },
      {
        heading: { en: `The Quoted-Variable Mistake`, he: `הטעות של המשתנה במרכאות` },
        body: {
          en: `A student tried to print a variable's value and instead got the variable's own name printed back literally — because the name was wrapped in quotes, turning it from a reference into a plain string. A variable name is never quoted; a string literal always is. Confusing the two is silent — Python won't error, it will simply print the wrong thing.`,
          he: `סטודנטית ניסתה להדפיס את הערך של משתנה וקיבלה בחזרה את השם של המשתנה עצמו, מילולית — כי השם היה עטוף במרכאות, מה שהפך אותו מהפניה למחרוזת פשוטה. שם משתנה אף פעם לא במרכאות; מחרוזת מילולית תמיד במרכאות. בלבול בין השניים הוא שקט — פייתון לא תזרוק שגיאה, היא פשוט תדפיס את הדבר הלא נכון.`,
        },
      },
      {
        heading: { en: `The Missing-Key Crash`, he: `הקריסה על מפתח חסר` },
        body: {
          en: `Looking up a dictionary key that doesn't exist with square brackets (\`prices["XYZ"]\`) throws \`KeyError\` and halts the program — the catastrophic failure from Card 04. The fix demonstrated live was \`.get()\`, which returns nothing instead of crashing when the key is missing — insurance against a lookup that isn't guaranteed to succeed.`,
          he: `חיפוש מפתח שלא קיים במילון עם סוגריים מרובעים (\`prices["XYZ"]\`) זורק \`KeyError\` ועוצר את התוכנית — הכישלון הקטסטרופלי מכרטיס 04. התיקון שהודגם בשידור חי היה \`.get()\`, שמחזיר כלום במקום לקרוס כשהמפתח חסר — ביטוח נגד חיפוש שאין ערובה שיצליח.`,
        },
      },
    ],
    principle: {
      en: `The same warning sign — item assignment — means the same thing everywhere it appears.`,
      he: `אותו תמרור אזהרה — השמת פריט — אומר אותו דבר בכל מקום שהוא מופיע בו.`,
    },
  },
  {
    number: '07',
    title: { en: `Build a One-Page Site With an Agent`, he: `בונות אתר עמוד אחד עם סוכן` },
    subtitle: {
      en: `The homework, step by step, exactly as demonstrated live`,
      he: `שיעורי הבית, שלב אחר שלב, בדיוק כפי שהודגם בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: open the editor's agent panel — not ask or chat mode, the mode that creates and edits files directly. Two: describe a real or invented profession in one prompt — a name, the role, one specific differentiator, and a couple of concrete examples of past work. Three: run it and let the agent generate the files, typically an HTML file plus supporting styling inside a new project folder. Four: find the file named \`index.html\` inside that folder and open it — double-clicking it opens it directly in a browser, no editor needed. Five: screenshot the result and submit it.`,
          he: `אחת: פתחי את חלונית הסוכן של העורך — לא מצב שאלה או צ'אט, אלא המצב שיוצר ועורך קבצים ישירות. שתיים: תארי מקצוע אמיתי או בדוי בפרומפט אחד — שם, תפקיד, יתרון מבדל אחד ספציפי, וכמה דוגמאות קונקרטיות לעבודות קודמות. שלוש: הריצי ותני לסוכן ליצור את הקבצים, בדרך כלל קובץ HTML ועיצוב נלווה בתוך תיקיית פרויקט חדשה. ארבע: מצאי את הקובץ בשם \`index.html\` בתוך התיקייה ופתחי אותו — לחיצה כפולה עליו פותחת אותו ישירות בדפדפן, בלי צורך בעורך. חמש: צלמי מסך של התוצאה ושלחי אותו.`,
        },
      },
      {
        heading: { en: `What This Is Actually For`, he: `למה זה באמת מיועד` },
        body: {
          en: `The exercise is not about web design — it's the first hands-on contact with an agent that writes and executes code instead of only answering questions, which is the direction the whole course is heading.`,
          he: `התרגיל הוא לא על עיצוב אתרים — זהו המגע המעשי הראשון עם סוכן שכותב ומריץ קוד במקום רק לענות על שאלות, וזה הכיוון שאליו כל הקורס הולך.`,
        },
      },
    ],
    principle: {
      en: `The homework is small on purpose — the muscle it trains is not.`,
      he: `שיעורי הבית קטנים בכוונה — השריר שהם מאמנים לא.`,
    },
  },
  {
    number: '08',
    title: { en: `Ask Mode vs. Agent Mode`, he: `מצב שאלה מול מצב סוכן` },
    subtitle: {
      en: `What the editor's built-in AI is good for this session, and where to double-check it`,
      he: `למה ה-AI המובנה בעורך טוב במפגש הזה, ואיפה כדאי לבדוק אותו פעם נוספת`,
    },
    sections: [
      {
        heading: { en: `Two Different Tools`, he: `שני כלים שונים` },
        body: {
          en: `The editor's assistant has at least two distinct modes: one that answers questions and explains code without touching files, and an agent mode that creates and edits files on its own. Ctrl or Cmd plus K on a highlighted block asks it to fix or rewrite just that selection in place — demonstrated live to auto-correct spacing to match PEP8 style.`,
          he: `לעוזר של העורך יש לפחות שני מצבים נפרדים: מצב שעונה על שאלות ומסביר קוד בלי לגעת בקבצים, ומצב סוכן שיוצר ועורך קבצים בעצמו. Ctrl או Cmd ועוד K על בלוק מסומן מבקש ממנו לתקן או לשכתב רק את הבחירה הזו במקום — הודגם בשידור חי לתיקון רווחים אוטומטי בהתאם לסגנון PEP8.`,
        },
      },
      {
        heading: { en: `Where It Gets It Right`, he: `איפה זה עובד טוב` },
        body: {
          en: `Reading and explaining a traceback in plain language, auto-formatting code to house style, and scaffolding a working HTML and CSS page from a one-paragraph description — all shown working correctly and quickly during the session.`,
          he: `קריאה והסברה של traceback בשפה פשוטה, עיצוב אוטומטי של קוד לפי סגנון קבוע, ובניית שלד של דף HTML ו-CSS עובד מתיאור בפסקה אחת — כל אלה הודגמו כעובדים נכון ומהר במהלך המפגש.`,
        },
      },
      {
        heading: { en: `What Still Needs Checking`, he: `מה עדיין דורש בדיקה` },
        body: {
          en: `An agent-generated site lives only on the machine that built it — it isn't automatically hosted or shareable, and a link sent to someone else won't work for them. Never assume an AI's output is deployed, saved, or visible to anyone else just because it ran successfully; verify where the output actually lives before treating a task as done.`,
          he: `אתר שנוצר על ידי סוכן חי רק על המחשב שבנה אותו — הוא לא מתארח או ניתן לשיתוף אוטומטית, וקישור שנשלח למישהי אחרת לא יעבוד אצלה. לעולם אל תניחי שפלט של AI פרוס, שמור, או נגיש למישהו אחר רק כי הוא רץ בהצלחה; ודאי איפה הפלט באמת נמצא לפני שמתייחסות למשימה כגמורה.`,
        },
      },
    ],
    principle: {
      en: `The agent can build faster than you can check — build the checking habit at the same speed.`,
      he: `הסוכן יכול לבנות מהר יותר משאת יכולה לבדוק — בני את הרגל הבדיקה באותה מהירות.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Immutability Exists`, he: `למה יש בכלל אי-שינוי` },
    subtitle: {
      en: `The protective idea underneath strings, tuples, and every "frozen" object still to come`,
      he: `הרעיון ההגנתי שמתחת למחרוזות, Tuples, וכל אובייקט "קפוא" שעוד יבוא`,
    },
    sections: [
      {
        heading: { en: `Protection, Not Punishment`, he: `הגנה, לא ענישה` },
        body: {
          en: `Immutability blocks accidental in-place changes to a value that other parts of a program — or other people's code — may be relying on staying the same. It's the same instinct behind choosing a tuple over a list: the restriction is the safeguard, not a limitation of the language.`,
          he: `אי-שינוי חוסם שינויים מקריים במקום לערך שחלקים אחרים בתוכנית — או קוד של אנשים אחרים — אולי סומכים עליו שיישאר קבוע. זו אותה אינטואיציה שמאחורי בחירה ב-Tuple על פני רשימה: ההגבלה היא ההגנה, לא מגבלה של השפה.`,
        },
      },
      {
        heading: { en: `Python Chooses Your Type For You`, he: `פייתון בוחרת עבורך את הטיפוס` },
        body: {
          en: `Unlike statically typed languages such as Java, Python never requires declaring what kind of value a variable will hold — it infers the type the moment a value is assigned. Dr. Zuari framed this as Python "doing you a favor," trading some of the up-front rigor of typed languages for speed of writing — a tradeoff, not a simplification without cost.`,
          he: `בניגוד לשפות טיפוסים סטטיים כמו ג'אווה, פייתון אף פעם לא דורשת להצהיר מראש איזה סוג ערך משתנה יחזיק — היא מסיקה את הטיפוס ברגע ההצבה. ד״ר זוארי תיאר את זה כפייתון ש"עושה לך טובה", ומחליפה חלק מהקפדנות המוקדמת של שפות מוקלדות במהירות כתיבה — עסקת חליפין, לא הפשטה בלי מחיר.`,
        },
      },
    ],
    principle: {
      en: `Every restriction in a language is a decision someone made on your behalf — ask what it's protecting before you resent it.`,
      he: `כל הגבלה בשפה היא החלטה שמישהו קיבל בשבילך — שאלי מה היא מגינה עליו לפני שמתרעמות עליה.`,
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
        heading: { en: `On Mutability`, he: `על אי-שינוי` },
        body: {
          en: `Why does an assignment like \`name[0] = "J"\` fail on a string, while the identical-looking \`my_list[0] = "J"\` succeeds on a list? Answer: strings are immutable by design — once created, none of their characters can be reassigned — while lists are mutable, meaning their elements can be replaced after creation. The syntax looks the same because indexing works identically across both types; what differs is a property of the type itself, not the operation.`,
          he: `למה הצבה כמו \`name[0] = "J"\` נכשלת על מחרוזת, בעוד ש-\`my_list[0] = "J"\` שנראית זהה מצליחה על רשימה? תשובה: מחרוזות אינן ניתנות לשינוי מעצם התכנון — ברגע שנוצרו, אי אפשר להציב מחדש אף אחד מהתווים שלהן — בעוד שרשימות ניתנות לשינוי, כלומר האיברים שלהן יכולים להיות מוחלפים אחרי היצירה. התחביר נראה זהה כי אינדוקס עובד באותה צורה בשני הסוגים; מה שמשתנה זו תכונה של הסוג עצמו, לא של הפעולה.`,
        },
      },
      {
        heading: { en: `On input()`, he: `על input()` },
        body: {
          en: `A student types \`25\` in response to \`age = input("How old are you? ")\`. What type does \`age\` actually hold afterward, and why does it matter? Answer: \`age\` holds the string \`"25"\`, not the integer \`25\` — \`input()\` always returns a string regardless of what was typed. It matters because \`age + 5\` will not add numerically; it will either concatenate incorrectly or raise an error, unless the value is explicitly converted with \`int()\` first.`,
          he: `סטודנטית מקלידה \`25\` בתגובה ל-\`age = input("בת כמה את? ")\`. איזה טיפוס \`age\` באמת מחזיקה אחרי זה, ולמה זה משנה? תשובה: \`age\` מחזיקה את המחרוזת \`"25"\`, לא את המספר השלם \`25\` — \`input()\` תמיד מחזירה מחרוזת, לא משנה מה הוקלד. זה משנה כי \`age + 5\` לא תחבר באופן מספרי; היא תשרשר בצורה שגויה או תזרוק שגיאה, אלא אם הערך מומר במפורש עם \`int()\` קודם.`,
        },
      },
      {
        heading: { en: `On Choosing a Tuple`, he: `על בחירת Tuple` },
        body: {
          en: `A list can do everything a tuple can, plus more — so why would you deliberately choose a tuple? Answer: because a list can do more, it can also be changed more, by any later line of code, yours or someone else's. Choosing a tuple is choosing a guarantee: whatever values are placed in it at creation cannot be altered afterward, whether by accident or on purpose. The restriction is the value.`,
          he: `רשימה יכולה לעשות כל מה שTuple יכול, ועוד — אז למה שמישהי תבחר במכוון ב-Tuple? תשובה: בגלל שרשימה יכולה יותר, היא גם יכולה להשתנות יותר, על ידי כל שורת קוד מאוחרת, שלך או של מישהי אחרת. בחירה ב-Tuple היא בחירה בערובה: הערכים שהוצבו בו ביצירה לא ניתנים לשינוי אחר כך, בין אם בטעות ובין אם בכוונה. ההגבלה היא הערך.`,
        },
      },
      {
        heading: { en: `On .get()`, he: `על .get()` },
        body: {
          en: `A lookup like \`prices["TSLA"]\` throws a \`KeyError\` and halts the whole program if \`"TSLA"\` isn't in the dictionary. What single change avoids the crash, and what do you get back instead? Answer: replacing the square-bracket lookup with \`prices.get("TSLA")\` avoids the crash — if the key is missing, \`.get()\` returns \`None\`, or a specified default, instead of raising an error, letting the rest of the program keep running.`,
          he: `חיפוש כמו \`prices["TSLA"]\` זורק \`KeyError\` ועוצר את כל התוכנית אם \`"TSLA"\` לא נמצאת במילון. איזה שינוי יחיד מונע את הקריסה, ומה מקבלים בחזרה במקום? תשובה: החלפת החיפוש בסוגריים מרובעים ב-\`prices.get("TSLA")\` מונעת את הקריסה — אם המפתח חסר, \`.get()\` מחזירה \`None\`, או ברירת מחדל שצוינה, במקום לזרוק שגיאה, כך שאר התוכנית ממשיכה לרוץ.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
