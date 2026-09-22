import type { Bilingual } from '@/lib/registry';

export type PromptItem = {
  sessionNumber?: number;
  sessionSlug?: string;
  sourceLabel?: Bilingual;   // for prompts not tied to a recorded session — which deck it's from
  sourceUrl?: string;
  text: Bilingual;           // verbatim as typed (he/en), with a translation on the other side
  context: Bilingual;        // what it was demonstrating
  verbatim: 'he' | 'en';     // which side of `text` is the actual original, unaltered
};

export type PromptModule = {
  moduleId: string;
  title: Bilingual;
  prompts: PromptItem[];
};

// Every prompt here is verbatim from a real Zoom in-meeting chat log ("class chat"), typed live by
// Dr. Zuari during Sessions 01–22 — not reconstructed from a recording, not a card summary. Crawled
// across all 21 sessions that have a chat log on file (Session 21 has none). Sessions 01–07, 15, and
// 22 were fully read and had no qualifying prompts. Session 20's chat log exceeded a tool read-size
// limit and was only ~7% reviewed — absence there is not confirmed, only unread. One found item
// (Session 19) was excluded: it was an assignment instructing students to prompt Claude themselves,
// not a prompt Dr. Zuari typed to an AI.
export const promptModules: PromptModule[] = [
  {
    moduleId: '03-python',
    title: { en: 'Python', he: 'פייתון' },
    prompts: [
      {
        sessionNumber: 8,
        sessionSlug: 'session-08-python-5',
        text: {
          en: `create a readme file for this project`,
          he: `create a readme file for this project`,
        },
        context: {
          en: `A Claude Code demo — asking it to generate a README for the class project.`,
          he: `הדגמת Claude Code — בקשה ממנו לייצר README לפרויקט הכיתה.`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 9,
        sessionSlug: 'session-09-python-6',
        text: {
          he: `רשום לי את הפקודה כדי להוסיף דרך הPowerShell את ה path בצורה גלובלית`,
          en: `Write me the command to add the path globally via PowerShell.`,
        },
        context: {
          en: `Troubleshooting a Windows environment-variable/PATH setup issue live in class.`,
          he: `פתרון בעיה חיה בכיתה בהגדרת משתנה סביבה/PATH ב-Windows.`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 10,
        sessionSlug: 'session-10-python-7',
        text: {
          he: `צור לי hook כך שכאשר אתה מסיים את המשימה תעשה צליל`,
          en: `Create a hook so that when you finish the task, it makes a sound.`,
        },
        context: {
          en: `Demonstrating Claude Code's hooks system — a completion notification via a Stop/PostToolUse hook.`,
          he: `הדגמת מערכת ה-hooks של Claude Code — התראת סיום דרך hook מסוג Stop/PostToolUse.`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 10,
        sessionSlug: 'session-10-python-7',
        text: {
          en: `add status line -> context window, credits tokens, usage, working directory`,
          he: `add status line -> context window, credits tokens, usage, working directory`,
        },
        context: {
          en: `Demonstrating a custom Claude Code status line surfacing live context/usage info.`,
          he: `הדגמת שורת סטטוס מותאמת אישית ב-Claude Code שמציגה מידע חי על הקשר/שימוש.`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 11,
        sessionSlug: 'session-11-python-8',
        text: {
          he: `התקן obsidian mcp והנה ה api key`,
          en: `Install the Obsidian MCP, and here's the API key.`,
        },
        context: {
          en: `Demonstrating an MCP server install for Obsidian. Included verbatim as an instructional line only — no key value was ever retrieved or is shown here.`,
          he: `הדגמת התקנת שרת MCP עבור Obsidian. מוצג מילולית כשורת הוראה בלבד — שום ערך מפתח לא נשלף או מוצג כאן.`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 12,
        sessionSlug: 'session-12-python-9',
        text: {
          he: `בנה מערכת crm לניהול לקוחות לטובת חברת בנייה. אתה המערכת אני רוצה שתבנה ב html css. ותעשה משהו פשוט ב 3דק`,
          en: `Build a CRM system for customer management for a construction company. I want you to build the system in HTML/CSS. Make it something simple, in 3 minutes.`,
        },
        context: {
          en: `A live OpenAI-API build demo — rapid prototyping under a strict time constraint, the same session as the venv/API-key security walkthrough.`,
          he: `הדגמת בנייה חיה עם OpenAI API — אבטיפוס מהיר תחת אילוץ זמן קפדני, אותו מפגש כמו הדרכת venv/אבטחת מפתחות API.`,
        },
        verbatim: 'he',
      },
    ],
  },
  {
    moduleId: '04-intro-to-ds',
    title: { en: 'Introduction to Data Science', he: 'מבוא למדעי הנתונים' },
    prompts: [
      {
        sessionNumber: 13,
        sessionSlug: 'session-13-ds-0',
        text: {
          he: `[צור] לי קובץ .env שם אני רוצה להכניס את המפתח ל openai ותוסיף ל @generate_song.py את החבילה dotenv שתמשוך את המפתח ממנו`,
          en: `[Create] me a .env file where I want to put the OpenAI key, and add the dotenv package to @generate_song.py so it pulls the key from it.`,
        },
        context: {
          en: `Setting up secure API-key handling for a song-generation script — the leading verb was cut off in the chat log, restored in brackets from context. Ties directly to the site's own .env / python-dotenv guide.`,
          he: `הגדרת טיפול מאובטח במפתח API לסקריפט יצירת שירים — הפועל הפותח נחתך ביומן הצ'אט, שוחזר בסוגריים מההקשר. קשור ישירות למדריך .env / python-dotenv של האתר עצמו.`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 14,
        sessionSlug: 'session-14-ds-1',
        text: {
          en: `# What are the key properties to check for the 'house_sale_price' Series?`,
          he: `# What are the key properties to check for the 'house_sale_price' Series?`,
        },
        context: {
          en: `A code-comment question posed to Claude while exploring a housing dataset in Pandas (1 of 3 from this session).`,
          he: `שאלה בסגנון הערת-קוד שהופנתה ל-Claude תוך חקירת מערך נתוני דיור ב-Pandas (1 מתוך 3 מהמפגש הזה).`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 14,
        sessionSlug: 'session-14-ds-1',
        text: {
          en: `# How to multiply each element in the 'house_sale_price' Series by 1.1 using a Pandas method?`,
          he: `# How to multiply each element in the 'house_sale_price' Series by 1.1 using a Pandas method?`,
        },
        context: {
          en: `Continuation of the same Pandas exploration (2 of 3).`,
          he: `המשך אותה חקירת Pandas (2 מתוך 3).`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 14,
        sessionSlug: 'session-14-ds-1',
        text: {
          en: `# How to convert all the house styles to uppercase?`,
          he: `# How to convert all the house styles to uppercase?`,
        },
        context: {
          en: `Continuation of the same Pandas exploration (3 of 3).`,
          he: `המשך אותה חקירת Pandas (3 מתוך 3).`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 14,
        sessionSlug: 'session-14-ds-1',
        text: {
          he: `בנה לי דאשבורד באמצעות חבילת streamlit`,
          en: `Build me a dashboard using the Streamlit package.`,
        },
        context: {
          en: `A live Streamlit dashboard demo, later formalized in Session 18's structured version below.`,
          he: `הדגמת דאשבורד Streamlit חיה, שמפורמלת בהמשך בגרסה המובנית של מפגש 18 למטה.`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 16,
        sessionSlug: 'session-16-ds-3',
        text: {
          en: `connect to supabase cli and create an organization and a project for crm airline project. create 3 tables - 1. customers 2. bookings. 3. flights. use supabase skills.`,
          he: `connect to supabase cli and create an organization and a project for crm airline project. create 3 tables - 1. customers 2. bookings. 3. flights. use supabase skills.`,
        },
        context: {
          en: `Matches the Skyline Airways Supabase exercise already documented in Module 4's Practice Companion.`,
          he: `תואם לתרגיל Supabase של סקייליין איירווייז שכבר מתועד במלווה התרגול של מודול 4.`,
        },
        verbatim: 'en',
      },
      {
        sessionNumber: 17,
        sessionSlug: 'session-17-ds-4',
        text: {
          he: `אני רוצה לבנות מערכת שתיתן מענה לפתרון הבא: ידוע שקבלנים מאבדים כ30% מהחומרי בניה במסגרת עבודתם. אני רוצה שנאפיין יחד פתרון הולם. אל תניח שום דבר במידה ולמשהו לא ברור תעלה אותו ותשאל. כאשר אתה חושב שאני טועה או חושב על כיוון אחר grill me (אל תסכים איתי בשום מצב) תסביר מדוע ותציג אלטרנטיבות. במידה ואתה לא מסכים תביא מקורות חיצוניים תומכים מהאינטרנט.`,
          en: `I want to build a system that addresses the following: it's known that contractors lose about 30% of building materials during their work. I want us to characterize a proper solution together. Don't assume anything — if something is unclear, raise it and ask. When you think I'm wrong or heading in the wrong direction, grill me (don't agree with me under any circumstances) — explain why and present alternatives. If you disagree, bring supporting external sources from the internet.`,
        },
        context: {
          en: `A prompt-engineering teaching moment — explicit adversarial/challenge-mode instructions instead of sycophantic agreement (1 of 2 from this session).`,
          he: `רגע הוראה בהנדסת פרומפטים — הוראות מפורשות למצב אתגרי/יריבותי במקום הסכמה מחניפה (1 מתוך 2 מהמפגש הזה).`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 17,
        sessionSlug: 'session-17-ds-4',
        text: {
          he: `אחרי כל האפיון הזה צור לי קובץ html מסודר שמאפיין את כלל הפרויקט באמצעות דיאגרמות וטבלאות מסכמות.`,
          en: `After all this characterization, create me an organized HTML file that characterizes the whole project using diagrams and summary tables.`,
        },
        context: {
          en: `Direct follow-up to the prompt above — turning the discussion into a structured spec document (2 of 2).`,
          he: `המשך ישיר לפרומפט שלמעלה — הפיכת הדיון למסמך מפרט מובנה (2 מתוך 2).`,
        },
        verbatim: 'he',
      },
      {
        sessionNumber: 18,
        sessionSlug: 'session-18-ds-5',
        text: {
          he: `אני רוצה לבנות דאשבורד באמצעות streamlit עבור הנתונים @Project housing data .csv. בנוסף אני רוצה לבנות מודל רגרסיה לינארית שישאפר לי גם לעשות חיזוי על המשתנים עצמם. המטרה היא לחזות את המחיר. שלבים: 1. ניקוי הנתונים - השלמת ערכים חסרים, נרמול, קידוד, הסרת ערכים קיצוניים. בנוסף תוסיף את המטריקות הבאות: adjusted R2, rmse. שים לב לסוגי המשתנים אם מדובר במשתנים קטגוריאליים או כמותיים.`,
          en: `I want to build a dashboard using Streamlit for the @Project housing data.csv data. I also want to build a linear regression model that lets me make predictions on the variables themselves. The goal is to predict the price. Steps: 1. Clean the data — fill in missing values, normalize, encode, remove outliers. Also add the following metrics: adjusted R², RMSE. Pay attention to variable types — whether they're categorical or quantitative.`,
        },
        context: {
          en: `A long, structured, step-by-step modeling prompt — matches Session 18's own R²/RMSE/adjusted-R² card content exactly.`,
          he: `פרומפט מודלינג ארוך, מובנה, שלב-אחר-שלב — תואם בדיוק לתוכן הכרטיסים של מפגש 18 עצמו על R²/RMSE/R² מתוקנן.`,
        },
        verbatim: 'he',
      },
    ],
  },
  {
    moduleId: 'ds-decks',
    title: { en: 'DS — Newer Decks (Not Yet Session-Linked)', he: 'DS — מצגות חדשות (טרם מקושרות למפגש)' },
    prompts: [
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Walk me through creating a new Supabase project with the CLI: supabase login, then supabase projects create <name> --org-id <id> --db-password <pw> --region <region>, then supabase link --project-ref <ref>.`,
          he: `עברי איתי על יצירת פרויקט Supabase חדש דרך ה-CLI: supabase login, ואז supabase projects create <name> --org-id <id> --db-password <pw> --region <region>, ואז supabase link --project-ref <ref>.`,
        },
        context: {
          en: `Claude Code prompt library, "Get started · project" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "מתחילים · פרויקט" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Create a .env file with SUPABASE_URL and SUPABASE_ANON_KEY, load it, and initialize the supabase-py client. Add a comment explaining that the service_role key must stay server-side only and never ship to the frontend.`,
          he: `צרי קובץ .env עם SUPABASE_URL ו-SUPABASE_ANON_KEY, טעני אותו, ואתחלי את הלקוח supabase-py. הוסיפי הערה שמסבירה שמפתח ה-service_role חייב להישאר בצד השרת בלבד ולעולם לא להגיע לפרונטאנד.`,
        },
        context: {
          en: `Claude Code prompt library, "Connect · keys" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "התחברות · מפתחות" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Create a Supabase migration that adds a \`customers\` table: id bigint primary key generated always as identity, name text, email text. Then run supabase db push.`,
          he: `צרי migration ב-Supabase שמוסיפה טבלת \`customers\`: id bigint primary key generated always as identity, name text, email text. אחר כך הריצי supabase db push.`,
        },
        context: {
          en: `Claude Code prompt library, "Database — create table" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Database — צור טבלה" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `In my Supabase schema, make sure every table has a primary key \`id bigint generated always as identity\`. Add it wherever it's missing and generate a migration.`,
          he: `בסכימה של Supabase שלי, ודאי שלכל טבלה יש מפתח ראשי \`id bigint generated always as identity\`. הוסיפי אותו בכל מקום שחסר וצרי migration.`,
        },
        context: {
          en: `Claude Code prompt library, "Primary Key" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Primary Key" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Add a \`flights\` table to my Supabase project: id (pk identity), destination text, depart_at timestamptz. Create the migration and push it.`,
          he: `הוסיפי טבלת \`flights\` לפרויקט ה-Supabase שלי: id (pk identity), destination text, depart_at timestamptz. צרי את ה-migration ודחפי אותה.`,
        },
        context: {
          en: `Claude Code prompt library, "Flights — table" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Flights — טבלה" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Create a \`bookings\` table linking customers and flights: id pk, customer_id bigint references customers(id), flight_id bigint references flights(id). Generate the migration.`,
          he: `צרי טבלת \`bookings\` שמקשרת בין customers ל-flights: id pk, customer_id bigint references customers(id), flight_id bigint references flights(id). צרי את ה-migration.`,
        },
        context: {
          en: `Claude Code prompt library, "Foreign Key" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Foreign Key" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Write a Python script using supabase-py that inserts a booking (customer_id, flight_id) and prints the created row.`,
          he: `כתבי סקריפט פייתון עם supabase-py שמכניס הזמנה (customer_id, flight_id) ומדפיס את השורה שנוצרה.`,
        },
        context: {
          en: `Claude Code prompt library, "API — insert" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "API — Insert" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Write a supabase-py query that selects all flights where destination = 'Paris' and prints the results.`,
          he: `כתבי שאילתת supabase-py שבוחרת את כל הטיסות שבהן destination = 'Paris' ומדפיסה את התוצאות.`,
        },
        context: {
          en: `Claude Code prompt library, "Read & Filter" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Read & Filter" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Set up Supabase email/password auth and write a supabase-py sign_in_with_password function for a given email and password.`,
          he: `הגדירי אימות email/password ב-Supabase וכתבי פונקציית supabase-py בשם sign_in_with_password עבור אימייל וסיסמה נתונים.`,
        },
        context: {
          en: `Claude Code prompt library, "Authentication" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Authentication" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Add a \`role\` column (customer | agent | admin, default 'customer') to my profiles table and create the migration.`,
          he: `הוסיפי עמודת \`role\` (customer | agent | admin, ברירת מחדל 'customer') לטבלת profiles שלי וצרי את ה-migration.`,
        },
        context: {
          en: `Claude Code prompt library, "Users & Roles" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Users & Roles" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Enable RLS on the bookings table and add a policy so a user can only select rows where user_id = auth.uid(). Generate the SQL migration.`,
          he: `הפעילי RLS על טבלת bookings והוסיפי policy כך שמשתמש יוכל לבחור רק שורות שבהן user_id = auth.uid(). צרי את ה-SQL migration.`,
        },
        context: {
          en: `Claude Code prompt library, "RLS" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "RLS" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Create a private Supabase Storage bucket named 'passports' and write a supabase-py function that uploads a PDF and saves its path to the customers table.`,
          he: `צרי bucket פרטי ב-Supabase Storage בשם 'passports' וכתבי פונקציית supabase-py שמעלה PDF ושומרת את הנתיב שלו בטבלת customers.`,
        },
        context: {
          en: `Claude Code prompt library, "Storage — passports" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Storage — דרכונים" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Generate supabase-py helper functions for create, read, update and delete on the bookings table.`,
          he: `צרי פונקציות עזר ב-supabase-py ליצירה, קריאה, עדכון ומחיקה על טבלת bookings.`,
        },
        context: {
          en: `Claude Code prompt library, "CRUD" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "CRUD" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Show me how to subscribe to realtime INSERT events on the bookings table using the Supabase JS client.`,
          he: `הראי לי איך להירשם לאירועי INSERT בזמן אמת על טבלת bookings באמצעות לקוח ה-JS של Supabase.`,
        },
        context: {
          en: `Claude Code prompt library, "Realtime" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Realtime" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Airline CRM · Supabase from Scratch — Claude Code prompt library', he: 'CRM לחברת תעופה · Supabase מאפס — ספריית פרומפטים ל-Claude Code' },
        sourceUrl: 'https://drive.google.com/file/d/1hVYWUjjPcTYIZdArYShf3a-iF6XvFMco/view',
        text: {
          en: `Scaffold a Supabase Edge Function (supabase functions new) that runs after a new booking and sends a confirmation email.`,
          he: `בני שלד ל-Supabase Edge Function (supabase functions new) שרץ אחרי הזמנה חדשה ושולח אימייל אישור.`,
        },
        context: {
          en: `Claude Code prompt library, "Edge Function" — from the Airline CRM · Supabase-from-scratch deck.`,
          he: `ספריית פרומפטים ל-Claude Code, "Edge Function" — ממצגת CRM לחברת תעופה · Supabase מאפס.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'K-Means Clustering — interactive deck', he: 'אשכולות K-Means — מצגת אינטראקטיבית' },
        sourceUrl: 'https://drive.google.com/file/d/1WRFcSLJ6r3rQjqbmt5rKfWGBGH06PP9O/view',
        text: {
          en: `Build a complete K-Means clustering pipeline in Python with\nscikit-learn for the dataset data.csv.\n\n1. Load the CSV with pandas; keep the numeric feature columns.\n2. Scale every feature with StandardScaler — K-Means is\n   distance-based, so unscaled features would dominate\n   (wrap the scaler + KMeans in a Pipeline).\n3. Choose K: for K = 2..10 compute the inertia (elbow) and the\n   silhouette score; plot both curves to pick the best K.\n4. Fit KMeans(n_clusters=K, n_init=10, random_state=42).\n5. Add the cluster label back to the dataframe.\n6. Visualize: a 2-D scatter coloured by cluster (reduce to 2-D\n   with PCA if there are more than 2 features), centroids marked.\n\nAlways scale before clustering; pick K from elbow + silhouette.`,
          he: `בני pipeline מלא לאשכולות K-Means בפייתון עם scikit-learn עבור מערך הנתונים data.csv.\n\n1. טעני את ה-CSV עם pandas; שמרי את עמודות התכונות המספריות.\n2. קני מידה לכל תכונה עם StandardScaler — K-Means מבוסס מרחק, אז תכונות לא-קנויות-מידה ישלטו (עטפי את ה-scaler + KMeans ב-Pipeline).\n3. בחרי K: עבור K = 2..10 חשבי את ה-inertia (elbow) ואת ציון ה-silhouette; שרטטי את שתי העקומות כדי לבחור את ה-K הטוב ביותר.\n4. התאימי KMeans(n_clusters=K, n_init=10, random_state=42).\n5. הוסיפי את תווית האשכול בחזרה ל-dataframe.\n6. הדמיה: scatter דו-ממדי צבוע לפי אשכול (הפחיתי ל-2 ממדים עם PCA אם יש יותר מ-2 תכונות), עם סימון מרכזי-האשכולות.\n\nתמיד קני מידה לפני אשכול; בחרי K מ-elbow + silhouette.`,
        },
        context: {
          en: `The deck's own "Claude Code Prompt" slide — the real prompt shown to turn the K-Means lesson into a working scikit-learn pipeline.`,
          he: `השקף "Claude Code Prompt" של המצגת עצמה — הפרומפט האמיתי שמוצג כדי להפוך את שיעור ה-K-Means לצינור עבודה פעיל ב-scikit-learn.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Linear & Logistic Regression — interactive deck', he: 'רגרסיה לינארית ולוגיסטית — מצגת אינטראקטיבית' },
        sourceUrl: 'https://drive.google.com/file/d/1aUNnOURtfszbvDo1rP0B3ZYMJ-s-dd8Z/view',
        text: {
          en: `Build a complete linear-regression pipeline in Python with\nscikit-learn for the dataset data.csv (target = "price").\n\n1. Load the CSV with pandas.\n2. Split features into numeric and categorical.\n3. Preprocess inside a ColumnTransformer:\n   • numeric      → SimpleImputer(median) + StandardScaler\n   • categorical  → SimpleImputer(most_frequent) + OneHotEncoder\n4. Put the ColumnTransformer + LinearRegression in one Pipeline.\n5. train_test_split 80/20, random_state=42.\n6. Fit on train only; predict on test.\n7. Report RMSE, MAE and R² on the test set.\n8. Print each feature's learned coefficient.\n\nKeep all preprocessing inside the Pipeline (no data leakage).`,
          he: `בני pipeline מלא לרגרסיה לינארית בפייתון עם scikit-learn עבור מערך הנתונים data.csv (יעד = "price").\n\n1. טעני את ה-CSV עם pandas.\n2. פצלי את התכונות למספריות וקטגוריאליות.\n3. עבדי קדם-עיבוד בתוך ColumnTransformer:\n   • מספריות → SimpleImputer(median) + StandardScaler\n   • קטגוריאליות → SimpleImputer(most_frequent) + OneHotEncoder\n4. שימי את ה-ColumnTransformer + LinearRegression ב-Pipeline אחד.\n5. train_test_split ביחס 80/20, random_state=42.\n6. התאימי רק על ה-train; חזי על ה-test.\n7. דווחי RMSE, MAE ו-R² על סט הבדיקה.\n8. הדפיסי את המקדם שנלמד לכל תכונה.\n\nשמרי את כל קדם-העיבוד בתוך ה-Pipeline (בלי דליפת נתונים).`,
        },
        context: {
          en: `The deck's own "Claude Code Prompt" slide for the linear-regression half of the lesson.`,
          he: `השקף "Claude Code Prompt" של המצגת עצמה, עבור החצי של רגרסיה לינארית בשיעור.`,
        },
        verbatim: 'en',
      },
      {
        sourceLabel: { en: 'Linear & Logistic Regression — interactive deck', he: 'רגרסיה לינארית ולוגיסטית — מצגת אינטראקטיבית' },
        sourceUrl: 'https://drive.google.com/file/d/1aUNnOURtfszbvDo1rP0B3ZYMJ-s-dd8Z/view',
        text: {
          en: `Build a complete logistic-regression classifier in Python with\nscikit-learn for the dataset data.csv (binary target = "churn").\n\n1. Load the CSV with pandas.\n2. Split features into numeric and categorical.\n3. Preprocess inside a ColumnTransformer:\n   • numeric      → SimpleImputer(median) + StandardScaler\n   • categorical  → SimpleImputer(most_frequent) + OneHotEncoder\n4. Put the ColumnTransformer + LogisticRegression(max_iter=1000)\n   in one Pipeline.\n5. Stratified train_test_split 80/20, random_state=42.\n6. Fit on train only; predict on test.\n7. Report accuracy, precision, recall, F1, the confusion\n   matrix and ROC-AUC; plot the ROC curve.\n\nKeep all preprocessing inside the Pipeline (no data leakage).`,
          he: `בני מסווג רגרסיה לוגיסטית מלא בפייתון עם scikit-learn עבור מערך הנתונים data.csv (יעד בינארי = "churn").\n\n1. טעני את ה-CSV עם pandas.\n2. פצלי את התכונות למספריות וקטגוריאליות.\n3. עבדי קדם-עיבוד בתוך ColumnTransformer:\n   • מספריות → SimpleImputer(median) + StandardScaler\n   • קטגוריאליות → SimpleImputer(most_frequent) + OneHotEncoder\n4. שימי את ה-ColumnTransformer + LogisticRegression(max_iter=1000) ב-Pipeline אחד.\n5. train_test_split מדורג ביחס 80/20, random_state=42.\n6. התאימי רק על ה-train; חזי על ה-test.\n7. דווחי accuracy, precision, recall, F1, מטריצת הבלבול ו-ROC-AUC; שרטטי את עקומת ה-ROC.\n\nשמרי את כל קדם-העיבוד בתוך ה-Pipeline (בלי דליפת נתונים).`,
        },
        context: {
          en: `The deck's own "Claude Code Prompt" slide for the logistic-regression half of the lesson.`,
          he: `השקף "Claude Code Prompt" של המצגת עצמה, עבור החצי של רגרסיה לוגיסטית בשיעור.`,
        },
        verbatim: 'en',
      },
    ],
  },
];
