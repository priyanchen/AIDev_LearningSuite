import type { ResourceFile, ResourceFolder } from './module-resources';

// Matching Python Scripts notebook(s) + numbered Problem Set for the Python sessions that
// have their own Open Lecture Slides link — rendered directly beneath that link rather than
// in the generic Practice Material section, since they're the closest possible match to it.
export type SlidesExtra = {
  notebooks?: ResourceFile[];
  problemSet?: ResourceFolder;
};

export const sessionSlidesExtra: Record<string, SlidesExtra> = {
  'session-03-python-0': {
    problemSet: {
      kind: 'folder',
      name: 'Problem Set 0',
      label: { en: 'Problem Set 0', he: 'סט בעיות 0' },
      children: [
        { kind: 'file', name: 'PS0.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1l18vOVedPh-QM0mWV2G3oXqk1aAwAoa2/view', ext: 'pdf' },
        { kind: 'file', name: 'py_files.zip', label: { en: 'Starter Files', he: 'קבצי פתיחה' }, url: 'https://drive.google.com/file/d/1wDweJX1hFSGiKazHg-0gKgfJ52UJgkEV/view', ext: 'zip' },
      ],
    },
  },
  'session-04-python-1': {
    notebooks: [
      { kind: 'file', name: '01-Numbers.ipynb', label: { en: '01 — Numbers', he: '01 — מספרים' }, url: 'https://drive.google.com/file/d/1GFeyqAAIz1LA7Nknuyi-kVhImSmvlA1F/view', ext: 'ipynb' },
      { kind: 'file', name: '02-Strings.ipynb', label: { en: '02 — Strings', he: '02 — מחרוזות' }, url: 'https://drive.google.com/file/d/1h8Ma_YJcrz9ywjEECPDYOWbgoq2pHSDi/view', ext: 'ipynb' },
      { kind: 'file', name: '03-Variables.ipynb', label: { en: '03 — Variables', he: '03 — משתנים' }, url: 'https://drive.google.com/file/d/1h-2Hx10Hk1my_Wd-P8SNIwprq769NR7B/view', ext: 'ipynb' },
      { kind: 'file', name: '04-Lists.ipynb', label: { en: '04 — Lists', he: '04 — רשימות' }, url: 'https://drive.google.com/file/d/1LkpiQgxx8BJeIig63VS731SbYV4EiObg/view', ext: 'ipynb' },
      { kind: 'file', name: '05-Tuples.ipynb', label: { en: '05 — Tuples', he: '05 — טאפלים' }, url: 'https://drive.google.com/file/d/1_1krg8dAE0voN1hGY8rI0cKC1WhCCy0A/view', ext: 'ipynb' },
      { kind: 'file', name: '06-Dictionaries.ipynb', label: { en: '06 — Dictionaries', he: '06 — מילונים' }, url: 'https://drive.google.com/file/d/1gOF2MLP9M8of1EABcBbQPXZj_YWM-mZr/view', ext: 'ipynb' },
    ],
    problemSet: {
      kind: 'folder',
      name: 'Problem Set 1',
      label: { en: 'Problem Set 1', he: 'סט בעיות 1' },
      children: [
        { kind: 'file', name: 'PS1.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1NR3rUW9YwKE2_KZGuYvl8Sr_ilUGkgo3/view', ext: 'pdf' },
        { kind: 'file', name: 'PS1sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1IWegLJmSlhaywyY7ox5nc3-0DHoxNkS9/view', ext: 'mp4' },
      ],
    },
  },
  'session-05-python-2': {
    notebooks: [
      { kind: 'file', name: '07-Sets.ipynb', label: { en: '07 — Sets', he: '07 — קבוצות' }, url: 'https://drive.google.com/file/d/1IQyPWQEkdB2chcqqmpA3YS5RuUi-fbaM/view', ext: 'ipynb' },
      { kind: 'file', name: '08-Comparison Operators.ipynb', label: { en: '08 — Comparison Operators', he: '08 — אופרטורי השוואה' }, url: 'https://drive.google.com/file/d/1xaEtsmsARbr-76OG-A1-qz2X0sI1z5q0/view', ext: 'ipynb' },
      { kind: 'file', name: '09 -if, elif, and else Statements.ipynb', label: { en: '09 — if / elif / else', he: '09 — if / elif / else' }, url: 'https://drive.google.com/file/d/1lFinM5M9SytVCjw7kyItJxoqfaYaKM39/view', ext: 'ipynb' },
      { kind: 'file', name: '10-for Loops.ipynb', label: { en: '10 — for Loops', he: '10 — לולאות for' }, url: 'https://drive.google.com/file/d/1R2xnGDMJLqrxOpHqx-bTUkCAny8c9_fC/view', ext: 'ipynb' },
      { kind: 'file', name: '11-while Loops.ipynb', label: { en: '11 — while Loops', he: '11 — לולאות while' }, url: 'https://drive.google.com/file/d/1U1JsT1nEkOZUKuZhV20UnI098XshtoaL/view', ext: 'ipynb' },
      { kind: 'file', name: '11.1-Problem.ipynb', label: { en: '11.1 — Practice Problem', he: '11.1 — תרגיל תרגול' }, url: 'https://drive.google.com/file/d/1XINK3a6Dr540L20bBT3f2O5jYb8uBxfK/view', ext: 'ipynb' },
    ],
    problemSet: {
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
  },
  'session-06-python-3': {
    notebooks: [
      { kind: 'file', name: '12-List Comprehensions.ipynb', label: { en: '12 — List Comprehensions', he: '12 — הבנות רשימה' }, url: 'https://drive.google.com/file/d/1QaGLzk51Uyrlh_QcPZM7CXD1BvinTY8P/view', ext: 'ipynb' },
      { kind: 'file', name: '13-Functions.ipynb', label: { en: '13 — Functions', he: '13 — פונקציות' }, url: 'https://drive.google.com/file/d/1s_YS-ev7gk5qN7QYgjMCp8E9mhbP_BVK/view', ext: 'ipynb' },
    ],
    problemSet: {
      kind: 'folder',
      name: 'Problem Set 3',
      label: { en: 'Problem Set 3', he: 'סט בעיות 3' },
      children: [
        { kind: 'file', name: 'PS3.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1YNbkKzcNWT06qzXx1qmERjyOk3CRGRRI/view', ext: 'pdf' },
        { kind: 'file', name: 'PS3sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1vu3X7Y3Hw_zmZONihgK1q-YQ5PMT3dsW/view', ext: 'ipynb' },
        { kind: 'file', name: 'PS3sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1xgeJ0Aoc5lVXEd4PhNlw9-MMWOFfaos-/view', ext: 'mp4' },
      ],
    },
  },
  'session-07-python-4': {
    notebooks: [
      { kind: 'file', name: '14-args kwargs.ipynb', label: { en: '14 — *args and **kwargs', he: '14 — *args ו-**kwargs' }, url: 'https://drive.google.com/file/d/14ybBzfZV2QH40xKpRMDIs-9cMkpSM78P/view', ext: 'ipynb' },
      { kind: 'file', name: '15-Nested Statements and Scope.ipynb', label: { en: '15 — Nested Statements & Scope', he: '15 — משפטים מקוננים והיקף' }, url: 'https://drive.google.com/file/d/17w7BMrQWV5ablnh5wmSY7okxfPsFzCr1/view', ext: 'ipynb' },
      { kind: 'file', name: '16-FunctionalPro.ipynb', label: { en: '16 — Functional Programming', he: '16 — תכנות פונקציונלי' }, url: 'https://drive.google.com/file/d/1K4bZK9v8AfU4Wrgwj3ngF5a2dQqfn2tF/view', ext: 'ipynb' },
    ],
    problemSet: {
      kind: 'folder',
      name: 'Problem Set 4',
      label: { en: 'Problem Set 4', he: 'סט בעיות 4' },
      children: [
        { kind: 'file', name: 'PS4.pdf', label: { en: 'Assignment', he: 'מטלה' }, url: 'https://drive.google.com/file/d/1CcjkLAoqIFWNkogytlfL3iuR1aiz2m9V/view', ext: 'pdf' },
        { kind: 'file', name: 'PS4sol.ipynb', label: { en: 'Solution (Notebook)', he: 'פתרון (מחברת)' }, url: 'https://drive.google.com/file/d/1I_qL40c7bDQ42wVmEX_oq3R0daATuJT6/view', ext: 'ipynb' },
        { kind: 'file', name: 'PS4sol.mp4', label: { en: 'Solution (Video)', he: 'פתרון (וידאו)' }, url: 'https://drive.google.com/file/d/1pVLqDDXaI5tI8Qkc6zLoOObPhVEbinUZ/view', ext: 'mp4' },
      ],
    },
  },
};
