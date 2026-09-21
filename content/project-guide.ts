import type { Bilingual } from '@/lib/registry';

export type ProjectStep = {
  number: number;
  title: Bilingual;
  points: Bilingual[];
};

export type ProjectPhase = {
  id: string;
  phaseLabel: Bilingual;
  title: Bilingual;
  steps: ProjectStep[];
};

// Dr. Zuari's own 18-step roadmap for building a project from scratch — "idea to production,
// a complete development lifecycle with AI integration" — sourced verbatim/translated from his
// "Building a Project from Scratch" deck (linked below), not synthesized.
export const projectPhases: ProjectPhase[] = [
  {
    id: 'discovery',
    phaseLabel: { en: 'Phase 1 · Discovery', he: 'שלב 1 · גילוי' },
    title: { en: 'Problem, User & MVP', he: 'בעיה, משתמש, ו-MVP' },
    steps: [
      {
        number: 1,
        title: { en: 'Define the Problem', he: 'הגדירי את הבעיה' },
        points: [
          { en: `What is the problem? Describe the pain point clearly — not "communication is hard" but "remote teams lose track of decisions made in meetings."`, he: `מה הבעיה? תארי את נקודת הכאב בבירור — לא "תקשורת קשה" אלא "צוותים מרוחקים מאבדים מעקב אחרי החלטות שהתקבלו בפגישות."` },
          { en: `Who experiences this pain? Identify the people affected — students, developers, small business owners. The more specific, the better the solution.`, he: `מי חווה את הכאב הזה? זהי את האנשים המושפעים — סטודנטים, מפתחים, בעלי עסקים קטנים. ככל שספציפי יותר, כך הפתרון טוב יותר.` },
          { en: `Why is it worth solving? What happens if it isn't solved? How much time, money, or frustration does it cause? Validate the urgency.`, he: `למה שווה לפתור את זה? מה קורה אם לא פותרים? כמה זמן, כסף, או תסכול זה גורם? לוודא את הדחיפות.` },
          { en: `What does a good solution look like? Imagine the ideal outcome — what would the user say, how would their workflow change. Paint the "after" picture.`, he: `איך נראה פתרון טוב? לדמיין את התוצאה האידיאלית — מה המשתמשת הייתה אומרת, איך זרימת העבודה שלה הייתה משתנה. לצייר את תמונת ה"אחרי".` },
        ],
      },
      {
        number: 2,
        title: { en: 'Define the User & Desired Outcome', he: 'הגדירי את המשתמש והתוצאה הרצויה' },
        points: [
          { en: `Understand the user: who are they (a simple persona — age, role, tech level, daily challenges), what are they trying to do (one sentence), what blocks them today (existing tools, workarounds, frustrations).`, he: `הבנת המשתמש: מי היא (פרסונה פשוטה — גיל, תפקיד, רמת טכנולוגיה, אתגרים יומיומיים), מה היא מנסה לעשות (משפט אחד), מה חוסם אותה היום (כלים קיימים, פתרונות עוקפים, תסכולים).` },
          { en: `Define the desired outcome: what result do they want ("I want to find the answer in 30 seconds, not 10 minutes"), how will they feel, what changes in their workflow — before vs. after.`, he: `הגדרת התוצאה הרצויה: איזו תוצאה היא רוצה ("אני רוצה למצוא את התשובה תוך 30 שניות, לא 10 דקות"), איך היא תרגיש, מה משתנה בזרימת העבודה שלה — לפני מול אחרי.` },
          { en: `Tip: write a one-paragraph "user story" — As a [user], I want to [action] so that [outcome].`, he: `טיפ: לכתוב "סיפור משתמש" בפסקה אחת — בתור [משתמש], אני רוצה [פעולה] כדי ש[תוצאה].` },
        ],
      },
      {
        number: 3,
        title: { en: 'Define the MVP (Minimum Viable Product)', he: 'הגדירי את ה-MVP (מוצר מינימלי בר-קיימא)' },
        points: [
          { en: `Must Have — core features that solve the main problem; without these, the product has no value. E.g. core user flow (login → action → result), basic UI that works on desktop, data storage for user input, one complete use case end-to-end.`, he: `חובה — תכונות הליבה שפותרות את הבעיה המרכזית; בלעדיהן, למוצר אין ערך. למשל זרימת משתמש מרכזית (login ← פעולה ← תוצאה), ממשק בסיסי שעובד בדסקטופ, אחסון נתונים לקלט המשתמש, מקרה שימוש אחד שלם מקצה לקצה.` },
          { en: `Nice to Have — useful features that improve the experience but aren't critical for launch. E.g. mobile-responsive design, email notifications, user profile settings, performance optimizations.`, he: `כדאי — תכונות מועילות שמשפרות את החוויה אך אינן קריטיות להשקה. למשל עיצוב רספונסיבי למובייל, התראות אימייל, הגדרות פרופיל משתמש, אופטימיזציות ביצועים.` },
          { en: `Out of Scope — features explicitly NOT part of V1, written down so you don't get distracted. E.g. multi-language support, an advanced analytics dashboard, third-party integrations, payment processing.`, he: `מחוץ לתחום — תכונות שבמפורש אינן חלק מ-V1, כתובות במפורש כדי לא להסיח את הדעת. למשל תמיכה רב-לשונית, לוח בקרה אנליטי מתקדם, אינטגרציות צד-שלישי, עיבוד תשלומים.` },
        ],
      },
    ],
  },
  {
    id: 'design',
    phaseLabel: { en: 'Phase 2 · Design', he: 'שלב 2 · עיצוב' },
    title: { en: 'User Experience & User Interface', he: 'חוויית משתמש וממשק משתמש' },
    steps: [
      {
        number: 4,
        title: { en: 'Design the User Experience (UX)', he: 'עיצוב חוויית המשתמש (UX)' },
        points: [
          { en: `What is the user's first step? Which screens or actions do they go through? Where might they get stuck? How do we simplify their path?`, he: `מה הצעד הראשון של המשתמשת? באילו מסכים או פעולות היא עוברת? איפה היא עלולה להיתקע? איך מפשטים את הדרך שלה?` },
          { en: `Tool: Google Stitch — describe the desired UX in natural language and it generates user flows and screens automatically; "stitch" screens together and click Play to preview an interactive flow; refine with follow-up prompts; validates user journeys in minutes, not days.`, he: `כלי: Google Stitch — לתאר את ה-UX הרצוי בשפה טבעית והוא מייצר זרימות משתמש ומסכים אוטומטית; "לתפור" מסכים יחד וללחוץ Play לתצוגה מקדימה של זרימה אינטראקטיבית; לחדד עם פרומפטים המשך; מאמת מסעות משתמש תוך דקות, לא ימים.` },
        ],
      },
      {
        number: 5,
        title: { en: 'Design the User Interface (UI)', he: 'עיצוב ממשק המשתמש (UI)' },
        points: [
          { en: `Screen layouts, information hierarchy, buttons/fields/navigation, consistent and clean design.`, he: `פריסות מסך, היררכיית מידע, כפתורים/שדות/ניווט, עיצוב עקבי ונקי.` },
          { en: `Tool: Google Stitch again — AI generates high-fidelity UI from text prompts, powered by Gemini 2.5 Pro (multimodal input); export to Figma or generate front-end code directly; can extract a design system from any URL. Free at stitch.withgoogle.com.`, he: `כלי: שוב Google Stitch — AI מייצר ממשק ברמת דיוק גבוהה מפרומפטים טקסטואליים, מופעל על ידי Gemini 2.5 Pro (קלט מולטימודלי); ייצוא ל-Figma או ייצור קוד front-end ישירות; יכול לחלץ מערכת עיצוב מכל URL. חינמי ב-stitch.withgoogle.com.` },
        ],
      },
    ],
  },
  {
    id: 'architecture',
    phaseLabel: { en: 'Phase 3 · Architecture', he: 'שלב 3 · ארכיטקטורה' },
    title: { en: 'Technical Planning & Tech Stack', he: 'תכנון טכני וערימת טכנולוגיה' },
    steps: [
      {
        number: 6,
        title: { en: 'Architecture & Tech Stack', he: 'ארכיטקטורה וערימת טכנולוגיה' },
        points: [
          { en: `What is the frontend? What is the backend? Where is data stored? How do components communicate? What services are needed?`, he: `מה ה-frontend? מה ה-backend? איפה מאוחסנים הנתונים? איך הרכיבים מתקשרים ביניהם? אילו שירותים נדרשים?` },
          { en: `The instructor's own reference stack: frontend HTML + CSS, backend Python + Flask, database & auth Supabase, API via Supabase REST + real-time, hosting on Railway.`, he: `הערימה של המרצה עצמו כדוגמה: frontend ב-HTML + CSS, backend ב-Python + Flask, בסיס נתונים ואימות ב-Supabase, API דרך Supabase REST + real-time, אחסון ב-Railway.` },
        ],
      },
      {
        number: 7,
        title: { en: 'Choose Your Tech Stack', he: 'בחרי את ערימת הטכנולוגיה שלך' },
        points: [
          { en: `Which programming language? Which framework? Which database? Which development tools?`, he: `איזו שפת תכנות? איזה framework? איזה בסיס נתונים? אילו כלי פיתוח?` },
          { en: `Python for backend/server logic, Flask as the lightweight web framework, HTML for page structure/content, CSS for styling/responsive design, Supabase for database, auth, and API.`, he: `Python ללוגיקת backend/שרת, Flask כ-framework קליל, HTML למבנה/תוכן הדף, CSS לעיצוב/רספונסיביות, Supabase לבסיס נתונים, אימות, ו-API.` },
          { en: `What Dr. Zuari actually chose for the real herbal-evidence project (docs/decisions.md D-002–D-012) — a different, more specific stack than the generic example above: backend Python 3.13, FastAPI, Uvicorn, \`uv\` for dependency management; frontend plain HTML/CSS/JS with no framework, served by Caddy; auth via Supabase (email/password, JWT validation).`, he: `מה ד״ר זוארי בפועל בחר עבור פרויקט herbal-evidence האמיתי (docs/decisions.md D-002–D-012) — ערימה שונה וספציפית יותר מהדוגמה הכללית למעלה: backend ב-Python 3.13, FastAPI, Uvicorn, \`uv\` לניהול תלויות; frontend ב-HTML/CSS/JS פשוט בלי framework, מוגש דרך Caddy; אימות דרך Supabase (אימייל/סיסמה, אימות JWT).` },
          { en: `AI provider: OpenAI, behind a replaceable interface (model/key set via \`AI_PROVIDER\`, \`AI_MODEL\`, \`AI_API_KEY\`) — without a key, it fails with a structured error rather than ever mocking content. Evidence sources: PubMed E-utilities and Europe PMC's REST API. Design: built in Google Stitch, the same tool from Phase 2 above.`, he: `ספק AI: OpenAI, מאחורי ממשק החלפה (מודל/מפתח נקבעים דרך \`AI_PROVIDER\`, \`AI_MODEL\`, \`AI_API_KEY\`) — בלי מפתח, זה נכשל עם שגיאה מובנית ולעולם לא מדמה תוכן. מקורות ראיות: PubMed E-utilities ו-REST API של Europe PMC. עיצוב: נבנה ב-Google Stitch, אותו כלי מהשלב 2 למעלה.` },
        ],
      },
    ],
  },
  {
    id: 'setup',
    phaseLabel: { en: 'Phase 4 · Setup', he: 'שלב 4 · הקמה' },
    title: { en: 'Project Setup & Version Control', he: 'הקמת פרויקט ובקרת גרסאות' },
    steps: [
      {
        number: 8,
        title: { en: 'Project Setup', he: 'הקמת הפרויקט' },
        points: [
          { en: `Create the project, install dependencies, configure environment variables, set up the folder structure, connect development tools.`, he: `יצירת הפרויקט, התקנת תלויות, הגדרת משתני סביבה, הקמת מבנה תיקיות, חיבור כלי פיתוח.` },
        ],
      },
      {
        number: 9,
        title: { en: 'Git & GitHub', he: 'Git ו-GitHub' },
        points: [
          { en: `Why version control matters, working with commits, working with branches, pushing code to GitHub, pull requests and code review.`, he: `למה בקרת גרסאות חשובה, עבודה עם commits, עבודה עם branches, דחיפת קוד ל-GitHub, pull requests וסקירת קוד.` },
          { en: `In the instructor's own terminology deck: Staged Changes — "preparing specific changes to be included in the next commit, like choosing which edits you're ready to save." Commit — "a saved snapshot of your changes in a project, like pressing 'save' with a note on what you updated."`, he: `בחוברת המינוח של המרצה עצמו: Staged Changes — "הכנת שינויים ספציפיים להכללה בקומיט הבא, כמו בחירת אילו עריכות מוכנות לשמירה." Commit — "צילום מצב שמור של השינויים בפרויקט, כמו לחיצה על 'שמור' עם הערה על מה עודכן."` },
          { en: `Push — "sending your saved changes (commits) from your computer to the online repository on GitHub so others can see them." Pull — "downloading the latest changes from the online repository on GitHub to keep your own copy up-to-date."`, he: `Push — "שליחת השינויים השמורים (commits) מהמחשב שלך למאגר המקוון ב-GitHub כדי שאחרים יוכלו לראות אותם." Pull — "הורדת השינויים העדכניים ביותר מהמאגר המקוון ב-GitHub כדי לשמור על העותק שלך מעודכן."` },
          { en: `His own "Complete Workflow" diagram, solo version: Code → Add → Staged Changes → Committed Changes → Push → your GitHub repo. For collaboration/PR work: Fork someone else's repo → your own copy → clone/pull locally → code, add, commit, push back to your fork → Sync Fork to catch up with the original — the same discipline underneath a pull request.`, he: `תרשים "זרימת העבודה המלאה" שלו עצמו, גרסה עצמאית: Code ← Add ← Staged Changes ← Committed Changes ← Push ← מאגר ה-GitHub שלך. לעבודת שיתוף פעולה/PR: Fork למאגר של מישהו אחר ← העותק שלך ← clone/pull מקומית ← קוד, add, commit, push בחזרה ל-fork שלך ← Sync Fork כדי להדביק את המקור — אותה משמעת שנמצאת מתחת ל-pull request.` },
        ],
      },
    ],
  },
  {
    id: 'ai-integration',
    phaseLabel: { en: 'Phase 5 · AI Integration', he: 'שלב 5 · שילוב AI' },
    title: { en: 'AI Workflow, MCP & CrewAI Agents', he: 'תהליך עבודה עם AI, MCP, וסוכני CrewAI' },
    steps: [
      {
        number: 10,
        title: { en: 'AI Integration: Workflow, MCP & Agents', he: 'שילוב AI: תהליך עבודה, MCP, וסוכנים' },
        points: [
          { en: `How AI helps think, write, test, and improve; when to use it; when not to trust it blindly.`, he: `איך AI עוזר לחשוב, לכתוב, לבדוק, ולשפר; מתי להשתמש בו; מתי לא לבטוח בו בעיוורון.` },
        ],
      },
      {
        number: 11,
        title: { en: 'Set Up MCP', he: 'הגדירי MCP' },
        points: [
          { en: `What MCP is, what it's used for, how to install it, how to connect it to tools, how it extends agent capabilities.`, he: `מה זה MCP, למה הוא משמש, איך להתקין אותו, איך לחבר אותו לכלים, איך הוא מרחיב את יכולות הסוכן.` },
        ],
      },
      {
        number: 12,
        title: { en: 'CrewAI Agents', he: 'סוכני CrewAI' },
        points: [
          { en: `Define agents with roles, assign tasks & tools, agents collaborate as a crew — a Python-based framework — to automate dev, test, and research work.`, he: `הגדרת סוכנים עם תפקידים, הקצאת משימות וכלים, הסוכנים משתפים פעולה כ"צוות" — framework מבוסס Python — כדי להפוך לאוטומטיים פיתוח, בדיקות, ומחקר.` },
        ],
      },
    ],
  },
  {
    id: 'development',
    phaseLabel: { en: 'Phase 6 · Development', he: 'שלב 6 · פיתוח' },
    title: { en: 'Build, Test & Stabilize', he: 'בנייה, בדיקה, וייצוב' },
    steps: [
      {
        number: 13,
        title: { en: 'Build the First Features', he: 'בני את התכונות הראשונות' },
        points: [
          { en: `How to work: break work into small, focused tasks (each task = one feature or fix), prioritize by impact, test as you go, keep a steady pace to avoid burnout and shortcuts.`, he: `איך לעבוד: לפרק את העבודה למשימות קטנות וממוקדות (כל משימה = תכונה או תיקון אחד), לתעדף לפי השפעה, לבדוק תוך כדי עבודה, לשמור על קצב יציב כדי להימנע משחיקה וקיצורי דרך.` },
          { en: `Best practices: commit after every working feature, use AI to generate boilerplate code, always review AI output before merging, keep functions short and readable.`, he: `שיטות עבודה מומלצות: לעשות commit אחרי כל תכונה עובדת, להשתמש ב-AI לייצור קוד תבנית, תמיד לבדוק פלט AI לפני מיזוג, לשמור על פונקציות קצרות וקריאות.` },
        ],
      },
      {
        number: 14,
        title: { en: 'Testing', he: 'בדיקות' },
        points: [
          { en: `Unit tests — test individual functions/methods in isolation, verifying each piece works correctly on its own.`, he: `בדיקות יחידה — בדיקת פונקציות/מתודות בודדות בבידוד, ווידוא שכל חלק עובד נכון בפני עצמו.` },
          { en: `Integration tests — test how different parts work together: API calls, database queries, component interactions.`, he: `בדיקות אינטגרציה — בדיקה איך חלקים שונים עובדים יחד: קריאות API, שאילתות בסיס נתונים, אינטראקציות בין רכיבים.` },
          { en: `Manual testing — walk through the app as a real user, click every button, fill every form, try unexpected inputs.`, he: `בדיקה ידנית — לעבור על האפליקציה כמשתמשת אמיתית, ללחוץ על כל כפתור, למלא כל טופס, לנסות קלטים בלתי צפויים.` },
          { en: `Edge case testing — what happens with empty inputs, very long text, no internet? Test the boundaries and limits.`, he: `בדיקת מקרי קצה — מה קורה עם קלטים ריקים, טקסט ארוך מאוד, בלי אינטרנט? לבדוק את הגבולות והמגבלות.` },
        ],
      },
      {
        number: 15,
        title: { en: 'Bug Fixing & Stability', he: 'תיקון באגים וייצוב' },
        points: [
          { en: `Common issues: typos, wrong variable names, missing imports; error handling — wrap risky code in try/except; validations — check user input before processing; edge cases — empty fields, special characters, timeouts.`, he: `בעיות נפוצות: שגיאות הקלדה, שמות משתנים שגויים, imports חסרים; טיפול בשגיאות — לעטוף קוד מסוכן ב-try/except; ולידציות — לבדוק קלט משתמש לפני עיבוד; מקרי קצה — שדות ריקים, תווים מיוחדים, timeouts.` },
          { en: `Improving reliability: add logging to track what happens in production, show friendly error messages to users, use AI to debug (paste errors and get solutions), fix bugs before adding new features.`, he: `שיפור אמינות: להוסיף לוגים למעקב אחרי מה שקורה בפרודקשן, להציג הודעות שגיאה ידידותיות למשתמשים, להשתמש ב-AI לניפוי באגים (להדביק שגיאות ולקבל פתרונות), לתקן באגים לפני הוספת תכונות חדשות.` },
        ],
      },
    ],
  },
  {
    id: 'deployment',
    phaseLabel: { en: 'Phase 7 · Deployment', he: 'שלב 7 · פריסה' },
    title: { en: 'Deploy, Monitor & Iterate', he: 'פריסה, ניטור, ושיפור' },
    steps: [
      {
        number: 16,
        title: { en: 'Ship, Monitor & Improve', he: 'שיגור, ניטור, ושיפור' },
        points: [
          { en: `Connect the project to Railway, set up environment variables, connect a database if needed, do the first deployment, verify it works outside localhost.`, he: `לחבר את הפרויקט ל-Railway, להגדיר משתני סביבה, לחבר בסיס נתונים אם נדרש, לבצע את הפריסה הראשונה, לוודא שהיא עובדת מחוץ ל-localhost.` },
        ],
      },
      {
        number: 17,
        title: { en: 'Monitoring & Logs', he: 'ניטור ולוגים' },
        points: [
          { en: `How to view errors, how to check logs, how to understand performance, how to debug for real users.`, he: `איך לצפות בשגיאות, איך לבדוק לוגים, איך להבין ביצועים, איך לנפות באגים עבור משתמשים אמיתיים.` },
        ],
      },
      {
        number: 18,
        title: { en: 'Feedback & Iteration', he: 'משוב ושיפור מתמשך' },
        points: [
          { en: `What users are saying, what worked well, what confused them, which features to add next.`, he: `מה המשתמשים אומרים, מה עבד טוב, מה בלבל אותם, אילו תכונות להוסיף הלאה.` },
        ],
      },
    ],
  },
];

export type SpokenExcerpt = {
  he: string;
  en: string;
};

// Not the slide deck — his actual spoken words, live-walking the class through characterizing a real
// project idea (a "herbal remedy identification app," brainstormed live in Session 22's chat) against
// the same steps as the roadmap above. Pulled from the session's auto-generated caption transcript
// (Session Transcript, linked in Module 5's Source Materials) — lightly cleaned for stray recognition
// noise (repeated fillers, mid-word cutoffs), but not rewritten; a live transcript, not a polished quote.
export const projectSpokenExcerpts: SpokenExcerpt[] = [
  {
    he: `בואו נחשוב על איזושהי בעיה מסוימת כדי שנבנה אותה ממש מקצה לקצה כמה שאפשר — כי "מקצה לקצה" זה יכול להיות אינסופי. אבל יש לי איזשהו רעיון שיכול להיות מאוד קטן.`,
    en: `Let's think of some specific problem so we build it really end-to-end, as much as possible — because "end-to-end" can be infinite. But I have some idea that could be very small.`,
  },
  {
    he: `יש פה — האפיון הזה דורש המון זמן. אנחנו עושים את זה מהר עכשיו, אבל זה לוקח הרבה יותר זמן בחיים האמיתיים. אני לא עושה שתיים-שתיים-שתיים — אני קורא, מנסה להבין במה מדובר. זה לוקח הרבה מאוד זמן.`,
    en: `This characterization — this takes a huge amount of time. We're doing it fast right now, but in real life it takes much longer. I don't just go two-two-two — I read, I try to understand what it's actually about. That takes a very long time.`,
  },
  {
    he: `זה משהו שאנחנו חייבים כדי לבנות את הפרויקט — אין ברירה.`,
    en: `This is something we have to do to build the project — there's no choice.`,
  },
  {
    he: `אני תמיד אוהב לעשות את מה שכתבתי עכשיו — אחרי שסיימתי לעיין, אני תמיד אוהב להסתכל על זה במבט-על, באמצעות תרשים. אני חושב שזה גם מאוד עוזר להבין את זה ממבט-על. אז תמיד אני אומר לו: תכיני לי איזה תרשים כזה, שיעזור לי להבין איך כל התהליך הזה הולך לעבוד.`,
    en: `I always like to take what I just wrote — after I finish reviewing it, I always like to look at it from a bird's-eye view, through a diagram. I think that really helps understand it from above. So I always tell it: prepare me a diagram like this, to help me understand how this whole process is going to work.`,
  },
  {
    he: `עכשיו אני חושב על הפרויקט מהפרונט — אבל זה לא מספיק. אנחנו צריכים להגיד לו כמה דברים. קודם כול — עם אילו כלים אני בעצם הולך לעבוד. אז אני אומר לו: Python. אני רוצה שיהיה — שזה יהיה מהיר. Flask.`,
    en: `Now I'm thinking about the project from the front[end] — but that's not enough. We need to tell it a few things. First — what tools am I actually going to work with. So I tell it: Python. I want it to — for it to be fast. Flask.`,
  },
  {
    he: `אני מזכיר לכם: כשנכנסים לאיזשהו אתר, מה שאתם רואים זה הטקסט עצמו, הפסקאות עצמן — וכל הקישוט מסביב, זה הסטייל.`,
    en: `I'll remind you: when you go into some website, what you're actually seeing is the text itself, the paragraphs themselves — and all the decoration around it, that's the style [CSS].`,
  },
  {
    he: `Railway — היא בעצם פלטפורמה שתאפשר לנו להעלות את האפליקציה.`,
    en: `Railway — it's essentially a platform that will let us upload the app [deploy it].`,
  },
];

export type PathStep = {
  title: Bilingual;
  body: Bilingual;
};

// Reconstructed from Session 22's own live Zoom chat log (not the VTT transcript above) — the actual
// sequence the class worked through to go from an open brainstorm to the specific characterization
// prompt Dr. Zuari eventually shared. Individual students' names are omitted here for privacy; the
// site's own author (PriYa N. Chen) is named where her real, visible messages shaped a decision, since
// this is her own site and her own class contribution.
export const projectPromptPath: PathStep[] = [
  {
    title: { en: 'Open Brainstorm', he: 'סיעור מוחות פתוח' },
    body: {
      en: `The class threw out real-world computer-vision ideas in chat: airport logistics, warehouse inventory counting, autonomous cars, parking, supermarket checkout, a "smart shopping cart" that auto-detects items and charges on the way out.`,
      he: `הכיתה זרקה בצ'אט רעיונות אמיתיים לראייה ממוחשבת: לוגיסטיקת שדה תעופה, ספירת מלאי במחסן, מכוניות אוטונומיות, חנייה, קופה בסופרמרקט, "עגלת קניות חכמה" שמזהה מוצרים אוטומטית וגובה תשלום ביציאה.`,
    },
  },
  {
    title: { en: 'The Pivot to Plants', he: 'המעבר לצמחים' },
    body: {
      en: `Someone suggested "plants," another "plant disease detection" — then a third framing, "medicinal plant identification," pulled the room together. The site's own author (PriYa N. Chen), live in that chat, reacted immediately: "medicinal plants — excellent!!"`,
      he: `מישהו הציע "צמחים," מישהו אחר "זיהוי מחלות צמחים" — ואז מסגור שלישי, "זיהוי צמחי מרפא," איחד את החדר. המחברת של האתר עצמו (PriYa N. Chen), בצ'אט החי באותו רגע, הגיבה מיד: "צמחי מרפא מעולה!!"`,
    },
  },
  {
    title: { en: 'The Characterization Poll', he: 'הסקר על האפיון' },
    body: {
      en: `Dr. Zuari proposed three possible framings for the app and the class voted live in chat, 1/2/3. Consensus landed on a blend of two of them — evidence-based framing for skeptics, accessible framing for everyday users — a split PriYa proposed directly: "2 for skeptics, 3 for the user."`,
      he: `ד״ר זוארי הציע שלושה מסגורים אפשריים לאפליקציה, והכיתה הצביעה בצ'אט החי, 1/2/3. ההסכמה נחתה על שילוב של שניים מהם — מסגור מבוסס-ראיות לסקפטיים, מסגור נגיש למשתמשים רגילים — חלוקה ש-PriYa הציעה ישירות: "2 לסקפטיים, 3 למשתמש."`,
    },
  },
  {
    title: { en: 'Scoping the Knowledge Base', he: 'תיחום מאגר הידע' },
    body: {
      en: `The class picked which medical traditions the system should actually draw from — Chinese medicine, Ayurveda, homeopathy — again on PriYa's suggestion ("go with Chinese medicine, Ayurveda, homeopathy"), adopted directly into the spec.`,
      he: `הכיתה בחרה מאילו מסורות רפואיות המערכת תשאב בפועל — רפואה סינית, איירוודה, הומאופתיה — שוב לפי הצעתה של PriYa ("לך על רפואה סינית, איירוודה, הומאופתיה"), שאומצה ישירות לתוך המפרט.`,
    },
  },
  {
    title: { en: 'Defining the MVP\'s Target Symptoms', he: 'הגדרת התסמינים למוצר המינימלי' },
    body: {
      en: `Brainstormed live: cancer support, winter illnesses, children's illnesses, immune support, pain, nausea, fatigue, appetite changes, sleep issues — the raw material for the MVP's actual scope.`,
      he: `סוער בשידור חי: תמיכה בסרטן, מחלות חורף, מחלות ילדים, חיזוק מערכת החיסון, כאב, בחילה, עייפות, שינויים בתיאבון, בעיות שינה — חומר הגלם לתחום בפועל של המוצר המינימלי.`,
    },
  },
  {
    title: { en: 'Designing the Trust Layer', he: 'עיצוב שכבת האמון' },
    body: {
      en: `PriYa proposed that the system's "researcher" role should be an AI agent whose output requires human/expert approval before publishing, rather than trusting a single AI answer outright — the design point Dr. Zuari later used to explain content states (checked vs. pending review) in the VTT excerpts above.`,
      he: `PriYa הציעה שתפקיד ה"חוקר" של המערכת יהיה סוכן AI שהפלט שלו דורש אישור אנושי/מומחה לפני פרסום, במקום לבטוח בתשובת AI בודדת ללא בדיקה — נקודת העיצוב שד״ר זוארי השתמש בה בהמשך כדי להסביר מצבי תוכן (נבדק מול ממתין לבדיקה) בקטעי ה-VTT שלמעלה.`,
    },
  },
  {
    title: { en: 'Choosing the Platform', he: 'בחירת הפלטפורמה' },
    body: {
      en: `Students asked in chat whether Railway was like Vercel, or like Cloudflare — Dr. Zuari settled on Railway, the same platform named in the roadmap's own reference tech stack above.`,
      he: `סטודנטים שאלו בצ'אט האם Railway דומה ל-Vercel, או ל-Cloudflare — ד״ר זוארי קבע על Railway, אותה פלטפורמה שמופיעה בערימת הטכנולוגיה לדוגמה של המפת-דרכים למעלה.`,
    },
  },
  {
    title: { en: 'The Git Workflow Question', he: 'שאלת תהליך העבודה ב-Git' },
    body: {
      en: `A student asked about the actual difference between staying on a branch versus merging, and whether unrelated feature branches interfere with each other — leading into the same test-on-a-branch → merge-to-main → deploy discipline the CLI syntax section documents.`,
      he: `סטודנט שאל מה ההבדל בפועל בין להישאר על ענף לבין למזג, והאם ענפי תכונה לא-קשורים מפריעים אחד לשני — מה שהוביל לאותה משמעת בדיקה-על-ענף ← מיזוג-ל-main ← פריסה שסעיף התחביר של ה-CLI מתעד.`,
    },
  },
  {
    title: { en: 'The Handoff', he: 'ההעברה' },
    body: {
      en: `Near the end of class, students explicitly asked him in chat to "send the prompt of the characterization you sent to the chat[bot]" — he posted the real ChatGPT share link. Moments later, asked for "the GitHub link," he posted the resulting repo — the same two links attached above.`,
      he: `לקראת סוף השיעור, סטודנטים ביקשו ממנו במפורש בצ'אט "לשלוח את הפרומפט של האפיון ששלחת לצ'אט" — הוא פרסם את קישור השיתוף האמיתי של ChatGPT. רגעים לאחר מכן, כשנשאל על "הקישור מגיטהאב," הוא פרסם את המאגר שנוצר — אותם שני קישורים המצורפים למעלה.`,
    },
  },
];

// Honest reconstruction of what the characterization prompt actually specified — NOT the verbatim
// prompt text. The real prompt lives at the ChatGPT link above; it could not be retrieved through any
// automated method this session (direct fetch, backend API, and browser tooling were all blocked by
// Cloudflare's bot protection or unavailable). Every point below is instead cross-referenced from two
// independent real sources: the live chat log's decisions and Dr. Zuari's own spoken narration in the
// VTT transcript — so it's accurate to what was decided, even though it isn't a direct quote.
export const characterizationReconstruction: Bilingual[] = [
  {
    en: `Product: a plant-photo identification app — a user submits a photo of a plant plus the ailment they're hoping it addresses.`,
    he: `מוצר: אפליקציית זיהוי צמחים מתמונה — משתמש שולח תמונה של צמח בתוספת המחלה שהוא מקווה שהוא עוזר לה.`,
  },
  {
    en: `Core function: the system rates how evidence-based the claim "this plant helps with this condition" actually is — not a flat yes/no, a graded confidence with sources.`,
    he: `פונקציה מרכזית: המערכת מדרגת עד כמה הטענה "הצמח הזה עוזר למצב הזה" באמת מבוססת ראיות — לא כן/לא שטוח, אלא רמת ביטחון מדורגת עם מקורות.`,
  },
  {
    en: `Knowledge base scope: Traditional Chinese Medicine, Ayurveda, and homeopathy — three named traditions, deliberately not "all of alternative medicine."`,
    he: `היקף מאגר הידע: רפואה סינית מסורתית, איירוודה, והומאופתיה — שלוש מסורות מוגדרות בשם, במכוון לא "כל הרפואה האלטרנטיבית."`,
  },
  {
    en: `Target symptom categories for the MVP: cancer-adjacent support, winter illnesses, children's illnesses, immune support, pain, nausea, fatigue, appetite changes, sleep issues.`,
    he: `קטגוריות תסמינים לתחום המוצר המינימלי: תמיכה בהקשר סרטן, מחלות חורף, מחלות ילדים, חיזוק מערכת החיסון, כאב, בחילה, עייפות, שינויים בתיאבון, בעיות שינה.`,
  },
  {
    en: `Trust/validation layer: an AI "researcher" role drafts an evidence summary, but a human/expert must approve it before it's shown as a checked answer — content is explicitly split into "checked" vs. "pending review" states.`,
    he: `שכבת אמון/אימות: תפקיד "חוקר" AI מכין טיוטת סיכום ראיות, אבל אדם/מומחה חייב לאשר אותה לפני שהיא מוצגת כתשובה נבדקת — התוכן מפוצל במפורש למצבי "נבדק" מול "ממתין לבדיקה."`,
  },
  {
    en: `Explicit challenge instruction: don't let the model simply agree — if a suggested direction is weak, it should say so and push back with alternatives, rather than default to flattery.`,
    he: `הוראת אתגור מפורשת: לא לתת למודל סתם להסכים — אם כיוון מוצע חלש, הוא צריך לומר את זה ולדחוף עם אלטרנטיבות, במקום ברירת מחדל של החנפה.`,
  },
];

// Dr. Zuari's own live walkthrough of submitting/deploying the Herbal project — staged from Session
// 22's real caption transcript (a different, later segment than the excerpts above), covering staging
// vs. production, the branch discipline, the actual push→merge submission flow, and why local success
// doesn't guarantee cloud success. Reconstructed and lightly cleaned from auto-generated captions, same
// sourcing standard as the excerpts above — not a polished quote.
export const gitSubmissionStages: PathStep[] = [
  {
    title: { en: 'Why Deploy at All', he: 'למה בכלל לפרוס' },
    body: {
      en: `The code exists only on his own machine right now — no outside user can reach it. To let someone external actually use it, it has to go up to external servers, cloud services.`,
      he: `הקוד קיים כרגע רק על המחשב שלו — שום משתמש חיצוני לא יכול להגיע אליו. כדי לאפשר למישהו חיצוני להשתמש בו בפועל, הוא צריך לעלות לשרתים חיצוניים, שירותי ענן.`,
    },
  },
  {
    title: { en: 'Two Environments', he: 'שתי סביבות' },
    body: {
      en: `One environment is usually called staging (or "dev"); the other is called production. Staging is where you check that things actually work in the cloud, away from the client. Production is what the client sees.`,
      he: `סביבה אחת בדרך כלל נקראת staging (או "dev"); השנייה נקראת production. staging היא איפה שבודקים שהדברים באמת עובדים בענן, הרחק מהלקוח. production זה מה שהלקוח רואה.`,
    },
  },
  {
    title: { en: 'main Is the Client', he: 'main זה הלקוח' },
    body: {
      en: `The main branch is already connected to production and is normally not touched directly — only at the very first setup. main is the client. Real work happens on a separate branch.`,
      he: `הענף main כבר מחובר ל-production ובדרך כלל לא נוגעים בו ישירות — רק בהקמה הראשונית. main זה הלקוח. עבודה אמיתית קורית על ענף נפרד.`,
    },
  },
  {
    title: { en: 'The Submission Flow', he: 'תהליך ההגשה' },
    body: {
      en: `Write code → push it to your own branch. That automatically updates the cloud copy of that branch, so you can check how the app behaves in the cloud without the client seeing anything yet.`,
      he: `כותבים קוד ← דוחפים (push) אותו לענף שלך. זה מעדכן אוטומטית את העותק בענן של הענף הזה, כדי שתוכלי לבדוק איך האפליקציה מתנהגת בענן בלי שהלקוח רואה כלום עדיין.`,
    },
  },
  {
    title: { en: 'Why Staging Matters', he: 'למה staging חשוב' },
    body: {
      en: `There's a well-known saying in this world: what works locally won't necessarily work well in the cloud. Bugs can appear only once it's actually deployed. That's exactly why teams often label an early cloud version "beta" — so that if something breaks, it doesn't look bad in front of the client: "look, this isn't final, we'll take a look, we're learning from your experience too."`,
      he: `יש אמרה ידועה בעולם הזה: מה שעובד לוקאלית לא בהכרח יעבוד טוב בענן. באגים יכולים להופיע רק ברגע שזה באמת נפרס. בדיוק בגלל זה צוותים לעיתים קרובות מתייגים גרסת ענן מוקדמת כ"בטא" — כך שאם משהו נשבר, זה לא נראה רע מול הלקוח: "תראה, זה לא סופי, נבדוק, אנחנו גם לומדים מהניסיון שלך."`,
    },
  },
  {
    title: { en: 'The Merge', he: 'המיזוג' },
    body: {
      en: `Once you're satisfied it works in staging, you merge your branch back into main, deliberately — only that step is what actually reaches the client, in production.`,
      he: `ברגע שאת מרוצה שזה עובד ב-staging, ממזגים את הענף שלך בחזרה ל-main, בכוונה — רק השלב הזה הוא מה שבאמת מגיע ללקוח, ב-production.`,
    },
  },
  {
    title: { en: 'Merge Conflicts', he: 'קונפליקטים במיזוג' },
    body: {
      en: `Sometimes a feature clashes with something else and you get what's called a "git conflict." Whoever is responsible for the project then has to decide: accept this code, accept that code, or accept neither — that's a legitimate option too.`,
      he: `לפעמים תכונה מתנגשת עם משהו אחר ומקבלים מה שנקרא "git conflict." מי שאחראי על הפרויקט צריך אז להחליט: לקבל את הקוד הזה, לקבל את הקוד ההוא, או לא לקבל אף אחד מהם — זו גם אופציה לגיטימית.`,
    },
  },
  {
    title: { en: 'Worktrees (Deferred)', he: 'Worktrees (נדחה)' },
    body: {
      en: `Mentioned but not demonstrated live — deferred to a future session. The idea: instead of a branch, a worktree is a full, physically separate copy of the project, letting multiple agents work fully in parallel without overwriting each other, useful specifically for running several AI agents on the same project at once.`,
      he: `הוזכר אך לא הודגם בשידור חי — נדחה למפגש עתידי. הרעיון: במקום ענף, worktree הוא עותק מלא ונפרד פיזית של הפרויקט, שמאפשר למספר סוכנים לעבוד באופן מקביל מלא בלי לדרוס אחד את השני — שימושי במיוחד להרצת כמה סוכני AI על אותו פרויקט בו-זמנית.`,
    },
  },
  {
    title: { en: 'Splitting Frontend and Backend', he: 'פיצול פרונטאנד ובקאנד' },
    body: {
      en: `His own habit, stated directly: build two separate services rather than one — because a bug in the backend alone doesn't force you to touch the frontend, and vice versa. Combining everything into one bundle makes debugging much harder.`,
      he: `ההרגל שלו עצמו, נאמר ישירות: לבנות שני שירותים נפרדים במקום אחד — כי באג בבקאנד בלבד לא מחייב לגעת בפרונטאנד, ולהפך. איחוד הכול לחבילה אחת מקשה מאוד על ניפוי באגים.`,
    },
  },
];
