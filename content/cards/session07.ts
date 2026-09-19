import type { CardContent } from './types';

// Session 7 · Python (Module Session 4) · 19.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session07Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — the last function tools, then the pivot to the terminal and the first Git commit`,
      he: `מפתח של אחד-עשר כרטיסים — הכלים האחרונים של פונקציות, ואז המעבר לטרמינל והקומיט הראשון ב-Git`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The first half closes out functions with the tools that handle flexible input — \`*args\`, \`**kwargs\` — and the rule that functions don't leak into the outside world, with one notable exception. The second half is a deliberate pivot: away from Python syntax and into the terminal and Git, the environment every future AI agent will actually run inside.`,
          he: `החצי הראשון סוגר את נושא הפונקציות עם הכלים שמטפלים בקלט גמיש — \`*args\`, \`**kwargs\` — והכלל שפונקציות לא דולפות אל העולם החיצון, עם חריג בולט אחד. החצי השני הוא מעבר מכוון: הרחק מתחביר פייתון ואל תוך הטרמינל ו-Git, הסביבה שבה כל סוכן AI עתידי באמת ירוץ.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 explains why the pivot to the terminal happens at all — read it before Card 07, the actual git build. Card 06 covers the one place functions break their own rule.`,
          he: `כרטיס 01 מסביר למה המעבר לטרמינל קורה בכלל — כדאי לקרוא אותו לפני כרטיס 07, הבנייה בפועל של git. כרטיס 06 מכסה את המקום היחיד שבו פונקציות שוברות את הכלל של עצמן.`,
        },
      },
    ],
    principle: {
      en: `Every tool this session adds is either flexibility inside a function, or the ground floor for working with something outside Python entirely.`,
      he: `כל כלי שהמפגש הזה מוסיף הוא או גמישות בתוך פונקציה, או קומת הקרקע לעבודה עם משהו שמחוץ לפייתון לגמרי.`,
    },
  },
  {
    number: '01',
    title: { en: `One Shell, Every Operating System`, he: `מעטפת אחת, כל מערכת הפעלה` },
    subtitle: {
      en: `Why terminal literacy matters now — not to memorize commands, but because it's where agents like Claude actually work`,
      he: `למה אוריינות טרמינל חשובה עכשיו — לא כדי לשנן פקודות, אלא כי זה המקום שסוכנים כמו Claude באמת עובדים בו`,
    },
    sections: [
      {
        heading: { en: `The Reveal`, he: `החשיפה` },
        body: {
          en: `The terminal was introduced with a specific promise: every action an AI coding agent takes — writing files, running programs, connecting to services — happens inside this exact black window. Understanding what a terminal is isn't a detour from the AI-agent goal of the course; it's a prerequisite for supervising one.`,
          he: `הטרמינל הוצג עם הבטחה ספציפית: כל פעולה שסוכן קידוד AI מבצע — כתיבת קבצים, הרצת תוכניות, התחברות לשירותים — קורית בדיוק בתוך החלון השחור הזה. הבנת מה זה טרמינל היא לא סטייה מהיעד של סוכני AI בקורס — היא תנאי מקדים לפיקוח על סוכן כזה.`,
        },
      },
      {
        heading: { en: `Two Operating Systems, One Bridge`, he: `שתי מערכות הפעלה, גשר אחד` },
        body: {
          en: `Windows and Mac historically spoke different shell languages — Command Prompt on one side, a Unix-based shell on the other — down to which slash a file path uses. PowerShell was built specifically to close that gap: it understands Unix-style commands like \`clear\` alongside Windows ones, so the same instruction works regardless of which machine is running it.`,
          he: `Windows ו-Mac דיברו היסטורית שפות מעטפת שונות — Command Prompt בצד אחד, מעטפת מבוססת Unix בצד השני — עד כדי איזה קו נטוי משמש בנתיב קובץ. PowerShell נבנתה במיוחד כדי לסגור את הפער הזה: היא מבינה פקודות בסגנון Unix כמו \`clear\` לצד פקודות של Windows, כך שאותה הוראה עובדת לא משנה איזו מכונה מריצה אותה.`,
        },
      },
      {
        heading: { en: `Not a Vocabulary List`, he: `לא רשימת אוצר מילים` },
        body: {
          en: `The explicit framing was that memorizing terminal commands isn't the point — the point is recognizing the terminal as the shared ground where instructions actually execute, so that watching an agent work there is legible instead of opaque.`,
          he: `המסגור המפורש היה ששינון פקודות טרמינל הוא לא העניין — העניין הוא לזהות את הטרמינל כקרקע המשותפת שבה הוראות בפועל מתבצעות, כך שצפייה בסוכן עובד שם תהיה קריאה במקום אטומה.`,
        },
      },
    ],
    principle: {
      en: `You don't need to speak the terminal fluently — you need to recognize it as the room the agent is actually standing in.`,
      he: `לא צריך לדבר טרמינל בשטף — צריך לזהות אותו כחדר שהסוכן באמת עומד בו.`,
    },
  },
  {
    number: '02',
    title: { en: `Opening and Navigating a Terminal`, he: `פתיחה וניווט בטרמינל` },
    subtitle: {
      en: `Command Prompt vs. PowerShell vs. Mac Terminal, and the handful of commands used every time`,
      he: `Command Prompt מול PowerShell מול Terminal של Mac, וכמה הפקודות שמשתמשים בהן כל פעם`,
    },
    sections: [
      {
        heading: { en: `Finding It`, he: `למצוא אותו` },
        body: {
          en: `On Windows, searching "Command Prompt" opens the older shell; searching "PowerShell" (or just "Terminal") opens the newer, Unix-aware one. On Mac, Cmd+Space opens search, and typing "Terminal" finds it directly.`,
          he: `ב-Windows, חיפוש "Command Prompt" פותח את המעטפת הישנה יותר; חיפוש "PowerShell" (או סתם "Terminal") פותח את החדשה יותר, המודעת ל-Unix. ב-Mac, Cmd+Space פותח חיפוש, והקלדת "Terminal" מוצאת אותו ישירות.`,
        },
      },
      {
        heading: { en: `The Commands That Recur`, he: `הפקודות שחוזרות` },
        body: {
          en: `\`ls\` (Mac) or \`dir\` (Windows) lists everything in the current folder. \`cd\` followed by a folder name moves into it — using a forward slash on Mac, a backslash on Windows, which is exactly the kind of mismatch PowerShell papers over. \`clear\` (or \`cls\` on Command Prompt) wipes the screen without affecting anything that already ran.`,
          he: `\`ls\` (ב-Mac) או \`dir\` (ב-Windows) מציגה רשימה של הכול בתיקייה הנוכחית. \`cd\` ואחריה שם תיקייה עוברת לתוכה — עם קו נטוי קדימה ב-Mac, קו נטוי אחורה ב-Windows, בדיוק סוג אי-ההתאמה ש-PowerShell מגשרת עליו. \`clear\` (או \`cls\` ב-Command Prompt) מנקה את המסך בלי להשפיע על שום דבר שכבר רץ.`,
        },
      },
    ],
    principle: {
      en: `The terminal has no icons to click — every action is a sentence you type and mean.`,
      he: `לטרמינל אין אייקונים ללחוץ עליהם — כל פעולה היא משפט שמקלידים ומתכוונים אליו.`,
    },
  },
  {
    number: '03',
    title: { en: `Stage, Commit, Push`, he: `Stage, Commit, Push` },
    subtitle: {
      en: `The three-step rhythm behind saving a version in Git, traced through GitHub Desktop`,
      he: `הקצב בן שלושת השלבים שמאחורי שמירת גרסה ב-Git, נעקב דרך GitHub Desktop`,
    },
    sections: [
      {
        heading: { en: `The Sequence`, he: `הרצף` },
        body: {
          en: `A new or changed file shows up flagged, unstaged. Clicking the "+" moves it into staging — a holding area for changes about to be saved together. Writing a short message describing the change and clicking commit saves that staged snapshot as an official version. "Sync" or "push" then sends that saved version up to the cloud copy of the project.`,
          he: `קובץ חדש או משתנה מופיע מסומן, לא ב-staging. לחיצה על ה-"+" מעבירה אותו ל-staging — אזור אחזקה לשינויים שעומדים להישמר יחד. כתיבת הודעה קצרה שמתארת את השינוי ולחיצה על commit שומרת את התמונה שהיא ב-staging כגרסה רשמית. "Sync" או "push" אז שולחת את הגרסה השמורה הזו למעלה, לעותק הענן של הפרויקט.`,
        },
      },
      {
        heading: { en: `A Recurring Mistake`, he: `טעות חוזרת` },
        body: {
          en: `Clicking "commit" without writing a message first does nothing useful — an unlabeled version defeats the entire purpose, because the message is what makes a past version findable and meaningful later. The fix demonstrated live was simple: always write the message before clicking commit, not after.`,
          he: `לחיצה על "commit" בלי לכתוב הודעה קודם לא עושה כלום שימושי — גרסה בלי תווית מבטלת את כל המטרה, כי ההודעה היא מה שהופך גרסה מהעבר לניתנת-למציאה ולבעלת משמעות בהמשך. התיקון שהודגם בשידור חי היה פשוט: תמיד לכתוב את ההודעה לפני לחיצה על commit, לא אחרי.`,
        },
      },
    ],
    principle: {
      en: `A version without a message is a version you'll never be able to find again.`,
      he: `גרסה בלי הודעה היא גרסה שלעולם לא תצליחי למצוא שוב.`,
    },
  },
  {
    number: '04',
    title: { en: `What *args and **kwargs Actually Build`, he: `מה *args ו-**kwargs באמת בונות` },
    subtitle: {
      en: `One collects extra positional values into a tuple; the other turns named values into a dictionary`,
      he: `אחת אוספת ערכים מיקומיים נוספים ל-tuple; השנייה הופכת ערכים בעלי שם למילון`,
    },
    sections: [
      {
        heading: { en: `*args: No Limit on Position`, he: `*args: אין הגבלה על מיקום` },
        body: {
          en: `A function defined with \`*args\` accepts any number of positional values — two, three, ten — with no error about too many arguments. The name \`args\` isn't required; the asterisk is what matters. Internally, everything passed in lands together inside a single tuple.`,
          he: `פונקציה שמוגדרת עם \`*args\` מקבלת כל מספר של ערכים מיקומיים — שניים, שלושה, עשרה — בלי שגיאה על יותר מדי ארגומנטים. השם \`args\` לא נדרש; הכוכבית היא מה שחשוב. באופן פנימי, כל מה שהועבר נוחת יחד בתוך tuple יחיד.`,
        },
      },
      {
        heading: { en: `**kwargs: Named Values Become a Dictionary`, he: `**kwargs: ערכים בעלי שם הופכים למילון` },
        body: {
          en: `Calling a function with \`**kwargs\` in its definition using \`name="Aaron", role="Researcher"\` builds a dictionary automatically — each parameter name becomes a key, each value becomes that key's value. Printing the result shows exactly this: a plain dictionary, ready to be looped over or queried with \`.keys()\` and \`.values()\`, the same methods already known from Session 4.`,
          he: `קריאה לפונקציה עם \`**kwargs\` בהגדרה שלה, באמצעות \`name="Aaron", role="Researcher"\`, בונה מילון אוטומטית — כל שם פרמטר הופך למפתח, כל ערך הופך לערך של המפתח הזה. הדפסת התוצאה מראה בדיוק את זה: מילון פשוט, מוכן לעבור עליו בלולאה או להישאל עם \`.keys()\` ו-\`.values()\`, אותן מתודות שכבר מוכרות ממפגש 4.`,
        },
      },
    ],
    principle: {
      en: `The asterisk isn't decoration — it's an instruction to collect, not just accept.`,
      he: `הכוכבית היא לא קישוט — היא הוראה לאסוף, לא רק לקבל.`,
    },
  },
  {
    number: '05',
    title: { en: `Why Staging Exists`, he: `למה יש staging` },
    subtitle: {
      en: `Skipping straight to commit feels faster — until unrelated changes get bundled into one version you can't cleanly undo`,
      he: `לדלג ישר ל-commit מרגיש מהיר יותר — עד שינויים לא קשורים נארזים יחד לגרסה אחת שאי אפשר לבטל בנקיון`,
    },
    sections: [
      {
        heading: { en: `The Bundling Problem`, he: `בעיית האריזה` },
        body: {
          en: `Working on both a project's front end (what a user sees and clicks) and its back end (what happens behind a button press) at the same time and saving everything as one version means a later "undo one version" can't separate them — rolling back grabs both, even if only one was actually broken.`,
          he: `עבודה גם על ה-front end של פרויקט (מה שמשתמשת רואה ולוחצת עליו) וגם על ה-back end שלו (מה שקורה מאחורי לחיצת כפתור) באותו זמן, ושמירת הכול כגרסה אחת, אומרת ש"ביטול גרסה אחת" מאוחר יותר לא יכול להפריד ביניהם — חזרה אחורה תופסת את שניהם, גם אם רק אחד היה בפועל שבור.`,
        },
      },
      {
        heading: { en: `Staging as Deliberate Grouping`, he: `Staging כקיבוץ מכוון` },
        body: {
          en: `Staging exists to let a version mean something specific — deciding, file by file, which changes belong together in this save, instead of every change in the working directory landing in the same undifferentiated blob. A meaningful version is one that can be rolled back to without collateral damage.`,
          he: `Staging קיים כדי לתת לגרסה משמעות ספציפית — להחליט, קובץ אחר קובץ, אילו שינויים שייכים יחד בשמירה הזו, במקום שכל שינוי בתיקיית העבודה ינחת באותו גוש לא-מובחן. גרסה בעלת משמעות היא גרסה שאפשר לחזור אליה בלי נזק אגבי.`,
        },
      },
    ],
    principle: {
      en: `A version should answer one question. If it answers three, it isn't a version you can trust to undo.`,
      he: `גרסה צריכה לענות על שאלה אחת. אם היא עונה על שלוש, זו לא גרסה שאפשר לסמוך עליה לביטול.`,
    },
  },
  {
    number: '06',
    title: { en: `The List Exception to "Inside Stays Inside"`, he: `החריג של רשימה ל"מה שבפנים נשאר בפנים"` },
    subtitle: {
      en: `Every other type respects the local/global boundary — lists quietly don't`,
      he: `כל סוג אחר מכבד את הגבול בין local ל-global — רשימות, בשקט, לא`,
    },
    sections: [
      {
        heading: { en: `The Rule, Restated`, he: `הכלל, מנוסח מחדש` },
        body: {
          en: `Reassigning a variable inside a function — even one with the same name as something outside it — does not change the outside value, unless the result is explicitly returned and reassigned. The lecturer's phrase for this: functions behave like a sandbox, protecting the outside world from accidental interference by default.`,
          he: `הצבה מחדש של משתנה בתוך פונקציה — אפילו אחד עם אותו שם כמו משהו מחוצה לה — לא משנה את הערך שבחוץ, אלא אם התוצאה מוחזרת ומוצבת מחדש במפורש. הביטוי של המרצה לזה: פונקציות מתנהגות כמו sandbox, ומגנות על העולם החיצון מהתערבות מקרית כברירת מחדל.`,
        },
      },
      {
        heading: { en: `Where It Breaks`, he: `איפה זה שובר` },
        body: {
          en: `A function that calls \`.pop()\` on a list passed into it does mutate that list outside the function — no return statement needed. Demonstrated live: a list of \`[1, 2, 3]\` passed to a function that pops its last item came back changed to \`[1, 2]\`, contradicting the rule just established. This happens because a list, unlike a number or a string, is mutable — the function isn't given a private copy, it's given a way to reach the same object.`,
          he: `פונקציה שקוראת ל-\`.pop()\` על רשימה שהועברה לתוכה כן משנה את הרשימה הזו מחוץ לפונקציה — בלי צורך ב-\`return\`. הודגם בשידור חי: רשימה של \`[1, 2, 3]\` שהועברה לפונקציה שמוציאה את האיבר האחרון שלה חזרה שונתה ל-\`[1, 2]\`, בסתירה לכלל שזה עתה נקבע. זה קורה כי רשימה, בניגוד למספר או למחרוזת, ניתנת לשינוי — הפונקציה לא מקבלת עותק פרטי, היא מקבלת דרך להגיע לאותו אובייקט.`,
        },
      },
      {
        heading: { en: `A Keyword to Avoid`, he: `מילת מפתח שכדאי להימנע ממנה` },
        body: {
          en: `There is a \`global\` keyword that lets a function directly overwrite an outside variable without returning anything. It was taught only to be immediately discouraged — explicitly called something that clutters code and invites bugs, worth knowing exists but not worth reaching for.`,
          he: `יש מילת מפתח \`global\` שנותנת לפונקציה לדרוס ישירות משתנה חיצוני בלי להחזיר כלום. היא נלמדה רק כדי להיות מיד לא-מומלצת — כונתה במפורש דבר שמבלבל קוד ומזמין באגים, שווה לדעת שהיא קיימת אבל לא שווה להושיט אליה יד.`,
        },
      },
    ],
    principle: {
      en: `"Inside doesn't change outside" is the default, not a law of physics — mutable objects are the loophole.`,
      he: `"מה שבפנים לא משנה את מה שבחוץ" הוא ברירת המחדל, לא חוק פיזיקה — אובייקטים ניתנים-לשינוי הם הפרצה.`,
    },
  },
  {
    number: '07',
    title: { en: `Your First Commit, Start to Finish`, he: `ה-Commit הראשון שלך, מתחילה ועד סוף` },
    subtitle: {
      en: `Creating a repository, making a change, and pushing it — exactly as demonstrated live`,
      he: `יצירת repository, ביצוע שינוי, ודחיפה שלו — בדיוק כפי שהודגם בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: create a new, empty folder for the project and open it in the editor. Two: in GitHub Desktop, choose "create a repository" pointed at that same folder — this initializes version tracking for it. Three: create or edit a file inside the folder. Four: back in GitHub Desktop, the changed file appears flagged; click "+" to stage it. Five: write a short, specific commit message describing the change. Six: click commit. Seven: click sync (or push) to send the saved version to the cloud copy of the repository.`,
          he: `אחת: צרי תיקייה חדשה וריקה לפרויקט ופתחי אותה בעורך. שתיים: ב-GitHub Desktop, בחרי "create a repository" שמפנה לאותה תיקייה — זה מפעיל מעקב גרסאות עבורה. שלוש: צרי או ערכי קובץ בתוך התיקייה. ארבע: בחזרה ל-GitHub Desktop, הקובץ שהשתנה מופיע מסומן; לחצי "+" כדי להעביר אותו ל-staging. חמש: כתבי הודעת commit קצרה וספציפית שמתארת את השינוי. שש: לחצי commit. שבע: לחצי sync (או push) כדי לשלוח את הגרסה השמורה לעותק הענן של ה-repository.`,
        },
      },
      {
        heading: { en: `The Repeat, on Purpose`, he: `החזרה, בכוונה` },
        body: {
          en: `The full sequence was demonstrated three separate times with three different files, each time slightly faster than the last — not because any step could be skipped, but because the rhythm of stage, message, commit, push is the actual skill being built, more than any single click.`,
          he: `הרצף המלא הודגם שלוש פעמים נפרדות עם שלושה קבצים שונים, בכל פעם מעט יותר מהר מהקודמת — לא כי אפשר לדלג על שלב כלשהו, אלא כי הקצב של stage, הודעה, commit, push הוא הכישור האמיתי שנבנה, יותר מכל לחיצה בודדת.`,
        },
      },
    ],
    principle: {
      en: `The clicks are simple. The discipline of doing them in order, every time, is the actual lesson.`,
      he: `הלחיצות פשוטות. המשמעת לעשות אותן בסדר, בכל פעם, היא השיעור האמיתי.`,
    },
  },
  {
    number: '08',
    title: { en: `Lambda, map, and filter — Code an Agent Writes`, he: `Lambda, map ו-filter — קוד שסוכן כותב` },
    subtitle: {
      en: `Shorthand worth reading fluently, since generated code reaches for it constantly`,
      he: `קיצור שכדאי לקרוא בשטף, כי קוד מיוצר מושיט אליו יד כל הזמן`,
    },
    sections: [
      {
        heading: { en: `A Function in One Line`, he: `פונקציה בשורה אחת` },
        body: {
          en: `\`lambda n: n * n\` is functionally identical to a full \`def square(n): return n * n\` — same input, same output, just collapsed to one expression with no name of its own. The tradeoff was named directly: lambdas only work for short, simple logic; anything requiring multiple steps needs a real \`def\`.`,
          he: `\`lambda n: n * n\` זהה מבחינה פונקציונלית ל-\`def square(n): return n * n\` מלאה — אותו קלט, אותו פלט, רק קרוס לביטוי אחד בלי שם משלו. הפשרה צוינה במפורש: lambda עובדת רק עבור היגיון קצר ופשוט; כל דבר שדורש כמה שלבים צריך \`def\` אמיתית.`,
        },
      },
      {
        heading: { en: `map: Apply to Every Item`, he: `map: החלה על כל איבר` },
        body: {
          en: `\`map(square, numbers)\` runs a function against every item in a collection and returns the transformed results — wrapping the output in \`list()\` makes it visible, since \`map\` on its own returns a memory-address object rather than a printable list.`,
          he: `\`map(square, numbers)\` מריצה פונקציה כנגד כל איבר באוסף ומחזירה את התוצאות שעברו טרנספורמציה — עטיפת הפלט ב-\`list()\` הופכת אותו לנראה, כי \`map\` לבדה מחזירה אובייקט כתובת-זיכרון ולא רשימה שאפשר להדפיס.`,
        },
      },
      {
        heading: { en: `filter: Keep Only What Passes`, he: `filter: שמור רק את מה שעובר` },
        body: {
          en: `\`filter(is_even, numbers)\` requires a function that returns \`True\` or \`False\` for each item — it keeps only the items where the answer was \`True\`, discarding the rest, which is a fundamentally different job than \`map\`'s job of transforming every item.`,
          he: `\`filter(is_even, numbers)\` דורשת פונקציה שמחזירה \`True\` או \`False\` עבור כל איבר — היא שומרת רק את האיברים שהתשובה עבורם הייתה \`True\`, וזורקת את השאר, מה שהוא תפקיד שונה מהותית מהתפקיד של \`map\` לטרנספורם כל איבר.`,
        },
      },
    ],
    principle: {
      en: `Recognizing lambda, map, and filter on sight is what lets you read a generated function instead of just trusting it.`,
      he: `לזהות lambda, map ו-filter במבט אחד זה מה שנותן לך לקרוא פונקציה מיוצרת במקום סתם לסמוך עליה.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Functions Sandbox by Default`, he: `למה פונקציות פועלות כ-sandbox כברירת מחדל` },
    subtitle: {
      en: `The protective idea behind local scope — and why staging in Git is the same idea wearing a different name`,
      he: `הרעיון ההגנתי שמאחורי local scope — ולמה staging ב-Git הוא אותו רעיון בשם אחר`,
    },
    sections: [
      {
        heading: { en: `Isolation Is the Feature`, he: `בידוד הוא התכונה` },
        body: {
          en: `A function that could freely rewrite any variable in the code that calls it would make large programs unmanageable — every function call would carry the risk of quietly corrupting state defined somewhere else entirely. Local scope exists so a function can be reasoned about on its own, without tracking every other line in the program that happens to share a variable name.`,
          he: `פונקציה שהייתה יכולה לשכתב באופן חופשי כל משתנה בקוד שקורא לה הייתה הופכת תוכניות גדולות לבלתי-ניתנות-לניהול — כל קריאה לפונקציה הייתה נושאת סיכון לקלקל בשקט מצב שהוגדר במקום אחר לגמרי. Local scope קיים כדי שאפשר יהיה לנמק על פונקציה בפני עצמה, בלי לעקוב אחרי כל שורה אחרת בתוכנית שבמקרה חולקת שם משתנה.`,
        },
      },
      {
        heading: { en: `The Same Idea, Different Tool`, he: `אותו רעיון, כלי שונה` },
        body: {
          en: `Git's staging area does the same job at a different scale: it stops an unrelated change elsewhere in the project from accidentally being swept into a version about something specific. Both mechanisms exist to answer the same question — what, exactly, is allowed to affect what — and both default to isolation until you deliberately opt out.`,
          he: `אזור ה-staging של Git עושה את אותה עבודה בקנה מידה שונה: הוא עוצר שינוי לא קשור במקום אחר בפרויקט מלהיסחף בטעות לתוך גרסה שעוסקת במשהו ספציפי. שני המנגנונים קיימים כדי לענות על אותה שאלה — מה, בדיוק, מותר לו להשפיע על מה — ושניהם ברירת המחדל שלהם היא בידוד עד שיוצאים ממנו בכוונה.`,
        },
      },
    ],
    principle: {
      en: `Isolation by default, exceptions by choice — the same design decision, over and over, at every scale of the craft.`,
      he: `בידוד כברירת מחדל, חריגים בבחירה — אותה החלטת עיצוב, שוב ושוב, בכל קנה מידה של המלאכה.`,
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
        heading: { en: `On *args`, he: `על *args` },
        body: {
          en: `A function is defined with \`*args\` and called with five separate values. What type does \`args\` hold inside the function, and would the call have failed with a plain \`def f(a, b):\`? Answer: \`args\` holds a tuple containing all five values. The plain two-parameter version would raise an error — it accepts exactly two positional arguments, not five.`,
          he: `פונקציה מוגדרת עם \`*args\` ונקראת עם חמישה ערכים נפרדים. איזה טיפוס \`args\` מחזיקה בתוך הפונקציה, והאם הקריאה הייתה נכשלת עם \`def f(a, b):\` פשוטה? תשובה: \`args\` מחזיקה tuple שמכיל את כל חמשת הערכים. הגרסה הפשוטה בעלת שני פרמטרים הייתה זורקת שגיאה — היא מקבלת בדיוק שני ארגומנטים מיקומיים, לא חמישה.`,
        },
      },
      {
        heading: { en: `On Local vs. Global`, he: `על local מול global` },
        body: {
          en: `\`x = 50\` outside a function; inside a function, \`x\` is reassigned to \`2\` and returned without capturing the result at the call site. What does \`x\` equal after the function runs, and why? Answer: \`x\` is still \`50\`. The reassignment happened to the local copy inside the function's own scope; without explicitly capturing the returned value (\`x = my_function(x)\`), the outside variable is untouched.`,
          he: `\`x = 50\` מחוץ לפונקציה; בתוך פונקציה, \`x\` מוצבת מחדש ל-\`2\` ומוחזרת בלי לתפוס את התוצאה בנקודת הקריאה. למה \`x\` שווה אחרי שהפונקציה רצה, ולמה? תשובה: \`x\` עדיין \`50\`. ההצבה מחדש קרתה לעותק המקומי בתוך ה-scope של הפונקציה עצמה; בלי לתפוס במפורש את הערך המוחזר (\`x = my_function(x)\`), המשתנה החיצוני לא נגע בו.`,
        },
      },
      {
        heading: { en: `On the List Exception`, he: `על החריג של רשימה` },
        body: {
          en: `Why does calling \`.pop()\` on a list inside a function change that list outside the function, when reassigning a number inside a function doesn't change the number outside? Answer: a list is mutable, so the function receives a reference to the same object rather than an independent copy — calling a method that mutates it in place affects everyone holding that reference. A number is immutable, so "changing" it inside a function only ever creates a new local value.`,
          he: `למה קריאה ל-\`.pop()\` על רשימה בתוך פונקציה משנה את הרשימה מחוץ לפונקציה, כאשר הצבה מחדש של מספר בתוך פונקציה לא משנה את המספר בחוץ? תשובה: רשימה ניתנת לשינוי, אז הפונקציה מקבלת הפניה לאותו אובייקט ולא עותק עצמאי — קריאה למתודה ששונה אותה במקום משפיעה על כל מי שמחזיק בהפניה הזו. מספר אינו ניתן לשינוי, אז "לשנות" אותו בתוך פונקציה תמיד רק יוצר ערך מקומי חדש.`,
        },
      },
      {
        heading: { en: `On Staging`, he: `על staging` },
        body: {
          en: `Why not skip staging entirely and commit every change to the working directory in one step? Answer: staging lets related changes be grouped into one meaningful, labeled version while unrelated changes are saved separately — skipping it bundles everything currently changed into a single version, making it impossible to later undo one piece without also undoing the rest.`,
          he: `למה לא לדלג לגמרי על staging ולעשות commit לכל שינוי בתיקיית העבודה בצעד אחד? תשובה: staging נותן לשינויים קשורים להתקבץ לגרסה אחת בעלת משמעות ותווית, בעוד ששינויים לא קשורים נשמרים בנפרד — דילוג עליו אורז את כל מה שהשתנה כרגע לגרסה אחת, מה שהופך לבלתי אפשרי לבטל אחר כך חלק אחד בלי לבטל גם את השאר.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
