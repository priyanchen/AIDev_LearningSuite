import type { CardContent } from './types';

// Session 2 · n8n · 01.07.2026
// Cards authored from transcript analysis. Original teaching material.
// The instructor's specific framings (workflow-as-Lego, honest warnings about
// no-code marketing hype, the insurance-call example) are captured in
// paraphrased, structural form — not reproduced verbatim.

export const session02Cards: CardContent[] = [
  {
    number: '00',
    title: { en: 'Session Index', he: 'מפתח המפגש' },
    subtitle: {
      en: 'A ten-card reference for the n8n foundation session',
      he: 'התייחסות של עשרה כרטיסים למפגש היסוד של n8n',
    },
    sections: [
      {
        heading: { en: 'Why n8n Before Code', he: 'למה n8n לפני קוד' },
        body: {
          en: 'The lecturer is explicit: n8n is not the goal of the course. It is a scaffold. The concepts learned here — trigger, node, workflow, credentials, integration — will return when we write real code. Learning them visually first makes the code layer easier to absorb.',
          he: 'המרצה ברור בעניין: n8n אינו יעד הקורס. זהו פיגום. המושגים הנלמדים כאן — טריגר, נוד, תהליך עבודה, אישורים, אינטגרציה — יחזרו כשנכתוב קוד אמיתי. למידתם ויזואלית תחילה עושה את שכבת הקוד לקלה יותר לקליטה.',
        },
      },
      {
        heading: { en: 'How to Use', he: 'איך להשתמש' },
        body: {
          en: 'Cards 01, 05, 08 are conceptual — return to them when you build with real code. Cards 02, 03, 07 are operational — consult while building. Card 06 warns you against a specific marketing narrative. Card 10 tests understanding.',
          he: 'כרטיסים 01, 05, 08 הם מושגיים — חזרי אליהם כשאת בונה עם קוד אמיתי. כרטיסים 02, 03, 07 הם תפעוליים — היעזרי בהם תוך כדי בנייה. כרטיס 06 מזהיר מנרטיב שיווקי מסוים. כרטיס 10 בוחן הבנה.',
        },
      },
    ],
    principle: {
      en: 'The tool is scaffolding — what stays is the mental model',
      he: 'הכלי הוא פיגום — מה שנשאר הוא המודל המנטלי',
    },
  },
  {
    number: '01',
    title: { en: 'The Mental Model', he: 'המודל המנטלי' },
    subtitle: {
      en: 'What a workflow actually is, and why it recurs everywhere',
      he: 'מה תהליך עבודה באמת, ולמה הוא חוזר בכל מקום',
    },
    sections: [
      {
        heading: { en: 'Automation Defined', he: 'הגדרת אוטומציה' },
        body: {
          en: 'Automation is instructing a computer to perform a sequence of actions without human touch, repeatedly. Either on a schedule (every day at 10:00) or reactively (when event X happens, respond). This definition applies whether the medium is n8n, a Python script, or a distributed system.',
          he: 'אוטומציה היא הוראה למחשב לבצע רצף של פעולות ללא מגע אדם, שוב ושוב. או על פי לוח זמנים (כל יום ב-10:00) או בתגובה (כשמתרחש אירוע X, הגיבי). ההגדרה חלה בין אם המדיום הוא n8n, סקריפט פייתון, או מערכת מבוזרת.',
        },
      },
      {
        heading: { en: 'Workflow as Chain of Vertices', he: 'תהליך העבודה כשרשרת של קודקודים' },
        body: {
          en: "The lecturer offered the Lego metaphor. A workflow is a chain of nodes, each performing one job, connected in a directed sequence. Data flows down the chain. When a downstream node fails, the failure is localized — the earlier nodes' work is preserved. This structure will reappear as functions calling functions in code.",
          he: 'המרצה הציע מטאפורת הלגו. תהליך עבודה הוא שרשרת של צמתים, כל אחד מבצע עבודה אחת, מחוברים ברצף מכוון. נתונים זורמים במורד השרשרת. כשצומת במורד נכשל, הכשל ממוקד — עבודת הצמתים הקודמים נשמרת. המבנה הזה יופיע שוב כפונקציות שקוראות לפונקציות בקוד.',
        },
      },
      {
        heading: { en: 'Why This Matters Later', he: 'למה זה חשוב בהמשך' },
        body: {
          en: 'When we build agent systems in Module 8, when we chain LLM calls in Module 7, when we build ML pipelines in Module 4 — the same mental structure appears. A trigger starts something; each stage transforms and passes forward; failure isolates. n8n teaches this shape before we have to also learn syntax.',
          he: 'כשנבנה מערכות סוכנים במודול 8, כשנשרשר קריאות LLM במודול 7, כשנבנה צנרת ML במודול 4 — אותו מבנה מנטלי מופיע. טריגר מתחיל משהו; כל שלב הופך ומעביר קדימה; כשל מבודד. n8n מלמד את הצורה הזו לפני שאנחנו צריכים ללמוד גם תחביר.',
        },
      },
    ],
    principle: {
      en: 'The shape of a workflow is the shape of every system worth building',
      he: 'צורתו של תהליך עבודה היא צורתה של כל מערכת שכדאי לבנות',
    },
  },
  {
    number: '02',
    title: { en: 'Setup & First Access', he: 'הקמה וגישה ראשונה' },
    subtitle: {
      en: 'Cloud vs. self-hosted, and why we chose cloud for the course',
      he: 'ענן מול אירוח עצמי, ולמה בחרנו בענן לקורס',
    },
    sections: [
      {
        heading: { en: 'Two Ways to Run n8n', he: 'שתי דרכים להריץ n8n' },
        body: {
          en: 'The platform runs in two modes. Self-hosted: install locally, run offline, no dependency on the internet for workflows that do not need it. Cloud: use n8n.io directly, pay per execution, workflows run automatically on their infrastructure. The course uses cloud because automatic scheduled execution requires it.',
          he: 'הפלטפורמה רצה בשני מצבים. אירוח עצמי: התקיני מקומית, הריצי במצב לא מקוון, ללא תלות באינטרנט עבור תהליכי עבודה שלא זקוקים לו. ענן: השתמשי ב-n8n.io ישירות, שלמי לפי הרצה, תהליכי עבודה רצים אוטומטית בתשתית שלהם. הקורס משתמש בענן כי הרצה אוטומטית מתוזמנת דורשת זאת.',
        },
      },
      {
        heading: { en: 'Creating an Account', he: 'יצירת חשבון' },
        body: {
          en: 'Sign up at n8n.io with an email address. A free tier exists for learning. Choose a workspace name that will hold all your workflows for the course.',
          he: 'הירשמי ב-n8n.io עם כתובת אימייל. קיים מסלול חינם ללמידה. בחרי שם סביבת עבודה שיחזיק את כל תהליכי העבודה שלך לקורס.',
        },
      },
      {
        heading: { en: 'The Interface Anatomy', he: 'האנטומיה של הממשק' },
        body: {
          en: 'The canvas is the center — this is where workflows are built visually. The left panel holds saved workflows. The right side reveals node configuration when a node is selected. The plus button between nodes adds the next step. Nothing more is required to begin.',
          he: 'הבד הוא המרכז — כאן תהליכי עבודה נבנים ויזואלית. הפאנל השמאלי מחזיק תהליכי עבודה שמורים. הצד הימני חושף הגדרות צומת כשצומת נבחר. כפתור הפלוס בין צמתים מוסיף את השלב הבא. יותר מזה לא נדרש כדי להתחיל.',
        },
      },
    ],
    principle: {
      en: 'A clean workspace is the first act of every serious build',
      he: 'סביבת עבודה נקייה היא המעשה הראשון של כל בנייה רצינית',
    },
  },
  {
    number: '03',
    title: { en: 'The Workflow Pattern', he: 'תבנית תהליך העבודה' },
    subtitle: {
      en: 'The three-part structure every workflow shares',
      he: 'המבנה בן שלושת החלקים שכל תהליך עבודה חולק',
    },
    sections: [
      {
        heading: { en: 'Part One · The Trigger', he: 'חלק א · הטריגר' },
        body: {
          en: 'The trigger is what causes the workflow to start. Every workflow begins with exactly one. Common triggers: a manual click, a schedule (every hour), an incoming webhook (a form submission, a chat message), an email arriving. Without a trigger, no workflow runs.',
          he: 'הטריגר הוא מה שגורם לתהליך העבודה להתחיל. כל תהליך עבודה מתחיל עם טריגר אחד בדיוק. טריגרים נפוצים: קליק ידני, לוח זמנים (כל שעה), webhook נכנס (שליחת טופס, הודעת צ׳אט), אימייל מגיע. ללא טריגר, אף תהליך עבודה לא רץ.',
        },
      },
      {
        heading: { en: 'Part Two · The Action Nodes', he: 'חלק ב · צמתי הפעולה' },
        body: {
          en: 'Between the trigger and the end, one or more action nodes do the actual work. Each node performs one operation: send email, write to a spreadsheet, call an API, ask an AI, transform text. Nodes execute sequentially, each receiving the output of the previous one.',
          he: 'בין הטריגר לסוף, צומת פעולה אחד או יותר מבצעים את העבודה האמיתית. כל צומת מבצע פעולה אחת: שלח אימייל, כתוב לגיליון, קרא ל-API, שאל AI, המר טקסט. צמתים מתבצעים ברצף, כל אחד מקבל את הפלט של הקודם.',
        },
      },
      {
        heading: { en: 'Part Three · The Output', he: 'חלק ג · הפלט' },
        body: {
          en: 'A workflow ends when its last node completes — usually by writing somewhere (a database, a Google Sheet), sending somewhere (an email, a Telegram message), or returning a response to whatever called it. Some workflows loop back to their trigger; most end cleanly.',
          he: 'תהליך עבודה מסתיים כשהצומת האחרון שלו מסיים — בדרך כלל על ידי כתיבה למקום (מסד נתונים, Google Sheet), שליחה למקום (אימייל, הודעת טלגרם), או החזרת תגובה למה שקרא לו. חלק מתהליכי העבודה חוזרים לטריגר שלהם; רובם מסתיימים בצורה נקייה.',
        },
      },
    ],
    principle: {
      en: 'Trigger → Transform → Deliver — every workflow, every time',
      he: 'טריגר ← המרה ← מסירה — כל תהליך עבודה, בכל פעם',
    },
  },
  {
    number: '04',
    title: { en: 'Reading a Node', he: 'קריאת צומת' },
    subtitle: {
      en: 'What every node needs, and how to configure it',
      he: 'מה כל צומת צריך, ואיך להגדיר אותו',
    },
    sections: [
      {
        heading: { en: 'The Node Anatomy', he: 'האנטומיה של הצומת' },
        body: {
          en: 'Every action node has three configuration surfaces. Which service (Gmail, Google Sheets, OpenAI). Which operation (send email, append row, generate text). Which parameters (recipient address, sheet ID, prompt text). Miss any of the three and the node fails.',
          he: 'לכל צומת פעולה יש שלושה משטחי הגדרה. איזה שירות (Gmail, Google Sheets, OpenAI). איזו פעולה (שלח אימייל, הוסף שורה, הפק טקסט). אילו פרמטרים (כתובת נמען, מזהה גיליון, טקסט פרומפט). החמצת אחד מהשלושה והצומת נכשל.',
        },
      },
      {
        heading: { en: 'Search by Verb', he: 'חיפוש לפי פועל' },
        body: {
          en: 'When adding a node, search for what you want to do, not for the service. "Send" surfaces send-email, send-message, send-webhook across every service. Searching for the service first ("Gmail") floods you with every possible Gmail operation. Start with the verb, refine with the service.',
          he: 'כשאת מוסיפה צומת, חפשי לפי מה שאת רוצה לעשות, לא לפי השירות. "Send" חושף שלח-אימייל, שלח-הודעה, שלח-webhook על פני כל שירות. חיפוש לפי השירות תחילה ("Gmail") מציף אותך בכל פעולת Gmail אפשרית. התחילי בפועל, חדדי עם השירות.',
        },
      },
      {
        heading: { en: 'Data Flow Between Nodes', he: 'זרימת נתונים בין צמתים' },
        body: {
          en: 'When a node produces output, the next node can reference any field from that output. n8n exposes previous-node data through drag-drop or expression syntax. This is how "the email address the form submitter typed" becomes "the recipient of our reply" without you copying anything.',
          he: 'כשצומת מייצר פלט, הצומת הבא יכול להתייחס לכל שדה מהפלט הזה. n8n חושף נתוני צומת קודם דרך גרירה-שחרור או תחביר ביטויים. כך "כתובת האימייל שממלא הטופס הקליד" הופכת ל"נמען התגובה שלנו" בלי שאת מעתיקה כלום.',
        },
      },
    ],
    principle: {
      en: 'A configured node is a promise; verify it before you connect the next',
      he: 'צומת מוגדר הוא הבטחה; אמתי אותה לפני שאת מחברת את הבא',
    },
  },
  {
    number: '05',
    title: { en: 'Credentials & Connections', he: 'אישורים וחיבורים' },
    subtitle: {
      en: 'Why a node cannot send email until you prove you own the account',
      he: 'למה צומת לא יכול לשלוח אימייל עד שאת מוכיחה שאת בעלת החשבון',
    },
    sections: [
      {
        heading: { en: 'The Core Concept', he: 'המושג הגרעיני' },
        body: {
          en: 'n8n does not have accounts on Gmail, Telegram, or OpenAI. You do. To let n8n act on your behalf, you must provide credentials — an OAuth authorization, an API key, a service account. This is not n8n paranoia; it is the same reason your bank asks for identification.',
          he: 'ל-n8n אין חשבונות ב-Gmail, טלגרם, או OpenAI. לך יש. כדי לאפשר ל-n8n לפעול בשמך, עלייך לספק אישורים — אישור OAuth, מפתח API, חשבון שירות. זו לא פרנויה של n8n; זו אותה סיבה שהבנק שלך מבקש זיהוי.',
        },
      },
      {
        heading: { en: 'Three Credential Types', he: 'שלושה סוגי אישורים' },
        body: {
          en: "OAuth: you click a button, sign in to the service (Gmail, Slack), grant n8n permission. The token is stored and refreshed automatically. API key: you generate a long string in the service's dashboard and paste it into n8n. Service account: a special robot account with its own JSON credentials, used for server-to-server services.",
          he: 'OAuth: את לוחצת על כפתור, נכנסת לשירות (Gmail, Slack), נותנת ל-n8n הרשאה. הטוקן נשמר ומתרענן אוטומטית. מפתח API: את מפיקה מחרוזת ארוכה בלוח הבקרה של השירות ומדביקה אותה ב-n8n. חשבון שירות: חשבון רובוט מיוחד עם אישורי JSON משלו, משמש לשירותי שרת-לשרת.',
        },
      },
      {
        heading: { en: 'Security Hygiene', he: 'היגיינת אבטחה' },
        body: {
          en: 'Credentials are stored encrypted in your n8n account. Never paste them into workflows themselves. Never share screenshots of credential screens. Never commit them to any repository. If a credential leaks, revoke it immediately in the source service, then regenerate.',
          he: 'אישורים נשמרים מוצפנים בחשבון ה-n8n שלך. אף פעם אל תדביקי אותם לתוך תהליכי עבודה עצמם. אף פעם אל תשתפי צילומי מסך של מסכי אישורים. אף פעם אל תעלי אותם לאף מאגר קוד. אם אישור דולף, בטלי אותו מיד בשירות המקור, ואז חוללי מחדש.',
        },
      },
    ],
    principle: {
      en: 'Every credential is a signed permission slip — treat it as legally binding',
      he: 'כל אישור הוא פתק הרשאה חתום — התייחסי אליו כאל מחייב משפטית',
    },
  },
  {
    number: '06',
    title: { en: 'The Honest Warning', he: 'האזהרה ההוגנת' },
    subtitle: {
      en: 'What YouTube automation channels do not tell you',
      he: 'מה שערוצי אוטומציה ביוטיוב לא מספרים לך',
    },
    sections: [
      {
        heading: { en: 'The Marketing Claim', he: 'הטענה השיווקית' },
        body: {
          en: 'A large ecosystem of content markets no-code automation as a path to substantial income: "I built an automation and sold it for thirty thousand dollars." Some of these claims are true. Most are exaggerated, cherry-picked, or fabricated for engagement.',
          he: 'אקוסיסטם תוכן גדול משווק אוטומציה ללא קוד כדרך להכנסה משמעותית: "בניתי אוטומציה ומכרתי אותה בשלושים אלף דולר." חלק מהטענות האלה נכונות. רובן מוגזמות, נבחרות בקפידה, או מפוברקות למעורבות.',
        },
      },
      {
        heading: { en: 'The Reality the Lecturer Gave', he: 'המציאות שהמרצה נתן' },
        body: {
          en: 'Serious enterprises rarely build production systems on n8n. When companies have real automation needs, they hire developers to write proper code. n8n is used for personal workflows, prototypes, small-team tools — not mission-critical infrastructure. Understanding this saves you from chasing a false career path.',
          he: 'ארגונים רציניים לעיתים רחוקות בונים מערכות ייצור על n8n. כשלחברות יש צרכי אוטומציה אמיתיים, הן שוכרות מפתחים כדי לכתוב קוד נאות. n8n משמש לתהליכי עבודה אישיים, אבות טיפוס, כלים לצוותים קטנים — לא לתשתית קריטית למשימה. הבנת זה חוסכת ממך מרדף אחר מסלול קריירה שקרי.',
        },
      },
      {
        heading: { en: 'Why It Still Matters to Learn', he: 'למה עדיין חשוב ללמוד' },
        body: {
          en: 'The concepts scaffold future code. The tool itself has real uses for personal productivity, small automations, quick prototypes. But treat it as a stepping stone, not a career. When something breaks in n8n at scale, debugging is painful — a strong reason serious work happens in code.',
          he: 'המושגים מהווים פיגום לקוד עתידי. הכלי עצמו יש לו שימושים אמיתיים לפרודוקטיביות אישית, אוטומציות קטנות, אבות טיפוס מהירים. אבל התייחסי אליו כאל אבן דריכה, לא קריירה. כשמשהו נשבר ב-n8n בקנה מידה, ניפוי הבאגים כואב — סיבה חזקה שעבודה רצינית מתרחשת בקוד.',
        },
      },
    ],
    principle: {
      en: 'Learn the tool, refuse the myth',
      he: 'למדי את הכלי, סרבי למיתוס',
    },
  },
  {
    number: '07',
    title: { en: 'The First Workflow', he: 'תהליך העבודה הראשון' },
    subtitle: {
      en: 'Building the click-to-email demonstration end to end',
      he: 'בניית הדגמת קליק-לאימייל מקצה לקצה',
    },
    sections: [
      {
        heading: { en: 'Step One · Add the Trigger', he: 'שלב א · הוסיפי את הטריגר' },
        body: {
          en: 'Open a new workflow. Add a Manual Trigger node — the simplest possible starting point. This node has one job: when you click Execute, it fires the workflow. No credentials needed. No configuration required. It is the "hello world" of triggers.',
          he: 'פתחי תהליך עבודה חדש. הוסיפי צומת Manual Trigger — נקודת ההתחלה הפשוטה ביותר האפשרית. לצומת הזה יש עבודה אחת: כשאת לוחצת Execute, הוא מפעיל את תהליך העבודה. לא נדרשים אישורים. לא נדרשת הגדרה. זה ה"hello world" של הטריגרים.',
        },
      },
      {
        heading: { en: 'Step Two · Add the Action', he: 'שלב ב · הוסיפי את הפעולה' },
        body: {
          en: 'Click the plus after the trigger. Search "send email". Select the Gmail send node. Now you must authorize — click Connect, sign in to your Google account, grant permission. n8n stores the credential and returns you to the node.',
          he: 'לחצי על הפלוס אחרי הטריגר. חפשי "send email". בחרי את צומת Gmail send. עכשיו עלייך לתת הרשאה — לחצי Connect, היכנסי לחשבון Google שלך, הענקי הרשאה. n8n שומר את האישור ומחזיר אותך לצומת.',
        },
      },
      {
        heading: { en: 'Step Three · Configure & Test', he: 'שלב ג · הגדירי ובדקי' },
        body: {
          en: 'Fill in the recipient (your own email for testing), subject, message body. Click Execute Workflow. Check your inbox — the email should arrive within seconds. If it does not, the node panel shows red error indicators with the exact failure. Common causes: wrong recipient format, expired credential, service rate limit.',
          he: 'מלאי את הנמען (האימייל שלך לבדיקה), נושא, גוף ההודעה. לחצי Execute Workflow. בדקי את התיבה — האימייל אמור להגיע תוך שניות. אם לא, פאנל הצומת מראה סימני שגיאה אדומים עם הכשל המדויק. גורמים נפוצים: פורמט נמען שגוי, אישור שפג תוקפו, מגבלת קצב של שירות.',
        },
      },
      {
        heading: { en: 'Step Four · Understand What Happened', he: 'שלב ד · הביני מה קרה' },
        body: {
          en: 'You have just chained two systems that had no prior relationship. n8n received your click, held your Gmail credential, made an authenticated API call on your behalf, waited for confirmation, returned success. The same shape applies when the trigger is a form submission and the action is a database write — only the specifics change.',
          he: 'זה עתה שרשרת שתי מערכות שלא היה ביניהן קשר קודם. n8n קיבל את הקליק שלך, החזיק את אישור Gmail שלך, ביצע קריאת API מאומתת בשמך, המתין לאישור, החזיר הצלחה. אותה צורה חלה כשהטריגר הוא שליחת טופס והפעולה היא כתיבה למסד נתונים — רק הפרטים משתנים.',
        },
      },
    ],
    principle: {
      en: 'The simplest workflow teaches everything the complex ones will require',
      he: 'תהליך העבודה הפשוט ביותר מלמד את כל מה שהמורכבים ידרשו',
    },
  },
  {
    number: '08',
    title: { en: 'The AI Agent Node', he: 'צומת סוכן ה-AI' },
    subtitle: {
      en: 'When a workflow needs to think, not just move data',
      he: 'כשתהליך עבודה צריך לחשוב, לא רק להזיז נתונים',
    },
    sections: [
      {
        heading: { en: 'What the Agent Node Adds', he: 'מה צומת הסוכן מוסיף' },
        body: {
          en: 'Standard nodes move data between systems. The AI Agent node inserts reasoning into the chain. Feed it text and it can summarize, classify, extract, translate, or answer. It uses an LLM (OpenAI, Anthropic, or others) behind the scenes — you connect the LLM as a credential, the agent handles the rest.',
          he: 'צמתים סטנדרטיים מזיזים נתונים בין מערכות. צומת סוכן ה-AI מכניס חשיבה לשרשרת. הזיני אותו בטקסט והוא יכול לסכם, לסווג, לחלץ, לתרגם, או לענות. הוא משתמש ב-LLM (OpenAI, Anthropic, או אחרים) מאחורי הקלעים — את מחברת את ה-LLM כאישור, הסוכן מטפל בשאר.',
        },
      },
      {
        heading: { en: 'The Insurance Call Pattern', he: 'תבנית שיחת הביטוח' },
        body: {
          en: 'The lecturer walked through this concrete example. A phone call is recorded. A transcription node converts audio to text. The AI Agent node reads the transcript, summarizes the conversation, extracts key points, flags problematic tones. The output writes to a Google Sheet and sends a Telegram alert. One workflow, five node types, a real quality-monitoring system.',
          he: 'המרצה עבר דרך הדוגמה הקונקרטית הזו. שיחת טלפון מוקלטת. צומת תמלול ממיר שמע לטקסט. צומת סוכן ה-AI קורא את התמלול, מסכם את השיחה, מחלץ נקודות מפתח, מסמן טונים בעייתיים. הפלט נכתב ל-Google Sheet ושולח התראת טלגרם. תהליך עבודה אחד, חמישה סוגי צמתים, מערכת ניטור איכות אמיתית.',
        },
      },
      {
        heading: { en: 'Where AI Agents Break', he: 'איפה סוכני AI נשברים' },
        body: {
          en: 'Cost accumulates fast. Every workflow execution that hits the LLM costs pennies to dollars depending on the model and prompt length. A workflow that runs every minute with a long prompt can burn a substantial credit balance overnight. Always test with small volumes; always monitor token usage; always consider caching results when input repeats.',
          he: 'עלות מצטברת מהר. כל הרצת תהליך עבודה שמגיעה ל-LLM עולה מאגורות לדולרים תלוי במודל ובאורך הפרומפט. תהליך עבודה שרץ כל דקה עם פרומפט ארוך יכול לשרוף יתרת אשראי משמעותית בן לילה. תמיד בדקי עם נפחים קטנים; תמיד עקבי אחר שימוש בטוקנים; תמיד שקלי מטמון תוצאות כשהקלט חוזר.',
        },
      },
    ],
    principle: {
      en: 'Reasoning in a workflow is powerful and expensive — meter it deliberately',
      he: 'חשיבה בתהליך עבודה היא חזקה ויקרה — מדדי אותה בכוונה',
    },
  },
  {
    number: '09',
    title: { en: 'When to Choose Code Instead', he: 'מתי לבחור בקוד במקום' },
    subtitle: {
      en: 'The threshold where no-code stops helping',
      he: 'הסף שבו no-code מפסיק לעזור',
    },
    sections: [
      {
        heading: { en: 'The Debugging Cliff', he: 'צוק ניפוי הבאגים' },
        body: {
          en: 'The lecturer stated it plainly: when something breaks in n8n at any scale, debugging is painful. Visual tools obscure the exact state of data at each step. Error messages are often generic. Reproducing a failure is difficult when the trigger was a one-time event. Code offers logs, breakpoints, unit tests — n8n does not.',
          he: 'המרצה אמר זאת בברור: כשמשהו נשבר ב-n8n בכל קנה מידה, ניפוי הבאגים כואב. כלים ויזואליים מטשטשים את המצב המדויק של הנתונים בכל שלב. הודעות שגיאה לרוב גנריות. שחזור כשל קשה כשהטריגר היה אירוע חד-פעמי. קוד מציע לוגים, נקודות עצירה, בדיקות יחידה — n8n לא.',
        },
      },
      {
        heading: { en: 'The Complexity Threshold', he: 'סף המורכבות' },
        body: {
          en: 'Rule of thumb: if your workflow has more than fifteen nodes, more than three branching conditions, or handles more than a hundred executions per day with reliability requirements — the code version is easier, not harder. Below that threshold, n8n wins on setup time. Above it, code wins on maintainability.',
          he: 'כלל אצבע: אם תהליך העבודה שלך כולל יותר מחמישה עשר צמתים, יותר משלושה תנאי הסתעפות, או מטפל ביותר ממאה הרצות ביום עם דרישות אמינות — גרסת הקוד קלה יותר, לא קשה יותר. מתחת לסף הזה, n8n מנצח בזמן ההקמה. מעליו, קוד מנצח על תחזוקה.',
        },
      },
      {
        heading: { en: 'What This Means for Module 3', he: 'מה זה אומר למודול 3' },
        body: {
          en: 'Everything you just learned in n8n has an equivalent in Python. A trigger becomes a scheduler or event handler. A node becomes a function. A workflow becomes a script. Credentials become environment variables. The mental model transfers cleanly. Module 3 teaches the language that removes the ceiling on what you can build.',
          he: 'כל מה שלמדת ב-n8n יש לו מקבילה בפייתון. טריגר הופך למתזמן או מטפל אירועים. צומת הופך לפונקציה. תהליך עבודה הופך לסקריפט. אישורים הופכים למשתני סביבה. המודל המנטלי עובר בצורה נקייה. מודול 3 מלמד את השפה שמסירה את התקרה על מה שאת יכולה לבנות.',
        },
      },
    ],
    principle: {
      en: 'Every tool has a ceiling — know yours before you hit it',
      he: 'לכל כלי יש תקרה — הכירי את שלך לפני שאת פוגעת בה',
    },
  },
  {
    number: '10',
    title: { en: 'Diagnostic Questions', he: 'שאלות אבחון' },
    subtitle: {
      en: 'Questions that test whether the mental model transferred',
      he: 'שאלות שבוחנות אם המודל המנטלי הועבר',
    },
    sections: [
      {
        heading: { en: 'Q · Trigger vs. Action', he: 'ש · טריגר מול פעולה' },
        body: {
          en: 'Q: A workflow needs to send a summary email every Monday at 9 AM. Which node type is the trigger, and which is the action? A: The trigger is a Schedule node configured for weekly Monday 9 AM firing. The action is a Gmail send node with the email body. Every workflow separates "what starts this" from "what this does."',
          he: 'ש: תהליך עבודה צריך לשלוח אימייל סיכום כל יום שני בשעה 9. איזה סוג צומת הוא הטריגר, ואיזה הוא הפעולה? ת: הטריגר הוא צומת Schedule המוגדר להפעלה שבועית ביום שני 9. הפעולה היא צומת Gmail send עם גוף האימייל. כל תהליך עבודה מפריד "מה מתחיל את זה" מ"מה זה עושה".',
        },
      },
      {
        heading: { en: 'Q · Why Credentials Exist', he: 'ש · למה אישורים קיימים' },
        body: {
          en: 'Q: Why cannot n8n send email from your Gmail account without a credential setup? A: n8n has no relationship with Google. Your Gmail account is yours. Sending email as you requires proof — an OAuth token you granted after signing in. Without it, n8n would be an anonymous sender that Gmail would refuse.',
          he: 'ש: למה n8n לא יכול לשלוח אימייל מחשבון Gmail שלך ללא הגדרת אישור? ת: ל-n8n אין קשר עם Google. חשבון Gmail שלך הוא שלך. שליחת אימייל בשמך דורשת הוכחה — טוקן OAuth שהענקת לאחר כניסה. בלעדיו, n8n היה שולח אנונימי ש-Gmail היה מסרב.',
        },
      },
      {
        heading: { en: 'Q · The Sale Claim', he: 'ש · טענת המכירה' },
        body: {
          en: 'Q: Someone tells you they built an n8n automation and sold it to a Fortune 500 company for $30,000. What is your first question? A: Which company, what was the workflow, and can you show the contract? Serious enterprises rarely run production automation on n8n. The claim is possible but requires verification. Most such stories are marketing.',
          he: 'ש: מישהו אומר לך שהוא בנה אוטומציית n8n ומכר אותה לחברה מ-Fortune 500 בשלושים אלף דולר. מה השאלה הראשונה שלך? ת: איזו חברה, מה היה תהליך העבודה, ואפשר לראות את החוזה? ארגונים רציניים לעיתים רחוקות מריצים אוטומציית ייצור על n8n. הטענה אפשרית אך דורשת אימות. רוב הסיפורים כאלו הם שיווק.',
        },
      },
      {
        heading: { en: 'Q · When to Migrate to Code', he: 'ש · מתי להעביר לקוד' },
        body: {
          en: 'Q: Your n8n workflow has grown to twenty nodes with four conditional branches. It runs 500 times a day and occasionally fails silently. What do you do? A: Migrate to code. The debugging pain will exceed the setup savings. Extract the logic to Python or JavaScript, add proper logging, add error monitoring. The n8n version taught you what to build — code lets you maintain it.',
          he: 'ש: תהליך העבודה שלך ב-n8n גדל לעשרים צמתים עם ארבעה ענפים מותנים. הוא רץ 500 פעמים ביום ולפעמים נכשל בשקט. מה את עושה? ת: העבירי לקוד. כאב ניפוי הבאגים יעלה על חיסכון ההקמה. חלצי את הלוגיקה לפייתון או JavaScript, הוסיפי לוגים תקינים, הוסיפי ניטור שגיאות. גרסת ה-n8n לימדה אותך מה לבנות — קוד מאפשר לך לתחזק אותו.',
        },
      },
    ],
    principle: {
      en: 'A question you can answer proves the concept absorbed',
      he: 'שאלה שאת יכולה לענות עליה מוכיחה שהמושג נספג',
    },
  },
];
