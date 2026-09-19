import type { CardContent } from './types';

// Session 10 · Python (Module Session 7) · 02.08.2026
// Cards authored from transcript analysis. Original teaching material.

export const session10Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — solo sub-agents graduate into teams, and one distinction cuts through the whole session`,
      he: `מפתח של אחד-עשר כרטיסים — סוכני-משנה בודדים משתדרגים לצוותים, והבחנה אחת חותכת את כל המפגש`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `A deeper return to Claude Code: sub-agents that only report to the main agent become team agents that coordinate with each other, permission prompts get read instead of blindly approved, and a billing distinction gets clarified before anyone builds something expensive by accident.`,
          he: `חזרה עמוקה יותר ל-Claude Code: סוכני-משנה שרק מדווחים לסוכן הראשי הופכים לסוכני-צוות שמתאמים אחד עם השני, בקשות הרשאה נקראות במקום להיות מאושרות בעיוורון, והבחנת חיוב מובהרת לפני שמישהי בונה בטעות משהו יקר.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the single most important idea in the deck — a real confusion from the classroom, resolved. Read it before Card 06, which depends on the distinction it draws.`,
          he: `כרטיס 01 הוא הרעיון החשוב ביותר בחפיסה — בלבול אמיתי מהכיתה, שנפתר. כדאי לקרוא אותו לפני כרטיס 06, שתלוי בהבחנה שהוא מצייר.`,
        },
      },
    ],
    principle: {
      en: `The word "agent" means at least two different things this session — knowing which one is under discussion changes everything that follows.`,
      he: `המילה "סוכן" אומרת לפחות שני דברים שונים במפגש הזה — לדעת על איזה מהם מדברים משנה את כל מה שבא אחר כך.`,
    },
  },
  {
    number: '01',
    title: { en: `Two Different Things Called "Agent"`, he: `שני דברים שונים שנקראים "סוכן"` },
    subtitle: {
      en: `The agent that helps you build an app, and the agent you embed inside it, are not the same idea`,
      he: `הסוכן שעוזר לך לבנות אפליקציה, והסוכן שאת מטמיעה בתוכה, הם לא אותו רעיון`,
    },
    sections: [
      {
        heading: { en: `The Confusion, Live`, he: `הבלבול, בשידור חי` },
        body: {
          en: `A student, midway through building two sub-agents to help write a website, asked about a market-research agent that would talk to actual customers — a reasonable question that revealed a real mix-up: which kind of agent was actually being built right now?`,
          he: `סטודנטית, באמצע בניית שני סוכני-משנה שעוזרים לכתוב אתר, שאלה על סוכן מחקר-שוק שידבר עם לקוחות אמיתיים — שאלה סבירה שחשפה בלבול אמיתי: איזה סוג סוכן בכלל נבנה עכשיו?`,
        },
      },
      {
        heading: { en: `Claude Code's One Job`, he: `העבודה האחת של Claude Code` },
        body: {
          en: `Claude Code itself has exactly one purpose: helping write the code for an application. Every sub-agent built inside it this session — a UX specialist, a content writer — exists only to make that writing process faster and better organized.`,
          he: `ל-Claude Code עצמו יש מטרה אחת בדיוק: לעזור לכתוב את הקוד של אפליקציה. כל סוכן-משנה שנבנה בתוכו במפגש הזה — מומחית UX, כותבת תוכן — קיים רק כדי להפוך את תהליך הכתיבה למהיר ומאורגן יותר.`,
        },
      },
      {
        heading: { en: `The Other Kind Lives Inside the Finished Product`, he: `הסוג האחר חי בתוך המוצר המוגמר` },
        body: {
          en: `An agent that talks to a site's actual visitors — answering customer questions, researching the market — is a completely different animal: something built and deployed inside the finished application. Building that kind of agent wasn't covered yet; this session was entirely about the first kind.`,
          he: `סוכן שמדבר עם המבקרות האמיתיות של אתר — עונה לשאלות לקוחות, חוקר את השוק — הוא חיה שונה לגמרי: משהו שנבנה ופרוס בתוך האפליקציה המוגמרת. בניית סוג כזה של סוכן עדיין לא כוסתה; המפגש הזה עסק לגמרי בסוג הראשון.`,
        },
      },
    ],
    principle: {
      en: `Before building any agent, ask whether it helps you make the product, or whether it lives inside the product — those are different jobs.`,
      he: `לפני בניית כל סוכן, שאלי אם הוא עוזר לך ליצור את המוצר, או אם הוא חי בתוך המוצר — אלו עבודות שונות.`,
    },
  },
  {
    number: '02',
    title: { en: `Three Ways In From Cursor`, he: `שלוש דרכים פנימה מ-Cursor` },
    subtitle: {
      en: `A standalone terminal, a terminal inside the editor, or a dedicated extension — all reach the same tool`,
      he: `טרמינל עצמאי, טרמינל בתוך העורך, או תוסף ייעודי — כולם מגיעים לאותו כלי`,
    },
    sections: [
      {
        heading: { en: `Same Tool, Three Doors`, he: `אותו כלי, שלוש דלתות` },
        body: {
          en: `Claude Code can be opened from any regular system terminal outside the editor entirely, from a terminal panel built into Cursor itself, or through a dedicated extension made for exactly this purpose — all three land in the same tool with the same capabilities.`,
          he: `אפשר לפתוח את Claude Code מכל טרמינל רגיל של המערכת מחוץ לעורך לגמרי, מפאנל טרמינל מובנה בתוך Cursor עצמו, או דרך תוסף ייעודי שנעשה בדיוק למטרה הזו — כל שלושת המסלולים נוחתים באותו כלי עם אותן יכולות.`,
        },
      },
      {
        heading: { en: `The One That Actually Matters`, he: `זו שבאמת חשובה` },
        body: {
          en: `Regardless of the door, the same functionality is available — the difference is entirely about comfort. A terminal panel inside Cursor keeps everything on one screen without switching windows; the extension adds a friendlier visual layer on top of the exact same underlying tool.`,
          he: `לא משנה איזו דלת, אותה פונקציונליות זמינה — ההבדל הוא כולו עניין של נוחות. פאנל טרמינל בתוך Cursor שומר הכול על מסך אחד בלי החלפת חלונות; התוסף מוסיף שכבה חזותית ידידותית יותר מעל אותו כלי בסיסי בדיוק.`,
        },
      },
    ],
    principle: {
      en: `When three doors lead to the same room, pick the one that's least annoying to walk through, not the one that looks most official.`,
      he: `כששלוש דלתות מובילות לאותו חדר, בחרי את זו שהכי פחות מעצבנת לעבור דרכה, לא את זו שנראית הכי רשמית.`,
    },
  },
  {
    number: '03',
    title: { en: `Characterize, Attach, Plan, Build`, he: `אפיינו, חברו, תכננו, בנו` },
    subtitle: {
      en: `The full recommended sequence for starting any project with Claude Code`,
      he: `הרצף המומלץ המלא להתחלת כל פרויקט עם Claude Code`,
    },
    sections: [
      {
        heading: { en: `The Order, Restated`, he: `הסדר, מנוסח מחדש` },
        body: {
          en: `First, characterize the project — decide what it actually is before writing anything. Second, attach a \`CLAUDE.md\` describing that characterization so it's re-read on every prompt. Third, ask for a plan using the strongest available model, reviewing it before approving. Only after all three does execution begin.`,
          he: `ראשית, מאפיינים את הפרויקט — מחליטים מה הוא בעצם לפני שכותבים משהו. שנית, מצרפים \`CLAUDE.md\` שמתאר את האפיון הזה כדי שהוא ייקרא מחדש בכל פרומפט. שלישית, מבקשים תכנון עם המודל החזק ביותר הזמין, וסוקרים אותו לפני אישור. רק אחרי כל שלושת השלבים הביצוע מתחיל.`,
        },
      },
      {
        heading: { en: `Why the Order Is Fixed`, he: `למה הסדר קבוע` },
        body: {
          en: `Skipping straight to a plan without a characterized project first gives the model no anchor to plan against; skipping the plan and going straight to execution gives up the chance to catch a bad approach before any code is written. Each step exists to prevent a specific, real failure at the step after it.`,
          he: `דילוג ישר לתכנון בלי פרויקט מאופיין קודם נותן למודל שום עוגן לתכנן מולו; דילוג על התכנון וישר לביצוע מוותר על ההזדמנות לתפוס גישה גרועה לפני שנכתב קוד כלשהו. כל שלב קיים כדי למנוע כישלון ספציפי ואמיתי בשלב שאחריו.`,
        },
      },
    ],
    principle: {
      en: `Every step in this sequence exists to prevent a failure at the next one — skip a step and you inherit its risk.`,
      he: `כל שלב ברצף הזה קיים כדי למנוע כישלון בשלב הבא — דלגי על שלב ותירשי את הסיכון שלו.`,
    },
  },
  {
    number: '04',
    title: { en: `Reading a Permission Prompt`, he: `קריאת בקשת הרשאה` },
    subtitle: {
      en: `What "yes" actually grants — and what to do when the prompt itself is unclear`,
      he: `מה "כן" באמת מעניקה — ומה לעשות כשהבקשה עצמה לא ברורה`,
    },
    sections: [
      {
        heading: { en: `A Small Diff, Asking Permission`, he: `diff קטן, מבקש הרשאה` },
        body: {
          en: `Before certain actions — changing a settings file, running a new kind of command — Claude Code stops and shows exactly what it wants to do, often as a small red-and-green change to a specific file, then waits for approval. Reading that change before saying yes is the whole point of the pause.`,
          he: `לפני פעולות מסוימות — שינוי קובץ הגדרות, הרצת סוג חדש של פקודה — Claude Code עוצר ומראה בדיוק מה הוא רוצה לעשות, לעיתים קרובות כשינוי קטן באדום-ירוק לקובץ ספציפי, ואז מחכה לאישור. קריאת השינוי לפני אמירת כן היא כל הטעם בעצירה.`,
        },
      },
      {
        heading: { en: `When the Prompt Itself Is Confusing`, he: `כשהבקשה עצמה מבלבלת` },
        body: {
          en: `Not every permission message is self-explanatory. The advice for exactly that situation: don't guess, and don't blindly approve out of impatience — copy the confusing message and ask Claude directly what it means and what approving it would actually do.`,
          he: `לא כל הודעת הרשאה מובנת מאליה. העצה בדיוק למצב הזה: אל תנחשי, ואל תאשרי בעיוורון מחוסר סבלנות — העתיקי את ההודעה המבלבלת ושאלי את Claude ישירות מה היא אומרת ומה אישור שלה בעצם יעשה.`,
        },
      },
    ],
    principle: {
      en: `A permission prompt you don't understand is not a formality to click past — it's a question you haven't actually answered yet.`,
      he: `בקשת הרשאה שאת לא מבינה היא לא פורמליות ללחוץ מעליה — היא שאלה שעדיין לא באמת ענית עליה.`,
    },
  },
  {
    number: '05',
    title: { en: `Solo Sub-Agents vs. Team Agents`, he: `סוכני-משנה בודדים מול סוכני-צוות` },
    subtitle: {
      en: `Independent tasks report separately; dependent tasks need to be told, explicitly, to work as a team`,
      he: `משימות עצמאיות מדווחות בנפרד; משימות תלויות צריכות להיאמר להן, במפורש, לעבוד כצוות`,
    },
    sections: [
      {
        heading: { en: `The Default: Report to the Main Agent`, he: `ברירת המחדל: לדווח לסוכן הראשי` },
        body: {
          en: `Sub-agents created normally each work on their own task and report their results back to the main agent — but they don't talk to each other. This is the right shape when tasks are genuinely independent of one another.`,
          he: `סוכני-משנה שנוצרים בדרך רגילה כל אחד עובד על המשימה שלו ומדווח את התוצאות בחזרה לסוכן הראשי — אבל הם לא מדברים אחד עם השני. זו הצורה הנכונה כשמשימות הן באמת בלתי-תלויות זו בזו.`,
        },
      },
      {
        heading: { en: `The Explicit Trigger for Coordination`, he: `הטריגר המפורש לתיאום` },
        body: {
          en: `When tasks actually depend on each other — a UX specialist and a copywriter both shaping the same page — the word "agents," said explicitly, is what switches on team mode, where multiple agents run in parallel and coordinate with each other rather than working in silent isolation.`,
          he: `כשמשימות באמת תלויות זו בזו — מומחית UX וכותבת תוכן ששתיהן מעצבות את אותו עמוד — המילה "agents", שנאמרת במפורש, היא מה שמפעילה מצב צוות, שבו כמה סוכנים רצים במקביל ומתאמים אחד עם השני במקום לעבוד בבידוד שקט.`,
        },
      },
    ],
    principle: {
      en: `Coordination isn't automatic just because multiple agents exist — it has to be requested, on purpose, in words.`,
      he: `תיאום הוא לא אוטומטי סתם כי כמה סוכנים קיימים — צריך לבקש אותו, בכוונה, במילים.`,
    },
  },
  {
    number: '06',
    title: { en: `Subscription vs. API Billing`, he: `חיוב מנוי מול חיוב API` },
    subtitle: {
      en: `An agent inside your chat is on the monthly plan; an agent inside your deployed app is billed per token, with no monthly cap`,
      he: `סוכן בתוך הצ'אט שלך נמצא על התוכנית החודשית; סוכן בתוך האפליקציה הפרוסה שלך מחויב לפי token, בלי תקרה חודשית`,
    },
    sections: [
      {
        heading: { en: `Two Different Meters`, he: `שני מונים שונים` },
        body: {
          en: `Everything done through the monthly subscription — planning, building, running sub-agents inside a Claude Code session — is covered by that flat fee. An agent embedded inside a deployed application, talking to that app's real users, runs on a completely separate meter: a pay-per-token API key, unrelated to the personal subscription.`,
          he: `כל מה שנעשה דרך המנוי החודשי — תכנון, בנייה, הרצת סוכני-משנה בתוך שיחת Claude Code — מכוסה על ידי התשלום הקבוע ההוא. סוכן שמוטמע בתוך אפליקציה פרוסה, מדבר עם המשתמשים האמיתיים של האפליקציה ההיא, רץ על מונה נפרד לגמרי: מפתח API בתשלום-לפי-token, שלא קשור למנוי האישי.`,
        },
      },
      {
        heading: { en: `A Concrete Number, Named on Purpose`, he: `מספר קונקרטי, שנאמר בכוונה` },
        body: {
          en: `A rough cost estimate was named directly for the session's own demo, if it had been run through paid API access instead of the subscription — roughly twelve dollars for that one exercise. The number was shared specifically so the difference between the two billing models would stop being abstract.`,
          he: `הערכת עלות גסה נאמרה במפורש עבור ההדגמה של המפגש עצמו, אילו הייתה מורצת דרך גישת API בתשלום במקום המנוי — בערך שנים עשר דולר עבור התרגיל הבודד ההוא. המספר שותף ספציפית כדי שההבדל בין שני מודלי החיוב יפסיק להיות מופשט.`,
        },
      },
    ],
    principle: {
      en: `A flat monthly fee and a meter that never stops running feel identical right up until the invoice arrives.`,
      he: `תשלום חודשי קבוע ומונה שאף פעם לא מפסיק לרוץ מרגישים זהים בדיוק עד שהחשבונית מגיעה.`,
    },
  },
  {
    number: '07',
    title: { en: `Build Two Agents and Run Them as a Team`, he: `בונות שני סוכנים ומריצות אותם כצוות` },
    subtitle: {
      en: `The full sequence, exactly as demonstrated live`,
      he: `הרצף המלא, בדיוק כפי שהודגם בשידור חי`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: with Claude Code open inside a project folder, describe the first specialist to build — for example, a UX-focused agent for a specific storefront. Two: decide project-only or global scope when asked, and confirm creation. Three: describe a second, different specialist — for example, a copywriting agent for the same project. Four: once both exist, give one explicit instruction naming both agents and the word "team," asking them to work together on the same task. Five: watch for the visual sign of true parallel work — both agents' activity showing at once, not one finishing before the other starts.`,
          he: `אחת: עם Claude Code פתוח בתוך תיקיית פרויקט, תארי את המומחית הראשונה לבנייה — לדוגמה, סוכנת שמתמקדת ב-UX עבור חנות ספציפית. שתיים: החליטי היקף פרויקט-בלבד או גלובלי כשנשאלת, ואשרי יצירה. שלוש: תארי מומחית שנייה ושונה — לדוגמה, סוכנת כתיבת תוכן לאותו פרויקט. ארבע: ברגע ששתיהן קיימות, תני הוראה מפורשת אחת ששמה את שתי הסוכנות והמילה "team", ומבקשת מהן לעבוד יחד על אותה משימה. חמש: חפשי את הסימן החזותי לעבודה מקבילה אמיתית — הפעילות של שתי הסוכנות מוצגת בבת אחת, לא אחת שמסיימת לפני שהשנייה מתחילה.`,
        },
      },
      {
        heading: { en: `Keep Working While It Runs`, he: `המשיכי לעבוד בזמן שזה רץ` },
        body: {
          en: `A demonstrated advantage worth building the habit around: there's no need to wait idle for a running agent to finish before sending the next request. Claude Code queues incoming instructions intelligently and decides on its own when to act on each one.`,
          he: `יתרון שהודגם ושווה לבנות עליו הרגל: אין צורך לחכות בחוסר מעש שסוכן רץ יסיים לפני שליחת הבקשה הבאה. Claude Code מתור הוראות נכנסות בצורה חכמה ומחליט בעצמו מתי לפעול על כל אחת מהן.`,
        },
      },
    ],
    principle: {
      en: `Two agents working in silence at the same time are not a team — a team is what you get when you say so, out loud.`,
      he: `שתי סוכנות שעובדות בשקט באותו זמן הן לא צוות — צוות הוא מה שמקבלים כשאומרים את זה, בקול.`,
    },
  },
  {
    number: '08',
    title: { en: `Don't Force-Update CLAUDE.md Reflexively`, he: `אל תעדכני CLAUDE.md באופן רפלקסיבי` },
    subtitle: {
      en: `Anthropic's own caution: forcing old instructions onto a stronger new model can hurt more than it helps`,
      he: `הזהירות של Anthropic עצמה: הכפיית הוראות ישנות על מודל חדש וחזק יותר יכולה להזיק יותר משהיא עוזרת`,
    },
    sections: [
      {
        heading: { en: `A Caution From the People Who Built It`, he: `אזהרה מהאנשים שבנו את זה` },
        body: {
          en: `A conversation from someone involved in building Claude was referenced directly: \`CLAUDE.md\` can, in certain cases, actively work against a project rather than help it — specifically because newer, stronger models often no longer need instructions that were necessary for weaker ones.`,
          he: `שיחה ממישהו שמעורב בבניית Claude צוטטה ישירות: \`CLAUDE.md\` יכול, במקרים מסוימים, לפעול נגד פרויקט באופן פעיל במקום לעזור לו — ספציפית כי מודלים חדשים וחזקים יותר לרוב כבר לא צריכים הוראות שהיו הכרחיות לחלשים יותר.`,
        },
      },
      {
        heading: { en: `Update Deliberately, Not Reflexively`, he: `עדכני בכוונה, לא באופן רפלקסיבי` },
        body: {
          en: `The suggested practice: write it once, and revisit it only occasionally — perhaps monthly for active projects, and not at all for inactive ones — rather than compulsively re-editing it every session out of habit. Forcing outdated guidance into an already-capable model can measurably degrade its output instead of improving it.`,
          he: `הפרקטיקה המוצעת: כתבי אותו פעם אחת, וחזרי אליו רק מדי פעם — אולי חודשי לפרויקטים פעילים, ובכלל לא לבלתי-פעילים — במקום לערוך אותו מחדש באובססיביות בכל שיחה מתוך הרגל. הכפיית הנחיה מיושנת לתוך מודל שכבר מוכשר יכולה לפגוע בצורה מדידה בפלט שלו במקום לשפר אותו.`,
        },
      },
    ],
    principle: {
      en: `Even a well-established best practice deserves reexamining once the thing it was built for gets stronger.`,
      he: `אפילו פרקטיקה מבוססת היטב שווה לבחון מחדש ברגע שהדבר שהיא נבנתה בשבילו נעשה חזק יותר.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Agents Don't Act on Their Own Timeline`, he: `למה סוכנים לא פועלים על ציר הזמן של עצמם` },
    subtitle: {
      en: `Claude Code waits to be called by default — autonomy is something you opt into, not something that happens to you`,
      he: `Claude Code מחכה שיקראו לו כברירת מחדל — אוטונומיה היא משהו שבוחרים בו, לא משהו שקורה לך`,
    },
    sections: [
      {
        heading: { en: `No Silent Continuation`, he: `אין המשך שקט` },
        body: {
          en: `An agent left running does not keep changing a project on its own once a session ends — it acts only in direct response to what it's asked, and stops when there's nothing left to respond to. This was stated as the default, not an exception.`,
          he: `סוכן שהושאר רץ לא ממשיך לשנות פרויקט בעצמו ברגע שהשיחה נגמרת — הוא פועל רק בתגובה ישירה למה שמבוקש ממנו, ועוצר כשאין יותר מה להגיב אליו. זה נאמר כברירת המחדל, לא כחריג.`,
        },
      },
      {
        heading: { en: `Scheduled Autonomy Is Possible, Never Accidental`, he: `אוטונומיה מתוזמנת אפשרית, אף פעם לא בטעות` },
        body: {
          en: `It is possible to configure an agent to wake up and work on a fixed schedule — but this has to be deliberately set up; it is never the out-of-the-box behavior. The default silence, until explicitly invoked, is itself a safety choice: an agent with no built-in initiative can't cause damage on a timeline nobody was watching.`,
          he: `אפשר להגדיר סוכן להתעורר ולעבוד בלוח זמנים קבוע — אבל זה חייב להיות מוגדר בכוונה; זה אף פעם לא ההתנהגות מהקופסה. השקט כברירת מחדל, עד לקריאה מפורשת, הוא עצמו בחירה של בטיחות: לסוכן בלי יוזמה מובנית אין איך לגרום נזק על ציר זמן שאף אחת לא צפתה בו.`,
        },
      },
    ],
    principle: {
      en: `Silence until called is a safer default than initiative until told to stop.`,
      he: `שקט עד שקוראים לזה הוא ברירת מחדל בטוחה יותר מיוזמה עד שאומרים לזה להפסיק.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic tool trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על כלים`,
    },
    sections: [
      {
        heading: { en: `On the Two Agent Types`, he: `על שני סוגי הסוכנים` },
        body: {
          en: `A student wants Claude Code to build an agent that will personally chat with the website's future customers. Is that agent the same kind as the sub-agents created inside Claude Code this session? Answer: no — the sub-agents built this session exist only to help write the application's code; an agent that talks to real end users lives inside the finished, deployed application, which is a separate concept built for a separate purpose.`,
          he: `סטודנטית רוצה ש-Claude Code יבנה סוכן שידבר אישית עם הלקוחות העתידיים של האתר. האם הסוכן הזה מאותו סוג כמו סוכני-המשנה שנוצרו בתוך Claude Code במפגש הזה? תשובה: לא — סוכני-המשנה שנבנו במפגש הזה קיימים רק כדי לעזור לכתוב את הקוד של האפליקציה; סוכן שמדבר עם משתמשי-קצה אמיתיים חי בתוך האפליקציה המוגמרת והפרוסה, שזה מושג נפרד שנבנה למטרה נפרדת.`,
        },
      },
      {
        heading: { en: `On Team Mode`, he: `על מצב צוות` },
        body: {
          en: `Two sub-agents are created for tasks that genuinely depend on each other. Will they automatically coordinate just because both exist? Answer: no — coordination only activates when explicitly requested, using the word "agents" and naming both by name, asking them to work as a team. Without that instruction, each works in isolation and reports separately to the main agent.`,
          he: `שני סוכני-משנה נוצרים למשימות שבאמת תלויות זו בזו. האם הם יתאמו אוטומטית סתם כי שתיהן קיימות? תשובה: לא — תיאום מופעל רק כשמבקשים אותו במפורש, באמצעות המילה "agents" ושמות שתיהן בשם, ובקשה שיעבדו כצוות. בלי ההוראה הזו, כל אחת עובדת בבידוד ומדווחת בנפרד לסוכן הראשי.`,
        },
      },
      {
        heading: { en: `On Billing`, he: `על חיוב` },
        body: {
          en: `An agent that lives inside a finished, deployed application and answers real customer questions — is its usage covered by the developer's twenty-dollar-a-month Claude subscription? Answer: no — an agent embedded inside a deployed application runs on a separate pay-per-token API key, unrelated to the personal monthly subscription, and has no built-in monthly cap.`,
          he: `סוכן שחי בתוך אפליקציה מוגמרת ופרוסה ועונה לשאלות לקוחות אמיתיים — האם השימוש בו מכוסה על ידי המנוי החודשי של עשרים דולר של המפתחת? תשובה: לא — סוכן שמוטמע בתוך אפליקציה פרוסה רץ על מפתח API נפרד בתשלום-לפי-token, שלא קשור למנוי החודשי האישי, ואין לו תקרה חודשית מובנית.`,
        },
      },
      {
        heading: { en: `On CLAUDE.md`, he: `על CLAUDE.md` },
        body: {
          en: `Why might manually re-injecting old instructions into CLAUDE.md every session actually hurt results, rather than help? Answer: newer, stronger models often no longer need guidance that was necessary for weaker ones — forcing outdated instructions onto a capable model can interfere with its own judgment instead of reinforcing it.`,
          he: `למה הזרקה ידנית מחדש של הוראות ישנות ל-CLAUDE.md בכל שיחה עלולה למעשה לפגוע בתוצאות, במקום לעזור? תשובה: מודלים חדשים וחזקים יותר לרוב כבר לא צריכים הנחיה שהייתה הכרחית לחלשים יותר — הכפיית הוראות מיושנות על מודל מוכשר יכולה להפריע לשיקול הדעת שלו עצמו במקום לחזק אותו.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
