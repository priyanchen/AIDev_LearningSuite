import type { Bilingual } from '@/lib/registry';

export type ExternalResource = {
  url: string;
  source: string;       // e.g. "MIT OpenCourseWare", "HarvardX"
  label: Bilingual;     // what the specific course/lecture is
};

// Maps a session's `concepts` tag (exact string match) to a real, verified MIT/Harvard
// lecture or course for further reading. Only add entries here that have been checked
// against a live search — never a guessed URL. Not every concept needs an entry.
export const externalResources: Record<string, ExternalResource> = {
  'Statistical Estimation': {
    url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-3-video/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Statistics for Applications (18.650) — Lecture 3: Parametric Inference',
      he: 'Statistics for Applications (18.650) — הרצאה 3: הסקה פרמטרית',
    },
  },
  'AI History': {
    url: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Artificial Intelligence (6.034) — full course, foundations and origins',
      he: 'Artificial Intelligence (6.034) — קורס מלא, יסודות ומקורות',
    },
  },
  'AI Ethics': {
    url: 'https://www.edx.org/learn/business-management/harvard-university-tech-ethics-critical-thinking-in-the-age-of-apps-algorithms-and-ai',
    source: 'HarvardX',
    label: {
      en: 'Tech Ethics: Critical Thinking in the Age of Apps, Algorithms, and AI',
      he: 'Tech Ethics: חשיבה ביקורתית בעידן האפליקציות, האלגוריתמים, וה-AI',
    },
  },
  'Algorithmic Bias': {
    url: 'https://ocw.mit.edu/courses/res-ec-001-exploring-fairness-in-machine-learning-for-international-development-spring-2020/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Exploring Fairness in Machine Learning for International Development',
      he: 'Exploring Fairness in Machine Learning for International Development',
    },
  },
  'Human in the Loop': {
    url: 'https://www.youtube.com/watch?v=NrmLjmXU66M',
    source: 'MIT (How to AI Almost Anything, Spring 2025)',
    label: {
      en: 'Lecture 11 — Human-AI Interaction (covers human-in-the-loop learning)',
      he: 'הרצאה 11 — אינטראקציית אדם-AI (כולל למידת אדם-בלולאה)',
    },
  },
  'CPU / RAM / Storage': {
    url: 'https://cs50.harvard.edu/x/2025/notes/0/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50x Lecture 0 — how computers represent and store data`,
      he: `CS50x הרצאה 0 — איך מחשבים מייצגים ושומרים נתונים`,
    },
  },
  'Bit & Byte': {
    url: 'https://cs50.harvard.edu/x/2025/notes/0/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50x Lecture 0 — bits, bytes, and binary representation`,
      he: `CS50x הרצאה 0 — ביטים, בייטים, וייצוג בינארי`,
    },
  },
  'ASCII': {
    url: 'https://cs50.harvard.edu/x/2025/notes/0/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50x Lecture 0 — ASCII and text representation`,
      he: `CS50x הרצאה 0 — ASCII וייצוג טקסט`,
    },
  },
  'Memory Hierarchy': {
    url: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c14/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Computation Structures (6.004) — Caches and the Memory Hierarchy`,
      he: `Computation Structures (6.004) — מטמונים והיררכיית הזיכרון`,
    },
  },
  'Indexing & Slicing': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-5-tuples-lists-aliasing-mutability-and-cloning/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 5: Tuples, Lists, Aliasing, Mutability, and Cloning`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 5: טאפלים, רשימות, כינוי, שינוי, ושכפול`,
    },
  },
  'Mutability': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-5-tuples-lists-aliasing-mutability-and-cloning/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 5: Tuples, Lists, Aliasing, Mutability, and Cloning`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 5: טאפלים, רשימות, כינוי, שינוי, ושכפול`,
    },
  },
  'Variables': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-1-what-is-computation/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 1: What is Computation?`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 1: מה זה חישוב?`,
    },
  },
  'Lists': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-5-tuples-lists-aliasing-mutability-and-cloning/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 5: Tuples, Lists, Aliasing, Mutability, and Cloning`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 5: טאפלים, רשימות, כינוי, שינוי, ושכפול`,
    },
  },
  'Tuples': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-5-tuples-lists-aliasing-mutability-and-cloning/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 5: Tuples, Lists, Aliasing, Mutability, and Cloning`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 5: טאפלים, רשימות, כינוי, שינוי, ושכפול`,
    },
  },
  'Dictionaries': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-6-recursion-and-dictionaries/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 6: Recursion and Dictionaries`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 6: רקורסיה ומילונים`,
    },
  },
  'Sets & None': {
    url: 'https://cs50.harvard.edu/python/notes/9/',
    source: 'Harvard CS50P',
    label: {
      en: `CS50's Introduction to Programming with Python — Lecture 9: Et Cetera (set, and None via type hints)`,
      he: `מבוא לתכנות עם פייתון של CS50 — הרצאה 9: Et Cetera (set, ו-None דרך type hints)`,
    },
  },
  '*args & **kwargs': {
    url: 'https://cs50.harvard.edu/python/notes/9/',
    source: 'Harvard CS50P',
    label: {
      en: `CS50's Introduction to Programming with Python — Lecture 9: Et Cetera (args and kwargs)`,
      he: `מבוא לתכנות עם פייתון של CS50 — הרצאה 9: Et Cetera (args ו-kwargs)`,
    },
  },
  'Terminal & Shell': {
    url: 'https://missing.csail.mit.edu/2020/course-shell/',
    source: 'MIT — The Missing Semester of Your CS Education',
    label: {
      en: `The Missing Semester of Your CS Education — Lecture 1: Course Overview + the Shell`,
      he: `The Missing Semester of Your CS Education — הרצאה 1: סקירת הקורס + המעטפת (Shell)`,
    },
  },
  'Git Staging & Commit': {
    url: 'https://missing.csail.mit.edu/2020/version-control/',
    source: 'MIT — The Missing Semester of Your CS Education',
    label: {
      en: `The Missing Semester of Your CS Education — Lecture 6: Version Control (Git)`,
      he: `The Missing Semester of Your CS Education — הרצאה 6: בקרת גרסאות (Git)`,
    },
  },
  'README & License': {
    url: 'https://missing.csail.mit.edu/2020/version-control/',
    source: 'MIT — The Missing Semester of Your CS Education',
    label: {
      en: `The Missing Semester of Your CS Education — Lecture 6: Version Control (Git), which uses tracking README.md's history as its own worked example — the lecture doesn't address software licensing specifically`,
      he: `The Missing Semester of Your CS Education — הרצאה 6: בקרת גרסאות (Git), שמשתמשת במעקב אחר ההיסטוריה של README.md כדוגמה מעשית משלה — ההרצאה לא עוסקת ברישוי תוכנה באופן ספציפי`,
    },
  },
  'random & abs()': {
    url: 'https://cs50.harvard.edu/python/notes/4/',
    source: 'Harvard CS50P',
    label: {
      en: `CS50's Introduction to Programming with Python — Lecture 4: Libraries (the random module)`,
      he: `מבוא לתכנות עם פייתון של CS50 — הרצאה 4: ספריות (מודול ה-random)`,
    },
  },
  'List Comprehensions': {
    url: 'https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/resources/mit6_100l_f22_lec12_pdf/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to CS and Programming Using Python (6.100L) — Lecture 12: List Comprehension, Functions as Objects, Testing, Debugging`,
      he: `Introduction to CS and Programming Using Python (6.100L) — הרצאה 12: הבנת רשימה, פונקציות כאובייקטים, בדיקות, ניפוי`,
    },
  },
  'Unpacking (*)': {
    url: 'https://cs50.harvard.edu/python/notes/9/',
    source: 'Harvard CS50P',
    label: {
      en: `CS50's Introduction to Programming with Python — Lecture 9: Et Cetera (unpacking a sequence with *)`,
      he: `מבוא לתכנות עם פייתון של CS50 — הרצאה 9: Et Cetera (פירוק רצף עם *)`,
    },
  },
  'Comparison Operators': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה`,
    },
  },
  'if/elif/else': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה`,
    },
  },
  'while Loops': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה`,
    },
  },
  'break/continue/pass': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration (loop control)`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה (בקרת לולאה)`,
    },
  },
  'Boolean Logic': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה`,
    },
  },
  'Decomposition': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-4-decomposition-abstraction-and-functions/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 4: Decomposition, Abstraction, and Functions`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 4: פירוק, הפשטה, ופונקציות`,
    },
  },
  'while/for Loops': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-2-branching-and-iteration/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 2: Branching and Iteration`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 2: הסתעפות ואיטרציה`,
    },
  },
  'Functions': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-4-decomposition-abstraction-and-functions/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 4: Decomposition, Abstraction, and Functions`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 4: פירוק, הפשטה, ופונקציות`,
    },
  },
  'print vs return': {
    url: 'https://cs50.harvard.edu/python/weeks/0/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 0: Functions — functions, arguments, return values, parameters`,
      he: `CS50P שבוע 0: פונקציות — פונקציות, ארגומנטים, ערכי החזרה, פרמטרים`,
    },
  },
  'Parameters & Arguments': {
    url: 'https://cs50.harvard.edu/python/weeks/0/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 0: Functions — functions, arguments, return values, parameters`,
      he: `CS50P שבוע 0: פונקציות — פונקציות, ארגומנטים, ערכי החזרה, פרמטרים`,
    },
  },
  'Local vs Global Scope': {
    url: 'https://cs50.harvard.edu/college/2023/spring/shorts/variables_and_scope/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50 Short — Variables and Scope`,
      he: `CS50 Short — משתנים והיקף (Scope)`,
    },
  },
  'lambda / map / filter': {
    url: 'https://cs50.harvard.edu/python/weeks/9/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 9: Et Cetera — lambda, map, filter`,
      he: `CS50P שבוע 9: ועוד — lambda, map, filter`,
    },
  },
  'Push, Pull & Sync': {
    url: 'https://video.cs50.io/cspx7YSvp5Q',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50 Seminar — How To Use Git and GitHub`,
      he: `CS50 Seminar — איך להשתמש ב-Git וב-GitHub`,
    },
  },
  'Fork vs Clone': {
    url: 'https://video.cs50.io/cspx7YSvp5Q',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50 Seminar — How To Use Git and GitHub (fork vs clone)`,
      he: `CS50 Seminar — איך להשתמש ב-Git וב-GitHub (fork מול clone)`,
    },
  },
  'Reading a Diff': {
    url: 'https://video.cs50.io/NcoBAfJ6l2Q',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50W Lecture 1 — Git (reading diffs)`,
      he: `CS50W הרצאה 1 — Git (קריאת diff)`,
    },
  },
  'Branches & Merging': {
    url: 'https://cs50.harvard.edu/web/weeks/1/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50's Web Programming — Week 1: Git, Branches, Forks, Pull Requests`,
      he: `CS50's Web Programming — שבוע 1: Git, ענפים, forks, ובקשות משיכה`,
    },
  },
  'Decorators': {
    url: 'https://cs50.harvard.edu/python/notes/8/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 8 — Object-Oriented Programming (decorators)`,
      he: `CS50P שבוע 8 — תכנות מונחה עצמים (דקורטורים)`,
    },
  },
  'try/except': {
    url: 'https://www.youtube.com/watch?v=LW7g1169v7w',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Lecture 3 — Exceptions`,
      he: `CS50P הרצאה 3 — חריגות`,
    },
  },
  'Classes & Objects': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 9: Python Classes and Inheritance`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 9: מחלקות וירושה בפייתון`,
    },
  },
  '__init__ & self': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 9: Python Classes and Inheritance`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 9: מחלקות וירושה בפייתון`,
    },
  },
  'Inheritance': {
    url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/resources/lecture-9-python-classes-and-inheritance/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Intro to CS and Programming in Python (6.0001) — Lecture 9: Python Classes and Inheritance`,
      he: `Intro to CS and Programming in Python (6.0001) — הרצאה 9: מחלקות וירושה בפייתון`,
    },
  },
  'Method Overriding': {
    url: 'https://cs50.harvard.edu/python/notes/8/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 8 — Object-Oriented Programming (inheritance, super().__init__())`,
      he: `CS50P שבוע 8 — תכנות מונחה עצמים (ירושה, super().__init__())`,
    },
  },
  'import vs from-import': {
    url: 'https://cs50.harvard.edu/python/weeks/4/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 4 — Libraries (modules, import statements, packages)`,
      he: `CS50P שבוע 4 — ספריות (מודולים, הצהרות import, חבילות)`,
    },
  },
  'pip & PyPI': {
    url: 'https://cs50.harvard.edu/python/weeks/4/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 4 — Libraries (pip, PyPI, package installation)`,
      he: `CS50P שבוע 4 — ספריות (pip, PyPI, התקנת חבילות)`,
    },
  },
  'Virtual Environments': {
    url: 'https://cs50.harvard.edu/python/weeks/4/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 4 — Libraries (virtual environments)`,
      he: `CS50P שבוע 4 — ספריות (סביבות וירטואליות)`,
    },
  },
  '__name__ == "__main__"': {
    url: 'https://cs50.harvard.edu/python/weeks/4/',
    source: 'CS50P (Harvard)',
    label: {
      en: `CS50P Week 4 — Libraries (the if __name__ == "__main__": pattern)`,
      he: `CS50P שבוע 4 — ספריות (התבנית if __name__ == "__main__":)`,
    },
  },
  'EDA': {
    url: 'https://ocw.mit.edu/courses/res-6-009-how-to-process-analyze-and-visualize-data-january-iap-2012/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `How to Process, Analyze and Visualize Data — exploratory data analysis case studies`,
      he: `How to Process, Analyze and Visualize Data — מקרי בוחן של ניתוח נתונים אקספלורטיבי`,
    },
  },
  'Variable Types': {
    url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Probability and Statistics (18.05) — random variables and distributions`,
      he: `Introduction to Probability and Statistics (18.05) — משתנים אקראיים והתפלגויות`,
    },
  },
  'Mean / Median / Mode': {
    url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Probability and Statistics (18.05) — summary statistics: mean, median, IQR`,
      he: `Introduction to Probability and Statistics (18.05) — סטטיסטיקות סיכום: ממוצע, חציון, IQR`,
    },
  },
  'Variance & Std Dev': {
    url: 'https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo',
    source: 'Harvard (Stat 110)',
    label: {
      en: `Statistics 110: Probability — Lecture 12: variance, standard deviation, PDFs`,
      he: `Statistics 110: הסתברות — הרצאה 12: שונות, סטיית תקן, PDFs`,
    },
  },
  'IQR & Outliers': {
    url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Probability and Statistics (18.05) — interquartile range as a summary statistic`,
      he: `Introduction to Probability and Statistics (18.05) — טווח בין-רבעוני כסטטיסטיקת סיכום`,
    },
  },
  'Correlation vs Causation': {
    url: 'https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/resources/lecture-14-causal-inference-part-1/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Learning for Healthcare (6.S897) — Lecture 14: Causal Inference, Part 1`,
      he: `Machine Learning for Healthcare (6.S897) — הרצאה 14: הסקה סיבתית, חלק 1`,
    },
  },
  'Sampling Bias': {
    url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/lecture-videos/lecture-8-sampling-and-standard-error/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Computational Thinking and Data Science (6.0002) — Lecture 8: Sampling and Standard Error`,
      he: `Introduction to Computational Thinking and Data Science (6.0002) — הרצאה 8: דגימה וסטיית תקן`,
    },
  },
  'NumPy Vectorization': {
    url: 'https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Computational Thinking and Data Science (6.0002) — uses NumPy throughout`,
      he: `Introduction to Computational Thinking and Data Science (6.0002) — משתמש ב-NumPy לכל אורכו`,
    },
  },
  'DBMS': {
    url: 'https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Database Systems (6.830) — full course`,
      he: `Database Systems (6.830) — קורס מלא`,
    },
  },
  'SQL Syntax': {
    url: 'https://cs50.harvard.edu/sql/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50's Introduction to Databases with SQL`,
      he: `CS50's Introduction to Databases with SQL`,
    },
  },
  'Primary & Foreign Keys': {
    url: 'https://cs50.harvard.edu/sql/weeks/1',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50 SQL, Week 1: Relating — primary keys and foreign keys`,
      he: `CS50 SQL, שבוע 1: קישור — מפתחות ראשיים וזרים`,
    },
  },
  'Table Normalization': {
    url: 'https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/a9c47ed7d80c1bfc51d0baf7ac545398_MIT6_830F10_lec03.pdf',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Database Systems (6.830) — Lecture 3: Schema Design & Normalization`,
      he: `Database Systems (6.830) — הרצאה 3: עיצוב סכמה ונרמול`,
    },
  },
  'CREATE/INSERT/UPDATE/DELETE': {
    url: 'https://cs50.harvard.edu/sql/notes/2/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50 SQL, Lecture 2 — creating and manipulating tables`,
      he: `CS50 SQL, הרצאה 2 — יצירה ומניפולציה של טבלאות`,
    },
  },
  'Frontend/Server/Backend': {
    url: 'https://cs50.harvard.edu/web/',
    source: 'CS50 (Harvard)',
    label: {
      en: `CS50's Web Programming with Python and JavaScript — client/server architecture`,
      he: `CS50's Web Programming with Python and JavaScript — ארכיטקטורת לקוח/שרת`,
    },
  },
  'Auth & Password Hashing': {
    url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh',
    source: 'MIT OpenCourseWare (6.858)',
    label: {
      en: `Computer Systems Security (6.858) — Lecture 17: User Authentication`,
      he: `Computer Systems Security (6.858) — הרצאה 17: אימות משתמשים`,
    },
  },
  'Supervised/Unsupervised/Reinforcement': {
    url: 'https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Machine Learning (6.036) — full course covering all three paradigms`,
      he: `Introduction to Machine Learning (6.036) — קורס מלא שמכסה את כל שלוש הפרדיגמות`,
    },
  },
  'Linear Regression': {
    url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-13-video/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Statistics for Applications (18.650) — Lecture 13: Regression`,
      he: `Statistics for Applications (18.650) — הרצאה 13: רגרסיה`,
    },
  },
  'Gradient Descent': {
    url: 'https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/resources/lecture-22-gradient-descent-downhill-to-a-minimum/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Matrix Methods (18.065) — Lecture 22: Gradient Descent, Downhill to a Minimum (Gilbert Strang)`,
      he: `Matrix Methods (18.065) — הרצאה 22: ירידת גרדיאנט, במורד למינימום (גילברט סטרנג)`,
    },
  },
  'Data Preprocessing': {
    url: 'https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/resources/lecture-11-introduction-to-machine-learning/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Computational Thinking and Data Science (6.0002) — Lecture 11: Introduction to Machine Learning`,
      he: `Computational Thinking and Data Science (6.0002) — הרצאה 11: מבוא ללמידת מכונה`,
    },
  },
  'Overfitting': {
    url: 'https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Introduction to Machine Learning (6.036) — covers over-fitting and generalization`,
      he: `Introduction to Machine Learning (6.036) — מכסה התאמת יתר והכללה`,
    },
  },
  'Multivariate Regression': {
    url: 'https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/resources/video-3-multiple-linear-regression-0/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `The Analytics Edge (15.071) — Video 3: Multiple Linear Regression`,
      he: `The Analytics Edge (15.071) — סרטון 3: רגרסיה ליניארית מרובה`,
    },
  },
  'train_test_split': {
    url: 'https://harvard-iacs.github.io/2021-CS109A/lectures/lecture05/notebook-2/',
    source: 'Harvard CS109A',
    label: {
      en: `CS109A Lecture 5 — Model Selection and Cross Validation (uses train_test_split directly)`,
      he: `CS109A הרצאה 5 — בחירת מודל ואימות-הצלבה (משתמש ב-train_test_split ישירות)`,
    },
  },
  'R² / RMSE / MAE': {
    url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-14-video/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Statistics for Applications (18.650) — Lecture 14: Regression (cont.), model-fit metrics`,
      he: `Statistics for Applications (18.650) — הרצאה 14: רגרסיה (המשך), מדדי התאמת מודל`,
    },
  },
  'Adjusted R²': {
    url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-14-video/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Statistics for Applications (18.650) — Lecture 14: Regression (cont.)`,
      he: `Statistics for Applications (18.650) — הרצאה 14: רגרסיה (המשך)`,
    },
  },
  'Multicollinearity': {
    url: 'https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/resources/video-6-correlation-and-multicollinearity-0',
    source: 'MIT OpenCourseWare',
    label: {
      en: `The Analytics Edge (15.071) — Video 6: Correlation and Multicollinearity`,
      he: `The Analytics Edge (15.071) — סרטון 6: קורלציה ומולטיקוליניאריות`,
    },
  },
  'Logistic Regression': {
    url: 'https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/resources/video-3-logistic-regression-0/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `The Analytics Edge (15.071) — Video 3: Logistic Regression`,
      he: `The Analytics Edge (15.071) — סרטון 3: רגרסיה לוגיסטית`,
    },
  },
  'K-Means': {
    url: 'https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/resources/video-5-k-means-clustering-0/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `The Analytics Edge (15.071) — Video 5: K-Means Clustering`,
      he: `The Analytics Edge (15.071) — סרטון 5: אשכול K-Means`,
    },
  },
  'Cross-Validation': {
    url: 'https://harvard-iacs.github.io/2021-CS109A/lectures/lecture05/notebook-2/',
    source: 'Harvard CS109A',
    label: {
      en: `CS109A Lecture 5 — Model Selection and Cross Validation`,
      he: `CS109A הרצאה 5 — בחירת מודל ואימות-הצלבה`,
    },
  },
  'Feature Importance': {
    url: 'https://harvard-iacs.github.io/2018-CS109A/lectures/lecture-16/presentation/lecture16_bagging_random_forest.pdf',
    source: 'Harvard CS109A',
    label: {
      en: `CS109A Lecture 16 — Regression Trees, Bagging and Random Forest (variable importance)`,
      he: `CS109A הרצאה 16 — עצי רגרסיה, Bagging ו-Random Forest (חשיבות משתנים)`,
    },
  },
  'Object Detection': {
    url: 'https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec13_1080p/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Vision (6.801) — Lecture 13: Object Detection, Recognition and Pose Determination`,
      he: `Machine Vision (6.801) — הרצאה 13: זיהוי אובייקטים, הכרה, וקביעת תנוחה`,
    },
  },
  'Segmentation': {
    url: 'https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/lecture-videos/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Vision (6.801) — full lecture video gallery`,
      he: `Machine Vision (6.801) — גלריית הרצאות מלאה`,
    },
  },
  'Pose Estimation': {
    url: 'https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec13_1080p/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Vision (6.801) — Lecture 13: Object Detection, Recognition and Pose Determination`,
      he: `Machine Vision (6.801) — הרצאה 13: זיהוי אובייקטים, הכרה, וקביעת תנוחה`,
    },
  },
  'Ultralytics / YOLO': {
    url: 'https://ocw.mit.edu/courses/6-801-machine-vision-fall-2020/resources/mit6_801f20_lec13_1080p/',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Vision (6.801) — Lecture 13: the academic foundations (feature-based detection, recognition, pose determination) behind detection architectures like YOLO — no MIT/Harvard lecture on Ultralytics/YOLO itself was found`,
      he: `Machine Vision (6.801) — הרצאה 13: היסודות האקדמיים (זיהוי מבוסס-תכונות, הכרה, קביעת תנוחה) שמאחורי ארכיטקטורות זיהוי כמו YOLO — לא נמצאה הרצאת MIT/Harvard על Ultralytics/YOLO עצמם`,
    },
  },
  'Model Selection': {
    url: 'https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/2051efc0159bf145f2050469b7589fc5_lec9.pdf',
    source: 'MIT OpenCourseWare',
    label: {
      en: `Machine Learning (6.867) — Lecture 9: Model Selection`,
      he: `Machine Learning (6.867) — הרצאה 9: בחירת מודל`,
    },
  },
  'Conda Environments': {
    url: 'https://missing.csail.mit.edu/2026/shipping-code/',
    source: 'MIT — The Missing Semester of Your CS Education',
    label: {
      en: `The Missing Semester of Your CS Education — Packaging and Shipping Code: isolating a project's dependencies into its own environment — the general concept Conda implements, though the lecture itself demonstrates venv rather than naming Conda directly`,
      he: `The Missing Semester of Your CS Education — אריזה ומשלוח קוד: בידוד תלויות פרויקט לסביבה משלו — המושג הכללי ש-Conda מממש, אם כי ההרצאה עצמה מדגימה venv ולא מזכירה Conda ישירות`,
    },
  },
};
