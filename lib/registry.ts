import type { Locale } from '@/i18n';

// ============================================================================
// Types
// ============================================================================

export type Bilingual = { en: string; he: string };

export type ModuleStatus = 'complete' | 'in-progress' | 'planned';
export type Visibility = 'public' | 'hidden';
export type SessionStatus = 'complete' | 'planned' | 'deferred';
export type SessionFormat = 'zoom' | 'in-person';

export type SourceLinks = {
  recording?: string;
  chat?: string;
  slides?: string[];
};

export type VideoLinks = {
  lecture?: string;
  tirgul?: string;
};

export type Module = {
  id: string;                     // "04-intro-to-ds"
  number: number;                 // 4
  title: Bilingual;
  description: Bilingual;
  status: ModuleStatus;
  visibility: Visibility;
  sessionRange: [number, number]; // [13, 21]
  moduleSlides?: string[];        // Drive folders shared across module
};

export type Session = {
  slug: string;                   // "session-19-logistic-regression"
  number: number;                 // 19 (of 35)
  moduleId: string;               // "04-intro-to-ds"
  numberInModule: number;         // 6 (of Module 4)
  date: string;                   // "2026-09-02"
  format: SessionFormat;
  title: Bilingual;
  headline: Bilingual;
  status: SessionStatus;
  concepts?: string[];
  sourceLinks?: SourceLinks;
  videoLinks?: VideoLinks;
  hasCardDeck?: boolean;
  hasProject?: boolean;
  projectFile?: string;
};

// ============================================================================
// Modules — the 10 modules of the course
// Modules 6–10 are hidden until material arrives
// ============================================================================

export const modules: Module[] = [
  {
    id: '01-intro',
    number: 1,
    title: { en: 'Introduction', he: 'מבוא' },
    description: {
      en: 'Course opening — orientation, expectations, tooling, and the shape of what is coming.',
      he: 'פתיחת הקורס — התמצאות, ציפיות, כלים, וצורתו של מה שעתיד לבוא.',
    },
    status: 'planned',
    visibility: 'public',
    sessionRange: [1, 1],
  },
  {
    id: '02-n8n',
    number: 2,
    title: { en: 'n8n · No-Code Automation', he: 'n8n · אוטומציה ללא קוד' },
    description: {
      en: 'A hands-on encounter with workflow automation before writing any code. Concepts that will recur throughout the course, learned first through visual building blocks.',
      he: 'מפגש מעשי עם אוטומציית תהליכים לפני שנכתוב שורת קוד. מושגים שיחזרו לאורך כל הקורס, נלמדים תחילה דרך אבני בניין ויזואליות.',
    },
    status: 'in-progress',
    visibility: 'public',
    sessionRange: [2, 2],
  },
  {
    id: '03-python',
    number: 3,
    title: { en: 'Python', he: 'פייתון' },
    description: {
      en: 'From syntax to systems — ten sessions building the language foundation for everything that follows.',
      he: 'מתחביר למערכות — עשרה מפגשים הבונים את בסיס השפה לכל מה שיבוא בהמשך.',
    },
    status: 'planned',
    visibility: 'public',
    sessionRange: [3, 12],
    moduleSlides: [
      'https://drive.google.com/drive/folders/1bYf6xueW-6S3PDYko1A8BDhzWityx0jg',
      'https://drive.google.com/drive/folders/1zTaJZnRNrB3v4wN92U3rOnhOqiB-1bsV',
    ],
  },
  {
    id: '04-intro-to-ds',
    number: 4,
    title: { en: 'Introduction to Data Science', he: 'מבוא למדעי הנתונים' },
    description: {
      en: 'The full model-building pipeline — from raw data through preprocessing, training, evaluation, and interpretation. Supervised and unsupervised learning.',
      he: 'צנרת בניית המודל המלאה — מנתונים גולמיים דרך עיבוד מקדים, אימון, הערכה ופרשנות. למידה מונחית ולא מונחית.',
    },
    status: 'in-progress',
    visibility: 'public',
    sessionRange: [13, 21],
    moduleSlides: [
      'https://drive.google.com/drive/folders/16LKkzFB-3o92zCrvn6dcCrgl0GcD1qsR',
      'https://drive.google.com/drive/folders/1290vyALfII2iqjtk3dwNC78-NB2iaI2i',
      'https://drive.google.com/drive/folders/1U1LuZ76nIgaPWa95MyzhtOWA1xLSC6FE',
      'https://drive.google.com/drive/folders/1cUAKHkY1Sr6uZ-T6SEFs51_qfypFhaBF',
    ],
  },
  {
    id: '05-computer-vision',
    number: 5,
    title: { en: 'Computer Vision', he: 'ראייה ממוחשבת' },
    description: {
      en: 'Teaching machines to see — from image representation to convolutional architectures.',
      he: 'ללמד מכונות לראות — מייצוג תמונות ועד ארכיטקטורות קונבולוציוניות.',
    },
    status: 'planned',
    visibility: 'public',
    sessionRange: [22, 22],
    moduleSlides: [
      'https://drive.google.com/drive/folders/1mFzbuvYR8jHJwlcfZOs2_Tce2opPyQmN',
      'https://drive.google.com/drive/folders/1WktwIgKnEN8NPyYeHolldKIG59q9W3yY',
    ],
  },
  // Modules 6-10 are hidden until material arrives
  {
    id: '06-sample-project',
    number: 6,
    title: { en: 'Sample Project', he: 'פרויקט לדוגמה' },
    description: {
      en: 'A complete project walked through end-to-end as a demonstration of applied craft.',
      he: 'פרויקט שלם המובל מתחילה ועד סוף כהדגמה של אמנות יישומית.',
    },
    status: 'planned',
    visibility: 'hidden',
    sessionRange: [23, 23],
  },
  {
    id: '07-llm-prompt-rag',
    number: 7,
    title: { en: 'LLM, Prompt Engineering & RAG', he: 'LLM, הנדסת פרומפט ו-RAG' },
    description: {
      en: 'Working with large language models — prompt architecture and retrieval-augmented generation.',
      he: 'עבודה עם מודלי שפה גדולים — ארכיטקטורת פרומפט ויצירה מוגברת אחזור.',
    },
    status: 'planned',
    visibility: 'hidden',
    sessionRange: [24, 27],
  },
  {
    id: '08-agents',
    number: 8,
    title: { en: 'Agents', he: 'סוכנים' },
    description: {
      en: 'Autonomous systems — models that plan, use tools, and act.',
      he: 'מערכות אוטונומיות — מודלים שמתכננים, משתמשים בכלים ופועלים.',
    },
    status: 'planned',
    visibility: 'hidden',
    sessionRange: [28, 30],
  },
  {
    id: '09-final-project',
    number: 9,
    title: { en: 'Final Project', he: 'פרויקט גמר' },
    description: {
      en: 'The synthesis — every concept in the course brought to bear on one applied deliverable.',
      he: 'הסינתזה — כל מושג בקורס מיושם על תוצר יישומי אחד.',
    },
    status: 'planned',
    visibility: 'hidden',
    sessionRange: [31, 34],
  },
  {
    id: '10-closing',
    number: 10,
    title: { en: 'Closing Session', he: 'מפגש סיום' },
    description: {
      en: 'The in-person closing — reflection, next steps, and community.',
      he: 'הסיום הפרונטלי — רפלקציה, צעדים הבאים, וקהילה.',
    },
    status: 'planned',
    visibility: 'hidden',
    sessionRange: [35, 35],
  },
];

// ============================================================================
// Sessions — the 35-session registry
// ============================================================================

export const sessions: Session[] = [
  // ────────── Module 1 · Intro ──────────
  // Session 1 — the German Tank Problem, AI history, AI ethics, course orientation — fully authored
  // Note: no recording/transcript survives for this session (source link was dead); built from Dr. Zuari's
  // own two original slide decks instead (the German Tank Problem lecture + the course orientation deck).
  {
    slug: 'session-01-intro',
    number: 1,
    moduleId: '01-intro',
    numberInModule: 0,
    date: '2026-06-28',
    format: 'in-person',
    title: {
      en: `The German Tank Problem — What Five Numbers Can Honestly Tell You`,
      he: `בעיית הטנקים הגרמנים — מה חמישה מספרים יכולים לומר לך באמת`,
    },
    headline: {
      en: `The course opens with a real statistical puzzle before ever mentioning a model, moves through AI's real boom-bust history and its concrete ethical failures — Amazon's biased hiring model, real accountability gaps in autonomous vehicles — and closes with the course's own explicit guidance on how to actually succeed in it.`,
      he: `הקורס נפתח בחידה סטטיסטית אמיתית לפני שמזכירים בכלל מודל, עובר דרך ההיסטוריה האמיתית של פריחה-שפל של AI והכשלים האתיים הקונקרטיים שלו — מודל הגיוס המוטה של אמזון, פערי אחריות אמיתיים ברכבים אוטונומיים — ונסגר בהנחיה המפורשת של הקורס עצמו לגבי איך באמת להצליח בו.`,
    },
    status: 'complete',
    concepts: ['Statistical Estimation', 'AI History', 'AI Ethics', 'Algorithmic Bias', 'Human in the Loop', 'Course Orientation'],
    hasCardDeck: true,
    sourceLinks: {
      chat: 'https://drive.google.com/file/d/1l_WMQ9_ZUIbXfdfXX8wi4MmSDS4QEwmn/view',
      slides: [
        'https://drive.google.com/file/d/1HFeezeeimXYhXz-xy78acoTVwBWJJzYk/view',
        'https://drive.google.com/file/d/1cgitSOfqYu-xwawhr46S4Eso_rxrdAs-/view',
      ],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/rq0l_0lrNkfDz2av-7Ns51I8i9ZcyvUCquFM2HBUliWFfXVF9o-y87AGmxEbeqmF.gceHVDCl0hd_N635',
    },
  },

  // ────────── Module 2 · n8n ──────────
  {
    slug: 'session-02-n8n',
    number: 2,
    moduleId: '02-n8n',
    numberInModule: 0,
    date: '2026-07-01',
    format: 'zoom',
    title: { en: 'n8n — Automation Before Code', he: 'n8n — אוטומציה לפני קוד' },
    headline: {
      en: 'A visual encounter with workflows, triggers, and integrations — the mental model that will return when we write real code.',
      he: 'מפגש ויזואלי עם תהליכי עבודה, טריגרים ואינטגרציות — המודל המנטלי שיחזור כשנכתוב קוד אמיתי.',
    },
    status: 'complete',
    concepts: ['Workflow', 'Trigger', 'Node', 'API', 'Automation', 'AI Agent', 'Credentials'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1DzU16iwlow76ApJj873LZjf6xxIiXYu3/view',
      chat: 'https://drive.google.com/file/d/11BYR1mnlU8XMjYY1DsHGflw8TGvVEbii/view',
      slides: [
        'https://drive.google.com/file/d/1H5YJVS9z9_gWPoVX6taPr6TztEeSolkM/view',
        'https://drive.google.com/file/d/1ozYT7DD80ZcsiMPiaqGshINTSukoSKDU/view',
      ],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/g_VSkgpaXUGhr6OWNyYgDOrkMG4NUIHO19EPKwNRy26v6C_15RbYN9S4uTD8JYe_.MQNeJ3tDj_qKKuiF',
    },
  },

  // ────────── Module 3 · Python ──────────
  // Session 3 — Python module opener — fully authored
  {
    slug: 'session-03-python-0',
    number: 3,
    moduleId: '03-python',
    numberInModule: 0,
    date: '2026-07-05',
    format: 'zoom',
    title: {
      en: 'Foundations — Hardware, Binary, and ASCII',
      he: 'יסודות — חומרה, בינארי, ו-ASCII',
    },
    headline: {
      en: 'The slowest session of the course, by design — building the substrate every future line of code will stand on.',
      he: 'המפגש האיטי ביותר בקורס, בכוונה — בונים את המצע שכל שורת קוד עתידית תעמוד עליו.',
    },
    status: 'complete',
    concepts: ['CPU / RAM / Storage', 'Bit & Byte', 'ASCII', 'Memory Hierarchy', 'Python Installation'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1HzUunsrmxcdHXRbHIM777jVUrJFT0pOs/view',
      chat: 'https://drive.google.com/file/d/1xecAGWY0d6xUBNx_UWQXCPwza24TFHQx/view',
      slides: ['https://drive.google.com/file/d/1ok4a3Yae14i6zkavUj3gW0V2MUkgcFlX/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/-0_d6XVckP9Qr-INBzcbesgawgffeTC_NMO-TjdU67nfSIMQJKjT0fFjQdtvA90L.03Bq6nBYbPjv3on5',
      tirgul: 'https://us06web.zoom.us/rec/share/JicRCImsoyMzflJFjDai5qNsVCWqXBsXubenB6WOnSbmjqxdeMU18sT5GtKyRM67.fXq34rgeeTbs5CdN',
    },
  },
  // Session 4 — Objects revisited across strings, lists, tuples, dictionaries — fully authored
  {
    slug: 'session-04-python-1',
    number: 4,
    moduleId: '03-python',
    numberInModule: 1,
    date: '2026-07-08',
    format: 'zoom',
    title: {
      en: 'Objects Everywhere — Strings, Lists, Tuples, and Dictionaries',
      he: 'אובייקטים בכל מקום — מחרוזות, רשימות, Tuples ומילונים',
    },
    headline: {
      en: 'The same dot-and-bracket grammar learned on strings turns out to be the whole language — proven live across four data structures and the course’s first error.',
      he: 'אותו דקדוק של נקודה וסוגריים שנלמד על מחרוזות מתגלה כשפה כולה — מוכח בזמן אמת על פני ארבעה מבני נתונים והשגיאה הראשונה של הקורס.',
    },
    status: 'complete',
    concepts: ['Indexing & Slicing', 'Mutability', 'Variables', 'Lists', 'Tuples', 'Dictionaries', 'AI Agent Landing Page'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1S0I4S2WsESpnFRWvoie-OryIOYn_SrfQ/view',
      chat: 'https://drive.google.com/file/d/1hIhHEwKyjsIwXm2HNYGcaycFLu7fYhwD/view',
      slides: ['https://drive.google.com/file/d/1yHnwLkNgMEBgK9F8SePWqQfgUAUWgRuA/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/hZDzpoA6T7V2fPXNogz8QgKYhgx9XO7iwI6fJoq220v056Hhuwh1STx9hG7ACkxD.tbcX3jaIXqG5ploi',
      tirgul: 'https://us06web.zoom.us/rec/share/54TBYLeQIgs6QnZy6q9O_HruEmHyksqXGWQgtqMpF70bZ4D8Qx7GLY1fOZATfgof.zZajNd58b2l9Nc35',
    },
  },
  // Session 5 — Conditionals, loops, and reading code fluently — fully authored
  {
    slug: 'session-05-python-2',
    number: 5,
    moduleId: '03-python',
    numberInModule: 2,
    date: '2026-07-12',
    format: 'zoom',
    title: {
      en: 'Conditions, Loops, and Why Reading Code Matters More Than Writing It',
      he: 'תנאים, לולאות, ולמה קריאת קוד חשובה יותר מכתיבתו',
    },
    headline: {
      en: 'Comparison operators, branching, and loops arrive together, but the session’s real destination is a harder claim: the goal was never to memorize syntax, but to read code fluently enough to direct and verify it.',
      he: 'אופרטורי השוואה, הסתעפויות ולולאות מגיעים יחד, אבל היעד האמיתי של המפגש הוא טענה קשה יותר: המטרה מעולם לא הייתה לשנן תחביר, אלא לקרוא קוד בשטף מספיק כדי לכוון ולוודא אותו.',
    },
    status: 'complete',
    concepts: ['Comparison Operators', 'if/elif/else', 'while Loops', 'break/continue/pass', 'Sets & None', 'Boolean Logic'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/14ka3nhd-BtPIOlnt9gtOVpbT2neNaRsK/view',
      chat: 'https://drive.google.com/file/d/1LbXEkmTiIUU1HmF4RhuYfAcDEpRPRxHb/view',
      slides: ['https://drive.google.com/file/d/1U7ryg_zfCQ7-GyJX1zxZ07v6-eXnDCi7/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/_o_nfXQfGjuuF82TUo-_AdT-310GUjB9M4CYDNvBss4BOZWYJGzeUJf5-OaJqMs5.xBp8EVZo3FpzyA2P',
      tirgul: 'https://us06web.zoom.us/rec/share/kQQOF9aZycUntqJjirwueqKuuzHUNwOWl1jlp67WkJehbtnP4reX-3pExQv1yGPc.ZAKvqpnjrpfgOYGu',
    },
  },
  // Session 6 — Two group-built games arrive at functions — fully authored
  {
    slug: 'session-06-python-3',
    number: 6,
    moduleId: '03-python',
    numberInModule: 3,
    date: '2026-07-15',
    format: 'zoom',
    title: {
      en: 'From Pseudocode to Functions — Building Two Games',
      he: 'מפסאודוקוד לפונקציות — בונים שני משחקים',
    },
    headline: {
      en: 'Two group-built games — a number-guessing game and a shuffle-and-find game — turn conditionals and loops into working programs and arrive, by necessity, at functions.',
      he: 'שני משחקים שנבנו בקבוצות — משחק ניחוש מספרים ומשחק ערבוב וחיפוש — הופכים תנאים ולולאות לתוכניות עובדות ומגיעים, מתוך צורך, לפונקציות.',
    },
    status: 'complete',
    concepts: ['Decomposition', 'random & abs()', 'while/for Loops', 'List Comprehensions', 'Functions', 'print vs return', 'Parameters & Arguments'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1FqSo5qLcuWDW4wXGLDnzQGUjKriZkmjJ/view',
      chat: 'https://drive.google.com/file/d/1f_aO9Z0UYWXPq4sayy0qr_be-GoxAsRO/view',
      slides: ['https://drive.google.com/file/d/1y4Gu-9clZxYqt4vMWoKmqu_HigTDi1sl/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/9DE5cUgukg4QJIYytlMdMR6lKYATHCyGt1ZNPr11Q18EvSDf5T9q5tAKLxnv2p3o.avRebiwpNVMqr3AY',
      tirgul: 'https://us06web.zoom.us/rec/share/h8Bc-wz7ZIeLAWQIMvZmSJ0qWSk0xHDTcRN0BlKohVtDOxW8TZet0v3YJCaS8dtt.RCbEe-WehL3COMXZ',
    },
  },
  // Session 7 — Functions finished, then the terminal and Git begin — fully authored
  {
    slug: 'session-07-python-4',
    number: 7,
    moduleId: '03-python',
    numberInModule: 4,
    date: '2026-07-19',
    format: 'zoom',
    title: {
      en: 'Functions, Finished — Then the Terminal and Git Begin',
      he: 'פונקציות, סיום — ואז מתחילים טרמינל וגיט',
    },
    headline: {
      en: 'The last function tools — *args, **kwargs, and scope — close out Python’s foundations, and the session pivots to the terminal and Git, the shell every future AI agent will actually run inside.',
      he: 'הכלים האחרונים של פונקציות — *args, **kwargs וטווח (scope) — סוגרים את היסודות של פייתון, והמפגש עובר לטרמינל ול-Git, המעטפת שכל סוכן AI עתידי ירוץ בתוכה בפועל.',
    },
    status: 'complete',
    concepts: ['*args & **kwargs', 'Local vs Global Scope', 'lambda / map / filter', 'Terminal & Shell', 'Git Staging & Commit'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1kbLpmKg-PiBVvTGyWH4TYpIqjvTqPXNU/view',
      chat: 'https://drive.google.com/file/d/1ym-zhXtJw5FvSBZCRfug12jx88Z_KjXi/view',
      slides: ['https://drive.google.com/file/d/1zvgETG_GueHJ6hoXu9Mx7Bkwy9AXvpku/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/CCFRMNVCFYrh6r0hHqmPcT0IjwqdWoNpOOEbSuRrUT_nIPzo4wvlOOICSbpyGTG5._fdTST5ljIKt8P0W',
      tirgul: 'https://us06web.zoom.us/rec/share/JZd8tqrgdGAw6jKfUqrNoWl_ECbqxl3fsiRILlMiF7hxJSkdrYYxnlVZhrU-4RJU.Uh0q3DpnMieNKvKV',
    },
  },
  // Session 8 — From an empty folder to a public GitHub repository — fully authored
  {
    slug: 'session-08-python-5',
    number: 8,
    moduleId: '03-python',
    numberInModule: 5,
    date: '2026-07-26',
    format: 'zoom',
    title: {
      en: 'Push, Pull, and the Discipline of Branches',
      he: 'Push, Pull, ומשמעת הענפים',
    },
    headline: {
      en: 'A full first repository, from empty folder to a public GitHub page, and the deeper discipline underneath it: isolate risky work on a branch, and only merge into main once it’s proven safe.',
      he: 'repository ראשון מלא, מתיקייה ריקה ועד עמוד GitHub ציבורי, והמשמעת העמוקה שמתחת לזה: לבודד עבודה מסוכנת בענף, ולמזג ל-main רק אחרי שהוכח שהוא בטוח.',
    },
    status: 'complete',
    concepts: ['Push, Pull & Sync', 'Fork vs Clone', 'Reading a Diff', 'Branches & Merging', 'README & License'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1L7uoa0N74Fr-xo7YFRImMrycHyg2KaNG/view',
      chat: 'https://drive.google.com/file/d/110CtrUDROYRw18WoKLNCn-uEt6XVBCAz/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/1p920Qjb4KBk-5eaUGVfBvRPZziZVYnBsJSKe3wLtAp4Zo3pEmofCnrAw31silmk.I3doHYEJtlIjFb6O',
      tirgul: 'https://us06web.zoom.us/rec/share/lXfqpu8bD_Jjll9ZZkI2MYQM3ZbpbwwnViQAZjqZVT36WWGkJen3J7NTvcH911QT.TMvX5TyEUI1aYcb5',
    },
  },
  // Session 9 — Unpacking, decorators, and the arrival of Claude Code — fully authored
  {
    slug: 'session-09-python-6',
    number: 9,
    moduleId: '03-python',
    numberInModule: 6,
    date: '2026-07-29',
    format: 'zoom',
    title: {
      en: 'Unpacking, Decorators, and the Arrival of Claude Code',
      he: 'Unpacking, Decorators, והגעתו של Claude Code',
    },
    headline: {
      en: 'Two small Python patterns — unpacking and decorators — both boil down to naming a shape so you never repeat it, right before the session pivots to Claude Code: CLAUDE.md as memory, plan mode as discipline, and sub-agents as delegation.',
      he: 'שני דפוסי פייתון קטנים — unpacking ו-decorators — שניהם מצטמצמים לתת שם לצורה כדי שלא תצטרכי לחזור עליה, ממש לפני שהמפגש עובר ל-Claude Code: CLAUDE.md כזיכרון, מצב תכנון כמשמעת, וסוכני-משנה כהאצלה.',
    },
    status: 'complete',
    concepts: ['Unpacking (*)', 'Decorators', 'try/except', 'CLAUDE.md', 'Plan Mode & Thinking Levels', 'Sub-Agents'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1hoVWOl_yzfCgRuipi32nAeBTDo_l8WcV/view',
      chat: 'https://drive.google.com/file/d/1RRa6R4vJypoXEsnL6YkuVtztUuCF7Ic1/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/2PYaaR8vp_z2rK_s-8mmHt0IawXsddTlPkK9wGe-z5PgT7eVieI7QkZTeD0wQS_Z.5A0mAqYl22UB6VzA',
      tirgul: 'https://us06web.zoom.us/rec/share/e8LrHP7K0qKhV_kUxGcBYLLuXvXOBpu9rqONF7ONpOMUZammiwZG2RmGNNuqAlcN.OCHdczXK6qGf26oZ',
    },
  },
  // Session 10 — Two kinds of agent, and working as a team — fully authored
  {
    slug: 'session-10-python-7',
    number: 10,
    moduleId: '03-python',
    numberInModule: 7,
    date: '2026-08-02',
    format: 'zoom',
    title: {
      en: 'Two Kinds of Agent, and Working as a Team',
      he: 'שני סוגי סוכן, ועבודה כצוות',
    },
    headline: {
      en: 'Sub-agents graduate into team agents that coordinate in parallel, but the session’s sharpest lesson is a distinction: the agent that helps you write an app and the agent you embed inside it to serve real users are not the same thing, and not billed the same way.',
      he: 'סוכני-משנה משדרגים לסוכני-צוות שמתאמים במקביל, אבל השיעור החד ביותר של המפגש הוא הבחנה: הסוכן שעוזר לך לכתוב אפליקציה והסוכן שאת מטמיעה בתוכה כדי לשרת משתמשים אמיתיים אינם אותו דבר, ולא מחויבים באותו אופן.',
    },
    status: 'complete',
    concepts: ['Sub-Agents vs Team Agents', 'Coding Agent vs In-App Agent', 'API vs Subscription Billing', 'CLAUDE.md Maintenance', 'Permission Prompts'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1FdFMt4bEG632vDY15cEgSTeTrYv8Qw9O/view',
      chat: 'https://drive.google.com/file/d/1CqnUfpHiWCeIVqMyn5lvZ8zBCLqV2jCF/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/vs_TCV6F6BGWQn-3-mTZKME7E4maohP3-1k1YnpvAzBUmh7UHXR9vj_V3J03HZRe.ntHedOES3UD3u9ud',
      tirgul: 'https://us06web.zoom.us/rec/share/xtOVHuu7L9Q0_fXOZujLqYyQlS_cGMsIAyF4AhmL13p6LgfZwT3FgWETVZf8YlCX.eRI0Ol6HsdRDJvZU',
    },
  },
  // Session 11 — Classes, objects, and the blueprint behind everything — fully authored
  {
    slug: 'session-11-python-8',
    number: 11,
    moduleId: '03-python',
    numberInModule: 8,
    date: '2026-08-05',
    format: 'zoom',
    title: {
      en: 'Classes, Objects, and the Blueprint Behind Everything',
      he: 'מחלקות, אובייקטים, והתבנית שמאחורי הכול',
    },
    headline: {
      en: 'The “everything is an object” idea from Session 3 finally gets its blueprint: classes, instances, inheritance with three real options, and one attribute that holds not a value but another object entirely.',
      he: 'הרעיון "הכול הוא אובייקט" ממפגש 3 סוף סוף מקבל את התבנית שלו: מחלקות, מופעים, הורשה עם שלוש אפשרויות אמיתיות, ותכונה אחת שמחזיקה לא ערך אלא אובייקט שלם אחר.',
    },
    status: 'complete',
    concepts: ['Classes & Objects', '__init__ & self', 'Inheritance', 'Method Overriding', 'Composition'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1GAkKP5CXoY89LBR_a0RbP-u-HxJPsjIl/view',
      chat: 'https://drive.google.com/file/d/1uj82xIKF6nT_L-bkr_yT2OxtogUnLjGO/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/7reHLqN5jHF9_dORUg-pAHQLKthmfgo25Yr0By53U5X40i48lZzBeDCY1MKtt6lg.mXr4vh6MJ9ELySWG',
      tirgul: 'https://us06web.zoom.us/rec/share/QqSH-VfXVp4W63Mookh3MoYFfZAXF8O5WLdB-H0gB8IU0KZChZorVhgfM72rdvFU.wvaiubKgIMcY3y82',
    },
  },
  // Session 12 — Modules, packages, and virtual environments — fully authored
  {
    slug: 'session-12-python-9',
    number: 12,
    moduleId: '03-python',
    numberInModule: 9,
    date: '2026-08-09',
    format: 'zoom',
    title: {
      en: 'Modules, Packages, and Virtual Environments',
      he: 'מודולים, חבילות, וסביבות וירטואליות',
    },
    headline: {
      en: `The Python module closes on how files reach across each other — import versus use, pip and PyPI, and the sterile virtual environment that keeps one project's package versions from ever touching another's.`,
      he: `מודול הפייתון נסגר על איך שקבצים מושיטים יד אחד לשני — ייבוא מול שימוש, pip ו-PyPI, והסביבה הווירטואלית הסטרילית ששומרת שגרסאות החבילות של פרויקט אחד לעולם לא ייגעו באלו של אחר.`,
    },
    status: 'complete',
    concepts: ['import vs from-import', 'pip & PyPI', 'Virtual Environments', '__name__ == "__main__"', 'ModuleNotFoundError', 'API Key Hygiene'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1y0I7MB7pkwDXewx-Sn4LFe2wjxHoEMaF/view',
      chat: 'https://drive.google.com/file/d/11umNAEI1l1-sf5Ol-bkJFloa0g9lQWsM/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/sLDgerhmI4YmTSNGVxoPZLygPxeXyRKbbQTovKER7L7JZb9rCtEB_6zOs1yxiPDM.G_wdX6NiE33hD6iG',
      tirgul: 'https://us06web.zoom.us/rec/share/W7KVAfpGl3Uz3Wi2UnLPpfRVZJx0ii2_QfROlESiWCk-yYhJXG10KY96RM6lbRYK.jiPT_bERRm92qlFs',
    },
  },

  // ────────── Module 4 · Intro to DS ──────────
  // Session 13 — Statistics foundations for the Data Science module — fully authored
  {
    slug: 'session-13-ds-0',
    number: 13,
    moduleId: '04-intro-to-ds',
    numberInModule: 0,
    date: '2026-08-12',
    format: 'zoom',
    title: {
      en: 'Statistics — Measures, Distributions, and the Discipline of Doubting Numbers',
      he: 'סטטיסטיקה — מדדים, התפלגויות, ומשמעת הספק במספרים',
    },
    headline: {
      en: `Module 4 opens with the statistics every model evaluation will lean on — central tendency and dispersion built from first principles, correlation without causation, two real stories about biased data, and a proper .env fix for the API key problem from Session 12.`,
      he: `מודול 4 נפתח בסטטיסטיקה שכל הערכת מודל תישען עליה — מיקום מרכזי ופיזור בנויים מעקרונות ראשונים, קורלציה בלי סיבתיות, שני סיפורים אמיתיים על נתונים מוטים, ותיקון .env אמיתי לבעיית מפתח ה-API ממפגש 12.`,
    },
    status: 'complete',
    concepts: ['EDA', 'Variable Types', 'Mean / Median / Mode', 'Variance & Std Dev', 'IQR & Outliers', 'Correlation vs Causation', 'Sampling Bias', '.env & dotenv'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1NPJiyQPndVkzHC4WHe7KMR44dQeEwJ3L/view',
      chat: 'https://drive.google.com/file/d/1nv2A5AkYhajEL23hlwAl8AgoHuo_heac/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/k8PNFPY4BrgB5ka5rExftl6T39EkQzBzqD-3qF-Vdo9LJiE2Pa_nPeEAYUKjPEc.ZnApUYZUnKpnk1tS',
      tirgul: 'https://us06web.zoom.us/rec/share/Ic-fabS06qSPqp39_dVU7oS5YUdq0dhWwHSWQIR_AqoW8bMebmEtSaJo3lGTLXzT.QxiQWaR8sMZMuQOe',
    },
  },
  // Session 14 — NumPy, pandas, Series/DataFrame, and a Streamlit dashboard — fully authored
  {
    slug: 'session-14-ds-1',
    number: 14,
    moduleId: '04-intro-to-ds',
    numberInModule: 1,
    date: '2026-08-16',
    format: 'zoom',
    title: {
      en: 'Pandas and NumPy — Vectorized Data, and the Grammar You Already Know',
      he: 'Pandas ו-NumPy — נתונים וקטוריים, והדקדוק שכבר מכירות',
    },
    headline: {
      en: `A plain Python list can't do the arithmetic you'd expect — that failure motivates NumPy and pandas, the package behind Series, DataFrame, .loc filtering, and a real Streamlit dashboard built with an agent and shipped straight to the web.`,
      he: `רשימת פייתון רגילה לא יכולה לעשות את החשבון שהיית מצפה לו — הכשל הזה מניע את NumPy ו-pandas, החבילה שמאחורי Series, DataFrame, סינון עם .loc, ודשבורד Streamlit אמיתי שנבנה עם סוכן ונשלח ישר לרשת.`,
    },
    status: 'complete',
    concepts: ['NumPy Vectorization', 'Series & DataFrame', '.loc vs .iloc', 'Boolean Masking', 'describe()', 'Streamlit Deployment'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1tJM8ZI2pZrna65F9yNSYFegKZTzPWuSp/view',
      chat: 'https://drive.google.com/file/d/1n8RICV842tgqpjdbwy4-IZKjb02Vgj1V/view',
      slides: ['https://drive.google.com/drive/folders/1mFzbuvYR8jHJwlcfZOs2_Tce2opPyQmN'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/XwjsMl0ablei90AhzoDVc_R_08ATMXIEokMNPTBmmy9SDChttNtm5YVdbuD9GS6F.nml5N8btLGVHHLQz',
      tirgul: 'https://us06web.zoom.us/rec/share/rsmhsGZ1fcCl8qjQs1eofxxZ2axPCWnDDb-geApBtjQscRX-caqUtDkn7mD2MIs1.GwLcgtzAu27Bd5pc',
    },
  },
  // Session 15 — SQL, SQLite, primary/foreign keys, and building a DB with an agent — fully authored
  {
    slug: 'session-15-ds-2',
    number: 15,
    moduleId: '04-intro-to-ds',
    numberInModule: 2,
    date: '2026-08-19',
    format: 'zoom',
    title: {
      en: `SQL and SQLite — The Language Behind Every App's Memory`,
      he: `SQL ו-SQLite — השפה שמאחורי הזיכרון של כל אפליקציה`,
    },
    headline: {
      en: `Databases finally enter the picture — DBMS concepts, primary and foreign keys, the full sqlite3-in-Python workflow, and a small reservation-system database built end to end with an agent.`,
      he: `בסיסי נתונים סוף סוף נכנסים לתמונה — מושגי DBMS, מפתחות ראשיים וזרים, כל זרימת העבודה של sqlite3 בפייתון, ובסיס נתונים קטן למערכת הזמנות שנבנה מקצה לקצה עם סוכן.`,
    },
    status: 'complete',
    concepts: ['DBMS', 'SQL Syntax', 'Primary & Foreign Keys', 'sqlite3 in Python', 'Table Normalization', 'CREATE/INSERT/UPDATE/DELETE'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1Mh4LM12fCAtI9lSSXCHd7aihujGz6QJp/view',
      chat: 'https://drive.google.com/file/d/1s0zadlZu7-mkUD__VoVilAaUq85xxVYe/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/pLzutJFFc_svvx95PmSqzlGqXDsgnCgM-vYm78_YTjOhrKm77HA2nN9H65OoIa5B.QaQQMB8iE5ZNpw_s',
      tirgul: 'https://us06web.zoom.us/rec/share/sd7aAwxLXRYTvaYvSPDVcYQb2RvzZl1uKWZDA6Cg3aKksMSMgHnIiyBzaHHAmgA.egfDUicbS80zPIZC',
    },
  },
  // Session 16 — Supabase, cloud databases, RLS, anon/service_role keys, auth mechanics — fully authored
  {
    slug: 'session-16-ds-3',
    number: 16,
    moduleId: '04-intro-to-ds',
    numberInModule: 3,
    date: '2026-08-23',
    format: 'zoom',
    title: {
      en: `Supabase — Moving to the Cloud, RLS, and the Keys That Guard It`,
      he: `Supabase — מעבר לענן, RLS, והמפתחות ששומרים עליו`,
    },
    headline: {
      en: `Last session's local database moves to the cloud with Supabase — the anon-key/service-role-key security split, Row Level Security, how authentication really works under the hood, and a small reservation app built and verified live in the cloud.`,
      he: `בסיס הנתונים המקומי של המפגש הקודם עובר לענן עם Supabase — הפיצול בין מפתח anon למפתח service_role, אבטחת ברמת שורה, איך אימות באמת עובד מתחת למכסה המנוע, ואפליקציית הזמנות קטנה שנבנתה ואומתה בשידור חי בענן.`,
    },
    status: 'complete',
    concepts: ['Supabase', 'Anon vs Service Role Key', 'Row Level Security', 'Frontend/Server/Backend', 'Auth & Password Hashing', 'Cloud Storage'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1L5eZb-ii37PDL5UwrgP1kLL2hrldCi8e/view',
      chat: 'https://drive.google.com/file/d/13SnqJ_Bi_e5PcHiV26ZwHkU7_-6vIIjq/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/sU8SZFU26SzLbmVOVGZXQSgLVaMJS-iKNBWQIra4b-oU20Xgh3HnL4YGlE2HSc36.Zcb7MvIsCQdGUNUD',
      tirgul: 'https://us06web.zoom.us/rec/share/1tk2c0lqsJALT8VutZQ3vk4b50usMyKntQwvgHs_TYA299dHYrW2PlXdtsj5UcU.2-gV3aNRkRhGrsvt',
    },
  },
  // Session 17 — ML foundations: model families, linear regression, gradient descent, project characterization — fully authored
  {
    slug: 'session-17-ds-4',
    number: 17,
    moduleId: '04-intro-to-ds',
    numberInModule: 4,
    date: '2026-08-26',
    format: 'zoom',
    title: {
      en: `Machine Learning Foundations — Gradient Descent and the Discipline of Characterization`,
      he: `יסודות למידת מכונה — ירידת גרדיאנט ומשמעת האפיון`,
    },
    headline: {
      en: `Machine learning finally arrives — model families, linear regression built up to gradient descent, the four-step preprocessing pipeline, and a live demo of using an adversarial ChatGPT persona to stress-test a project before writing a line of code.`,
      he: `למידת מכונה סוף סוף מגיעה — משפחות מודלים, רגרסיה ליניארית בנויה עד ירידת גרדיאנט, צנרת העיבוד המקדים בת ארבעת השלבים, והדגמה חיה של שימוש בפרסונת ChatGPT יריבית כדי לבחון פרויקט לפני כתיבת שורת קוד אחת.`,
    },
    status: 'complete',
    concepts: ['Supervised/Unsupervised/Reinforcement', 'Linear Regression', 'Gradient Descent', 'Data Preprocessing', 'Overfitting', 'Project Characterization'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1YCzMkZNsL8q1QY66rAoHS2T6uWhyyQCI/view',
      chat: 'https://drive.google.com/file/d/1-00ZnBknRpqPc0rBMppA0Rgehifuqmp1/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/PqpGLG4G2H-l3vWUKvBthZxglocRiSEA3l3HW4RBL7KJ6VWY5UdtyYiv0at49QGC.saszl7h4ZcXi3xG_',
      tirgul: 'https://us06web.zoom.us/rec/share/fYYp0Mvn6hSIOSLnp8pFWa-rP1udCPKCMTW_6-Zn8RvSdkCsh6nQPIsRnK2dnC5H.9aWyOmnrw-PCvIfJ',
    },
  },
  // Session 18 — multivariate regression, R²/RMSE/MAE evaluation, multicollinearity — fully authored
  {
    slug: 'session-18-ds-5',
    number: 18,
    moduleId: '04-intro-to-ds',
    numberInModule: 5,
    date: '2026-08-30',
    format: 'zoom',
    title: {
      en: `Model Evaluation — R², RMSE, and the Discipline of Distrusting a Great Score`,
      he: `הערכת מודל — R², RMSE, ומשמעת אי-האמון בציון מעולה`,
    },
    headline: {
      en: `Last session's theory becomes real code — a multivariate regression model built in two lines, evaluated against a "dumb" baseline via R², RMSE, and MAE, with a live demonstration of why a near-perfect score should worry you and why an unintuitive negative weight usually means multicollinearity.`,
      he: `התיאוריה של המפגש הקודם הופכת לקוד אמיתי — מודל רגרסיה מרובת-משתנים שנבנה בשתי שורות, מוערך מול בייסליין "טיפש" באמצעות R², RMSE, ו-MAE, עם הדגמה חיה של למה ציון כמעט-מושלם צריך לדאוג אותך ולמה משקל שלילי לא-אינטואיטיבי בדרך כלל אומר מולטיקוליניאריות.`,
    },
    status: 'complete',
    concepts: ['Multivariate Regression', 'train_test_split', 'R² / RMSE / MAE', 'Adjusted R²', 'Data Leakage', 'Multicollinearity'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1fIn2iqYHEOk72Fpek0r2Y8hBPTYuMc6H/view',
      chat: 'https://drive.google.com/file/d/1DwQhauVlhQhkC-TqTPiXyM51LwtqO3_c/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/iBmDYck8Cyc6jAo0cv3q_m4FB36v5toN0DXeCyDjuh-ujNh749S2MPwPoRbE_q_1.0q4LKrtZYyHTXmRI',
      tirgul: 'https://us06web.zoom.us/rec/share/Il3FRl5560mKelEXHcLghMzXG0tRyV_0F_94YKJXiJZvfsDg34XmrbLsfKs60X9f.E84iVteULrcyTfcb',
    },
  },

  // Session 19 — the one we've already processed
  {
    slug: 'session-19-logistic-regression',
    number: 19,
    moduleId: '04-intro-to-ds',
    numberInModule: 6,
    date: '2026-09-02',
    format: 'zoom',
    title: {
      en: 'Logistic Regression, Model Evaluation & K-Means',
      he: 'רגרסיה לוגיסטית, הערכת מודל ו-K-Means',
    },
    headline: {
      en: 'From supervised binary classification to unsupervised pattern-finding — the day metrics stop being decorative.',
      he: 'מסיווג בינארי מונחה למציאת דפוסים לא-מונחית — היום שבו מדדים מפסיקים להיות דקורטיביים.',
    },
    status: 'complete',
    concepts: ['Logistic Regression', 'Confusion Matrix', 'Precision / Recall / F1', 'Threshold Sweep', 'Data Leakage', 'K-Means'],
    hasCardDeck: true,
    hasProject: true,
    projectFile: 'fraud_detection_project.zip',
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1GMs9h5OTLeLsrdI6Blnjygfip1ASMXqH/view',
      chat: 'https://drive.google.com/file/d/1ESEJy3fSQ-tpYrB-I6Xs1TF8oKdX4xXs/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/xM0_TepWZobH-25boAj6BxlCLirY1RF1wlyrJ9cp0NaCCscBGbUOXKVM9Ddj1mT2.0kyHfs08PFbNWbqF',
      tirgul: 'https://us06web.zoom.us/rec/share/qvn5OXkLJWtufhsiKXKtGuXVIowEgmV0E7npgChw4faajmwMDCEbp5F4bxpgP5ZJ.qCXlMSsEHZgjCzDB',
    },
  },

  // Session 20 deferred (no recording)
  {
    slug: 'session-20-ds-7',
    number: 20,
    moduleId: '04-intro-to-ds',
    numberInModule: 7,
    date: '2026-09-06',
    format: 'zoom',
    title: { en: 'Data Science · Module Session 7', he: 'מדעי הנתונים · מפגש 7 במודול' },
    headline: {
      en: 'Deferred — recording currently missing from source.',
      he: 'נדחה — ההקלטה חסרה כרגע מהמקור.',
    },
    status: 'deferred',
    sourceLinks: {
      chat: 'https://drive.google.com/file/d/1wPSaRU0hDPb1UvOZ6Ia1nRYY9OANvfkn/view',
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/b71O_CAYm7hzIb5Zuu0obiev22M8J_WOjn5WwoX7oisFIAYrzd4jnI589I4O-Atf.PPM31UsLANv9xzt0',
      tirgul: 'https://us06web.zoom.us/rec/share/TmnF16GWIKne5D7BXoHJmBPFwc1O1u7S_6I0dB_Wr9aC7xIybKt7Lg_LTm45sJ3d.jZLoFO5B8lKpdT6i',
    },
  },

  // Session 21 — cross-validation, hyperparameters vs parameters, Grid Search, LightGBM/CatBoost, live CRM project — fully authored
  {
    slug: 'session-21-ds-8',
    number: 21,
    moduleId: '04-intro-to-ds',
    numberInModule: 8,
    date: '2026-09-09',
    format: 'zoom',
    title: {
      en: `Cross-Validation, Hyperparameters, and Three Ways to Build a Faster Forest`,
      he: `אימות-הצלבה, היפר-פרמטרים, ושלוש דרכים לבנות יער מהיר יותר`,
    },
    headline: {
      en: `The model-family roadmap gets its missing pieces — why a single train/test split can lie, the real difference between parameters and hyperparameters, Grid Search as brute-force tuning, LightGBM and CatBoost as two different fixes for XGBoost's weak spots, and a live group project building a full lead-scoring CRM.`,
      he: `מפת הדרכים של משפחות המודלים מקבלת את החלקים החסרים — למה פיצול אימון/בדיקה בודד יכול לשקר, ההבדל האמיתי בין פרמטרים להיפר-פרמטרים, Grid Search ככוונון בכוח גס, LightGBM ו-CatBoost כשני תיקונים שונים לנקודות התורפה של XGBoost, ופרויקט קבוצתי חי שבונה מערכת CRM מלאה לניקוד לידים.`,
    },
    status: 'complete',
    concepts: ['Cross-Validation', 'Parameters vs Hyperparameters', 'Grid Search', 'LightGBM', 'CatBoost', 'Feature Importance'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1LQvSJuRFG_yUtcE8yvJ7NRWh1COKazAZ/view',
      slides: ['https://drive.google.com/file/d/1wYHdxAsRol7c7NigOlUoBozS7y67Vz_s/view'],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/cmQm9i6YX97gEjBXmwRZQspZLk2fxkmHemrHMaFo6fhOB3RBJfI-tDGJA19gEtUb.t02uFmQ6TRKZ4qPi',
      tirgul: 'https://us06web.zoom.us/rec/share/PYXJXreqE1JzuishmLuM5Lt_t583usuqxnKAdJwVQNSOeloz12fibR-dhTHyyIXO.MRVRulZS0IDQWaC6',
    },
  },

  // ────────── Module 5 · Computer Vision ──────────
  // Session 22 — Ultralytics/YOLO ecosystem, detection vs segmentation vs pose estimation, live pose-coach build — fully authored
  {
    slug: 'session-22-computer-vision',
    number: 22,
    moduleId: '05-computer-vision',
    numberInModule: 0,
    date: '2026-09-16',
    format: 'zoom',
    title: {
      en: `Computer Vision — Four Models, One Ecosystem, and the Line Between Detecting and Understanding`,
      he: `ראייה ממוחשבת — ארבעה מודלים, מערכת אקולוגית אחת, והקו בין זיהוי להבנה`,
    },
    headline: {
      en: `A new module opens with the Ultralytics/YOLO ecosystem — four separate specialized models for detection, classification, segmentation, and pose estimation, why the newest model isn't always the right one, and the sharp line between what a vision model detects and what it actually understands.`,
      he: `מודול חדש נפתח עם המערכת האקולוגית של Ultralytics/YOLO — ארבעה מודלים מתמחים נפרדים לזיהוי, סיווג, סגמנטציה, ואומדן תנוחה, למה המודל החדש ביותר הוא לא תמיד הנכון, והקו החד בין מה שמודל ראייה מזהה למה שהוא באמת מבין.`,
    },
    status: 'complete',
    concepts: ['Ultralytics / YOLO', 'Object Detection', 'Segmentation', 'Pose Estimation', 'Model Selection', 'Conda Environments'],
    hasCardDeck: true,
    sourceLinks: {
      recording: 'https://drive.google.com/file/d/1ay7_D-ZpSqoMg5zj9aVFFzHOoGk49MnB/view',
      chat: 'https://drive.google.com/file/d/1ffc9_v_Dqr6cN4vqbBcYpadMwwCUIlFA/view',
      slides: [
        'https://drive.google.com/drive/folders/1mFzbuvYR8jHJwlcfZOs2_Tce2opPyQmN',
        'https://drive.google.com/drive/folders/1WktwIgKnEN8NPyYeHolldKIG59q9W3yY',
      ],
    },
    videoLinks: {
      lecture: 'https://us06web.zoom.us/rec/share/y7PZL6CmCLIsiF2N3CwUEXp_uS2tBRsNSQUjvqT8rxBLKSferM5ZzmTPBZ3YbULh.fuWl-LCNMfWRx_tV',
      tirgul: 'https://drive.google.com/file/d/1JJS3dF4o1a5HP93HHiueP-Zgd9zmWVt2/view?usp=sharing',
    },
  },

  // ────────── Modules 6-10 · Placeholder slots ──────────
  ...(Array.from({ length: 13 }, (_, i) => {
    const num = i + 23;
    let modId = '06-sample-project';
    if (num >= 24 && num <= 27) modId = '07-llm-prompt-rag';
    else if (num >= 28 && num <= 30) modId = '08-agents';
    else if (num >= 31 && num <= 34) modId = '09-final-project';
    else if (num === 35) modId = '10-closing';
    return {
      slug: `session-${num}-placeholder`,
      number: num,
      moduleId: modId,
      numberInModule: 0,
      date: '',
      format: 'zoom' as SessionFormat,
      title: { en: `Session ${num}`, he: `מפגש ${num}` },
      headline: {
        en: 'Awaiting source material.',
        he: 'ממתין לחומר מקור.',
      },
      status: 'planned' as SessionStatus,
    };
  })),
];

// ============================================================================
// Helpers
// ============================================================================

export function getModule(id: string): Module | undefined {
  return modules.find(m => m.id === id);
}

export function getSession(slug: string): Session | undefined {
  return sessions.find(s => s.slug === slug);
}

export function getSessionsForModule(moduleId: string): Session[] {
  return sessions.filter(s => s.moduleId === moduleId).sort((a, b) => a.number - b.number);
}

export function getVisibleModules(): Module[] {
  return modules.filter(m => m.visibility === 'public');
}

export function getAdjacentSessions(slug: string) {
  const idx = sessions.findIndex(s => s.slug === slug);
  return {
    previous: idx > 0 ? sessions[idx - 1] : null,
    next: idx < sessions.length - 1 ? sessions[idx + 1] : null,
  };
}
