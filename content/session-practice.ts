import type { ResourceNode } from './module-resources';

// Each targil (practice exercise) from the class's shared Drive folder (module-resources.ts),
// attached to the specific lesson it belongs to, rather than only the module-level index.
export const sessionPractice: Record<string, ResourceNode[]> = {
  'session-14-ds-1': [
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
  'session-16-ds-3': [
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
  // Exercise 1 — the combined linear + logistic regression targil, attached to Session 19
  // (Logistic Regression, Model Evaluation & K-Means), the closing session of that arc.
  'session-19-logistic-regression': [
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
  // Exercise 2 — Clustering, attached to Session 20 (deferred; the missing recording would
  // have been the dedicated Clustering lecture, right after K-Means was introduced in Session 19).
  'session-20-ds-7': [
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
  // Exercise 3 — Gradient Boosting / Ensemble Models, attached to Session 21
  // (Cross-Validation, Grid Search, LightGBM, CatBoost).
  'session-21-ds-8': [
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
  // Lecture slides + numbered Problem Sets from the "2 - Python" Drive folder,
  // matched to lessons by the instructor's own Lecture-N / PS-N numbering, which
  // mirrors each session's numberInModule (Lecture 0 → session-03, PS0 → session-03, etc.).
  'session-03-python-0': [
    {
      kind: 'folder',
      name: 'Lecture 0',
      label: { en: 'Lecture Slides', he: 'שקפי ההרצאה' },
      children: [
        { kind: 'file', name: 'Python for AI Developers — Lecture 0.pdf', label: { en: 'Lecture 0 (English)', he: 'הרצאה 0 (אנגלית)' }, url: 'https://drive.google.com/file/d/1ok4a3Yae14i6zkavUj3gW0V2MUkgcFlX/view', ext: 'pdf' },
        { kind: 'file', name: 'Python for AI Developers — Lecture 0 (Hebrew).pdf', label: { en: 'Lecture 0 (Hebrew)', he: 'הרצאה 0 (עברית)' }, url: 'https://drive.google.com/file/d/11re6eSve5HMHZeF_M07DFMjvXRHppMqW/view', ext: 'pdf' },
      ],
    },
    {
      kind: 'folder',
      name: 'Problem Set 0',
      label: { en: 'Problem Set 0', he: 'סט בעיות 0' },
      children: [
        { kind: 'file', name: 'PS0.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1l18vOVedPh-QM0mWV2G3oXqk1aAwAoa2/view', ext: 'pdf' },
        { kind: 'file', name: 'py_files.zip', label: { en: 'Starter Files', he: 'קבצי פתיחה' }, url: 'https://drive.google.com/file/d/1wDweJX1hFSGiKazHg-0gKgfJ52UJgkEV/view', ext: 'zip' },
      ],
    },
  ],
  'session-04-python-1': [
    {
      kind: 'folder',
      name: 'Lecture 1',
      label: { en: 'Lecture Slides', he: 'שקפי ההרצאה' },
      children: [
        { kind: 'file', name: 'Python for AI Developers — Lecture 1.pdf', label: { en: 'Lecture 1 (English)', he: 'הרצאה 1 (אנגלית)' }, url: 'https://drive.google.com/file/d/1yHnwLkNgMEBgK9F8SePWqQfgUAUWgRuA/view', ext: 'pdf' },
        { kind: 'file', name: 'Python for AI Developers — Lecture 1 (Hebrew).pdf', label: { en: 'Lecture 1 (Hebrew)', he: 'הרצאה 1 (עברית)' }, url: 'https://drive.google.com/file/d/1NSfdEs3Q2wMgLWBw3wU7V-XXq1IAcB4W/view', ext: 'pdf' },
      ],
    },
    {
      kind: 'folder',
      name: 'Problem Set 1',
      label: { en: 'Problem Set 1', he: 'סט בעיות 1' },
      children: [
        { kind: 'file', name: 'PS1.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1NR3rUW9YwKE2_KZGuYvl8Sr_ilUGkgo3/view', ext: 'pdf' },
        { kind: 'file', name: 'PS1sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1IWegLJmSlhaywyY7ox5nc3-0DHoxNkS9/view', ext: 'mp4' },
      ],
    },
  ],
  'session-05-python-2': [
    {
      kind: 'folder',
      name: 'Lecture 2',
      label: { en: 'Lecture Slides', he: 'שקפי ההרצאה' },
      children: [
        { kind: 'file', name: 'Python for AI Developers — Lecture 2.pdf', label: { en: 'Lecture 2 (English)', he: 'הרצאה 2 (אנגלית)' }, url: 'https://drive.google.com/file/d/1U7ryg_zfCQ7-GyJX1zxZ07v6-eXnDCi7/view', ext: 'pdf' },
        { kind: 'file', name: 'Python for AI Developers — Lecture 2 (Hebrew).pdf', label: { en: 'Lecture 2 (Hebrew)', he: 'הרצאה 2 (עברית)' }, url: 'https://drive.google.com/file/d/1G697pY2xuByUq8l5lw8xQjvlO934aS3A/view', ext: 'pdf' },
      ],
    },
    {
      kind: 'folder',
      name: 'Problem Set 2',
      label: { en: 'Problem Set 2', he: 'סט בעיות 2' },
      children: [
        { kind: 'file', name: 'PS2.pdf', label: { en: 'Assignment (PDF)', he: 'מטלה (PDF)' }, url: 'https://drive.google.com/file/d/18EWW0hQZZ4vEeHR9kFpol_F2VBWseW7i/view', ext: 'pdf' },
        { kind: 'file', name: 'PS2.docx', label: { en: 'Assignment (Doc)', he: 'מטלה (Doc)' }, url: 'https://drive.google.com/file/d/1T64ejuW7ovxfgGNMXpYJhKmVadBF-u0z/view', ext: 'docx' },
        { kind: 'file', name: 'PS2sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1anv6X25ORcDblWMf6lU7ZZ2YNzOn9_iB/view', ext: 'ipynb' },
        { kind: 'file', name: 'PS2sol(part1).mp4', label: { en: 'Solution — Part 1 (Video)', he: 'פתרון — חלק 1 (וידאו)' }, url: 'https://drive.google.com/file/d/1_9kbNOVa-XuYY6xJQONKKIZkxWD3wwQg/view', ext: 'mp4' },
        { kind: 'file', name: 'PS2sol(part2).mp4', label: { en: 'Solution — Part 2 (Video)', he: 'פתרון — חלק 2 (וידאו)' }, url: 'https://drive.google.com/file/d/17Qbb1UI5G3LZLvvgU3Bo9tkmpb5FtMNc/view', ext: 'mp4' },
      ],
    },
  ],
  'session-06-python-3': [
    {
      kind: 'file',
      name: 'Lecture 3.pdf',
      label: { en: 'Lecture 3 Slides', he: 'שקפי הרצאה 3' },
      url: 'https://drive.google.com/file/d/1y4Gu-9clZxYqt4vMWoKmqu_HigTDi1sl/view',
      ext: 'pdf',
    },
    {
      kind: 'folder',
      name: 'Problem Set 3',
      label: { en: 'Problem Set 3', he: 'סט בעיות 3' },
      children: [
        { kind: 'file', name: 'PS3.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1YNbkKzcNWT06qzXx1qmERjyOk3CRGRRI/view', ext: 'pdf' },
        { kind: 'file', name: 'PS3sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1vu3X7Y3Hw_zmZONihgK1q-YQ5PMT3dsW/view', ext: 'ipynb' },
        { kind: 'file', name: 'PS3sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1xgeJ0Aoc5lVXEd4PhNlw9-MMWOFfaos-/view', ext: 'mp4' },
      ],
    },
  ],
  'session-07-python-4': [
    {
      kind: 'file',
      name: 'Lecture 4.pdf',
      label: { en: 'Lecture 4 Slides', he: 'שקפי הרצאה 4' },
      url: 'https://drive.google.com/file/d/1zvgETG_GueHJ6hoXu9Mx7Bkwy9AXvpku/view',
      ext: 'pdf',
    },
    {
      kind: 'folder',
      name: 'Problem Set 4',
      label: { en: 'Problem Set 4', he: 'סט בעיות 4' },
      children: [
        { kind: 'file', name: 'PS4.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1CcjkLAoqIFWNkogytlfL3iuR1aiz2m9V/view', ext: 'pdf' },
        { kind: 'file', name: 'PS4sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1I_qL40c7bDQ42wVmEX_oq3R0daATuJT6/view', ext: 'ipynb' },
        { kind: 'file', name: 'PS4sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1pVLqDDXaI5tI8Qkc6zLoOObPhVEbinUZ/view', ext: 'mp4' },
      ],
    },
  ],
  'session-08-python-5': [
    {
      kind: 'folder',
      name: 'Problem Set 5',
      label: { en: 'Problem Set 5', he: 'סט בעיות 5' },
      children: [
        { kind: 'file', name: 'PS5.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1DAXV2t11-Ye0zd5fqYZnfFr_15TY6NED/view', ext: 'pdf' },
        { kind: 'file', name: 'PS5sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1llnvrlWQcrbQQqyKvGAbmBrU45l4TDTV/view', ext: 'ipynb' },
        { kind: 'file', name: 'zoo.py', label: { en: 'zoo.py', he: 'zoo.py' }, url: 'https://drive.google.com/file/d/1exznz9RCOu8YqPX0x1GuIS9Xm4r0eNwD/view', ext: 'py' },
        { kind: 'file', name: 'main.py', label: { en: 'main.py', he: 'main.py' }, url: 'https://drive.google.com/file/d/1cDHVSW1rYAB_1-T0qq9WMljv3LsvS0GP/view', ext: 'py' },
        { kind: 'file', name: 'config.py', label: { en: 'config.py', he: 'config.py' }, url: 'https://drive.google.com/file/d/1sj4ng1qutHWVEj6eCLNErxtdpGisVzLI/view', ext: 'py' },
        { kind: 'file', name: 'PS5sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1cCQ8H4qS1Zm0eXN5Ib4lVFdTNgh8Aw15/view', ext: 'mp4' },
      ],
    },
  ],
  'session-11-python-8': [
    {
      kind: 'file',
      name: 'תרגיל OOP.pdf',
      label: { en: 'OOP Exercises', he: 'תרגילי OOP' },
      url: 'https://drive.google.com/file/d/1W6YCWxhY2FJZ3JgaSkcJDeVBbyiRjgeA/view',
      ext: 'pdf',
    },
    {
      kind: 'file',
      name: 'תרגילים OOP2.pdf',
      label: { en: 'OOP2 Exercises', he: 'תרגילי OOP2' },
      url: 'https://drive.google.com/file/d/13qRRscVplRJL-BE3hXoNm0WjCh52a0vH/view',
      ext: 'pdf',
    },
  ],
  // Conda-environment install walkthrough — the only session that actually teaches Conda.
  'session-22-computer-vision': [
    {
      kind: 'file',
      name: 'התקנת סביבת קונדה + התקנה req.mkv',
      label: { en: 'Installing a Conda Environment (Video)', he: 'התקנת סביבת קונדה (וידאו)' },
      url: 'https://drive.google.com/file/d/1SEtH1jVHWoLWEfylvGztqxIQNN3EGsuD/view',
      ext: 'mkv',
    },
  ],
};
