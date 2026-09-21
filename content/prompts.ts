import type { Bilingual } from '@/lib/registry';

export type PromptItem = {
  sessionNumber: number;
  sessionSlug: string;
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
];
