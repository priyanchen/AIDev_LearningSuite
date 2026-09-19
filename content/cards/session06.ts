import type { CardContent } from './types';

// Session 6 · Python (Module Session 3) · 15.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session06Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — two group-built games, list comprehensions, and the session's destination: functions`,
      he: `מפתח של אחד-עשר כרטיסים — שני משחקים שנבנו בקבוצות, רשימות מקוצרות, והיעד של המפגש: פונקציות`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `After a recap of conditionals and loops, the session is built around two group exercises — a number-guessing game with hot/cold feedback, and a shuffle-and-find game — that force conditionals, loops, and eventually functions to work together on a real problem. Functions arrive not as a new topic to memorize, but as the answer to a problem the games create: code that needs to run more than once.`,
          he: `אחרי חזרה על תנאים ולולאות, המפגש בנוי סביב שני תרגילים קבוצתיים — משחק ניחוש מספרים עם משוב חם/קר, ומשחק ערבוב וחיפוש — שמכריחים תנאים, לולאות ובסוף גם פונקציות לעבוד יחד על בעיה אמיתית. פונקציות מגיעות לא כנושא חדש לשינון, אלא כתשובה לבעיה שהמשחקים יוצרים: קוד שצריך לרוץ יותר מפעם אחת.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 07 is the flagship — the full build of the guessing game, step by step. Card 04 covers the session's central "aha" moment (print vs. return) — read it before Card 07 or the game's logic won't fully click. Card 06 covers a bug that resurfaces from Session 4 in a new disguise.`,
          he: `כרטיס 07 הוא הדגל — הבנייה המלאה של משחק הניחוש, שלב אחר שלב. כרטיס 04 מכסה את רגע ה"אאוריקה" המרכזי של המפגש (print מול return) — כדאי לקרוא אותו לפני כרטיס 07 אחרת ההיגיון של המשחק לא יתחבר עד הסוף. כרטיס 06 מכסה באג שחוזר ממפגש 4 בתחפושת חדשה.`,
        },
      },
    ],
    principle: {
      en: `A game is just conditionals and loops with a reason to exist — functions are what happens when the reason repeats.`,
      he: `משחק הוא רק תנאים ולולאות עם סיבה להתקיים — פונקציות הן מה שקורה כשהסיבה חוזרת על עצמה.`,
    },
  },
  {
    number: '01',
    title: { en: `Decompose Before You Code`, he: `פרקי לפני שכותבות קוד` },
    subtitle: {
      en: `Translating a problem into plain-language steps is not a shortcut around coding — it is the hard part, done first`,
      he: `תרגום בעיה לשלבים בשפה פשוטה זה לא קיצור דרך מסביב לכתיבת קוד — זה החלק הקשה, שנעשה קודם`,
    },
    sections: [
      {
        heading: { en: `The Instruction`, he: `ההוראה` },
        body: {
          en: `Before writing a single line of code for the guessing game, the class was told explicitly: no AI tools, no code yet — first take the problem and break it into its smallest units, written in plain language. Dr. Zuari named this directly as no less challenging than writing the code itself.`,
          he: `לפני שנכתבה שורת קוד אחת למשחק הניחוש, הכיתה קיבלה הוראה מפורשת: בלי כלי AI, עוד בלי קוד — קודם לקחת את הבעיה ולפרק אותה ליחידות הכי קטנות שלה, בשפה פשוטה. ד״ר זוארי אמר זאת במפורש: זה לא פחות מאתגר מכתיבת הקוד עצמו.`,
        },
      },
      {
        heading: { en: `Why It's Not a Detour`, he: `למה זה לא עיקוף` },
        body: {
          en: `Once a problem is decomposed into ordered natural-language steps — get a number, ask for a guess, check if it's in range, compare it to the previous guess — the move to code becomes close to mechanical. Most of the struggle in this session lived in the decomposition, not the syntax.`,
          he: `ברגע שבעיה מפורקת לשלבים מסודרים בשפה טבעית — קבלי מספר, בקשי ניחוש, בדקי אם הוא בטווח, השוואי אותו לניחוש הקודם — המעבר לקוד הופך כמעט למכני. רוב המאמץ במפגש הזה היה בפירוק, לא בתחביר.`,
        },
      },
      {
        heading: { en: `The Name for This`, he: `השם לזה` },
        body: {
          en: `This natural-language intermediate step is commonly called pseudocode — a recognized, standard practice, not a training-wheels exercise to be abandoned once you're "good enough."`,
          he: `השלב הביניים הזה בשפה טבעית נקרא בדרך כלל פסאודוקוד — פרקטיקה מוכרת וסטנדרטית, לא תרגיל גלגלי עזר שנפטרות ממנו ברגע שאת "מספיק טובה".`,
        },
      },
    ],
    principle: {
      en: `If you can't say it in plain language, you don't understand it well enough to code it.`,
      he: `אם את לא יכולה להגיד את זה בשפה פשוטה, את לא מבינה את זה מספיק טוב כדי לתכנת אותו.`,
    },
  },
  {
    number: '02',
    title: { en: `New Vocabulary: random and abs()`, he: `אוצר מילים חדש: random ו-abs()` },
    subtitle: {
      en: `Two small tools borrowed for this session — a package that already exists, and a function that turns negative into positive`,
      he: `שני כלים קטנים שהושאלו למפגש הזה — חבילה שכבר קיימת, ופונקציה שהופכת שלילי לחיובי`,
    },
    sections: [
      {
        heading: { en: `random.randint()`, he: `random.randint()` },
        body: {
          en: `Both games need an element of chance. \`import random\` brings in a package that ships with Python already — nothing to install. \`random.randint(1, 100)\` generates a random whole number between 1 and 100, inclusive of both ends. Later, \`random.shuffle()\` reorders a list's items randomly, in place.`,
          he: `שני המשחקים צריכים אלמנט של מקריות. \`import random\` מביאה חבילה שמגיעה כבר עם פייתון — שום דבר להתקין. \`random.randint(1, 100)\` מייצרת מספר שלם אקראי בין 1 ל-100, כולל שני הקצוות. בהמשך, \`random.shuffle()\` מסדרת מחדש את איברי רשימה באופן אקראי, במקום.`,
        },
      },
      {
        heading: { en: `abs()`, he: `abs()` },
        body: {
          en: `The distance between two numbers should never be negative — the distance from 5 to 2 is the same three units as the distance from 2 to 5. \`abs()\` wraps a number and, if it's negative, flips it positive; if it's already positive or zero, it leaves it untouched. This is exactly the tool needed to measure how close a guess is to the target, regardless of which direction it's off by.`,
          he: `המרחק בין שני מספרים לא אמור להיות אף פעם שלילי — המרחק מ-5 ל-2 הוא אותם שלוש יחידות כמו המרחק מ-2 ל-5. \`abs()\` עוטפת מספר, ואם הוא שלילי, הופכת אותו לחיובי; אם הוא כבר חיובי או אפס, היא משאירה אותו כמו שהוא. זה בדיוק הכלי הדרוש כדי למדוד כמה קרוב ניחוש למספר היעד, לא משנה לאיזה כיוון הוא סטה.`,
        },
      },
    ],
    principle: {
      en: `You don't need to build every tool — you need to know one already exists and reach for it.`,
      he: `לא צריך לבנות כל כלי — צריך לדעת שהוא כבר קיים ולהושיט יד אליו.`,
    },
  },
  {
    number: '03',
    title: { en: `Stages, Then Functions`, he: `שלבים, ואז פונקציות` },
    subtitle: {
      en: `The same three-part workflow ran both group exercises — break the problem into stages, then wrap each stage as its own function`,
      he: `אותו תהליך עבודה בן שלושה שלבים הריץ את שני התרגילים הקבוצתיים — פרקי את הבעיה לשלבים, ואז עטפי כל שלב כפונקציה משלו`,
    },
    sections: [
      {
        heading: { en: `Guessing Game: Three Stages`, he: `משחק הניחוש: שלושה שלבים` },
        body: {
          en: `Get a random number → validate and record each guess → compare the current guess's distance to the previous guess's distance to report "warmer" or "colder." Each stage was reasoned through in plain language before any code was written.`,
          he: `קבלי מספר אקראי ← אמתי ורשמי כל ניחוש ← השוואי את המרחק של הניחוש הנוכחי למרחק של הניחוש הקודם כדי לדווח "חם יותר" או "קר יותר". כל שלב נחשב בשפה פשוטה לפני שנכתבה שורת קוד אחת.`,
        },
      },
      {
        heading: { en: `Shuffle Game: Three Functions`, he: `משחק הערבוב: שלוש פונקציות` },
        body: {
          en: `The second exercise was explicitly designed around this pattern: identify the three stages of the game (shuffle the list, take a guess, check the guess), then build one function per stage, then assemble the finished functions into a working whole. This is the same discipline as Card 01, now applied at the level of code structure rather than plain-language planning.`,
          he: `התרגיל השני עוצב במפורש סביב הדפוס הזה: זיהוי שלושת שלבי המשחק (ערבוב הרשימה, קבלת ניחוש, בדיקת הניחוש), ואז בניית פונקציה אחת לכל שלב, ואז הרכבת הפונקציות המוגמרות לשלם עובד. זה אותו משמעת כמו בכרטיס 01, מיושמת עכשיו ברמת מבנה הקוד ולא רק בתכנון בשפה פשוטה.`,
        },
      },
    ],
    principle: {
      en: `A function is a stage that earned its own name — nothing more mysterious than that.`,
      he: `פונקציה היא שלב שהרוויח שם משלו — שום דבר מסתורי יותר מזה.`,
    },
  },
  {
    number: '04',
    title: { en: `print() Displays, return Delivers`, he: `print() מציגה, return מוסרת` },
    subtitle: {
      en: `The session's central demonstration — two nearly identical functions that behave completely differently`,
      he: `ההדגמה המרכזית של המפגש — שתי פונקציות כמעט זהות שמתנהגות אחרת לגמרי`,
    },
    sections: [
      {
        heading: { en: `Same Function, One Word Different`, he: `אותה פונקציה, מילה אחת שונה` },
        body: {
          en: `Two functions were built to add two numbers — one used \`print(a + b)\`, the other used \`return a + b\`. Calling either one and looking at the screen, the output looked identical. The difference only surfaced when the result of each call was used for something further — like adding one more to it.`,
          he: `שתי פונקציות נבנו כדי לחבר שני מספרים — אחת השתמשה ב-\`print(a + b)\`, השנייה ב-\`return a + b\`. קריאה לכל אחת מהן והסתכלות על המסך — הפלט נראה זהה. ההבדל עלה לפני השטח רק כשתוצאת כל קריאה שימשה למשהו נוסף — כמו הוספת עוד אחד אליה.`,
        },
      },
      {
        heading: { en: `The Reveal`, he: `החשיפה` },
        body: {
          en: `Adding 1 to the result of the \`return\`-based call worked cleanly. Adding 1 to the result of the \`print\`-based call raised an error, because that call handed back \`None\` — not the sum. \`print()\` only displays a value on screen; once it has shown it, its job is finished and nothing usable remains to work with. \`return\` hands the value back so it can be stored, passed along, or built upon.`,
          he: `הוספת 1 לתוצאה של הקריאה מבוססת ה-\`return\` עבדה חלק. הוספת 1 לתוצאה של הקריאה מבוססת ה-\`print\` זרקה שגיאה, כי הקריאה ההיא החזירה \`None\` — לא את הסכום. \`print()\` רק מציגה ערך על המסך; ברגע שהיא הציגה אותו, תפקידה נגמר ולא נשאר שום דבר שמיש לעבוד איתו. \`return\` מוסרת את הערך בחזרה כדי שאפשר יהיה לשמור אותו, להעביר אותו הלאה, או לבנות עליו.`,
        },
      },
    ],
    principle: {
      en: `Ask "can I do something with what I got back?" — that question separates print from return every time.`,
      he: `שאלי "האם אני יכולה לעשות משהו עם מה שקיבלתי בחזרה?" — השאלה הזו מפרידה בין print ל-return בכל פעם.`,
    },
  },
  {
    number: '05',
    title: { en: `Naming What You Feed a Function`, he: `לתת שם למה שמזינות לפונקציה` },
    subtitle: {
      en: `Positional order is fragile; naming the argument removes the fragility — plus, when it's fine to leave something out entirely`,
      he: `סדר לפי מיקום שביר; מתן שם לארגומנט מסלק את השבירות — ומתי מותר להשמיט משהו לגמרי`,
    },
    sections: [
      {
        heading: { en: `Order-Dependent by Default`, he: `תלוי-סדר כברירת מחדל` },
        body: {
          en: `Calling a two-parameter function by position — \`greet("Jonathan", "Noa")\` — matches arguments to parameters purely by their order. Swapping the two arguments silently swaps their meaning: nothing errors, but the first name and last name trade places without warning.`,
          he: `קריאה לפונקציה בעלת שני פרמטרים לפי מיקום — \`greet("Jonathan", "Noa")\` — מתאימה ארגומנטים לפרמטרים אך ורק לפי הסדר שלהם. החלפת שני הארגומנטים מחליפה בשקט את המשמעות שלהם: שום שגיאה לא נזרקת, אבל השם הפרטי ושם המשפחה מחליפים מקום בלי אזהרה.`,
        },
      },
      {
        heading: { en: `Naming Removes the Risk`, he: `מתן שם מסלק את הסיכון` },
        body: {
          en: `Calling the same function with \`greet(last_name="Noa", first_name="Jonathan")\` makes the order irrelevant — each value is explicitly assigned to its parameter by name. This is a keyword argument, and it's the safer choice whenever a function takes more than a couple of parameters or their order isn't self-evident.`,
          he: `קריאה לאותה פונקציה עם \`greet(last_name="Noa", first_name="Jonathan")\` הופכת את הסדר ללא רלוונטי — כל ערך מוצב במפורש לפרמטר שלו לפי שם. זה ארגומנט מילת-מפתח, והוא הבחירה הבטוחה יותר בכל פעם שפונקציה מקבלת יותר מכמה פרמטרים או שהסדר שלהם לא מובן מאליו.`,
        },
      },
      {
        heading: { en: `Default Values`, he: `ערכי ברירת מחדל` },
        body: {
          en: `A parameter can be given a fallback: \`def greet(first_name="John", last_name="Doe")\`. Leaving that argument out at call time doesn't error — it silently falls back to the default. This is what happens when only one of two parameters is filled: the other one isn't missing, it's just using its default.`,
          he: `לפרמטר אפשר לתת ברירת מחדל: \`def greet(first_name="John", last_name="Doe")\`. השמטת הארגומנט הזה בזמן הקריאה לא זורקת שגיאה — היא נופלת בשקט לברירת המחדל. זה מה שקורה כשרק אחד משני הפרמטרים מולא: השני לא חסר, הוא פשוט משתמש בברירת המחדל שלו.`,
        },
      },
    ],
    principle: {
      en: `The more a function's parameters matter, the less you should trust their order to carry meaning.`,
      he: `ככל שלפרמטרים של פונקציה יש יותר משמעות, כך פחות כדאי לסמוך על הסדר שלהם שיישא אותה.`,
    },
  },
  {
    number: '06',
    title: { en: `input() Still Returns a String`, he: `input() עדיין מחזירה מחרוזת` },
    subtitle: {
      en: `The Session 4 trap resurfaces in a new disguise, plus a technique for finding code that does nothing`,
      he: `המלכודת ממפגש 4 חוזרת בתחפושת חדשה, וגם טכניקה למציאת קוד שלא עושה כלום`,
    },
    sections: [
      {
        heading: { en: `Same Root Cause, New Symptom`, he: `אותה סיבת שורש, סימפטום חדש` },
        body: {
          en: `In the shuffle game, indexing a list with a guess taken straight from \`input()\` — \`shuffled_list[guess]\` — raised an error: list indices must be integers or slices, not strings. It's the identical fact from Session 4 (\`input()\` always returns a string) causing a different crash: there, it broke arithmetic; here, it breaks indexing. The fix is the same reflex both times — wrap the input in \`int()\` before using it as a number.`,
          he: `במשחק הערבוב, אינדוקס של רשימה עם ניחוש שנלקח ישירות מ-\`input()\` — \`shuffled_list[guess]\` — זרק שגיאה: אינדקסים של רשימה חייבים להיות מספרים שלמים או פרוסות, לא מחרוזות. זו אותה עובדה בדיוק ממפגש 4 (\`input()\` תמיד מחזירה מחרוזת) שגורמת לקריסה שונה: שם היא שברה חישוב אריתמטי; כאן היא שוברת אינדוקס. התיקון הוא אותו רפלקס בשני המקרים — לעטוף את הקלט ב-\`int()\` לפני שמשתמשים בו כמספר.`,
        },
      },
      {
        heading: { en: `Finding Dead Code by Removing It`, he: `מציאת קוד מת על ידי הסרתו` },
        body: {
          en: `While reviewing the guessing game's logic, several \`continue\` statements were tested one at a time: remove it, trace what happens next by hand, and check whether the program's behavior actually changes. In three separate spots, removing the \`continue\` changed nothing — the code already reached the end of the loop body on its own, so the \`continue\` was harmless but redundant.`,
          he: `בזמן סקירת ההיגיון של משחק הניחוש, כמה פקודות \`continue\` נבדקו אחת אחת: הסירי אותה, עקבי בעצמך מה קורה אחר כך, ובדקי אם ההתנהגות של התוכנית באמת משתנה. בשלושה מקומות נפרדים, הסרת ה-\`continue\` לא שינתה כלום — הקוד כבר הגיע לסוף גוף הלולאה בעצמו, כך שה-\`continue\` היה תמים אבל מיותר.`,
        },
      },
    ],
    principle: {
      en: `When code "just runs" but does nothing, deleting it and tracing by hand tells you faster than staring at it.`,
      he: `כשקוד "פשוט רץ" אבל לא עושה כלום, מחיקה שלו ומעקב ידני מגלים את זה מהר יותר מהבהה בו.`,
    },
  },
  {
    number: '07',
    title: { en: `Build the Hot/Cold Guessing Game`, he: `בונות את משחק הניחוש חם/קר` },
    subtitle: {
      en: `The flagship exercise, decomposed and built exactly as demonstrated`,
      he: `התרגיל הדגל, מפורק ובנוי בדיוק כפי שהודגם`,
    },
    sections: [
      {
        heading: { en: `The Rules`, he: `הכללים` },
        body: {
          en: `A random number between 1 and 100 is chosen. The player repeatedly guesses. Any guess outside 1–100 is rejected and re-asked. The first guess only gets a range check. From the second guess on, each new guess is compared to the previous one: if the new guess's distance from the target is smaller, print "warmer"; otherwise print "colder." A correct guess prints the total number of guesses and ends the game.`,
          he: `נבחר מספר אקראי בין 1 ל-100. השחקן מנחש שוב ושוב. כל ניחוש מחוץ לטווח 1–100 נדחה ונשאל מחדש. הניחוש הראשון מקבל רק בדיקת טווח. מהניחוש השני ואילך, כל ניחוש חדש מושווה לקודם: אם המרחק של הניחוש החדש מהיעד קטן יותר, מדפיסים "חם יותר"; אחרת מדפיסים "קר יותר". ניחוש נכון מדפיס את מספר הניחושים הכולל ומסיים את המשחק.`,
        },
      },
      {
        heading: { en: `The Build Order`, he: `סדר הבנייה` },
        body: {
          en: `One: generate the number with \`random.randint(1, 100)\` and set a guess counter to zero. Two: open a \`while\` loop that keeps asking for guesses. Three: validate range first, using \`continue\` to skip straight back to the next guess if it's invalid. Four: on the first valid guess, skip the warmer/colder comparison (there's nothing yet to compare against) and just record its distance. Five: on every guess after the first, compute the current distance with \`abs(guess - target)\`, compare it to the stored previous distance, print warmer or colder, then overwrite the stored distance and guess for next time. Six: check for a correct guess before all of that, printing the guess count and breaking out of the loop.`,
          he: `אחת: הפיקי את המספר עם \`random.randint(1, 100)\` וקבעי מונה ניחושים לאפס. שתיים: פתחי לולאת \`while\` שממשיכה לבקש ניחושים. שלוש: אמתי טווח קודם, עם \`continue\` כדי לדלג ישר חזרה לניחוש הבא אם הוא לא תקין. ארבע: בניחוש התקין הראשון, דלגי על השוואת חם/קר (עדיין אין מול מה להשוות) ורק רשמי את המרחק שלו. חמש: בכל ניחוש אחרי הראשון, חשבי את המרחק הנוכחי עם \`abs(guess - target)\`, השוואי אותו למרחק הקודם השמור, הדפיסי חם או קר, ואז דרסי את המרחק והניחוש השמורים עם הערכים החדשים לפעם הבאה. שש: בדקי ניחוש נכון לפני כל זה, תוך הדפסת מספר הניחושים ויציאה מהלולאה.`,
        },
      },
    ],
    principle: {
      en: `Ten failed attempts that teach you the logic beat one lucky first success that teaches you nothing.`,
      he: `עשרה ניסיונות כושלים שמלמדים אותך את ההיגיון עדיפים על הצלחה ראשונה מזל שלא מלמדת כלום.`,
    },
  },
  {
    number: '08',
    title: { en: `Docstrings and Type Hints, Assisted`, he: `Docstrings וטיפוסי-רמז, בעזרה` },
    subtitle: {
      en: `What the editor's shortcut writes for you, and why a type hint is a suggestion, not a rule`,
      he: `מה קיצור הדרך של העורך כותבת בשבילך, ולמה טיפוס-רמז הוא הצעה, לא חוק` ,
    },
    sections: [
      {
        heading: { en: `One Shortcut, Two Jobs`, he: `קיצור אחד, שתי עבודות` },
        body: {
          en: `With a function selected, Ctrl or Cmd plus K can generate its docstring automatically — the explanatory text that documents what a function does, once typed out by hand and now written for you. Hovering the mouse over any call to that function later surfaces the same docstring as a tooltip, which is where that explanation actually comes from — not from any built-in magic, but from the text written into the function itself.`,
          he: `כשפונקציה מסומנת, Ctrl או Cmd ועוד K יכולים ליצור את ה-docstring שלה אוטומטית — הטקסט המסביר שמתעד מה הפונקציה עושה, שפעם הוקלד ידנית ועכשיו נכתב בשבילך. ריחוף עם העכבר מעל כל קריאה לפונקציה הזו בהמשך מעלה את אותו docstring כרמז — וזה המקור האמיתי להסבר הזה, לא איזו קסמים מובנים, אלא הטקסט שנכתב בתוך הפונקציה עצמה.`,
        },
      },
      {
        heading: { en: `Type Hints Are Hints`, he: `טיפוסי-רמז הם רמזים` },
        body: {
          en: `The same shortcut can annotate a parameter's expected type (\`name: str\`) and a function's return type (\`-> str\`). The word "hint" is literal — Python will still run the function even if a mismatched type is passed in, so long as the operations inside don't themselves fail. The hint improves readability and tooling, but it is not enforcement; the actual failure only happens if the mismatched type breaks an operation, like adding a string to a number.`,
          he: `אותו קיצור יכול לסמן את הטיפוס הצפוי של פרמטר (\`name: str\`) ואת טיפוס ההחזרה של פונקציה (\`-> str\`). המילה "רמז" מילולית — פייתון עדיין תריץ את הפונקציה גם אם הוכנס טיפוס לא מתאים, כל עוד הפעולות בפנים לא נכשלות בעצמן. הרמז משפר קריאות וכלים, אבל הוא לא אכיפה; הכישלון בפועל קורה רק אם הטיפוס הלא-מתאים שובר פעולה, כמו חיבור מחרוזת למספר.`,
        },
      },
    ],
    principle: {
      en: `A type hint tells the reader what you intended — it doesn't stop Python from letting you break that intention.`,
      he: `טיפוס-רמז אומר לקוראת מה התכוונת — הוא לא עוצר את פייתון מלתת לך לשבור את הכוונה הזו.`,
    },
  },
  {
    number: '09',
    title: { en: `List Comprehensions Are Loops, Reordered`, he: `רשימות מקוצרות הן לולאות, בסדר אחר` },
    subtitle: {
      en: `The intimidating one-line syntax is the same loop already known, with "what to keep" moved to the front`,
      he: `התחביר המפחיד בשורה אחת הוא אותה לולאה שכבר מוכרת, עם "מה לשמור" שהוזז לחזית`,
    },
    sections: [
      {
        heading: { en: `Decode It by Finding the "for" First`, he: `פענחי על ידי מציאת ה-"for" קודם` },
        body: {
          en: `\`[num ** 2 for num in [1, 2, 3, 4]]\` looks unfamiliar until it's read backwards from the \`for\`: this is a loop over \`[1, 2, 3, 4]\`, naming each item \`num\` — exactly like a normal \`for\` loop. What comes before the \`for\` is simply what gets kept for each item, here the item squared. Reading it as a compressed, reordered \`for\` loop rather than new syntax is the whole trick.`,
          he: `\`[num ** 2 for num in [1, 2, 3, 4]]\` נראה זר עד שקוראים אותו מאחור, מה-\`for\`: זו לולאה על \`[1, 2, 3, 4]\`, שנותנת לכל איבר את השם \`num\` — בדיוק כמו לולאת \`for\` רגילה. מה שבא לפני ה-\`for\` הוא פשוט מה שנשמר עבור כל איבר, כאן האיבר בריבוע. לקרוא את זה כלולאת \`for\` דחוסה שהסדר שלה הוחלף, ולא כתחביר חדש, זו כל התחבולה.`,
        },
      },
      {
        heading: { en: `The Long Version First`, he: `הגרסה הארוכה קודם` },
        body: {
          en: `Before writing the compressed version, the long version was built first: an empty list, a \`for\` loop, and \`.append()\` inside it. Only once that was working did the class translate it into the one-line form — the same relationship as pseudocode to code from Card 01, applied one level deeper.`,
          he: `לפני כתיבת הגרסה הדחוסה, הגרסה הארוכה נבנתה קודם: רשימה ריקה, לולאת \`for\`, ו-\`.append()\` בתוכה. רק ברגע שזה עבד, הכיתה תרגמה את זה לצורה בשורה אחת — אותו יחס כמו פסאודוקוד לקוד מכרטיס 01, מיושם רמה עמוקה יותר.`,
        },
      },
    ],
    principle: {
      en: `Nothing that looks new is ever really new — it's a familiar idea wearing a shorter sentence.`,
      he: `שום דבר שנראה חדש הוא לא באמת חדש — זה רעיון מוכר שלובש משפט קצר יותר.`,
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
        heading: { en: `On print vs. return`, he: `על print מול return` },
        body: {
          en: `A function uses \`print(x + y)\` instead of \`return x + y\`. You call it and try to add 1 to the result — why does that fail? Answer: \`print()\` only displays a value on screen and hands back \`None\`; adding 1 to \`None\` raises a type error, because \`print()\`'s job ends the moment something is shown, while \`return\` is what actually hands a usable value back to the caller.`,
          he: `פונקציה משתמשת ב-\`print(x + y)\` במקום ב-\`return x + y\`. את קוראת לה ומנסה להוסיף 1 לתוצאה — למה זה נכשל? תשובה: \`print()\` רק מציגה ערך על המסך ומחזירה \`None\`; הוספת 1 ל-\`None\` זורקת שגיאת טיפוס, כי תפקידה של \`print()\` נגמר ברגע שמשהו הוצג, בעוד ש-\`return\` היא מה שבאמת מוסרת ערך שמיש בחזרה לקוראת.`,
        },
      },
      {
        heading: { en: `On Positional Arguments`, he: `על ארגומנטים לפי מיקום` },
        body: {
          en: `\`greet("Noa", "Jonathan")\` and \`greet("Jonathan", "Noa")\` both run without error but produce different results — why, and what would remove the risk? Answer: positional arguments are matched to parameters purely by order, so swapping them silently swaps their meaning with no error raised. Calling with keyword arguments — \`greet(first_name="Jonathan", last_name="Noa")\` — removes the risk, because each value is explicitly tied to its parameter by name.`,
          he: `\`greet("Noa", "Jonathan")\` ו-\`greet("Jonathan", "Noa")\` שתיהן רצות בלי שגיאה אבל מפיקות תוצאות שונות — למה, ומה היה מסלק את הסיכון? תשובה: ארגומנטים לפי מיקום מותאמים לפרמטרים אך ורק לפי הסדר, כך שהחלפתם מחליפה בשקט את המשמעות בלי שגיאה. קריאה עם ארגומנטי מילת-מפתח — \`greet(first_name="Jonathan", last_name="Noa")\` — מסלקת את הסיכון, כי כל ערך קשור במפורש לפרמטר שלו לפי שם.`,
        },
      },
      {
        heading: { en: `On the First Guess`, he: `על הניחוש הראשון` },
        body: {
          en: `In the guessing game, why does the first valid guess skip the warmer/colder comparison entirely? Answer: warmer/colder is a comparison between the current guess's distance and the previous guess's distance — and on the first guess there is no previous guess yet to compare against, so the comparison has nothing to run on.`,
          he: `במשחק הניחוש, למה הניחוש התקין הראשון מדלג לגמרי על השוואת חם/קר? תשובה: חם/קר היא השוואה בין המרחק של הניחוש הנוכחי למרחק של הניחוש הקודם — ובניחוש הראשון עדיין אין ניחוש קודם להשוות אליו, כך שלהשוואה אין על מה לרוץ.`,
        },
      },
      {
        heading: { en: `On List Comprehensions`, he: `על רשימות מקוצרות` },
        body: {
          en: `Given \`[c[0] for c in names]\`, what does this produce, and what's the fastest way to decode syntax like this? Answer: it produces a list of the first character of every string in \`names\` — read it by finding the \`for\` first (a loop over \`names\`, naming each item \`c\`), then reading what comes before the \`for\` as the thing kept for each item, here \`c[0]\`.`,
          he: `בהינתן \`[c[0] for c in names]\`, מה זה מפיק, ומה הדרך המהירה ביותר לפענח תחביר כזה? תשובה: זה מפיק רשימה של התו הראשון של כל מחרוזת ב-\`names\` — קוראים את זה על ידי מציאת ה-\`for\` קודם (לולאה על \`names\`, שנותנת לכל איבר את השם \`c\`), ואז קריאת מה שבא לפני ה-\`for\` כדבר שנשמר עבור כל איבר, כאן \`c[0]\`.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
