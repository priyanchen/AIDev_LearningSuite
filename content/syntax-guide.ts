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
      en: `Session 7 introduced the terminal as the room every AI coding agent actually works in — the goal stated explicitly was recognition, not memorizing a full command vocabulary. What follows is the handful of commands the course actually used.`,
      he: `מפגש 7 הציג את הטרמינל כחדר שבו כל סוכן קידוד AI באמת עובד — המטרה שהוצהרה במפורש הייתה זיהוי, לא שינון אוצר מילים מלא של פקודות. מה שבא בהמשך הן הפקודות הבודדות שהקורס בפועל השתמש בהן.`,
    },
    topics: [
      {
        number: 'cli-01',
        title: { en: 'Opening & Navigating a Terminal', he: 'פתיחה וניווט בטרמינל' },
        source: 'Session 7 · Card 02',
        points: [
          { en: `Windows: searching "Command Prompt" opens the older shell; searching "PowerShell" (or just "Terminal") opens the newer, Unix-aware one. Mac: Cmd+Space, then type "Terminal".`, he: `Windows: חיפוש "Command Prompt" פותח את המעטפת הישנה יותר; חיפוש "PowerShell" (או סתם "Terminal") פותח את החדשה יותר, המודעת ל-Unix. Mac: Cmd+Space, ואז הקלדת "Terminal".` },
          { en: `\`ls\` (Mac) or \`dir\` (Windows) lists everything in the current folder.`, he: `\`ls\` (ב-Mac) או \`dir\` (ב-Windows) מציגה רשימה של הכול בתיקייה הנוכחית.` },
          { en: `\`cd <folder>\` moves into a folder — a forward slash on Mac, a backslash on Windows, exactly the mismatch PowerShell papers over.`, he: `\`cd <folder>\` עוברת לתוך תיקייה — קו נטוי קדימה ב-Mac, קו נטוי אחורה ב-Windows, בדיוק אי-ההתאמה ש-PowerShell מגשרת עליה.` },
          { en: `\`clear\` (Mac/PowerShell) or \`cls\` (Command Prompt) wipes the screen without affecting anything that already ran.`, he: `\`clear\` (Mac/PowerShell) או \`cls\` (Command Prompt) מנקה את המסך בלי להשפיע על שום דבר שכבר רץ.` },
        ],
        keyTakeaway: {
          en: `The terminal has no icons to click — every action is a sentence you type and mean.`,
          he: `לטרמינל אין אייקונים ללחוץ עליהם — כל פעולה היא משפט שמקלידים ומתכוונים אליו.`,
        },
      },
      {
        number: 'cli-02',
        title: { en: 'A Shortcut Worth Knowing — `code .`', he: 'קיצור שכדאי לדעת — `code .`' },
        source: 'Session 15 · Card 07',
        points: [
          { en: `Opening a terminal inside a project folder and typing \`code .\` opens that exact folder in the editor directly — a small shortcut called out as worth learning early, instead of manually navigating the editor's own open-project menu.`, he: `פתיחת טרמינל בתוך תיקיית פרויקט והקלדת \`code .\` פותחת את אותה תיקייה בדיוק בעורך ישירות — קיצור קטן שצוין ככדאי ללמוד מוקדם, במקום לנווט ידנית דרך תפריט פתיחת-הפרויקט של העורך.` },
        ],
      },
      {
        number: 'cli-03',
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
    id: 'numpy',
    language: { en: 'NumPy', he: 'NumPy' },
    note: {
      en: `Used throughout the Data Science module (Sessions 17–21) for array math underneath pandas, but never had its own notebook summary. What follows is sourced from Ester's own Python command-reference sheet (Module 3's Practice Companion), not the instructor's notebooks — treat it as a supplementary cheat sheet, not a course transcript.`,
      he: `בשימוש לאורך כל מודול מדעי הנתונים (מפגשים 17–21) לחישובי מערכים מתחת ל-pandas, אך מעולם לא הייתה לו מחברת סיכום משלו. מה שבא בהמשך מקורו בדף עזר לפקודות פייתון של אסתר עצמה (מלווה התרגול של מודול 3), לא מהמחברות של המרצה — יש להתייחס אליו כגיליון עזר משלים, לא כתמליל קורס.`,
    },
    topics: [
      {
        number: 'numpy-01',
        title: { en: 'Creating & Inspecting Arrays', he: 'יצירת מערכים ובדיקתם' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`np.array(list)\` builds an array from a list; \`np.arange(start, stop, step)\` builds one from a sequence of numbers.`, he: `\`np.array(list)\` בונה מערך מרשימה; \`np.arange(start, stop, step)\` בונה מערך מרצף מספרים.` },
          { en: `\`np.zeros(n)\` and \`np.ones(n)\` build arrays pre-filled with 0s or 1s.`, he: `\`np.zeros(n)\` ו-\`np.ones(n)\` בונים מערכים ממולאים מראש ב-0 או ב-1.` },
          { en: `\`array.shape\` gives (rows, columns); \`array.dtype\` gives the element type.`, he: `\`array.shape\` נותן (שורות, עמודות); \`array.dtype\` נותן את סוג האיברים.` },
          { en: `Slicing works like lists: \`array[1:4]\` takes a sub-range.`, he: `פרוסה עובדת כמו ברשימות: \`array[1:4]\` לוקח טווח משנה.` },
        ],
      },
      {
        number: 'numpy-02',
        title: { en: 'Filtering & Statistics', he: 'סינון וסטטיסטיקה' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`array > 5\` returns a boolean array; \`array[array > 5]\` uses that boolean array to filter in place.`, he: `\`array > 5\` מחזיר מערך בוליאני; \`array[array > 5]\` משתמש במערך הבוליאני הזה כדי לסנן במקום.` },
          { en: `\`np.where(condition, A, B)\` picks A where the condition holds, B otherwise — a vectorized if/else.`, he: `\`np.where(condition, A, B)\` בוחר ב-A במקום שהתנאי מתקיים, ב-B אחרת — if/else מווקטר.` },
          { en: `\`np.sum()\`, \`np.mean()\`, \`np.max()\` compute across the whole array; \`np.sort()\` returns a sorted copy.`, he: `\`np.sum()\`, \`np.mean()\`, \`np.max()\` מחשבים על פני המערך כולו; \`np.sort()\` מחזיר עותק ממוין.` },
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
    language: { en: 'Pandas', he: 'Pandas' },
    note: {
      en: `The workhorse of every Session 17–21 exercise — reading CSVs, cleaning data, grouping and aggregating it. As with NumPy above, this reference comes from Ester's own Python command sheet (Module 3's Practice Companion), not a course notebook summary — a working cheat sheet, not a transcript.`,
      he: `סוס העבודה של כל תרגיל במפגשים 17–21 — קריאת CSV, ניקוי נתונים, קיבוץ וצבירה. כמו ב-NumPy למעלה, גיליון העזר הזה מגיע מדף פקודות הפייתון של אסתר עצמה (מלווה התרגול של מודול 3), לא מסיכום מחברת קורס — גיליון עזר עובד, לא תמליל.`,
    },
    topics: [
      {
        number: 'pandas-01',
        title: { en: 'Reading, Inspecting & Writing Data', he: 'קריאה, בדיקה וכתיבה של נתונים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`pd.read_csv()\`, \`pd.read_excel()\`, \`pd.read_json()\` load data from a file into a DataFrame; \`df.to_csv()\`, \`df.to_excel()\`, \`df.to_json()\` write it back out.`, he: `\`pd.read_csv()\`, \`pd.read_excel()\`, \`pd.read_json()\` טוענים נתונים מקובץ ל-DataFrame; \`df.to_csv()\`, \`df.to_excel()\`, \`df.to_json()\` כותבים אותם חזרה.` },
          { en: `\`df.head()\` / \`df.tail()\` show the first/last five rows; \`df.info()\` shows column types and structure; \`df.describe()\` gives summary statistics; \`df.shape\` gives (rows, columns).`, he: `\`df.head()\` / \`df.tail()\` מציגים את חמש השורות הראשונות/אחרונות; \`df.info()\` מציג סוגי עמודות ומבנה; \`df.describe()\` נותן סטטיסטיקה תיאורית; \`df.shape\` נותן (שורות, עמודות).` },
          { en: `\`df.columns\`, \`df.dtypes\`, \`df.index\` expose the column names, per-column types, and row index directly.`, he: `\`df.columns\`, \`df.dtypes\`, \`df.index\` חושפים ישירות את שמות העמודות, הסוגים לפי עמודה, ואינדקס השורות.` },
        ],
      },
      {
        number: 'pandas-02',
        title: { en: 'Selecting & Filtering', he: 'בחירה וסינון' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `Column access: \`df['col']\` or \`df.col\`. Row access by position: \`df.iloc[row, col]\`; by label: \`df.loc[label_row, label_col]\`.`, he: `גישה לעמודה: \`df['col']\` או \`df.col\`. גישה לשורה לפי מיקום: \`df.iloc[row, col]\`; לפי תווית: \`df.loc[label_row, label_col]\`.` },
          { en: `Conditional filtering: \`df[df['col'] > 10]\`; combine conditions with \`&\` (and) / \`|\` (or): \`df.loc[filter1 & filter2]\`; or \`df.query("condition")\` as a readable alternative.`, he: `סינון תנאי: \`df[df['col'] > 10]\`; שילוב תנאים עם \`&\` (וגם) / \`|\` (או): \`df.loc[filter1 & filter2]\`; או \`df.query("condition")\` כאלטרנטיבה קריאה.` },
          { en: `\`df.sort_values('col')\` sorts by a column's values; \`df.sort_index()\` sorts by the row index.`, he: `\`df.sort_values('col')\` ממיין לפי ערכי עמודה; \`df.sort_index()\` ממיין לפי אינדקס השורות.` },
        ],
      },
      {
        number: 'pandas-03',
        title: { en: 'Cleaning & Missing Data', he: 'ניקוי וטיפול בנתונים חסרים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df['col'].isna()\` / \`df.isnull()\` flag missing values; \`df.fillna(value)\` fills them in; \`df.dropna()\` removes rows that have them.`, he: `\`df['col'].isna()\` / \`df.isnull()\` מסמנים ערכים חסרים; \`df.fillna(value)\` ממלא אותם; \`df.dropna()\` מסיר שורות שמכילות אותם.` },
          { en: `\`df.drop_duplicates()\` removes duplicate rows; \`df.duplicated()\` flags which rows are duplicates without removing them.`, he: `\`df.drop_duplicates()\` מסיר שורות כפולות; \`df.duplicated()\` מסמן אילו שורות כפולות בלי להסיר אותן.` },
          { en: `\`df.astype()\` converts a column's type; \`df.rename()\` renames columns; \`df.replace()\` swaps specific values.`, he: `\`df.astype()\` ממיר את סוג העמודה; \`df.rename()\` משנה שמות עמודות; \`df.replace()\` מחליף ערכים ספציפיים.` },
        ],
      },
      {
        number: 'pandas-04',
        title: { en: 'String & DateTime Operations', he: 'פעולות על מחרוזות ותאריכים' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `String methods run on a whole column via \`.str\`: \`df['col'].str.contains()\`, \`.str.startswith()\`, \`.str.replace()\`, \`.str.upper()\` / \`.str.lower()\`, \`.str.strip()\`.`, he: `מתודות מחרוזת רצות על עמודה שלמה דרך \`.str\`: \`df['col'].str.contains()\`, \`.str.startswith()\`, \`.str.replace()\`, \`.str.upper()\` / \`.str.lower()\`, \`.str.strip()\`.` },
          { en: `\`pd.to_datetime()\` converts a column to real dates; once converted, \`df['date'].dt.year\`, \`.dt.month\`, \`.dt.day\`, \`.dt.weekday\` pull each part out.`, he: `\`pd.to_datetime()\` ממיר עמודה לתאריכים אמיתיים; לאחר ההמרה, \`df['date'].dt.year\`, \`.dt.month\`, \`.dt.day\`, \`.dt.weekday\` שולפים כל חלק.` },
          { en: `\`pd.date_range()\` generates a range of dates; \`df.resample()\` re-buckets time-indexed data into new time periods.`, he: `\`pd.date_range()\` מייצר טווח תאריכים; \`df.resample()\` מקבץ מחדש נתונים עם אינדקס זמן לתקופות זמן חדשות.` },
        ],
      },
      {
        number: 'pandas-05',
        title: { en: 'GroupBy, Merging & Reshaping', he: 'קיבוץ, מיזוג ועיצוב מחדש' },
        source: "Ester's Practice Companion · Python Tables (Module 3)",
        points: [
          { en: `\`df.groupby('col')\` buckets rows by a column's values; follow with \`.agg()\`, \`.mean()\`, \`.sum()\`, or \`.count()\` to summarize each bucket.`, he: `\`df.groupby('col')\` מקבץ שורות לפי ערכי עמודה; ממשיכים עם \`.agg()\`, \`.mean()\`, \`.sum()\`, או \`.count()\` כדי לסכם כל קבוצה.` },
          { en: `\`pd.merge()\` joins two DataFrames on a shared key, like a SQL join; \`pd.concat()\` stacks DataFrames together.`, he: `\`pd.merge()\` מצרף שני DataFrames לפי מפתח משותף, כמו join ב-SQL; \`pd.concat()\` מערים DataFrames זה על זה.` },
          { en: `\`df.pivot_table()\` reshapes long data into a summary grid; \`df.melt()\` does the reverse, turning columns back into rows.`, he: `\`df.pivot_table()\` מעצב מחדש נתונים ארוכים לרשת סיכום; \`df.melt()\` עושה את ההפך, הופך עמודות בחזרה לשורות.` },
        ],
        keyTakeaway: {
          en: `groupby → agg is pandas' equivalent of SQL's GROUP BY — the same "bucket, then summarize" logic taught for SQLite in Session 15.`,
          he: `groupby ← agg הוא המקבילה של pandas ל-GROUP BY של SQL — אותה לוגיקת "לקבץ, ואז לסכם" שנלמדה עבור SQLite במפגש 15.`,
        },
      },
    ],
    attachments: [
      { label: { en: "Ester's Python Tables — Command Summary (PDF)", he: 'טבלאות פייתון של אסתר — סיכום פקודות (PDF)' }, url: 'https://drive.google.com/file/d/1f7dQoe1BDsQbeezB-dJGjOsBnUX30_7v/view' },
    ],
  },
];
