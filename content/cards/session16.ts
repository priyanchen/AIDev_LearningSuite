import type { CardContent } from './types';

// Session 16 · Data Science (Module Session 3) · 23.08.2026
// Dr. Zuari's Supabase session: cloud databases, anon/service_role keys, RLS, auth mechanics, storage.
// Cards authored from transcript analysis. Original teaching material.

export const session16Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — the database from Session 15 leaves the laptop and moves to the cloud`,
      he: `מפתח של אחד-עשר כרטיסים — בסיס הנתונים ממפגש 15 עוזב את המחשב הנייד ועובר לענן`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `Last session's SQLite database lived only on one machine — this session moves it to Supabase, a managed Postgres service running on AWS. The session covers what Supabase automates that a DevOps team would otherwise build by hand, the critical anon-key/service-role-key security distinction, Row Level Security, how authentication actually works under the hood, and closes by building a small airline reservation app end to end, verified live in the cloud.`,
          he: `בסיס הנתונים SQLite של המפגש הקודם חי רק על מכונה אחת — המפגש הזה מעביר אותו ל-Supabase, שירות Postgres מנוהל שרץ על AWS. המפגש מכסה מה Supabase מאוטמת שצוות DevOps היה אחרת בונה ידנית, את ההבחנה הקריטית בין מפתח anon למפתח service_role, אבטחת ברמת שורה (RLS), איך אימות בעצם עובד מתחת למכסה המנוע, ונסגר בבניית אפליקציית הזמנות תעופה קטנה מקצה לקצה, מאומתת בשידור חי בענן.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the discipline Dr. Zuari insisted on before touching an agent at all — read it first. Card 06 covers the single most dangerous mistake possible with Supabase.`,
          he: `כרטיס 01 הוא המשמעת שד״ר זוארי התעקש עליה לפני שנוגעים בסוכן בכלל — כדאי לקרוא אותו קודם. כרטיס 06 מכסה את הטעות המסוכנת ביותר האפשרית עם Supabase.`,
        },
      },
    ],
    principle: {
      en: `A database that only your laptop can see isn't yet an application — this session is where it finally becomes one.`,
      he: `בסיס נתונים שרק המחשב הנייד שלך יכול לראות הוא עדיין לא אפליקציה — המפגש הזה הוא איפה שהוא סוף סוף הופך לאחת.`,
    },
  },
  {
    number: '01',
    title: { en: `Take a Blank Page Before You Take an Agent`, he: `לוקחות דף לבן לפני שלוקחות סוכן` },
    subtitle: {
      en: `Letting Claude invent your table columns from a one-sentence prompt is not how real schemas get built`,
      he: `לתת ל-Claude להמציא את עמודות הטבלה שלך ממשפט אחד זה לא איך שסכימות אמיתיות נבנות`,
    },
    sections: [
      {
        heading: { en: `The Demonstration Was Also a Warning`, he: `ההדגמה הייתה גם אזהרה` },
        body: {
          en: `Dr. Zuari built the airline schema live by giving Claude a single sentence — three tables, no specified columns — and let the agent decide everything. The moment it finished, he stopped and corrected the record: "in real life, you don't build it this way."`,
          he: `ד״ר זוארי בנה את סכימת חברת התעופה בשידור חי בכך שנתן ל-Claude משפט אחד — שלוש טבלאות, בלי עמודות מוגדרות — ונתן לסוכן להחליט הכול. ברגע שהוא סיים, הוא עצר ותיקן את הרשומה: "בחיים האמיתיים, לא בונים את זה ככה".`,
        },
      },
      {
        heading: { en: `What Comes Before the Prompt`, he: `מה בא לפני ה-prompt` },
        body: {
          en: `The actual discipline: take a blank page, decide for yourself what columns each table needs, and only then bring that decision to an agent to discuss or refine — "tell him what you want, not the other way around." What Claude produces reflects what it thinks is reasonable, not necessarily what's correct for your specific business.`,
          he: `המשמעת האמיתית: לקחת דף לבן, להחליט בעצמך אילו עמודות כל טבלה צריכה, ורק אז להביא את ההחלטה הזו לסוכן כדי לדון בה או לחדד אותה — "תגידי לו מה את רוצה, לא ההפך". מה ש-Claude מייצר משקף מה שהוא חושב שהגיוני, לא בהכרח מה שנכון לעסק הספציפי שלך.`,
        },
      },
    ],
    principle: {
      en: `Speed of generation is not the same thing as ownership of the design — the schema has to be yours before it's the agent's.`,
      he: `מהירות ייצור היא לא אותו דבר כמו בעלות על העיצוב — הסכימה צריכה להיות שלך לפני שהיא של הסוכן.`,
    },
  },
  {
    number: '02',
    title: { en: `A Terminal Trick, Twice: Supabase CLI and GitHub CLI`, he: `טריק טרמינל, פעמיים: Supabase CLI ו-GitHub CLI` },
    subtitle: {
      en: `Two command-line tools, connected once, so Claude can talk to both services without ever opening a browser`,
      he: `שני כלי שורת-פקודה, מחוברים פעם אחת, כדי ש-Claude יוכל לדבר עם שני השירותים בלי לפתוח דפדפן אף פעם`,
    },
    sections: [
      {
        heading: { en: `Install, Then Log In`, he: `להתקין, ואז להתחבר` },
        body: {
          en: `Installing the Supabase CLI — via scoop on Windows, brew on Mac — is only step one. The actual point of the exercise is running \`supabase login\` in the terminal, which links the CLI to the student's own Supabase account, so Claude, working through that same terminal, can create organizations, projects, and tables without a human ever touching the website.`,
          he: `התקנת ה-Supabase CLI — דרך scoop בוינדוס, brew במק — היא רק שלב אחד. הטעם האמיתי של התרגיל הוא הרצת \`supabase login\` בטרמינל, שמקשרת את ה-CLI לחשבון Supabase של הסטודנטית עצמה, כך ש-Claude, שעובד דרך אותו טרמינל, יכול ליצור ארגונים, פרויקטים, וטבלאות בלי שבן אדם אי-פעם נוגע באתר.`,
        },
      },
      {
        heading: { en: `Same Pattern, Second Service`, he: `אותו דפוס, שירות שני` },
        body: {
          en: `The GitHub CLI got the identical treatment right after — installed, then authenticated with \`gh auth login\` — because pushing the finished project to GitHub is part of the same automated flow. Both installs exist for the same reason: so an agent can operate a cloud service on your behalf without you babysitting a dashboard.`,
          he: `ל-GitHub CLI היה בדיוק אותו יחס מיד אחר כך — הותקן, ואז אומת עם \`gh auth login\` — כי דחיפת הפרויקט הגמור ל-GitHub היא חלק מאותו זרם אוטומטי. שתי ההתקנות קיימות מאותה סיבה: כדי שסוכן יוכל להפעיל שירות ענן בשמך בלי שאת שומרת על לוח בקרה.`,
        },
      },
    ],
    principle: {
      en: `Logging a CLI into your account is what turns a chat tool into an agent that can actually act on cloud services for you.`,
      he: `חיבור CLI לחשבון שלך הוא מה שהופך כלי צ׳אט לסוכן שבאמת יכול לפעול עבורך על שירותי ענן.`,
    },
  },
  {
    number: '03',
    title: { en: `What Supabase Automates Away`, he: `מה Supabase מאוטמת` },
    subtitle: {
      en: `Everything a DevOps team would normally configure by hand happens in about two minutes instead`,
      he: `כל מה שצוות DevOps היה בדרך כלל מגדיר ידנית קורה בערך בשתי דקות במקום זאת`,
    },
    sections: [
      {
        heading: { en: `The Manual Version`, he: `הגרסה הידנית` },
        body: {
          en: `Dr. Zuari listed what standing up a cloud database really requires without a managed service: provisioning a server on something like AWS, installing the database software itself, wiring up API access, setting up logging, defining permissions, and configuring backups and monitoring. Each one is its own decision point — DevOps engineers specialize in exactly this, and are paid accordingly.`,
          he: `ד״ר זוארי מנה מה שהקמת בסיס נתונים בענן באמת דורשת בלי שירות מנוהל: הקצאת שרת על משהו כמו AWS, התקנת תוכנת בסיס הנתונים עצמה, חיווט גישת API, הקמת לוגים, הגדרת הרשאות, והגדרת גיבויים וניטור. כל אחד הוא נקודת החלטה משלו — מהנדסי DevOps מתמחים בדיוק בזה, ומקבלים משכורת בהתאם.`,
        },
      },
      {
        heading: { en: `What's Left for You to Do`, he: `מה נשאר לך לעשות` },
        body: {
          en: `Signing up, creating an organization, and creating a project inside Supabase collapsed all of that into roughly two minutes with a live, working Postgres database at the end of it. Organizations act like a company; each project inside one is its own independent database — the free tier caps out at two of each.`,
          he: `הרשמה, יצירת ארגון, ויצירת פרויקט בתוך Supabase כיווצו את כל זה לבערך שתי דקות עם בסיס נתונים Postgres חי ועובד בסוף. ארגונים מתנהגים כמו חברה; כל פרויקט בתוכם הוא בסיס נתונים עצמאי משלו — המסלול החינמי נעצר בשניים מכל אחד.`,
        },
      },
    ],
    principle: {
      en: `A managed service doesn't remove the decisions a real database requires — it just makes reasonable ones for you by default, fast.`,
      he: `שירות מנוהל לא מסיר את ההחלטות שבסיס נתונים אמיתי דורש — הוא פשוט מקבל בשבילך החלטות סבירות כברירת מחדל, מהר.`,
    },
  },
  {
    number: '04',
    title: { en: `Two Keys, and Where Each One Belongs`, he: `שני מפתחות, ואיפה כל אחד שייך` },
    subtitle: {
      en: `The room key everyone gets and the master key that opens every door — mixing them up is the whole danger`,
      he: `מפתח החדר שכולם מקבלים ומפתח המאסטר שפותח כל דלת — הבלבול ביניהם הוא כל הסכנה`,
    },
    sections: [
      {
        heading: { en: `The Hotel Analogy`, he: `אנלוגיית המלון` },
        body: {
          en: `Dr. Zuari's framing: think of a hotel. The anon key is the room key every guest gets — it opens exactly one room, the data that belongs to that specific person, and nothing more, because Row Level Security enforces the boundary. The service_role key is the master key held by hotel security — it opens every room in the building, no exceptions.`,
          he: `המסגור של ד״ר זוארי: תחשבי על מלון. מפתח ה-anon הוא מפתח החדר שכל אורח מקבל — הוא פותח בדיוק חדר אחד, הנתונים ששייכים לאדם הספציפי הזה, ולא יותר, כי Row Level Security אוכפת את הגבול. מפתח ה-service_role הוא מפתח המאסטר שמאבטח המלון מחזיק — הוא פותח כל חדר בבניין, בלי יוצא מן הכלל.`,
        },
      },
      {
        heading: { en: `Front, Server, and the "Belly"`, he: `Front, Server, וה"בטן"` },
        body: {
          en: `A real application splits into three layers: the front — what a user actually sees and clicks; the server — what receives that click and decides what to do; and the "belly" — where the real logic, agents, and business rules live. The anon key is safe to place in the front. The service_role key belongs only in the belly, and only if a belly actually exists.`,
          he: `אפליקציה אמיתית מתחלקת לשלוש שכבות: ה-front — מה שמשתמשת בעצם רואה ולוחצת; ה-server — מה שמקבל את הלחיצה הזו ומחליט מה לעשות; וה"בטן" — איפה שהלוגיקה האמיתית, הסוכנים, וכללי העסק חיים. מפתח ה-anon בטוח למקם ב-front. מפתח ה-service_role שייך רק בבטן, ורק אם בטן בכלל קיימת.`,
        },
      },
    ],
    principle: {
      en: `Every key request answers to the same question: does this specific piece of code need to see everyone's data, or only the data behind one identity?`,
      he: `כל בקשת מפתח עונה לאותה שאלה: האם חתיכת הקוד הספציפית הזו צריכה לראות את הנתונים של כולם, או רק את הנתונים שמאחורי זהות אחת?`,
    },
  },
  {
    number: '05',
    title: { en: `Does This App Even Need a Backend`, he: `האם האפליקציה הזו בכלל צריכה בקנד` },
    subtitle: {
      en: `A brochure site with no agents barely needs a database — a real app with logic behind it needs the master key`,
      he: `אתר תדמית בלי סוכנים בקושי צריך בסיס נתונים — אפליקציה אמיתית עם לוגיקה מאחוריה צריכה את מפתח המאסטר`,
    },
    sections: [
      {
        heading: { en: `The Test: Is There a Belly`, he: `המבחן: האם יש בטן` },
        body: {
          en: `Dr. Zuari's litmus test for whether the dangerous key is even needed: a brochure site — a picture, some text about the company, past projects, a contact button — has no belly at all. There's nothing running agents, nothing making decisions behind the scenes, so a service_role key would protect nothing that isn't already protected.`,
          he: `מבחן הלקמוס של ד״ר זוארי לשאלה אם בכלל צריך את המפתח המסוכן: אתר תדמית — תמונה, קצת טקסט על החברה, פרויקטים עברו, כפתור יצירת קשר — אין לו בטן בכלל. שום דבר לא מריץ סוכנים, שום דבר לא מקבל החלטות מאחורי הקלעים, אז מפתח service_role לא היה מגן על שום דבר שכבר לא מוגן.`,
        },
      },
      {
        heading: { en: `When the Answer Flips`, he: `מתי התשובה מתהפכת` },
        body: {
          en: `A real customer-facing app — one with logins, business logic, or agents that need to see across every user's data to function — genuinely needs that master key, and needs it locked inside the belly specifically, never anywhere the front end or a browser could expose it.`,
          he: `אפליקציה אמיתית פונה-לקוחות — עם כניסות, לוגיקת עסק, או סוכנים שצריכים לראות דרך נתוני כל המשתמשים כדי לתפקד — באמת צריכה את מפתח המאסטר הזה, וצריכה אותו נעול בתוך הבטן ספציפית, אף פעם לא במקום שה-front או דפדפן יכולים לחשוף אותו.`,
        },
      },
    ],
    principle: {
      en: `The decision isn't "should I use the safer key" — it's "does this application have a layer dangerous enough to require the other one at all."`,
      he: `ההחלטה היא לא "האם להשתמש במפתח הבטוח יותר" — היא "האם לאפליקציה הזו יש שכבה מסוכנת מספיק כדי לדרוש את האחר בכלל".`,
    },
  },
  {
    number: '06',
    title: { en: `The Master Key Getting Out Is a Legal Problem`, he: `מפתח המאסטר שדולף הוא בעיה משפטית` },
    subtitle: {
      en: `Every customer's data behind one leaked key — this is the single most dangerous mistake the session covered`,
      he: `הנתונים של כל לקוח מאחורי מפתח אחד שדלף — זו הטעות המסוכנת ביותר שהמפגש כיסה`,
    },
    sections: [
      {
        heading: { en: `What "Someone Gets the Key" Actually Means`, he: `מה "מישהו מקבל את המפתח" בעצם אומר` },
        body: {
          en: `Because the service_role key bypasses Row Level Security entirely, anyone who has it can read, modify, or delete every customer's data across the entire application — not just one account, all of them. Dr. Zuari's word for the consequence, if that data is sensitive, wasn't a technical one: exposure like that opens the door to a lawsuit.`,
          he: `כיוון שמפתח ה-service_role עוקף לגמרי את Row Level Security, כל מי שמחזיק בו יכול לקרוא, לשנות, או למחוק את הנתונים של כל לקוח ברחבי כל האפליקציה — לא רק חשבון אחד, כולם. המילה של ד״ר זוארי להשלכה, אם הנתונים האלה רגישים, לא הייתה טכנית: חשיפה כזו פותחת דלת לתביעה.`,
        },
      },
      {
        heading: { en: `Where It's Safe to Keep It`, he: `איפה בטוח לשמור אותו` },
        body: {
          en: `The explicit rule: this key never goes in GitHub, never in the front end, never anywhere a browser or public repository could reach it. Dr. Zuari's own practice was almost deliberately low-tech — stored somewhere on his own machine, on the reasoning that the only realistic threat to it is someone physically breaking into his house, a much narrower risk than a public leak.`,
          he: `הכלל המפורש: המפתח הזה לעולם לא נכנס ל-GitHub, לעולם לא ל-front end, לעולם לא לשום מקום שדפדפן או ריפוזיטורי ציבורי יכולים להגיע אליו. הנוהג של ד״ר זוארי עצמו היה כמעט במכוון לא-טכנולוגי — שמור איפשהו במחשב שלו עצמו, מתוך הנחה שהאיום הריאלי היחיד עליו הוא מישהו שפורץ פיזית לביתו, סיכון הרבה יותר צר מדליפה ציבורית.`,
        },
      },
    ],
    principle: {
      en: `A key that opens everyone's data doesn't just need to be handled carefully — it needs to be treated as if leaking it is a legal event, not just a technical one.`,
      he: `מפתח שפותח את הנתונים של כולם לא רק צריך להיות מטופל בזהירות — הוא צריך להיות מטופל כאילו דליפה שלו היא אירוע משפטי, לא רק טכני.`,
    },
  },
  {
    number: '07',
    title: { en: `Build It, Then Prove It Landed in the Cloud`, he: `בונות את זה, ואז מוכיחות שזה נחת בענן` },
    subtitle: {
      en: `Adding a record through the app and only trusting it once it also shows up inside Supabase's own dashboard`,
      he: `הוספת רשומה דרך האפליקציה ולסמוך עליה רק כשהיא גם מופיעה בתוך לוח הבקרה של Supabase עצמו`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: with the CLI already logged in, describe the app to Claude in plain language and specify the tables and columns decided on a blank page beforehand. Two: let the agent create the organization, project, and schema, and build a minimal front end with buttons to add and view records. Three: use that front end to add one real record — a customer, a booking. Four: go directly to the Supabase dashboard's table editor and confirm the same record is sitting there in the cloud, not just showing on-screen locally.`,
          he: `אחת: עם ה-CLI כבר מחובר, לתאר ל-Claude את האפליקציה בשפה פשוטה ולציין את הטבלאות והעמודות שהוחלטו על דף לבן מראש. שתיים: לתת לסוכן ליצור את הארגון, הפרויקט, והסכימה, ולבנות front end מינימלי עם כפתורים להוספה וצפייה ברשומות. שלוש: להשתמש ב-front end הזה כדי להוסיף רשומה אמיתית אחת — לקוח, הזמנה. ארבע: ללכת ישירות לעורך הטבלאות של לוח הבקרה של Supabase ולאשר שאותה רשומה יושבת שם בענן, לא רק מוצגת על המסך מקומית.`,
        },
      },
      {
        heading: { en: `Why the Extra Step Matters`, he: `למה הצעד הנוסף חשוב` },
        body: {
          en: `A record appearing correctly in the app's own interface proves the front end works — it says nothing about whether the data actually reached the cloud database at all. Dr. Zuari repeated this verification live, specifically to model the habit: don't celebrate until you've confirmed the data independently, in a completely different interface than the one that created it.`,
          he: `רשומה שמופיעה נכון בממשק של האפליקציה עצמה מוכיחה שה-front end עובד — היא לא אומרת כלום על השאלה אם הנתונים בכלל הגיעו לבסיס הנתונים בענן. ד״ר זוארי חזר על האימות הזה בשידור חי, ספציפית כדי לדגמן את ההרגל: לא לחגוג עד שאישרת את הנתונים באופן עצמאי, בממשק שונה לגמרי מזה שיצר אותם.`,
        },
      },
    ],
    principle: {
      en: `An application that appears to work and a database that actually received the data are two separate claims — only the second one is proven from inside Supabase itself.`,
      he: `אפליקציה שנראית עובדת ובסיס נתונים שבאמת קיבל את הנתונים הן שתי טענות נפרדות — רק השנייה מוכחת מתוך Supabase עצמו.`,
    },
  },
  {
    number: '08',
    title: { en: `Claude Flags Missing RLS — It Doesn't Choose the Policy`, he: `Claude מסמן RLS חסר — הוא לא בוחר את המדיניות` },
    subtitle: {
      en: `A security warning from an agent is a prompt to make a decision, not a decision already made for you`,
      he: `אזהרת אבטחה מסוכן היא הנחיה לקבל החלטה, לא החלטה שכבר התקבלה בשבילך`,
    },
    sections: [
      {
        heading: { en: `What the Agent Actually Does`, he: `מה הסוכן בעצם עושה` },
        body: {
          en: `Dr. Zuari noted that Claude, when running a security check on a Supabase project, will often flag a table that has no Row Level Security configured — a genuinely useful, automatic catch. But the flag itself is only a notice that a decision hasn't been made yet.`,
          he: `ד״ר זוארי ציין ש-Claude, כשמריץ בדיקת אבטחה על פרויקט Supabase, לרוב יסמן טבלה שאין לה Row Level Security מוגדר — תפיסה אוטומטית ושימושית באמת. אבל הסימון עצמו הוא רק הודעה שהחלטה עדיין לא התקבלה.`,
        },
      },
      {
        heading: { en: `Why the Policy Choice Stays Yours`, he: `למה בחירת המדיניות נשארת שלך` },
        body: {
          en: `RLS is configured per table, and the specific rule — travel agents can see every booking, customers can only see their own, an admin panel sees everything — depends entirely on who the users are and what the business needs them to see. That's a judgment call about the application's own logic, not something derivable from the schema alone, so the agent can point at the gap but can't responsibly fill it in for you.`,
          he: `RLS מוגדרת לפי טבלה, והכלל הספציפי — סוכני נסיעות יכולים לראות כל הזמנה, לקוחות יכולים לראות רק את שלהם, פאנל אדמין רואה הכול — תלוי לגמרי במי המשתמשים ומה העסק צריך שהם יראו. זה שיקול דעת על הלוגיקה של האפליקציה עצמה, לא משהו שניתן להסיק מהסכימה בלבד, אז הסוכן יכול להצביע על הפער אבל לא יכול למלא אותו באחריות בשבילך.`,
        },
      },
    ],
    principle: {
      en: `An agent that flags a missing security policy has done its job — deciding what that policy should actually say is still yours to do.`,
      he: `סוכן שמסמן מדיניות אבטחה חסרה עשה את העבודה שלו — להחליט מה המדיניות הזו בעצם צריכה לומר עדיין שלך לעשות.`,
    },
  },
  {
    number: '09',
    title: { en: `What Actually Happens When You Log In`, he: `מה באמת קורה כשאת מתחברת` },
    subtitle: {
      en: `Signup hashes a password, login re-hashes and compares, and a session dictionary sticks to every request after`,
      he: `הרשמה מגבבת סיסמה, כניסה מגבבת מחדש ומשווה, ומילון סשן נדבק לכל בקשה אחרי`,
    },
    sections: [
      {
        heading: { en: `Signup Never Stores the Real Password`, he: `הרשמה לעולם לא שומרת את הסיסמה האמיתית` },
        body: {
          en: `On signup, Supabase stores an email, a user ID, and a hash — the password run through an algorithm that converts it into a fixed string of characters. The real password is never saved anywhere; the hash can't practically be reversed back into it, which is exactly the point of hashing.`,
          he: `בהרשמה, Supabase שומרת אימייל, מזהה משתמש, וגיבוב — הסיסמה שרצה דרך אלגוריתם שממיר אותה למחרוזת תווים קבועה. הסיסמה האמיתית לעולם לא נשמרת בשום מקום; את הגיבוב לא ניתן להפוך בחזרה אליה בפועל, וזה בדיוק הטעם של גיבוב.`,
        },
      },
      {
        heading: { en: `Login Re-Hashes and Compares`, he: `כניסה מגבבת מחדש ומשווה` },
        body: {
          en: `Typing a password on login doesn't retrieve anything — it hashes the entered password the same way and checks whether the result matches the stored hash. A match creates a session object — Dr. Zuari called it a dictionary — holding the user's ID, email, and an authenticated flag, which attaches to every action taken from that point on.`,
          he: `הקלדת סיסמה בכניסה לא מאחזרת שום דבר — היא מגבבת את הסיסמה שהוזנה באותה דרך ובודקת האם התוצאה תואמת את הגיבוב השמור. התאמה יוצרת אובייקט סשן — ד״ר זוארי כינה אותו מילון — שמחזיק את מזהה המשתמש, האימייל, ודגל מאומת, שמצטרף לכל פעולה שננקטת מהנקודה הזו והלאה.`,
        },
      },
      {
        heading: { en: `The Million-Dollar Question: The Salt`, he: `שאלת מיליון הדולר: המלח` },
        body: {
          en: `A student asked the question Dr. Zuari said nobody had ever asked him before: if two different users pick the identical password, do they get the identical hash? The answer is no — an extra random element, a salt, is mixed in before hashing, so every user gets a unique hash even when the underlying password is exactly the same.`,
          he: `סטודנטית שאלה את השאלה שד״ר זוארי אמר שאף אחד לא שאל אותו אף פעם קודם: אם שני משתמשים שונים בוחרים בדיוק אותה סיסמה, האם הם מקבלים בדיוק אותו גיבוב? התשובה היא לא — אלמנט אקראי נוסף, מלח, מעורב לפני הגיבוב, כך שכל משתמש מקבל גיבוב ייחודי גם כשהסיסמה הבסיסית זהה לגמרי.`,
        },
      },
    ],
    principle: {
      en: `Nothing about login ever retrieves a password — it only ever recomputes a hash and asks whether two irreversible fingerprints happen to match.`,
      he: `שום דבר בכניסה לעולם לא מאחזר סיסמה — היא רק אי פעם מחשבת מחדש גיבוב ושואלת האם שתי טביעות אצבע בלתי-הפיכות במקרה תואמות.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic cloud-database trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על בסיסי נתונים בענן`,
    },
    sections: [
      {
        heading: { en: `On the Two Keys`, he: `על שני המפתחות` },
        body: {
          en: `A brochure site with no login system and no backend logic is being built. Does it need the service_role key? Answer: no — with no "belly" running agents or business logic, there's nothing for the master key to protect that Row Level Security and the anon key don't already handle; adding the service_role key here only adds unnecessary risk.`,
          he: `בונים אתר תדמית בלי מערכת כניסה ובלי לוגיקת בקנד. האם הוא צריך את מפתח ה-service_role? תשובה: לא — בלי "בטן" שמריצה סוכנים או לוגיקת עסק, אין שום דבר שמפתח המאסטר צריך להגן עליו ש-Row Level Security ומפתח ה-anon כבר לא מטפלים בו; הוספת מפתח ה-service_role פה רק מוסיפה סיכון מיותר.`,
        },
      },
      {
        heading: { en: `On Password Hashing`, he: `על גיבוב סיסמאות` },
        body: {
          en: `Two different users both set their password to the exact same string. Do they end up with the same stored hash? Answer: no — a random salt is mixed into each password before it's hashed, so even identical passwords produce different, unique hashes per user.`,
          he: `שני משתמשים שונים קובעים את שניהם את הסיסמה שלהם לאותה מחרוזת בדיוק. האם הם מסיימים עם אותו גיבוב שמור? תשובה: לא — מלח אקראי מעורב לתוך כל סיסמה לפני שהיא מגובבת, כך שאפילו סיסמאות זהות מייצרות גיבובים שונים וייחודיים לכל משתמש.`,
        },
      },
      {
        heading: { en: `On RLS Responsibility`, he: `על אחריות RLS` },
        body: {
          en: `A security scan flags a table with no Row Level Security configured. Is this something the agent should simply fix on its own? Answer: not entirely — the agent can and should flag the gap, but the actual policy (who is allowed to see which rows — all customers, only their own, or an admin seeing everything) depends on business logic only a human can decide.`,
          he: `סריקת אבטחה מסמנת טבלה בלי Row Level Security מוגדר. האם זה משהו שהסוכן צריך פשוט לתקן בעצמו? תשובה: לא לגמרי — הסוכן יכול וצריך לסמן את הפער, אבל המדיניות בפועל (מי מורשה לראות אילו שורות — כל הלקוחות, רק שלהם, או אדמין שרואה הכול) תלויה בלוגיקת עסק שרק בן אדם יכול להחליט.`,
        },
      },
      {
        heading: { en: `On Designing Before Delegating`, he: `על עיצוב לפני האצלה` },
        body: {
          en: `Dr. Zuari built a working three-table schema by giving Claude one sentence and letting it invent every column, then immediately called this "not how you build it in real life." What's the actual risk in that approach, even though it produced a working result? Answer: what Claude invents reflects what it judges reasonable in general, not what's specifically correct for this business's actual needs — deciding the columns yourself first, on a blank page, is what keeps the schema's design decisions in the hands of the person who actually understands the business.`,
          he: `ד״ר זוארי בנה סכימת שלוש-טבלאות עובדת בכך שנתן ל-Claude משפט אחד ונתן לו להמציא כל עמודה, ואז מיד כינה את זה "לא איך שבונים את זה בחיים האמיתיים". מה הסיכון בפועל בגישה הזו, למרות שהיא ייצרה תוצאה עובדת? תשובה: מה ש-Claude ממציא משקף מה שהוא שופט כהגיוני באופן כללי, לא מה שספציפית נכון לצרכים בפועל של העסק הזה — להחליט את העמודות בעצמך קודם, על דף לבן, זה מה ששומר את החלטות העיצוב של הסכימה בידיים של מי שבאמת מבינה את העסק.`,
        },
      },
    ],
    principle: {
      en: `A memorized key name answers "what to paste where." These questions only answer to "why the architecture was built to require the distinction at all."`,
      he: `שם מפתח שמושנן עונה על "מה להדביק איפה". השאלות האלה עונות רק ל"למה הארכיטקטורה נבנתה כך שתדרוש את ההבחנה בכלל".`,
    },
  },
];
