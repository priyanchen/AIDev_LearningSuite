import type { Bilingual } from '@/lib/registry';

export type ResourceFile = {
  kind: 'file';
  name: string;   // original Drive filename, kept for citation
  label: Bilingual;
  url: string;
  ext: string;
};

export type ResourceFolder = {
  kind: 'folder';
  name: string;   // original Drive folder name, kept for citation
  label: Bilingual;
  open?: boolean; // expanded by default
  children: ResourceNode[];
};

export type ResourceNode = ResourceFile | ResourceFolder;

// Mirrors the exact folder tree of the class's own shared Drive folder — every file linked
// individually, same nesting as the original, nothing renamed except for a friendlier display label.
export const moduleResources: Record<
  string,
  {
    sourceUrl: string;
    tree: ResourceNode[];
    estherSourceUrl?: string;
    estherTree?: ResourceNode[];
    // The real Zoom recording chat log / transcript — kept separate from the practice tree
    // and rendered like a lesson page's own "Source Materials" section, to mark it as the
    // official academic source rather than one more practice file.
    sourceMaterials?: { label: Bilingual; url: string; kind: 'recording' | 'chat' | 'transcript' }[];
  }
> = {
  '03-python': {
    sourceUrl: 'https://drive.google.com/drive/folders/1yWrqBMWkFhOtQl4uXa6t5KroE9mkr1DO',
    // A separate subfolder within the same parent, authored and owned by esther.kadosh@mail.huji.ac.il —
    // distinct from the "Python Scripts" tree below, which belongs to a different course contributor.
    estherSourceUrl: 'https://drive.google.com/drive/folders/1G6jlE_MB_E_fJvLkcmJLQYuBk8VG96DT',
    estherTree: [
      {
        kind: 'folder',
        name: 'Tirgul_Esther',
        label: { en: 'Tirgul_Esther', he: 'תרגול_אסתר' },
        open: true,
        children: [
          {
            kind: 'folder',
            name: 'לינקים לומדות',
            label: { en: 'Lomda App Links', he: 'לינקים לומדות' },
            open: true,
            children: [
              {
                kind: 'file',
                name: '1 - קרסר ופייתון (מבוא)',
                label: { en: '1 — Cursor & Python (Intro)', he: '1 — קרסר ופייתון (מבוא)' },
                url: 'https://ubiquitous-py-path-pilot.base44.app/',
                ext: 'app',
              },
              {
                kind: 'file',
                name: '2 - משתנים if for while ופונקציות',
                label: { en: '2 — Variables, if/for/while & Functions', he: '2 — משתנים, if/for/while ופונקציות' },
                url: 'https://py-leap-start.base44.app/',
                ext: 'app',
              },
              {
                kind: 'file',
                name: '3 - מחלקות ודקורטורים',
                label: { en: '3 — Classes & Decorators', he: '3 — מחלקות ודקורטורים' },
                url: 'https://python-class-lab.base44.app/',
                ext: 'app',
              },
            ],
          },
          {
            kind: 'file',
            name: 'טבלאות פייתון - סיכום פקודות.pdf',
            label: { en: 'Python Tables — Command Summary', he: 'טבלאות פייתון — סיכום פקודות' },
            url: 'https://drive.google.com/file/d/1f7dQoe1BDsQbeezB-dJGjOsBnUX30_7v/view',
            ext: 'pdf',
          },
        ],
      },
    ],
    tree: [
      {
        kind: 'folder',
        name: 'Python Scripts',
        label: { en: 'Python Scripts — Notebooks 01–19', he: 'סקריפטי פייתון — מחברות 01–19' },
        open: true,
        children: [
          { kind: 'file', name: '01-Numbers.ipynb', label: { en: '01 — Numbers', he: '01 — מספרים' }, url: 'https://drive.google.com/file/d/1GFeyqAAIz1LA7Nknuyi-kVhImSmvlA1F/view', ext: 'ipynb' },
          { kind: 'file', name: '02-Strings.ipynb', label: { en: '02 — Strings', he: '02 — מחרוזות' }, url: 'https://drive.google.com/file/d/1h8Ma_YJcrz9ywjEECPDYOWbgoq2pHSDi/view', ext: 'ipynb' },
          { kind: 'file', name: '03-Variables.ipynb', label: { en: '03 — Variables', he: '03 — משתנים' }, url: 'https://drive.google.com/file/d/1h-2Hx10Hk1my_Wd-P8SNIwprq769NR7B/view', ext: 'ipynb' },
          { kind: 'file', name: '04-Lists.ipynb', label: { en: '04 — Lists', he: '04 — רשימות' }, url: 'https://drive.google.com/file/d/1LkpiQgxx8BJeIig63VS731SbYV4EiObg/view', ext: 'ipynb' },
          { kind: 'file', name: '05-Tuples.ipynb', label: { en: '05 — Tuples', he: '05 — טאפלים' }, url: 'https://drive.google.com/file/d/1_1krg8dAE0voN1hGY8rI0cKC1WhCCy0A/view', ext: 'ipynb' },
          { kind: 'file', name: '06-Dictionaries.ipynb', label: { en: '06 — Dictionaries', he: '06 — מילונים' }, url: 'https://drive.google.com/file/d/1gOF2MLP9M8of1EABcBbQPXZj_YWM-mZr/view', ext: 'ipynb' },
          { kind: 'file', name: '07-Sets.ipynb', label: { en: '07 — Sets', he: '07 — קבוצות' }, url: 'https://drive.google.com/file/d/1IQyPWQEkdB2chcqqmpA3YS5RuUi-fbaM/view', ext: 'ipynb' },
          { kind: 'file', name: '08-Comparison Operators.ipynb', label: { en: '08 — Comparison Operators', he: '08 — אופרטורי השוואה' }, url: 'https://drive.google.com/file/d/1xaEtsmsARbr-76OG-A1-qz2X0sI1z5q0/view', ext: 'ipynb' },
          { kind: 'file', name: '09 -if, elif, and else Statements.ipynb', label: { en: '09 — if / elif / else', he: '09 — if / elif / else' }, url: 'https://drive.google.com/file/d/1lFinM5M9SytVCjw7kyItJxoqfaYaKM39/view', ext: 'ipynb' },
          { kind: 'file', name: '10-for Loops.ipynb', label: { en: '10 — for Loops', he: '10 — לולאות for' }, url: 'https://drive.google.com/file/d/1R2xnGDMJLqrxOpHqx-bTUkCAny8c9_fC/view', ext: 'ipynb' },
          { kind: 'file', name: '11-while Loops.ipynb', label: { en: '11 — while Loops', he: '11 — לולאות while' }, url: 'https://drive.google.com/file/d/1U1JsT1nEkOZUKuZhV20UnI098XshtoaL/view', ext: 'ipynb' },
          { kind: 'file', name: '11.1-Problem.ipynb', label: { en: '11.1 — Practice Problem', he: '11.1 — תרגיל תרגול' }, url: 'https://drive.google.com/file/d/1XINK3a6Dr540L20bBT3f2O5jYb8uBxfK/view', ext: 'ipynb' },
          { kind: 'file', name: '12-List Comprehensions.ipynb', label: { en: '12 — List Comprehensions', he: '12 — הבנות רשימה' }, url: 'https://drive.google.com/file/d/1QaGLzk51Uyrlh_QcPZM7CXD1BvinTY8P/view', ext: 'ipynb' },
          { kind: 'file', name: '13-Functions.ipynb', label: { en: '13 — Functions', he: '13 — פונקציות' }, url: 'https://drive.google.com/file/d/1s_YS-ev7gk5qN7QYgjMCp8E9mhbP_BVK/view', ext: 'ipynb' },
          { kind: 'file', name: '14-args kwargs.ipynb', label: { en: '14 — *args and **kwargs', he: '14 — *args ו-**kwargs' }, url: 'https://drive.google.com/file/d/14ybBzfZV2QH40xKpRMDIs-9cMkpSM78P/view', ext: 'ipynb' },
          { kind: 'file', name: '15-Nested Statements and Scope.ipynb', label: { en: '15 — Nested Statements & Scope', he: '15 — משפטים מקוננים והיקף' }, url: 'https://drive.google.com/file/d/17w7BMrQWV5ablnh5wmSY7okxfPsFzCr1/view', ext: 'ipynb' },
          { kind: 'file', name: '16-FunctionalPro.ipynb', label: { en: '16 — Functional Programming', he: '16 — תכנות פונקציונלי' }, url: 'https://drive.google.com/file/d/1K4bZK9v8AfU4Wrgwj3ngF5a2dQqfn2tF/view', ext: 'ipynb' },
          { kind: 'file', name: '17-unpack_deco_exceptions.ipynb', label: { en: '17 — Unpacking, Decorators & Exceptions', he: '17 — פירוק, דקורטורים וחריגות' }, url: 'https://drive.google.com/file/d/1WEymmTjEUrBwzNBLVUI0D5I4uP3pf8p7/view', ext: 'ipynb' },
          { kind: 'file', name: '18-OOP.ipynb', label: { en: '18 — OOP, Part 1', he: '18 — תכנות מונחה-עצמים, חלק 1' }, url: 'https://drive.google.com/file/d/1KYIIpcN0oOG5h42f_9jNQbHycKTEzS42/view', ext: 'ipynb' },
          { kind: 'file', name: '19-OOP2.ipynb', label: { en: '19 — OOP, Part 2', he: '19 — תכנות מונחה-עצמים, חלק 2' }, url: 'https://drive.google.com/file/d/1SnjssZU7EtWq2F7vODd5RXPHJ65G2UHh/view', ext: 'ipynb' },
        ],
      },
    ],
  },
  '05-computer-vision': {
    sourceUrl: 'https://drive.google.com/drive/folders/1WktwIgKnEN8NPyYeHolldKIG59q9W3yY',
    tree: [
      {
        kind: 'folder',
        name: 'scripts',
        label: { en: 'Scripts — 8 YOLOv8 Exercises', he: 'סקריפטים — 8 תרגילי YOLOv8' },
        open: true,
        children: [
          {
            kind: 'file',
            name: '01_object_detection.py',
            label: { en: '1. Object Detection', he: '1. זיהוי אובייקטים' },
            url: 'https://drive.google.com/file/d/1Y_pIFqkr3HEKyMRMo88htgLy1FEoHc6W/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '02_people_counting.py',
            label: { en: '2. People Counting', he: '2. ספירת אנשים' },
            url: 'https://drive.google.com/file/d/1yntnk4DgJC3L2wUIoXcTYnWlOg1J6IQI/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '03_pose_estimation.py',
            label: { en: '3. Pose Estimation', he: '3. הערכת תנוחה' },
            url: 'https://drive.google.com/file/d/1rWsja6i-rei8n2vis2dKaMkEhLFPnkdi/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '04_segmentation.py',
            label: { en: '4. Segmentation', he: '4. פילוח' },
            url: 'https://drive.google.com/file/d/1zxh_tJ5Ss-X07r6Lq8ESPlc-rGvyLhlC/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '05_classification.py',
            label: { en: '5. Classification', he: '5. סיווג' },
            url: 'https://drive.google.com/file/d/15dkttfMybthixLrajcHqtbAFV0_AaJnP/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '06_object_tracking.py',
            label: { en: '6. Object Tracking', he: '6. מעקב אובייקטים' },
            url: 'https://drive.google.com/file/d/1dgtg4AkrvSRbY5a50UtPZwXnelP5zpc2/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '07_static_detection.py',
            label: { en: '7. Static Detection', he: '7. זיהוי סטטי' },
            url: 'https://drive.google.com/file/d/1LgXq5qtI47af_gtaBHtz4ZauSbJM1_RC/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: '08_face_blur.py',
            label: { en: '8. Face Blur', he: '8. טשטוש פנים' },
            url: 'https://drive.google.com/file/d/1fv9Hlycx9MdNihi6u9XOuZHwLWob5FvV/view',
            ext: 'py',
          },
          {
            kind: 'file',
            name: 'yolov8s.pt',
            label: { en: 'YOLOv8s Weights — Detection', he: 'משקלי YOLOv8s — זיהוי' },
            url: 'https://drive.google.com/file/d/1M4oFWRRP_j0CpPeVX65J7U8sua5w7wRG/view',
            ext: 'pt',
          },
          {
            kind: 'file',
            name: 'yolov8s-pose.pt',
            label: { en: 'YOLOv8s Weights — Pose', he: 'משקלי YOLOv8s — תנוחה' },
            url: 'https://drive.google.com/file/d/1mEpGplSvu8c8B6flcCvKDHa4MEfO2f3r/view',
            ext: 'pt',
          },
          {
            kind: 'file',
            name: 'yolov8s-seg.pt',
            label: { en: 'YOLOv8s Weights — Segmentation', he: 'משקלי YOLOv8s — פילוח' },
            url: 'https://drive.google.com/file/d/1GKXnjrEnbHR7jbCM9M7xLHO1EziMt9F0/view',
            ext: 'pt',
          },
          {
            kind: 'file',
            name: 'yolov8s-cls.pt',
            label: { en: 'YOLOv8s Weights — Classification', he: 'משקלי YOLOv8s — סיווג' },
            url: 'https://drive.google.com/file/d/1EjBJrwY7Vk9PSjitFB-wBYkade2QHJvY/view',
            ext: 'pt',
          },
        ],
      },
      {
        kind: 'file',
        name: 'Image.jpg',
        label: { en: 'Sample Image 1', he: 'תמונת דוגמה 1' },
        url: 'https://drive.google.com/file/d/15rG7WN6udlI8Lbb6nZ-o5jFOSktZ0VhB/view',
        ext: 'jpg',
      },
      {
        kind: 'file',
        name: 'image2.jpg',
        label: { en: 'Sample Image 2', he: 'תמונת דוגמה 2' },
        url: 'https://drive.google.com/file/d/1660qRNYJW_gcmzWIv6b1MdwlYVn83Dxk/view',
        ext: 'jpg',
      },
      {
        kind: 'file',
        name: 'output_detected.jpg',
        label: { en: 'Sample Output — Detected', he: 'פלט דוגמה — זוהה' },
        url: 'https://drive.google.com/file/d/12QkaAgcvHbh0mPDAW1ukcTXPfPgx0u45/view',
        ext: 'jpg',
      },
      {
        kind: 'file',
        name: 'yolov8s.pt',
        label: { en: 'YOLOv8s Weights — Detection', he: 'משקלי YOLOv8s — זיהוי' },
        url: 'https://drive.google.com/file/d/1YrUrDWQsurZM76jQrn3j4-HROqSDIxCb/view',
        ext: 'pt',
      },
      {
        kind: 'file',
        name: 'yolov8s-pose.pt',
        label: { en: 'YOLOv8s Weights — Pose', he: 'משקלי YOLOv8s — תנוחה' },
        url: 'https://drive.google.com/file/d/1Q3QlT5cjcbO3P-TxDeJsIY8hmDq87_Dn/view',
        ext: 'pt',
      },
      {
        kind: 'file',
        name: 'yolov8s-seg.pt',
        label: { en: 'YOLOv8s Weights — Segmentation', he: 'משקלי YOLOv8s — פילוח' },
        url: 'https://drive.google.com/file/d/10dRROhO4pJY5c_zoRWRh-iKEWFFd4rfD/view',
        ext: 'pt',
      },
      {
        kind: 'file',
        name: 'yolov8s-cls.pt',
        label: { en: 'YOLOv8s Weights — Classification', he: 'משקלי YOLOv8s — סיווג' },
        url: 'https://drive.google.com/file/d/1nzcKUfxvSdf3PYHdAzxoUFqDQHCiO_ia/view',
        ext: 'pt',
      },
    ],
    sourceMaterials: [
      { label: { en: 'Session Chat Log', he: 'יומן צ׳אט המפגש' }, url: 'https://drive.google.com/file/d/1ffc9_v_Dqr6cN4vqbBcYpadMwwCUIlFA/view', kind: 'chat' },
      { label: { en: 'Session Transcript', he: 'תמליל המפגש' }, url: 'https://drive.google.com/file/d/1ay7_D-ZpSqoMg5zj9aVFFzHOoGk49MnB/view', kind: 'transcript' },
    ],
  },
  '02-n8n': {
    sourceUrl: 'https://drive.google.com/drive/folders/1o9CJp4MMJ3QM_-yj5s7gzDOCgsm5IfU9',
    tree: [
      {
        kind: 'file',
        name: 'Lecture .pdf',
        label: { en: 'Lecture Slides', he: 'שקפי ההרצאה' },
        url: 'https://drive.google.com/file/d/1H5YJVS9z9_gWPoVX6taPr6TztEeSolkM/view',
        ext: 'pdf',
      },
      {
        kind: 'file',
        name: 'sol-google_contact.mkv',
        label: { en: 'Solution — Google Contacts Workflow (Video)', he: 'פתרון — תהליך Google Contacts (וידאו)' },
        url: 'https://drive.google.com/file/d/1ozYT7DD80ZcsiMPiaqGshINTSukoSKDU/view',
        ext: 'mkv',
      },
      {
        kind: 'folder',
        name: 'REC 1/7',
        label: { en: 'Recording 1/7 — Chat & Transcript', he: 'הקלטה 1/7 — צ׳אט ותמליל' },
        children: [
          {
            kind: 'file',
            name: 'GMT20260701-055510_RecordingnewChat.txt',
            label: { en: 'Session Chat Log', he: 'יומן צ׳אט המפגש' },
            url: 'https://drive.google.com/file/d/11BYR1mnlU8XMjYY1DsHGflw8TGvVEbii/view',
            ext: 'txt',
          },
          {
            kind: 'file',
            name: 'GMT20260701-055510_Recording.cc.vtt',
            label: { en: 'Session Transcript', he: 'תמליל המפגש' },
            url: 'https://drive.google.com/file/d/1DzU16iwlow76ApJj873LZjf6xxIiXYu3/view',
            ext: 'vtt',
          },
        ],
      },
    ],
  },
  '04-intro-to-ds': {
    sourceUrl: 'https://drive.google.com/drive/folders/1u2vwCRJwxfgwDjZYv-PTL1JmxmcSULgX',
    // Ester's own supplementary additions (Lomda app links, her recommended reading, her practice
    // slides) live in estherTree below, separate from the class's own exercises/solutions/problem
    // sets here — same distinction drawn for Module 3.
    estherTree: [
      {
        kind: 'folder',
        name: '1- pandas',
        label: { en: '1 — Pandas', he: '1 — Pandas' },
        children: [
          {
            kind: 'file',
            name: 'לינק לומדות',
            label: { en: 'Pandas — Interactive Lomda', he: 'Pandas — לומדה אינטראקטיבית' },
            url: 'https://panda-house-flow.base44.app/',
            ext: 'app',
          },
        ],
      },
      {
        kind: 'folder',
        name: '2- database',
        label: { en: '2 — Database (Supabase)', he: '2 — בסיס נתונים (Supabase)' },
        children: [
          {
            kind: 'file',
            name: 'לינק לומדות',
            label: { en: 'SQLite — Interactive Lomda', he: 'SQLite — לומדה אינטראקטיבית' },
            url: 'https://simple-sqlite-lab.base44.app/',
            ext: 'app',
          },
        ],
      },
      {
        kind: 'folder',
        name: '3- Machine Learning',
        label: { en: '3 — Machine Learning', he: '3 — למידת מכונה' },
        open: true,
        children: [
          {
            kind: 'folder',
            name: 'קישור לומדות (למידת מכונה).docx',
            label: { en: 'Interactive Lomdot — Machine Learning', he: 'לומדות אינטראקטיביות — למידת מכונה' },
            children: [
              {
                kind: 'file',
                name: '1. הקדמה - סטטיסטיקה',
                label: { en: '1. Intro — Statistics', he: '1. הקדמה — סטטיסטיקה' },
                url: 'https://perky-data-lab-flow.base44.app',
                ext: 'app',
              },
              {
                kind: 'file',
                name: '2. טיפול במשתנים',
                label: { en: '2. Handling Variables', he: '2. טיפול במשתנים' },
                url: 'https://data-craft-ai-9873944c.base44.app/',
                ext: 'app',
              },
              {
                kind: 'file',
                name: '3. סיכום מודלים',
                label: { en: '3. Model Summary', he: '3. סיכום מודלים' },
                url: 'https://machine-learning-playground-3c6f2d65.base44.app',
                ext: 'app',
              },
              {
                kind: 'file',
                name: 'pandas (same lomda as Exercise 1)',
                label: { en: 'Pandas — Interactive Lomda (same as Exercise 1)', he: 'Pandas — לומדה אינטראקטיבית (זהה לתרגיל 1)' },
                url: 'https://panda-house-flow.base44.app/',
                ext: 'app',
              },
            ],
          },
          {
            kind: 'folder',
            name: "Ester's Recommended Links",
            label: { en: "Ester's Recommended Links", he: 'קישורים מומלצים מאת אסתר' },
            children: [
              {
                kind: 'file',
                name: 'MLU-Explain — Linear Regression',
                label: { en: 'Linear Regression — Visual Explainer (MLU-Explain)', he: 'רגרסיה לינארית — הסבר חזותי (MLU-Explain)' },
                url: 'https://mlu-explain.github.io/linear-regression/',
                ext: 'link',
              },
              {
                kind: 'file',
                name: 'From Animation to Intuition — Linear & Logistic Regression',
                label: { en: 'From Animation to Intuition: Linear & Logistic Regression', he: 'מאנימציה לאינטואיציה: רגרסיה לינארית ולוגיסטית' },
                url: 'https://medium.com/swlh/from-animation-to-intuition-linear-regression-and-logistic-regression-f641a31e1caf',
                ext: 'link',
              },
              {
                kind: 'file',
                name: 'MAE, MSE, RMSE, R² & Adjusted R² — Which Metric is Better',
                label: { en: 'MAE, MSE, RMSE, R² & Adjusted R² — Which Metric is Better?', he: 'MAE, MSE, RMSE, R² ו-R² מתוקנן — איזה מדד עדיף?' },
                url: 'https://medium.com/analytics-vidhya/mae-mse-rmse-coefficient-of-determination-adjusted-r-squared-which-metric-is-better-cd0326a5697e',
                ext: 'link',
              },
              {
                kind: 'file',
                name: 'Mastering K-Means Clustering',
                label: { en: 'Mastering K-Means Clustering', he: 'שליטה באשכול K-Means' },
                url: 'https://medium.com/data-science/mastering-k-means-clustering-065bc42637e4',
                ext: 'link',
              },
            ],
          },
          {
            kind: 'file',
            name: 'ML-Ensemble Models-Esther- Practice.pptx',
            label: { en: 'Ensemble Models — Practice Slides', he: 'מודלים משולבים — שקפי תרגול' },
            url: 'https://drive.google.com/file/d/1yCuHXz3gKBeozIxJRAisP-1_T_NGFd5e/view',
            ext: 'pptx',
          },
        ],
      },
    ],
    tree: [
      {
        kind: 'folder',
        name: '1- pandas',
        label: { en: '1 — Pandas', he: '1 — Pandas' },
        open: true,
        children: [
          {
            kind: 'folder',
            name: '1 - Pandas and Visualization',
            label: { en: 'Pandas & Visualization Exercise', he: 'תרגיל Pandas וויזואליזציה' },
            open: true,
            children: [
              {
                kind: 'file',
                name: 'PS-Tirgul_Esther.ipynb',
                label: { en: 'Practice Notebook', he: 'מחברת תרגול' },
                url: 'https://drive.google.com/file/d/1sUuhuVC476FMieGQNUJyGlYLBcqnrh3y/view',
                ext: 'ipynb',
              },
              {
                kind: 'file',
                name: 'dataset.csv',
                label: { en: 'Dataset', he: 'מערך נתונים' },
                url: 'https://drive.google.com/file/d/1uqWUXgptX6YDh0e5eoXwcnSEkWlc4rIN/view',
                ext: 'csv',
              },
              {
                kind: 'file',
                name: 'housing_exercise_numbered_solution.ipynb',
                label: { en: 'Housing Exercise — Solution', he: 'תרגיל דיור — פתרון' },
                url: 'https://drive.google.com/file/d/10CrL3NW2qDJ7x0DGwHfGTXT5y81R8YMV/view',
                ext: 'ipynb',
              },
            ],
          },
        ],
      },
      {
        kind: 'folder',
        name: '2- database',
        label: { en: '2 — Database (Supabase)', he: '2 — בסיס נתונים (Supabase)' },
        open: true,
        children: [
          {
            kind: 'file',
            name: 'תרגיל-Supabase_crm.docx',
            label: { en: 'Supabase CRM Exercise', he: 'תרגיל Supabase CRM' },
            url: 'https://drive.google.com/file/d/1sTj-103zcL8ZF7uU2Uj3qTb1dPIntaeq/view',
            ext: 'docx',
          },
          {
            kind: 'file',
            name: 'supabase_סקייליין_איירווייז.mp4',
            label: { en: 'Walkthrough Video — Skyline Airways', he: 'סרטון הדרכה — סקייליין איירווייז' },
            url: 'https://drive.google.com/file/d/1iQx6cu95x9I8OHBcHRdGMAF2b7UIgpB7/view',
            ext: 'mp4',
          },
        ],
      },
      {
        kind: 'folder',
        name: '3- Machine Learning',
        label: { en: '3 — Machine Learning', he: '3 — למידת מכונה' },
        open: true,
        children: [
          {
            kind: 'folder',
            name: '1-Linear Regression and Logistic Regression',
            label: { en: 'Linear & Logistic Regression', he: 'רגרסיה לינארית ולוגיסטית' },
            children: [
              {
                kind: 'file',
                name: 'תרגיל1_עם_רמזים.ipynb',
                label: { en: 'Exercise 1 — With Hints', he: 'תרגיל 1 — עם רמזים' },
                url: 'https://drive.google.com/file/d/19siSlnh-Wf6OVmlKkkDFg3EGakA28wXj/view',
                ext: 'ipynb',
              },
              {
                kind: 'file',
                name: 'פתרון_תרגיל_למידת_מכונה_1.ipynb',
                label: { en: 'Exercise 1 — Solution', he: 'תרגיל 1 — פתרון' },
                url: 'https://drive.google.com/file/d/1da8zNZ4EuEKCX9sbFsR6RCy2tD5RVa50/view',
                ext: 'ipynb',
              },
              {
                kind: 'file',
                name: 'Targil1-data_table-Esther.docx',
                label: { en: 'Exercise 1 — Data Table', he: 'תרגיל 1 — טבלת נתונים' },
                url: 'https://drive.google.com/file/d/1yscAQ5Pak-xixxtJM_VIFK_C5fnBHqyL/view',
                ext: 'docx',
              },
              {
                kind: 'folder',
                name: 'Problem Set',
                label: { en: 'Problem Set — Heart Attack & Housing Data', he: 'סט בעיות — נתוני התקף לב ודיור' },
                children: [
                  {
                    kind: 'file',
                    name: 'תרגיל למידת מכונה.pdf',
                    label: { en: 'Assignment', he: 'מטלה' },
                    url: 'https://drive.google.com/file/d/1fzl9hnKqa4ZXiW-UlzXsqVecwHpu_9Tf/view',
                    ext: 'pdf',
                  },
                  {
                    kind: 'file',
                    name: 'Project Heart attack data.csv',
                    label: { en: 'Heart Attack Dataset', he: 'מערך נתונים — התקף לב' },
                    url: 'https://drive.google.com/file/d/1-m_5xOgU6kJuV7EyZK45Nd1TewZawssu/view',
                    ext: 'csv',
                  },
                  {
                    kind: 'file',
                    name: 'Project housing data .csv',
                    label: { en: 'Housing Dataset', he: 'מערך נתונים — דיור' },
                    url: 'https://drive.google.com/file/d/1P2gibZ3JC8PeXnsY6jn_MxXkwzW-ITA8/view',
                    ext: 'csv',
                  },
                  {
                    kind: 'file',
                    name: 'Solution -Part A.ipynb',
                    label: { en: 'Solution — Part A (Notebook)', he: 'פתרון — חלק א (מחברת)' },
                    url: 'https://drive.google.com/file/d/1pPJafASv6iP0se64iO77ptpeRTHssMvu/view',
                    ext: 'ipynb',
                  },
                  {
                    kind: 'file',
                    name: 'Solution - Part A.mkv',
                    label: { en: 'Solution — Part A (Video)', he: 'פתרון — חלק א (וידאו)' },
                    url: 'https://drive.google.com/file/d/1ibM4Fk4hKBAXwY2yTA3vRjPPbQJSpdtG/view',
                    ext: 'mkv',
                  },
                  {
                    kind: 'file',
                    name: 'Solution -Part B.ipynb',
                    label: { en: 'Solution — Part B (Notebook)', he: 'פתרון — חלק ב (מחברת)' },
                    url: 'https://drive.google.com/file/d/1sBTp3drxBvTOV-LNHcmNXmMjqGBPZQ3Y/view',
                    ext: 'ipynb',
                  },
                  {
                    kind: 'file',
                    name: 'Solution Part B.mp4',
                    label: { en: 'Solution — Part B (Video)', he: 'פתרון — חלק ב (וידאו)' },
                    url: 'https://drive.google.com/file/d/1-cL6XGlgNGqKd9QO3HyPIkv5DY8LzNmm/view',
                    ext: 'mp4',
                  },
                  {
                    kind: 'file',
                    name: 'Solution.mkv',
                    label: { en: 'Solution — Full Walkthrough (Video)', he: 'פתרון — הדרכה מלאה (וידאו)' },
                    url: 'https://drive.google.com/file/d/1K3N1wBUexTamln3pP-wMI48bxIwoPkqE/view',
                    ext: 'mkv',
                  },
                ],
              },
            ],
          },
          {
            kind: 'folder',
            name: '2-Esemble Models',
            label: { en: 'Ensemble Models', he: 'מודלים משולבים (Ensemble)' },
            children: [
              {
                kind: 'file',
                name: 'Targil3_GradientBoosting_exercise_hints.ipynb',
                label: { en: 'Exercise 3 — Gradient Boosting, With Hints', he: 'תרגיל 3 — Gradient Boosting, עם רמזים' },
                url: 'https://drive.google.com/file/d/1DYUVsdwPdOz27SYA8pGyC-9uoCgoJGah/view',
                ext: 'ipynb',
              },
              {
                kind: 'file',
                name: 'Targil3-Ensemble Models0gradient_boosting_solution.pdf',
                label: { en: 'Exercise 3 — Solution', he: 'תרגיל 3 — פתרון' },
                url: 'https://drive.google.com/file/d/1albU58dkkb-RFQy9-U4pIiHJljdaHNyB/view',
                ext: 'pdf',
              },
              {
                kind: 'folder',
                name: 'Problem Set',
                label: { en: 'Problem Set — Marketing Data', he: 'סט בעיות — נתוני שיווק' },
                children: [
                  {
                    kind: 'file',
                    name: 'exercise_gradient_boosting.pdf',
                    label: { en: 'Assignment', he: 'מטלה' },
                    url: 'https://drive.google.com/file/d/13nG_FmhDoKBor6LFgopWlmq_gqKACyQ4/view',
                    ext: 'pdf',
                  },
                  {
                    kind: 'file',
                    name: 'omri_marketing_data.csv',
                    label: { en: 'Marketing Dataset', he: 'מערך נתוני שיווק' },
                    url: 'https://drive.google.com/file/d/1UonVcVSl4y0rlkqVMYLe_k-5cd2kQPD3/view',
                    ext: 'csv',
                  },
                  {
                    kind: 'file',
                    name: 'omri_analysis.ipynb',
                    label: { en: 'Analysis — Solution', he: 'ניתוח — פתרון' },
                    url: 'https://drive.google.com/file/d/1O4lQpOj_HwFpCaNonUM32vpxaDeNxX2C/view',
                    ext: 'ipynb',
                  },
                ],
              },
            ],
          },
          {
            kind: 'folder',
            name: '3-Clustering',
            label: { en: 'Clustering', he: 'אשכולות (Clustering)' },
            children: [
              {
                kind: 'file',
                name: 'Targil2_Clustering_exercise_hints.ipynb',
                label: { en: 'Exercise 2 — Clustering, With Hints', he: 'תרגיל 2 — Clustering, עם רמזים' },
                url: 'https://drive.google.com/file/d/1jzjxl8Ry8r--AuOzEVbEHIAL9k0zuXJG/view',
                ext: 'ipynb',
              },
              {
                kind: 'file',
                name: 'Targil2-Clustering-clustering_solution.html.pdf',
                label: { en: 'Exercise 2 — Solution', he: 'תרגיל 2 — פתרון' },
                url: 'https://drive.google.com/file/d/15BdPs_RxK5J4aL38BP9FcYlFclCrT3vR/view',
                ext: 'pdf',
              },
              {
                kind: 'folder',
                name: 'Problem Set',
                label: { en: 'Problem Set — Customer Data', he: 'סט בעיות — נתוני לקוחות' },
                children: [
                  {
                    kind: 'file',
                    name: 'Clustering.pdf',
                    label: { en: 'Assignment', he: 'מטלה' },
                    url: 'https://drive.google.com/file/d/1AHYhM2RQMEmDJHtcjSqvYj447cMNNilT/view',
                    ext: 'pdf',
                  },
                  {
                    kind: 'file',
                    name: 'Customer Data.csv',
                    label: { en: 'Customer Dataset', he: 'מערך נתוני לקוחות' },
                    url: 'https://drive.google.com/file/d/14iBKNCSll7_LxeISGAkIXVWG7yefUWLg/view',
                    ext: 'csv',
                  },
                  {
                    kind: 'file',
                    name: 'Clustering_Solution.ipynb',
                    label: { en: 'Solution', he: 'פתרון' },
                    url: 'https://drive.google.com/file/d/1pTcTASRJ8jHdZqI9PD3oBPhW7CzTr37n/view',
                    ext: 'ipynb',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
