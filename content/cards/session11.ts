import type { CardContent } from './types';

// Session 11 · Python (Module Session 8) · 05.08.2026
// Cards authored from transcript analysis. Original teaching material.

export const session11Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — the blueprint behind "everything is an object," finally revealed`,
      he: `מפתח של אחד-עשר כרטיסים — התבנית שמאחורי "הכול הוא אובייקט", סוף סוף נחשפת`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The sentence that opened Python back in Session 3 — every object has attributes and methods — finally gets its origin story: classes, the blueprints those objects are built from. The session covers defining a class, creating instances, inheritance with three real variants, overriding, and one idea that goes a level deeper — an attribute that holds an entire other object.`,
          he: `המשפט שפתח את פייתון עוד במפגש 3 — לכל אובייקט יש תכונות ומתודות — סוף סוף מקבל את סיפור המקור שלו: מחלקות, התבניות שמהן האובייקטים האלה נבנים. המפגש מכסה הגדרת מחלקה, יצירת מופעים, הורשה עם שלוש וריאציות אמיתיות, דריסה, ורעיון אחד שהולך רמה עמוקה יותר — תכונה שמחזיקה אובייקט שלם אחר.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 connects this session back to everything since Session 3 — read it first for the payoff to land. Card 06 covers the trap almost every group in class fell into live.`,
          he: `כרטיס 01 מחבר את המפגש הזה בחזרה לכל מה שקרה מאז מפגש 3 — כדאי לקרוא אותו קודם כדי שההתגמלות תנחת. כרטיס 06 מכסה את המלכודת שכמעט כל קבוצה בכיתה נפלה אליה בשידור חי.`,
        },
      },
    ],
    principle: {
      en: `Every object used since Session 3 was already proof that this session's idea works — this is just the first time you get to build the blueprint yourself.`,
      he: `כל אובייקט שהיה בשימוש מאז מפגש 3 כבר היה הוכחה שהרעיון של המפגש הזה עובד — זו פשוט הפעם הראשונה שאת בונה את התבנית בעצמך.`,
    },
  },
  {
    number: '01',
    title: { en: `The Sentence Finally Gets Its Origin`, he: `המשפט סוף סוף מקבל מקור` },
    subtitle: {
      en: `"Every object has attributes and methods" — classes are where that sentence comes from`,
      he: `"לכל אובייקט יש תכונות ומתודות" — מחלקות הן המקום שממנו המשפט הזה מגיע`,
    },
    sections: [
      {
        heading: { en: `The Question That Was Owed`, he: `השאלה שהייתה חייבת` },
        body: {
          en: `Since Session 3, every new Python type — strings, lists, tuples, dictionaries — was introduced already having attributes and methods, without ever explaining where that structure came from. A fair question, finally answered directly: a class is the blueprint, and an object is what gets built from it.`,
          he: `מאז מפגש 3, כל טיפוס פייתון חדש — מחרוזות, רשימות, tuples, מילונים — הוצג כשכבר יש לו תכונות ומתודות, בלי שאף פעם הוסבר מאיפה המבנה הזה הגיע. שאלה הוגנת, סוף סוף נענית ישירות: מחלקה היא התבנית, ואובייקט הוא מה שנבנה ממנה.`,
        },
      },
      {
        heading: { en: `The Factory Analogy`, he: `אנלוגיית המפעל` },
        body: {
          en: `A class is a factory machine — it doesn't itself hold a color, a model, a year; it defines what any car coming off it is allowed to have. An object is one specific car that rolled off that machine, with real, filled-in values for every attribute the blueprint promised.`,
          he: `מחלקה היא מכונת מפעל — היא עצמה לא מחזיקה צבע, דגם, שנה; היא מגדירה מה כל מכונית שיוצאת ממנה רשאית להחזיק. אובייקט הוא מכונית ספציפית אחת שיצאה מהמכונה הזו, עם ערכים אמיתיים וממולאים לכל תכונה שהתבנית הבטיחה.`,
        },
      },
    ],
    principle: {
      en: `The classes you write are the same kind of thing every object you've ever used was already built from.`,
      he: `המחלקות שכותבת הן מאותו סוג דבר שכל אובייקט שהשתמשת בו אי-פעם כבר נבנה ממנו.`,
    },
  },
  {
    number: '02',
    title: { en: `class, __init__, and self`, he: `class, __init__ ו-self` },
    subtitle: {
      en: `The minimal vocabulary for defining a blueprint — three pieces, each with one job`,
      he: `אוצר המילים המינימלי להגדרת תבנית — שלושה חלקים, לכל אחד עבודה אחת`,
    },
    sections: [
      {
        heading: { en: `class Names the Blueprint`, he: `class נותנת שם לתבנית` },
        body: {
          en: `\`class Car:\` starts a new blueprint, capitalized by convention. Everything indented beneath it belongs to that blueprint — first the setup, then every action an object of this type is allowed to perform.`,
          he: `\`class Car:\` פותחת תבנית חדשה, באות גדולה לפי מוסכמה. כל מה שמוזח מתחתיה שייך לתבנית הזו — קודם ההקמה, ואז כל פעולה שאובייקט מהסוג הזה רשאי לבצע.`,
        },
      },
      {
        heading: { en: `__init__ Fills In the Blanks`, he: `__init__ ממלאה את החללים` },
        body: {
          en: `\`__init__\` runs automatically the moment an object is created — it's the piece that asks "give me the color, give me the model, give me the year" and stores whatever's handed in. This is why creating an object always looks like calling a function with values: those values are exactly what \`__init__\` is waiting for.`,
          he: `\`__init__\` רצה אוטומטית ברגע שאובייקט נוצר — זה החלק שאומר "תני לי את הצבע, תני לי את הדגם, תני לי את השנה" ושומר כל מה שהוזן. זו הסיבה שיצירת אובייקט תמיד נראית כמו קריאה לפונקציה עם ערכים: הערכים האלה הם בדיוק מה ש-\`__init__\` מחכה לו.`,
        },
      },
      {
        heading: { en: `self Means "This Specific One"`, he: `self אומרת "בדיוק הזה"` },
        body: {
          en: `\`self.color\` reads as: this particular object, specifically, will remember its color as whatever gets passed in. Two dogs created from the same class don't share a name or age — each has its own \`self\`, its own independent identity, even though both came from the exact same blueprint.`,
          he: `\`self.color\` נקראת כך: האובייקט הספציפי הזה, במיוחד, יזכור את הצבע שלו כמה שהועבר פנימה. שני כלבים שנוצרו מאותה מחלקה לא חולקים שם או גיל — לכל אחד יש את ה-\`self\` שלו, את הזהות העצמאית שלו, גם ששניהם הגיעו מאותה תבנית בדיוק.`,
        },
      },
    ],
    principle: {
      en: `self is what turns a shared blueprint into a private, individual existence.`,
      he: `self הוא מה שהופך תבנית משותפת לקיום פרטי ואינדיבידואלי.`,
    },
  },
  {
    number: '03',
    title: { en: `Define, Instantiate, Call`, he: `הגדירו, יצרו מופע, קראו` },
    subtitle: {
      en: `The three-step operational sequence behind every class used this session`,
      he: `הרצף התפעולי בן שלושת השלבים שמאחורי כל מחלקה שהייתה בשימוש במפגש הזה`,
    },
    sections: [
      {
        heading: { en: `The Loop`, he: `הלולאה` },
        body: {
          en: `First, define the class once — the blueprint, written a single time. Second, create as many instances of it as needed, each with its own values. Third, call methods or read attributes on any specific instance to actually use it.`,
          he: `ראשית, מגדירים את המחלקה פעם אחת — התבנית, נכתבת פעם בודדת. שנית, יוצרים כמה מופעים ממנה שצריך, כל אחד עם הערכים שלו. שלישית, קוראים למתודות או קוראים תכונות על מופע ספציפי כדי באמת להשתמש בו.`,
        },
      },
      {
        heading: { en: `One Blueprint, Many Cars`, he: `תבנית אחת, הרבה מכוניות` },
        body: {
          en: `The whole point of separating steps one and two: the class is written exactly once no matter how many objects eventually get built from it — a hundred dogs, a hundred books, a hundred agents, all sharing the same blueprint while each keeps its own separate values.`,
          he: `כל הטעם בהפרדת שלב אחד ושתיים: המחלקה נכתבת בדיוק פעם אחת לא משנה כמה אובייקטים בסוף ייבנו ממנה — מאה כלבים, מאה ספרים, מאה סוכנים, כולם חולקים את אותה תבנית בעוד שכל אחד שומר את הערכים הנפרדים שלו.`,
        },
      },
    ],
    principle: {
      en: `Write the shape once; stamp out as many individuals from it as the problem needs.`,
      he: `כתבי את הצורה פעם אחת; חתמי ממנה כמה שיותר יחידים שהבעיה צריכה.`,
    },
  },
  {
    number: '04',
    title: { en: `Green but Silent`, he: `ירוק אבל שקט` },
    subtitle: {
      en: `Creating an object with no error and no output can look like nothing happened — it didn't`,
      he: `יצירת אובייקט בלי שגיאה ובלי פלט יכולה להיראות כאילו שום דבר לא קרה — זה לא נכון`,
    },
    sections: [
      {
        heading: { en: `The Confusion, Named`, he: `הבלבול, בשם` },
        body: {
          en: `Several groups defined a class correctly, ran the cell, saw the green success mark, and concluded something was broken — because nothing visible appeared on screen. Nothing was broken. Defining a class builds the factory; it doesn't print anything, because it was never asked to.`,
          he: `כמה קבוצות הגדירו מחלקה נכון, הריצו את התא, ראו את סימן ההצלחה הירוק, והסיקו שמשהו שבור — כי שום דבר גלוי לא הופיע על המסך. שום דבר לא היה שבור. הגדרת מחלקה בונה את המפעל; היא לא מדפיסה כלום, כי מעולם לא התבקשה לעשות זאת.`,
        },
      },
      {
        heading: { en: `Proof Requires Asking a Question`, he: `הוכחה דורשת לשאול שאלה` },
        body: {
          en: `Confirming a class actually worked means creating an instance and then explicitly asking it something — printing an attribute, calling a method. A green run without that follow-up step is not evidence of success or failure; it's simply evidence that nothing was asked yet.`,
          he: `אימות שמחלקה באמת עבדה אומר ליצור מופע ואז לשאול אותו במפורש משהו — להדפיס תכונה, לקרוא למתודה. ריצה ירוקה בלי צעד ההמשך הזה היא לא הוכחה להצלחה או כישלון; היא פשוט הוכחה ששום דבר עדיין לא נשאל.`,
        },
      },
    ],
    principle: {
      en: `A quiet success and a silent failure look identical — the only way to tell them apart is to ask a question and check the answer.`,
      he: `הצלחה שקטה וכישלון שקט נראים זהים — הדרך היחידה להבדיל ביניהם היא לשאול שאלה ולבדוק את התשובה.`,
    },
  },
  {
    number: '05',
    title: { en: `Three Ways to Inherit`, he: `שלוש דרכים לרשת` },
    subtitle: {
      en: `Take the parent's attributes as-is, refuse them entirely, or take them and add your own`,
      he: `לקחת את התכונות של ההורה כמות שהן, לסרב להן לגמרי, או לקחת אותן ולהוסיף משלך`,
    },
    sections: [
      {
        heading: { en: `Option One: Take Them As-Is`, he: `אופציה אחת: לקחת אותן כמות שהן` },
        body: {
          en: `Writing \`class Electric(Car):\` with no further attribute changes means the child accepts every attribute the parent offers, unmodified — no more, no less, exactly as defined.`,
          he: `כתיבת \`class Electric(Car):\` בלי שינויי תכונות נוספים אומרת שהילד מקבל כל תכונה שההורה מציע, בלי שינוי — לא יותר ולא פחות, בדיוק כפי שהוגדר.`,
        },
      },
      {
        heading: { en: `Option Two: Start Over Completely`, he: `אופציה שתיים: להתחיל מחדש לגמרי` },
        body: {
          en: `Not inheriting the parent's attributes at all means defining a fresh, independent set from scratch — the parent-child relationship exists in name, in the class declaration, but none of the parent's specific attribute values carry over.`,
          he: `לא לרשת את התכונות של ההורה בכלל אומר להגדיר סט טרי ועצמאי מאפס — היחס הורה-ילד קיים בשם, בהצהרת המחלקה, אבל אף אחד מהערכים הספציפיים של תכונות ההורה לא עובר הלאה.`,
        },
      },
      {
        heading: { en: `Option Three: super() — Take Them and Add More`, he: `אופציה שלוש: super() — לקחת ולהוסיף עוד` },
        body: {
          en: `Calling \`super().__init__(...)\` inside the child's own \`__init__\` takes every attribute the parent defines and then adds new ones specific to the child on top — an electric car gets make, model, and year from \`Car\`, plus a battery size that only makes sense for it.`,
          he: `קריאה ל-\`super().__init__(...)\` בתוך ה-\`__init__\` של הילד עצמו לוקחת כל תכונה שההורה מגדיר ואז מוסיפה חדשות ספציפיות לילד מעל — רכב חשמלי מקבל יצרן, דגם ושנה מ-\`Car\`, בתוספת גודל סוללה שרק לו יש טעם.`,
        },
      },
    ],
    principle: {
      en: `Inheritance isn't all-or-nothing by default — it's a choice with three real shapes, made explicit in how the child class is written.`,
      he: `הורשה היא לא הכול-או-כלום כברירת מחדל — זו בחירה עם שלוש צורות אמיתיות, שנעשית מפורשת באיך שמחלקת הילד נכתבת.`,
    },
  },
  {
    number: '06',
    title: { en: `Specific Beats General`, he: `הספציפי מנצח את הכללי` },
    subtitle: {
      en: `An inherited method that doesn't fit gets fixed by overriding it, not by fighting the inheritance`,
      he: `מתודה מורשת שלא מתאימה מתוקנת על ידי דריסתה, לא על ידי מלחמה בהורשה`,
    },
    sections: [
      {
        heading: { en: `The Nonsense Method`, he: `המתודה חסרת ההיגיון` },
        body: {
          en: `An \`Electric\` class inheriting from \`Car\` automatically receives \`fill_gas_tank()\`, whether it makes sense or not — and for an electric vehicle, it plainly doesn't. Inheritance is not selective by default; the child receives the whole set of methods the parent defines.`,
          he: `מחלקת \`Electric\` שיורשת מ-\`Car\` מקבלת אוטומטית את \`fill_gas_tank()\`, בין אם זה הגיוני ובין אם לא — ועבור רכב חשמלי, זה ברור שלא. הורשה היא לא סלקטיבית כברירת מחדל; הילד מקבל את כל סט המתודות שההורה מגדיר.`,
        },
      },
      {
        heading: { en: `Fix It by Writing the Same Name Again`, he: `תקני את זה על ידי כתיבת אותו שם שוב` },
        body: {
          en: `Defining a method with the identical name inside the child class overrides the inherited version completely. The rule behind why this works is simple: the more specific definition wins over the more general one — the child, being more specific than the parent, always takes priority.`,
          he: `הגדרת מתודה עם שם זהה בתוך מחלקת הילד דורסת את הגרסה המורשת לגמרי. הכלל שמאחורי למה זה עובד הוא פשוט: ההגדרה הספציפית יותר מנצחת את הכללית יותר — הילד, בהיותו ספציפי יותר מההורה, תמיד מקבל עדיפות.`,
        },
      },
    ],
    principle: {
      en: `You can't selectively refuse an inherited method — but you can always outrank it with one of your own.`,
      he: `אי אפשר לסרב באופן סלקטיבי למתודה מורשת — אבל תמיד אפשר לדרג אותה נמוך יותר עם אחת משלך.`,
    },
  },
  {
    number: '07',
    title: { en: `Build an Inheritance Chain`, he: `בונות שרשרת הורשה` },
    subtitle: {
      en: `A parent class, a child that extends it, and a method that overrides — exactly as assigned`,
      he: `מחלקת הורה, ילד שמרחיב אותה, ומתודה שדורסת — בדיוק כפי שהוקצה`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: define a parent class — for example, \`Animal\` — with an \`__init__\` that accepts a name and age, and one method that returns a description built from them. Two: define a child class, \`Dog(Animal)\`, so it inherits both the attributes and the method as-is. Three: add one new method to the child that only makes sense for it — a \`bark()\` that prints a sound. Four: create an instance of the child class and call both the inherited method and the new one, confirming both work from the same object.`,
          he: `אחת: הגדירי מחלקת הורה — לדוגמה, \`Animal\` — עם \`__init__\` שמקבלת שם וגיל, ומתודה אחת שמחזירה תיאור שנבנה מהם. שתיים: הגדירי מחלקת ילד, \`Dog(Animal)\`, כך שהיא יורשת גם את התכונות וגם את המתודה כמות שהן. שלוש: הוסיפי מתודה חדשה אחת לילד שרק לה יש טעם עבורו — \`bark()\` שמדפיסה קול. ארבע: צרי מופע ממחלקת הילד וקראי גם למתודה המורשת וגם לחדשה, ואשרי ששתיהן עובדות מאותו אובייקט.`,
        },
      },
      {
        heading: { en: `A Note on Order`, he: `הערה על סדר` },
        body: {
          en: `The child class's parenthetical reference to its parent must come after the parent is already defined — Python reads top to bottom, and a class that doesn't exist yet when referenced simply can't be found.`,
          he: `ההפניה בסוגריים של מחלקת הילד להורה שלה חייבת לבוא אחרי שההורה כבר הוגדר — פייתון קוראת מלמעלה למטה, ומחלקה שעדיין לא קיימת כשמפנים אליה פשוט לא ניתנת למציאה.`,
        },
      },
    ],
    principle: {
      en: `A child class is never more than its parent plus a short, specific list of what's different.`,
      he: `מחלקת ילד היא לעולם לא יותר מההורה שלה בתוספת רשימה קצרה וספציפית של מה שונה.`,
    },
  },
  {
    number: '08',
    title: { en: `You Don't Need to Write the Whole Class`, he: `לא צריך לכתוב את כל המחלקה` },
    subtitle: {
      en: `Pandas' DataFrame and CrewAI's Agent are both classes someone else already wrote — you just create the object`,
      he: `ה-DataFrame של Pandas וה-Agent של CrewAI הם שתיהן מחלקות שמישהי אחרת כבר כתבה — את רק יוצרת את האובייקט`,
    },
    sections: [
      {
        heading: { en: `Recognizing It in the Wild`, he: `לזהות את זה בטבע` },
        body: {
          en: `A capitalized name followed by parentheses — \`pd.DataFrame(...)\`, \`Agent(...)\` — is the same instantiation pattern taught this session, just aimed at a class defined inside a library instead of one written by hand. Recognizing the pattern means recognizing that someone already built the blueprint.`,
          he: `שם באות גדולה שאחריו סוגריים — \`pd.DataFrame(...)\`, \`Agent(...)\` — הוא אותו דפוס יצירת מופע שנלמד במפגש הזה, רק מכוון למחלקה שמוגדרת בתוך ספרייה במקום כזו שנכתבה ידנית. לזהות את הדפוס אומר לזהות שמישהי כבר בנתה את התבנית.`,
        },
      },
      {
        heading: { en: `The Actual Skill Being Tested`, he: `הכישור שבאמת נבדק` },
        body: {
          en: `A DataFrame's underlying class runs to far more code than anything written by hand this session — and none of that matters for using it well. What matters is being able to look at unfamiliar attributes like \`index\` or \`columns\` and correctly recognize them as exactly the same concept just taught: attributes and methods on an object built from a class.`,
          he: `המחלקה שמאחורי DataFrame משתרעת על הרבה יותר קוד מכל דבר שנכתב ידנית במפגש הזה — ושום דבר מזה לא משנה לשימוש טוב בו. מה שכן משנה זה היכולת להסתכל על תכונות לא מוכרות כמו \`index\` או \`columns\` ולזהות אותן נכון כאותו בדיוק מושג שזה עתה נלמד: תכונות ומתודות על אובייקט שנבנה ממחלקה.`,
        },
      },
    ],
    principle: {
      en: `The point of learning to write a class is not to write every class — it's to recognize one wherever it's already been written for you.`,
      he: `הטעם בללמוד לכתוב מחלקה הוא לא לכתוב כל מחלקה — הוא לזהות אחת בכל מקום שכבר נכתבה בשבילך.`,
    },
  },
  {
    number: '09',
    title: { en: `An Attribute Can Hold a Whole Other Object`, he: `תכונה יכולה להחזיק אובייקט שלם אחר` },
    subtitle: {
      en: `Composition — embedding one class inside another's attribute, going one level deeper than inheritance`,
      he: `הרכבה — הטמעת מחלקה אחת בתוך תכונה של אחרת, רמה עמוקה יותר מהורשה`,
    },
    sections: [
      {
        heading: { en: `Not Every Attribute Is a Primitive`, he: `לא כל תכונה היא פרימיטיבית` },
        body: {
          en: `Every attribute seen so far held a plain value — a string, a number. An electric car's \`battery\` attribute breaks that pattern: instead of a plain value, it holds a full instance of a separate \`Battery\` class, complete with its own attributes and its own methods, nested one level inside the car.`,
          he: `כל תכונה שנראתה עד עכשיו החזיקה ערך פשוט — מחרוזת, מספר. התכונה \`battery\` של רכב חשמלי שוברת את הדפוס הזה: במקום ערך פשוט, היא מחזיקה מופע מלא של מחלקת \`Battery\` נפרדת, שלמה עם התכונות והמתודות שלה עצמה, מקוננת רמה אחת בתוך הרכב.`,
        },
      },
      {
        heading: { en: `Reaching Through Two Layers`, he: `להגיע דרך שתי שכבות` },
        body: {
          en: `Calling \`tesla.battery.describe()\` reads left to right as a path: the car, then its battery attribute, then a method that belongs to the battery itself — not to the car. This is a genuinely different relationship from inheritance: it's not "is a," it's "has a."`,
          he: `קריאה ל-\`tesla.battery.describe()\` נקראת משמאל לימין כמסלול: הרכב, ואז תכונת הסוללה שלו, ואז מתודה ששייכת לסוללה עצמה — לא לרכב. זה יחס שונה באמת מהורשה: זה לא "הוא", זה "יש לו".`,
        },
      },
    ],
    principle: {
      en: `Inheritance answers "what kind of thing is this." Composition answers "what does this thing contain" — and an object can contain another object just as easily as it contains a number.`,
      he: `הורשה עונה על "איזה סוג דבר זה". הרכבה עונה על "מה הדבר הזה מכיל" — ואובייקט יכול להכיל אובייקט אחר בדיוק כמו שהוא מכיל מספר.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic OOP trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על OOP`,
    },
    sections: [
      {
        heading: { en: `On Silent Success`, he: `על הצלחה שקטה` },
        body: {
          en: `A class is defined, the cell runs with a green success mark, and nothing is printed. Did it work? Answer: there's no way to tell yet — defining a class never prints anything by itself. Only creating an instance and explicitly asking it something, like printing an attribute or calling a method, actually confirms whether it works.`,
          he: `מחלקה מוגדרת, התא רץ עם סימן הצלחה ירוק, ושום דבר לא מודפס. האם זה עבד? תשובה: אין דרך לדעת עדיין — הגדרת מחלקה אף פעם לא מדפיסה כלום בעצמה. רק יצירת מופע ושאילת שאלה מפורשת כלפיו, כמו הדפסת תכונה או קריאה למתודה, באמת מאשרת אם זה עובד.`,
        },
      },
      {
        heading: { en: `On Inheritance Options`, he: `על אפשרויות הורשה` },
        body: {
          en: `A child class is written as \`class Dog(Animal):\` with no \`super().__init__()\` call and no new attributes defined. Which of the three inheritance options is this? Answer: option one — take the parent's attributes exactly as-is. Without \`super()\` adding anything, the child simply carries forward what the parent already defines, unmodified.`,
          he: `מחלקת ילד נכתבת כ-\`class Dog(Animal):\` בלי קריאת \`super().__init__()\` ובלי תכונות חדשות מוגדרות. איזו משלוש אפשרויות ההורשה זו? תשובה: אופציה אחת — לקחת את התכונות של ההורה בדיוק כמות שהן. בלי \`super()\` שמוסיפה משהו, הילד פשוט נושא הלאה את מה שההורה כבר מגדיר, בלי שינוי.`,
        },
      },
      {
        heading: { en: `On Overriding`, he: `על דריסה` },
        body: {
          en: `An Electric class inherits fill_gas_tank() from Car, which doesn't make sense for it. Why does defining a new method with the exact same name in Electric fix this, rather than causing a conflict? Answer: Python's rule is that the more specific definition wins over the more general one — the child's version, being more specific, automatically overrides the parent's, with no error or conflict.`,
          he: `מחלקת Electric יורשת את fill_gas_tank() מ-Car, מה שלא הגיוני עבורה. למה הגדרת מתודה חדשה עם אותו שם בדיוק ב-Electric מתקנת את זה, במקום לגרום להתנגשות? תשובה: הכלל של פייתון הוא שההגדרה הספציפית יותר מנצחת את הכללית יותר — הגרסה של הילד, בהיותה ספציפית יותר, דורסת אוטומטית את זו של ההורה, בלי שגיאה או התנגשות.`,
        },
      },
      {
        heading: { en: `On Composition`, he: `על הרכבה` },
        body: {
          en: `An Electric car's battery attribute holds a full Battery object rather than a plain number. What relationship does this represent, and how is it different from inheritance? Answer: this is composition, a "has a" relationship — the car has a battery, rather than being a kind of battery. Inheritance instead describes an "is a" relationship, where a child class is a more specific version of its parent.`,
          he: `תכונת ה-battery של רכב חשמלי מחזיקה אובייקט Battery מלא במקום מספר פשוט. איזה יחס זה מייצג, ואיך זה שונה מהורשה? תשובה: זו הרכבה, יחס של "יש לו" — לרכב יש סוללה, במקום להיות סוג של סוללה. הורשה לעומת זאת מתארת יחס של "הוא", שבו מחלקת ילד היא גרסה ספציפית יותר של ההורה שלה.`,
        },
      },
    ],
    principle: {
      en: `A memorized syntax answers "how." These questions only answer to "why."`,
      he: `תחביר שמושנן עונה על "איך". השאלות האלה עונות רק ל"למה".`,
    },
  },
];
