import type { Bilingual } from '@/lib/registry';

export type RecommendationType = 'book' | 'person';

export type RecommendationItem = {
  name: string;              // kept in its original language/script — not translated
  type: RecommendationType;
  sessionNumber: number;     // links back to the session this came up in
  bio: Bilingual;            // who they actually are — general background, not course-specific
  context: Bilingual;        // why Dr. Zuari brought them up, grounded in the actual session
  verified: boolean;         // false where the source recording is dead and this rests on direct confirmation rather than a transcript
  links?: { label: string; url: string }[]; // real, verified external links only — never guessed
};

export type RecommendationCategory = {
  topic: Bilingual;
  influence: Bilingual;      // what this category's throughline is, as an influence on the course
  items: RecommendationItem[];
};

// Every book and person Dr. Zuari mentioned or recommended across the course, found by scanning
// all 20 available session transcripts plus every chat log. Two sessions (17, 19) also referenced
// self-authored booklets he offers informally via Slack — those are left off this list since they're
// his own notes, not a third-party recommendation.
export const recommendationCategories: RecommendationCategory[] = [
  {
    topic: { en: 'Statistics & Estimation', he: 'סטטיסטיקה והערכה' },
    influence: {
      en: `The discipline the course opens with — doubt a number until you've reasoned out exactly what it can tell you. Prof. Polak's work is the academic source Dr. Zuari points to for going deeper than the tank-problem lecture itself.`,
      he: `המשמעת שהקורס נפתח בה — לחשוד במספר עד שחשבת בדיוק מה הוא יכול לומר לך. העבודה של פרופ' פולק היא המקור האקדמי שד״ר זוארי מפנה אליו כדי ללכת עמוק יותר מהרצאת בעיית הטנקים עצמה.`,
    },
    items: [
      {
        name: 'Prof. Moshe Polak',
        type: 'person',
        sessionNumber: 1,
        bio: {
          en: `An Israeli statistician associated with the Hebrew University of Jerusalem, known academically for work in sequential analysis and change-point detection — the branch of statistics concerned with drawing reliable conclusions from data as it arrives, rather than only after a full dataset is in hand.`,
          he: `סטטיסטיקאי ישראלי המזוהה עם האוניברסיטה העברית בירושלים, מוכר אקדמית בזכות עבודה בניתוח רציף וזיהוי נקודות-שינוי — הענף בסטטיסטיקה שעוסק בהסקת מסקנות אמינות מנתונים ככל שהם מגיעים, ולא רק אחרי שמערך נתונים שלם כבר בידיים.`,
        },
        context: {
          en: `While working through the German Tank Problem's two estimation methods (the average-based one and the gap-based one), Dr. Zuari noted that further methods exist and can be found in Prof. Polak's own book.`,
          he: `תוך כדי עבודה על שתי שיטות ההערכה של בעיית הטנקים הגרמנים (מבוססת-הממוצע ומבוססת-הפער), ד״ר זוארי ציין ששיטות נוספות קיימות וניתן למצוא אותן בספרו של פרופ' פולק עצמו.`,
        },
        verified: true,
      },
      {
        name: 'חושבים אחרת (Thinking Differently)',
        type: 'book',
        sessionNumber: 1,
        bio: {
          en: `Prof. Moshe Polak's own book — a further-reading source for statistical-estimation methods beyond the two demonstrated live in Session 1.`,
          he: `הספר של פרופ' משה פולק עצמו — מקור לקריאה נוספת לשיטות הערכה סטטיסטיות מעבר לשתיים שהודגמו בשידור חי במפגש 1.`,
        },
        context: {
          en: `Offered as a pointer for anyone who wanted to go deeper than the tank-problem lecture's own average-based and gap-based estimates.`,
          he: `הוצע כהפניה למי שרצתה ללכת עמוק יותר משתי ההערכות מבוססות-הממוצע ומבוססות-הפער של הרצאת בעיית הטנקים עצמה.`,
        },
        verified: true,
        links: [
          { label: 'Buy — Magnes Press (print + ebook)', url: 'https://www.magnespress.co.il/book/%D7%97%D7%95%D7%A9%D7%91%D7%99%D7%9D_%D7%90%D7%97%D7%A8%D7%AA-6010' },
          { label: 'Find in a library — WorldCat', url: 'https://search.worldcat.org/search?q=%D7%97%D7%95%D7%A9%D7%91%D7%99%D7%9D%20%D7%90%D7%97%D7%A8%D7%AA%20%D7%94%D7%9E%D7%91%D7%95%D7%90%20%D7%94%D7%99%D7%93%D7%99%D7%93%D7%95%D7%AA%D7%99%20%D7%9C%D7%A1%D7%98%D7%98%D7%99%D7%A1%D7%98%D7%99%D7%A7%D7%94%20%D7%A4%D7%95%D7%9C%D7%A7' },
        ],
      },
    ],
  },
  {
    topic: { en: 'Staying Current on AI', he: 'להישאר מעודכנת ב-AI' },
    influence: {
      en: `The course moves fast enough that the syllabus itself can't keep up with new model releases — this is Dr. Zuari's answer to "how do I keep learning after the course ends."`,
      he: `הקורס נע מהר מספיק שתוכנית הלימודים עצמה לא יכולה להדביק שחרורי מודלים חדשים — זו התשובה של ד״ר זוארי ל"איך אני ממשיכה ללמוד אחרי שהקורס נגמר."`,
    },
    items: [
      {
        name: 'Yuval Avidani',
        type: 'person',
        sessionNumber: 1,
        bio: {
          en: `An Israeli AI commentator and content creator known for covering new AI tools, models, and industry news for a Hebrew-speaking audience — a go-to source for staying current once formal instruction ends.`,
          he: `פרשן ויוצר תוכן ישראלי בתחום ה-AI, מוכר בזכות סיקור כלי AI חדשים, מודלים, וחדשות התעשייה עבור קהל דובר עברית — מקור-לכת להישאר מעודכנת ברגע שההוראה הפורמלית מסתיימת.`,
        },
        context: {
          en: `Came up during the orientation session's Q&A on where to follow ongoing AI developments — the chat log shows students immediately asking which platforms (LinkedIn, X) to follow him on right after the recommendation.`,
          he: `עלה במהלך שאלות-ותשובות של מפגש ההתמצאות לגבי איפה לעקוב אחרי התפתחויות AI מתמשכות — יומן הצ׳אט מראה סטודנטים ששואלים מייד באילו פלטפורמות (LinkedIn, X) לעקוב אחריו מייד אחרי ההמלצה.`,
        },
        verified: false,
        links: [
          { label: 'YouTube — YUV.AI', url: 'https://www.youtube.com/@yuv-ai' },
          { label: 'yuv.ai', url: 'https://yuv.ai/' },
        ],
      },
    ],
  },
  {
    topic: { en: 'Computer Vision & Real-World Impact', he: 'ראייה ממוחשבת והשפעה בעולם האמיתי' },
    influence: {
      en: `The proof, right at the start of the Computer Vision module, that this isn't an academic exercise — it's technology that has already changed a real, high-stakes outcome.`,
      he: `ההוכחה, ממש בתחילת מודול הראייה הממוחשבת, שזה לא תרגיל אקדמי — זו טכנולוגיה שכבר שינתה תוצאה אמיתית ובעלת השלכות גבוהות.`,
    },
    items: [
      {
        name: 'Prof. Shaul Peleg',
        type: 'person',
        sessionNumber: 22,
        bio: {
          en: `A professor of computer science at the Hebrew University of Jerusalem specializing in computer vision and image processing, and a co-founder of BriefCam — a company built on video-synopsis technology that condenses long surveillance footage into a short, searchable summary.`,
          he: `פרופסור למדעי המחשב באוניברסיטה העברית בירושלים המתמחה בראייה ממוחשבת ועיבוד תמונה, ומייסד-שותף של BriefCam — חברה שנבנתה על טכנולוגיית תמצות וידאו שמכווצת צילומי אבטחה ארוכים לסיכום קצר וניתן-לחיפוש.`,
        },
        context: {
          en: `Credited by Dr. Zuari as the creator of the technology that compressed hours of surveillance footage into minutes, helping identify the Boston Marathon bomber — used as the opening real-world case for why computer vision matters.`,
          he: `זוכה לקרדיט מד״ר זוארי כיוצר הטכנולוגיה שדחסה שעות של צילומי אבטחה לדקות, מה שסייע לזהות את מחבל מרתון בוסטון — שימש כמקרה העולם-האמיתי הפותח ללמה ראייה ממוחשבת חשובה.`,
        },
        verified: true,
      },
    ],
  },
  {
    topic: { en: 'Code', he: 'קוד' },
    influence: {
      en: `The course's own throughline — from writing code by hand to supervising an agent that writes it — traced back to one of the people most associated with that shift in practice.`,
      he: `הקו המנחה של הקורס עצמו — מכתיבת קוד ביד ועד לפיקוח על סוכן שכותב אותו — נעקב אחורה לאחד האנשים המזוהים ביותר עם המעבר הזה בפועל.`,
    },
    items: [
      {
        name: 'Andrej Karpathy',
        type: 'person',
        sessionNumber: 1,
        bio: {
          en: `A founding member of OpenAI and former Director of AI at Tesla, known for foundational deep-learning teaching — Stanford's CS231n and his own "Neural Networks: Zero to Hero" series — and for open-source projects (nanoGPT, llm.c) that build large language models from first principles in minimal code.`,
          he: `חבר מייסד ב-OpenAI ולשעבר מנהל ה-AI של Tesla, מוכר בזכות הוראת למידה עמוקה יסודית — קורס CS231n של סטנפורד וסדרת "Neural Networks: Zero to Hero" שלו עצמו — ובזכות פרויקטים בקוד פתוח (nanoGPT, llm.c) שבונים מודלי שפה גדולים מעקרונות ראשונים בקוד מינימלי.`,
        },
        context: {
          en: `Recommended as a follow in the Introduction session — no recording survives for that session, so this rests on direct confirmation rather than a transcript. The course returned to him concretely in Session 10: Dr. Zuari installed a Claude Code Skill attributed to Karpathy from the plugin marketplace and demonstrated it live, triggering it to rebuild the course site, as a real example of "code that keeps showing up" from an agent.`,
          he: `הומלץ לעקוב אחריו במפגש ההתמצאות — אין הקלטה ששרדה למפגש הזה, כך שזה נשען על אישור ישיר במקום תמליל. הקורס חזר אליו בפועל במפגש 10: ד״ר זוארי התקין Claude Code Skill שמיוחס לקרפתי ממרקטפלייס התוספים והדגים אותו בשידור חי, מפעיל אותו כדי לבנות מחדש את אתר הקורס, כדוגמה אמיתית ל"קוד שממשיך לצוץ" מסוכן.`,
        },
        verified: false,
        links: [
          { label: 'GitHub — karpathy', url: 'https://github.com/karpathy' },
          { label: 'YouTube — Andrej Karpathy', url: 'https://www.youtube.com/@AndrejKarpathy' },
          { label: 'karpathy.ai', url: 'https://karpathy.ai' },
        ],
      },
    ],
  },
];
