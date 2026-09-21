import type { Bilingual } from '@/lib/registry';

export type InstallCommands = {
  mac: string[];
  windows: string[];
};

export type InstallStep = {
  title: Bilingual;
  detail: Bilingual;
};

export type InstallItem = {
  id?: string;                 // anchor id, for deep-linking from a session's concept tag
  name: string;
  officialUrl?: string;        // the tool's own official install/download page — verified live, never guessed
  moduleId?: string;           // links to that module's own page, when the tool anchors an entire module (e.g. n8n)
  sessions: number[];         // syllabus session numbers where this came up
  whatItDoes: Bilingual;
  tips?: Bilingual;           // installation-sequence tips, gotchas, warnings — grounded in the card content
  commands?: InstallCommands; // actual install commands, one array entry per terminal line
  steps?: { mac: InstallStep[]; windows: InstallStep[] }; // full numbered walkthrough, platform-specific
  videoUrl?: string;           // a real walkthrough recording of this exact install, when one exists
};

export type InstallCategory = {
  title: Bilingual;
  items: InstallItem[];
};

// Every entry here is grounded in what was actually taught in a specific session's card deck —
// not generic tool documentation. See content/cards/session{N}.ts for the source cards.
export const installGuide: InstallCategory[] = [
  {
    title: { en: `Python & Environment Management`, he: `Python וניהול סביבות` },
    items: [
      {
        id: 'python',
        name: 'Python',
        officialUrl: 'https://www.python.org/downloads/',
        sessions: [3],
        whatItDoes: {
          en: `Not a single thing — it's an interpreter (a program that reads Python code and executes it) plus a standard library of built-in tools.`,
          he: `לא דבר בודד — זה מתורגמן (תוכנית שקוראת קוד פייתון ומבצעת אותו) בתוספת ספרייה תקנית של כלים מובנים.`,
        },
        tips: {
          en: `Download from python.org, latest stable release (3.12+). On Windows, the "Add Python to PATH" checkbox during install is not optional — skip it and the terminal won't find Python at all; the Mac installer handles this automatically. Verify with \`python --version\`. If install breaks mid-lesson, the standing rule was: don't chase it live — note the error, keep following along, debug after.`,
          he: `הורידו מ-python.org, הגרסה היציבה האחרונה (3.12+). בווינדוס, תיבת הסימון "Add Python to PATH" בזמן ההתקנה היא לא אופציונלית — דלגו עליה והטרמינל לא ימצא את פייתון בכלל; מתקין ה-Mac מטפל בזה אוטומטית. אמתו עם \`python --version\`. אם ההתקנה נשברת באמצע השיעור, הכלל שנקבע היה: לא לרדוף אחריה בשידור חי — לרשום את השגיאה, להמשיך להקשיב, ולנפות אחר כך.`,
        },
        commands: {
          mac: ['brew install python@3.12', 'python3 --version'],
          windows: ['winget install -e --id Python.Python.3.12', 'python --version'],
        },
        steps: {
          mac: [
            {
              title: { en: '1. Check what you already have', he: '1. בדקי מה כבר יש לך' },
              detail: {
                en: `Open Terminal (Cmd+Space, type "Terminal", Enter) and run \`python3 --version\`. Every Mac ships with an old system Python — never build a project on it; it's there for the OS, not for you.`,
                he: `פתחי Terminal (Cmd+Space, הקלידי "Terminal", Enter) והריצי \`python3 --version\`. לכל Mac יש פייתון מערכת ישן מובנה — לעולם לא לבנות עליו פרויקט; הוא שם עבור מערכת ההפעלה, לא בשבילך.`,
              },
            },
            {
              title: { en: '2. Download the real installer', he: '2. הורידי את המתקין האמיתי' },
              detail: {
                en: `Go to python.org/downloads and click the yellow "Download Python 3.x" button — it auto-detects macOS. (Homebrew's \`brew install python@3.12\` works too if Homebrew is already set up, but the python.org installer needs nothing pre-installed.)`,
                he: `לכי ל-python.org/downloads ולחצי על הכפתור הצהוב "Download Python 3.x" — הוא מזהה אוטומטית macOS. (גם \`brew install python@3.12\` של Homebrew עובד אם Homebrew כבר מותקן, אבל המתקין של python.org לא צריך שום דבר מותקן מראש.)`,
              },
            },
            {
              title: { en: '3. Run the .pkg installer', he: '3. הריצי את מתקין ה-.pkg' },
              detail: {
                en: `Open the downloaded file and click through Continue → Agree → Install, entering your Mac password when prompted.`,
                he: `פתחי את הקובץ שהורדת ולחצי לאורך Continue → Agree → Install, והזיני את סיסמת ה-Mac שלך כשמתבקש.`,
              },
            },
            {
              title: { en: '4. Run the certificates script', he: '4. הריצי את סקריפט התעודות' },
              detail: {
                en: `A "Python 3.x" folder opens automatically in Finder after install — double-click "Install Certificates.command" inside it. Skipping this is the single most common cause of confusing SSL errors on a Mac's first Python project.`,
                he: `תיקיית "Python 3.x" נפתחת אוטומטית ב-Finder אחרי ההתקנה — לחצי פעמיים על "Install Certificates.command" בתוכה. דילוג על זה הוא הגורם הנפוץ ביותר לשגיאות SSL מבלבלות בפרויקט הפייתון הראשון על Mac.`,
              },
            },
            {
              title: { en: '5. Open a fresh Terminal and verify', he: '5. פתחי Terminal חדש ואמתי' },
              detail: {
                en: `Close any Terminal windows that were already open and start a new one — an old window won't see the update. Run \`python3 --version\` and \`pip3 --version\` to confirm both installed correctly.`,
                he: `סגרי כל חלון Terminal שכבר היה פתוח ופתחי חדש — חלון ישן לא יראה את העדכון. הריצי \`python3 --version\` ו-\`pip3 --version\` כדי לאשר ששניהם הותקנו נכון.`,
              },
            },
          ],
          windows: [
            {
              title: { en: '1. Download the installer', he: '1. הורידי את המתקין' },
              detail: {
                en: `Go to python.org/downloads and click the yellow "Download Python 3.x" button — it auto-detects 64-bit Windows.`,
                he: `לכי ל-python.org/downloads ולחצי על הכפתור הצהוב "Download Python 3.x" — הוא מזהה אוטומטית Windows 64-בית.`,
              },
            },
            {
              title: { en: '2. Check "Add python.exe to PATH" — first screen, before anything else', he: '2. סמני "Add python.exe to PATH" — המסך הראשון, לפני כל דבר אחר' },
              detail: {
                en: `Run the downloaded .exe. The very first install screen has a checkbox at the bottom: "Add python.exe to PATH." Check it before clicking Install — this is the single step most installs get wrong, and skipping it means the terminal won't find Python at all afterward.`,
                he: `הריצי את קובץ ה-.exe שהורדת. במסך ההתקנה הראשון ממש יש תיבת סימון בתחתית: "Add python.exe to PATH." סמני אותה לפני לחיצה על Install — זה השלב הבודד שהכי הרבה התקנות מפספסות, ודילוג עליו אומר שהטרמינל לא ימצא את פייתון בכלל אחר כך.`,
              },
            },
            {
              title: { en: '3. Click "Install Now"', he: '3. לחצי על "Install Now"' },
              detail: {
                en: `"Install Now" is the right choice for almost everyone — "Customize installation" is only needed for advanced, non-default setups.`,
                he: `"Install Now" היא הבחירה הנכונה כמעט לכולם — "Customize installation" נחוץ רק להתקנות מתקדמות, לא-ברירת-מחדל.`,
              },
            },
            {
              title: { en: '4. Disable the path length limit if asked', he: '4. בטלי את מגבלת אורך הנתיב אם מתבקש' },
              detail: {
                en: `At the end of install, Windows may offer "Disable path length limit" — click it (needs admin rights). It prevents obscure "file not found" errors later, on projects with deeply nested folders.`,
                he: `בסוף ההתקנה, Windows עשוי להציע "Disable path length limit" — לחצי עליו (דורש הרשאות מנהל). זה מונע שגיאות "file not found" מסתוריות בהמשך, בפרויקטים עם תיקיות מקוננות עמוק.`,
              },
            },
            {
              title: { en: '5. Open a fresh terminal and verify', he: '5. פתחי טרמינל חדש ואמתי' },
              detail: {
                en: `Open a NEW PowerShell or Command Prompt window — not one that was already open — and run \`python --version\` and \`pip --version\`. If \`python\` isn't recognized, the PATH checkbox in step 2 was missed; re-run the installer, choose "Modify," and check it.`,
                he: `פתחי חלון PowerShell או Command Prompt חדש — לא כזה שכבר היה פתוח — והריצי \`python --version\` ו-\`pip --version\`. אם \`python\` לא מזוהה, תיבת ה-PATH משלב 2 פוספסה; הריצי את המתקין שוב, בחרי "Modify," וסמני אותה.`,
              },
            },
          ],
        },
      },
      {
        id: 'venv',
        name: 'venv',
        officialUrl: 'https://docs.python.org/3/library/venv.html',
        sessions: [3, 12, 19],
        whatItDoes: {
          en: `An isolated, per-project Python installation — so package versions never collide across projects.`,
          he: `התקנת פייתון מבודדת, לכל פרויקט — כך שגרסאות חבילות לעולם לא מתנגשות בין פרויקטים.`,
        },
        tips: {
          en: `The exact three-step order matters, and skipping any step breaks the isolation silently: (1) create it — "Python: Create Environment" from the command palette, choose venv and a Python version, this builds a \`.venv\` folder; (2) confirm activation by checking the bottom status bar for the \`.venv\` dotted path before running \`pip install\` — this is the only reliable confirmation the environment is active; (3) actually run the script on the venv's interpreter, not the general one — the step most people skip. A successful \`pip install\` proves nothing about which Python actually received the package. A \`ModuleNotFoundError\` right after a clean install is never a package problem — it's always an environment-identity problem. The command-line version: \`python -m venv venv\`, then activate it before installing anything — never install project packages into system Python.`,
          he: `הסדר המדויק של שלושת השלבים חשוב, ודילוג על כל שלב שובר את הבידוד בשקט: (1) יוצרות אותה — "Python: Create Environment" מפלטת הפקודות, בוחרות venv וגרסת פייתון, זה בונה תיקיית \`.venv\`; (2) מאשרות הפעלה על ידי בדיקת שורת הסטטוס התחתונה לנתיב המנוקד של \`.venv\` לפני הרצת \`pip install\` — זה האישור האמין היחיד שהסביבה פעילה; (3) בפועל מריצות את הסקריפט על המתורגמן של ה-venv, לא הכללי — השלב שהכי הרבה אנשים מדלגים עליו. \`pip install\` מוצלח לא מוכיח כלום לגבי איזה פייתון בעצם קיבל את החבילה. \`ModuleNotFoundError\` מייד אחרי התקנה נקייה הוא לעולם לא בעיית חבילה — הוא תמיד בעיית זהות-סביבה. גרסת שורת הפקודה: \`python -m venv venv\`, ואז להפעיל אותה לפני שמתקינים כל דבר — לעולם לא להתקין חבילות פרויקט על הפייתון של המערכת.`,
        },
        commands: {
          mac: ['python3 -m venv .venv', 'source .venv/bin/activate'],
          windows: ['python -m venv .venv', '.venv\\Scripts\\activate'],
        },
        steps: {
          mac: [
            {
              title: { en: '1. Create it', he: '1. יוצרות אותה' },
              detail: {
                en: `From the command palette (Cmd+Shift+P), run "Python: Create Environment," choose venv, and pick a Python version. This builds a \`.venv\` folder inside the project — a fresh, isolated Python install with none of the packages already on your main machine. Command-line equivalent: \`python3 -m venv .venv\`.`,
                he: `מפלטת הפקודות (Cmd+Shift+P), הריצי "Python: Create Environment", בחרי venv, ובחרי גרסת פייתון. זה בונה תיקיית \`.venv\` בתוך הפרויקט — התקנת פייתון טרייה ומבודדת, בלי אף חבילה שכבר קיימת במכונה הראשית. מקבילה בשורת פקודה: \`python3 -m venv .venv\`.`,
              },
            },
            {
              title: { en: '2. Confirm, then install', he: '2. לאשר, ואז להתקין' },
              detail: {
                en: `Before installing anything, check the bottom status bar for the venv's dotted path — the only reliable confirmation the environment is active. Close and reopen the terminal if it doesn't auto-activate, or run \`source .venv/bin/activate\` yourself. Only then run \`pip install\` — every package installed in this state lands inside \`.venv\`, not on the main Python.`,
                he: `לפני שמתקינות כל דבר, בדקי את שורת הסטטוס התחתונה לנתיב המנוקד של ה-venv — האישור האמין היחיד שהסביבה פעילה. סגרי ופתחי מחדש את הטרמינל אם היא לא מתפעלת אוטומטית, או הריצי \`source .venv/bin/activate\` בעצמך. רק אז הריצי \`pip install\` — כל חבילה שמותקנת במצב הזה נוחתת בתוך \`.venv\`, לא על הפייתון הראשי.`,
              },
            },
            {
              title: { en: '3. Run inside it', he: '3. להריץ בתוכה' },
              detail: {
                en: `Running the script only protects you if it runs on the venv's interpreter, not the general one — the step most people skip. A successful \`pip install\` proves nothing about which Python actually received the package; a \`ModuleNotFoundError\` right after a clean install is never a package problem, it's always an environment-identity problem.`,
                he: `הרצת הסקריפט מגנה עלייך רק אם היא רצה על המתורגמן של ה-venv, לא הכללי — השלב שהכי הרבה אנשים מדלגים עליו. \`pip install\` מוצלח לא מוכיח כלום לגבי איזה פייתון בעצם קיבל את החבילה; \`ModuleNotFoundError\` מייד אחרי התקנה נקייה הוא לעולם לא בעיית חבילה, הוא תמיד בעיית זהות-סביבה.`,
              },
            },
          ],
          windows: [
            {
              title: { en: '1. Create it', he: '1. יוצרות אותה' },
              detail: {
                en: `From the command palette (Ctrl+Shift+P), run "Python: Create Environment," choose venv, and pick a Python version. This builds a \`.venv\` folder inside the project. Command-line equivalent: \`python -m venv .venv\`.`,
                he: `מפלטת הפקודות (Ctrl+Shift+P), הריצי "Python: Create Environment", בחרי venv, ובחרי גרסת פייתון. זה בונה תיקיית \`.venv\` בתוך הפרויקט. מקבילה בשורת פקודה: \`python -m venv .venv\`.`,
              },
            },
            {
              title: { en: '2. Confirm, then install', he: '2. לאשר, ואז להתקין' },
              detail: {
                en: `Check the bottom status bar for the venv's dotted path before running \`pip install\`, or activate it yourself with \`.venv\\Scripts\\activate\`. Only after activation does an install land inside \`.venv\` instead of the system Python.`,
                he: `בדקי את שורת הסטטוס התחתונה לנתיב המנוקד של ה-venv לפני הרצת \`pip install\`, או הפעילי אותה בעצמך עם \`.venv\\Scripts\\activate\`. רק אחרי ההפעלה, התקנה נוחתת בתוך \`.venv\` במקום על פייתון המערכת.`,
              },
            },
            {
              title: { en: '3. Run inside it', he: '3. להריץ בתוכה' },
              detail: {
                en: `Make sure the script runs on the venv's interpreter, not the system one — the step most people skip. A \`ModuleNotFoundError\` right after a clean install means the wrong interpreter ran it, not that the install failed.`,
                he: `ודאי שהסקריפט רץ על המתורגמן של ה-venv, לא של המערכת — השלב שהכי הרבה אנשים מדלגים עליו. \`ModuleNotFoundError\` מייד אחרי התקנה נקייה אומר שהמתורגמן הלא-נכון הריץ אותו, לא שההתקנה נכשלה.`,
              },
            },
          ],
        },
      },
      {
        name: 'pip',
        officialUrl: 'https://pip.pypa.io/en/stable/installation/',
        sessions: [12, 19],
        whatItDoes: {
          en: `Installs third-party packages into whichever Python environment is currently active.`,
          he: `מתקין חבילות צד-שלישי לתוך כל סביבת פייתון שפעילה כרגע.`,
        },
        tips: {
          en: `A real install line from the course: \`pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib\`, followed by \`pip freeze > requirements.txt\` to lock exact versions for reproducibility. The core warning ties back to venv: pip succeeding is not proof the script itself can see the package — always check which interpreter is actually running.`,
          he: `שורת התקנה אמיתית מהקורס: \`pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib\`, ואחריה \`pip freeze > requirements.txt\` כדי לנעול גרסאות מדויקות לצורך שחזוריות. האזהרה המרכזית נקשרת בחזרה ל-venv: הצלחת pip היא לא הוכחה שהסקריפט עצמו יכול לראות את החבילה — תמיד לבדוק איזה מתורגמן בפועל רץ.`,
        },
        commands: {
          mac: [
            'pip3 install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib',
            'pip3 freeze > requirements.txt',
          ],
          windows: [
            'pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib',
            'pip freeze > requirements.txt',
          ],
        },
      },
      {
        name: 'VS Code / Cursor / PyCharm / Jupyter',
        officialUrl: 'https://code.visualstudio.com/download',
        sessions: [3, 4],
        whatItDoes: {
          en: `Different ways to interact with the same underlying Python interpreter. VS Code was the course's recommended default; PyCharm is heavier and more feature-rich; Jupyter is interactive and cell-based.`,
          he: `דרכים שונות לתקשר עם אותו מתורגמן פייתון שמתחת למכסה המנוע. VS Code היה ברירת המחדל המומלצת של הקורס; PyCharm כבד ועשיר-תכונות יותר; Jupyter אינטראקטיבי ומבוסס-תאים.`,
        },
        tips: {
          en: `A recurring class confusion — files "disappearing" — was always caused by opening a single file instead of using Open Folder on the whole project directory. Explicit advice: pick one editor (Cursor or VS Code) and stay in it for the entire course; switching mid-course silently breaks keyboard shortcuts by OS, loses saved notebook cells, and forces the interpreter to be re-selected. Every fresh Jupyter notebook needs its Python 3 kernel reselected individually — it doesn't persist per-project.`,
          he: `בלבול חוזר בכיתה — קבצים "נעלמים" — נגרם תמיד מפתיחת קובץ בודד במקום שימוש ב-Open Folder על כל תיקיית הפרויקט. עצה מפורשת: לבחור עורך אחד (Cursor או VS Code) ולהישאר בו לכל הקורס; החלפה באמצע הקורס שוברת בשקט קיצורי מקלדת לפי מערכת הפעלה, מאבדת תאי מחברת שנשמרו, ומכריחה בחירה מחדש של המתורגמן. כל מחברת Jupyter חדשה צריכה שהליבה של Python 3 שלה תיבחר מחדש בנפרד — היא לא נשמרת לכל פרויקט.`,
        },
        commands: {
          mac: [
            'brew install --cask visual-studio-code',
            'brew install --cask cursor',
            'brew install --cask pycharm-ce',
            'pip3 install jupyter',
          ],
          windows: [
            'winget install -e --id Microsoft.VisualStudioCode',
            '# Cursor: download the installer from cursor.com',
            'winget install -e --id JetBrains.PyCharm.Community',
            'pip install jupyter',
          ],
        },
      },
      {
        name: 'Git & GitHub Desktop',
        officialUrl: 'https://desktop.github.com/',
        sessions: [7, 8],
        whatItDoes: {
          en: `Version control. GitHub Desktop is the GUI the course walks through, rather than raw git commands.`,
          he: `בקרת גרסאות. GitHub Desktop הוא הממשק הגרפי שהקורס עובר דרכו, במקום פקודות git גולמיות.`,
        },
        tips: {
          en: `The seven-step rhythm: new empty folder → "create a repository" in GitHub Desktop pointed at it → edit a file → stage (+) → write a specific commit message → commit → sync/push. First publish triggers a one-time OAuth browser sign-in (same email as the local Git username) that grants push permission going forward. Public/private is asked at first publish but stays revisitable later. Core discipline: never work directly on \`main\` — branch first, since \`main\` is what the client sees.`,
          he: `הקצב בן שבעת השלבים: תיקייה ריקה חדשה → "create a repository" ב-GitHub Desktop שמצביע עליה → עריכת קובץ → staging (+) → כתיבת הודעת commit ספציפית → commit → sync/push. פרסום ראשון מפעיל כניסת OAuth חד-פעמית בדפדפן (אותו אימייל כמו שם המשתמש המקומי של Git) שמעניקה הרשאת push מכאן ואילך. ציבורי/פרטי נשאל בפרסום הראשון אבל נשאר ניתן לשינוי אחר כך. משמעת ליבה: לעולם לא לעבוד ישירות על \`main\` — לענף קודם, כי \`main\` הוא מה שהלקוח רואה.`,
        },
        commands: {
          mac: ['brew install git', 'brew install --cask github', 'git --version'],
          windows: [
            'winget install -e --id Git.Git',
            'winget install -e --id GitHub.GitHubDesktop',
            'git --version',
          ],
        },
      },
      {
        name: 'GitHub CLI (gh)',
        officialUrl: 'https://cli.github.com/',
        sessions: [16],
        whatItDoes: {
          en: `Lets an agent authenticate and push to GitHub from the terminal without a browser.`,
          he: `מאפשר לסוכן לאמת ולדחוף ל-GitHub מהטרמינל בלי דפדפן.`,
        },
        tips: {
          en: `Install, then run \`gh auth login\` — the same pattern as the Supabase CLI, done right after it, because pushing the finished project to GitHub is part of the same automated agent-driven flow.`,
          he: `להתקין, ואז להריץ \`gh auth login\` — אותו דפוס כמו Supabase CLI, נעשה מייד אחריו, כי דחיפת הפרויקט הגמור ל-GitHub היא חלק מאותו תהליך מונע-סוכן אוטומטי.`,
        },
        commands: {
          mac: ['brew install gh', 'gh auth login'],
          windows: ['winget install -e --id GitHub.cli', 'gh auth login'],
        },
      },
      {
        id: 'dotenv',
        name: 'python-dotenv + .env',
        officialUrl: 'https://pypi.org/project/python-dotenv/',
        sessions: [12, 13],
        whatItDoes: {
          en: `Loads secrets from a \`.env\` file via \`os.getenv()\` instead of hardcoding them directly in scripts.`,
          he: `טוען סודות מקובץ \`.env\` דרך \`os.getenv()\` במקום לקבע אותם ישירות בסקריפטים.`,
        },
        tips: {
          en: `The full hygiene chain, demonstrated live: (1) have the agent create \`.env\` and load the key via python-dotenv rather than hardcoding it; (2) confirm \`.env\` is in \`.gitignore\` before the first commit — the step that actually matters, since a hidden key that still gets committed is unprotected; (3) create \`.env.example\` with the same variable names but no real values, so collaborators know what to fill in without seeing the real key; (4) have the agent write a README and \`requirements.txt\` so the environment is reproducible. This directly followed a live near-miss where a real API key was pasted straight into a script to get a demo working, then flagged on the spot: that file must never be shared as-is.`,
          he: `שרשרת ההיגיינה המלאה, שהודגמה בשידור חי: (1) לבקש מהסוכן ליצור \`.env\` ולטעון את המפתח דרך python-dotenv במקום לקבע אותו; (2) לוודא ש-\`.env\` נמצא ב-\`.gitignore\` לפני ה-commit הראשון — השלב שבאמת חשוב, כי מפתח מוסתר שעדיין נכנס ל-commit הוא לא מוגן; (3) ליצור \`.env.example\` עם אותם שמות משתנים אבל בלי ערכים אמיתיים, כך שמשתפי פעולה יודעים מה למלא בלי לראות את המפתח האמיתי; (4) לבקש מהסוכן לכתוב README ו-\`requirements.txt\` כך שהסביבה תהיה ברת-שחזור. זה בא ישירות בעקבות תקרית-כמעט חיה שבה מפתח API אמיתי הודבק ישירות לתוך סקריפט כדי שהדגמה תעבוד, ואז סומן במקום: הקובץ הזה לעולם לא צריך להיות משותף כמו שהוא.`,
        },
        commands: {
          mac: ['pip3 install python-dotenv', 'echo ".env" >> .gitignore'],
          windows: ['pip install python-dotenv', 'echo .env >> .gitignore'],
        },
        steps: {
          mac: [
            {
              title: { en: '1. Install python-dotenv', he: '1. התקיני את python-dotenv' },
              detail: {
                en: `In Terminal, inside your project's virtual environment: \`pip3 install python-dotenv\`.`,
                he: `ב-Terminal, בתוך הסביבה הווירטואלית של הפרויקט: \`pip3 install python-dotenv\`.`,
              },
            },
            {
              title: { en: '2. Create the .env file', he: '2. צרי את קובץ ה-.env' },
              detail: {
                en: `In the project's root folder: \`touch .env\`. Or simply ask the agent to create it — this is the pattern demonstrated live: a single request produced the whole chain at once.`,
                he: `בתיקיית השורש של הפרויקט: \`touch .env\`. או פשוט לבקש מהסוכן ליצור אותו — זה הדפוס שהודגם בשידור חי: בקשה אחת ייצרה את כל השרשרת בבת אחת.`,
              },
            },
            {
              title: { en: '3. Add the real secret', he: '3. הוסיפי את הסוד האמיתי' },
              detail: {
                en: `Open \`.env\` in the editor and add one line per secret, no quotes, no spaces around \`=\`: \`OPENAI_API_KEY=sk-...\`. Never let an agent read this value back to you — if one echoes a raw key by accident, rotate it immediately.`,
                he: `פתחי את \`.env\` בעורך והוסיפי שורה אחת לכל סוד, בלי מרכאות, בלי רווחים סביב \`=\`: \`OPENAI_API_KEY=sk-...\`. לעולם אל תני לסוכן להקריא לך את הערך הזה בחזרה — אם אחד מהדהד מפתח גולמי בטעות, מחליפים אותו מיד.`,
              },
            },
            {
              title: { en: '4. Load it in Python', he: '4. טעני אותו בפייתון' },
              detail: {
                en: `\`from dotenv import load_dotenv\`, \`import os\`, then \`load_dotenv()\` followed by \`api_key = os.getenv("OPENAI_API_KEY")\` — never hardcode the key string directly in the script.`,
                he: `\`from dotenv import load_dotenv\`, \`import os\`, ואז \`load_dotenv()\` ואחריו \`api_key = os.getenv("OPENAI_API_KEY")\` — לעולם לא לקבע את מחרוזת המפתח ישירות בסקריפט.`,
              },
            },
            {
              title: { en: '5. Gitignore it before the first commit', he: '5. תני לה gitignore לפני ה-commit הראשון' },
              detail: {
                en: `\`echo ".env" >> .gitignore\`, then confirm it's there before running \`git add\` for the first time — a hidden key that still gets committed is not protected at all.`,
                he: `\`echo ".env" >> .gitignore\`, ואז לאשר שהוא שם לפני הרצת \`git add\` בפעם הראשונה — מפתח מוסתר שעדיין נכנס ל-commit הוא לא מוגן בכלל.`,
              },
            },
            {
              title: { en: '6. Create .env.example', he: '6. צרי .env.example' },
              detail: {
                en: `\`cp .env .env.example\`, then delete the real values, keeping only the variable names — \`OPENAI_API_KEY=\`. This is the file that does get committed, so a collaborator knows exactly what to fill in without ever seeing the real key.`,
                he: `\`cp .env .env.example\`, ואז מחקי את הערכים האמיתיים, ושמרי רק את שמות המשתנים — \`OPENAI_API_KEY=\`. זה הקובץ שכן נכנס ל-commit, כך שמשתפת פעולה יודעת בדיוק מה למלא בלי לראות את המפתח האמיתי אף פעם.`,
              },
            },
          ],
          windows: [
            {
              title: { en: '1. Install python-dotenv', he: '1. התקיני את python-dotenv' },
              detail: {
                en: `In PowerShell, inside your project's virtual environment: \`pip install python-dotenv\`.`,
                he: `ב-PowerShell, בתוך הסביבה הווירטואלית של הפרויקט: \`pip install python-dotenv\`.`,
              },
            },
            {
              title: { en: '2. Create the .env file', he: '2. צרי את קובץ ה-.env' },
              detail: {
                en: `In the project's root folder: \`New-Item .env\`. Or simply ask the agent to create it — this is the pattern demonstrated live: a single request produced the whole chain at once.`,
                he: `בתיקיית השורש של הפרויקט: \`New-Item .env\`. או פשוט לבקש מהסוכן ליצור אותו — זה הדפוס שהודגם בשידור חי: בקשה אחת ייצרה את כל השרשרת בבת אחת.`,
              },
            },
            {
              title: { en: '3. Add the real secret', he: '3. הוסיפי את הסוד האמיתי' },
              detail: {
                en: `Open \`.env\` in the editor and add one line per secret, no quotes, no spaces around \`=\`: \`OPENAI_API_KEY=sk-...\`. Never let an agent read this value back to you — if one echoes a raw key by accident, rotate it immediately.`,
                he: `פתחי את \`.env\` בעורך והוסיפי שורה אחת לכל סוד, בלי מרכאות, בלי רווחים סביב \`=\`: \`OPENAI_API_KEY=sk-...\`. לעולם אל תני לסוכן להקריא לך את הערך הזה בחזרה — אם אחד מהדהד מפתח גולמי בטעות, מחליפים אותו מיד.`,
              },
            },
            {
              title: { en: '4. Load it in Python', he: '4. טעני אותו בפייתון' },
              detail: {
                en: `\`from dotenv import load_dotenv\`, \`import os\`, then \`load_dotenv()\` followed by \`api_key = os.getenv("OPENAI_API_KEY")\` — never hardcode the key string directly in the script.`,
                he: `\`from dotenv import load_dotenv\`, \`import os\`, ואז \`load_dotenv()\` ואחריו \`api_key = os.getenv("OPENAI_API_KEY")\` — לעולם לא לקבע את מחרוזת המפתח ישירות בסקריפט.`,
              },
            },
            {
              title: { en: '5. Gitignore it before the first commit', he: '5. תני לה gitignore לפני ה-commit הראשון' },
              detail: {
                en: `\`echo .env >> .gitignore\`, then confirm it's there before running \`git add\` for the first time — a hidden key that still gets committed is not protected at all.`,
                he: `\`echo .env >> .gitignore\`, ואז לאשר שהוא שם לפני הרצת \`git add\` בפעם הראשונה — מפתח מוסתר שעדיין נכנס ל-commit הוא לא מוגן בכלל.`,
              },
            },
            {
              title: { en: '6. Create .env.example', he: '6. צרי .env.example' },
              detail: {
                en: `\`copy .env .env.example\`, then delete the real values, keeping only the variable names — \`OPENAI_API_KEY=\`. This is the file that does get committed, so a collaborator knows exactly what to fill in without ever seeing the real key.`,
                he: `\`copy .env .env.example\`, ואז מחקי את הערכים האמיתיים, ושמרי רק את שמות המשתנים — \`OPENAI_API_KEY=\`. זה הקובץ שכן נכנס ל-commit, כך שמשתפת פעולה יודעת בדיוק מה למלא בלי לראות את המפתח האמיתי אף פעם.`,
              },
            },
          ],
        },
      },
    ],
  },
  {
    title: { en: `Data Science Stack`, he: `ערימת מדעי הנתונים` },
    items: [
      {
        name: 'NumPy & pandas',
        officialUrl: 'https://numpy.org/install/',
        sessions: [14],
        whatItDoes: {
          en: `NumPy enables real vectorized arithmetic — a plain Python list can't do the arithmetic you'd expect from a column of numbers. pandas, described as mandatory for everything the course builds from here on, provides the Series and DataFrame objects with pandas-specific \`.loc\`/\`.iloc\` indexing.`,
          he: `NumPy מאפשר חשבון וקטורי אמיתי — רשימת פייתון רגילה לא יכולה לבצע את החשבון שהיית מצפה לו מעמודת מספרים. pandas, שתואר כהכרחי לכל מה שהקורס בונה מכאן ואילך, מספק את אובייקטי Series ו-DataFrame עם אינדוקס \`.loc\`/\`.iloc\` ייחודי ל-pandas.`,
        },
        tips: {
          en: `Every pandas object follows the same "attributes and methods" grammar already taught for strings, lists, and classes — nothing structurally new to learn, just new attribute names (\`index\`, \`values\`, \`dtype\`, \`name\`).`,
          he: `כל אובייקט pandas עוקב אחר אותה דקדוק של "תכונות ומתודות" שכבר נלמד עבור מחרוזות, רשימות, ומחלקות — שום דבר חדש מבחינה מבנית ללמוד, רק שמות תכונות חדשים (\`index\`, \`values\`, \`dtype\`, \`name\`).`,
        },
        commands: {
          mac: ['pip3 install numpy pandas'],
          windows: ['pip install numpy pandas'],
        },
      },
      {
        name: 'scikit-learn',
        officialUrl: 'https://scikit-learn.org/stable/install.html',
        sessions: [18, 19],
        whatItDoes: {
          en: `Supplies ready-made model classes like LinearRegression — the straight-line formula, the cost function, and gradient descent all collapse into importing the class, creating an instance, and calling \`.fit()\`.`,
          he: `מספק מחלקות מודל מוכנות כמו LinearRegression — נוסחת הקו הישר, פונקציית העלות, וירידת הגרדיאנט כולם מתכווצים לייבוא המחלקה, יצירת מופע, וקריאה ל-\`.fit()\`.`,
        },
        tips: {
          en: `When prompting an agent to build with it, name every preprocessing stage explicitly and in order — missing values, then normalization, then categorical encoding, then outlier removal, then which metrics to compute. A vague one-line prompt produces a model missing standard pieces, not a smarter one.`,
          he: `כשמבקשים מסוכן לבנות איתו, לכנות כל שלב עיבוד מקדים במפורש ובסדר — ערכים חסרים, ואז נרמול, ואז קידוד קטגוריאלי, ואז הסרת חריגים, ואז אילו מדדים לחשב. prompt מעורפל בשורה אחת מייצר מודל שחסרים בו חלקים סטנדרטיים, לא אחד חכם יותר.`,
        },
        commands: {
          mac: ['pip3 install scikit-learn'],
          windows: ['pip install scikit-learn'],
        },
      },
      {
        name: 'matplotlib, seaborn, joblib',
        officialUrl: 'https://matplotlib.org/stable/users/installing/index.html',
        sessions: [19],
        whatItDoes: {
          en: `Named in the course's install line (\`pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib\`) as standard companions to the data science stack — for plotting and model serialization.`,
          he: `מכונים בשורת ההתקנה של הקורס (\`pip install pandas numpy scikit-learn matplotlib seaborn streamlit jupyter joblib\`) כבני-לוויה סטנדרטיים לערימת מדעי הנתונים — עבור גרפים וסריאליזציה של מודלים.`,
        },
        commands: {
          mac: ['pip3 install matplotlib seaborn joblib'],
          windows: ['pip install matplotlib seaborn joblib'],
        },
      },
      {
        name: 'Streamlit',
        officialUrl: 'https://docs.streamlit.io/get-started/installation',
        sessions: [14],
        whatItDoes: {
          en: `Turns a DataFrame into a shareable, live dashboard.`,
          he: `הופך DataFrame לדשבורד חי, שמיש-לשיתוף.`,
        },
        tips: {
          en: `The real ship sequence: folder + data file → ask an agent to build the dashboard in plain language, not planned cell-by-cell → run it locally to confirm it works → push to GitHub → connect share.streamlit.io to that repo, which reads the file straight from GitHub and stores no data itself. Students who tried uploading files manually through the Streamlit browser UI instead of via GitHub hit missing-package errors every time — the fix was always letting the agent handle the GitHub connection directly, since in real deployments this handoff is automated, not manual.`,
          he: `רצף המשלוח האמיתי: תיקייה + קובץ נתונים → לבקש מסוכן לבנות את הדשבורד בשפה פשוטה, לא מתוכנן תא-אחרי-תא → להריץ מקומית כדי לאשר שזה עובד → לדחוף ל-GitHub → לחבר את share.streamlit.io לאותו מאגר, שקורא את הקובץ ישירות מ-GitHub ולא שומר שום נתונים בעצמו. סטודנטים שניסו להעלות קבצים ידנית דרך ממשק הדפדפן של Streamlit במקום דרך GitHub נתקלו בשגיאות חבילה חסרה בכל פעם — התיקון תמיד היה לתת לסוכן לטפל בחיבור ל-GitHub ישירות, כי בפריסות אמיתיות המסירה הזו אוטומטית, לא ידנית.`,
        },
        commands: {
          mac: ['pip3 install streamlit', 'streamlit run app.py'],
          windows: ['pip install streamlit', 'streamlit run app.py'],
        },
      },
    ],
  },
  {
    title: { en: `Model Libraries — Boosted Trees`, he: `ספריות מודל — עצים מוגברים` },
    items: [
      {
        name: 'XGBoost',
        officialUrl: 'https://xgboost.readthedocs.io/en/stable/install.html',
        sessions: [21],
        whatItDoes: {
          en: `Bootstrap-samples both rows and columns for every tree — Random Forest only samples rows — forcing the ensemble to discover more varied patterns instead of converging on the same features. Skips normalization entirely, since trees split on thresholds not distances, but still needs categorical encoding.`,
          he: `עושה bootstrap גם לשורות וגם לעמודות עבור כל עץ — Random Forest דוגם רק שורות — מה שכופה על האנסמבל לגלות דפוסים מגוונים יותר במקום להתכנס לאותם פיצ'רים. מדלג על נרמול לגמרי, כי עצים מפצלים על סף ולא מרחקים, אבל עדיין צריך קידוד קטגוריאלי.`,
        },
        commands: {
          mac: ['pip3 install xgboost'],
          windows: ['pip install xgboost'],
        },
      },
      {
        name: 'LightGBM',
        officialUrl: 'https://lightgbm.readthedocs.io/en/latest/Installation-Guide.html',
        sessions: [21],
        whatItDoes: {
          en: `Bins continuous values into buckets before searching for split points, so it only checks boundaries between a handful of buckets instead of every raw value — the same underlying idea as XGBoost, computed far more cheaply. Credited to Microsoft's original paper.`,
          he: `מקבץ ערכים רציפים לדליים לפני חיפוש נקודות פיצול, כך שהוא בודק רק גבולות בין כמה דליים במקום כל ערך גולמי — אותו רעיון בסיסי כמו XGBoost, מחושב בהרבה פחות עלות. מיוחס למאמר המקורי של Microsoft.`,
        },
        commands: {
          mac: ['pip3 install lightgbm'],
          windows: ['pip install lightgbm'],
        },
      },
      {
        name: 'CatBoost',
        officialUrl: 'https://catboost.ai/en/docs/concepts/python-installation',
        sessions: [21],
        whatItDoes: {
          en: `Accepts categorical columns directly with no manual one-hot encoding, and builds symmetric trees — the same split rule mirrored across an entire tree level, computed once per level instead of once per node.`,
          he: `מקבל עמודות קטגוריאליות ישירות בלי קידוד one-hot ידני, ובונה עצים סימטריים — אותו כלל פיצול משוקף על פני שכבת עץ שלמה, מחושב פעם אחת לשכבה במקום פעם אחת לצומת.`,
        },
        tips: {
          en: `The explicit guardrail — quoting a phrase from the instructor's own teacher — "don't use a cannon to kill a mosquito." If a dataset barely has categorical columns, CatBoost's main advantage doesn't apply; XGBoost is the simpler, equally valid default.`,
          he: `גדר הבטיחות המפורשת — ציטוט של ביטוי מהמורה של המרצה עצמו — "אל תשתמשי בתותח כדי להרוג יתוש." אם למערך נתונים בקושי יש עמודות קטגוריאליות, היתרון המרכזי של CatBoost לא רלוונטי; XGBoost היא ברירת המחדל הפשוטה יותר, ותקפה באותה מידה.`,
        },
        commands: {
          mac: ['pip3 install catboost'],
          windows: ['pip install catboost'],
        },
      },
    ],
  },
  {
    title: { en: `Computer Vision`, he: `ראייה ממוחשבת` },
    items: [
      {
        name: 'Ultralytics (YOLO)',
        officialUrl: 'https://docs.ultralytics.com/quickstart/',
        sessions: [22],
        whatItDoes: {
          en: `Ships four separate specialized models — detection, classification, segmentation, pose estimation — as downloadable local weight files, each trained for exactly one job.`,
          he: `משגר ארבעה מודלים מתמחים נפרדים — זיהוי, סיווג, סגמנטציה, אומדן תנוחה — כקבצי משקל מקומיים להורדה, כל אחד מאומן לעבודה אחת בדיוק.`,
        },
        tips: {
          en: `The single clearest install-discipline moment in the whole course: install via conda, not bare pip. Multiple students hit live failures with pip directly — packages that wouldn't resolve, silent environment-creation failures, cryptic dependency errors. Ultralytics pulls a long dependency chain, and a conda environment ships with a large baseline of already-resolved compatible packages that sidesteps most of that chain; bare pip means resolving it by hand, one cryptic error at a time. Set up conda before touching the install itself. Separately: always check a model's trained object classes before building on it — it can only ever recognize categories it was actually trained on.`,
          he: `רגע המשמעת ההתקנתית הברור ביותר בכל הקורס: להתקין דרך conda, לא pip גולמי. כמה סטודנטים נתקלו בכשלים חיים עם pip ישירות — חבילות שלא נפתרו, כשלי יצירת סביבה שקטים, שגיאות תלות מסתוריות. Ultralytics מושכת שרשרת תלויות ארוכה, וסביבת conda מגיעה עם בסיס גדול של חבילות תואמות שכבר נפתרו שעוקף את רוב השרשרת הזו; pip גולמי אומר לפתור אותה ידנית, שגיאה מסתורית אחת בכל פעם. להקים conda לפני שנוגעים בהתקנה עצמה. בנפרד: תמיד לבדוק את קטגוריות האובייקטים המאומנות של מודל לפני שבונים עליו — הוא יכול לזהות רק קטגוריות שהוא באמת אומן עליהן.`,
        },
        commands: {
          mac: [
            'brew install --cask miniconda',
            'conda create -n yolo python=3.11 -y',
            'conda activate yolo',
            'pip install ultralytics',
          ],
          windows: [
            'winget install -e --id Anaconda.Miniconda3',
            'conda create -n yolo python=3.11 -y',
            'conda activate yolo',
            'pip install ultralytics',
          ],
        },
        videoUrl: 'https://drive.google.com/file/d/1SEtH1jVHWoLWEfylvGztqxIQNN3EGsuD/view',
      },
    ],
  },
  {
    title: { en: `Databases & Backend`, he: `בסיסי נתונים ו-Backend` },
    items: [
      {
        name: 'sqlite3 + SQLite Viewer',
        officialUrl: 'https://docs.python.org/3/library/sqlite3.html',
        sessions: [15],
        whatItDoes: {
          en: `\`sqlite3.connect('file.db')\` creates or reconnects to a local database file from Python's standard library; a cursor pulled from that connection carries SQL commands. The SQLite Viewer editor extension is what actually renders tables and rows visually.`,
          he: `\`sqlite3.connect('file.db')\` יוצר או מתחבר מחדש לקובץ מסד נתונים מקומי מהספרייה התקנית של פייתון; cursor שנשלף מהחיבור הזה נושא פקודות SQL. תוסף העורך SQLite Viewer הוא מה שבעצם מציג טבלאות ושורות באופן חזותי.`,
        },
        tips: {
          en: `A fresh \`.db\` file, opened directly, shows nothing — no table, no error, just silence. This confused students until they installed SQLite Viewer specifically, since nothing else renders it. Wrap connections in \`with sqlite3.connect('file.db') as conn:\` to guarantee the connection closes automatically — the same open-write-close discipline as a plain text file.`,
          he: `קובץ \`.db\` טרי, שנפתח ישירות, לא מראה כלום — לא טבלה, לא שגיאה, רק שקט. זה בלבל סטודנטים עד שהם התקינו את SQLite Viewer ספציפית, כי שום דבר אחר לא מציג אותו. לעטוף חיבורים ב-\`with sqlite3.connect('file.db') as conn:\` כדי להבטיח שהחיבור נסגר אוטומטית — אותה משמעת פתיחה-כתיבה-סגירה כמו קובץ טקסט רגיל.`,
        },
        commands: {
          mac: [
            '# sqlite3 ships with Python — nothing to install',
            'code --install-extension qwtel.sqlite-viewer',
          ],
          windows: [
            '# sqlite3 ships with Python — nothing to install',
            'code --install-extension qwtel.sqlite-viewer',
          ],
        },
      },
      {
        name: 'Supabase CLI',
        officialUrl: 'https://supabase.com/docs/guides/cli/getting-started',
        sessions: [16],
        whatItDoes: {
          en: `Lets an agent create organizations, projects, and tables in a Supabase account directly from the terminal, without a human touching the website.`,
          he: `מאפשר לסוכן ליצור ארגונים, פרויקטים, וטבלאות בחשבון Supabase ישירות מהטרמינל, בלי שבן אדם נוגע באתר.`,
        },
        tips: {
          en: `Install via scoop (Windows) or brew (Mac), then the step that actually matters is running \`supabase login\` to link the CLI to the account. Free tier caps at 2 organizations / 2 projects. Critical security note: the service_role key bypasses Row Level Security entirely — anyone holding it can read, modify, or delete every customer's data across the whole app. Never in GitHub, never in the front end, never anywhere a browser or public repo could reach it — a leak is treated as a legal event, not just a technical one. Litmus test for whether an app even needs it: does it have a "belly" — backend logic, agents needing cross-user data? A brochure site has none and needs no service_role key at all.`,
          he: `להתקין דרך scoop (Windows) או brew (Mac), ואז השלב שבאמת חשוב הוא הרצת \`supabase login\` כדי לקשר את ה-CLI לחשבון. שכבת החינם מוגבלת ל-2 ארגונים / 2 פרויקטים. הערת אבטחה קריטית: מפתח service_role עוקף Row Level Security לגמרי — כל מי שמחזיק בו יכול לקרוא, לשנות, או למחוק את הנתונים של כל לקוח על פני כל האפליקציה. לעולם לא ב-GitHub, לעולם לא בפרונט, לעולם לא בשום מקום שדפדפן או מאגר ציבורי יכולים להגיע אליו — דליפה מטופלת כאירוע משפטי, לא רק טכני. מבחן הליטמוס לשאלה אם אפליקציה בכלל צריכה אותו: האם יש לה "בטן" — לוגיקת backend, סוכנים שצריכים נתונים חוצי-משתמשים? אתר חוברת אין לו כזה ולא צריך מפתח service_role בכלל.`,
        },
        commands: {
          mac: ['brew install supabase/tap/supabase', 'supabase login'],
          windows: [
            'scoop bucket add supabase https://github.com/supabase/scoop-bucket.git',
            'scoop install supabase',
            'supabase login',
          ],
        },
      },
    ],
  },
  {
    title: { en: `Automation`, he: `אוטומציה` },
    items: [
      {
        name: 'n8n',
        officialUrl: 'https://docs.n8n.io/hosting/installation/',
        moduleId: '02-n8n',
        sessions: [2],
        whatItDoes: {
          en: `A no-code/low-code visual workflow builder (trigger → action nodes → output), explicitly framed as scaffolding for concepts that reappear in real code later, not a production tool in itself.`,
          he: `בונה תהליכי עבודה ויזואלי ללא-קוד/קוד-נמוך (טריגר → צמתי פעולה → פלט), ממוסגר במפורש כפיגום למושגים שיחזרו בקוד אמיתי מאוחר יותר, לא כלי ייצור בפני עצמו.`,
        },
        tips: {
          en: `Cloud (n8n.io, pay-per-execution) versus self-hosted (local, offline) — the course used cloud because scheduled auto-execution requires it. Credentials (OAuth / API key / service account) are how n8n acts on your behalf on a third-party service — never paste credentials into workflows, never screenshot credential screens, never commit them to a repo; if one leaks, revoke it immediately at the source service. Explicit warning: serious enterprises rarely build production systems on n8n — it's for personal workflows and prototypes, not mission-critical infrastructure, since debugging a broken workflow at scale has no logs, no breakpoints, no unit tests.`,
          he: `ענן (n8n.io, תשלום-לפי-הרצה) מול אירוח-עצמי (מקומי, לא מקוון) — הקורס השתמש בענן כי הרצה אוטומטית מתוזמנת דורשת את זה. אישורים (OAuth / מפתח API / חשבון שירות) הם איך ש-n8n פועל בשמך על שירות צד-שלישי — לעולם לא להדביק אישורים לתוך תהליכי עבודה, לעולם לא לצלם מסך של מסכי אישורים, לעולם לא להכניס אותם ל-commit במאגר; אם אחד דולף, לבטל אותו מייד בשירות המקור. אזהרה מפורשת: ארגונים רציניים לעיתים רחוקות בונים מערכות ייצור על n8n — הוא לתהליכי עבודה אישיים ואבי-טיפוס, לא תשתית קריטית-משימה, כי ניפוי תהליך עבודה שבור בקנה מידה חסר לוגים, נקודות עצירה, ובדיקות יחידה.`,
        },
        commands: {
          mac: ['# Cloud: sign up at n8n.io — no install needed', '# Self-hosted (optional): npx n8n'],
          windows: ['# Cloud: sign up at n8n.io — no install needed', '# Self-hosted (optional): npx n8n'],
        },
      },
    ],
  },
  {
    title: { en: `AI Coding Assistants`, he: `עוזרי קידוד AI` },
    items: [
      {
        name: 'Claude Code',
        officialUrl: 'https://docs.claude.com/en/docs/claude-code/setup',
        sessions: [9, 10],
        whatItDoes: {
          en: `An agentic coding assistant reachable four ways — editor extension (Cursor/VS Code), standalone desktop app, web, or terminal.`,
          he: `עוזר קידוד סוכני שנגיש בארבע דרכים — תוסף עורך (Cursor/VS Code), אפליקציית שולחן עבודה עצמאית, אינטרנט, או טרמינל.`,
        },
        tips: {
          en: `The course deliberately teaches the terminal first, despite it being the least visually friendly option, because it's the only interface with no functionality held back — the others are constrained versions of it. Recommended rhythm for any nontrivial request: enter plan mode first (produces a full outline with no execution), review and approve it, then let it run — approving a plan you haven't read isn't delegation, it's just hoping. CLAUDE.md acts as the project's constitution — re-injected into every single prompt, not consulted occasionally, because the agent has no persistent memory of its own. Cost note: the flat monthly Claude subscription only covers usage inside a Claude Code session (planning, building, running sub-agents) — an agent embedded inside a deployed app talking to real end-users runs on a completely separate, uncapped pay-per-token API key.`,
          he: `הקורס במכוון מלמד את הטרמינל קודם, למרות שהוא האפשרות הכי פחות ידידותית חזותית, כי הוא הממשק היחיד בלי שום פונקציונליות שמוחזקת בצד — האחרים הם גרסאות מוגבלות שלו. קצב מומלץ לכל בקשה לא-טריוויאלית: להיכנס תחילה למצב תכנון (מייצר מתאר מלא בלי הרצה), לבדוק ולאשר אותו, ואז לתת לו לרוץ — אישור תוכנית שלא קראת הוא לא האצלה, זו רק תקווה. CLAUDE.md משמש כחוקת הפרויקט — מוזרק מחדש לכל prompt בודד, לא נדרש מדי פעם, כי לסוכן אין זיכרון מתמיד משלו. הערת עלות: המנוי החודשי השטוח של Claude מכסה רק שימוש בתוך session של Claude Code (תכנון, בנייה, הרצת תת-סוכנים) — סוכן שמוטמע בתוך אפליקציה שפרוסה ומדברת עם משתמשי קצה אמיתיים רץ על מפתח API נפרד לגמרי, בתשלום-לפי-טוקן וללא תקרה.`,
        },
        commands: {
          mac: ['npm install -g @anthropic-ai/claude-code', 'claude'],
          windows: ['npm install -g @anthropic-ai/claude-code', 'claude'],
        },
      },
    ],
  },
];
