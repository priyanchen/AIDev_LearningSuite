import type { CardContent } from './types';

// Session 17 · Data Science (Module Session 4) · 26.08.2026
// Dr. Zuari's ML-foundations session: model families, linear regression, gradient descent, preprocessing, and project characterization.
// Cards authored from transcript analysis. Original teaching material.

export const session17Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map — where models finally get built, and where a project's fate gets decided before any code exists`,
      he: `מפתח של אחד-עשר כרטיסים — איפה שמודלים סוף סוף נבנים, ואיפה שגורל פרויקט נקבע לפני שקיים קוד בכלל`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `Machine learning finally arrives — what a model actually is, the three families it comes in, linear regression built from a straight line up through gradient descent, and the four-step preprocessing pipeline that makes real data usable. The session's second half pivots entirely: a framework for characterizing a real project before writing a line of code, including a live demo of deliberately adversarial ChatGPT use to stress-test a business idea.`,
          he: `למידת מכונה סוף סוף מגיעה — מה מודל בעצם, שלוש המשפחות שהוא מגיע בהן, רגרסיה ליניארית שנבנית מקו ישר ועד ירידת גרדיאנט, וצנרת העיבוד המקדים בת ארבעת השלבים שהופכת נתונים אמיתיים לשימושיים. החצי השני של המפגש פונה לגמרי: מסגרת לאפיון פרויקט אמיתי לפני כתיבת שורת קוד אחת, כולל הדגמה חיה של שימוש יריבי במכוון ב-ChatGPT כדי לבחון רעיון עסקי.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the mental model everything else in the session hangs on — read it first. Card 08 covers a technique worth stealing regardless of what you're building.`,
          he: `כרטיס 01 הוא המודל המנטלי שכל השאר במפגש תלוי בו — כדאי לקרוא אותו קודם. כרטיס 08 מכסה טכניקה ששווה לגנוב לא משנה מה בונות.`,
        },
      },
    ],
    principle: {
      en: `Building a model is the easy half of this session — deciding what's worth building at all is the hard half, and it comes with its own discipline.`,
      he: `בניית מודל הוא החצי הקל של המפגש הזה — להחליט מה בכלל שווה לבנות הוא החצי הקשה, ויש לו משמעת משלו.`,
    },
  },
  {
    number: '01',
    title: { en: `A Model Is Just a Function, and Generalization Is the Whole Point`, he: `מודל הוא פשוט פונקציה, והכללה היא כל הטעם` },
    subtitle: {
      en: `Arthur Samuel's famous definition, and the exam-question analogy for why training accuracy alone means nothing`,
      he: `ההגדרה המפורסמת של ארתור סמואל, ואנלוגיית שאלות המבחן ללמה דיוק אימון בלבד לא אומר כלום`,
    },
    sections: [
      {
        heading: { en: `Learning Without Being Programmed`, he: `לומדים בלי להיות מתוכנתים` },
        body: {
          en: `Dr. Zuari opened with Arthur Samuel's classic definition: a field that gives computers the ability to learn without being explicitly programmed. Stripped of mystique, a model is simply a function — the same mathematical object that maps an input to an output, just one whose exact shape is discovered from data rather than written by hand.`,
          he: `ד״ר זוארי פתח עם ההגדרה הקלאסית של ארתור סמואל: תחום שנותן למחשבים את היכולת ללמוד בלי להיות מתוכנתים במפורש. בהפשטת המסתורין, מודל הוא פשוט פונקציה — אותו אובייקט מתמטי שממפה קלט לפלט, רק כזה שהצורה המדויקת שלו מתגלית מנתונים במקום שתיכתב ידנית.`,
        },
      },
      {
        heading: { en: `The Exam-Question Test`, he: `מבחן שאלת הבחינה` },
        body: {
          en: `The analogy Dr. Zuari uses every time: handing students three practice exams with full solutions before a test, then testing them on those exact same questions, proves nothing about what they actually understand. A model evaluated only on the data it trained on is being tested on the practice exam — genuinely useful evaluation happens only on data it has never seen.`,
          he: `האנלוגיה שד״ר זוארי משתמש בה בכל פעם: למסור לסטודנטים שלושה מבחני תרגול עם פתרונות מלאים לפני מבחן, ואז לבחון אותם על אותן שאלות בדיוק, לא מוכיח כלום על מה שהם באמת מבינים. מודל שמוערך רק על הנתונים שהוא התאמן עליהם נבחן על מבחן התרגול — הערכה שבאמת שימושית קורית רק על נתונים שהוא מעולם לא ראה.`,
        },
      },
    ],
    principle: {
      en: `A model that only performs well on what it already saw hasn't learned anything — it has memorized, and memorizing isn't the same skill as generalizing.`,
      he: `מודל שמתפקד טוב רק על מה שהוא כבר ראה לא למד כלום — הוא שינן, ושינון הוא לא אותו כישור כמו הכללה.`,
    },
  },
  {
    number: '02',
    title: { en: `Three Families, Not Three Models`, he: `שלוש משפחות, לא שלושה מודלים` },
    subtitle: {
      en: `Supervised, unsupervised, and reinforcement learning solve fundamentally different kinds of questions`,
      he: `סופרווייז, אנסופרווייז, ורינפורסמנט לרנינג פותרים סוגי שאלות שונים ביסודם`,
    },
    sections: [
      {
        heading: { en: `Supervised: You Already Have the Answers`, he: `Supervised: כבר יש לך את התשובות` },
        body: {
          en: `Supervised learning means every training example comes with a known answer attached — size and price for every past house sale, tumor size and malignant-or-benign for every past patient. The model's job is to find the pattern connecting the input columns to that known answer column, splitting further into regression (predicting a continuous number, like price) and classification (predicting a category, like spam or not).`,
          he: `Supervised learning אומר שלכל דוגמת אימון מצורפת תשובה ידועה — גודל ומחיר לכל מכירת בית קודמת, גודל גידול וממאיר-או-שפיר לכל מטופלת קודמת. העבודה של המודל היא למצוא את הדפוס שמחבר בין עמודות הקלט לעמודת התשובה הידועה, ומתפצל הלאה לרגרסיה (חיזוי מספר רציף, כמו מחיר) וקלסיפיקציה (חיזוי קטגוריה, כמו ספאם או לא).`,
        },
      },
      {
        heading: { en: `Unsupervised: No Answers — Just Find Structure`, he: `Unsupervised: אין תשובות — רק מוצאים מבנה` },
        body: {
          en: `Unsupervised learning has no answer column at all — customer segmentation is the classic example: given data about people, group them into clusters that share something meaningful, without ever being told in advance what those groups should be. There's no prediction happening here, only discovery of structure that was already hiding in the data.`,
          he: `ל-Unsupervised learning אין בכלל עמודת תשובה — סגמנטציית לקוחות היא הדוגמה הקלאסית: בהינתן נתונים על אנשים, לקבץ אותם לאשכולות שחולקים משהו משמעותי, בלי שאף פעם נאמר מראש מה הקבוצות האלה אמורות להיות. אין פה חיזוי שקורה, רק גילוי מבנה שכבר הסתתר בנתונים.`,
        },
      },
      {
        heading: { en: `Reinforcement: Learning by Getting Burned`, he: `Reinforcement: לומדים על ידי נכווים` },
        body: {
          en: `Reinforcement learning was demonstrated with a Super Mario AI clip — no labeled dataset at all, just trial, error, and a reward signal: progress earns encouragement, getting stuck earns a penalty. After thousands of attempts, the agent that once couldn't clear the first obstacle was finishing the level — the same principle behind a Roomba learning to navigate a room, or a dog learning a trick.`,
          he: `Reinforcement learning הודגם עם קליפ AI ששיחק סופר-מריו — בלי שום מערך נתונים מתויג בכלל, רק ניסוי, טעייה, וסיגנל תגמול: התקדמות מרוויחה עידוד, להיתקע מרוויח עונש. אחרי אלפי ניסיונות, הסוכן שפעם לא הצליח לעבור את המכשול הראשון סיים את השלב — אותו עקרון שמאחורי רובוט שואב אבק שלומד לנווט בחדר, או כלב שלומד טריק.`,
        },
      },
    ],
    principle: {
      en: `The question "what data do I have" decides the family before the question "which model" ever gets asked — labeled answers, no answers, or a reward signal each point somewhere completely different.`,
      he: `השאלה "אילו נתונים יש לי" מחליטה את המשפחה לפני שהשאלה "איזה מודל" בכלל נשאלת — תשובות מתויגות, אין תשובות, או סיגנל תגמול כל אחד מצביע למקום שונה לגמרי.`,
    },
  },
  {
    number: '03',
    title: { en: `The Four-Step Preprocessing Pipeline`, he: `צנרת העיבוד המקדים בת ארבעת השלבים` },
    subtitle: {
      en: `Missing values, scaling, encoding, outliers — in that order, and statistics from Session 13 does most of the real work`,
      he: `ערכים חסרים, סקיילינג, קידוד, חריגים — בסדר הזה, וסטטיסטיקה ממפגש 13 עושה את רוב העבודה האמיתית`,
    },
    sections: [
      {
        heading: { en: `Step One and Two: Fill Gaps, Then Rescale`, he: `שלב אחת ושתיים: למלא פערים, ואז לסקל מחדש` },
        body: {
          en: `A model simply refuses to run on missing cells, so they get filled first — with the mean if the column's distribution is symmetric, with the median if it's skewed, directly reusing Session 13's distribution-shape lesson. Next, every numeric column gets rescaled into the same range, typically zero to one, because a model doesn't inherently know that a column running to five thousand shouldn't dominate one running to twelve.`,
          he: `מודל פשוט מסרב לרוץ על תאים חסרים, אז הם ממולאים קודם — עם הממוצע אם ההתפלגות של העמודה סימטרית, עם החציון אם היא מוטה, שימוש חוזר ישיר בשיעור צורת ההתפלגות ממפגש 13. הלאה, כל עמודה מספרית מסוקלת מחדש לאותו טווח, בדרך כלל אפס עד אחד, כי מודל לא יודע באופן טבעי שעמודה שרצה עד חמשת אלפים לא צריכה לשלוט על אחת שרצה עד שתים עשרה.`,
        },
      },
      {
        heading: { en: `Step Three and Four: Encode Text, Then Cut Outliers`, he: `שלב שלוש וארבע: לקודד טקסט, ואז לחתוך חריגים` },
        body: {
          en: `A model has no concept of the word "France" — categorical text columns get one-hot encoded into binary columns instead, following an n-minus-one rule: a column with three countries needs only two new columns, since two zeros already uniquely identifies the third. Finally, the same IQR-based outlier rule from Session 13 strips extreme values that would otherwise distort the model disproportionately.`,
          he: `למודל אין מושג של המילה "צרפת" — עמודות טקסט קטגוריאליות מקודדות במקום זה ל-one-hot לעמודות בינאריות, לפי כלל של מספר-קטגוריות-פחות-אחת: עמודה עם שלוש מדינות צריכה רק שתי עמודות חדשות, כי שני אפסים כבר מזהים ייחודית את השלישית. לבסוף, אותו כלל חריגים מבוסס-IQR ממפגש 13 מסיר ערכים קיצוניים שאחרת היו מעוותים את המודל בצורה לא פרופורציונלית.`,
        },
      },
    ],
    principle: {
      en: `Nothing about preprocessing is new mathematics — it's Session 13's statistics, applied for a new reason: making raw data something a model can actually swallow.`,
      he: `שום דבר בעיבוד המקדים הוא לא מתמטיקה חדשה — זו הסטטיסטיקה ממפגש 13, מיושמת מסיבה חדשה: להפוך נתונים גולמיים למשהו שמודל בעצם יכול לבלוע.`,
    },
  },
  {
    number: '04',
    title: { en: `Reading a Gradient Descent Run`, he: `קוראות ריצה של ירידת גרדיאנט` },
    subtitle: {
      en: `Shrinking steps near the bottom mean it's working — a loss curve that shoots back upward means the learning rate is too high`,
      he: `צעדים מתכווצים ליד התחתית אומרים שזה עובד — עקומת אובדן שיורה בחזרה למעלה אומרת שקצב הלמידה גבוה מדי`,
    },
    sections: [
      {
        heading: { en: `Why the Steps Get Smaller on Their Own`, he: `למה הצעדים נהיים קטנים מעצמם` },
        body: {
          en: `A student asked directly why the descent doesn't move in equal-sized steps toward the minimum. Dr. Zuari's answer: each step is the learning rate multiplied by the slope at the current point, and that slope itself shrinks the closer the curve gets to the bottom of the parabola — at the true minimum the slope is exactly zero, which is precisely why the process naturally slows down and stops right there.`,
          he: `סטודנט שאל ישירות למה הירידה לא זזה בצעדים שווי-גודל לכיוון המינימום. התשובה של ד״ר זוארי: כל צעד הוא קצב הלמידה כפול השיפוע בנקודה הנוכחית, והשיפוע עצמו מתכווץ ככל שהעקומה מתקרבת לתחתית הפרבולה — במינימום האמיתי השיפוע הוא בדיוק אפס, וזו בדיוק הסיבה שהתהליך מאט באופן טבעי ועוצר בדיוק שם.`,
        },
      },
      {
        heading: { en: `When It Overshoots Instead`, he: `כשזה עף מעבר במקום` },
        body: {
          en: `Demonstrated live: set the learning rate too high, and instead of settling into the minimum, the parameter overshoots past it, lands on the opposite slope, and gets pushed back even further the next step — a runaway pattern Dr. Zuari named "divergence." Too small a learning rate has the opposite problem: technically safe, but it can take an enormous number of steps to arrive anywhere near the minimum at all.`,
          he: `הודגם בשידור חי: מגדירים את קצב הלמידה גבוה מדי, ובמקום להתיישב במינימום, הפרמטר עף מעבר לו, נוחת על השיפוע הנגדי, ונדחף אפילו רחוק יותר בצעד הבא — דפוס בורח שד״ר זוארי כינה "התבדרות". קצב למידה קטן מדי סובל מהבעיה ההפוכה: טכנית בטוח, אבל יכול לקחת מספר עצום של צעדים כדי להגיע לאזור המינימום בכלל.`,
        },
      },
    ],
    principle: {
      en: `A descent that slows down as it approaches the answer is behaving correctly — a descent that keeps swinging wider is telling you the learning rate needs to come down.`,
      he: `ירידה שמאיטה ככל שהיא מתקרבת לתשובה מתנהגת נכון — ירידה שממשיכה להתנדנד רחב יותר אומרת לך שקצב הלמידה צריך לרדת.`,
    },
  },
  {
    number: '05',
    title: { en: `Mean or Median — Let the Skew Decide`, he: `ממוצע או חציון — תנו להטיה להחליט` },
    subtitle: {
      en: `The same distribution-shape question from Session 13 returns as a concrete preprocessing decision`,
      he: `אותה שאלת צורת-התפלגות ממפגש 13 חוזרת כהחלטת עיבוד מקדים קונקרטית`,
    },
    sections: [
      {
        heading: { en: `Symmetric Columns Take the Mean`, he: `עמודות סימטריות לוקחות את הממוצע` },
        body: {
          en: `If a numeric column's distribution is roughly symmetric, filling missing values with the mean is safe — the mean sits at the center exactly where you'd expect a typical missing value to have been, without dragging the rest of the data in any particular direction.`,
          he: `אם ההתפלגות של עמודה מספרית סימטרית בערך, מילוי ערכים חסרים עם הממוצע בטוח — הממוצע יושב במרכז בדיוק איפה שהיית מצפה שערך חסר טיפוסי היה, בלי לגרור את שאר הנתונים לכיוון מסוים.`,
        },
      },
      {
        heading: { en: `Skewed Columns Take the Median`, he: `עמודות מוטות לוקחות את החציון` },
        body: {
          en: `The moment a distribution is skewed, the mean is already pulled toward the extreme tail — filling gaps with it would insert a distorted, unrepresentative value into every missing row. The median, being resistant to that same pull, is the correct choice specifically because it stays anchored to what a typical value in that column actually looks like.`,
          he: `ברגע שהתפלגות מוטה, הממוצע כבר נמשך לכיוון הזנב הקיצוני — מילוי פערים איתו היה מכניס ערך מעוות ולא מייצג לכל שורה חסרה. החציון, בהיותו עמיד לאותה משיכה, הוא הבחירה הנכונה ספציפית כי הוא נשאר מעוגן למה שערך טיפוסי בעמודה הזו באמת נראה כמו.`,
        },
      },
    ],
    principle: {
      en: `Filling a missing value isn't a mechanical default — it's a small prediction about what that cell probably was, and the distribution's shape is what makes that prediction honest.`,
      he: `מילוי ערך חסר הוא לא ברירת מחדל מכנית — זו תחזית קטנה על מה שהתא הזה כנראה היה, וצורת ההתפלגות היא מה שהופך את התחזית הזו לכנה.`,
    },
  },
  {
    number: '06',
    title: { en: `A Great Score on Data It Already Saw Means Nothing`, he: `ציון מעולה על נתונים שהוא כבר ראה לא אומר כלום` },
    subtitle: {
      en: `The model that kept impressing a student on training data — and completely fell apart on anything new`,
      he: `המודל שהמשיך להרשים סטודנט על נתוני אימון — ולגמרי התפרק על כל דבר חדש`,
    },
    sections: [
      {
        heading: { en: `The Story`, he: `הסיפור` },
        body: {
          en: `Dr. Zuari described a real student who built a model that kept producing great results, confused about why it broke down the moment it touched data it hadn't been trained on. The cause, once traced: every evaluation had been run against the same training data the model had already memorized — a textbook case of what Session's exam analogy predicts exactly.`,
          he: `ד״ר זוארי תיאר סטודנט אמיתי שבנה מודל שהמשיך לייצר תוצאות מעולות, מבולבל למה הוא קרס ברגע שנגע בנתונים שהוא לא התאמן עליהם. הסיבה, ברגע שהתחקתה: כל הערכה הייתה מורצת מול אותם נתוני אימון שהמודל כבר שינן — מקרה ספר לימוד בדיוק למה שאנלוגיית המבחן של המפגש חוזה.`,
        },
      },
      {
        heading: { en: `The Name for This Trap`, he: `השם למלכודת הזו` },
        body: {
          en: `This failure has a name — overfitting — and it's why splitting data into a training portion and a genuinely held-out test portion isn't optional bureaucracy, it's the only thing standing between a model that looks impressive and a model that actually works once it meets the real world.`,
          he: `לכשל הזה יש שם — overfitting — וזו הסיבה שפיצול נתונים לחלק אימון וחלק בדיקה שמוחזק בצד באמת הוא לא ביורוקרטיה אופציונלית, זה הדבר היחיד שעומד בין מודל שנראה מרשים למודל שבאמת עובד ברגע שהוא פוגש את העולם האמיתי.`,
        },
      },
    ],
    principle: {
      en: `An impressive number is only meaningful once you know exactly which data produced it — the same score means something completely different depending on whether the model had already seen the answer.`,
      he: `מספר מרשים הוא בעל משמעות רק כשיודעים בדיוק אילו נתונים ייצרו אותו — אותו ציון אומר משהו שונה לגמרי בהתאם לשאלה אם המודל כבר ראה את התשובה.`,
    },
  },
  {
    number: '07',
    title: { en: `Characterize Before You Build`, he: `אפיינו לפני שבונות` },
    subtitle: {
      en: `An eighteen-step framework where the very first step decides whether every later step is even worth doing`,
      he: `מסגרת בת שמונה-עשרה שלבים שבה השלב הראשון ממש מחליט אם כל שלב מאוחר יותר בכלל שווה לעשות`,
    },
    sections: [
      {
        heading: { en: `Real Problem, Not Just an Interesting One`, he: `בעיה אמיתית, לא רק מעניינת` },
        body: {
          en: `Before anything else: who actually experiences this problem, and is it even worth solving — a real cost-versus-benefit comparison against every existing alternative, not just the alternative of doing nothing. Dr. Zuari's own cautionary story: eight months spent building a product with two co-founders before realizing a close competitor already existed, because nobody had properly checked the market first.`,
          he: `לפני כל דבר אחר: מי בעצם חווה את הבעיה הזו, והאם בכלל שווה לפתור אותה — השוואת עלות-מול-תועלת אמיתית מול כל אלטרנטיבה קיימת, לא רק האלטרנטיבה של לא לעשות כלום. הסיפור המזהיר של ד״ר זוארי עצמו: שמונה חודשים מושקעים בבניית מוצר עם שני שותפים-מייסדים לפני שהבינו שכבר קיים מתחרה קרוב, כי אף אחד לא בדק את השוק כמו שצריך קודם.`,
        },
      },
      {
        heading: { en: `Talk to the Field, Not Just the Chatbot`, he: `לדבר עם השטח, לא רק עם הצ׳אטבוט` },
        body: {
          en: `One real conversation with someone who actually works in the target domain routinely surfaces problems ChatGPT never mentioned at all — Dr. Zuari's own practice is to research with ChatGPT first, then talk to real practitioners, specifically because the gap between the two is where the useful, undocumented information tends to live.`,
          he: `שיחה אמיתית אחת עם מישהי שבאמת עובדת בתחום היעד באופן שגרתי מעלה בעיות ש-ChatGPT מעולם לא הזכיר בכלל — הנוהג של ד״ר זוארי עצמו הוא לחקור עם ChatGPT קודם, ואז לדבר עם אנשי מקצוע אמיתיים, ספציפית כי הפער בין השניים הוא איפה שהמידע השימושי והלא-מתועד נוטה לגור.`,
        },
      },
      {
        heading: { en: `One Model, Not Fifteen Features`, he: `מודל אחד, לא חמישה עשר פיצ׳רים` },
        body: {
          en: `The MVP — minimum viable product — has to separate "must have" from "nice to have" ruthlessly: fifteen interdependent features shipped at once means every new feature risks breaking the ones before it, and nothing gets tested properly. The discipline is picking exactly one core capability, shipping it, and only then layering the next one on top.`,
          he: `ה-MVP — מוצר מינימלי ברי-קיימא — חייב להפריד "חייב שיהיה" מ"נחמד שיהיה" בלי רחמים: חמישה עשר פיצ׳רים תלויים-הדדית שנשלחים בבת אחת אומר שכל פיצ׳ר חדש מסכן לשבור את אלה שלפניו, ושום דבר לא נבדק כמו שצריך. המשמעת היא לבחור בדיוק יכולת ליבה אחת, לשלוח אותה, ורק אז לשכב את הבאה מעל.`,
        },
      },
    ],
    principle: {
      en: `Skipping characterization to start building faster doesn't save time — it just moves the cost of not knowing what you're building to a much more expensive moment, months later.`,
      he: `לדלג על אפיון כדי להתחיל לבנות מהר יותר לא חוסך זמן — זה פשוט מזיז את העלות של לא לדעת מה בונים לרגע הרבה יותר יקר, חודשים אחר כך.`,
    },
  },
  {
    number: '08',
    title: { en: `Ask an LLM to Attack Your Idea, Not Confirm It`, he: `בקשו מ-LLM לתקוף את הרעיון שלכן, לא לאשר אותו` },
    subtitle: {
      en: `"GrillMe" — a custom ChatGPT persona whose entire job is refusing to let a weak assumption pass unchallenged`,
      he: `"GrillMe" — פרסונת ChatGPT מותאמת שכל העבודה שלה היא לסרב לתת להנחה חלשה לעבור בלי אתגור`,
    },
    sections: [
      {
        heading: { en: `Watching It Work Live`, he: `לצפות בזה עובד בשידור חי` },
        body: {
          en: `Dr. Zuari fed his own project idea — a system to reduce construction-material waste — into a custom instruction set he called "GrillMe," designed to disagree by default and demand sources. It immediately challenged his headline "30% of material is lost" claim, cited actual regional studies with real percentages, and drew a sharp distinction between demolition waste and purchased-material waste — two different metrics he had been treating as one.`,
          he: `ד״ר זוארי הזין את רעיון הפרויקט שלו עצמו — מערכת לצמצום בזבוז חומרי בנייה — לתוך סט הנחיות מותאם שהוא כינה "GrillMe", שתוכנן לחלוק כברירת מחדל ולדרוש מקורות. הוא מיד אתגר את טענת הכותרת שלו "30% מהחומר אובד", ציטט מחקרים אזוריים אמיתיים עם אחוזים אמיתיים, ומשך קו חד בין פסולת הריסה לבזבוז חומר נרכש — שני מדדים שונים שהוא התייחס אליהם כאחד.`,
        },
      },
      {
        heading: { en: `It Redirected the Whole Idea`, he: `זה הפנה מחדש את כל הרעיון` },
        body: {
          en: `Beyond fact-checking, it reframed the entire problem: instead of "detect discarded material with cameras," it argued for a broader tracking-and-control platform following material from order to site to actual use, warned against starting with camera-based AI detection specifically, and flagged that naming an early-stage startup with "AI" in it tends to read badly to investors rather than impressively.`,
          he: `מעבר לבדיקת עובדות, זה מיסגר מחדש את כל הבעיה: במקום "לזהות חומר שנזרק עם מצלמות", זה טען לטובת פלטפורמת מעקב-ובקרה רחבה יותר שעוקבת אחרי חומר מהזמנה עד אתר ועד שימוש בפועל, הזהיר מלהתחיל עם זיהוי AI מבוסס-מצלמה ספציפית, וסימן ששם של סטארט-אפ בשלב מוקדם עם "AI" בתוכו נוטה להיקרא רע למשקיעים במקום מרשים.`,
        },
      },
    ],
    principle: {
      en: `An LLM that agrees with everything is confirming your assumptions, not testing them — the useful version of this tool is one instructed specifically to make you defend every claim.`,
      he: `LLM שמסכים עם הכול מאשר את ההנחות שלך, לא בודק אותן — הגרסה השימושית של הכלי הזה היא כזו שמונחית ספציפית לגרום לך להגן על כל טענה.`,
    },
  },
  {
    number: '09',
    title: { en: `Why Subtract the Derivative, Not Add It`, he: `למה מחסרים את הנגזרת, לא מוסיפים אותה` },
    subtitle: {
      en: `The update rule that lets a computer find a minimum it was never told the location of`,
      he: `כלל העדכון שנותן למחשב למצוא מינימום שאף פעם לא נאמר לו איפה הוא`,
    },
    sections: [
      {
        heading: { en: `The Slope Tells You Which Way Is Downhill`, he: `השיפוע אומר לך לאיזה כיוון זה במורד` },
        body: {
          en: `At any point on the parabola-shaped error curve, the slope of the tangent line has a sign: positive means the curve is still climbing to the right, negative means it's still descending. Standing on the rising side, the slope is positive — and moving toward the minimum means moving left, toward smaller parameter values.`,
          he: `בכל נקודה על עקומת השגיאה בצורת פרבולה, לשיפוע של קו המשיק יש סימן: חיובי אומר שהעקומה עדיין מטפסת ימינה, שלילי אומר שהיא עדיין יורדת. עומדים על הצד העולה, השיפוע חיובי — ולזוז לכיוון המינימום אומר לזוז שמאלה, לכיוון ערכי פרמטר קטנים יותר.`,
        },
      },
      {
        heading: { en: `Subtraction Is What Points You Downhill`, he: `חיסור הוא מה שמכוון אותך במורד` },
        body: {
          en: `The update rule takes the current parameter, and subtracts the learning rate multiplied by that slope. On the positive-slope side, subtracting a positive number moves the parameter smaller — exactly toward the minimum. On the other side of the curve, the slope itself flips negative, so subtracting a negative number pushes the parameter larger — again exactly toward the minimum, from the opposite direction. The same single subtraction rule, applied repeatedly, walks downhill no matter which side of the curve it starts on.`,
          he: `כלל העדכון לוקח את הפרמטר הנוכחי, ומחסר את קצב הלמידה כפול השיפוע הזה. בצד השיפוע החיובי, חיסור מספר חיובי מזיז את הפרמטר קטן יותר — בדיוק לכיוון המינימום. בצד השני של העקומה, השיפוע עצמו הופך לשלילי, אז חיסור מספר שלילי דוחף את הפרמטר גדול יותר — שוב בדיוק לכיוון המינימום, מהכיוון הנגדי. אותו כלל חיסור בודד, מיושם שוב ושוב, הולך במורד לא משנה מאיזה צד של העקומה הוא מתחיל.`,
        },
      },
    ],
    principle: {
      en: `Gradient descent doesn't need to be told where the minimum is — the sign of the slope at each step is enough information to always walk in the right direction.`,
      he: `ירידת גרדיאנט לא צריכה שיגידו לה איפה המינימום — הסימן של השיפוע בכל צעד הוא מספיק מידע כדי תמיד ללכת בכיוון הנכון.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic machine-learning trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על למידת מכונה`,
    },
    sections: [
      {
        heading: { en: `On Generalization`, he: `על הכללה` },
        body: {
          en: `A model scores nearly perfectly every time it's evaluated, but performs badly the moment it meets real, unseen data. What's the most likely explanation, using this session's exam analogy? Answer: the model was almost certainly evaluated on the same data it trained on — like grading students on the exact practice exam they memorized — which proves nothing about how well it generalizes to genuinely new inputs.`,
          he: `מודל מקבל ציון כמעט מושלם בכל פעם שהוא מוערך, אבל מתפקד גרוע ברגע שהוא פוגש נתונים אמיתיים ולא-נראים. מה ההסבר הסביר ביותר, באמצעות אנלוגיית הבחינה של המפגש הזה? תשובה: המודל כמעט בוודאות הוערך על אותם נתונים שהוא התאמן עליהם — כמו לבחון סטודנטים על בדיוק מבחן התרגול שהם שיננו — מה שלא מוכיח כלום על עד כמה הוא מכליל לקלטים באמת חדשים.`,
        },
      },
      {
        heading: { en: `On Gradient Descent's Direction`, he: `על כיוון ירידת הגרדיאנט` },
        body: {
          en: `On one side of the error curve the slope is positive; on the other side it's negative. Why does subtracting the learning rate times the slope move the parameter toward the minimum in both cases? Answer: on the positive-slope side, subtracting a positive number decreases the parameter, moving left toward the minimum; on the negative-slope side, subtracting a negative number increases the parameter, moving right toward the minimum — the same subtraction rule automatically points downhill from either direction because the slope's sign flips exactly where it needs to.`,
          he: `בצד אחד של עקומת השגיאה השיפוע חיובי; בצד השני הוא שלילי. למה חיסור קצב הלמידה כפול השיפוע מזיז את הפרמטר לכיוון המינימום בשני המקרים? תשובה: בצד השיפוע החיובי, חיסור מספר חיובי מקטין את הפרמטר, זזה שמאלה לכיוון המינימום; בצד השיפוע השלילי, חיסור מספר שלילי מגדיל את הפרמטר, זזה ימינה לכיוון המינימום — אותו כלל חיסור מצביע אוטומטית במורד משני הכיוונים כי הסימן של השיפוע מתהפך בדיוק איפה שצריך.`,
        },
      },
      {
        heading: { en: `On Missing-Value Strategy`, he: `על אסטרטגיית ערכים חסרים` },
        body: {
          en: `A salary column has a strong right skew — most values are modest, with a small number of very high earners stretching the tail. Why is the median a better choice than the mean for filling its missing values? Answer: the mean is already pulled toward the high-earning tail in a skewed distribution, so it doesn't represent a typical value; the median, resistant to that pull, stays anchored to what most values in the column actually look like — directly reusing Session 13's skew lesson.`,
          he: `לעמודת שכר יש הטיה חיובית חזקה — רוב הערכים צנועים, עם מספר קטן של מרוויחים גבוהים מאוד שמותחים את הזנב. למה החציון בחירה טובה יותר מהממוצע למילוי הערכים החסרים שלה? תשובה: הממוצע כבר נמשך לכיוון הזנב הגבוה-הכנסה בהתפלגות מוטה, אז הוא לא מייצג ערך טיפוסי; החציון, עמיד לאותה משיכה, נשאר מעוגן למה שרוב הערכים בעמודה באמת נראים — שימוש חוזר ישיר בשיעור ההטיה ממפגש 13.`,
        },
      },
      {
        heading: { en: `On Forcing AI Into a Product`, he: `על לכפות AI לתוך מוצר` },
        body: {
          en: `During the live characterization demo, the custom-instructed ChatGPT persona warned against starting the construction-waste product with a camera-based AI detection feature, and against naming the startup with "AI" in it. What's the underlying principle behind both warnings? Answer: neither warning is about AI being bad — it's that a probabilistic, AI-based component adds real risk (unpredictable results, security exposure) that should only be taken on when it's genuinely necessary, and that visibly forcing AI into a product or its name reads to investors as a weakness being disguised as a strength, not as innovation.`,
          he: `במהלך הדגמת האפיון החיה, פרסונת ה-ChatGPT המותאמת הזהירה מלהתחיל את מוצר בזבוז-הבנייה עם פיצ׳ר זיהוי AI מבוסס-מצלמה, ומלכנות את הסטארט-אפ עם "AI" בתוכו. מה העיקרון הבסיסי שמאחורי שתי האזהרות? תשובה: אף אזהרה היא לא על כך ש-AI רע — זה שרכיב הסתברותי מבוסס-AI מוסיף סיכון אמיתי (תוצאות בלתי צפויות, חשיפת אבטחה) שכדאי לקחת עליו רק כשהוא באמת הכרחי, ושלכפות AI בצורה גלויה לתוך מוצר או השם שלו נקרא למשקיעים כחולשה שמוסווית כחוזקה, לא כחדשנות.`,
        },
      },
    ],
    principle: {
      en: `A memorized formula answers "how to compute it." These questions only answer to "why the result can or can't be trusted."`,
      he: `נוסחה שמושננת עונה על "איך מחשבים את זה". השאלות האלה עונות רק ל"למה אפשר או אי אפשר לסמוך על התוצאה".`,
    },
  },
];
