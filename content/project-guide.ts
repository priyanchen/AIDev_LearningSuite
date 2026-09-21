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
