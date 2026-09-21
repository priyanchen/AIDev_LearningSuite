import type { Bilingual } from '@/lib/registry';

export type RecommendationType = 'book' | 'person' | 'course' | 'dataset' | 'platform' | 'reference' | 'newsletter' | 'organization';

export type RecommendationItem = {
  name: string;              // kept in its original language/script — not translated
  type: RecommendationType;
  sessionNumber?: number;    // links back to the session this came up in — omitted for general, non-session-tied follow recommendations
  role?: Bilingual;          // a short one-line "why follow" tag, for compact follow-list entries
  bio: Bilingual;            // who they actually are — general background, not course-specific
  context: Bilingual;        // why Dr. Zuari brought them up, grounded in the actual session
  verified: boolean;         // false where the source recording is dead and this rests on direct confirmation rather than a transcript
  editorial?: boolean;       // true for site-curated further-reading, not something Dr. Zuari actually said
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
        name: 'Prof. Shmuel Peleg',
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
        links: [
          { label: 'Research — Google Scholar', url: 'https://scholar.google.com/citations?user=CshJxRUAAAAJ&hl=en' },
          { label: 'Faculty Page — HUJI', url: 'https://www.cs.huji.ac.il/~peleg/' },
          { label: 'BriefCam', url: 'https://www.briefcam.com/' },
        ],
      },
      {
        name: 'MIT 6.S897 — Machine Learning for Healthcare, Lecture 13: Machine Learning for Mammography',
        type: 'course',
        sessionNumber: 22,
        bio: {
          en: `An MIT graduate course (taught by Peter Szolovits and David Sontag) on applying machine learning to clinical problems. Lecture 13, given by Dr. Adam Yala, covers deep-learning models that read mammograms — the same detection/classification building blocks as the session's YOLO exercises, applied to cancer screening instead of everyday objects.`,
          he: `קורס תואר שני של MIT (בהוראת פיטר סולוביץ' ודייוויד סונטג) על יישום למידת מכונה לבעיות קליניות. הרצאה 13, בהנחיית ד"ר אדם יאלה, עוסקת במודלים של למידה עמוקה שקוראים ממוגרפיות — אותם אבני-בניין של זיהוי/סיווג שנעשה בהם שימוש בתרגילי ה-YOLO של המפגש, מיושמות על סקירת סרטן במקום על אובייקטים יומיומיים.`,
        },
        context: {
          en: `Not something Dr. Zuari mentioned live — added editorially to extend the session's own real-world-impact framing (Prof. Peleg's surveillance work, above) into medicine: the exact object-detection and classification techniques taught in this session are, in practice, also how AI reads a mammogram.`,
          he: `לא משהו שד"ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כדי להרחיב את המסגור של השפעה-בעולם-האמיתי של המפגש עצמו (העבודה של פרופ' פלג באבטחה, למעלה) אל תוך הרפואה: אותן טכניקות זיהוי-אובייקטים וסיווג שנלמדות במפגש הזה הן, בפועל, גם איך AI קוראת ממוגרפיה.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'MIT OCW — Lecture 13: Machine Learning for Mammography', url: 'https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/resources/lecture-13-machine-learning-for-mammography/' },
          { label: 'MIT OCW — Full Course (6.S897)', url: 'https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/' },
        ],
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
      {
        name: 'W3Schools — Python Module Reference',
        type: 'reference',
        sessionNumber: 12,
        bio: {
          en: `A reference listing of Python's built-in standard-library modules (\`random\`, \`os\`, \`sys\`, \`math\`, and the rest) with their functions and short examples — the same modules the course's own \`import random\` and \`import calc\` exercises draw on.`,
          he: `רשימת עזר של המודולים המובנים בספריית התקן של פייתון (\`random\`, \`os\`, \`sys\`, \`math\`, והשאר) עם הפונקציות שלהם ודוגמאות קצרות — אותם מודולים שתרגילי \`import random\` ו-\`import calc\` של הקורס עצמו נשענים עליהם.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially as the standing reference for Session 12's "Import ≠ Use" distinction and every other session's standard-library imports, already linked from the Syntax page's Python section.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כעזר קבוע להבחנה "ייבוא ≠ שימוש" של מפגש 12 ולייבואי ספריית התקן של כל שאר המפגשים, כבר מקושר מסעיף הפייתון בעמוד התחביר.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'W3Schools — Python Module Reference', url: 'https://www.w3schools.com/python/python_ref_modules.asp' },
        ],
      },
    ],
  },
  {
    topic: { en: 'Machine Learning', he: 'למידת מכונה' },
    influence: {
      en: `Regression and model evaluation stop being formulas once they're run end-to-end against real, messy data — Kaggle is the site's own further-reading pointer for that (the specific worked housing-prices notebook lives on Session 18's own lesson page, right next to the metric it demonstrates).`,
      he: `רגרסיה והערכת מודל מפסיקות להיות נוסחאות ברגע שמריצים אותן מקצה לקצה על נתונים אמיתיים ומבולגנים — Kaggle היא ההפניה העריכתית של האתר לקריאה נוספת בנושא (המחברת הספציפית של מחירי דיור נמצאת בעמוד השיעור של מפגש 18 עצמו, ממש ליד המדד שהיא מדגימה).`,
    },
    items: [
      {
        name: 'Kaggle',
        type: 'platform',
        sessionNumber: 18,
        bio: {
          en: `A data-science community and platform hosting public datasets, competitions, and shared notebooks — a general well of real, messy datasets to practice regression, evaluation, and EDA against beyond the course's own material.`,
          he: `קהילה ופלטפורמה למדעי הנתונים המארחת מערכי נתונים ציבוריים, תחרויות, ומחברות משותפות — באר כללית של מערכי נתונים אמיתיים ומבולגנים לתרגול רגרסיה, הערכה, ו-EDA מעבר לחומר של הקורס עצמו.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially as a general source for anyone who wants to keep practicing on public datasets after the course. A specific worked example (a housing-prices EDA/prediction notebook) lives directly on Session 18's lesson page, next to the R²/RMSE/Adjusted R² card it illustrates.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כמקור כללי למי שרוצה להמשיך להתאמן על מערכי נתונים ציבוריים אחרי הקורס. דוגמה ספציפית ומפורקת (מחברת EDA/חיזוי למחירי דיור) נמצאת ישירות בעמוד השיעור של מפגש 18, ליד כרטיס R²/RMSE/Adjusted R² שהיא ממחישה.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'Kaggle', url: 'https://www.kaggle.com/' },
        ],
      },
    ],
  },
  {
    topic: { en: 'Who to Follow', he: 'את מי לעקוב' },
    influence: {
      en: `A site-curated follow list for staying current after the course ends — not something Dr. Zuari said live, but a set of standing recommendations covering different angles of the field: foundational intuition, practical engineering, weekly news, and frontier research.`,
      he: `רשימת מעקב שנאספה על ידי האתר כדי להישאר מעודכנת אחרי שהקורס נגמר — לא משהו שד״ר זוארי אמר בשידור חי, אלא סט המלצות קבועות שמכסה זוויות שונות של התחום: אינטואיציה יסודית, הנדסה מעשית, חדשות שבועיות, ומחקר חזית.`,
    },
    items: [
      {
        name: 'Andrej Karpathy',
        type: 'person',
        role: { en: 'Foundations + Intuition', he: 'יסודות + אינטואיציה' },
        bio: {
          en: `A founding member of OpenAI and former Director of AI at Tesla — see the Code category above for his full course context.`,
          he: `חבר מייסד ב-OpenAI ולשעבר מנהל ה-AI של Tesla — ראי את קטגוריית הקוד למעלה להקשר המלא שלו בקורס.`,
        },
        context: {
          en: `Grouped here as the "foundations + intuition" anchor of the site's standing follow list.`,
          he: `מקובצת כאן כעוגן ה"יסודות + אינטואיציה" של רשימת המעקב הקבועה של האתר.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'YouTube — Andrej Karpathy', url: 'https://www.youtube.com/@AndrejKarpathy' },
          { label: 'karpathy.ai', url: 'https://karpathy.ai' },
        ],
      },
      {
        name: 'Sebastian Raschka',
        type: 'person',
        role: { en: 'Practical ML/LLM Engineering', he: 'הנדסת ML/LLM מעשית' },
        bio: {
          en: `A machine learning researcher and author (Python Machine Learning, Machine Learning Q and AI) known for clear, code-first explanations of how modern LLMs are actually built and fine-tuned — the "Ahead of AI" newsletter is a standing reference for practical model-engineering detail.`,
          he: `חוקרת למידת מכונה ומחברת (Python Machine Learning, Machine Learning Q and AI) הידועה בהסברים ברורים ומבוססי-קוד על איך מודלי שפה גדולים באמת נבנים ומכווננים — הניוזלטר "Ahead of AI" הוא מקור עזר קבוע לפרטי הנדסת מודלים מעשית.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially as the "practical engineering" counterweight to Karpathy's foundational teaching.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כמשקל-נגד "הנדסי מעשי" להוראה היסודית של קרפתי.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'Ahead of AI (newsletter)', url: 'https://magazine.sebastianraschka.com' },
          { label: 'GitHub — rasbt', url: 'https://github.com/rasbt' },
          { label: 'X — @rasbt', url: 'https://x.com/rasbt' },
        ],
      },
      {
        name: 'ThursdAI — Alex Volkov',
        type: 'newsletter',
        role: { en: 'Weekly AI Market/Research Updates', he: 'עדכוני שוק/מחקר AI שבועיים' },
        bio: {
          en: `A weekly live show and newsletter hosted by Alex Volkov, recapping that week's model releases, research papers, and AI industry news — a standing way to track a field that moves faster than any syllabus.`,
          he: `תוכנית חיה שבועית וניוזלטר בהנחיית אלכס וולקוב, שמסכמים את שחרורי המודלים, מאמרי המחקר, וחדשות תעשיית ה-AI של אותו שבוע — דרך קבועה לעקוב אחרי תחום שנע מהר יותר מכל תוכנית לימודים.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially as the "weekly news" anchor of the follow list, the same role Yuval Avidani fills for Hebrew-speaking students above.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כעוגן ה"חדשות השבועיות" של רשימת המעקב, אותו תפקיד שיובל אבידני ממלא לסטודנטיות דוברות עברית למעלה.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'ThursdAI.news', url: 'https://thursdai.news' },
          { label: 'X — @altryne', url: 'https://x.com/altryne' },
        ],
      },
      {
        name: 'Sakana AI',
        type: 'organization',
        role: { en: 'Agentic / Evolutionary AI Research', he: 'מחקר AI סוכני / אבולוציוני' },
        bio: {
          en: `A Tokyo-based AI research lab, co-founded by former Google Brain/Transformer researchers, known for nature-inspired approaches — evolutionary model merging, agentic multi-model systems — as an alternative to simply scaling up a single large model.`,
          he: `מעבדת מחקר AI ממוקמת בטוקיו, שנוסדה בשותפות חוקרים לשעבר מ-Google Brain/Transformer, הידועה בגישות בהשראת הטבע — מיזוג מודלים אבולוציוני, מערכות סוכניות רב-מודליות — כאלטרנטיבה להגדלה פשוטה של מודל בודד וגדול.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially as the "frontier research" anchor of the follow list, for whoever wants to see where agentic AI research is headed past the course's own agent material.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי כעוגן "מחקר החזית" של רשימת המעקב, למי שרוצה לראות לאן מחקר ה-AI הסוכני הולך מעבר לחומר הסוכנים של הקורס עצמו.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'sakana.ai', url: 'https://sakana.ai' },
        ],
      },
      {
        name: 'Andrew Ng',
        type: 'person',
        role: { en: 'Structured ML/AI Courses', he: 'קורסי ML/AI מובנים' },
        bio: {
          en: `Co-founder of Coursera and DeepLearning.AI, and the instructor behind the Machine Learning Specialization and Deep Learning Specialization — the standing structured-course counterpart to this list's more informal follow accounts, for anyone who wants a formal curriculum after this one ends.`,
          he: `מייסד-שותף של Coursera ו-DeepLearning.AI, והמרצה מאחורי ה-Machine Learning Specialization וה-Deep Learning Specialization — המקבילה הקבועה בקורס מובנה למעקב הבלתי-פורמלי יותר ברשימה הזו, למי שרוצה תוכנית לימודים פורמלית אחרי שהקורס הזה נגמר.`,
        },
        context: {
          en: `Not something Dr. Zuari referenced live — added editorially, the one formal-course entry alongside the informal follow accounts above.`,
          he: `לא משהו שד״ר זוארי הזכיר בשידור חי — נוסף באופן עריכתי, הפריט היחיד של קורס פורמלי לצד חשבונות המעקב הבלתי-פורמליים למעלה.`,
        },
        verified: true,
        editorial: true,
        links: [
          { label: 'Coursera — Andrew Ng', url: 'https://www.coursera.org/instructor/andrewng' },
          { label: 'DeepLearning.AI', url: 'https://www.deeplearning.ai' },
        ],
      },
    ],
  },
];
