import type { Bilingual } from '@/lib/registry';

export type SyntaxTopic = {
  number: string;            // matches the source notebook's own numbering (03–19) for Python; a language-prefixed id otherwise
  title: Bilingual;
  source: string;    // filename or session/card citation, for citation only
  points: Bilingual[];
  keyTakeaway?: Bilingual;
};

export type SyntaxLanguageSection = {
  id: string;
  language: Bilingual;
  note: Bilingual;   // honesty/scope note — how much of this language the course actually covered
  topics: SyntaxTopic[];
  attachments?: { label: Bilingual; url: string }[]; // real course source material for this language
};

// Sourced from the end-of-notebook summary cells in the course's own Jupyter notebooks
// (Python module, Drive folder 1zTaJZnRNrB3v4wN92U3rOnhOqiB-1bsV) — not generic Python docs.
// Where a notebook had no formal summary cell, the points below are synthesized from its code cells.
export const syntaxGuide: SyntaxTopic[] = [
  {
    number: '03',
    title: { en: 'Variables', he: 'משתנים' },
    source: '03-Variables.ipynb',
    points: [
      { en: `Assignment uses \`=\`: \`variable_name = value\`.`, he: `הצבה עם \`=\`: \`variable_name = value\`.` },
      { en: `Naming rules: start with a letter or underscore, no spaces (use \`_\`), only letters/numbers/underscores, snake_case, avoid Python keywords.`, he: `כללי כינוי: מתחילים באות או קו תחתון, בלי רווחים (משתמשות ב-\`_\`), רק אותיות/מספרים/קווים תחתונים, snake_case, נמנעות ממילים שמורות של פייתון.` },
      { en: `Reassignment: \`a = a + 5\`; shorthand operators \`+=\`, \`-=\`, \`*=\`, \`/=\`.`, he: `הצבה מחדש: \`a = a + 5\`; אופרטורים מקוצרים \`+=\`, \`-=\`, \`*=\`, \`/=\`.` },
      { en: `Multiple assignment: same value \`x = y = z = 0\`; different values \`x, y = 1, 2\`; swap \`x, y = y, x\`.`, he: `הצבה מרובה: אותו ערך \`x = y = z = 0\`; ערכים שונים \`x, y = 1, 2\`; החלפה \`x, y = y, x\`.` },
      { en: `Dynamic typing: variables can change type; check with \`type()\`.`, he: `הקלדה דינמית: משתנים יכולים לשנות סוג; בודקות עם \`type()\`.` },
      { en: `\`input()\` always returns a string — convert with \`int()\`, \`float()\`, or \`str()\`.`, he: `\`input()\` תמיד מחזיר מחרוזת — ממירות עם \`int()\`, \`float()\`, או \`str()\`.` },
      { en: `String formatting: f-strings \`f"Hello {name}"\`; concatenation \`"Hello " + name\`; \`.format()\`: \`"Hello {}".format(name)\`.`, he: `פרמוט מחרוזות: f-strings \`f"Hello {name}"\`; שרשור \`"Hello " + name\`; \`.format()\`: \`"Hello {}".format(name)\`.` },
    ],
  },
  {
    number: '04',
    title: { en: 'Lists', he: 'רשימות' },
    source: '04-Lists.ipynb',
    points: [
      { en: `Creating: square brackets \`[item1, item2, item3]\`, can mix types; \`len()\` for length.`, he: `יצירה: סוגריים מרובעים \`[item1, item2, item3]\`, יכולה לערבב טיפוסים; \`len()\` לאורך.` },
      { en: `Indexing/slicing: \`list[0]\`, \`list[-1]\`, \`list[start:stop:step]\`.`, he: `אינדוקס/פרוסה: \`list[0]\`, \`list[-1]\`, \`list[start:stop:step]\`.` },
      { en: `Mutability: \`list[0] = 'new value'\` — unlike immutable strings.`, he: `יכולת שינוי: \`list[0] = 'new value'\` — בניגוד למחרוזות שאינן ניתנות לשינוי.` },
      { en: `Add methods: \`.append()\`, \`.insert()\`, \`.extend()\`. Remove: \`.remove()\`, \`.pop()\`, \`.clear()\`. Info: \`.index()\`, \`.count()\`.`, he: `מתודות הוספה: \`.append()\`, \`.insert()\`, \`.extend()\`. הסרה: \`.remove()\`, \`.pop()\`, \`.clear()\`. מידע: \`.index()\`, \`.count()\`.` },
      { en: `Operations: concatenate \`list1 + list2\`, repeat \`list * 3\`, membership \`item in list\`.`, he: `פעולות: שרשור \`list1 + list2\`, חזרה \`list * 3\`, שייכות \`item in list\`.` },
      { en: `Sorting/reversing: \`.sort()\` in place, \`sorted()\` returns a copy, \`.reverse()\` in place, \`[::-1]\` reversed copy.`, he: `מיון/היפוך: \`.sort()\` במקום, \`sorted()\` מחזיר עותק, \`.reverse()\` במקום, \`[::-1]\` עותק הפוך.` },
      { en: `Nested lists: double indexing \`matrix[row][col]\`.`, he: `רשימות מקוננות: אינדוקס כפול \`matrix[row][col]\`.` },
      { en: `Built-ins: \`len()\`, \`max()\`, \`min()\`, \`sum()\`.`, he: `פונקציות מובנות: \`len()\`, \`max()\`, \`min()\`, \`sum()\`.` },
    ],
  },
  {
    number: '05',
    title: { en: 'Tuples', he: 'טאפלים' },
    source: '05-Tuples.ipynb',
    points: [
      { en: `Creating: parentheses \`(item1, item2, item3)\` or bare commas; single-element needs a comma \`(item,)\`; empty \`()\`.`, he: `יצירה: סוגריים \`(item1, item2, item3)\` או פסיקים בלבד; איבר בודד צריך פסיק \`(item,)\`; ריק \`()\`.` },
      { en: `Indexing/slicing: same as lists.`, he: `אינדוקס/פרוסה: כמו ברשימות.` },
      { en: `Only two methods exist: \`.index()\` and \`.count()\`.`, he: `יש רק שתי מתודות: \`.index()\` ו-\`.count()\`.` },
      { en: `Immutability: cannot change/add/remove; protects data; usable as dict keys; faster than lists.`, he: `אי-שינוי: אי אפשר לשנות/להוסיף/להסיר; מגן על הנתונים; ניתן לשימוש כמפתחות מילון; מהיר יותר מרשימות.` },
      { en: `Operations: concatenation, repetition, membership, \`len()\`/\`max()\`/\`min()\`/\`sum()\`.`, he: `פעולות: שרשור, חזרה, שייכות, \`len()\`/\`max()\`/\`min()\`/\`sum()\`.` },
      { en: `Packing/unpacking: \`t = 1, 2, 3\`; \`a, b, c = t\`; extended \`first, *middle, last = t\`; swap \`a, b = b, a\`.`, he: `אריזה/פירוק: \`t = 1, 2, 3\`; \`a, b, c = t\`; מורחב \`first, *middle, last = t\`; החלפה \`a, b = b, a\`.` },
      { en: `Use when: data must stay fixed, function return values, dictionary keys, data integrity/performance.`, he: `להשתמש כש: הנתונים חייבים להישאר קבועים, ערכי החזרה של פונקציות, מפתחות מילון, שלמות נתונים/ביצועים.` },
    ],
    keyTakeaway: {
      en: `Tuples are immutable lists — use them when you want to ensure data doesn't change.`,
      he: `טאפלים הם רשימות שאינן ניתנות לשינוי — משתמשים בהן כשרוצים להבטיח שהנתונים לא ישתנו.`,
    },
  },
  {
    number: '06',
    title: { en: 'Dictionaries', he: 'מילונים' },
    source: '06-Dictionaries.ipynb',
    points: [
      { en: `Creating: curly braces \`{key: value}\`; keys must be immutable/unique; values can be any type.`, he: `יצירה: סוגריים מסולסלים \`{key: value}\`; מפתחות חייבים להיות בלתי-ניתנים-לשינוי/ייחודיים; ערכים יכולים להיות מכל סוג.` },
      { en: `Accessing: \`dict[key]\`; \`.get()\` is safer, returns None or a default if missing.`, he: `גישה: \`dict[key]\`; \`.get()\` בטוח יותר, מחזיר None או ברירת מחדל אם חסר.` },
      { en: `Modifying: add \`dict[new_key] = value\`; delete \`del dict[key]\` or \`.pop(key)\`.`, he: `שינוי: הוספה \`dict[new_key] = value\`; מחיקה \`del dict[key]\` או \`.pop(key)\`.` },
      { en: `Methods: \`.keys()\`, \`.values()\`, \`.items()\`, \`.update()\`, \`.get()\`, \`.pop()\`, \`.clear()\`.`, he: `מתודות: \`.keys()\`, \`.values()\`, \`.items()\`, \`.update()\`, \`.get()\`, \`.pop()\`, \`.clear()\`.` },
      { en: `Nested dictionaries: \`dict[key1][key2]\`.`, he: `מילונים מקוננים: \`dict[key1][key2]\`.` },
      { en: `Operations: \`key in dict\`, \`len(dict)\`, merge \`dict1 | dict2\` or \`{**dict1, **dict2}\`.`, he: `פעולות: \`key in dict\`, \`len(dict)\`, מיזוג \`dict1 | dict2\` או \`{**dict1, **dict2}\`.` },
    ],
    keyTakeaway: {
      en: `Dictionaries store key-value pairs — perfect for real-world objects and relationships.`,
      he: `מילונים שומרים זוגות מפתח-ערך — מושלמים לאובייקטים ויחסים מהעולם האמיתי.`,
    },
  },
  {
    number: '07',
    title: { en: 'Sets', he: 'קבוצות' },
    source: '07-Sets.ipynb',
    points: [
      { en: `Creating: curly braces \`{1, 2, 3}\`; \`set()\` for an empty set or to convert from a list; duplicates are removed automatically.`, he: `יצירה: סוגריים מסולסלים \`{1, 2, 3}\`; \`set()\` לקבוצה ריקה או להמרה מרשימה; כפילויות מוסרות אוטומטית.` },
      { en: `Adding: \`.add(element)\` for one, \`.update(iterable)\` for several.`, he: `הוספה: \`.add(element)\` לאיבר אחד, \`.update(iterable)\` למספר איברים.` },
      { en: `Removing: \`.remove(element)\` raises an error if not found; \`.discard(element)\` doesn't; \`.clear()\` removes everything.`, he: `הסרה: \`.remove(element)\` זורק שגיאה אם לא נמצא; \`.discard(element)\` לא זורק; \`.clear()\` מסיר הכול.` },
      { en: `Common uses: removing duplicates from a list, fast membership checks, mathematical set operations.`, he: `שימושים נפוצים: הסרת כפילויות מרשימה, בדיקות שייכות מהירות, פעולות תורת קבוצות.` },
      { en: `Gotcha explicitly called out in the notebook: \`{}\` creates an empty dictionary, not an empty set — use \`set()\`.`, he: `מלכודת שמצוינת במפורש במחברת: \`{}\` יוצר מילון ריק, לא קבוצה ריקה — משתמשות ב-\`set()\`.` },
    ],
    keyTakeaway: {
      en: `Sets are perfect for storing unique elements and performing fast membership testing.`,
      he: `קבוצות מושלמות לאחסון איברים ייחודיים ולביצוע בדיקות שייכות מהירות.`,
    },
  },
  {
    number: '08',
    title: { en: 'Comparison Operators', he: 'אופרטורי השוואה' },
    source: '08-Comparison Operators.ipynb',
    points: [
      { en: `Operators: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` — all return True/False.`, he: `אופרטורים: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` — כולם מחזירים True/False.` },
      { en: `Critical distinction: \`=\` is assignment, \`==\` is comparison.`, he: `הבחנה קריטית: \`=\` היא הצבה, \`==\` היא השוואה.` },
      { en: `Comparing types: numbers compare mathematically; strings compare alphabetically/by ASCII; lists compare element-by-element; booleans treat True as 1, False as 0.`, he: `השוואת טיפוסים: מספרים מושווים מתמטית; מחרוזות מושוות אלפביתית/לפי ASCII; רשימות מושוות איבר-איבר; בוליאנים מתייחסים ל-True כ-1, ל-False כ-0.` },
      { en: `Chaining comparisons: Python allows \`1 < x < 10\` instead of \`(x > 1) and (x < 10)\` — more readable.`, he: `שרשור השוואות: פייתון מאפשר \`1 < x < 10\` במקום \`(x > 1) and (x < 10)\` — קריא יותר.` },
    ],
  },
  {
    number: '09',
    title: { en: 'if / elif / else Statements', he: 'משפטי if / elif / else' },
    source: '09 -if, elif, and else Statements.ipynb',
    points: [
      { en: `\`if\` executes only if the condition is True: \`if condition:\`.`, he: `\`if\` מבוצע רק אם התנאי הוא True: \`if condition:\`.` },
      { en: `\`else\` executes when the \`if\` is False: \`else:\`.`, he: `\`else\` מבוצע כש-\`if\` הוא False: \`else:\`.` },
      { en: `\`elif\` checks additional conditions and can be chained multiple times: \`elif condition:\`.`, he: `\`elif\` בודק תנאים נוספים וניתן לשרשור פעמים רבות: \`elif condition:\`.` },
      { en: `Indentation is critical Python syntax — 4 spaces or 1 tab, defines a code block.`, he: `הזחה היא תחביר קריטי בפייתון — 4 רווחים או טאב אחד, מגדירה בלוק קוד.` },
      { en: `Nested statements: an \`if\` inside an \`if\` — each level adds 4 more spaces.`, he: `משפטים מקוננים: \`if\` בתוך \`if\` — כל רמה מוסיפה עוד 4 רווחים.` },
    ],
  },
  {
    number: '10',
    title: { en: 'for Loops', he: 'לולאות for' },
    source: '10-for Loops.ipynb',
    points: [
      { en: `Syntax: \`for item in sequence:\` — loops through lists, strings, tuples, dicts, and ranges.`, he: `תחביר: \`for item in sequence:\` — עוברת על רשימות, מחרוזות, טאפלים, מילונים, וטווחים.` },
      { en: `\`range(a, b)\` gives numbers from a up to b-1.`, he: `\`range(a, b)\` נותן מספרים מ-a עד b-1.` },
      { en: `\`break\` stops the loop early.`, he: `\`break\` עוצר את הלולאה מוקדם.` },
      { en: `Tuple unpacking inside a loop: \`for (a, b) in pairs:\`.`, he: `פירוק טאפל בתוך לולאה: \`for (a, b) in pairs:\`.` },
      { en: `\`.items()\` loops both keys and values of a dict.`, he: `\`.items()\` עוברת גם על מפתחות וגם על ערכים של מילון.` },
      { en: `\`%\` gives the remainder — \`num % 2 == 0\` checks for even.`, he: `\`%\` נותן את השארית — \`num % 2 == 0\` בודק זוגיות.` },
      { en: `Accumulator pattern: initialize before the loop, update inside it (\`total += num\`).`, he: `דפוס צבירה: אתחול לפני הלולאה, עדכון בתוכה (\`total += num\`).` },
    ],
  },
  {
    number: '11',
    title: { en: 'while Loops', he: 'לולאות while' },
    source: '11-while Loops.ipynb',
    points: [
      { en: `Syntax: \`while condition: # code\`.`, he: `תחביר: \`while condition: # code\`.` },
      { en: `\`while\` with \`else\`: the else block runs when the loop ends normally, without a \`break\`.`, he: `\`while\` עם \`else\`: בלוק ה-else רץ כשהלולאה מסתיימת כרגיל, בלי \`break\`.` },
      { en: `Control statements: \`break\` exits immediately, \`continue\` skips to the next iteration, \`pass\` does nothing (a placeholder).`, he: `משפטי בקרה: \`break\` יוצא מייד, \`continue\` מדלג לאיטרציה הבאה, \`pass\` לא עושה כלום (placeholder).` },
      { en: `Common patterns: counter (\`count += 1\`), flag (\`while flag:\`), sentinel (\`while True:\` with a \`break\`).`, he: `דפוסים נפוצים: מונה (\`count += 1\`), דגל (\`while flag:\`), שומר (\`while True:\` עם \`break\`).` },
      { en: `for vs while: use \`for\` when the iteration count is known; use \`while\` when it's unknown, until a condition becomes False.`, he: `for מול while: להשתמש ב-\`for\` כשמספר האיטרציות ידוע; להשתמש ב-\`while\` כשהוא לא ידוע, עד שתנאי הופך ל-False.` },
      { en: `Avoiding infinite loops: always update the loop variable, ensure the condition can become False, use safety counters, test with small values first.`, he: `הימנעות מלולאות אינסופיות: תמיד לעדכן את משתנה הלולאה, לוודא שהתנאי יכול להפוך ל-False, להשתמש במוני בטיחות, לבדוק עם ערכים קטנים קודם.` },
    ],
    keyTakeaway: {
      en: `while loops repeat until a condition is met when you don't know in advance how many times — be careful to avoid infinite loops.`,
      he: `לולאות while חוזרות עד שתנאי מתקיים כשלא יודעים מראש כמה פעמים — להיזהר מלולאות אינסופיות.`,
    },
  },
  {
    number: '12',
    title: { en: 'List Comprehensions', he: 'הבנות רשימה' },
    source: '12-List Comprehensions.ipynb',
    points: [
      { en: `Basic syntax: \`[expression for item in iterable]\`.`, he: `תחביר בסיסי: \`[expression for item in iterable]\`.` },
      { en: `With a condition: \`[expression for item in iterable if condition]\`.`, he: `עם תנאי: \`[expression for item in iterable if condition]\`.` },
      { en: `Key benefits: more concise than traditional loops, more readable for simple operations, faster execution, Pythonic style.`, he: `יתרונות מרכזיים: תמציתי יותר מלולאות מסורתיות, קריא יותר לפעולות פשוטות, ביצוע מהיר יותר, סגנון פייתוני.` },
      { en: `Use for: simple transformations (squaring, uppercase, etc.), filtering lists, creating new lists from existing ones.`, he: `להשתמש עבור: טרנספורמציות פשוטות (העלאה בריבוע, אותיות גדולות, וכו׳), סינון רשימות, יצירת רשימות חדשות מקיימות.` },
      { en: `Avoid for: complex logic (hard to read), side effects (printing, file operations), when debugging is needed.`, he: `להימנע עבור: לוגיקה מורכבת (קשה לקריאה), תופעות לוואי (הדפסה, פעולות קבצים), כשצריך ניפוי באגים.` },
    ],
    keyTakeaway: {
      en: `List comprehensions are powerful and concise — use them for simple operations that improve readability; for complex logic, stick with traditional loops for clarity.`,
      he: `הבנות רשימה חזקות ותמציתיות — משתמשים בהן לפעולות פשוטות שמשפרות קריאות; ללוגיקה מורכבת, נשארות עם לולאות מסורתיות לבהירות.`,
    },
  },
  {
    number: '13',
    title: { en: 'Functions', he: 'פונקציות' },
    source: '13-Functions.ipynb',
    points: [
      { en: `Syntax: \`def function_name(parameters): '''Docstring''' # code; return result\`.`, he: `תחביר: \`def function_name(parameters): '''Docstring''' # code; return result\`.` },
      { en: `\`def\` defines a function; call it with \`()\`; it can accept parameters; \`return\` sends a value back — not \`print\`.`, he: `\`def\` מגדיר פונקציה; קוראים לה עם \`()\`; היא יכולה לקבל פרמטרים; \`return\` שולח ערך בחזרה — לא \`print\`.` },
      { en: `Return vs. print: \`print()\` displays output and returns None; \`return\` sends the value back to be saved or used — always use \`return\` when the result needs to be saved.`, he: `return מול print: \`print()\` מציג פלט ומחזיר None; \`return\` שולח את הערך בחזרה כדי שיישמר או ישמש — תמיד להשתמש ב-\`return\` כשצריך לשמור את התוצאה.` },
      { en: `Functions can: contain if/else logic, use loops, return multiple values (as a tuple), call other functions, have default parameters.`, he: `פונקציות יכולות: להכיל לוגיקת if/else, להשתמש בלולאות, להחזיר כמה ערכים (כטאפל), לקרוא לפונקציות אחרות, לקבל פרמטרים עם ברירת מחדל.` },
      { en: `Best practices: descriptive names, docstrings, keep each function focused on one task, type hints.`, he: `שיטות עבודה מומלצות: שמות תיאוריים, docstrings, לשמור על כל פונקציה ממוקדת במשימה אחת, type hints.` },
    ],
    keyTakeaway: {
      en: `Functions are the building blocks of larger programs — they help write DRY (Don't Repeat Yourself) code.`,
      he: `פונקציות הן אבני הבניין של תוכניות גדולות יותר — הן עוזרות לכתוב קוד DRY (לא לחזור על עצמך).`,
    },
  },
  {
    number: '14',
    title: { en: '*args and **kwargs', he: '*args ו-**kwargs' },
    source: '14-args kwargs.ipynb',
    points: [
      { en: `\`*args\` lets a function accept any number of positional arguments, collected as a tuple — replaces needing a fixed parameter for each value: \`def myfunc(*args): return sum(args) * .05\`.`, he: `\`*args\` מאפשר לפונקציה לקבל כל מספר של ארגומנטים מיקומיים, נאספים כטאפל — מחליף את הצורך בפרמטר קבוע לכל ערך: \`def myfunc(*args): return sum(args) * .05\`.` },
      { en: `\`**kwargs\` collects arbitrary keyword arguments into a dictionary, loopable with \`.items()\`, accessed like a normal dict (\`kwargs["key"]\`); check for a specific key with \`if 'fruit' in kwargs:\`.`, he: `\`**kwargs\` אוסף ארגומנטים במילות מפתח כלשהם למילון, ניתן לעבור עליו עם \`.items()\`, גישה כמו למילון רגיל (\`kwargs["key"]\`); בדיקת מפתח ספציפי עם \`if 'fruit' in kwargs:\`.` },
      { en: `Demonstrated in the course with an "agents" example building agent config dictionaries from keyword arguments (\`role=\`, \`goal=\`) — tying the syntax directly to the AI-agent material used later in the course.`, he: `הודגם בקורס עם דוגמת "סוכנים" שבונה מילוני קונפיגורציית סוכן מארגומנטי מילות מפתח (\`role=\`, \`goal=\`) — קושר את התחביר ישירות לחומר סוכני ה-AI שמשמש בהמשך הקורס.` },
    ],
  },
  {
    number: '15',
    title: { en: 'Nested Statements and Scope', he: 'משפטים מקוננים והיקף (Scope)' },
    source: '15-Nested Statements and Scope.ipynb',
    points: [
      { en: `Names resolve by the LEGB rule: Local → Enclosing → Global → Built-in.`, he: `שמות נפתרים לפי כלל LEGB: מקומי (Local) ← מקיף (Enclosing) ← גלובלי (Global) ← מובנה (Built-in).` },
      { en: `Assigning inside a function creates a local name by default.`, he: `הצבה בתוך פונקציה יוצרת שם מקומי כברירת מחדל.` },
      { en: `Mutating a passed-in mutable object (e.g. a list) does affect the caller — different from reassignment.`, he: `שינוי אובייקט ניתן-לשינוי שהועבר (למשל רשימה) כן משפיע על הקורא — שונה מהצבה מחדש.` },
      { en: `Use \`global\` to rebind a module-level name from inside a function (several at once: \`global x, y, z\`); without it, assignment creates a new local name instead.`, he: `שימוש ב-\`global\` לקישור מחדש של שם ברמת המודול מתוך פונקציה (כמה בבת אחת: \`global x, y, z\`); בלעדיו, הצבה יוצרת שם מקומי חדש במקום זאת.` },
      { en: `Use \`nonlocal\` to rebind a name in an enclosing function rather than the module's global scope.`, he: `שימוש ב-\`nonlocal\` לקישור מחדש של שם בפונקציה מקיפה במקום ההיקף הגלובלי של המודול.` },
      { en: `Reach for \`global\`/\`nonlocal\` sparingly — passing values in and returning results out is clearer.`, he: `להושיט יד ל-\`global\`/\`nonlocal\` בצמצום — העברת ערכים פנימה והחזרת תוצאות החוצה בהירה יותר.` },
    ],
  },
  {
    number: '16',
    title: { en: 'Functional Programming', he: 'תכנות פונקציונלי' },
    source: '16-FunctionalPro.ipynb',
    points: [
      { en: `Imperative style describes how (explicit loops); functional style describes what.`, he: `סגנון אימפרטיבי מתאר איך (לולאות מפורשות); סגנון פונקציונלי מתאר מה.` },
      { en: `\`lambda\` writes a small anonymous function inline: \`lambda x: x ** 2\`.`, he: `\`lambda\` כותב פונקציה אנונימית קטנה בשורה: \`lambda x: x ** 2\`.` },
      { en: `\`map\` transforms every item, \`filter\` keeps matching items, \`zip\` pairs iterables together.`, he: `\`map\` הופך כל איבר, \`filter\` שומר איברים תואמים, \`zip\` מצמיד איטרבלים יחד.` },
      { en: `\`map\`/\`filter\`/\`zip\` are lazy — wrap in \`list()\` to materialize the result.`, he: `\`map\`/\`filter\`/\`zip\` עצלים — לעטוף ב-\`list()\` כדי לממש את התוצאה.` },
      { en: `\`*\` unpacks a sequence into positional arguments — a recap tying back to args/kwargs.`, he: `\`*\` מפרק רצף לארגומנטים מיקומיים — חזרה שקושרת ל-args/kwargs.` },
    ],
  },
  {
    number: '17',
    title: { en: 'Unpacking, Decorators & Exception Handling', he: 'פירוק, דקורטורים, וטיפול בחריגות' },
    source: '17-unpack_deco_exceptions.ipynb',
    points: [
      { en: `Unpacking: \`*\` unpacks a list into positional args for a function call (\`add(*values)\`); \`[*list1, *list2]\` merges lists (more flexible than \`+\`); \`**dict\` unpacks a dict as keyword arguments (\`greet(**person)\`); \`{**dict1, **dict2}\` merges dicts; extended unpacking \`first, *middle, last = numbers\`.`, he: `פירוק: \`*\` מפרק רשימה לארגומנטים מיקומיים בקריאה לפונקציה (\`add(*values)\`); \`[*list1, *list2]\` ממזג רשימות (גמיש יותר מ-\`+\`); \`**dict\` מפרק מילון כארגומנטים במילות מפתח (\`greet(**person)\`); \`{**dict1, **dict2}\` ממזג מילונים; פירוק מורחב \`first, *middle, last = numbers\`.` },
      { en: `Decorators: \`@decorator_name\` wraps a function to extend its behavior; a decorator is itself a function returning an inner \`wrapper\` that calls the original; generic decorators use \`def wrapper(*args, **kwargs):\` to work with any function signature — demonstrated for logging, timing (\`time.time()\` before/after), and error-catching wrappers.`, he: `דקורטורים: \`@decorator_name\` עוטף פונקציה כדי להרחיב את ההתנהגות שלה; דקורטור הוא בעצמו פונקציה שמחזירה \`wrapper\` פנימי שקורא למקורית; דקורטורים גנריים משתמשים ב-\`def wrapper(*args, **kwargs):\` כדי לעבוד עם כל חתימת פונקציה — הודגם עבור לוגים, מדידת זמן (\`time.time()\` לפני/אחרי), ועטיפות תופסות-שגיאות.` },
      { en: `Exception handling: \`try\` / \`except SpecificError:\` / \`finally:\` (finally always runs, error or not); multiple \`except\` blocks can catch different error types (\`ValueError\`, \`ZeroDivisionError\`, \`TypeError\`) separately; \`raise ValueError("message")\` to raise manually; custom exceptions via \`class MyError(Exception): pass\`.`, he: `טיפול בחריגות: \`try\` / \`except SpecificError:\` / \`finally:\` (finally תמיד רץ, עם או בלי שגיאה); כמה בלוקי \`except\` יכולים לתפוס סוגי שגיאה שונים (\`ValueError\`, \`ZeroDivisionError\`, \`TypeError\`) בנפרד; \`raise ValueError("message")\` להעלאה ידנית; חריגות מותאמות אישית עם \`class MyError(Exception): pass\`.` },
    ],
  },
  {
    number: '18',
    title: { en: 'Object-Oriented Programming — Part 1', he: 'תכנות מונחה-עצמים — חלק 1' },
    source: '18-OOP.ipynb',
    points: [
      { en: `Class basics: \`class Car:\` with \`__init__(self, ...)\` to set instance attributes; methods are defined inside the class.`, he: `יסודות מחלקה: \`class Car:\` עם \`__init__(self, ...)\` להגדרת תכונות מופע; מתודות מוגדרות בתוך המחלקה.` },
      { en: `\`self\` refers to the instance — written in the method definition, but passed automatically by Python when the method is called.`, he: `\`self\` מתייחס למופע — נכתב בהגדרת המתודה, אבל מועבר אוטומטית על ידי פייתון כשהמתודה נקראת.` },
      { en: `Attributes: default values set in \`__init__\` (e.g. \`self.odometer_reading = 0\`); validation logic inside methods (e.g. rejecting a rollback to a lower odometer value).`, he: `תכונות: ערכי ברירת מחדל נקבעים ב-\`__init__\` (למשל \`self.odometer_reading = 0\`); לוגיקת אימות בתוך מתודות (למשל דחיית חזרה לערך מד-אוץ נמוך יותר).` },
      { en: `Class attributes are shared across all instances, versus instance attributes which are unique per object.`, he: `תכונות מחלקה משותפות לכל המופעים, לעומת תכונות מופע שהן ייחודיות לכל אובייקט.` },
      { en: `Inheritance: a child class inherits attributes/methods from a parent (\`class Dog(Animal):\`).`, he: `ירושה: מחלקת ילד יורשת תכונות/מתודות מהורה (\`class Dog(Animal):\`).` },
      { en: `Method overriding: a child class can redefine a parent's method.`, he: `דריסת מתודה: מחלקת ילד יכולה להגדיר מחדש מתודה של ההורה.` },
      { en: `\`super()\` calls the parent class's methods — most commonly \`super().__init__(...)\` to reuse the parent's initializer.`, he: `\`super()\` קורא למתודות של מחלקת ההורה — הכי נפוץ \`super().__init__(...)\` כדי לעשות שימוש חוזר באתחול של ההורה.` },
    ],
  },
  {
    number: '19',
    title: { en: 'Object-Oriented Programming — Part 2', he: 'תכנות מונחה-עצמים — חלק 2' },
    source: '19-OOP2.ipynb',
    points: [
      { en: `Continues the Car class from Part 1 (make/model/year, \`get_descriptive_name()\`, \`read_odometer()\`, \`update_odometer()\`, \`increment_odometer()\`).`, he: `ממשיך את מחלקת Car מחלק 1 (יצרן/דגם/שנה, \`get_descriptive_name()\`, \`read_odometer()\`, \`update_odometer()\`, \`increment_odometer()\`).` },
      { en: `Inheritance walkthrough: \`class Animal:\` with \`__init__(name, age)\` and \`describe()\`; \`class Dog(Animal):\` adds \`dog_color\`, calls \`super().__init__(name, age)\`, and adds its own \`bark()\` method.`, he: `הליכה מודרכת בירושה: \`class Animal:\` עם \`__init__(name, age)\` ו-\`describe()\`; \`class Dog(Animal):\` מוסיף \`dog_color\`, קורא ל-\`super().__init__(name, age)\`, ומוסיף מתודת \`bark()\` משלו.` },
      { en: `Object composition (the notebook's main new idea): a Car class holds an Engine instance as an attribute (\`self.engine = Engine(horse_power)\`), then delegates to it (\`my_car.engine.describe_engine()\`) — built up iteratively, ending with \`Car.__init__\` taking \`horse_power\` with a default value and constructing the Engine internally.`, he: `הרכבת אובייקטים (הרעיון החדש המרכזי של המחברת): מחלקת Car מחזיקה מופע Engine כתכונה (\`self.engine = Engine(horse_power)\`), ואז מאצילה אליו (\`my_car.engine.describe_engine()\`) — נבנה בהדרגה, ומסתיים עם \`Car.__init__\` שמקבל \`horse_power\` עם ברירת מחדל ובונה את ה-Engine פנימית.` },
      { en: `Also demonstrates type coercion inside \`__init__\` (\`self.year = int(year)\`, \`self.horse_power = int(horse_power)\`) to guard against string inputs.`, he: `מדגים גם המרת סוג בתוך \`__init__\` (\`self.year = int(year)\`, \`self.horse_power = int(horse_power)\`) כדי להתגונן מפני קלט מחרוזתי.` },
    ],
  },
];

// Every non-Python language or format the course actually touched, sourced from the same
// card decks as the rest of the site (see content/cards/session{N}.ts) — not generic
// external documentation. Each section's note states honestly how much ground was covered.
export const otherLanguages: SyntaxLanguageSection[] = [
  {
    id: 'sql',
    language: { en: 'SQL — via SQLite', he: 'SQL — דרך SQLite' },
    note: {
      en: `Session 15 taught SQL specifically through SQLite — no MySQL or PostgreSQL was covered, so what follows is SQLite's dialect, not a generic SQL reference.`,
      he: `מפגש 15 לימד SQL ספציפית דרך SQLite — MySQL או PostgreSQL לא כוסו, אז מה שבא בהמשך הוא הדיאלקט של SQLite, לא מדריך SQL כללי.`,
    },
    topics: [
      {
        number: 'sql-01',
        title: { en: 'Reading a Query — SELECT / FROM / WHERE', he: 'קריאת שאילתה — SELECT / FROM / WHERE' },
        source: 'Session 15 · Cards 01, 09',
        points: [
          { en: `A full query reads as a sentence: \`SELECT columns FROM table WHERE condition\` — recognizable from the English words alone, before any formal rule is taught.`, he: `שאילתה מלאה נקראת כמשפט: \`SELECT columns FROM table WHERE condition\` — ניתנת לזיהוי מהמילים באנגלית בלבד, לפני שנלמד כלל פורמלי אחד.` },
          { en: `Written order is fixed syntax and isn't the same as evaluation order — the engine conceptually resolves \`FROM\` first, then \`WHERE\`, and only at the end decides which columns \`SELECT\` displays.`, he: `סדר הכתיבה הוא תחביר קבוע והוא לא אותו דבר כמו סדר ההערכה — המנוע מבחינה מושגית פותר קודם \`FROM\`, אחר כך \`WHERE\`, ורק בסוף מחליט אילו עמודות \`SELECT\` מציגה.` },
          { en: `\`CREATE\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` are the four statements that build and change a table — \`CREATE TABLE ... (...)\`, \`INSERT INTO table VALUES (...)\`, \`UPDATE table SET col = value WHERE ...\`, \`DELETE FROM table WHERE ...\`.`, he: `\`CREATE\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` הן ארבע ההוראות שבונות ומשנות טבלה — \`CREATE TABLE ... (...)\`, \`INSERT INTO table VALUES (...)\`, \`UPDATE table SET col = value WHERE ...\`, \`DELETE FROM table WHERE ...\`.` },
        ],
        keyTakeaway: {
          en: `Most SQL you'll meet will be agent-generated — the goal isn't fluent recall from memory, it's never feeling panic when you have to check a query someone else wrote.`,
          he: `רוב ה-SQL שתפגשי יהיה מיוצר על ידי סוכן — המטרה היא לא שטף מהזיכרון, היא לעולם לא להרגיש פאניקה כשצריך לבדוק שאילתה שמישהו אחר כתב.`,
        },
      },
      {
        number: 'sql-02',
        title: { en: 'sqlite3 in Python — Connect, Cursor, Execute, Commit, Close', he: 'sqlite3 בפייתון — Connect, Cursor, Execute, Commit, Close' },
        source: 'Session 15 · Card 03',
        points: [
          { en: `\`sqlite3.connect('file.db')\` creates a brand-new empty database if the file doesn't exist yet, or reconnects to the one already there.`, he: `\`sqlite3.connect('file.db')\` יוצרת בסיס נתונים חדש וריק אם הקובץ עוד לא קיים, או מתחברת מחדש לזה שכבר קיים.` },
          { en: `A \`cursor\`, pulled from that connection (\`conn.cursor()\`), is the object that actually carries SQL commands back and forth via \`cursor.execute('...')\`.`, he: `\`cursor\`, שנשלף מהחיבור (\`conn.cursor()\`), הוא האובייקט שבפועל נושא פקודות SQL הלוך ושוב דרך \`cursor.execute('...')\`.` },
          { en: `\`conn.commit()\` is a separate, required step — running \`CREATE TABLE\` or \`INSERT\` only changes an in-progress state until commit actually saves it to the file.`, he: `\`conn.commit()\` הוא שלב נפרד ונדרש — הרצת \`CREATE TABLE\` או \`INSERT\` משנה רק מצב באמצע תהליך עד ש-commit באמת שומר אותו לקובץ.` },
          { en: `\`with sqlite3.connect('file.db') as conn:\` closes the connection automatically at the end of the block — the same open-write-close discipline as a plain text file.`, he: `\`with sqlite3.connect('file.db') as conn:\` סוגרת את החיבור אוטומטית בסוף הבלוק — אותה משמעת פתח-כתוב-סגור כמו קובץ טקסט רגיל.` },
        ],
      },
      {
        number: 'sql-03',
        title: { en: 'Primary Keys, Foreign Keys & Normalization', he: 'מפתחות ראשיים, מפתחות זרים ונרמול' },
        source: 'Session 15 · Cards 04, 05, 08',
        points: [
          { en: `A foreign key value points to another table's row by its \`id\` — not to a final answer. \`address_id = 2\` means "the address row whose own \`id\` is 2," and that row's \`city_id\` is what actually names the city; skipping a hop and matching digits by eye is how a whole class gets it wrong.`, he: `ערך מפתח זר מצביע על שורה בטבלה אחרת לפי ה-\`id\` שלה — לא על תשובה סופית. \`address_id = 2\` אומר "שורת הכתובת שה-\`id\` שלה עצמה הוא 2," ועמודת \`city_id\` של אותה שורה היא זו שבאמת קובעת את העיר; לדלג על קפיצה ולהתאים ספרות במבט זו הדרך שכיתה שלמה טועה.` },
          { en: `Splitting repeated data into its own small table, referenced by a foreign key, is normalization — a typo repeated across 200 rows needs 200 fixes in one big table, but exactly one fix once it's normalized.`, he: `פיצול נתונים חוזרים לטבלה קטנה משלהם, מופנית אליה במפתח זר, הוא נרמול — טעות הקלדה שחוזרת ב-200 שורות דורשת 200 תיקונים בטבלה גדולה אחת, אבל בדיוק תיקון אחד אחרי שנרמל.` },
          { en: `Check a generated \`CREATE TABLE\` statement's column definitions, not just its table names — whether \`id\` is marked primary key and set to auto-increment, and whether each foreign key references the right table and column.`, he: `בודקים את הגדרות העמודות של הצהרת \`CREATE TABLE\` שנוצרה, לא רק את שמות הטבלאות — האם \`id\` מסומן כמפתח ראשי ומוגדר להעלות את עצמו אוטומטית, והאם כל מפתח זר מפנה לטבלה ולעמודה הנכונות.` },
        ],
      },
      {
        number: 'sql-04',
        title: { en: 'A Duplicate-Insert Gotcha', he: 'מלכודת הכנסה כפולה' },
        source: 'Session 15 · Card 06',
        points: [
          { en: `SQLite has no memory of "this insert already ran" — re-running a cell that inserts rows creates a brand-new, independent set of rows every single time, with no error.`, he: `ל-SQLite אין זיכרון של "ההכנסה הזו כבר רצה" — הרצה חוזרת של תא שמכניס שורות יוצרת סט חדש ועצמאי לגמרי של שורות בכל פעם, בלי שגיאה.` },
          { en: `An auto-incrementing primary key happily hands out a fresh ID to every duplicate, so the failure shows up as extra rows, not as a crash.`, he: `מפתח ראשי שמעלה את עצמו אוטומטית מוסר בשמחה מזהה טרי לכל כפילות, אז הכשל מופיע כשורות נוספות, לא כקריסה.` },
        ],
      },
    ],
  },
  {
    id: 'cli',
    language: { en: 'Command Line (Terminal)', he: 'שורת פקודה (טרמינל)' },
    note: {
      en: `Session 7 introduced the terminal as the room every AI coding agent actually works in — the goal stated explicitly was recognition, not memorizing a full command vocabulary. The first three topics below now draw on Dr. Zuari's own CLI reference deck (attached below) rather than just the card summary, so the vocabulary runs a bit deeper than "the handful of commands the course actually used" — everything past that is still scoped to what the course itself demonstrated.`,
      he: `מפגש 7 הציג את הטרמינל כחדר שבו כל סוכן קידוד AI באמת עובד — המטרה שהוצהרה במפורש הייתה זיהוי, לא שינון אוצר מילים מלא של פקודות. שלושת הנושאים הראשונים למטה נשענים כעת על חוברת העזר של ד"ר זוארי עצמו ל-CLI (מצורפת למטה) ולא רק על תקציר הכרטיס, כך שאוצר המילים עמוק מעט יותר מ"הפקודות הבודדות שהקורס בפועל השתמש בהן" — כל מה שאחרי זה עדיין תחום למה שהקורס עצמו הדגים.`,
    },
    topics: [
      {
        number: 'cli-01',
        title: { en: 'Terminal, Shell & Getting Started', he: 'טרמינל, מעטפת, ותחילת עבודה' },
        source: 'Dr. Zuari · CLI Reference Deck',
        points: [
          { en: `Terminal — the program that opens a text window for typing commands (Terminal on Mac, Command Prompt on Windows); Shell — the interpreter that actually runs what you type (Bash, Zsh, PowerShell), used interchangeably with "terminal" and "command line" in practice.`, he: `טרמינל — התוכנה שפותחת חלון טקסט להקלדת פקודות (Terminal ב-Mac, Command Prompt ב-Windows); מעטפת (Shell) — המתרגם שבפועל מריץ את מה שמקלידים (Bash, Zsh, PowerShell), משמש לסירוגין עם "טרמינל" ו"שורת פקודה" בפועל.` },
          { en: `macOS/Linux shell — Bash or Zsh; Windows shell — PowerShell (supports many Unix commands) or the older CMD; Path separator — \`/\` on Unix vs \`\\\` on Windows; Home directory — \`~\` on Unix vs \`%HOMEPATH%\` on Windows; WSL — lets a Windows machine run a full Linux shell when a tool specifically needs one.`, he: `מעטפת ב-macOS/Linux — Bash או Zsh; מעטפת ב-Windows — PowerShell (תומך בהרבה פקודות Unix) או ה-CMD הישן יותר; מפריד נתיבים — \`/\` ב-Unix מול \`\\\` ב-Windows; תיקיית הבית — \`~\` ב-Unix מול \`%HOMEPATH%\` ב-Windows; WSL — מאפשר למחשב Windows להריץ מעטפת לינוקס מלאה כשכלי מסוים דורש זאת.` },
          { en: `Bash — more widely compatible, the standard for scripts/servers, configured via \`~/.bashrc\`; Zsh — macOS default since Catalina, more customizable (themes, plugins, better autocomplete) but not perfectly Bash-compatible, configured via \`~/.zshrc\`; Recommendation — Bash for portable scripts, Zsh for a nicer daily personal terminal.`, he: `Bash — תואם באופן רחב יותר, התקן לסקריפטים/שרתים, מוגדר דרך \`~/.bashrc\`; Zsh — ברירת המחדל ב-macOS מאז Catalina, ניתן להתאמה אישית יותר (ערכות נושא, תוספים, השלמה אוטומטית טובה יותר) אך לא תואם Bash באופן מושלם, מוגדר דרך \`~/.zshrc\`; המלצה — Bash לסקריפטים ניידים, Zsh לטרמינל אישי יומיומי נעים יותר.` },
          { en: `Open on Windows — Win+R then type \`cmd\`, or search "PowerShell"; Open on Mac — Applications → Utilities → Terminal, or Cmd+Space then type "Terminal"; Prompt — \`$\` on Unix, \`>\` on Windows, signals the shell is ready for input.`, he: `פתיחה ב-Windows — Win+R ואז הקלדת \`cmd\`, או חיפוש "PowerShell"; פתיחה ב-Mac — Applications ← Utilities ← Terminal, או Cmd+Space ואז הקלדת "Terminal"; פרומפט — \`$\` ב-Unix, \`>\` ב-Windows, מסמן שהמעטפת מוכנה לקלט.` },
          { en: `\`Tab\` — autocompletes file/folder names; \`↑\` / \`↓\` — scroll through command history; \`Ctrl+C\` — cancels a running command; \`clear\` (Mac/PowerShell) or \`cls\` (Command Prompt) — wipes the screen without affecting anything already run.`, he: `\`Tab\` — משלים אוטומטית שמות קבצים/תיקיות; \`↑\` / \`↓\` — גוללים בהיסטוריית הפקודות; \`Ctrl+C\` — מבטל פקודה רצה; \`clear\` (Mac/PowerShell) או \`cls\` (Command Prompt) — מנקה את המסך בלי להשפיע על שום דבר שכבר רץ.` },
        ],
        keyTakeaway: {
          en: `The terminal has no icons to click — every action is a sentence you type and mean.`,
          he: `לטרמינל אין אייקונים ללחוץ עליהם — כל פעולה היא משפט שמקלידים ומתכוונים אליו.`,
        },
      },
      {
        number: 'cli-02',
        title: { en: 'Navigating Files & Environment Variables', he: 'ניווט בקבצים ומשתני סביבה' },
        source: 'Dr. Zuari · CLI Reference Deck',
        points: [
          { en: `\`pwd\` prints the current directory (Unix); on Windows, \`cd\` with no arguments does the same. \`ls\` (Unix) / \`dir\` (Windows) lists everything in the current folder.`, he: `\`pwd\` מדפיסה את התיקייה הנוכחית (Unix); ב-Windows, \`cd\` בלי ארגומנטים עושה את אותו הדבר. \`ls\` (Unix) / \`dir\` (Windows) מציגה רשימה של הכול בתיקייה הנוכחית.` },
          { en: `\`cd <folder>\` moves into a folder — \`cd Documents\` enters a subfolder, \`cd Documents/my_project\` enters a nested one in one step. \`cd ..\` goes up one level (\`cd ../..\` goes up two); \`cd ~\` jumps straight to the home directory (Unix). Press \`Tab\` to autocomplete folder names, and \`pwd\` to confirm where you are.`, he: `\`cd <folder>\` עוברת לתוך תיקייה — \`cd Documents\` נכנסת לתת-תיקייה, \`cd Documents/my_project\` נכנסת לתיקייה מקוננת בצעד אחד. \`cd ..\` עולה רמה אחת (\`cd ../..\` עולה שתי רמות); \`cd ~\` קופצת ישר לתיקיית הבית (Unix). לוחצים \`Tab\` להשלמה אוטומטית של שמות תיקיות, ו-\`pwd\` לאישור המיקום הנוכחי.` },
          { en: `Environment variables are key-value pairs that store config (paths, API keys) for programs. Set one for the current session: \`export MY_KEY="abc123"\` (Mac/Linux), \`set MY_KEY=abc123\` (Windows CMD), or \`$env:MY_KEY = "abc123"\` (Windows PowerShell).`, he: `משתני סביבה הם זוגות מפתח-ערך ששומרים קונפיגורציה (נתיבים, מפתחות API) עבור תוכניות. הגדרת אחד לסשן הנוכחי: \`export MY_KEY="abc123"\` (Mac/Linux), \`set MY_KEY=abc123\` (Windows CMD), או \`$env:MY_KEY = "abc123"\` (Windows PowerShell).` },
          { en: `In Python, \`os.environ['MY_KEY']\` reads an environment variable; \`os.environ.get('MY_KEY', 'default')\` is the safer form, since it falls back to a default instead of raising an error when the key is missing.`, he: `בפייתון, \`os.environ['MY_KEY']\` קוראת משתנה סביבה; \`os.environ.get('MY_KEY', 'default')\` היא הצורה הבטוחה יותר, כי היא נופלת לברירת מחדל במקום לזרוק שגיאה כשהמפתח חסר.` },
        ],
      },
      {
        number: 'cli-03',
        title: { en: 'Essential CLI Commands', he: 'פקודות CLI חיוניות' },
        source: 'Dr. Zuari · CLI Reference Deck · Session 15 · Card 07',
        points: [
          { en: `\`mkdir <name>\` creates a new directory; \`cp\` copies a file, \`mv\` moves or renames one; \`rm\` deletes a file (Unix).`, he: `\`mkdir <name>\` יוצרת תיקייה חדשה; \`cp\` מעתיקה קובץ, \`mv\` מזיזה או משנה שם לקובץ; \`rm\` מוחקת קובץ (Unix).` },
          { en: `\`cat <file>\` prints a file's contents straight to the terminal; \`echo $VAR\` prints the value of an environment variable (Unix); \`python <file.py>\` runs a Python script directly from the terminal.`, he: `\`cat <file>\` מדפיסה את תוכן הקובץ ישירות לטרמינל; \`echo $VAR\` מדפיסה את ערך משתנה הסביבה (Unix); \`python <file.py>\` מריצה סקריפט פייתון ישירות מהטרמינל.` },
          { en: `Opening a terminal inside a project folder and typing \`code .\` opens that exact folder in the editor directly — a small shortcut worth learning early, instead of manually navigating the editor's own open-project menu.`, he: `פתיחת טרמינל בתוך תיקיית פרויקט והקלדת \`code .\` פותחת את אותה תיקייה בדיוק בעורך ישירות — קיצור קטן שכדאי ללמוד מוקדם, במקום לנווט ידנית דרך תפריט פתיחת-הפרויקט של העורך.` },
        ],
      },
      {
        number: 'cli-04',
        title: { en: 'Git & GitHub — the CLI Equivalent of the Course\'s GitHub Desktop Workflow', he: 'Git ו-GitHub — המקבילה בשורת הפקודה לתהליך GitHub Desktop של הקורס' },
        source: 'Sessions 7–8 · "git and github" source folder',
        points: [
          { en: `The course itself demonstrated stage → commit → push through GitHub Desktop's GUI, not raw CLI commands — these are the equivalent terminal commands for the exact same three-step rhythm: \`git add <file>\` (stage), \`git commit -m "message"\` (commit — never skip the message), \`git push\` (sync to the cloud copy).`, he: `הקורס עצמו הדגים stage ← commit ← push דרך הממשק הגרפי של GitHub Desktop, לא פקודות CLI גולמיות — אלה פקודות הטרמינל המקבילות לאותו קצב תלת-שלבי בדיוק: \`git add <file>\` (stage), \`git commit -m "message"\` (commit — לעולם לא לדלג על ההודעה), \`git push\` (סנכרון לעותק הענן).` },
          { en: `\`git init\` starts version tracking in a folder — the CLI equivalent of GitHub Desktop's "create a repository". \`git clone <url>\` copies an existing repository, including its full history, onto your machine.`, he: `\`git init\` מתחילה מעקב גרסאות בתיקייה — המקבילה ב-CLI ל"create a repository" של GitHub Desktop. \`git clone <url>\` מעתיקה repository קיים, כולל כל ההיסטוריה שלו, למחשב שלך.` },
          { en: `\`git status\` shows which files are staged, changed, or untracked — the CLI view of what GitHub Desktop's changed-files panel shows visually.`, he: `\`git status\` מציגה אילו קבצים ב-staging, השתנו, או לא במעקב — התצוגה ב-CLI של מה שפאנל הקבצים-שהשתנו של GitHub Desktop מציג ויזואלית.` },
          { en: `\`git branch <name>\` creates a branch to isolate risky work; \`git checkout <branch>\` (or \`git switch <branch>\`) moves between branches; \`git merge <branch>\` brings a branch's changes into the current one — only after it's proven safe.`, he: `\`git branch <name>\` יוצרת ענף כדי לבודד עבודה מסוכנת; \`git checkout <branch>\` (או \`git switch <branch>\`) עוברת בין ענפים; \`git merge <branch>\` מכניסה את השינויים של ענף לתוך הנוכחי — רק אחרי שהוכח שהוא בטוח.` },
          { en: `\`git pull\` fetches and merges the latest changes from the cloud copy — the opposite direction of \`git push\`. \`git log\` and \`git diff\` are the CLI ways to read a version's history and read exactly what changed in it.`, he: `\`git pull\` מושכת וממזגת את השינויים האחרונים מהעותק בענן — הכיוון ההפוך מ-\`git push\`. \`git log\` ו-\`git diff\` הן הדרכים ב-CLI לקרוא את ההיסטוריה של גרסה ולקרוא בדיוק מה השתנה בה.` },
        ],
        keyTakeaway: {
          en: `Same discipline the course taught through GitHub Desktop's buttons — stage deliberately, commit with a real message, push only what's ready — just typed instead of clicked.`,
          he: `אותה משמעת שהקורס לימד דרך הכפתורים של GitHub Desktop — לעשות stage בכוונה, commit עם הודעה אמיתית, push רק למה שמוכן — פשוט מוקלדת במקום נלחצת.`,
        },
      },
      {
        number: 'cli-05',
        title: { en: 'Terminology & the Fork Workflow, in the Instructor\'s Own Words', he: 'מינוח וזרימת ה-Fork, במילותיו של המרצה' },
        source: 'Dr. Zuari · "02-Git and Github.pdf"',
        points: [
          { en: `Staged Changes — "preparing specific changes to be included in the next commit, like choosing which edits you're ready to save." Commit — "a saved snapshot of your changes in a project, like pressing 'save' with a note on what you updated."`, he: `Staged Changes — "הכנת שינויים ספציפיים להכללה בקומיט הבא, כמו בחירת אילו עריכות מוכנות לשמירה." Commit — "צילום מצב שמור של השינויים בפרויקט, כמו לחיצה על 'שמור' עם הערה על מה עודכן."` },
          { en: `Push — "sending your saved changes (commits) from your computer to the online repository on GitHub so others can see them." Pull — "downloading the latest changes from the online repository on GitHub to keep your own copy up-to-date."`, he: `Push — "שליחת השינויים השמורים (commits) מהמחשב שלך למאגר המקוון ב-GitHub כדי שאחרים יוכלו לראות אותם." Pull — "הורדת השינויים העדכניים ביותר מהמאגר המקוון ב-GitHub כדי לשמור על העותק שלך מעודכן."` },
          { en: `Fork — "creating your own copy of someone else's project on GitHub so you can make changes without affecting the original." Sync Fork — "updating your copy of someone else's code to reflect any recent updates."`, he: `Fork — "יצירת עותק משלך לפרויקט של מישהו אחר ב-GitHub כדי שתוכלי לבצע שינויים בלי להשפיע על המקור." Sync Fork — "עדכון העותק שלך של הקוד של מישהו אחר כך שישקף עדכונים אחרונים."` },
          { en: `The instructor's "Complete Workflow" diagram, solo version: Code → Add → Staged Changes → Committed Changes → Push → your GitHub repo. The collaboration version adds a loop: Fork someone else's repo → your own GitHub repo → clone/pull to your local machine → code, add, commit, push back to your fork → Sync Fork to catch up with the original.`, he: `תרשים "זרימת העבודה המלאה" של המרצה, גרסה עצמאית: Code ← Add ← Staged Changes ← Committed Changes ← Push ← מאגר ה-GitHub שלך. גרסת שיתוף הפעולה מוסיפה לולאה: Fork למאגר של מישהו אחר ← מאגר ה-GitHub שלך ← clone/pull למחשב המקומי ← קוד, add, commit, push בחזרה ל-fork שלך ← Sync Fork כדי להדביק את המקור.` },
        ],
        keyTakeaway: {
          en: `Fork + Sync Fork is the CLI/GitHub-native version of "make your own copy, keep it caught up" — the same instinct as \`git clone\` plus repeated \`git pull\`, but for someone else's repository instead of your own.`,
          he: `Fork + Sync Fork היא הגרסה הילידית של CLI/GitHub ל"תעשי עותק משלך, שמרי עליו מעודכן" — אותה אינטואיציה כמו \`git clone\` ועוד \`git pull\` חוזר, אבל עבור מאגר של מישהו אחר במקום שלך.`,
        },
      },
    ],
    attachments: [
      { label: { en: 'CLI Reference (PDF)', he: 'מדריך CLI (PDF)' }, url: 'https://drive.google.com/file/d/1EkQsHNes19VezDPPcccWPNnQ2oS6H4gR/view' },
      { label: { en: 'Git & GitHub Workshop (PDF)', he: 'סדנת Git ו-GitHub (PDF)' }, url: 'https://drive.google.com/file/d/1Txqv-B0hoslh9GweUcAVApqHzO8QQqEP/view' },
      { label: { en: 'Git Workflow Exercise (HTML)', he: 'תרגיל זרימת עבודה ב-Git (HTML)' }, url: 'https://drive.google.com/file/d/1DykbLRDZIfYebpF1z1xLHqY2u1Ppp7qc/view' },
    ],
  },
  {
    id: 'json',
    language: { en: 'JSON', he: 'JSON' },
    note: {
      en: `JSON was never taught directly as its own topic — no notebook or card walked through \`json.load\`/\`json.dumps\` or JSON syntax rules. It showed up only in passing, in Session 2's n8n material, as the format underneath two real things — kept deliberately thin here rather than padded with generic JSON documentation.`,
      he: `JSON מעולם לא נלמד ישירות כנושא בפני עצמו — אף מחברת או כרטיס לא עברו על \`json.load\`/\`json.dumps\` או כללי תחביר JSON. הוא הופיע רק דרך אגב, בחומר ה-n8n של מפגש 2, כפורמט שמתחת לשני דברים אמיתיים — נשאר כאן דק בכוונה במקום מרופד בתיעוד JSON כללי.`,
    },
    topics: [
      {
        number: 'json-01',
        title: { en: 'Where JSON Actually Showed Up', he: 'איפה JSON בעצם הופיע' },
        source: 'Session 2 · n8n',
        points: [
          { en: `A service account — a robot account used for server-to-server integrations — authenticates with its own JSON credentials file, distinct from an OAuth login or a plain API-key string.`, he: `חשבון שירות — חשבון רובוט המשמש לאינטגרציות שרת-לשרת — מתאמת עם קובץ אישורי JSON משלו, שונה מהתחברות OAuth או ממחרוזת מפתח API פשוטה.` },
          { en: `Data passed between n8n nodes is structured, key-value data — when a node produces output, the next node references any field from it by name (via drag-drop or expression syntax) rather than by copying values manually.`, he: `נתונים שעוברים בין צמתי n8n הם נתוני מפתח-ערך מובנים — כשצומת מייצר פלט, הצומת הבא מפנה לכל שדה ממנו לפי שם (דרך גרירה-שחרור או תחביר ביטוי) במקום להעתיק ערכים ידנית.` },
        ],
      },
    ],
  },
  {
    id: 'python-quickref',
    language: { en: 'Python Basics — Ester Edition', he: 'יסודות פייתון — מהדורת אסתר' },
    note: {
      en: `A literal term-for-term recreation of Ester's own Python command-reference table (Module 3's Practice Companion PDF) — every pairing below is the same command and label the sheet itself lists, not a paraphrase. Where the source PDF's own multi-column layout made a pairing genuinely ambiguous after extraction, the command shown is the one that actually matches its label, verified against real Python behavior rather than raw column position.`,
      he: `שחזור מילולי, מונח-מול-מונח, של דף עזר הפקודות של אסתר עצמה לפייתון (PDF ממלווה התרגול של מודול 3) — כל צמד למטה הוא אותה פקודה ואותה תווית שהדף עצמו מפרט, לא ניסוח מחדש. במקומות שהפריסה הרב-טורית של ה-PDF המקורי הפכה צמד למעורפל ממש לאחר החילוץ, הפקודה שמוצגת היא זו שבאמת תואמת לתווית שלה, מאומתת מול התנהגות אמיתית של פייתון ולא לפי מיקום הטור הגולמי.`,
    },
    topics: [
      {
        number: 'qref-01',
        title: { en: 'Type Conversion & Basic Structures', he: 'המרת טיפוסים ומבנים בסיסיים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`int()\` — convert to whole number`, he: `\`int()\` — המרה למספר שלם` },
          { en: `\`float()\` — convert to decimal`, he: `\`float()\` — המרה לעשרוני` },
          { en: `\`str()\` — convert to string`, he: `\`str()\` — המרה למחרוזת` },
          { en: `\`bool()\` — convert to boolean`, he: `\`bool()\` — המרה לבוליאני` },
          { en: `\`list\`, \`tuple\`, \`dict\`, \`set\` — the four core data structures`, he: `\`list\`, \`tuple\`, \`dict\`, \`set\` — ארבעת מבני הנתונים המרכזיים` },
        ],
      },
      {
        number: 'qref-02',
        title: { en: 'List, Set & Dict Methods', he: 'מתודות של רשימה, קבוצה ומילון' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`list.append()\` — add to the end; \`list.insert()\` — add at a position; \`list.remove()\` — remove an element; \`list.pop()\` — remove & return by index (default last).`, he: `\`list.append()\` — הוספה לסוף; \`list.insert()\` — הוספה במיקום; \`list.remove()\` — הסרת אלמנט; \`list.pop()\` — הוצאה לפי אינדקס (ברירת מחדל: אחרון).` },
          { en: `\`list.sort()\` / \`sorted()\` — sort; \`list.reverse()\` — reverse; \`list.index()\` — find index; \`list.count()\` — count occurrences.`, he: `\`list.sort()\` / \`sorted()\` — מיון; \`list.reverse()\` — היפוך; \`list.index()\` — מציאת אינדקס; \`list.count()\` — ספירה.` },
          { en: `\`set.add()\` — add an element; \`set.remove()\` — remove (errors if missing); \`set.discard()\` — safe removal; \`set.pop()\` — random extraction.`, he: `\`set.add()\` — הוספת אלמנט; \`set.remove()\` — הסרה (שגיאה אם לא נמצא); \`set.discard()\` — הסרה בטוחה; \`set.pop()\` — הוצאה אקראית.` },
          { en: `\`set.union()\` — union; \`set.intersection()\` — intersection; \`set.difference()\` — difference.`, he: `\`set.union()\` — איחוד; \`set.intersection()\` — חיתוך; \`set.difference()\` — הפרש.` },
          { en: `\`dict.get()\` — get a value; \`dict.keys()\` / \`.values()\` / \`.items()\` — keys / values / key-value pairs; \`dict.update()\` — update; \`dict.setdefault()\` — set if missing; \`del dict[key]\` — delete a key.`, he: `\`dict.get()\` — קבלת ערך; \`dict.keys()\` / \`.values()\` / \`.items()\` — מפתחות / ערכים / זוגות מפתח-ערך; \`dict.update()\` — עדכון; \`dict.setdefault()\` — הגדרה אם לא קיים; \`del dict[key]\` — מחיקת מפתח.` },
          { en: `\`len()\` — length, works on all four structures.`, he: `\`len()\` — אורך, עובד על כל ארבעת המבנים.` },
        ],
      },
      {
        number: 'qref-03',
        title: { en: 'Loops & Comprehensions', he: 'לולאות והבנות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`break\` — exit the loop; \`continue\` — skip to next iteration; \`pass\` — empty no-op.`, he: `\`break\` — יציאה מלולאה; \`continue\` — דילוג לאיטרציה הבאה; \`pass\` — פעולה ריקה.` },
          { en: `\`enumerate()\` — index and value together; \`zip()\` — pair iterables together; \`range()\` — number range.`, he: `\`enumerate()\` — אינדקס וערך יחד; \`zip()\` — צימוד איטרבלים יחד; \`range()\` — טווח מספרים.` },
          { en: `\`[x for x in range(10)]\` — list comprehension; \`[x for x in list if condition]\` — with a condition.`, he: `\`[x for x in range(10)]\` — הבנת רשימה (List Comprehension); \`[x for x in list if condition]\` — עם תנאי.` },
          { en: `\`sum()\` — sum; \`str.split()\` — split a string into a list.`, he: `\`sum()\` — סכום; \`str.split()\` — פיצול מחרוזת לרשימה.` },
        ],
      },
      {
        number: 'qref-04',
        title: { en: 'Functions & Scope', he: 'פונקציות והיקף' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`def function_name():\` — define a function; \`return\` — return a value; \`lambda\` — anonymous function.`, he: `\`def function_name():\` — הגדרת פונקציה; \`return\` — החזרת ערך; \`lambda\` — פונקציה אנונימית.` },
          { en: `\`map()\` — apply a function to every item; \`filter()\` — keep matching items; \`input()\` — get user input; \`print()\` — print to screen.`, he: `\`map()\` — הפעלת פונקציה על כל איבר; \`filter()\` — סינון איברים תואמים; \`input()\` — קבלת קלט מהמשתמש; \`print()\` — הדפסה למסך.` },
          { en: `\`global\` — rebind a module-level name from inside a function; \`type()\` — object's type; \`isinstance()\` — check type; \`abs()\` — absolute value; \`round()\` — round a number.`, he: `\`global\` — קישור מחדש של שם ברמת המודול מתוך פונקציה; \`type()\` — סוג האובייקט; \`isinstance()\` — בדיקת סוג; \`abs()\` — ערך מוחלט; \`round()\` — עיגול מספר.` },
        ],
      },
      {
        number: 'qref-05',
        title: { en: 'Operators & Comparisons', he: 'אופרטורים והשוואות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`%\` — remainder (modulo); \`//\` — integer division; \`**\` — exponent.`, he: `\`%\` — שארית (מודולו); \`//\` — חילוק שלם; \`**\` — חזקה.` },
          { en: `\`==\` — equal; \`!=\` — not equal; \`<\`, \`>\`, \`<=\`, \`>=\` — comparisons.`, he: `\`==\` — השוואה; \`!=\` — שונה מ; \`<\`, \`>\`, \`<=\`, \`>=\` — השוואות.` },
          { en: `\`and\`, \`or\`, \`not\`, \`&\`, \`|\` — logical operators.`, he: `\`and\`, \`or\`, \`not\`, \`&\`, \`|\` — אופרטורים לוגיים.` },
        ],
      },
      {
        number: 'qref-06',
        title: { en: 'String Methods', he: 'מתודות מחרוזת' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`str.upper()\` / \`.lower()\` — uppercase / lowercase; \`str.strip()\` — remove whitespace; \`str.replace()\` — replace text.`, he: `\`str.upper()\` / \`.lower()\` — אותיות גדולות / קטנות; \`str.strip()\` — הסרת רווחים; \`str.replace()\` — החלפת טקסט.` },
          { en: `\`str.startswith()\` / \`.endswith()\` — check start/end; \`str.find()\` — find position; \`str.isdigit()\` — is it digits; \`str.join()\` — join into a string.`, he: `\`str.startswith()\` / \`.endswith()\` — בדיקת התחלה/סיום; \`str.find()\` — מציאת מיקום; \`str.isdigit()\` — האם ספרות; \`str.join()\` — חיבור לרשימה למחרוזת.` },
          { en: `\`f"text {variable}"\` — string format (f-string).`, he: `\`f"text {variable}"\` — פורמט מחרוזת (f-string).` },
        ],
      },
      {
        number: 'qref-07',
        title: { en: 'Errors & Exception Handling', he: 'שגיאות וטיפול בחריגות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`try\`, \`except\` — error handling.`, he: `\`try\`, \`except\` — טיפול בשגיאות.` },
          { en: `\`SyntaxError\` — syntax error; \`TypeError\` — type error; \`ValueError\` — value error; \`KeyError\` — missing dict key; \`IndexError\` — index out of range.`, he: `\`SyntaxError\` — שגיאת תחביר; \`TypeError\` — שגיאת סוג; \`ValueError\` — שגיאת ערך; \`KeyError\` — מפתח חסר במילון; \`IndexError\` — אינדקס מחוץ לטווח.` },
          { en: `\`all()\` — true if every item is true; \`any()\` — true if at least one item is true.`, he: `\`all()\` — אמת אם כל האיברים אמת; \`any()\` — אמת אם לפחות איבר אחד אמת.` },
        ],
      },
      {
        number: 'qref-08',
        title: { en: 'Packages & Key Terms', he: 'חבילות ומונחי מפתח' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`pandas\` — files; \`matplotlib\` — graphs; \`seaborn\` — advanced graphs; \`numpy\` — math computations.`, he: `\`pandas\` — קבצים; \`matplotlib\` — גרפים; \`seaborn\` — גרפים מתקדמים; \`numpy\` — חישובים מתמטיים.` },
          { en: `\`sklearn\` — machine learning; \`pytorch\` — deep learning; \`statsmodels\` — statistics; \`Mermaid\` — flowcharts.`, he: `\`sklearn\` — למידת מכונה; \`pytorch\` — למידה עמוקה; \`statsmodels\` — סטטיסטיקה; \`Mermaid\` — תרשימי זרימה.` },
          { en: `\`import wikipedia\` — import the Wikipedia package; \`wikipedia.page()\` — get a page; \`wiki.content\` — page content; \`wikipedia.search()\` — search.`, he: `\`import wikipedia\` — ייבוא חבילת ויקיפדיה; \`wikipedia.page()\` — קבלת דף; \`wiki.content\` — תוכן הדף; \`wikipedia.search()\` — חיפוש.` },
          { en: `Duck Typing — identification by behavior; Mutable vs Immutable — can change vs fixed; Scope — a variable's access range.`, he: `Duck Typing — זיהוי לפי התנהגות; Mutable vs Immutable — ניתן לשינוי מול קבוע; Scope — טווח גישה למשתנה.` },
          { en: `Global Variables / Local Variables — module-level vs function-level names; Default / Keyword / Positional Arguments — the three ways a function receives its arguments.`, he: `Global Variables / Local Variables — שמות ברמת המודול מול רמת הפונקציה; Default / Keyword / Positional Arguments — שלוש הדרכים שפונקציה מקבלת בהן את הארגומנטים שלה.` },
        ],
      },
    ],
    attachments: [
      { label: { en: "Ester's Python Tables — Command Summary (PDF)", he: 'טבלאות פייתון של אסתר — סיכום פקודות (PDF)' }, url: 'https://drive.google.com/file/d/1f7dQoe1BDsQbeezB-dJGjOsBnUX30_7v/view' },
    ],
  },
  {
    id: 'numpy',
    language: { en: 'NumPy — Ester Edition', he: 'NumPy — מהדורת אסתר' },
    note: {
      en: `Used throughout the Data Science module (Sessions 17–21) for array math underneath pandas, but never had its own notebook summary. A literal, term-for-term recreation of the NumPy rows in Ester's own Python command-reference sheet (Module 3's Practice Companion), not the instructor's notebooks.`,
      he: `בשימוש לאורך כל מודול מדעי הנתונים (מפגשים 17–21) לחישובי מערכים מתחת ל-pandas, אך מעולם לא הייתה לו מחברת סיכום משלו. שחזור מילולי, מונח-מול-מונח, של שורות NumPy בדף עזר הפקודות של אסתר עצמה (מלווה התרגול של מודול 3), לא מהמחברות של המרצה.`,
    },
    topics: [
      {
        number: 'numpy-01',
        title: { en: 'Creating & Inspecting Arrays', he: 'יצירת מערכים ובדיקתם' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`np.array()\` — create array from a list.`, he: `\`np.array()\` — יצירת מערך מרשימה.` },
          { en: `\`np.arange()\` — create array of sequential values.`, he: `\`np.arange()\` — יצירת מערך של ערכים עוקבים.` },
          { en: `\`array.shape\` — array shape (rows, columns).`, he: `\`array.shape\` — צורת המערך (שורות, עמודות).` },
          { en: `\`np.zeros()\` — array filled with zeros; \`np.ones()\` — array filled with ones.`, he: `\`np.zeros()\` — מערך מלא באפסים; \`np.ones()\` — מערך מלא באחדים.` },
          { en: `\`array[1:4]\` — sub-slicing; \`array.dtype\` — data type in the array.`, he: `\`array[1:4]\` — חיתוך תת-מערך; \`array.dtype\` — סוג הנתונים במערך.` },
        ],
      },
      {
        number: 'numpy-02',
        title: { en: 'Filtering & Statistics', he: 'סינון וסטטיסטיקה' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`array > 5\` — creates a boolean array (logical operation).`, he: `\`array > 5\` — יצירת מערך בוליאני (פעולה לוגית).` },
          { en: `\`array[array > 5]\` — filtering in practice.`, he: `\`array[array > 5]\` — סינון בפועל.` },
          { en: `\`np.where(condition, A, B)\` — conditional logical operation.`, he: `\`np.where(condition, A, B)\` — פעולה לוגית מותנית.` },
          { en: `\`np.sum()\` — sum of the array's values; \`np.mean()\` — average of the array's values; \`np.max()\` — maximum of the array's values; \`np.sort()\` — sort the array.`, he: `\`np.sum()\` — סכום ערכי המערך; \`np.mean()\` — ממוצע ערכי המערך; \`np.max()\` — מקסימום ערכי המערך; \`np.sort()\` — מיון המערך.` },
        ],
        keyTakeaway: {
          en: `NumPy's boolean-array filtering (\`array[condition]\`) is the same idea pandas' \`df[df['col'] > 10]\` builds on — one array operation instead of a loop.`,
          he: `סינון במערך בוליאני של NumPy (\`array[condition]\`) הוא אותו רעיון ש-\`df[df['col'] > 10]\` של pandas בנוי עליו — פעולת מערך אחת במקום לולאה.`,
        },
      },
    ],
    attachments: [
      { label: { en: "Ester's Python Tables — Command Summary (PDF)", he: 'טבלאות פייתון של אסתר — סיכום פקודות (PDF)' }, url: 'https://drive.google.com/file/d/1f7dQoe1BDsQbeezB-dJGjOsBnUX30_7v/view' },
    ],
  },
  {
    id: 'pandas',
    language: { en: 'Pandas — Ester Edition', he: 'Pandas — מהדורת אסתר' },
    note: {
      en: `The workhorse of every Session 17–21 exercise — reading CSVs, cleaning data, grouping and aggregating it. A literal, term-for-term recreation of the Pandas rows in Ester's own Python command-reference sheet (Module 3's Practice Companion), not a course notebook summary.`,
      he: `סוס העבודה של כל תרגיל במפגשים 17–21 — קריאת CSV, ניקוי נתונים, קיבוץ וצבירה. שחזור מילולי, מונח-מול-מונח, של שורות Pandas בדף עזר הפקודות של אסתר עצמה (מלווה התרגול של מודול 3), לא מסיכום מחברת קורס.`,
    },
    topics: [
      {
        number: 'pandas-01',
        title: { en: 'File I/O', he: 'קלט/פלט קבצים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`pd.read_csv()\` — read a CSV file; \`pd.read_excel()\` — read an Excel file; \`pd.read_json()\` — read a JSON file.`, he: `\`pd.read_csv()\` — קריאת קובץ CSV; \`pd.read_excel()\` — קריאת קובץ Excel; \`pd.read_json()\` — קריאת קובץ JSON.` },
          { en: `\`df.to_csv()\` — save as CSV; \`df.to_excel()\` — save as Excel; \`df.to_json()\` — save as JSON; \`df.to_sql()\` — save to a database.`, he: `\`df.to_csv()\` — שמירה כ-CSV; \`df.to_excel()\` — שמירה כ-Excel; \`df.to_json()\` — שמירה כ-JSON; \`df.to_sql()\` — שמירה למסד נתונים.` },
          { en: `Plain file handling: \`open()\` — open a file; \`file.read()\` — read the whole file; \`file.readline()\` — read one line; \`file.readlines()\` — read all lines; \`file.write()\` — write to a file; \`file.close()\` — close a file; \`with open() as file:\` — safe open.`, he: `טיפול בקבצים רגילים: \`open()\` — פתיחת קובץ; \`file.read()\` — קריאת כל הקובץ; \`file.readline()\` — קריאת שורה; \`file.readlines()\` — קריאת כל השורות; \`file.write()\` — כתיבה לקובץ; \`file.close()\` — סגירת קובץ; \`with open() as file:\` — פתיחה בטוחה.` },
        ],
      },
      {
        number: 'pandas-02',
        title: { en: 'Inspecting Data', he: 'בדיקת נתונים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df.head()\` — first five rows; \`df.tail()\` — last five rows; \`df.info()\` — info on table structure; \`df.describe()\` — descriptive statistics.`, he: `\`df.head()\` — חמש השורות הראשונות; \`df.tail()\` — חמש השורות האחרונות; \`df.info()\` — מידע על מבנה הטבלה; \`df.describe()\` — סטטיסטיקה תיאורית.` },
          { en: `\`df.shape\` — table dimensions; \`df.columns\` — column names; \`df.index\` — the index; \`df.dtypes\` — data types.`, he: `\`df.shape\` — מימדי הטבלה; \`df.columns\` — שמות העמודות; \`df.index\` — האינדקס; \`df.dtypes\` — טיפוסי הנתונים.` },
          { en: `\`df.nunique()\` — number of unique values; \`df.corr()\` — correlation matrix; \`df.cov()\` — covariance matrix.`, he: `\`df.nunique()\` — מספר ערכים ייחודיים; \`df.corr()\` — מטריצת מתאם; \`df.cov()\` — מטריצת קווריאנס.` },
        ],
      },
      {
        number: 'pandas-03',
        title: { en: 'Selecting, Filtering & Sorting', he: 'בחירה, סינון ומיון' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df['col']\` / \`df.col\` — column access; \`df.iloc[row, col]\` — access by position; \`df.loc[label_row, label_col]\` — access by label.`, he: `\`df['col']\` / \`df.col\` — גישה לעמודה; \`df.iloc[row, col]\` — גישה לפי מיקום; \`df.loc[label_row, label_col]\` — גישה לפי תווית.` },
          { en: `\`df[df['col'] > 10]\` — filter by condition; \`df.loc[filter1 & filter2]\` — filter with AND; \`df.loc[filter1 | filter2]\` — filter with OR; \`df.query("condition")\` — filter with a string.`, he: `\`df[df['col'] > 10]\` — סינון לפי תנאי; \`df.loc[filter1 & filter2]\` — סינון עם AND; \`df.loc[filter1 | filter2]\` — סינון עם OR; \`df.query("condition")\` — סינון עם מחרוזת.` },
          { en: `\`df.filter()\` — filter columns; \`df.sort_values()\` — sort by values; \`df.sort_index()\` — sort by index.`, he: `\`df.filter()\` — סינון עמודות; \`df.sort_values()\` — מיון לפי ערכים; \`df.sort_index()\` — מיון לפי אינדקס.` },
        ],
      },
      {
        number: 'pandas-04',
        title: { en: 'Missing Data & Duplicates', he: 'נתונים חסרים וכפילויות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df['col'].isna()\` / \`df.isnull()\` — identify missing values; \`df.notnull()\` — identify non-missing values; \`df.fillna(value)\` — fill missing values; \`df.dropna()\` — remove rows with missing values.`, he: `\`df['col'].isna()\` / \`df.isnull()\` — זיהוי ערכים חסרים; \`df.notnull()\` — זיהוי ערכים לא חסרים; \`df.fillna(value)\` — מילוי ערכים חסרים; \`df.dropna()\` — הסרת שורות עם ערכים חסרים.` },
          { en: `\`df.duplicated()\` — identify duplicate rows; \`df.drop_duplicates()\` — remove duplicate rows; \`na_values\` — defining missing values on read.`, he: `\`df.duplicated()\` — זיהוי שורות כפולות; \`df.drop_duplicates()\` — הסרת שורות כפולות; \`na_values\` — הגדרת ערכים חסרים בקריאה.` },
          { en: `\`df.clip()\` — clip values to a range.`, he: `\`df.clip()\` — חיתוך ערכים לטווח.` },
        ],
      },
      {
        number: 'pandas-05',
        title: { en: 'Column Operations', he: 'פעולות על עמודות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df.rename()\` — rename columns; \`df.insert(loc, column, value)\` — insert a column at a position; \`df.assign(new_col=calculation)\` — add a computed column.`, he: `\`df.rename()\` — שינוי שמות עמודות; \`df.insert(loc, column, value)\` — הוספת עמודה במיקום; \`df.assign(new_col=calculation)\` — הוספת עמודה מחושבת.` },
          { en: `\`df.astype()\` — convert type; \`df.convert_dtypes()\` — convert types automatically; \`df.apply(func)\` — apply a function; \`df.map()\` — mapping; \`df.applymap()\` — apply to every cell.`, he: `\`df.astype()\` — המרת סוג; \`df.convert_dtypes()\` — המרת סוגים אוטומטית; \`df.apply(func)\` — הפעלת פונקציה; \`df.map()\` — מיפוי; \`df.applymap()\` — הפעלה על כל תא.` },
          { en: `\`df.value_counts()\` — count unique values; \`df.mode()\` — most frequent value; \`df.quantile()\` — quantiles; \`df.sample()\` — random sample; \`df.replace()\` — replace specific values.`, he: `\`df.value_counts()\` — ספירת ערכים ייחודיים; \`df.mode()\` — הערך השכיח; \`df.quantile()\` — רבעונים; \`df.sample()\` — מדגם אקראי; \`df.replace()\` — החלפת ערכים ספציפיים.` },
        ],
      },
      {
        number: 'pandas-06',
        title: { en: 'String & DateTime Methods', he: 'מתודות מחרוזת ותאריך' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df['col'].str.contains()\` — containment check; \`.str.startswith()\` / \`.str.endswith()\` — start/end check; \`.str.replace()\` — replace text; \`.str.upper()\` / \`.str.lower()\` — case conversion; \`.str.strip()\` — remove whitespace.`, he: `\`df['col'].str.contains()\` — בדיקת הכלה; \`.str.startswith()\` / \`.str.endswith()\` — בדיקת התחלה/סיום; \`.str.replace()\` — החלפת טקסט; \`.str.upper()\` / \`.str.lower()\` — המרת רישיות; \`.str.strip()\` — הסרת רווחים.` },
          { en: `\`pd.to_datetime()\` — convert to date; \`df['date'].dt.year\` / \`.dt.month\` / \`.dt.day\` / \`.dt.weekday\` — extract year/month/day/weekday.`, he: `\`pd.to_datetime()\` — המרה לתאריך; \`df['date'].dt.year\` / \`.dt.month\` / \`.dt.day\` / \`.dt.weekday\` — שליפת שנה/חודש/יום/יום בשבוע.` },
          { en: `\`pd.date_range()\` — create a range of dates; \`now()\` — current time; \`timedelta\` — time difference; \`df.resample()\` — resample time data.`, he: `\`pd.date_range()\` — יצירת טווח תאריכים; \`now()\` — זמן נוכחי; \`timedelta\` — הפרש זמן; \`df.resample()\` — דגימה מחדש של זמן.` },
        ],
      },
      {
        number: 'pandas-07',
        title: { en: 'GroupBy & Aggregation', he: 'קיבוץ וצבירה' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df.groupby('col')\` — group data; \`groupby().agg()\` — aggregation over groups; \`groupby().transform()\` — transformation over groups; \`groupby().filter()\` — filter groups.`, he: `\`df.groupby('col')\` — קיבוץ נתונים; \`groupby().agg()\` — אגרגציה על קבוצות; \`groupby().transform()\` — טרנספורמציה על קבוצות; \`groupby().filter()\` — סינון קבוצות.` },
          { en: `\`pd.crosstab()\` — cross-tabulation table.`, he: `\`pd.crosstab()\` — טבלת הצלבה.` },
        ],
        keyTakeaway: {
          en: `groupby → agg is pandas' equivalent of SQL's GROUP BY — the same "bucket, then summarize" logic taught for SQLite in Session 15.`,
          he: `groupby ← agg הוא המקבילה של pandas ל-GROUP BY של SQL — אותה לוגיקת "לקבץ, ואז לסכם" שנלמדה עבור SQLite במפגש 15.`,
        },
      },
      {
        number: 'pandas-08',
        title: { en: 'Merging & Reshaping', he: 'מיזוג ועיצוב מחדש' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`pd.merge()\` — merge two DataFrames; \`df.join()\` — join; \`pd.concat()\` — concatenate.`, he: `\`pd.merge()\` — מיזוג שני DataFrames; \`df.join()\` — חיבור; \`pd.concat()\` — שרשור.` },
          { en: `\`df.pivot_table()\` — pivot table; \`df.pivot()\` — pivot; \`df.melt()\` — melt; \`df.wide_to_long()\` — wide to long.`, he: `\`df.pivot_table()\` — טבלת ציר; \`df.pivot()\` — ציר; \`df.melt()\` — התכה; \`df.wide_to_long()\` — רחב לארוך.` },
          { en: `\`df.stack()\` — stack; \`df.unstack()\` — unstack; \`df.transpose()\` — transpose; \`df.cut()\` — bin into groups; \`df.qcut()\` — bin into quantiles.`, he: `\`df.stack()\` — המרעה (Stack); \`df.unstack()\` — פירוק ערימה; \`df.transpose()\` — טרנספוזיציה; \`df.cut()\` — חלוקה לקבוצות; \`df.qcut()\` — חלוקה לרבעונים.` },
        ],
      },
      {
        number: 'pandas-09',
        title: { en: 'Iteration, Visualization & Misc', he: 'איטרציה, ויזואליזציה ושונות' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df.iterrows()\` — iterate over rows; \`df.iteritems()\` — iterate over columns; \`df.itertuples()\` — iterate as tuples.`, he: `\`df.iterrows()\` — איטרציה על שורות; \`df.iteritems()\` — איטרציה על עמודות; \`df.itertuples()\` — איטרציה כטאפלים.` },
          { en: `\`df.plot()\` — basic plot; \`df.hist()\` — histogram; \`df.boxplot()\` — box plot.`, he: `\`df.plot()\` — שרטוט בסיסי; \`df.hist()\` — היסטוגרמה; \`df.boxplot()\` — תרשים "קופסה".` },
          { en: `\`pd.Series()\` — create a one-dimensional column; \`pd.DataFrame()\` — create a two-dimensional table; \`df.eval()\` — evaluate an expression; \`df.pipe()\` — chain operations; \`df.memory_usage()\` — memory usage; \`df.reset_index()\` — reset the index; \`df.reindex()\` — change the index; \`df.set_index()\` — set a column as the index.`, he: `\`pd.Series()\` — יצירת עמודה חד-ממדית; \`pd.DataFrame()\` — יצירת טבלה דו-ממדית; \`df.eval()\` — הערכת ביטוי; \`df.pipe()\` — שרשור פעולות; \`df.memory_usage()\` — שימוש בזיכרון; \`df.reset_index()\` — איפוס האינדקס; \`df.reindex()\` — שינוי אינדקס; \`df.set_index()\` — הגדרת עמודה כאינדקס.` },
          { en: `\`df.shift()\` — shift; \`df.cumsum()\` — cumulative sum; \`df.ewm()\` — weighted average; \`df.rolling()\` — rolling window; \`df.expanding()\` — expanding window.`, he: `\`df.shift()\` — הזזה; \`df.cumsum()\` — סכום מצטבר; \`df.ewm()\` — ממוצע משוקלל; \`df.rolling()\` — חלון מתגלגל; \`df.expanding()\` — חלון מתרחב.` },
          { en: `\`axis\` — direction of the operation (0/1); \`inplace\` — change the original; \`ascending\` — sort order (ascending/descending); \`df.select_dtypes()\` — select by type; \`df.mean()\`, \`df.min()\`, \`df.max()\`, \`df.median()\`, \`df.std()\`, \`df.sum()\`, \`df.count()\` — column statistics.`, he: `\`axis\` — כיוון הפעולה (0/1); \`inplace\` — שינוי על המקורי; \`ascending\` — סדר מיון (עולה/יורד); \`df.select_dtypes()\` — בחירה לפי סוג; \`df.mean()\`, \`df.min()\`, \`df.max()\`, \`df.median()\`, \`df.std()\`, \`df.sum()\`, \`df.count()\` — סטטיסטיקות עמודה.` },
        ],
      },
    ],
    attachments: [
      { label: { en: "Ester's Python Tables — Command Summary (PDF)", he: 'טבלאות פייתון של אסתר — סיכום פקודות (PDF)' }, url: 'https://drive.google.com/file/d/1f7dQoe1BDsQbeezB-dJGjOsBnUX30_7v/view' },
    ],
  },
  {
    id: 'claude-code',
    language: { en: 'Claude Code', he: 'Claude Code' },
    note: {
      en: `Sourced from Dr. Zuari's own "Claude Code: From Zero to Production Agent" workshop deck (all 2026 updates, Jan–Jul) — the same tool used live in Session 10 to rebuild the course site. This is a large, fast-moving surface; what follows covers installation and the command vocabulary the deck itself documents, not every feature Claude Code has ever shipped.`,
      he: `מקורו בחוברת הסדנה של ד"ר זוארי עצמו "Claude Code: From Zero to Production Agent" (כל עדכוני 2026, ינואר–יולי) — אותו כלי שנעשה בו שימוש בשידור חי במפגש 10 כדי לבנות מחדש את אתר הקורס. זהו משטח גדול ומתפתח מהר; מה שבא בהמשך מכסה התקנה ואוצר הפקודות שהחוברת עצמה מתעדת, לא כל תכונה ש-Claude Code אי-פעם השיק.`,
    },
    topics: [
      {
        number: 'claude-01',
        title: { en: 'Installation & Launching', he: 'התקנה והפעלה' },
        source: 'Dr. Zuari · "claude code workshop.pdf"',
        points: [
          { en: `Prerequisite: Node.js 18+ (download from nodejs.org; Windows uses the .msi installer). Install: \`npm install -g @anthropic-ai/claude-code\`. Verify: \`claude --version\`.`, he: `דרישה מקדימה: Node.js 18+ (הורדה מ-nodejs.org; Windows משתמש במתקין .msi). התקנה: \`npm install -g @anthropic-ai/claude-code\`. אימות: \`claude --version\`.` },
          { en: `Two interfaces: the CLI (standalone terminal tool — use CMD on Windows, not PowerShell) and the VS Code Extension (integrated into the editor, adds session forking and usage indicators).`, he: `שני ממשקים: ה-CLI (כלי טרמינל עצמאי — משתמשים ב-CMD ב-Windows, לא PowerShell) ותוסף VS Code (משולב בעורך, מוסיף פיצול session ומחווני שימוש).` },
          { en: `Launch a session with \`claude\` from inside any project folder. Switch models mid-prompt with Option+P (Mac) / Alt+P (Windows).`, he: `הפעלת session עם \`claude\` מתוך תיקיית פרויקט כלשהי. החלפת מודלים באמצע prompt עם Option+P (Mac) / Alt+P (Windows).` },
        ],
      },
      {
        number: 'claude-02',
        title: { en: 'CLAUDE.md — Project Memory', he: 'CLAUDE.md — זיכרון הפרויקט' },
        source: 'Dr. Zuari · "claude code workshop.pdf"',
        points: [
          { en: `CLAUDE.md is a config file Claude reads automatically every session — persistent project context with higher authority than an ordinary prompt (system rules, not suggestions). Run \`/init\` to auto-generate one for any existing project, then customize it.`, he: `CLAUDE.md הוא קובץ קונפיגורציה ש-Claude קורא אוטומטית בכל session — הקשר פרויקט מתמיד עם סמכות גבוהה יותר מ-prompt רגיל (חוקי מערכת, לא הצעות). מריצים \`/init\` כדי לייצר אחד אוטומטית לכל פרויקט קיים, ואז מתאימים אותו אישית.` },
          { en: `Karpathy's 4 rules for a CLAUDE.md, cited directly in the deck: (1) Think Before Coding — define success criteria before writing any code; (2) Keep It Simple — minimum code to solve the problem, no speculative abstraction; (3) Surgical Changes Only — touch only what the request requires; (4) Goal-Driven Verification.`, he: `4 הכללים של קרפתי ל-CLAUDE.md, מצוטטים ישירות בחוברת: (1) לחשוב לפני קידוד — להגדיר קריטריוני הצלחה לפני כתיבת קוד; (2) לשמור על פשטות — מינימום קוד לפתרון הבעיה, בלי הפשטה ספקולטיבית; (3) שינויים כירורגיים בלבד — לגעת רק במה שהבקשה דורשת; (4) אימות מונחה-מטרה.` },
          { en: `Keep CLAUDE.md under 200 lines — it loads in full every session, so it's a cost as well as a benefit.`, he: `לשמור על CLAUDE.md מתחת ל-200 שורות — הוא נטען במלואו בכל session, אז הוא עלות ולא רק תועלת.` },
        ],
      },
      {
        number: 'claude-03',
        title: { en: 'Slash Commands — Session, Planning & Review', he: 'פקודות סלאש — Session, תכנון וסקירה' },
        source: 'Dr. Zuari · "claude code workshop.pdf"',
        points: [
          { en: `\`/clear\` wipes context for a new task; \`/compact\` compresses history to free context; \`/resume\` picks up a previous session; \`/cost\` shows token usage and spend; \`/doctor\` runs a system health check; \`/help\` lists all commands.`, he: `\`/clear\` מנקה הקשר למשימה חדשה; \`/compact\` דוחס היסטוריה כדי לפנות הקשר; \`/resume\` ממשיך session קודם; \`/cost\` מציגה שימוש בטוקנים והוצאה; \`/doctor\` מריצה בדיקת תקינות מערכת; \`/help\` מציגה את כל הפקודות.` },
          { en: `\`/plan\` enters read-only Plan Mode (also: Shift+Tab twice). \`/ultraplan <task>\` runs cloud planning in the browser, keeping the terminal free — best for 40+ file changes. \`/init\` creates CLAUDE.md for the project.`, he: `\`/plan\` נכנסת למצב תכנון לקריאה-בלבד (גם: Shift+Tab פעמיים). \`/ultraplan <task>\` מריצה תכנון בענן בדפדפן, ומשאירה את הטרמינל פנוי — הכי טוב לשינויים ב-40+ קבצים. \`/init\` יוצרת CLAUDE.md לפרויקט.` },
          { en: `\`/code-review\` (alias \`/review\`) runs an AI-driven code review; \`/ultrareview\` runs a multi-agent cloud review.`, he: `\`/code-review\` (כינוי \`/review\`) מריצה סקירת קוד מונעת AI; \`/ultrareview\` מריצה סקירת ענן מרובת-סוכנים.` },
        ],
        keyTakeaway: {
          en: `The golden workflow the deck repeats throughout: Plan → Code → Debug → Commit — enter Plan Mode, review the plan before a single file changes, then let it run.`,
          he: `זרימת העבודה הזהובה שהחוברת חוזרת עליה לאורך כל הדרך: תכנון ← קוד ← ניפוי באגים ← קומיט — נכנסים למצב תכנון, בודקים את התוכנית לפני ששינוי אחד נעשה, ואז נותנים לזה לרוץ.`,
        },
      },
      {
        number: 'claude-04',
        title: { en: 'Slash Commands — Model, Effort & Agentic', he: 'פקודות סלאש — מודל, מאמץ, וסוכניות' },
        source: 'Dr. Zuari · "claude code workshop.pdf"',
        points: [
          { en: `\`/model\` opens an interactive model picker; \`/effort [level]\` sets low/medium/high/xhigh; \`/effort ultracode\` triggers xhigh plus Dynamic Workflows (hundreds of parallel subagents); \`/fast\` toggles Fast mode (~2.5× faster, ~3× cheaper).`, he: `\`/model\` פותחת בורר מודל אינטראקטיבי; \`/effort [level]\` קובעת low/medium/high/xhigh; \`/effort ultracode\` מפעילה xhigh בתוספת Dynamic Workflows (מאות תת-סוכנים במקביל); \`/fast\` מחליפה Fast mode (~פי 2.5 מהיר יותר, ~פי 3 זול יותר).` },
          { en: `\`/goal <task>\` runs an autonomous multi-turn task; \`/background\` starts a background agent (or press Ctrl+B mid-task); \`/agents\` manages agent sessions (also opens the interactive sub-agent creator); \`/tasks\` views all running tasks; \`/batch\` runs parallel sub-tasks; \`/fork\` splits a session into branches.`, he: `\`/goal <task>\` מריצה משימה אוטונומית מרובת-תורות; \`/background\` מתחילה סוכן ברקע (או Ctrl+B באמצע משימה); \`/agents\` מנהלת sessions של סוכנים (גם פותחת את יוצר תת-הסוכנים האינטראקטיבי); \`/tasks\` מציגה את כל המשימות הרצות; \`/batch\` מריצה תת-משימות במקביל; \`/fork\` מפצלת session לענפים.` },
          { en: `\`/workflows\` views active Dynamic Workflow runs. Every sub-agent — Dynamic Workflows or Ultraplan — starts with an empty, fresh context window; it does not inherit the parent session's history.`, he: `\`/workflows\` מציגה ריצות Dynamic Workflow פעילות. כל תת-סוכן — Dynamic Workflows או Ultraplan — מתחיל עם חלון הקשר ריק וטרי; הוא לא יורש את היסטוריית ה-session ההורה.` },
        ],
      },
      {
        number: 'claude-05',
        title: { en: 'Slash Commands — Plugins, Skills, Config & Remote', he: 'פקודות סלאש — תוספים, מיומנויות, הגדרות, ומרחוק' },
        source: 'Dr. Zuari · "claude code workshop.pdf"',
        points: [
          { en: `\`/plugin\` installs and manages plugins (e.g. \`/plugin install <name>@claude-plugins-official\`); \`/skills\` lists loaded skills; \`/reload-plugins\` hot-reloads after changes; \`/mcp\` manages MCP connections; \`/memory\` manages memory files.`, he: `\`/plugin\` מתקינה ומנהלת תוספים (למשל \`/plugin install <name>@claude-plugins-official\`); \`/skills\` מציגה מיומנויות טעונות; \`/reload-plugins\` טוענת מחדש אחרי שינויים; \`/mcp\` מנהלת חיבורי MCP; \`/memory\` מנהלת קבצי זיכרון.` },
          { en: `\`/config\` opens the settings UI; \`/permissions\` manages allow/deny rules; \`/remote-control\` exposes the session to claude.ai; \`/install-github-app\` sets up GitHub Actions; \`/ide\` manages the VS Code/JetBrains connection; \`/release-notes\` shows what changed.`, he: `\`/config\` פותחת את ממשק ההגדרות; \`/permissions\` מנהלת כללי allow/deny; \`/remote-control\` חושפת את ה-session ל-claude.ai; \`/install-github-app\` מגדירה GitHub Actions; \`/ide\` מנהלת את החיבור ל-VS Code/JetBrains; \`/release-notes\` מציגה מה השתנה.` },
          { en: `A skill is a single \`SKILL.md\` reusable instruction set (invoked with \`/skill-name\`); a plugin bundles skills + agents + hooks + MCP servers into one installable unit. Custom commands live in \`~/.claude/commands/name.md\`, invoked as \`/name\`.`, he: `מיומנות (skill) היא קובץ \`SKILL.md\` יחיד עם הוראות לשימוש חוזר (מופעל עם \`/skill-name\`); תוסף (plugin) אורז מיומנויות + סוכנים + hooks + שרתי MCP ליחידה אחת להתקנה. פקודות מותאמות אישית חיות ב-\`~/.claude/commands/name.md\`, מופעלות כ-\`/name\`.` },
        ],
      },
    ],
    attachments: [
      { label: { en: 'Claude Code Workshop Deck (PDF)', he: 'חוברת סדנת Claude Code (PDF)' }, url: 'https://drive.google.com/file/d/1Il2GsqC7pxJbqUNGakgcl4dM-O_o1uzy/view' },
    ],
  },
];
