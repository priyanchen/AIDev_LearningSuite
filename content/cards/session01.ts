import type { CardContent } from './types';

// Session 01 · Course Opening (Module 1) · 28.06.2026
// Sourced from Dr. Zuari's two original opening slide decks (no recording/transcript exists — the Drive link is dead,
// only the chat log survives, which is not narration). Content is grounded in his own authored slides: the German Tank
// Problem lecture and the course orientation deck, not generic AI-history knowledge.

export const session01Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map opening the entire course — starting with five numbers on the corners of Soviet tanks, and ending with what it actually takes to succeed here`,
      he: `מפתח של אחד-עשר כרטיסים שפותח את כל הקורס — מתחיל בחמישה מספרים בפינות של טנקים סובייטיים, ומסתיים במה שבאמת דרוש כדי להצליח כאן`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `The course opens with a real statistical puzzle — how much five numbers can actually tell you — before ever mentioning a model or an algorithm. From there it moves through a genuine history of AI (not a highlight reel, a pattern of hype and winter repeating itself), a substantial tour of AI's real ethical failures, and closes with the course's own explicit guidance on how to actually succeed in it.`,
          he: `הקורס נפתח בחידה סטטיסטית אמיתית — כמה חמישה מספרים בעצם יכולים לומר לך — לפני שמזכירים בכלל מודל או אלגוריתם. משם הוא עובר דרך היסטוריה אמיתית של AI (לא סרטון הייטלייטס, אלא דפוס של היפ וחורף שחוזר על עצמו), סיור מהותי בכשלים האתיים האמיתיים של AI, ונסגר בהנחיה המפורשת של הקורס עצמו לגבי איך באמת להצליח בו.`,
        },
      },
      {
        heading: { en: `A Note on This Card's Source`, he: `הערה על המקור של הכרטיס הזה` },
        body: {
          en: `Unlike every other session in this deck, no lecture recording or transcript survives for this one — the source link is dead. This deck is built instead from Dr. Zuari's own two original slide decks for the opening session: a full lecture on the German Tank Problem, and the course orientation deck itself. The content is his authored material, not a narration reconstruction.`,
          he: `בניגוד לכל מפגש אחר בחפיסה הזו, שום הקלטת הרצאה או תמלול לא שרדו למפגש הזה — קישור המקור מת. החפיסה הזו נבנתה במקום זאת משני מצגות המקור המקוריות של ד״ר זוארי למפגש הפתיחה: הרצאה מלאה על בעיית הטנקים הגרמנים, ומצגת התמצאות הקורס עצמה. התוכן הוא החומר המחובר שלו, לא שחזור נראציה.`,
        },
      },
    ],
    principle: {
      en: `Everything the course will teach for the next thirty-four sessions rests on a habit this session opens with: distrust a number until you've reasoned out exactly what it can and can't tell you.`,
      he: `כל מה שהקורס ילמד בשלושים וארבעת המפגשים הבאים נשען על הרגל שהמפגש הזה נפתח בו: לחשוד במספר עד שחשבת בדיוק מה הוא יכול ומה הוא לא יכול לומר לך.`,
    },
  },
  {
    number: '01',
    title: { en: `The German Tank Problem`, he: `בעיית הטנקים הגרמנים` },
    subtitle: {
      en: `Five serial numbers — 209, 317, 495, 348, 63 — and the question of how much they can honestly tell you about a hidden total`,
      he: `חמישה מספרים סידוריים — 209, 317, 495, 348, 63 — והשאלה כמה הם יכולים לומר לך באמת על סך כולל נסתר`,
    },
    sections: [
      {
        heading: { en: `The Setup`, he: `הסיפור הפותח` },
        body: {
          en: `May 1970, Moscow: American journalists at a military parade photograph a new Soviet tank from every angle, and the Pentagon wants to know how many exist. Careful analysis of the footage reveals something unexpected — a serial number visible on the front corner of each tank: 209, 317, 495, 348, 63. Given only this, what can honestly be said about the total number of tanks?`,
          he: `מאי 1970, מוסקבה: עיתונאים אמריקאים במצעד צבאי מצלמים טנק סובייטי חדש מכל זווית, והפנטגון רוצה לדעת כמה קיימים. ניתוח קפדני של הצילום חושף משהו בלתי צפוי — מספר סידורי נראה בפינה הקדמית של כל טנק: 209, 317, 495, 348, 63. בהינתן רק זה, מה אפשר לומר באמת על המספר הכולל של הטנקים?`,
        },
      },
      {
        heading: { en: `Naive Bounds Aren't Enough`, he: `גבולות תמימים לא מספיקים` },
        body: {
          en: `The trivial answer — at least five tanks exist, since five were seen — is technically true and useless. Assuming the numbers are sequential production numbers drawn from a real, finite fleet, "at least 495" is defensible, but so is a whole range: "more than 495" feels reasonable, "more than 1,000" starts to feel unreasonable. Neither is a real estimate — both are just bounds around a genuine unknown.`,
          he: `התשובה הטריוויאלית — קיימים לפחות חמישה טנקים, כי חמישה נראו — נכונה טכנית וחסרת תועלת. בהנחה שהמספרים הם מספרי ייצור סידוריים שנשלפו מצי אמיתי וסופי, "לפחות 495" ניתן להגנה, אבל כך גם טווח שלם: "יותר מ-495" מרגיש סביר, "יותר מ-1,000" מתחיל להרגיש לא סביר. אף אחד מהם הוא לא הערכה אמיתית — שניהם רק גבולות סביב לא-ידוע אמיתי.`,
        },
      },
      {
        heading: { en: `Two Genuinely Sharper Estimates`, he: `שתי הערכות חדות באמת` },
        body: {
          en: `Two reasoning paths get much closer. First: if the numbers are roughly symmetric across the true range, their average should sit near the midpoint — the average of the five numbers is 286.4, so the total is roughly double that, about 573. Second: the five numbers split the range into six gaps; by the same symmetry logic, the final unseen gap should resemble the first observed one, giving 495 + 63 = 558. Two different logics, landing in the same neighborhood — and Dr. Zuari's explicit closing point: there isn't always a single "better" logic between them.`,
          he: `שני נתיבי חשיבה מתקרבים הרבה יותר. ראשון: אם המספרים מפוזרים בערך בסימטריה על פני הטווח האמיתי, הממוצע שלהם צריך לשבת קרוב לאמצע — הממוצע של חמשת המספרים הוא 286.4, אז הסך הכולל הוא בערך כפול מזה, בערך 573. שני: חמשת המספרים מחלקים את הטווח לשישה מרווחים; לפי אותה לוגיקת סימטריה, המרווח האחרון הבלתי-נראה צריך להידמות לראשון שנצפה, מה שנותן 495 + 63 = 558. שתי לוגיקות שונות, נוחתות באותה שכונה — והנקודה המפורשת שד״ר זוארי סגר איתה: לא תמיד יש לוגיקה אחת "טובה יותר" ביניהן.`,
        },
      },
      {
        heading: { en: `This Wasn't Hypothetical`, he: `זה לא היה היפותטי` },
        body: {
          en: `The real story behind this: in World War II, Allied forces used exactly this logic on captured German tank parts. German manufacturing precision meant every gearbox carried a stamped, sequential production number — and tracking captured serial numbers let the Allies estimate total German tank production with real accuracy, corroborated after the war by captured German production records.`,
          he: `הסיפור האמיתי מאחורי זה: במלחמת העולם השנייה, כוחות בעלות הברית השתמשו בדיוק בלוגיקה הזו על חלקי טנקים גרמניים שנתפסו. הדיוק הייצורי הגרמני אמר שכל תיבת הילוכים נשאה מספר ייצור סידורי מוטבע — ומעקב אחר מספרים סידוריים שנתפסו איפשר לבעלות הברית להעריך את סך הייצור הגרמני של טנקים בדיוק אמיתי, מה שאושר לאחר המלחמה על ידי רשומות ייצור גרמניות שנתפסו.`,
        },
      },
    ],
    principle: {
      en: `Small data isn't the same as no data — the discipline is knowing exactly how much a handful of numbers actually license you to conclude, no more and no less.`,
      he: `נתונים מעטים הם לא אותו דבר כמו אין נתונים — המשמעת היא לדעת בדיוק כמה קומץ מספרים בעצם מרשה לך להסיק, לא יותר ולא פחות.`,
    },
  },
  {
    number: '02',
    title: { en: `Two Definitions, and Where This Course Is Going`, he: `שתי הגדרות, ולאן הקורס הזה הולך` },
    subtitle: {
      en: `McCarthy's 1956 definition, Mitchell's 1997 one, and the eight-part arc from no-code automation to a final project`,
      he: `ההגדרה של מק'קארתי מ-1956, זו של מיטשל מ-1997, והקשת בת שמונת החלקים מאוטומציה חסרת-קוד ועד לפרויקט גמר`,
    },
    sections: [
      {
        heading: { en: `Two Definitions, Decades Apart`, he: `שתי הגדרות, עשורים מרוחקים` },
        body: {
          en: `John McCarthy, 1956: "the science and engineering of making intelligent machines, especially intelligent computer programs." Tom Mitchell, 1997, gave it operational teeth: "a computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E." The first names the field; the second is close to a definition you could actually code against.`,
          he: `ג'ון מק'קארתי, 1956: "המדע וההנדסה של יצירת מכונות אינטליגנטיות, בייחוד תוכנות מחשב אינטליגנטיות." טום מיטשל, 1997, נתן לה שיניים תפעוליות: "נאמר שתוכנת מחשב לומדת מניסיון E ביחס למחלקה כלשהי של משימות T ומדד ביצועים P, אם הביצועים שלה במשימות ב-T, כפי שנמדדים על ידי P, משתפרים עם הניסיון E." הראשונה מכנה את התחום; השנייה קרובה להגדרה שאפשר באמת לתכנת נגדה.`,
        },
      },
      {
        heading: { en: `The Course Arc`, he: `קשת הקורס` },
        body: {
          en: `The roadmap, as presented: n8n (no-code automation), Python and Data Science (built with Cursor and Claude as coding partners from day one), Computer Vision, a Sample Project as a practical checkpoint, LLM and RAG, AI Agents, and a Final Project. Each module is a real layer added on top of the last — the course is deliberately sequential, not a set of independent topics.`,
          he: `מפת הדרכים, כפי שהוצגה: n8n (אוטומציה חסרת-קוד), Python ומדעי הנתונים (נבנים עם Cursor ו-Claude כשותפי קוד מהיום הראשון), ראייה ממוחשבת, פרויקט לדוגמה כנקודת ביקורת מעשית, LLM ו-RAG, סוכני AI, ופרויקט גמר. כל מודול הוא שכבה אמיתית שנוספת מעל הקודמת — הקורס הוא במכוון רציף, לא אוסף נושאים עצמאיים.`,
        },
      },
      {
        heading: { en: `What a Good AI Developer Actually Is`, he: `מה מפתחת AI טובה בעצם` },
        body: {
          en: `The opening slides include, almost as a wink, ChatGPT's own answer to "what makes a good AI developer": someone who can build and implement intelligent solutions to solve real problems, with strong programming skills and a genuine understanding of machine learning, capable of collecting, cleaning, and analyzing real data to actually improve a model's accuracy — not just someone who can talk about AI.`,
          he: `שקפי הפתיחה כוללים, כמעט כקריצה, את התשובה של ChatGPT עצמו ל"מה הופך למפתחת AI טובה": מישהי שיכולה לבנות וליישם פתרונות אינטליגנטיים לפתרון בעיות אמיתיות, עם מיומנויות תכנות חזקות והבנה אמיתית של למידת מכונה, מסוגלת לאסוף, לנקות, ולנתח נתונים אמיתיים כדי באמת לשפר את הדיוק של מודל — לא סתם מישהי שיודעת לדבר על AI.`,
        },
      },
    ],
    principle: {
      en: `Every module ahead is trying to close the gap between knowing what AI means and being able to build something that actually learns from real experience.`,
      he: `כל מודול שלפנינו מנסה לסגור את הפער בין לדעת מה AI אומר לבין להיות מסוגלת לבנות משהו שבאמת לומד מניסיון אמיתי.`,
    },
  },
  {
    number: '03',
    title: { en: `How to Actually Succeed in This Course`, he: `איך באמת להצליח בקורס הזה` },
    subtitle: {
      en: `Seven explicit pieces of guidance from the course itself — not generic study advice, the actual list`,
      he: `שבע הנחיות מפורשות מהקורס עצמו — לא עצת לימוד כללית, הרשימה בפועל`,
    },
    sections: [
      {
        heading: { en: `Presence, Consistency, and Volume`, he: `נוכחות, עקביות, ונפח` },
        body: {
          en: `Don't miss any class — every lesson builds on the previous one, so presence genuinely matters, not just as a formality. Spread the learning across the week rather than cramming into one day — consistency is what makes it stick. And the most direct one: practice, practice, practice — the more code actually written, the more it clicks.`,
          he: `אל תפספסי אף שיעור — כל שיעור נבנה על הקודם, אז נוכחות באמת חשובה, לא רק כפורמליות. פזרי את הלמידה על פני השבוע במקום לדחוס ליום אחד — עקביות היא מה שגורם לזה להיטמע. והישירה מכולן: תרגלי, תרגלי, תרגלי — ככל שנכתב בפועל יותר קוד, ככה זה יותר נופל למקום.`,
        },
      },
      {
        heading: { en: `Asking, Struggling, and Not Overusing AI Yet`, he: `לשאול, להתמודד, ולא להשתמש יתר על המידה ב-AI עדיין` },
        body: {
          en: `Ask questions, even the small ones — literally telling ChatGPT "explain it to me like I'm in first grade" is an endorsed strategy here, not a shortcut to be embarrassed about. A genuinely counter-intuitive one for an AI-focused course: avoid overusing AI tools, at least at first — real learning happens in the struggle before the tool solves it for you. And a permission slip: don't get frustrated when something doesn't work right away, some tasks legitimately take hours, and that's fine. Use the instructors and TA — that's what they're there for.`,
          he: `שאלי שאלות, אפילו הקטנות — לומר תרתי משמע ל-ChatGPT "תסביר לי כאילו אני בכיתה א'" היא אסטרטגיה מאושרת כאן, לא קיצור דרך להתבייש בו. אחת שהיא באמת לא-אינטואיטיבית לקורס שממוקד ב-AI: הימנעי משימוש יתר בכלי AI, לפחות בהתחלה — למידה אמיתית קורית במאבק לפני שהכלי פותר את זה בשבילך. ואישור: אל תתוסכלי כשמשהו לא עובד מייד, כמה משימות באמת לוקחות שעות, וזה בסדר. השתמשי במרצים ובעוזרת ההוראה — בשביל זה הם שם.`,
        },
      },
    ],
    principle: {
      en: `Every piece of this advice points the same direction — the struggle is the curriculum, and the tools, including AI itself, are meant to arrive after the struggle, not instead of it.`,
      he: `כל חלק בעצה הזו מצביע לאותו כיוון — המאבק הוא תוכנית הלימודים, והכלים, כולל AI עצמו, אמורים להגיע אחרי המאבק, לא במקומו.`,
    },
  },
  {
    number: '04',
    title: { en: `AI's History Is a Boom-Bust Cycle, Not a Straight Line`, he: `ההיסטוריה של AI היא מחזור של פריחה-שפל, לא קו ישר` },
    subtitle: {
      en: `1956's founding optimism, the 1970s winter, and the quiet 1986 breakthrough nobody could use yet`,
      he: `האופטימיות המכוננת של 1956, החורף של שנות ה-70, והפריצה השקטה של 1986 שאף אחד לא יכול היה להשתמש בה עדיין`,
    },
    sections: [
      {
        heading: { en: `1956: The Term Is Coined, With Real Optimism`, he: `1956: המונח נטבע, עם אופטימיות אמיתית` },
        body: {
          en: `Alan Turing proposed his famous test in 1950. In 1956, the Dartmouth Conference — organized by John McCarthy — coined the term "artificial intelligence" itself, uniting researchers from different fields around the idea that intelligence could be simulated by machines. Real early wins followed: McCarthy's Lisp language (1958), ELIZA (1966, MIT) convincing many users they were talking to a real therapist, and Shakey the robot, the first to operate and navigate autonomously.`,
          he: `אלן טיורינג הציע את המבחן המפורסם שלו ב-1950. ב-1956, ועידת דארטמות' — שאורגנה על ידי ג'ון מק'קארתי — טבעה את המונח "בינה מלאכותית" עצמו, ואיחדה חוקרים משדות שונים סביב הרעיון שאינטליגנציה יכולה להיות מדומה על ידי מכונות. ניצחונות מוקדמים אמיתיים באו בעקבות זאת: שפת ה-Lisp של מק'קארתי (1958), ELIZA (1966, MIT) ששכנעה משתמשים רבים שהם מדברים עם מטפלת אמיתית, והרובוט "שייקי", הראשון שפעל וניווט באופן אוטונומי.`,
        },
      },
      {
        heading: { en: `The 1970s Winter, and What Survived It`, he: `החורף של שנות ה-70, ומה ששרד אותו` },
        body: {
          en: `Harsh government criticism of AI's lack of real progress led to funding cuts, canceled projects, and deflated expectations — the gap between promise and actual system capability caused genuine disappointment. But it wasn't a total freeze: Expert Systems, programs given codified human expert knowledge, kept working — Stanford's MYCIN (1974) successfully diagnosed diseases and was considered a genuine practical success.`,
          he: `ביקורת ממשלתית חריפה על היעדר קדמה אמיתי של AI הובילה לקיצוצי מימון, פרויקטים שבוטלו, וציפיות שהתנפחו — הפער בין ההבטחה ליכולת המערכת בפועל גרם לאכזבה אמיתית. אבל זה לא היה קיפאון מוחלט: מערכות מומחה, תוכנות שהוענק להן ידע מקצועי אנושי מקודד, המשיכו לעבוד — MYCIN של סטנפורד (1974) אבחנה מחלות בהצלחה ונחשבה להצלחה מעשית אמיתית.`,
        },
      },
      {
        heading: { en: `1986: A Breakthrough With No Hardware to Run It On`, he: `1986: פריצת דרך בלי חומרה להריץ אותה עליה` },
        body: {
          en: `In the mid-1980s, researchers including Geoffrey Hinton published the backpropagation algorithm, finally making it possible to train neural networks with multiple layers. The theory was real — but deep networks still needed computing power that simply didn't exist yet. The insight sat mostly dormant for over two decades, waiting for hardware to catch up to it.`,
          he: `באמצע שנות ה-80, חוקרים כולל ג'פרי הינטון פרסמו את אלגוריתם ה-backpropagation, שסוף סוף איפשר לאמן רשתות נוירונים עם שכבות מרובות. התיאוריה הייתה אמיתית — אבל רשתות עמוקות עדיין דרשו כוח עיבוד שפשוט לא היה קיים עדיין. התובנה ישבה ברובה רדומה במשך יותר משני עשורים, ממתינה לחומרה שתדביק אותה.`,
        },
      },
      {
        heading: { en: `2012: The Wait Ends`, he: `2012: ההמתנה מסתיימת` },
        body: {
          en: `At the ImageNet competition for image recognition, Hinton and two of his students, Alex Krizhevsky and Ilya Sutskever, entered a CNN trained on millions of images and won with unprecedented accuracy — the moment researchers now point to as the real start of the deep learning era, decades after backpropagation itself was published.`,
          he: `בתחרות ImageNet לזיהוי תמונות, הינטון ושניים מהתלמידים שלו, אלכס קריז'בסקי ואיליה סוצקבר, נכנסו עם CNN שאומן על מיליוני תמונות וניצחו בדיוק חסר תקדים — הרגע שחוקרים מצביעים עליו כעת כתחילתה האמיתית של עידן הלמידה העמוקה, עשורים אחרי שה-backpropagation עצמו פורסם.`,
        },
      },
    ],
    principle: {
      en: `A breakthrough and its payoff can be separated by decades — the lesson isn't that AI keeps failing or keeps succeeding, it's that hype and actual capability move on different clocks.`,
      he: `פריצת דרך והתשלום שלה יכולים להיות מופרדים בעשורים — הלקח הוא לא ש-AI כל הזמן נכשל או כל הזמן מצליח, הוא שההייפ והיכולת בפועל זזים על שעונים שונים.`,
    },
  },
  {
    number: '05',
    title: { en: `Look at the Real Numbers, Not the Hype`, he: `הסתכלי על המספרים האמיתיים, לא ההייפ` },
    subtitle: {
      en: `DeepSeek trained a frontier-competitive model for $5.6 million while rivals spent hundreds of millions — the tank-problem discipline, applied to today's headlines`,
      he: `DeepSeek אימנה מודל שמתחרה בחזית תמורת 5.6 מיליון דולר בזמן שמתחרים הוציאו מאות מיליונים — המשמעת של בעיית הטנקים, מיושמת על כותרות היום`,
    },
    sections: [
      {
        heading: { en: `DeepSeek's Actual Reported Cost`, he: `העלות המדווחת בפועל של DeepSeek` },
        body: {
          en: `In January 2025, the Chinese startup DeepSeek shipped DeepSeek-R1, a model showing advanced reasoning capability compared against leading models from OpenAI and Google. The specific, reported number that made it genuinely notable: it was trained for roughly $5.6 million in a matter of weeks, against competing models that required hundreds of millions of dollars and tens of thousands of GPUs.`,
          he: `בינואר 2025, הסטארט-אפ הסיני DeepSeek שחרר את DeepSeek-R1, מודל שהראה יכולת הסקה מתקדמת בהשוואה למודלים מובילים של OpenAI וגוגל. המספר הספציפי, המדווח, שהפך את זה לבולט באמת: הוא אומן תמורת בערך 5.6 מיליון דולר תוך שבועות ספורים, מול מודלים מתחרים שדרשו מאות מיליוני דולרים ועשרות אלפי GPUs.`,
        },
      },
      {
        heading: { en: `Goldman Sachs' Labor-Market Number`, he: `המספר של שוק העבודה של Goldman Sachs` },
        body: {
          en: `A separate, equally concrete figure: a 2023 Goldman Sachs analysis of AI-driven automation forecast that roughly 300 million full-time jobs worldwide could be substantially changed or automated by the current wave of AI. IBM's own CEO, that same year, announced a hiring freeze on roughly 7,800 positions — mostly support roles — expected to be replaced by automation.`,
          he: `מספר נפרד, קונקרטי באותה מידה: ניתוח של Goldman Sachs מ-2023 על אוטומציה מונעת-AI חזה שכ-300 מיליון משרות מלאות ברחבי העולם עלולות להשתנות באופן מהותי או להפוך לאוטומטיות בעקבות גל ה-AI הנוכחי. המנכ"ל של IBM עצמו, באותה שנה, הודיע על הקפאת גיוס על כ-7,800 משרות — בעיקר תפקידי תמיכה — שצפויות להיות מוחלפות באוטומציה.`,
        },
      },
    ],
    principle: {
      en: `A real, specific, sourced number is worth more than an impressive-sounding claim — the same discipline that turned five tank serial numbers into a real estimate applies just as well to a headline about AI's cost or its impact.`,
      he: `מספר אמיתי, ספציפי, מתועד שווה יותר מטענה שנשמעת מרשימה — אותה משמעת שהפכה חמישה מספרים סידוריים של טנקים להערכה אמיתית חלה באותה מידה על כותרת לגבי העלות של AI או ההשפעה שלו.`,
    },
  },
  {
    number: '06',
    title: { en: `When a Model Inherits a Bias, It Amplifies It`, he: `כשמודל יורש הטיה, הוא מגביר אותה` },
    subtitle: {
      en: `Amazon's own hiring model learned, from real historical data, to prefer men — and had to be scrapped`,
      he: `מודל הגיוס של אמזון עצמה למד, מנתונים היסטוריים אמיתיים, להעדיף גברים — והיה צריך להיפסל`,
    },
    sections: [
      {
        heading: { en: `What Happened`, he: `מה קרה` },
        body: {
          en: `Amazon built an automated recruiting tool intended to rank job candidates. It was found to systematically prefer male candidates and rank women lower — not because anyone programmed it to, but because it was trained on years of the company's own historical hiring data, which reflected a real gender imbalance already present in the tech industry. The model didn't invent the bias; it learned and reproduced it.`,
          he: `אמזון בנתה כלי גיוס אוטומטי שנועד לדרג מועמדים לעבודה. נמצא שהוא מעדיף באופן שיטתי מועמדים גברים ומדרג נשים נמוך יותר — לא כי מישהו תכנת אותו לכך, אלא כי הוא אומן על שנים של נתוני הגיוס ההיסטוריים של החברה עצמה, שהשתקפה בהם אי-שוויון מגדרי אמיתי שכבר היה קיים בתעשיית ההייטק. המודל לא המציא את ההטיה; הוא למד ושיכפל אותה.`,
        },
      },
      {
        heading: { en: `The Outcome`, he: `התוצאה` },
        body: {
          en: `Amazon abandoned the system entirely once the bias was discovered — there was no straightforward patch that removed the learned preference without also degrading the rest of the model's judgment. It stands as one of the most cited real examples of algorithmic bias precisely because the mechanism was so ordinary: no bad intent, just historical data doing exactly what training data does.`,
          he: `אמזון נטשה את המערכת לגמרי ברגע שההטיה התגלתה — לא היה תיקון פשוט שהסיר את ההעדפה הנלמדת בלי לפגוע גם בשאר השיפוט של המודל. זה עומד כאחת הדוגמאות האמיתיות המצוטטות ביותר להטיה אלגוריתמית בדיוק כי המנגנון היה כה רגיל: בלי כוונה רעה, רק נתונים היסטוריים שעושים בדיוק את מה שנתוני אימון עושים.`,
        },
      },
    ],
    principle: {
      en: `A model trained on biased history doesn't correct the bias — it learns it as if it were simply how the world works, and that's exactly what makes this failure mode so easy to miss until it's already shipped.`,
      he: `מודל שאומן על היסטוריה מוטה לא מתקן את ההטיה — הוא לומד אותה כאילו זה פשוט איך שהעולם עובד, וזה בדיוק מה שהופך את דפוס הכשל הזה לקל כל כך לפספס עד שהוא כבר יצא לדרך.`,
    },
  },
  {
    number: '07',
    title: { en: `Human in the Loop`, he: `אדם בלולאה` },
    subtitle: {
      en: `Real accidents, and real accountability gaps, made this the concrete practice regulators now expect for sensitive automated decisions`,
      he: `תאונות אמיתיות, ופערי אחריות אמיתיים, הפכו את זה לפרקטיקה הקונקרטית שרגולטורים כעת מצפים לה בהחלטות אוטומטיות רגישות`,
    },
    sections: [
      {
        heading: { en: `Two Real Accountability Gaps`, he: `שני פערי אחריות אמיתיים` },
        body: {
          en: `A 2018 Uber autonomous vehicle killed a pedestrian in Arizona — authorities found no grounds for criminal charges against Uber itself, placing responsibility instead on the human safety driver who failed to prevent the harm. In 2019, a Tesla driver in Autopilot mode was involved in a fatal California crash and was later criminally charged — the first US case of a driver standing criminal trial for a fatal accident during semi-autonomous driving. Both cases left the same open question: when a system contributes to harm, who is actually accountable?`,
          he: `רכב אוטונומי של Uber מ-2018 הרג הולך רגל באריזונה — הרשויות לא מצאו עילה להעמדה לדין פלילי נגד Uber עצמה, והטילו את האחריות במקום זאת על נהגת הבטיחות האנושית שלא מנעה את הפגיעה. ב-2019, נהג טסלה במצב Autopilot היה מעורב בתאונה קטלנית בקליפורניה והועמד לדין פלילי מאוחר יותר — המקרה הראשון בארה"ב שבו נהג עומד לדין פלילי על תאונה קטלנית במהלך נהיגה חצי-אוטונומית. שני המקרים השאירו את אותה שאלה פתוחה: כשמערכת תורמת לפגיעה, מי באמת אחראי?`,
        },
      },
      {
        heading: { en: `The Practice That Follows`, he: `הפרקטיקה שנובעת מזה` },
        body: {
          en: `The policy response gaining ground is "human in the loop" — embedding an authorized person with the actual power to review or override a machine's decision, specifically for sensitive calls like autonomous driving, medical diagnosis, or loan approval. GDPR already grants a legal right to human review of automated decisions that affect a person — this isn't a hypothetical safeguard, it's an active regulatory requirement.`,
          he: `התגובה המדינית שצוברת תאוצה היא "אדם בלולאה" — הטמעת אדם מוסמך עם היכולת בפועל לבדוק או לעקוף החלטה של מכונה, ספציפית עבור החלטות רגישות כמו נהיגה אוטונומית, אבחון רפואי, או אישור הלוואה. GDPR כבר מעניקה זכות חוקית לבדיקה אנושית של החלטות אוטומטיות שמשפיעות על אדם — זו לא הגנה היפותטית, זו דרישה רגולטורית פעילה.`,
        },
      },
    ],
    principle: {
      en: `A system that's allowed to make a sensitive decision with nobody positioned to catch or override its mistake isn't a technical gap — it's a design choice, and one increasingly deemed unacceptable by regulators.`,
      he: `מערכת שמורשה לקבל החלטה רגישה בלי שאף אחד ממוקם לתפוס או לעקוף את הטעות שלה היא לא פער טכני — זו בחירת עיצוב, ואחת שנחשבת יותר ויותר לבלתי מקובלת בעיני רגולטורים.`,
    },
  },
  {
    number: '08',
    title: { en: `Deep Research vs. a Regular Chatbot`, he: `Deep Research מול צ'אטבוט רגיל` },
    subtitle: {
      en: `The real difference isn't intelligence — it's whether the answer is checkable`,
      he: `ההבדל האמיתי הוא לא אינטליגנציה — הוא האם התשובה ניתנת לבדיקה`,
    },
    sections: [
      {
        heading: { en: `Frozen Knowledge vs. Live, Sourced Research`, he: `ידע קפוא מול מחקר חי, מתועד` },
        body: {
          en: `A regular chatbot answers only from what it learned up to some training cutoff — it has no way to go check anything new. Deep Research is different in kind, not just degree: it actively browses the internet, searches for sources, reads real articles and documents, and then summarizes real-time insights — with direct links to exactly the sources it based its answer on.`,
          he: `צ'אטבוט רגיל עונה רק ממה שהוא למד עד מועד חיתוך אימון כלשהו — אין לו דרך ללכת לבדוק שום דבר חדש. Deep Research שונה בסוג, לא רק בדרגה: הוא באופן פעיל גולש באינטרנט, מחפש מקורות, קורא מאמרים ומסמכים אמיתיים, ואז מסכם תובנות בזמן אמת — עם קישורים ישירים בדיוק למקורות שעליהם התבססה התשובה שלו.`,
        },
      },
      {
        heading: { en: `Why the Sourcing Is the Whole Point`, he: `למה התיעוד הוא כל העניין` },
        body: {
          en: `The genuinely useful part isn't that Deep Research sounds smarter — it's that its claims are checkable by the person reading them, rather than requiring blind trust in a frozen model's memory. That checkability is exactly the habit this whole course is trying to build: not "does this answer sound right," but "can I actually verify it."`,
          he: `החלק שבאמת שימושי הוא לא שDeep Research נשמע חכם יותר — הוא שהטענות שלו ניתנות לבדיקה על ידי האדם שקורא אותן, במקום לדרוש אמון עיוור בזיכרון הקפוא של מודל. היכולת הזו להיבדק היא בדיוק ההרגל שכל הקורס הזה מנסה לבנות: לא "האם התשובה הזו נשמעת נכונה," אלא "האם אני יכולה באמת לוודא אותה."`,
        },
      },
    ],
    principle: {
      en: `The question to ask any AI output going forward isn't whether it sounds confident — it's whether you could trace it back to a real source if you had to.`,
      he: `השאלה לשאול לגבי כל פלט AI מכאן והלאה היא לא האם הוא נשמע בטוח — היא האם היית יכולה לעקוב אחריו בחזרה למקור אמיתי אם היית צריכה.`,
    },
  },
  {
    number: '09',
    title: { en: `The Black Box Problem`, he: `בעיית הקופסה השחורה` },
    subtitle: {
      en: `Deep neural networks make real decisions without a clear account of why — and that becomes a real problem the moment those decisions matter`,
      he: `רשתות נוירונים עמוקות מקבלות החלטות אמיתיות בלי דין וחשבון ברור של למה — וזה הופך לבעיה אמיתית ברגע שההחלטות האלה משנות`,
    },
  sections: [
      {
        heading: { en: `Why Deep Models Resist Explanation`, he: `למה מודלים עמוקים מתנגדים להסבר` },
        body: {
          en: `Many AI models — deep neural networks especially — operate as what's genuinely called a "black box": their internal logic is so distributed across millions of learned weights that it's genuinely hard for anyone, including their own creators, to state cleanly why a specific decision came out the way it did. A system like this might reject a loan application or weigh in on a medical diagnosis without producing anything resembling a real explanation.`,
          he: `מודלי AI רבים — רשתות נוירונים עמוקות בייחוד — פועלות כמה שבאמת קרוי "קופסה שחורה": הלוגיקה הפנימית שלהן כה מפוזרת על פני מיליוני משקלים נלמדים שקשה באמת לכל אחד, כולל היוצרים שלהן עצמם, לומר בצורה נקייה למה החלטה ספציפית יצאה כפי שיצאה. מערכת כזו עלולה לדחות בקשת הלוואה או לשקול אבחנה רפואית בלי לייצר משהו שדומה להסבר אמיתי.`,
        },
      },
      {
        heading: { en: `The Regulatory Response`, he: `התגובה הרגולטורית` },
        body: {
          en: `This has drawn a real, if partial, regulatory answer. GDPR grants citizens a right to information about algorithmic decisions that affect them, and even a right to human review of a fully automated one. The EU's AI Act pushes further, emphasizing transparency directly — including a requirement to inform users when they're interacting with AI-generated content, and mandatory labeling of synthetic media.`,
          he: `זה משך תגובה רגולטורית אמיתית, אם כי חלקית. GDPR מעניקה לאזרחים זכות למידע על החלטות אלגוריתמיות שמשפיעות עליהם, ואפילו זכות לבדיקה אנושית של אחת שהיא אוטומטית לחלוטין. חוק ה-AI של האיחוד האירופי דוחף רחוק יותר, ומדגיש שקיפות ישירות — כולל דרישה ליידע משתמשים כשהם מתקשרים עם תוכן שנוצר על ידי AI, ותיוג חובה של מדיה סינתטית.`,
        },
      },
    ],
    principle: {
      en: `A model can be accurate and unexplainable at the same time — and the entire regulatory push around AI right now is an attempt to decide when accuracy alone is enough, and when it genuinely isn't.`,
      he: `מודל יכול להיות מדויק ובלתי-ניתן-להסבר בו-זמנית — וכל הדחיפה הרגולטורית סביב AI כרגע היא ניסיון להחליט מתי דיוק לבדו מספיק, ומתי הוא באמת לא.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic AI trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על AI`,
    },
    sections: [
      {
        heading: { en: `On the Tank Problem`, he: `על בעיית הטנקים` },
        body: {
          en: `Five serial numbers are observed: 209, 317, 495, 348, 63. Why is "at least 5 tanks exist" a technically true but useless answer, and what makes the average-based estimate of roughly 573 a genuinely better one? Answer: "at least 5" only restates what was directly observed — it uses none of the structure in the numbers. The average-based estimate reasons from an assumption (that the numbers are roughly symmetric across the true range) to a specific, falsifiable estimate — it's a real inference, not just a restated observation.`,
          he: `חמישה מספרים סידוריים נצפים: 209, 317, 495, 348, 63. למה "קיימים לפחות 5 טנקים" היא תשובה נכונה טכנית אבל חסרת תועלת, ומה הופך את ההערכה מבוססת-הממוצע של בערך 573 לטובה יותר באמת? תשובה: "לפחות 5" רק חוזרת על מה שנצפה ישירות — היא לא משתמשת בשום מבנה שבמספרים. ההערכה מבוססת-הממוצע מנמקת מהנחה (שהמספרים מפוזרים בערך בסימטריה על פני הטווח האמיתי) להערכה ספציפית, הניתנת להפרכה — זו הסקה אמיתית, לא רק תצפית שחוזרת על עצמה.`,
        },
      },
      {
        heading: { en: `On AI's History`, he: `על ההיסטוריה של AI` },
        body: {
          en: `Backpropagation was published in 1986, but the deep learning breakthrough most researchers point to happened in 2012, at ImageNet. Why the twenty-six-year gap? Answer: the theory of training multi-layer neural networks existed in 1986, but the computing power to actually run it at scale did not — the idea sat dormant not because it was wrong, but because the hardware needed to prove it hadn't caught up yet.`,
          he: `ה-backpropagation פורסם ב-1986, אבל פריצת הדרך של הלמידה העמוקה שרוב החוקרים מצביעים עליה קרתה ב-2012, ב-ImageNet. למה הפער של עשרים ושש שנים? תשובה: התיאוריה של אימון רשתות נוירונים מרובות-שכבות התקיימה ב-1986, אבל כוח העיבוד להריץ אותה בפועל בקנה מידה לא — הרעיון ישב רדום לא כי הוא היה שגוי, אלא כי החומרה הדרושה כדי להוכיח אותו עוד לא הדביקה אותו.`,
        },
      },
      {
        heading: { en: `On Algorithmic Bias`, he: `על הטיה אלגוריתמית` },
        body: {
          en: `Amazon's hiring model was found to prefer male candidates. Did anyone deliberately program it to discriminate — and if not, how did the bias get there? Answer: no — the model was trained on the company's own historical hiring data, which already reflected a real gender imbalance in the tech industry. The model learned that pattern as if it were simply how good candidates look, without anyone intending to encode it.`,
          he: `מודל הגיוס של אמזון נמצא מעדיף מועמדים גברים. האם מישהו תכנת אותו במכוון להפלות — ואם לא, איך ההטיה הגיעה לשם? תשובה: לא — המודל אומן על נתוני הגיוס ההיסטוריים של החברה עצמה, שכבר שיקפו אי-שוויון מגדרי אמיתי בתעשיית ההייטק. המודל למד את הדפוס הזה כאילו זה פשוט איך שמועמדים טובים נראים, בלי שמישהו התכוון לקודד אותו.`,
        },
      },
      {
        heading: { en: `On Human in the Loop`, he: `על אדם בלולאה` },
        body: {
          en: `An automated system is about to reject a loan application. What does "human in the loop" specifically require here, and why does this go beyond just having a person available to answer questions? Answer: it requires that an authorized person have the actual power to review and override the system's specific decision before it takes effect — not just general availability, but a real checkpoint with real authority, which is what GDPR's right to human review is built to guarantee.`,
          he: `מערכת אוטומטית עומדת לדחות בקשת הלוואה. מה "אדם בלולאה" דורש ספציפית כאן, ולמה זה חורג מסתם נוכחות של אדם זמין לענות על שאלות? תשובה: זה דורש שלאדם מוסמך תהיה היכולת בפועל לבדוק ולעקוף את ההחלטה הספציפית של המערכת לפני שהיא נכנסת לתוקף — לא רק זמינות כללית, אלא נקודת ביקורת אמיתית עם סמכות אמיתית, וזה בדיוק מה שזכות הבדיקה האנושית של GDPR נבנתה כדי להבטיח.`,
        },
      },
    ],
    principle: {
      en: `A memorized fact answers "what happened." These questions only answer to "why the reasoning behind it actually holds up."`,
      he: `עובדה שמושננת עונה על "מה קרה". השאלות האלה עונות רק ל"למה ההיגיון מאחוריה באמת מחזיק מעמד".`,
    },
  },
];
