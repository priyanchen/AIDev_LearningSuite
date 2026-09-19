import type { Bilingual } from '@/lib/registry';

export type SyntaxTopic = {
  number: string;            // matches the source notebook's own numbering (03–19)
  title: Bilingual;
  sourceNotebook: string;    // filename, for citation only
  points: Bilingual[];
  keyTakeaway?: Bilingual;
};

// Sourced from the end-of-notebook summary cells in the course's own Jupyter notebooks
// (Python module, Drive folder 1zTaJZnRNrB3v4wN92U3rOnhOqiB-1bsV) — not generic Python docs.
// Where a notebook had no formal summary cell, the points below are synthesized from its code cells.
export const syntaxGuide: SyntaxTopic[] = [
  {
    number: '03',
    title: { en: 'Variables', he: 'משתנים' },
    sourceNotebook: '03-Variables.ipynb',
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
    sourceNotebook: '04-Lists.ipynb',
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
    sourceNotebook: '05-Tuples.ipynb',
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
    sourceNotebook: '06-Dictionaries.ipynb',
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
    sourceNotebook: '07-Sets.ipynb',
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
    sourceNotebook: '08-Comparison Operators.ipynb',
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
    sourceNotebook: '09 -if, elif, and else Statements.ipynb',
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
    sourceNotebook: '10-for Loops.ipynb',
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
    sourceNotebook: '11-while Loops.ipynb',
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
    sourceNotebook: '12-List Comprehensions.ipynb',
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
    sourceNotebook: '13-Functions.ipynb',
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
    sourceNotebook: '14-args kwargs.ipynb',
    points: [
      { en: `\`*args\` lets a function accept any number of positional arguments, collected as a tuple — replaces needing a fixed parameter for each value: \`def myfunc(*args): return sum(args) * .05\`.`, he: `\`*args\` מאפשר לפונקציה לקבל כל מספר של ארגומנטים מיקומיים, נאספים כטאפל — מחליף את הצורך בפרמטר קבוע לכל ערך: \`def myfunc(*args): return sum(args) * .05\`.` },
      { en: `\`**kwargs\` collects arbitrary keyword arguments into a dictionary, loopable with \`.items()\`, accessed like a normal dict (\`kwargs["key"]\`); check for a specific key with \`if 'fruit' in kwargs:\`.`, he: `\`**kwargs\` אוסף ארגומנטים במילות מפתח כלשהם למילון, ניתן לעבור עליו עם \`.items()\`, גישה כמו למילון רגיל (\`kwargs["key"]\`); בדיקת מפתח ספציפי עם \`if 'fruit' in kwargs:\`.` },
      { en: `Demonstrated in the course with an "agents" example building agent config dictionaries from keyword arguments (\`role=\`, \`goal=\`) — tying the syntax directly to the AI-agent material used later in the course.`, he: `הודגם בקורס עם דוגמת "סוכנים" שבונה מילוני קונפיגורציית סוכן מארגומנטי מילות מפתח (\`role=\`, \`goal=\`) — קושר את התחביר ישירות לחומר סוכני ה-AI שמשמש בהמשך הקורס.` },
    ],
  },
  {
    number: '15',
    title: { en: 'Nested Statements and Scope', he: 'משפטים מקוננים והיקף (Scope)' },
    sourceNotebook: '15-Nested Statements and Scope.ipynb',
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
    sourceNotebook: '16-FunctionalPro.ipynb',
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
    sourceNotebook: '17-unpack_deco_exceptions.ipynb',
    points: [
      { en: `Unpacking: \`*\` unpacks a list into positional args for a function call (\`add(*values)\`); \`[*list1, *list2]\` merges lists (more flexible than \`+\`); \`**dict\` unpacks a dict as keyword arguments (\`greet(**person)\`); \`{**dict1, **dict2}\` merges dicts; extended unpacking \`first, *middle, last = numbers\`.`, he: `פירוק: \`*\` מפרק רשימה לארגומנטים מיקומיים בקריאה לפונקציה (\`add(*values)\`); \`[*list1, *list2]\` ממזג רשימות (גמיש יותר מ-\`+\`); \`**dict\` מפרק מילון כארגומנטים במילות מפתח (\`greet(**person)\`); \`{**dict1, **dict2}\` ממזג מילונים; פירוק מורחב \`first, *middle, last = numbers\`.` },
      { en: `Decorators: \`@decorator_name\` wraps a function to extend its behavior; a decorator is itself a function returning an inner \`wrapper\` that calls the original; generic decorators use \`def wrapper(*args, **kwargs):\` to work with any function signature — demonstrated for logging, timing (\`time.time()\` before/after), and error-catching wrappers.`, he: `דקורטורים: \`@decorator_name\` עוטף פונקציה כדי להרחיב את ההתנהגות שלה; דקורטור הוא בעצמו פונקציה שמחזירה \`wrapper\` פנימי שקורא למקורית; דקורטורים גנריים משתמשים ב-\`def wrapper(*args, **kwargs):\` כדי לעבוד עם כל חתימת פונקציה — הודגם עבור לוגים, מדידת זמן (\`time.time()\` לפני/אחרי), ועטיפות תופסות-שגיאות.` },
      { en: `Exception handling: \`try\` / \`except SpecificError:\` / \`finally:\` (finally always runs, error or not); multiple \`except\` blocks can catch different error types (\`ValueError\`, \`ZeroDivisionError\`, \`TypeError\`) separately; \`raise ValueError("message")\` to raise manually; custom exceptions via \`class MyError(Exception): pass\`.`, he: `טיפול בחריגות: \`try\` / \`except SpecificError:\` / \`finally:\` (finally תמיד רץ, עם או בלי שגיאה); כמה בלוקי \`except\` יכולים לתפוס סוגי שגיאה שונים (\`ValueError\`, \`ZeroDivisionError\`, \`TypeError\`) בנפרד; \`raise ValueError("message")\` להעלאה ידנית; חריגות מותאמות אישית עם \`class MyError(Exception): pass\`.` },
    ],
  },
  {
    number: '18',
    title: { en: 'Object-Oriented Programming — Part 1', he: 'תכנות מונחה-עצמים — חלק 1' },
    sourceNotebook: '18-OOP.ipynb',
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
    sourceNotebook: '19-OOP2.ipynb',
    points: [
      { en: `Continues the Car class from Part 1 (make/model/year, \`get_descriptive_name()\`, \`read_odometer()\`, \`update_odometer()\`, \`increment_odometer()\`).`, he: `ממשיך את מחלקת Car מחלק 1 (יצרן/דגם/שנה, \`get_descriptive_name()\`, \`read_odometer()\`, \`update_odometer()\`, \`increment_odometer()\`).` },
      { en: `Inheritance walkthrough: \`class Animal:\` with \`__init__(name, age)\` and \`describe()\`; \`class Dog(Animal):\` adds \`dog_color\`, calls \`super().__init__(name, age)\`, and adds its own \`bark()\` method.`, he: `הליכה מודרכת בירושה: \`class Animal:\` עם \`__init__(name, age)\` ו-\`describe()\`; \`class Dog(Animal):\` מוסיף \`dog_color\`, קורא ל-\`super().__init__(name, age)\`, ומוסיף מתודת \`bark()\` משלו.` },
      { en: `Object composition (the notebook's main new idea): a Car class holds an Engine instance as an attribute (\`self.engine = Engine(horse_power)\`), then delegates to it (\`my_car.engine.describe_engine()\`) — built up iteratively, ending with \`Car.__init__\` taking \`horse_power\` with a default value and constructing the Engine internally.`, he: `הרכבת אובייקטים (הרעיון החדש המרכזי של המחברת): מחלקת Car מחזיקה מופע Engine כתכונה (\`self.engine = Engine(horse_power)\`), ואז מאצילה אליו (\`my_car.engine.describe_engine()\`) — נבנה בהדרגה, ומסתיים עם \`Car.__init__\` שמקבל \`horse_power\` עם ברירת מחדל ובונה את ה-Engine פנימית.` },
      { en: `Also demonstrates type coercion inside \`__init__\` (\`self.year = int(year)\`, \`self.horse_power = int(horse_power)\`) to guard against string inputs.`, he: `מדגים גם המרת סוג בתוך \`__init__\` (\`self.year = int(year)\`, \`self.horse_power = int(horse_power)\`) כדי להתגונן מפני קלט מחרוזתי.` },
    ],
  },
];
