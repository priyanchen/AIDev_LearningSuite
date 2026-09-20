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
export const moduleResources: Record<string, { sourceUrl: string; tree: ResourceNode[] }> = {
  '04-intro-to-ds': {
    sourceUrl: 'https://drive.google.com/drive/folders/1u2vwCRJwxfgwDjZYv-PTL1JmxmcSULgX',
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
            name: 'לינק לומדות',
            label: { en: 'SQLite — Interactive Lomda', he: 'SQLite — לומדה אינטראקטיבית' },
            url: 'https://simple-sqlite-lab.base44.app/',
            ext: 'app',
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
            kind: 'file',
            name: 'ML-Ensemble Models-Esther- Practice.pptx',
            label: { en: 'Ensemble Models — Practice Slides', he: 'מודלים משולבים — שקפי תרגול' },
            url: 'https://drive.google.com/file/d/1yCuHXz3gKBeozIxJRAisP-1_T_NGFd5e/view',
            ext: 'pptx',
          },
        ],
      },
    ],
  },
};
