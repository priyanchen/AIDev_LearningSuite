import type { CardContent } from './types';

// Session 8 · Python (Module Session 5) · 26.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session08Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — from an empty folder to a public GitHub repository, and the discipline of branches`,
      he: `מפתח של אחד-עשר כרטיסים — מתיקייה ריקה ועד repository ציבורי ב-GitHub, ומשמעת הענפים`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `A full session on Git and GitHub, continuing from Session 7's opening. It walks the complete arc from a brand-new folder to a public repository visible on the web, then goes one level deeper into branches — working in isolation before merging into the version a client would actually see.`,
          he: `מפגש שלם על Git ו-GitHub, שממשיך את הפתיחה ממפגש 7. הוא הולך על הקשת המלאה מתיקייה חדשה לגמרי ועד repository ציבורי שנראה באינטרנט, ואז יורד רמה עמוקה יותר לענפים — עבודה מבודדת לפני מיזוג לתוך הגרסה שלקוח היה באמת רואה.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 07 is the full first-repository playbook, start to finish. Card 01 explains the reasoning behind branches before Card 07 gets there — read it first if branches feel like an unnecessary extra step.`,
          he: `כרטיס 07 הוא ספר המתכונים המלא ל-repository הראשון, מתחילה ועד סוף. כרטיס 01 מסביר את ההיגיון שמאחורי ענפים לפני שכרטיס 07 מגיע לשם — כדאי לקרוא אותו קודם אם ענפים מרגישים כמו שלב נוסף מיותר.`,
        },
      },
    ],
    principle: {
      en: `Every Git command this session teaches answers the same question: what is allowed to reach the version the world sees, and when?`,
      he: `כל פקודת Git שהמפגש הזה מלמד עונה על אותה שאלה: מה מותר לו להגיע לגרסה שהעולם רואה, ומתי?`,
    },
  },
  {
    number: '01',
    title: { en: `Isolate Before You Merge`, he: `בודדי לפני שאת ממזגת` },
    subtitle: {
      en: `Why real work happens on a branch, never directly on main`,
      he: `למה עבודה אמיתית קורית על ענף, אף פעם לא ישירות על main`,
    },
    sections: [
      {
        heading: { en: `main Is What the Client Sees`, he: `main זה מה שהלקוח רואה` },
        body: {
          en: `The main branch was named directly as the one that will eventually connect to production — to what a client or user actually sees. Updating it directly means every half-finished change is instantly visible to whoever depends on it.`,
          he: `הענף main כונה במפורש כזה שיתחבר בסופו של דבר לפרודקשן — למה שלקוח או משתמש באמת רואה. עדכון שלו ישירות אומר שכל שינוי חצי-גמור נראה מיד למי שתלוי בו.`,
        },
      },
      {
        heading: { en: `A Branch Is a Safe Room`, he: `ענף הוא חדר בטוח` },
        body: {
          en: `Creating a new branch before starting risky or experimental work isolates that work completely — main stays untouched until the new work is verified to actually function. Only then does it get merged back in, deliberately, as its own step.`,
          he: `יצירת ענף חדש לפני התחלת עבודה מסוכנת או ניסיונית מבודדת את העבודה הזו לגמרי — main נשאר בלי לגעת בו עד שהעבודה החדשה מאומתת שהיא באמת פועלת. רק אז היא ממוזגת חזרה, בכוונה, כשלב משלה.`,
        },
      },
    ],
    principle: {
      en: `If a mistake could reach the client, it shouldn't have a direct path there.`,
      he: `אם טעות יכולה להגיע ללקוח, לא צריך שתהיה לה דרך ישירה לשם.`,
    },
  },
  {
    number: '02',
    title: { en: `Connecting the Editor to GitHub`, he: `חיבור העורך ל-GitHub` },
    subtitle: {
      en: `The one-time OAuth sign-in that links local Git to a cloud account`,
      he: `כניסת ה-OAuth החד-פעמית שמקשרת Git מקומי לחשבון ענן`,
    },
    sections: [
      {
        heading: { en: `Publish Branch Triggers It`, he: `Publish Branch מפעילה את זה` },
        body: {
          en: `The first time a project is published from the editor, it opens a browser window asking for sign-in — through Google or another provider — using the same email the local Git username was set up with. Approving it hands the editor permission to push on the user's behalf.`,
          he: `בפעם הראשונה שפרויקט מתפרסם מהעורך, הוא פותח חלון דפדפן שמבקש כניסה — דרך Google או ספק אחר — עם אותו אימייל שאיתו הוגדר שם המשתמש המקומי ב-Git. אישור זה נותן לעורך הרשאה לדחוף בשם המשתמשת.`,
        },
      },
      {
        heading: { en: `Public or Private, Decided Once`, he: `ציבורי או פרטי, נקבע פעם אחת` },
        body: {
          en: `Publishing asks one more question: public, visible to anyone, or private, visible only to the account owner and anyone explicitly given access. This choice can be revisited later — it isn't permanent — but it's asked at the moment a repository first reaches the cloud.`,
          he: `הפרסום שואל עוד שאלה אחת: ציבורי, נראה לכל אחד, או פרטי, נראה רק לבעלת החשבון ולמי שקיבל הרשאה מפורשת. אפשר לחזור לבחירה הזו מאוחר יותר — היא לא סופית — אבל היא נשאלת ברגע שה-repository מגיע לראשונה לענן.`,
        },
      },
    ],
    principle: {
      en: `The sign-in happens once — every push after it rides on that same permission.`,
      he: `הכניסה קורית פעם אחת — כל push אחריה רוכב על אותה הרשאה.`,
    },
  },
  {
    number: '03',
    title: { en: `The Full Pipeline: Folder to Cloud`, he: `הצנרת המלאה: מתיקייה לענן` },
    subtitle: {
      en: `Working directory → staging → local commit → push — the arc Session 7 started, completed`,
      he: `תיקיית עבודה ← staging ← commit מקומי ← push — הקשת שמפגש 7 התחיל, מושלמת`,
    },
    sections: [
      {
        heading: { en: `Three Local Stages, One Remote Step`, he: `שלושה שלבים מקומיים, שלב מרוחק אחד` },
        body: {
          en: `A changed file starts in the working directory (the project folder itself), moves to staging when selected for the next save, and becomes a permanent local version at commit — all three of these happen entirely on the machine, with zero dependence on the internet.`,
          he: `קובץ שהשתנה מתחיל בתיקיית העבודה (תיקיית הפרויקט עצמה), עובר ל-staging כשהוא נבחר לשמירה הבאה, והופך לגרסה מקומית קבועה ב-commit — כל שלושת השלבים האלה קורים לגמרי על המכונה, בלי שום תלות באינטרנט.`,
        },
      },
      {
        heading: { en: `Push Is the Only Step That Leaves the Machine`, he: `Push הוא השלב היחיד שעוזב את המכונה` },
        body: {
          en: `Only push sends a committed version up to the cloud copy of the repository — until that happens, a teammate on another machine has no way to see the work, no matter how many local commits exist. The whole local pipeline exists to prepare a clean, labeled version worth sending.`,
          he: `רק push שולחת גרסה שעברה commit למעלה, לעותק הענן של ה-repository — עד שזה קורה, שותפה לצוות על מכונה אחרת אין לה שום דרך לראות את העבודה, לא משנה כמה commits מקומיים קיימים. כל הצנרת המקומית קיימת כדי להכין גרסה נקייה ובעלת תווית ששווה לשלוח.`,
        },
      },
    ],
    principle: {
      en: `Local commits are drafts you're free to make messy — push is the moment they become someone else's problem too.`,
      he: `commits מקומיים הם טיוטות שמותר לך לעשות מבולגנות — push הוא הרגע שבו הן הופכות גם לבעיה של מישהי אחרת.`,
    },
  },
  {
    number: '04',
    title: { en: `Reading a Diff`, he: `קריאת Diff` },
    subtitle: {
      en: `What the red and green lines actually mean — and the classic mistake of trying to edit them`,
      he: `מה השורות האדומות והירוקות באמת אומרות — והטעות הקלאסית של לנסות לערוך אותן`,
    },
    sections: [
      {
        heading: { en: `Minus Removed, Plus Added`, he: `מינוס הוסר, פלוס נוסף` },
        body: {
          en: `Clicking into any past commit shows exactly what changed in it: a line marked with a minus in red is what used to be there and is now gone; a line marked with a plus in green is what's new. Nothing else in the file is shown — only the difference, which is why this view is called a diff.`,
          he: `לחיצה על כל commit מהעבר מראה בדיוק מה השתנה בו: שורה מסומנת במינוס באדום היא מה שהיה שם פעם ועכשיו נעלם; שורה מסומנת בפלוס בירוק היא מה שחדש. שום דבר אחר בקובץ לא מוצג — רק ההבדל, ולכן התצוגה הזו נקראת diff.`,
        },
      },
      {
        heading: { en: `It's a Photograph, Not a Text Box`, he: `זו תמונה, לא תיבת טקסט` },
        body: {
          en: `A recurring mistake: trying to click into the diff view and edit the code shown there directly. It doesn't work, because a diff isn't the live file — it's a frozen record of one past change. To actually edit code, close the diff and go back to the real file in the working directory.`,
          he: `טעות חוזרת: לנסות ללחוץ לתוך תצוגת ה-diff ולערוך שם את הקוד ישירות. זה לא עובד, כי diff הוא לא הקובץ החי — הוא תיעוד קפוא של שינוי אחד מהעבר. כדי באמת לערוך קוד, סוגרים את ה-diff וחוזרים לקובץ האמיתי בתיקיית העבודה.`,
        },
      },
    ],
    principle: {
      en: `A diff answers "what changed," never "let me change it here."`,
      he: `diff עונה על "מה השתנה", אף פעם לא על "תני לי לשנות את זה כאן."`,
    },
  },
  {
    number: '05',
    title: { en: `Sync vs. Separate Push and Pull`, he: `Sync מול הפרדה בין Push ל-Pull` },
    subtitle: {
      en: `Sync is safe alone — with collaborators, deciding what to pull in deserves its own moment`,
      he: `Sync בטוח לבד — עם שותפים, ההחלטה מה למשוך פנימה מגיעה לה רגע משלה`,
    },
    sections: [
      {
        heading: { en: `Sync Does Both at Once`, he: `Sync עושה את שניהם בבת אחת` },
        body: {
          en: `A single "sync" button pushes local commits up and pulls any remote changes down, in one action. Working alone, this is harmless — there's nothing new in the cloud that didn't come from the same person's own machine.`,
          he: `כפתור "sync" אחד דוחף commits מקומיים למעלה ומושך כל שינוי מרוחק למטה, בפעולה אחת. בעבודה לבד, זה תמים — אין שום דבר חדש בענן שלא הגיע מהמחשב של אותו אדם עצמו.`,
        },
      },
      {
        heading: { en: `With Others, It's Worth Splitting`, he: `עם אחרים, שווה לפצל` },
        body: {
          en: `Working with a collaborator, pulling automatically means silently absorbing whatever they changed — which may be exactly what's wanted, or may collide with work still in progress locally. Push and pull can be triggered separately for exactly this reason: to decide, deliberately, when someone else's changes should land.`,
          he: `בעבודה עם שותפה, משיכה אוטומטית אומרת ספיגה שקטה של כל מה ששינתה — מה שיכול להיות בדיוק מה שרוצים, או להתנגש עם עבודה שעדיין בתהליך מקומית. push ו-pull אפשר להפעיל בנפרד בדיוק מהסיבה הזו: כדי להחליט, בכוונה, מתי השינויים של מישהי אחרת אמורים לנחות.`,
        },
      },
    ],
    principle: {
      en: `Convenience and control trade off — sync favors the first, split push/pull favors the second.`,
      he: `נוחות ושליטה מתפשרות זו על זו — sync מעדיף את הראשונה, פיצול push/pull מעדיף את השנייה.`,
    },
  },
  {
    number: '06',
    title: { en: `Fork Isn't Clone, and License Isn't Optional`, he: `Fork זה לא Clone, ולייסנס זה לא אופציונלי` },
    subtitle: {
      en: `Two habits worth building before reusing someone else's project`,
      he: `שני הרגלים ששווה לבנות לפני שימוש חוזר בפרויקט של מישהו אחר`,
    },
    sections: [
      {
        heading: { en: `Forking Is Its Own Copy, Not a Live Mirror`, he: `Fork הוא עותק משלו, לא מראה חי` },
        body: {
          en: `Forking someone else's public repository creates a personal, independent copy — it does not automatically update when the original changes. If the original author fixes a bug or adds a feature, that update has to be deliberately pulled in; nothing arrives on its own.`,
          he: `Fork של repository ציבורי של מישהו אחר יוצר עותק אישי ועצמאי — הוא לא מתעדכן אוטומטית כשהמקור משתנה. אם המחברת המקורית מתקנת באג או מוסיפה פיצ'ר, העדכון הזה צריך להימשך פנימה בכוונה; שום דבר לא מגיע לבד.`,
        },
      },
      {
        heading: { en: `Check the License Before Getting Excited`, he: `בדקי את הלייסנס לפני שמתלהבות` },
        body: {
          en: `Before reusing any project found online, the explicit habit taught was: scroll to the license file first, before anything else. An open license generally means free reuse with no hidden obligations; the absence of one, or restrictive terms, means the excitement about a great-looking project needs to wait.`,
          he: `לפני שימוש חוזר בכל פרויקט שנמצא באינטרנט, ההרגל שנלמד במפורש היה: לגלול לקובץ הלייסנס קודם, לפני כל דבר אחר. לייסנס פתוח בדרך כלל אומר שימוש חוזר חופשי בלי התחייבויות נסתרות; היעדר לייסנס, או תנאים מגבילים, אומר שההתלהבות מפרויקט שנראה מעולה צריכה לחכות.`,
        },
      },
    ],
    principle: {
      en: `Excitement about someone else's code is not the same as permission to use it.`,
      he: `התלהבות מקוד של מישהו אחר היא לא אותו דבר כמו הרשאה להשתמש בו.`,
    },
  },
  {
    number: '07',
    title: { en: `From Empty Folder to Public Repository`, he: `מתיקייה ריקה ל-repository ציבורי` },
    subtitle: {
      en: `The complete first-time flow, exactly as demonstrated live`,
      he: `הזרימה המלאה בפעם הראשונה, בדיוק כפי שהודגמה בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: create a brand-new, empty folder — never inside an existing project's folder, or Git will try to attach to the nearest repository it finds instead. Two: open it in the editor and confirm the security notice. Three: initialize a repository for it. Four: create a file and write real code in it. Five: stage the changed file, write a commit message, and commit. Six: click "Publish Branch." Seven: choose public or private. Eight: the first time only, sign in through the browser with the same email used for the Git username.`,
          he: `אחת: צרי תיקייה חדשה לגמרי וריקה — אף פעם לא בתוך תיקייה של פרויקט קיים, אחרת Git ינסה להתחבר ל-repository הקרוב ביותר שהוא מוצא במקום זאת. שתיים: פתחי אותה בעורך ואשרי את הודעת האבטחה. שלוש: אתחלי repository עבורה. ארבע: צרי קובץ וכתבי בו קוד אמיתי. חמש: העבירי את הקובץ שהשתנה ל-staging, כתבי הודעת commit, ובצעי commit. שש: לחצי על "Publish Branch". שבע: בחרי ציבורי או פרטי. שמונה: רק בפעם הראשונה, היכנסי דרך הדפדפן עם אותו אימייל ששימש לשם המשתמש ב-Git.`,
        },
      },
      {
        heading: { en: `Confirming It Worked`, he: `לוודא שזה עבד` },
        body: {
          en: `A small cloud icon appearing next to the branch name is the signal that everything is synced with GitHub — the project's page on the web now shows the same files, the same commit history, and a graph of activity over time, visible to anyone if public, or only to the account owner if private.`,
          he: `אייקון ענן קטן שמופיע ליד שם הענף הוא האות שהכול מסונכרן עם GitHub — עמוד הפרויקט באינטרנט מציג עכשיו את אותם קבצים, אותה היסטוריית commits, וגרף פעילות לאורך זמן, גלוי לכל אחד אם ציבורי, או רק לבעלת החשבון אם פרטי.`,
        },
      },
    ],
    principle: {
      en: `Every real project starts from exactly this sequence — nothing about it changes once the project gets bigger.`,
      he: `כל פרויקט אמיתי מתחיל בדיוק מהרצף הזה — שום דבר בו לא משתנה ברגע שהפרויקט גדל.`,
    },
  },
  {
    number: '08',
    title: { en: `An Agent That Explains, Not One That Replaces`, he: `סוכן שמסביר, לא כזה שמחליף` },
    subtitle: {
      en: `A student built a small tutor-agent for exactly the concepts that don't stick — which is a healthy use of AI, and a telling one`,
      he: `סטודנט בנה סוכן-מורה קטן בדיוק לרעיונות שלא נדבקים — שימוש בריא ב-AI, ומגלה`,
    },
    sections: [
      {
        heading: { en: `The Anecdote`, he: `האנקדוטה` },
        body: {
          en: `A student described building a small agent whose only job was to re-explain fundamentals he kept forgetting — the difference between a list and a tuple, for instance — because looking it up mid-exercise kept breaking his focus. The response wasn't disapproval; command memorization was never the actual goal.`,
          he: `סטודנט תיאר בנייה של סוכן קטן שתפקידו היחיד היה להסביר מחדש יסודות שהוא כל הזמן שכח — ההבדל בין רשימה ל-tuple, לדוגמה — כי לחפש את זה באמצע תרגיל כל הזמן שבר את הריכוז שלו. התגובה לא הייתה גינוי; שינון פקודות מעולם לא היה המטרה האמיתית.`,
        },
      },
      {
        heading: { en: `The Actual Bar, Restated`, he: `הרף האמיתי, מנוסח מחדש` },
        body: {
          en: `Asked directly whether he understood the underlying principles — not whether he remembered exact syntax — the honest answer mattered more than fluency with commands. An agent that fills in a forgotten detail while the underlying concept is genuinely understood is a tool; an agent that replaces ever forming that understanding is a liability.`,
          he: `כשנשאל ישירות אם הוא מבין את העקרונות שמתחת — לא אם הוא זוכר תחביר מדויק — התשובה הכנה חשבה יותר משטף בפקודות. סוכן שממלא פרט שנשכח בזמן שההבנה שמתחת אמיתית הוא כלי; סוכן שמחליף את עצם היווצרות ההבנה הזו הוא נטל.`,
        },
      },
    ],
    principle: {
      en: `An agent that reminds you of what you already understand is different from one that spares you from understanding it.`,
      he: `סוכן שמזכיר לך מה שאת כבר מבינה הוא שונה מאחד שחוסך ממך להבין את זה.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Git Only Stores What Changed`, he: `למה Git שומרת רק מה שהשתנה` },
    subtitle: {
      en: `Version control's central efficiency — and why it can't show a diff for an image`,
      he: `היעילות המרכזית של בקרת גרסאות — ולמה היא לא יכולה להראות diff לתמונה`,
    },
    sections: [
      {
        heading: { en: `Not Copy After Copy After Copy`, he: `לא עותק אחרי עותק אחרי עותק` },
        body: {
          en: `Saving a hundred versions of a project does not mean storing a hundred complete duplicates of every file — that would make version history balloon into something unusable within weeks. Git stores each new version as the difference from the one before it, reconstructing any full version on demand from that chain of differences.`,
          he: `שמירת מאה גרסאות של פרויקט לא אומרת אחסון מאה עותקים שלמים של כל קובץ — זה היה מנפח את היסטוריית הגרסאות לכדי משהו בלתי שמיש תוך שבועות. Git שומרת כל גרסה חדשה כהפרש מזו שלפניה, ומרכיבה מחדש כל גרסה מלאה לפי דרישה מתוך שרשרת ההפרשים הזו.`,
        },
      },
      {
        heading: { en: `Why Text and Not Images`, he: `למה טקסט ולא תמונות` },
        body: {
          en: `This is exactly why the diff view is so readable for code — text is naturally line-based, so a difference is a clean, small edit. An image file can still be version-controlled, but there's no meaningful line-by-line diff to display; Git can track that the file changed, just not narrate it the way it does for code.`,
          he: `זו בדיוק הסיבה שתצוגת ה-diff כל כך קריאה לקוד — טקסט הוא מטבעו מבוסס-שורות, כך שהפרש הוא עריכה נקייה וקטנה. קובץ תמונה עדיין אפשר לעקוב אחריו בבקרת גרסאות, אבל אין diff משמעותי שורה-אחר-שורה להציג; Git יכולה לעקוב אחרי זה שהקובץ השתנה, פשוט לא לספר את זה באותה דרך שהיא עושה לקוד.`,
        },
      },
    ],
    principle: {
      en: `A good history doesn't remember everything — it remembers exactly enough to reconstruct anything.`,
      he: `היסטוריה טובה לא זוכרת הכול — היא זוכרת בדיוק מספיק כדי לשחזר כל דבר.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic Git trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על Git`,
    },
    sections: [
      {
        heading: { en: `On Branches`, he: `על ענפים` },
        body: {
          en: `Why create a new branch for risky work instead of editing main directly, even though both are technically possible? Answer: main is the branch that eventually connects to what a client or user actually sees — editing it directly means every unfinished, unverified change is instantly live. A branch isolates that work until it's proven safe, and only then gets merged in deliberately.`,
          he: `למה ליצור ענף חדש לעבודה מסוכנת במקום לערוך את main ישירות, למרות ששניהם טכנית אפשריים? תשובה: main הוא הענף שבסופו של דבר מתחבר למה שלקוח או משתמשת באמת רואים — עריכה שלו ישירות אומרת שכל שינוי לא גמור ולא מאומת חי מיד. ענף מבודד את העבודה הזו עד שהיא מוכחת כבטוחה, ורק אז ממוזג פנימה בכוונה.`,
        },
      },
      {
        heading: { en: `On Diffs`, he: `על Diffs` },
        body: {
          en: `Clicking into a past commit and trying to edit the red and green lines shown does nothing — why? Answer: the diff view is a frozen record of what changed in that one past commit, not the live file. To actually change code, you have to leave the diff and return to the real file in the working directory.`,
          he: `לחיצה על commit מהעבר וניסיון לערוך את השורות האדומות והירוקות שמוצגות לא עושה כלום — למה? תשובה: תצוגת ה-diff היא תיעוד קפוא של מה שהשתנה באותו commit בודד מהעבר, לא הקובץ החי. כדי באמת לשנות קוד, צריך לעזוב את ה-diff ולחזור לקובץ האמיתי בתיקיית העבודה.`,
        },
      },
      {
        heading: { en: `On Fork vs. Clone`, he: `על Fork מול Clone` },
        body: {
          en: `After forking someone else's project, the original author fixes a bug in their copy. Does the fork update automatically? Answer: no — a fork is an independent copy from the moment it's created, not a live mirror. Any later fix has to be deliberately pulled in; nothing propagates on its own.`,
          he: `אחרי Fork לפרויקט של מישהו אחר, המחברת המקורית מתקנת באג בעותק שלה. האם ה-fork מתעדכן אוטומטית? תשובה: לא — fork הוא עותק עצמאי מהרגע שהוא נוצר, לא מראה חי. כל תיקון מאוחר צריך להימשך פנימה בכוונה; שום דבר לא מתפשט לבד.`,
        },
      },
      {
        heading: { en: `On Storage Efficiency`, he: `על יעילות אחסון` },
        body: {
          en: `A project has fifty commits. Does Git store fifty complete copies of every file? Answer: no — each commit stores only the difference from the version before it, and any full version can be reconstructed from that chain of differences. Storing full duplicates every time would make history balloon into something unmanageable almost immediately.`,
          he: `לפרויקט יש חמישים commits. האם Git שומרת חמישים עותקים שלמים של כל קובץ? תשובה: לא — כל commit שומר רק את ההפרש מהגרסה שלפניו, וכל גרסה מלאה אפשר לשחזר משרשרת ההפרשים הזו. אחסון עותקים שלמים בכל פעם היה מנפח את ההיסטוריה לכדי משהו בלתי ניתן לניהול כמעט מיד.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
