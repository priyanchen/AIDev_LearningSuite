import type { CardContent } from './types';

// Session 9 · Python (Module Session 6) · 29.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session09Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — two small Python patterns, then the real center of gravity: Claude Code`,
      he: `מפתח של אחד-עשר כרטיסים — שני דפוסי פייתון קטנים, ואז מרכז הכובד האמיתי: Claude Code`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `A short close-out of Python fundamentals — unpacking, decorators, and try/except — followed by the session's real destination: installing and learning to actually work with Claude Code, from the terminal, for the first time.`,
          he: `סגירה קצרה של יסודות פייתון — unpacking, decorators ו-try/except — ואחריה היעד האמיתי של המפגש: התקנה ולמידה של עבודה בפועל עם Claude Code, מהטרמינל, בפעם הראשונה.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 explains CLAUDE.md before Card 07's sub-agent build gets there — read it first. Card 09 connects the two Python patterns from the session's first half to each other, so it rewards reading Cards 01–06 in the physical deck first, if you're going card by card.`,
          he: `כרטיס 01 מסביר CLAUDE.md לפני שהבנייה של סוכן-המשנה בכרטיס 07 מגיעה לשם — כדאי לקרוא אותו קודם. כרטיס 09 מחבר בין שני דפוסי הפייתון מהחצי הראשון של המפגש זה לזה, אז הוא משתלם יותר אחרי שקוראים את הכרטיסים הפיזיים בחפיסה שלפניו.`,
        },
      },
    ],
    principle: {
      en: `A pattern and an agent solve the same problem at different scales: don't repeat what you can name once and reuse.`,
      he: `דפוס וסוכן פותרים את אותה בעיה בקני מידה שונים: אל תחזרי על מה שאפשר לתת לו שם פעם אחת ולהשתמש בו שוב.`,
    },
  },
  {
    number: '01',
    title: { en: `CLAUDE.md as External Memory`, he: `CLAUDE.md כזיכרון חיצוני` },
    subtitle: {
      en: `Why the same project context gets injected into every single prompt`,
      he: `למה אותו הקשר פרויקט מוזרק לתוך כל פרומפט בודד`,
    },
    sections: [
      {
        heading: { en: `The Analogy`, he: `האנלוגיה` },
        body: {
          en: `The explanation started with a human comparison: imagine a colleague who forgets the task mid-conversation unless reminded constantly. A running note that gets re-read before every response solves exactly that problem — and that note, for Claude Code, is the file named \`CLAUDE.md\`.`,
          he: `ההסבר התחיל בהשוואה אנושית: דמייני עמיתה שכוחת את המשימה באמצע השיחה אלא אם מזכירים לה כל הזמן. הערת עבודה שנקראת מחדש לפני כל תגובה פותרת בדיוק את הבעיה הזו — וההערה הזו, עבור Claude Code, היא הקובץ בשם \`CLAUDE.md\`.`,
        },
      },
      {
        heading: { en: `Re-Read, Not Remembered`, he: `נקרא מחדש, לא זכור` },
        body: {
          en: `Every time a prompt is sent, the project's \`CLAUDE.md\` is injected alongside it — what the project is, what it's supposed to do, standing rules. This is why it was called the project's constitution: not consulted occasionally, but present in the background of every single instruction.`,
          he: `בכל פעם שפרומפט נשלח, ה-\`CLAUDE.md\` של הפרויקט מוזרק לצידו — מה הפרויקט, מה הוא אמור לעשות, כללים קבועים. זו הסיבה שהוא כונה החוקה של הפרויקט: לא נבדק מדי פעם, אלא נוכח ברקע של כל הוראה בודדת.`,
        },
      },
    ],
    principle: {
      en: `An agent without persistent memory needs its memory written down and reread — not remembered, engineered.`,
      he: `סוכן בלי זיכרון מתמשך צריך שהזיכרון שלו יהיה כתוב ונקרא מחדש — לא זכור, מהונדס.`,
    },
  },
  {
    number: '02',
    title: { en: `Getting Claude Code Running`, he: `להריץ את Claude Code` },
    subtitle: {
      en: `Four ways in, and why the terminal was the one actually taught`,
      he: `ארבע דרכים פנימה, ולמה הטרמינל היה זה שבאמת לימדו`,
    },
    sections: [
      {
        heading: { en: `Four Doors, One Recommended`, he: `ארבע דלתות, אחת מומלצת` },
        body: {
          en: `Claude Code can be reached through an editor extension (inside Cursor or VS Code), a standalone desktop app, the web, or the terminal. Each was named explicitly — the desktop app's advantage is a friendlier interface and easy multi-tasking across several projects at once; the terminal's advantage is that nothing about it is limited.`,
          he: `אפשר להגיע ל-Claude Code דרך תוסף עורך (בתוך Cursor או VS Code), אפליקציית דסקטופ עצמאית, האינטרנט, או הטרמינל. כל אחת צוינה במפורש — היתרון של אפליקציית הדסקטופ הוא ממשק ידידותי יותר ומעבר קל בין כמה פרויקטים בבת אחת; היתרון של הטרמינל הוא ששום דבר בו לא מוגבל.`,
        },
      },
      {
        heading: { en: `Full Functionality, No Guardrails`, he: `פונקציונליות מלאה, בלי מעקות` },
        body: {
          en: `The other interfaces were described as constrained versions of what's available through the terminal. The explicit choice to teach the terminal first, despite it being the least visually friendly option, was made because it's the only one with no functionality held back.`,
          he: `שאר הממשקים תוארו כגרסאות מוגבלות של מה שזמין דרך הטרמינל. הבחירה המפורשת ללמד את הטרמינל קודם, למרות שהוא האופציה הפחות ידידותית מבחינה חזותית, נעשתה כי הוא היחיד שאין בו שום פונקציונליות מוסתרת.`,
        },
      },
    ],
    principle: {
      en: `The friendliest interface and the most powerful one are rarely the same door — this session chose power.`,
      he: `הממשק הידידותי ביותר והחזק ביותר הם לעיתים רחוקות אותה דלת — המפגש הזה בחר בעוצמה.`,
    },
  },
  {
    number: '03',
    title: { en: `Plan, Then Execute`, he: `תכנני, ואז בצעי` },
    subtitle: {
      en: `The recommended two-step rhythm for any nontrivial request to Claude Code`,
      he: `הקצב המומלץ בן שני השלבים לכל בקשה שהיא לא טריוויאלית ל-Claude Code`,
    },
    sections: [
      {
        heading: { en: `Ask for the Plan First`, he: `בקשי את התכנון קודם` },
        body: {
          en: `Before letting Claude Code touch any files, entering plan mode produces a full outline of what it intends to do — which files, which steps, in what order — without executing any of it yet.`,
          he: `לפני שנותנים ל-Claude Code לגעת בקבצים כלשהם, כניסה למצב תכנון (plan mode) מפיקה תוואי מלא של מה שהוא מתכוון לעשות — אילו קבצים, אילו שלבים, באיזה סדר — בלי לבצע עדיין שום דבר מזה.`,
        },
      },
      {
        heading: { en: `Approve, Then Let It Run`, he: `אשרי, ואז תני לזה לרוץ` },
        body: {
          en: `Only after that plan is reviewed and confirmed does execution begin — at which point Claude Code runs through the approved steps largely on its own. This mirrors the pseudocode-before-code discipline from earlier sessions, now applied one level up: to delegating work instead of writing it.`,
          he: `רק אחרי שהתכנון הזה נסקר ואושר, הביצוע מתחיל — ובשלב הזה Claude Code רץ דרך השלבים המאושרים במידה רבה בעצמו. זה משקף את המשמעת של פסאודוקוד-לפני-קוד ממפגשים קודמים, מיושמת עכשיו רמה אחת למעלה: על האצלת עבודה במקום כתיבתה.`,
        },
      },
    ],
    principle: {
      en: `Approving a plan you haven't read isn't delegation — it's just hoping.`,
      he: `אישור תכנון שלא קראת הוא לא האצלה — זו סתם תקווה.`,
    },
  },
  {
    number: '04',
    title: { en: `Thinking-Effort Levels Are Budget Dials`, he: `רמות המחשבה הן חוגות תקציב` },
    subtitle: {
      en: `think, think hard, and ultrathink aren't magic words — they're how much reasoning budget gets spent`,
      he: `think, think hard ו-ultrathink הן לא מילות קסם — הן כמה תקציב חשיבה מוציאים`,
    },
    sections: [
      {
        heading: { en: `What the Levels Actually Do`, he: `מה הרמות באמת עושות` },
        body: {
          en: `A typical prompt spends a modest number of tokens on internal reasoning before answering — roughly four to ten thousand. Explicitly asking for deeper thought — via commands escalating toward "ultrathink" — raises that budget substantially, at the cost of more tokens spent and more time taken.`,
          he: `פרומפט טיפוסי מוציא מספר צנוע של tokens על חשיבה פנימית לפני התשובה — בערך ארבעת אלפים עד עשרת אלפים. בקשה מפורשת לחשיבה עמוקה יותר — דרך פקודות שמסלימות לכיוון "ultrathink" — מעלה את התקציב הזה משמעותית, במחיר של יותר tokens שמושקעים ויותר זמן שנלקח.`,
        },
      },
      {
        heading: { en: `Not Just Flashier Colors`, he: `לא רק צבעים נוצצים יותר` },
        body: {
          en: `The higher levels display in a visually distinct way — which was named directly as easy to get excited about for the wrong reason. The actual value isn't the visual flourish; it's genuinely more reasoning applied, worth spending only on planning a large new project or hunting a serious, stubborn bug — not on routine requests.`,
          he: `הרמות הגבוהות יותר מוצגות בצורה שונה חזותית — מה שצוין במפורש כקל להתרגש ממנו מהסיבה הלא נכונה. הערך האמיתי הוא לא הקישוט החזותי; זה חשיבה אמיתית ורבה יותר שמופעלת, ששווה להוציא רק על תכנון פרויקט חדש וגדול או ציד באג רציני ועיקש — לא על בקשות שגרתיות.`,
        },
      },
    ],
    principle: {
      en: `Deeper thinking has a price — reach for it when the problem is genuinely hard, not because the label looks impressive.`,
      he: `חשיבה עמוקה יותר יש לה מחיר — הושיטי יד אליה כשהבעיה באמת קשה, לא כי התווית נראית מרשימה.`,
    },
  },
  {
    number: '05',
    title: { en: `Where to Wrap try/except`, he: `איפה לעטוף try/except` },
    subtitle: {
      en: `Only around code you actually suspect — never as a blanket over everything`,
      he: `רק סביב קוד שבאמת חושדים בו — אף פעם לא כשמיכה מעל הכול`,
    },
    sections: [
      {
        heading: { en: `Wrapping Everything Defeats the Point`, he: `עטיפת הכול מבטלת את המטרה` },
        body: {
          en: `Wrapping an entire program in one giant \`try/except\` block was named directly as a bad idea, for a specific reason: it makes it impossible to tell where an error actually happened. The whole program keeps running past any failure, silently, with no way to localize what broke.`,
          he: `עטיפת תוכנית שלמה בבלוק \`try/except\` ענק אחד צוינה במפורש כרעיון גרוע, מסיבה ספציפית: זה הופך לבלתי אפשרי לדעת איפה שגיאה באמת קרתה. כל התוכנית ממשיכה לרוץ מעבר לכל כישלון, בשקט, בלי דרך למקם מה נשבר.`,
        },
      },
      {
        heading: { en: `Wrap Only Suspected Trouble Spots`, he: `עטפי רק נקודות חשד` },
        body: {
          en: `The actual practice: use \`try/except\` only around code that's genuinely suspected of being fragile — an operation whose edge cases haven't all been checked yet. This was stated as the entire rule: "we wrap only the spots prone to trouble."`,
          he: `הפרקטיקה בפועל: משתמשים ב-\`try/except\` רק סביב קוד שבאמת חושדים שהוא שביר — פעולה שמקרי הקצה שלה עדיין לא כולם נבדקו. זה נאמר בתור הכלל כולו: "עוטפים רק את המקומות המועדים לפורענות."`,
        },
      },
    ],
    principle: {
      en: `A safety net over everything catches nothing usefully — a net over the one spot you're worried about catches exactly what matters.`,
      he: `רשת ביטחון מעל הכול לא תופסת כלום בצורה שימושית — רשת מעל הנקודה האחת שדואגים לה תופסת בדיוק את מה שחשוב.`,
    },
  },
  {
    number: '06',
    title: { en: `Two Kinds of Stopping`, he: `שני סוגים של עצירה` },
    subtitle: {
      en: `An uncaught error halts everything; Escape halts only the running command — knowing which is which matters`,
      he: `שגיאה לא מטופלת עוצרת הכול; Escape עוצר רק את הפקודה הרצה — לדעת מה זה מה חשוב`,
    },
    sections: [
      {
        heading: { en: `An Uncaught Error Is a Tripped Breaker`, he: `שגיאה לא מטופלת היא נתיך שקפץ` },
        body: {
          en: `An uncaught error was compared directly to a circuit breaker tripping — the whole program stops dead the instant it happens, with nothing after it running. This is exactly why \`try/except\` exists: to replace that all-or-nothing halt with a controlled message and continued execution, in the specific spots where it's warranted.`,
          he: `שגיאה לא מטופלת הושוותה ישירות לנתיך חשמלי שקפץ — כל התוכנית נעצרת מיידית ברגע שזה קורה, בלי שום דבר אחריה רץ. זו בדיוק הסיבה ש-\`try/except\` קיים: להחליף את העצירה הזו של הכול-או-כלום בהודעה מבוקרת והמשך ריצה, בנקודות הספציפיות שבהן זה מוצדק.`,
        },
      },
      {
        heading: { en: `Escape Interrupts the Command, Not the Session`, he: `Escape עוצר את הפקודה, לא את השיחה` },
        body: {
          en: `A recurring point of confusion: pressing Escape while Claude Code is mid-task feels like it should exit the whole session, but it doesn't — it only interrupts whatever single command or action is currently running. The session itself, and the project context within it, stays intact.`,
          he: `נקודת בלבול חוזרת: לחיצה על Escape בזמן ש-Claude Code באמצע משימה מרגישה כאילו היא אמורה לצאת מכל השיחה, אבל זה לא כך — היא רק עוצרת איזו שהיא פקודה או פעולה בודדת שרצה כרגע. השיחה עצמה, וההקשר של הפרויקט בתוכה, נשארים שלמים.`,
        },
      },
    ],
    principle: {
      en: `Not every stop is the same stop — knowing whether you halted the program or just the current step changes what you do next.`,
      he: `לא כל עצירה היא אותה עצירה — לדעת אם עצרת את התוכנית או רק את השלב הנוכחי משנה מה עושים אחר כך.`,
    },
  },
  {
    number: '07',
    title: { en: `Build a Sub-Agent`, he: `בונות סוכן-משנה` },
    subtitle: {
      en: `Creating a specialized agent through Claude Code, exactly as demonstrated live`,
      he: `יצירת סוכן מתמחה דרך Claude Code, בדיוק כפי שהודגם בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: open a fresh terminal window and start Claude Code in it, so a long-running task in another window isn't disturbed. Two: use the agent-creation command to begin defining a new sub-agent. Three: describe the specialization in plain language — for example, an agent whose job is finding current Instagram content trends. Four: when asked, decide whether the agent should be project-scoped (saved inside the current project's folder, usable only there) or global (saved in Claude's own home directory, usable from any project). Five: let it generate the agent's definition file, then call it by name to run it.`,
          he: `אחת: פתחי חלון טרמינל חדש והפעילי בו Claude Code, כדי שמשימה ארוכת-ריצה בחלון אחר לא תופרע. שתיים: השתמשי בפקודת יצירת-סוכן כדי להתחיל להגדיר סוכן-משנה חדש. שלוש: תארי את ההתמחות בשפה פשוטה — לדוגמה, סוכן שתפקידו למצוא טרנדים עכשוויים בתוכן באינסטגרם. ארבע: כשנשאלת, החליטי אם הסוכן צריך להיות ברמת הפרויקט (נשמר בתוך תיקיית הפרויקט הנוכחי, שמיש רק שם) או גלובלי (נשמר בתיקיית הבית של Claude עצמה, שמיש מכל פרויקט). חמש: תני לו ליצור את קובץ ההגדרה של הסוכן, ואז קראי לו בשם כדי להריץ אותו.`,
        },
      },
      {
        heading: { en: `The Scope Decision, Restated`, he: `החלטת ההיקף, מנוסחת מחדש` },
        body: {
          en: `The difference between the two scopes is entirely about where the definition file physically lives — inside one project's folder versus inside Claude's own central folder on the machine — which in turn determines whether the agent shows up as an option in every future project or only this one.`,
          he: `ההבדל בין שני ההיקפים הוא כולו על היכן קובץ ההגדרה חי פיזית — בתוך תיקייה של פרויקט אחד מול בתוך תיקיית המרכז של Claude עצמה על המכונה — מה שבתורו קובע אם הסוכן יופיע כאופציה בכל פרויקט עתידי או רק בזה.`,
        },
      },
    ],
    principle: {
      en: `A specialized agent is only as reusable as the folder it's saved in.`,
      he: `סוכן מתמחה שמיש מחדש רק כמו התיקייה שהוא שמור בה.`,
    },
  },
  {
    number: '08',
    title: { en: `Read the Plan Before You Say Yes`, he: `קראי את התכנון לפני שאת אומרת כן` },
    subtitle: {
      en: `An honest, self-aware moment — the instructor admits to skipping his own advice during a live demo`,
      he: `רגע כן ומודע לעצמו — המרצה מודה שהוא מדלג על העצה שלו במהלך הדגמה חיה`,
    },
    sections: [
      {
        heading: { en: `The Admission`, he: `ההודאה` },
        body: {
          en: `Right after teaching that a plan should be read carefully before approval, the demo itself skipped that step — approving the plan with a quick "yes" specifically because it was a low-stakes classroom exercise. The gap between the advice and the shortcut was named out loud, not hidden.`,
          he: `מיד אחרי ללמד שתכנון צריך להיקרא בקפידה לפני אישור, ההדגמה עצמה דילגה על השלב הזה — אישור התכנון ב-"כן" מהיר, ספציפית כי זה היה תרגיל כיתה בסיכון נמוך. הפער בין העצה לקיצור הדרך נאמר בקול, לא הוסתר.`,
        },
      },
      {
        heading: { en: `Why This Is Worth Noticing`, he: `למה זה שווה שימת לב` },
        body: {
          en: `A shortcut that's fine for a classroom demo on throwaway code is not fine for a real project someone depends on. The honest admission is itself the lesson: know which situation you're in before deciding whether to actually read the plan or just approve it.`,
          he: `קיצור דרך שבסדר בהדגמת כיתה על קוד לזריקה הוא לא בסדר בפרויקט אמיתי שמישהו תלוי בו. ההודאה הכנה היא עצמה השיעור: דעי באיזה מצב את נמצאת לפני שמחליטות אם באמת לקרוא את התכנון או סתם לאשר אותו.`,
        },
      },
    ],
    principle: {
      en: `Knowing the rule and knowing when you're cutting a corner are two different, both necessary, skills.`,
      he: `לדעת את הכלל ולדעת מתי חותכות פינה הן שתי מיומנויות שונות, ושתיהן דרושות.`,
    },
  },
  {
    number: '09',
    title: { en: `Naming a Shape So You Don't Repeat It`, he: `לתת שם לצורה כדי שלא תחזרי עליה` },
    subtitle: {
      en: `Unpacking and decorators are the same underlying idea, applied to different problems`,
      he: `Unpacking ו-decorators הם אותו רעיון בבסיס, מיושם על בעיות שונות`,
    },
    sections: [
      {
        heading: { en: `Unpacking Names the Pieces`, he: `Unpacking נותנת שם לחלקים` },
        body: {
          en: `\`*args\` unpacking takes a list or tuple and spreads its contents into separate positional values — \`total(*[1, 2, 3])\` behaves exactly like calling \`total(1, 2, 3)\`. Instead of manually pulling out each item, the star says: give each piece its own name, in order, all at once.`,
          he: `Unpacking עם \`*args\` לוקחת רשימה או tuple ופורשת את התוכן שלה לערכים מיקומיים נפרדים — \`total(*[1, 2, 3])\` מתנהגת בדיוק כמו קריאה ל-\`total(1, 2, 3)\`. במקום למשוך ידנית כל איבר, הכוכבית אומרת: תני לכל חלק את השם שלו, לפי הסדר, כולם בבת אחת.`,
        },
      },
      {
        heading: { en: `Decorators Name the Wrapping`, he: `Decorators נותנות שם לעטיפה` },
        body: {
          en: `A decorator takes an existing function and wraps it in another function that adds behavior before and after — without rewriting the original. It exists specifically because a function can't return itself from inside its own definition; the wrapper is the only way to add "before" and "after" around something already built. This is exactly what libraries like CrewAI lean on: instead of writing the machinery to define an agent from scratch, a decorator wraps a short, minimal description and handles everything else.`,
          he: `decorator לוקח פונקציה קיימת ועוטף אותה בפונקציה אחרת שמוסיפה התנהגות לפני ואחרי — בלי לשכתב את המקורית. הוא קיים ספציפית כי פונקציה לא יכולה להחזיר את עצמה מתוך ההגדרה של עצמה; העטיפה היא הדרך היחידה להוסיף "לפני" ו"אחרי" סביב משהו שכבר בנוי. זה בדיוק מה שספריות כמו CrewAI נשענות עליו: במקום לכתוב את המנגנון להגדרת סוכן מאפס, decorator עוטף תיאור קצר ומינימלי ומטפל בכל השאר.`,
        },
      },
    ],
    principle: {
      en: `Both patterns refuse to repeat structure — one names the pieces of something, the other names the wrapping around it.`,
      he: `שני הדפוסים מסרבים לחזור על מבנה — אחד נותן שם לחלקים של משהו, השני נותן שם לעטיפה סביבו.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית`,
    },
    sections: [
      {
        heading: { en: `On CLAUDE.md`, he: `על CLAUDE.md` },
        body: {
          en: `Why is CLAUDE.md re-read before every single prompt instead of only being consulted once at the start of a project? Answer: an agent has no persistent memory of its own — without re-injecting the project's context every time, it would forget the task's rules and goals exactly like a colleague who needs to be reminded constantly. The file is engineered memory, not a one-time reference.`,
          he: `למה CLAUDE.md נקרא מחדש לפני כל פרומפט בודד במקום להיבדק פעם אחת בלבד בתחילת הפרויקט? תשובה: לסוכן אין זיכרון מתמשך משלו — בלי להזריק מחדש את ההקשר של הפרויקט בכל פעם, הוא היה שוכח את הכללים והמטרות של המשימה בדיוק כמו עמיתה שצריך להזכיר לה כל הזמן. הקובץ הוא זיכרון מהונדס, לא הפניה חד-פעמית.`,
        },
      },
      {
        heading: { en: `On try/except`, he: `על try/except` },
        body: {
          en: `Why does wrapping an entire program in one giant try/except block make debugging harder, not easier? Answer: it lets every error pass silently no matter where it happened, so there's no way to localize what actually broke. Wrapping only the specific spots suspected of being fragile keeps errors traceable to where they occurred.`,
          he: `למה עטיפת תוכנית שלמה בבלוק try/except ענק אחד הופכת ניפוי באגים לקשה יותר, לא קל יותר? תשובה: זה נותן לכל שגיאה לעבור בשקט לא משנה איפה היא קרתה, כך שאין דרך למקם מה באמת נשבר. עטיפה רק של הנקודות הספציפיות שחושדים שהן שבירות שומרת על שגיאות ניתנות לאיתור לאיפה שהן קרו.`,
        },
      },
      {
        heading: { en: `On Thinking Levels`, he: `על רמות חשיבה` },
        body: {
          en: `When is it actually worth invoking "ultrathink" instead of the default reasoning level? Answer: for genuinely high-stakes moments — planning a large new project or hunting a serious, stubborn bug — not for routine requests, because the extra reasoning budget costs more tokens and more time without a matching benefit on easy tasks.`,
          he: `מתי באמת שווה לזמן "ultrathink" במקום רמת החשיבה שברירת המחדל? תשובה: לרגעים בעלי סיכון גבוה באמת — תכנון פרויקט חדש וגדול או ציד באג רציני ועיקש — לא לבקשות שגרתיות, כי תקציב החשיבה הנוסף עולה יותר tokens ויותר זמן בלי תועלת תואמת במשימות קלות.`,
        },
      },
      {
        heading: { en: `On Agent Scope`, he: `על היקף הסוכן` },
        body: {
          en: `A sub-agent is created and saved as project-scoped. Will it be available as an option in a different project started later? Answer: no — a project-scoped agent's definition file lives inside that one project's folder, so it's only usable there. Only a globally-scoped agent, saved in Claude's own central folder, shows up across every project.`,
          he: `סוכן-משנה נוצר ונשמר ברמת הפרויקט. האם הוא יהיה זמין כאופציה בפרויקט אחר שמתחיל מאוחר יותר? תשובה: לא — קובץ ההגדרה של סוכן ברמת-פרויקט חי בתוך תיקיית הפרויקט האחד ההוא, אז הוא שמיש רק שם. רק סוכן ברמה גלובלית, שנשמר בתיקיית המרכז של Claude עצמה, מופיע בכל פרויקט.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
