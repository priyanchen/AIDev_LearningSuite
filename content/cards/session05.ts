import type { CardContent } from './types';

// Session 5 · Python (Module Session 2) · 12.07.2026
// Cards authored from transcript analysis. Original teaching material.

export const session05Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — comparisons, branching, loops, and a closing argument for why reading code matters more than writing it`,
      he: `מפתח של אחד-עשר כרטיסים — השוואות, הסתעפויות, לולאות, וטיעון מסכם לכך שקריאת קוד חשובה יותר מכתיבתו`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The classic Python objects are closed out with two small, easy-to-overlook ones — None and sets — before the session turns to comparison operators, conditionals, and loops. It ends with the homework that opens Session 6: a number-guessing game, decomposed in plain language only, no code yet.`,
          he: `האובייקטים הקלאסיים של פייטון נסגרים עם שניים קטנים, שקל לפספס — None וסטים — לפני שהמפגש עובר לאופרטורי השוואה, תנאים ולולאות. הוא מסתיים בשיעורי הבית שפותחים את מפגש 6: משחק ניחוש מספרים, מפורק בשפה פשוטה בלבד, עוד בלי קוד.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the session's real argument and should be read first — everything else is in service of it. Card 06 covers the single most consequential bug pattern in the whole deck: condition order.`,
          he: `כרטיס 01 הוא הטיעון האמיתי של המפגש וכדאי לקרוא אותו ראשון — כל השאר משרת אותו. כרטיס 06 מכסה את דפוס הבאג המשמעותי ביותר בכל החפיסה: סדר התנאים.`,
        },
      },
    ],
    principle: {
      en: `Every new keyword this session is in service of one question: can you tell, just by reading, what this code will do?`,
      he: `כל מילת מפתח חדשה במפגש הזה משרתת שאלה אחת: האם את יכולה לדעת, רק על ידי קריאה, מה הקוד הזה יעשה?`,
    },
  },
  {
    number: '01',
    title: { en: `Read Fluently, Write Less`, he: `קראי בשטף, כתבי פחות` },
    subtitle: {
      en: `The claim that answers "why learn this if AI will write the code" — made explicitly, in response to a student's real doubt`,
      he: `הטענה שעונה על "למה ללמוד את זה אם AI יכתוב את הקוד" — נאמרה במפורש, בתגובה לספק אמיתי של סטודנטית`,
    },
    sections: [
      {
        heading: { en: `The Doubt, Named Out Loud`, he: `הספק, נאמר בקול` },
        body: {
          en: `A student pushed back directly: her goal is strategy and architecture, not writing code line by line — so why does the syntax matter? The lecturer's answer did not defend syntax for its own sake. He agreed she'd barely write functions from memory. The disagreement was about what "not writing code" actually requires.`,
          he: `סטודנטית דחפה בחזרה ישירות: המטרה שלה היא אסטרטגיה וארכיטקטורה, לא כתיבת קוד שורה אחר שורה — אז למה שהתחביר יהיה חשוב? התשובה של המרצה לא הגנה על התחביר לשם עצמו. הוא הסכים שהיא בקושי תכתוב פונקציות מהזיכרון. חוסר ההסכמה היה על מה "לא לכתוב קוד" באמת דורש.`,
        },
      },
      {
        heading: { en: `The Distinction`, he: `ההבחנה` },
        body: {
          en: `He drew a direct line between "tell an AI to build you an agent" and "tell it to build a specific model, then verify it against named metrics" — the difference between knowing what you're doing and handing over a wish. Without being able to read the code an AI produces, there is no way to tell when it quietly does the wrong thing, only that something visually works.`,
          he: `הוא צייר קו ישיר בין "תגידי ל-AI לבנות לך סוכן" לבין "תגידי לו לבנות מודל ספציפי, ואז לוודא אותו מול מדדים מוגדרים" — ההבדל בין לדעת מה את עושה לבין למסור משאלה. בלי היכולת לקרוא את הקוד שה-AI מייצר, אין דרך לדעת מתי הוא עושה בשקט את הדבר הלא נכון, רק שמשהו נראה כאילו עובד.`,
        },
      },
      {
        heading: { en: `The Actual Bar`, he: `הרף האמיתי` },
        body: {
          en: `The bar he named was specific: it doesn't matter whether you remember to write a colon, or what you name a variable — an AI handles that. What matters is understanding what a variable is, how a loop behaves, and how an object works well enough to recognize when generated code is wrong and know where to intervene.`,
          he: `הרף שהוא הגדיר היה ספציפי: לא משנה אם את זוכרת לכתוב נקודתיים, או איך קוראים למשתנה — AI מטפל בזה. מה שכן משנה זה להבין מה זה משתנה, איך לולאה מתנהגת, ואיך אובייקט עובד — מספיק טוב כדי לזהות מתי קוד שנוצר הוא שגוי ולדעת איפה להתערב.`,
        },
      },
    ],
    principle: {
      en: `You don't need to author the sentence — you need to catch it when it's lying to you.`,
      he: `לא צריך לחבר את המשפט — צריך לתפוס אותו כשהוא משקר לך.`,
    },
  },
  {
    number: '02',
    title: { en: `None and Sets`, he: `None וסטים` },
    subtitle: {
      en: `The last two classic objects — a placeholder for "not yet," and a shortcut for "sorted, no duplicates"`,
      he: `שני האובייקטים הקלאסיים האחרונים — שומר מקום ל"עוד לא", וקיצור דרך ל"ממוין, בלי כפילויות"`,
    },
    sections: [
      {
        heading: { en: `None as a Placeholder`, he: `None כשומר מקום` },
        body: {
          en: `Assigning a variable \`None\` says "I know I need this name to exist, but I don't yet know what belongs in it." Trying to use a truly empty, undeclared variable raises an error; \`None\` avoids that by explicitly marking the value as not-yet-decided — like a reserved but empty seat.`,
          he: `הצבת \`None\` למשתנה אומרת "אני יודעת שהשם הזה צריך להתקיים, אבל אני עוד לא יודעת מה שייך בתוכו." ניסיון להשתמש במשתנה ריק לגמרי ולא מוצהר זורק שגיאה; \`None\` נמנע מזה על ידי סימון מפורש של הערך כטרם-הוחלט — כמו מושב שמור אבל ריק.`,
        },
      },
      {
        heading: { en: `Sets: Sort and Deduplicate in One Move`, he: `סטים: מיון והסרת כפילויות במהלך אחד` },
        body: {
          en: `A set is written with curly braces, like a dictionary — but unlike a dictionary's key-value pairs, a set is just a flat collection with two side effects baked in: it automatically sorts its contents and automatically removes duplicates. Wrapping an existing list in \`set()\` and then wrapping that result in \`list()\` again is a fast, two-step way to deduplicate a list while keeping it a list.`,
          he: `סט נכתב עם סוגריים מסולסלים, כמו מילון — אבל בניגוד לזוגות מפתח-ערך של מילון, סט הוא סתם אוסף שטוח עם שתי תופעות לוואי מוטמעות: הוא ממיין אוטומטית את התוכן שלו ומסיר אוטומטית כפילויות. עטיפת רשימה קיימת ב-\`set()\` ואז עטיפת התוצאה שוב ב-\`list()\` היא דרך מהירה ובת שני שלבים להסיר כפילויות מרשימה תוך שמירה שהיא נשארת רשימה.`,
        },
      },
    ],
    principle: {
      en: `A rarely-used tool is still worth knowing exists — you're not memorizing it, you're building the instinct to reach for it.`,
      he: `כלי שמשתמשים בו לעיתים רחוקות עדיין שווה לדעת שהוא קיים — לא משננות אותו, בונות את האינסטינקט להושיט יד אליו.`,
    },
  },
  {
    number: '03',
    title: { en: `Tracing a while Loop by Hand`, he: `מעקב אחר לולאת while ביד` },
    subtitle: {
      en: `The counter pattern, walked through step by step until it stops working`,
      he: `דפוס המונה, נסקר צעד אחר צעד עד שהוא מפסיק לעבוד`,
    },
    sections: [
      {
        heading: { en: `The Shape`, he: `הצורה` },
        body: {
          en: `\`counter = 0\` sets a starting point outside the loop. \`while counter < 5:\` is checked before every single pass — if it's true, the indented block runs; the moment it's false, the loop ends immediately with no error and no final message, it simply stops.`,
          he: `\`counter = 0\` קובעת נקודת התחלה מחוץ ללולאה. \`while counter < 5:\` נבדקת לפני כל מעבר בודד — אם היא נכונה, הבלוק המוזח רץ; ברגע שהיא לא נכונה, הלולאה נגמרת מיד בלי שגיאה ובלי הודעת סיום, היא פשוט נעצרת.`,
        },
      },
      {
        heading: { en: `Traced Pass by Pass`, he: `נעקבת מעבר אחר מעבר` },
        body: {
          en: `counter is 0 → 0 < 5 is true → print counter, then counter becomes 1. counter is 1 → still true → print, counter becomes 2. This repeats through 2, 3, 4 — each time printing, then incrementing. When counter reaches 5, the check \`5 < 5\` is false, and the loop exits without printing 5 at all.`,
          he: `counter הוא 0 ← 0 < 5 נכון ← מדפיסה counter, ואז counter הופכת ל-1. counter הוא 1 ← עדיין נכון ← מדפיסה, counter הופכת ל-2. זה חוזר על עצמו דרך 2, 3, 4 — בכל פעם מדפיסה, ואז מגדילה. כש-counter מגיעה ל-5, הבדיקה \`5 < 5\` היא לא נכונה, והלולאה יוצאת בלי להדפיס 5 בכלל.`,
        },
      },
      {
        heading: { en: `The Danger`, he: `הסכנה` },
        body: {
          en: `Skip the increment, or write a condition that never becomes false, and the loop runs forever — an infinite loop. This was named explicitly as something to avoid both in code and in life: a check with no way to eventually turn false is a check that never lets go.`,
          he: `דלגי על ההגדלה, או כתבי תנאי שאף פעם לא הופך ללא-נכון, והלולאה רצה לנצח — לולאה אינסופית. זה כונה במפורש כדבר שכדאי להימנע ממנו גם בקוד וגם בחיים: בדיקה בלי דרך להפוך אי-פעם ללא-נכונה היא בדיקה שאף פעם לא משחררת.`,
        },
      },
    ],
    principle: {
      en: `Every loop needs a way to stop being true — decide what that is before you decide what it does each pass.`,
      he: `כל לולאה צריכה דרך להפסיק להיות נכונה — תחליטי מה זה לפני שתחליטי מה היא עושה בכל מעבר.`,
    },
  },
  {
    number: '04',
    title: { en: `Indentation Is Membership`, he: `הזחה היא שייכות` },
    subtitle: {
      en: `A print statement's fate depends entirely on how far right it sits — nothing else`,
      he: `הגורל של פקודת print תלוי לגמרי בכמה היא מוזחת ימינה — שום דבר אחר`,
    },
    sections: [
      {
        heading: { en: `The Demonstration`, he: `ההדגמה` },
        body: {
          en: `\`if 2 < 1:\` followed by an indented \`print("B")\`, then a separate, un-indented \`print("Moshe")\` right after: running this prints only "Moshe." The condition is false, so the indented line never runs — but "Moshe" was never inside the block to begin with, so it runs regardless of what the condition does.`,
          he: `\`if 2 < 1:\` ואחריה \`print("B")\` מוזחת, ואז \`print("Moshe")\` נפרדת ולא-מוזחת מייד אחריה: הרצת זה מדפיסה רק "Moshe". התנאי לא נכון, אז השורה המוזחת אף פעם לא רצה — אבל "Moshe" מעולם לא הייתה בתוך הבלוק מלכתחילה, אז היא רצה בלי קשר למה שהתנאי עושה.`,
        },
      },
      {
        heading: { en: `What Decides Membership`, he: `מה קובע שייכות` },
        body: {
          en: `Two lines with identical wording can belong to completely different worlds depending only on whitespace. A line indented under an \`if\` is conditional; the same line flush with the \`if\` is not — it always executes, independent of whatever the condition decides.`,
          he: `שתי שורות עם ניסוח זהה יכולות להשתייך לעולמות שונים לגמרי, תלוי רק ברווח לבן. שורה מוזחת תחת \`if\` היא מותנית; אותה שורה מיושרת עם ה-\`if\` היא לא — היא תמיד מתבצעת, בלי קשר למה שהתנאי מחליט.`,
        },
      },
    ],
    principle: {
      en: `Before asking what a line of code does, ask what block it's actually inside.`,
      he: `לפני ששואלות מה שורת קוד עושה, שאלי לאיזה בלוק היא בכלל שייכת.`,
    },
  },
  {
    number: '05',
    title: { en: `Chained elif vs. Independent if`, he: `שרשרת elif מול if עצמאיים` },
    subtitle: {
      en: `Same-looking conditions, opposite behavior — one branch fires, or every branch gets checked`,
      he: `תנאים שנראים זהים, התנהגות הפוכה — הסתעפות אחת יורה, או שכל הסתעפות נבדקת`,
    },
    sections: [
      {
        heading: { en: `Two Separate ifs: All or Nothing Per Line`, he: `שני if נפרדים: הכול או כלום לכל שורה` },
        body: {
          en: `A grade of 85 checked by two independent statements — \`if grade >= 70: print("B")\` then, separately, \`if grade >= 80: print("A")\` — prints both "B" and "A." Each \`if\` is evaluated completely on its own, blind to what any other \`if\` decided.`,
          he: `ציון 85 שנבדק על ידי שתי פקודות עצמאיות — \`if grade >= 70: print("B")\` ואז, בנפרד, \`if grade >= 80: print("A")\` — מדפיס גם "B" וגם "A". כל \`if\` מוערכת לגמרי בפני עצמה, עיוורת למה ש-\`if\` אחרת החליטה.`,
        },
      },
      {
        heading: { en: `A Chain: First Match Wins, Then Stops`, he: `שרשרת: ההתאמה הראשונה מנצחת, ואז נעצרת` },
        body: {
          en: `Rewriting it as \`if grade >= 90: ... elif grade >= 80: ... elif grade >= 70: ...\` changes the meaning entirely: the moment one branch fires, every branch below it is skipped, even if its condition would also have been true. This is why an \`elif\` chain always needs its broadest, most-inclusive condition placed last, never first.`,
          he: `כתיבה מחדש כ-\`if grade >= 90: ... elif grade >= 80: ... elif grade >= 70: ...\` משנה את המשמעות לגמרי: ברגע שהסתעפות אחת יורה, כל הסתעפות שמתחתיה מדולגת, גם אם התנאי שלה היה נכון גם כן. זו הסיבה שלשרשרת \`elif\` תמיד צריך שהתנאי הרחב והמכליל ביותר שלה יהיה אחרון, אף פעם לא ראשון.`,
        },
      },
    ],
    principle: {
      en: `Independent ifs ask every question. An elif chain asks until one answer sticks.`,
      he: `if עצמאיים שואלים כל שאלה. שרשרת elif שואלת עד שתשובה אחת נדבקת.`,
    },
  },
  {
    number: '06',
    title: { en: `The Order Trap`, he: `מלכודת הסדר` },
    subtitle: {
      en: `A broader condition placed first silently swallows every narrower one that follows`,
      he: `תנאי רחב שממוקם ראשון בולע בשקט כל תנאי צר יותר שבא אחריו`,
    },
    sections: [
      {
        heading: { en: `The Bug`, he: `הבאג` },
        body: {
          en: `An \`elif\` chain written as \`grade >= 70\`, then \`grade >= 80\`, then \`grade >= 90\` looks harmless, but it's broken: any grade that satisfies \`>= 90\` also satisfies \`>= 80\` and \`>= 70\`, so the very first, loosest branch always fires first and every stricter branch below it becomes permanently unreachable — dead code that will never run, no matter the input.`,
          he: `שרשרת \`elif\` שנכתבת כ-\`grade >= 70\`, ואז \`grade >= 80\`, ואז \`grade >= 90\` נראית תמימה, אבל היא שבורה: כל ציון שמקיים \`>= 90\` מקיים גם \`>= 80\` וגם \`>= 70\`, כך שההסתעפות הראשונה והרפה ביותר תמיד יורה קודם וכל הסתעפות מחמירה יותר מתחתיה הופכת לבלתי-ניתנת-להשגה לצמיתות — קוד מת שלעולם לא ירוץ, לא משנה הקלט.`,
        },
      },
      {
        heading: { en: `The Fix Is a Rule, Not a Patch`, he: `התיקון הוא כלל, לא טלאי` },
        body: {
          en: `Reordering from most restrictive to least restrictive — \`>= 90\` first, \`>= 80\` next, \`>= 70\` last — fixes it, because each branch only gets checked once everything above it has already failed. The rule is general: in any elif chain, order from narrowest condition to broadest.`,
          he: `סידור מחדש מהמחמיר ביותר לרפה ביותר — קודם \`>= 90\`, אחר כך \`>= 80\`, ולבסוף \`>= 70\` — מתקן את זה, כי כל הסתעפות נבדקת רק אחרי שכל מה שמעליה כבר נכשל. הכלל כללי: בכל שרשרת elif, מסדרות מהתנאי הצר ביותר לרחב ביותר.`,
        },
      },
      {
        heading: { en: `A Related Trap: Negating "and"`, he: `מלכודת קשורה: שלילת "and"` },
        body: {
          en: `\`and\` requires both sides true; \`or\` requires at least one. Negating a compound condition with \`not\` was flagged as a habit to avoid where possible — thinking in double negatives ("not bought a chair and not bought a table") is genuinely harder to reason about correctly than restating the condition in its positive form.`,
          he: `\`and\` דורשת ששני הצדדים יהיו נכונים; \`or\` דורשת שלפחות אחד יהיה. שלילת תנאי מורכב עם \`not\` סומנה כהרגל שכדאי להימנע ממנו כשאפשר — לחשוב בשלילות כפולות ("לא קניתי כיסא וגם לא קניתי שולחן") באמת קשה יותר לנמק נכון מאשר לנסח מחדש את התנאי בצורתו החיובית.`,
        },
      },
    ],
    principle: {
      en: `In a chain of conditions, order is not cosmetic — it decides which code can ever be reached.`,
      he: `בשרשרת תנאים, הסדר הוא לא קוסמטי — הוא קובע לאיזה קוד בכלל אפשר יהיה להגיע.`,
    },
  },
  {
    number: '07',
    title: { en: `Build a Password Gate, Three Ways`, he: `בונות שער סיסמה, בשלוש דרכים` },
    subtitle: {
      en: `The same loop, ended by condition inversion, by break, and by a flag variable — with a stated preference and why`,
      he: `אותה לולאה, מסתיימת על ידי היפוך תנאי, על ידי break, ועל ידי משתנה דגל — עם העדפה מוצהרת ולמה`,
    },
    sections: [
      {
        heading: { en: `Way One: Invert the Condition`, he: `דרך אחת: הפכי את התנאי` },
        body: {
          en: `\`while password != "pythonforever": password = input(...)\` keeps looping for as long as the password is wrong. The loop's own exit condition does the work — no \`break\` needed anywhere.`,
          he: `\`while password != "pythonforever": password = input(...)\` ממשיכה לולאה כל עוד הסיסמה שגויה. תנאי היציאה של הלולאה עצמה עושה את העבודה — אין צורך ב-\`break\` בשום מקום.`,
        },
      },
      {
        heading: { en: `Way Two: while True Plus break`, he: `דרך שתיים: while True ועוד break` },
        body: {
          en: `\`while True:\` always enters the loop; inside, \`if password == "pythonforever": break\` exits the moment the check succeeds. This works, but was named explicitly as the least-favored option — scattering multiple \`break\` statements through a loop with several exit conditions gets hard to follow at a glance.`,
          he: `\`while True:\` תמיד נכנסת ללולאה; בפנים, \`if password == "pythonforever": break\` יוצאת ברגע שהבדיקה מצליחה. זה עובד, אבל צוין במפורש כאפשרות הפחות מועדפת — פיזור כמה פקודות \`break\` בלולאה עם כמה תנאי יציאה נהיה קשה לעקוב אחריו במבט חטוף.`,
        },
      },
      {
        heading: { en: `Way Three: A Flag Variable`, he: `דרך שלוש: משתנה דגל` },
        body: {
          en: `A variable named \`flag\`, set to \`True\` before the loop and used as the \`while\` condition, gets set to \`False\` from inside once the password matches — the loop exits naturally on its next check. This was the stated preference: one clearly-named on/off switch is easier to reason about than several scattered \`break\` statements, especially once a loop has more than one possible exit.`,
          he: `משתנה בשם \`flag\`, שמוגדר ל-\`True\` לפני הלולאה ומשמש כתנאי ה-\`while\`, מוגדר ל-\`False\` מבפנים ברגע שהסיסמה תואמת — הלולאה יוצאת באופן טבעי בבדיקה הבאה שלה. זו הייתה ההעדפה המוצהרת: מתג הפעלה/כיבוי אחד בעל שם ברור קל יותר לנמק ממנו מספר פקודות \`break\` מפוזרות, במיוחד ברגע שללולאה יש יותר מיציאה אפשרית אחת.`,
        },
      },
    ],
    principle: {
      en: `When a loop can end in more than one way, give the ending a name — don't scatter it as an afterthought.`,
      he: `כשלולאה יכולה להסתיים ביותר מדרך אחת, תני לסיום שם — אל תפזרי אותו כמחשבה לאחר מעשה.`,
    },
  },
  {
    number: '08',
    title: { en: `Ctrl+K Needs Your Intent, Not Just "Fix It"`, he: `Ctrl+K צריכה את הכוונה שלך, לא רק "תקן את זה"` },
    subtitle: {
      en: `A live moment where the shortcut misdiagnosed a bug — until the actual goal was stated in plain language`,
      he: `רגע חי שבו הקיצור אבחן לא נכון באג — עד שהמטרה האמיתית נאמרה בשפה פשוטה`,
    },
    sections: [
      {
        heading: { en: `The Wrong Fix, Confidently Offered`, he: `התיקון הלא נכון, מוצע בביטחון` },
        body: {
          en: `A student's code used the wrong bracket type indexing into a list. Selecting the broken line and asking Ctrl/Cmd+K to "fix it" produced a plausible-looking but incorrect suggestion — the assistant guessed the student wanted to print an entire list of names, because the actual goal (the last character of one specific name) was never stated anywhere in the code or the prompt.`,
          he: `הקוד של סטודנט השתמש בסוג סוגריים לא נכון לאינדוקס לתוך רשימה. סימון השורה השבורה ובקשה מ-Ctrl/Cmd+K "לתקן את זה" הפיקה הצעה שנראית סבירה אבל שגויה — העוזר ניחש שהסטודנט רצה להדפיס רשימה שלמה של שמות, כי המטרה האמיתית (התו האחרון של שם ספציפי אחד) מעולם לא נאמרה בשום מקום בקוד או בבקשה.`,
        },
      },
      {
        heading: { en: `What Actually Fixed It`, he: `מה שבאמת תיקן את זה` },
        body: {
          en: `Only once the student typed out, in plain language, what the code was supposed to do — extract the last letter of each name — did the correction land correctly. The lesson generalizes beyond this one bug: an AI assistant fixes what you tell it is broken, not what you actually meant if you never said it.`,
          he: `רק ברגע שהסטודנט הקליד, בשפה פשוטה, מה הקוד היה אמור לעשות — לחלץ את האות האחרונה של כל שם — התיקון נחת נכון. הלקח מכליל מעבר לבאג הבודד הזה: עוזר AI מתקן את מה שאמרת לו שבור, לא את מה שבאמת התכוונת אם אף פעם לא אמרת את זה.`,
        },
      },
    ],
    principle: {
      en: `"Fix it" fixes the symptom you selected — stating the goal is what lets it fix the actual bug.`,
      he: `"תקן את זה" מתקנת את הסימפטום שסימנת — הצהרה על המטרה היא מה שנותן לזה לתקן את הבאג האמיתי.`,
    },
  },
  {
    number: '09',
    title: { en: `The Two Truth Tables That Matter`, he: `שני טבלאות האמת שחשובות` },
    subtitle: {
      en: `and demands both; or settles for one — and why "and" behaves like multiplication`,
      he: `and דורשת שתיים; or מסתפקת באחת — ולמה "and" מתנהגת כמו כפל`,
    },
    sections: [
      {
        heading: { en: `and: Both, or Nothing`, he: `and: שתיים, או כלום` },
        body: {
          en: `\`True and True\` is the only combination of two conditions joined by \`and\` that yields \`True\` — any single \`False\` on either side collapses the whole expression to \`False\`. The everyday-language anchor: "I bought a chair and I bought a table" is only true if both purchases actually happened.`,
          he: `\`True and True\` הוא השילוב היחיד של שני תנאים המחוברים ב-\`and\` שמניב \`True\` — כל \`False\` בודד בכל צד קורס את הביטוי כולו ל-\`False\`. העוגן בשפת היום-יום: "קניתי כיסא וקניתי שולחן" נכון רק אם שתי הרכישות באמת קרו.`,
        },
      },
      {
        heading: { en: `or: At Least One`, he: `or: לפחות אחת` },
        body: {
          en: `\`or\` is the more counterintuitive one — it returns \`True\` as soon as at least one side is true, including when both are true. This clashes with how "or" often gets used casually in everyday speech (implying exactly one), which is exactly why it trips people up the first time they use it in code.`,
          he: `\`or\` היא המבלבלת יותר — היא מחזירה \`True\` ברגע שלפחות צד אחד נכון, כולל כששניהם נכונים. זה מתנגש עם איך ש"או" נהוגה לפעמים בדיבור יומיומי (ברמז לבדיוק אחד), וזו בדיוק הסיבה שזה מכשיל אנשים בפעם הראשונה שהם משתמשים בזה בקוד.`,
        },
      },
      {
        heading: { en: `The Multiplication Trick`, he: `תרגיל הכפל` },
        body: {
          en: `Treating \`True\` as 1 and \`False\` as 0, \`and\` behaves exactly like multiplication: any 0 in the chain zeroes the whole product, and only all-1s survives. This mnemonic — offered as a nice-to-know, not a requirement — makes \`and\`'s all-or-nothing behavior easy to re-derive instead of memorize.`,
          he: `כשמתייחסים ל-\`True\` כ-1 ול-\`False\` כ-0, \`and\` מתנהגת בדיוק כמו כפל: כל 0 בשרשרת מאפס את כל המכפלה, ורק כולם-1 שורד. הכלל המנמוני הזה — מוצע כתוספת נחמדה, לא כדרישה — הופך את התנהגות הכול-או-כלום של \`and\` לקלה להנגיד מחדש במקום לשנן.`,
        },
      },
    ],
    principle: {
      en: `and is a conjunction that must all hold; or is a promise that at least one does.`,
      he: `and היא צירוף שכולו צריך להתקיים; or היא הבטחה שלפחות אחד מתקיים.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic Python trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על פייתון`,
    },
    sections: [
      {
        heading: { en: `On Indentation`, he: `על הזחה` },
        body: {
          en: `\`if 2 < 1:\` is followed by an indented \`print("B")\` and then a separate, un-indented \`print("Moshe")\`. What prints, and why? Answer: only "Moshe." The condition is false so the indented line never runs, but "Moshe" was never inside the \`if\` block to begin with — its indentation, not the condition, determines that it always runs.`,
          he: `\`if 2 < 1:\` ואחריה \`print("B")\` מוזחת, ואז \`print("Moshe")\` נפרדת ולא-מוזחת. מה מודפס, ולמה? תשובה: רק "Moshe". התנאי לא נכון אז השורה המוזחת אף פעם לא רצה, אבל "Moshe" מעולם לא הייתה בתוך בלוק ה-\`if\` מלכתחילה — ההזחה שלה, לא התנאי, קובעת שהיא תמיד רצה.`,
        },
      },
      {
        heading: { en: `On elif Order`, he: `על סדר ה-elif` },
        body: {
          en: `An elif chain checks \`grade >= 70\` first, \`grade >= 90\` last. What's wrong with this, and what does a grade of 95 print? Answer: it's broken — any grade of at least 70 satisfies the first, loosest branch, so it always fires first and the stricter branches below it, including \`>= 90\`, become unreachable. A grade of 95 prints whatever the \`>= 70\` branch says, not the \`>= 90\` branch.`,
          he: `שרשרת elif בודקת \`grade >= 70\` ראשון, \`grade >= 90\` אחרון. מה לא בסדר בזה, ומה מדפיס ציון 95? תשובה: זה שבור — כל ציון של לפחות 70 מקיים את ההסתעפות הראשונה והרפה ביותר, אז היא תמיד יורה ראשונה וההסתעפות המחמירות יותר מתחתיה, כולל \`>= 90\`, הופכות לבלתי-ניתנות-להשגה. ציון 95 מדפיס מה שההסתעפות \`>= 70\` אומרת, לא הסתעפות \`>= 90\`.`,
        },
      },
      {
        heading: { en: `On and vs. or`, he: `על and מול or` },
        body: {
          en: `\`True and False\` versus \`True or False\` — what does each evaluate to, and why does mixing them up in a real condition matter? Answer: \`True and False\` is \`False\` (and needs both sides true); \`True or False\` is \`True\` (or needs only one). Swapping them in a real condition changes whether a rule requires every criterion to hold or lets a single one carry it — a silent but consequential difference.`,
          he: `\`True and False\` מול \`True or False\` — למה כל אחת מוערכת, ולמה החלפה ביניהן בתנאי אמיתי משנה? תשובה: \`True and False\` הוא \`False\` (ו-and צריכה ששני הצדדים יהיו נכונים); \`True or False\` הוא \`True\` (ו-or צריכה רק אחד). החלפה ביניהן בתנאי אמיתי משנה אם כלל דורש שכל קריטריון יתקיים או מאפשר לאחד בודד לשאת אותו — הבדל שקט אבל בעל השלכות.`,
        },
      },
      {
        heading: { en: `On the Flag Pattern`, he: `על דפוס הדגל` },
        body: {
          en: `Why prefer a flag variable over scattering several \`break\` statements through a loop? Answer: a flag variable gives a loop with multiple possible exits one clearly-named on/off switch that's set to \`False\` when it's time to stop, making the exit condition visible in the \`while\` line itself — while scattered \`break\` statements hide the exit logic inside the loop body, where it's harder to spot at a glance.`,
          he: `למה עדיף משתנה דגל על פני פיזור כמה פקודות \`break\` בלולאה? תשובה: משתנה דגל נותן ללולאה עם כמה יציאות אפשריות מתג הפעלה/כיבוי אחד בעל שם ברור, שמוגדר ל-\`False\` כשהגיע הזמן לעצור, מה שהופך את תנאי היציאה לנראה בשורת ה-\`while\` עצמה — בעוד פקודות \`break\` מפוזרות מסתירות את היגיון היציאה בתוך גוף הלולאה, שם קשה יותר לזהות אותו במבט חטוף.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
