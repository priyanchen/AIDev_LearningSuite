import type { CardContent } from './types';

// Session 22 · Computer Vision (Module Opening) · 16.09.2026
// Dr. Zuari's session: Ultralytics/YOLO ecosystem, detection/segmentation/pose estimation, live pose-estimation coach build.
// Cards authored from transcript analysis. Original teaching material.

export const session22Cards: CardContent[] = [
  {
    number: '00',
    title: { en: `Session Index`, he: `מפתח המפגש` },
    subtitle: {
      en: `An eleven-card map opening a new module — from a camera that finds a bomber in a thirty-minute video in fifty-three seconds, to building a pose-tracking coach live`,
      he: `מפתח של אחד-עשר כרטיסים שפותח מודול חדש — ממצלמה שמוצאת מחבל בסרטון של שלושים דקות תוך חמישים ושלוש שניות, ועד לבניית מאמן מעקב-תנוחה בשידור חי`,
    },
    sections: [
      {
        heading: { en: `What This Session Is`, he: `מה המפגש הזה` },
        body: {
          en: `Computer vision opens with the Ultralytics ecosystem — four separate specialized models (detection, classification, segmentation, pose estimation), each lightweight enough to run locally rather than in the cloud. The session covers what each model actually sees, the sharp line between detecting something and interpreting it, and closes with a live build of a pose-tracking fitness coach and the start of a full project-characterization exercise.`,
          he: `ראייה ממוחשבת נפתחת עם המערכת האקולוגית של Ultralytics — ארבעה מודלים מתמחים נפרדים (זיהוי אובייקטים, סיווג, סגמנטציה, אומדן תנוחה), כל אחד קל מספיק כדי לרוץ מקומית במקום בענן. המפגש מכסה מה כל מודל בעצם רואה, הקו החד בין לזהות משהו לפרש אותו, ונסגר בבנייה חיה של מאמן כושר עוקב-תנוחה ובתחילתו של תרגיל אפיון פרויקט מלא.`,
        },
      },
      {
        heading: { en: `How to Use`, he: `איך להשתמש` },
        body: {
          en: `Card 01 is the warning Dr. Zuari says matters more than any specific model's accuracy. Card 06 is the distinction a student's sharp question forced into the open — that detecting isn't the same as understanding.`,
          he: `כרטיס 01 היא האזהרה שד״ר זוארי אומר שחשובה יותר מהדיוק של כל מודל ספציפי. כרטיס 06 היא ההבחנה ששאלה חדה של סטודנט הכריחה לצאת לאור — שלזהות זה לא אותו דבר כמו להבין.`,
        },
      },
    ],
    principle: {
      en: `Every capability in this session is a specialized tool for one narrow question — the discipline is knowing which narrow question you're actually asking before reaching for a model.`,
      he: `כל יכולת במפגש הזה היא כלי מתמחה לשאלה צרה אחת — המשמעת היא לדעת איזו שאלה צרה את בעצם שואלת לפני שמושיטים יד למודל.`,
    },
  },
  {
    number: '01',
    title: { en: `A Model Only Knows What It Was Trained On`, he: `מודל יודע רק את מה שהוא אומן עליו` },
    subtitle: {
      en: `A hat held up to the camera came back unrecognized — not a bug, just proof the model was never shown one`,
      he: `כובע שהוחזק מול המצלמה חזר לא-מזוהה — לא באג, רק הוכחה שהמודל מעולם לא הוצג לו אחד`,
    },
    sections: [
      {
        heading: { en: `The Live Demonstration`, he: `ההדגמה החיה` },
        body: {
          en: `Running the detection model live, Dr. Zuari held up a hat — and the model returned nothing, not even a low-confidence guess. His explanation was simple: this specific model's training set never included hats as a labeled category, so there's nothing in its weights that could recognize one, no matter how obvious the object looks to a person.`,
          he: `בהרצת מודל הזיהוי בשידור חי, ד״ר זוארי הרים כובע — והמודל לא החזיר כלום, אפילו לא ניחוש בביטחון נמוך. ההסבר שלו היה פשוט: סט האימון הספציפי של המודל הזה מעולם לא כלל כובעים כקטגוריה מתויגת, אז אין כלום במשקלים שלו שיכול לזהות אחד, לא משנה כמה ברור האובייקט נראה לבן אדם.`,
        },
      },
      {
        heading: { en: `The Rule This Earns`, he: `הכלל שזה מזכה` },
        body: {
          en: `Dr. Zuari's direct instruction to the class: before investing any effort building on top of a vision model, always check its list of trained object classes first — asking a chatbot directly for that list, if needed. A vision project built on the assumption that a model recognizes something it was never shown will fail in a way that looks like a bug, but is really a planning gap.`,
          he: `ההנחיה הישירה של ד״ר זוארי לכיתה: לפני שמשקיעים מאמץ כלשהו בבנייה מעל מודל ראייה, לבדוק תמיד קודם את רשימת קטגוריות האובייקטים שעליהן הוא אומן — לשאול צ׳אטבוט ישירות על הרשימה הזו, במידת הצורך. פרויקט ראייה שנבנה על ההנחה שמודל מזהה משהו שמעולם לא הוצג לו ייכשל בדרך שנראית כמו באג, אבל היא בעצם פער תכנון.`,
        },
      },
    ],
    principle: {
      en: `A vision model's blind spots aren't bugs to debug — they're the exact shape of whatever its training data never covered, and checking that shape comes before writing a single line of code.`,
      he: `הנקודות העיוורות של מודל ראייה הן לא באגים לתקן — הן בדיוק הצורה של כל מה שנתוני האימון שלו מעולם לא כיסו, ובדיקת הצורה הזו קודמת לכתיבת שורת קוד אחת.`,
    },
  },
  {
    number: '02',
    title: { en: `Four Models, Not One`, he: `ארבעה מודלים, לא אחד` },
    subtitle: {
      en: `Detection, classification, segmentation, and pose estimation are four separate specialized tools from Ultralytics — not four modes of a single universal model`,
      he: `זיהוי, סיווג, סגמנטציה, ואומדן תנוחה הם ארבעה כלים מתמחים נפרדים מ-Ultralytics — לא ארבעה מצבים של מודל אוניברסלי אחד`,
    },
    sections: [
      {
        heading: { en: `The Company Behind the Ecosystem`, he: `החברה מאחורי המערכת האקולוגית` },
        body: {
          en: `Ultralytics, the company behind the YOLO family of models, offers a package covering a wide range of vision needs — Dr. Zuari's framing was that you don't need deep math fluency to know which of their products solves which problem, only to understand what each one is for.`,
          he: `Ultralytics, החברה מאחורי משפחת מודלי YOLO, מציעה חבילה שמכסה מגוון רחב של צרכי ראייה — המסגור של ד״ר זוארי היה שאין צורך בשליטה מתמטית עמוקה כדי לדעת איזה מהמוצרים שלהם פותר איזו בעיה, רק להבין למה כל אחד מיועד.`,
        },
      },
      {
        heading: { en: `Each Task Gets Its Own Model File`, he: `לכל משימה קובץ מודל משלה` },
        body: {
          en: `Object detection, image classification, segmentation, and pose estimation are downloaded as four separate model files, each trained for exactly one job. Detection draws a box around an object and names it. Classification decides which category a whole image belongs to. Segmentation paints the exact pixel boundary of each object, not just a box around it. Pose estimation locates specific points on a body, joint by joint.`,
          he: `זיהוי אובייקטים, סיווג תמונות, סגמנטציה, ואומדן תנוחה מורדים כארבעה קבצי מודל נפרדים, כל אחד מאומן לעבודה אחת בדיוק. זיהוי מצייר תיבה סביב אובייקט ונותן לו שם. סיווג מחליט לאיזו קטגוריה תמונה שלמה שייכת. סגמנטציה צובעת את הגבול המדויק בפיקסלים של כל אובייקט, לא רק תיבה סביבו. אומדן תנוחה מאתר נקודות ספציפיות על גוף, מפרק אחרי מפרק.`,
        },
      },
    ],
    principle: {
      en: `Naming the task correctly before searching for a model is what turns "which Ultralytics model do I need" into an easy question instead of a guessing game.`,
      he: `כינוי המשימה נכון לפני חיפוש מודל הוא מה שהופך את "איזה מודל Ultralytics אני צריכה" לשאלה קלה במקום משחק ניחושים.`,
    },
  },
  {
    number: '03',
    title: { en: `Install in a Conda Environment, Not Bare pip`, he: `להתקין בסביבת Conda, לא ב-pip גולמי` },
    subtitle: {
      en: `Live install trouble across the class turned into a lesson about why Ultralytics specifically punishes a loose environment`,
      he: `בעיות התקנה חיות בכיתה הפכו לשיעור על למה Ultralytics ספציפית מענישה סביבה רופפת`,
    },
    sections: [
      {
        heading: { en: `What Went Wrong Live`, he: `מה השתבש בשידור חי` },
        body: {
          en: `Multiple students hit install failures in real time — packages that wouldn't resolve, environments that silently weren't created, dependency errors with no obvious cause. Dr. Zuari's diagnosis, watching it happen: this is exactly the failure mode a bare pip install invites.`,
          he: `כמה סטודנטים נתקלו בכשלי התקנה בזמן אמת — חבילות שלא נפתרו, סביבות שלא נוצרו בשקט, שגיאות תלות בלי סיבה ברורה. האבחנה של ד״ר זוארי, בזמן שזה קרה: זה בדיוק דפוס הכשל שהתקנת pip גולמית מזמינה.`,
        },
      },
      {
        heading: { en: `Why This Package Specifically Needs Conda`, he: `למה החבילה הזו ספציפית צריכה Conda` },
        body: {
          en: `Ultralytics pulls in a long chain of dependencies — each package needing another package, needing another. A conda environment ships with a large baseline of compatible packages already resolved, which sidesteps most of that chain before it ever becomes a problem. Installing directly into a bare environment means resolving that entire dependency chain by hand, one cryptic error at a time — the exact reason he insisted the class set up conda first, before touching the install itself.`,
          he: `Ultralytics מושכת אחריה שרשרת ארוכה של תלויות — כל חבילה צריכה חבילה נוספת, שצריכה עוד חבילה. סביבת conda מגיעה עם בסיס גדול של חבילות תואמות שכבר נפתרו, מה שעוקף את רוב השרשרת הזו לפני שהיא בכלל הופכת לבעיה. התקנה ישירה לתוך סביבה גולמית אומרת לפתור את כל שרשרת התלויות הזו ידנית, שגיאה מסתורית אחת בכל פעם — הסיבה המדויקת שבגללה הוא התעקש שהכיתה תקים conda קודם, לפני שנוגעים בהתקנה עצמה.`,
        },
      },
    ],
    principle: {
      en: `A dependency chain doesn't get shorter because you're in a hurry to skip environment setup — it just surfaces later, as an error with a much less obvious cause.`,
      he: `שרשרת תלויות לא מתקצרת כי ממהרים לדלג על הקמת סביבה — היא פשוט צצה מאוחר יותר, כשגיאה עם סיבה הרבה פחות ברורה.`,
    },
  },
  {
    number: '04',
    title: { en: `Reading the Output — Boxes, Boundaries, and Color`, he: `קריאת הפלט — תיבות, גבולות, וצבע` },
    subtitle: {
      en: `A bounding box, a painted boundary, and a color gradient each answer a different question about the same scene`,
      he: `תיבה תוחמת, גבול צבוע, ומעבר צבעים כל אחד עונה על שאלה שונה לגבי אותה סצנה`,
    },
    sections: [
      {
        heading: { en: `Detection's Box vs Segmentation's Outline`, he: `התיבה של הזיהוי מול המתאר של הסגמנטציה` },
        body: {
          en: `Detection draws a rectangle around an object and attaches a confidence score — useful for knowing that something is there and roughly where. Segmentation goes further, painting the object's exact pixel boundary rather than a box around it — Dr. Zuari's example was Mobileye's camera output, where the precise shape of a car or pedestrian is colored in, not just boxed.`,
          he: `זיהוי מצייר מלבן סביב אובייקט ומצרף לו ציון ביטחון — שימושי לדעת שמשהו שם ובערך איפה. סגמנטציה הולכת רחוק יותר, צובעת את הגבול המדויק בפיקסלים של האובייקט במקום תיבה סביבו — הדוגמה של ד״ר זוארי הייתה פלט המצלמה של Mobileye, שבו הצורה המדויקת של מכונית או הולך רגל צבועה, לא רק תחומה בתיבה.`,
        },
      },
      {
        heading: { en: `Distance Encoded as Color`, he: `מרחק מקודד כצבע` },
        body: {
          en: `A separate capability, distance estimation, reads relative proximity directly off color — objects closer to the camera render in red and orange, objects farther away shift toward blue, all without any explicit depth sensor. The color itself is the estimate, readable at a glance rather than requiring a numeric lookup.`,
          he: `יכולת נפרדת, אומדן מרחק, קוראת קרבה יחסית ישירות מצבע — אובייקטים קרובים יותר למצלמה מוצגים באדום וכתום, אובייקטים רחוקים יותר נעים לכיוון כחול, הכול בלי שום חיישן עומק מפורש. הצבע עצמו הוא האומדן, ניתן לקריאה במבט חטוף במקום לדרוש חיפוש מספרי.`,
        },
      },
    ],
    principle: {
      en: `Each visual format is a different answer to a different question — a box answers "is it there," a boundary answers "exactly where," and a color answers "how close."`,
      he: `כל פורמט חזותי הוא תשובה שונה לשאלה שונה — תיבה עונה על "האם זה שם", גבול עונה על "איפה בדיוק", וצבע עונה על "כמה קרוב".`,
    },
  },
  {
    number: '05',
    title: { en: `Not the Newest Model — the One That Fits the Device`, he: `לא המודל החדש ביותר — זה שמתאים למכשיר` },
    subtitle: {
      en: `YOLO26 outclasses YOLO8 on paper, but a laptop with a webcam is exactly the situation where the older, lighter model wins`,
      he: `YOLO26 עולה על YOLO8 על הנייר, אבל מחשב נייד עם מצלמת רשת הוא בדיוק המצב שבו המודל הישן והקל יותר מנצח`,
    },
    sections: [
      {
        heading: { en: `A Student's Obvious Question`, he: `השאלה המובנת מאליה של סטודנט` },
        body: {
          en: `A student asked the natural question: Ultralytics' newest model is YOLO26 — why is the class running the older YOLO8 instead? Dr. Zuari's answer flipped the assumption that newer always means better to reach for.`,
          he: `סטודנט שאל את השאלה הטבעית: המודל החדש ביותר של Ultralytics הוא YOLO26 — למה הכיתה מריצה את YOLO8 הישן יותר במקום? התשובה של ד״ר זוארי הפכה את ההנחה שחדש יותר תמיד אומר עדיף יותר להושיט יד אליו.`,
        },
      },
      {
        heading: { en: `Weight, Hardware, and Latency`, he: `משקל, חומרה, וזמן תגובה` },
        body: {
          en: `YOLO8 weighs in around thirty megabytes and runs comfortably on a simple laptop, even with nothing more than its built-in webcam. YOLO26 is dramatically heavier and genuinely needs strong, dedicated GPU power to run at all — hardware the class's own laptops simply don't have. Reaching for the newest model regardless of the device running it trades a real, working demo for one that never loads.`,
          he: `YOLO8 שוקל בערך שלושים מגה-בייט ורץ בנוחות על מחשב נייד פשוט, אפילו עם לא יותר ממצלמת הרשת המובנית שלו. YOLO26 כבד באופן דרמטי וזקוק באמת לכוח GPU חזק וייעודי כדי לרוץ בכלל — חומרה שלמחשבים הניידים של הכיתה עצמם פשוט אין. הושטת יד למודל החדש ביותר בלי קשר למכשיר שמריץ אותו סוחרת הדגמה אמיתית ועובדת באחת שלעולם לא נטענת.`,
        },
      },
    ],
    principle: {
      en: `The best model for a job isn't the one with the highest benchmark score — it's the one that actually finishes running on the hardware you have in front of you.`,
      he: `המודל הטוב ביותר למשימה הוא לא זה עם ציון הבנצ׳מארק הגבוה ביותר — הוא זה שבאמת מסיים לרוץ על החומרה שיש לך מול העיניים.`,
    },
  },
  {
    number: '06',
    title: { en: `Detecting Isn't Interpreting`, he: `לזהות זה לא לפרש` },
    subtitle: {
      en: `A student's sports-injury idea ran straight into the line between what a pose model sees and what it understands`,
      he: `רעיון מניעת פציעות ספורט של סטודנט רץ ישר אל הקו שבין מה שמודל תנוחה רואה למה שהוא מבין`,
    },
    sections: [
      {
        heading: { en: `Erez's Idea`, he: `הרעיון של ארז` },
        body: {
          en: `A student, Erez, proposed pointing a camera at athletes during training, analyzing their movements, and flagging patterns likely to cause injury. It sounded like a natural fit for pose estimation — the model already tracks body movement in detail.`,
          he: `סטודנט, ארז, הציע להצביע מצלמה על ספורטאים במהלך אימון, לנתח את התנועות שלהם, ולסמן דפוסים שעלולים לגרום לפציעה. זה נשמע כמו התאמה טבעית לאומדן תנוחה — המודל כבר עוקב אחרי תנועת גוף בפירוט.`,
        },
      },
      {
        heading: { en: `Dr. Zuari's Correction`, he: `התיקון של ד״ר זוארי` },
        body: {
          en: `The model doesn't know what an injury-risking movement looks like, and it never will on its own — pose estimation's entire job is locating and tracking joint positions, nothing more. Deciding that a particular elbow angle or knife-wielding gesture means something specific requires an explicit rule, defined by the developer, sitting outside the vision model entirely — whether that rule comes from hand-coded logic or a separate language model interpreting the tracked points.`,
          he: `המודל לא יודע איך נראית תנועה שמסכנת בפציעה, ולעולם לא ידע מעצמו — כל העבודה של אומדן תנוחה היא איתור ומעקב אחר מיקומי מפרקים, לא יותר. ההחלטה שזווית מרפק מסוימת או תנועת החזקת סכין אומרת משהו ספציפי דורשת כלל מפורש, מוגדר על ידי המפתח, שיושב לגמרי מחוץ למודל הראייה — בין אם הכלל הזה מגיע מלוגיקה מקודדת ידנית או ממודל שפה נפרד שמפרש את הנקודות הנעקבות.`,
        },
      },
    ],
    principle: {
      en: `A vision model hands you facts about coordinates — the meaning attached to those coordinates is a decision you have to make and build separately, not something the model contributes.`,
      he: `מודל ראייה מוסר לך עובדות על קואורדינטות — המשמעות שמוצמדת לקואורדינטות האלה היא החלטה שאת צריכה לקבל ולבנות בנפרד, לא משהו שהמודל תורם.`,
    },
  },
  {
    number: '07',
    title: { en: `Building the Coach, Live`, he: `בונים את המאמן, בשידור חי` },
    subtitle: {
      en: `A pose-estimation fitness app, built on the spot to prove that structured joint data is genuinely usable`,
      he: `אפליקציית כושר מבוססת אומדן תנוחה, נבנתה במקום כדי להוכיח שנתוני מפרקים מובנים באמת שימושיים`,
    },
    sections: [
      {
        heading: { en: `Steps`, he: `שלבים` },
        body: {
          en: `One: place the pose-estimation model file directly into the project folder rather than relying on an automatic download. Two: name the exact movements the app should recognize — squats, shoulder presses, elbow position — since the model itself has no idea which of the seventeen points it tracks matter for this specific use case. Three: connect a live webcam feed as the input source. Four: build a simple interface around it, in this case with Streamlit, to actually see the tracked points overlaid on the video in real time.`,
          he: `אחת: להניח את קובץ מודל אומדן התנוחה ישירות לתוך תיקיית הפרויקט במקום להסתמך על הורדה אוטומטית. שתיים: לכנות את התנועות המדויקות שהאפליקציה צריכה לזהות — סקוואטים, לחיצות כתפיים, מיקום מרפק — כי למודל עצמו אין מושג אילו מתוך שבע עשרה הנקודות שהוא עוקב אחריהן חשובות למקרה השימוש הספציפי הזה. שלוש: לחבר הזנת מצלמת רשת חיה כמקור הקלט. ארבע: לבנות ממשק פשוט סביב זה, במקרה הזה עם Streamlit, כדי באמת לראות את הנקודות הנעקבות מוצגות על גבי הווידאו בזמן אמת.`,
        },
      },
      {
        heading: { en: `What the Output Actually Is`, he: `מה הפלט בעצם` },
        body: {
          en: `The seventeen tracked points aren't just a picture — they come out as structured data, usable as coordinates and angles a moment later. That's exactly what makes a follow-up feature like counting repetitions or flagging poor elbow form possible: not a new vision capability, but ordinary logic built on top of data the model was already handing over.`,
          he: `שבע עשרה הנקודות הנעקבות הן לא רק תמונה — הן יוצאות כנתונים מובנים, ניתנים לשימוש כקואורדינטות וזוויות רגע אחר כך. זה בדיוק מה שהופך תכונת המשך כמו ספירת חזרות או סימון תנוחת מרפק לקויה לאפשרית: לא יכולת ראייה חדשה, אלא לוגיקה רגילה שנבנית מעל נתונים שהמודל כבר מסר.`,
        },
      },
    ],
    principle: {
      en: `The model's job ends at handing back structured coordinates — everything that makes the app feel like a coach is ordinary logic layered on top, not a hidden feature of the vision model itself.`,
      he: `העבודה של המודל מסתיימת במסירת קואורדינטות מובנות — כל מה שגורם לאפליקציה להרגיש כמו מאמן הוא לוגיקה רגילה שמונחת מעליה, לא תכונה נסתרת של מודל הראייה עצמו.`,
    },
  },
  {
    number: '08',
    title: { en: `Why a Trucking Company Chose a Local Camera Over an LLM`, he: `למה חברת משאיות בחרה מצלמה מקומית על פני LLM` },
    subtitle: {
      en: `A specialized model priced by compute beat a general vision LLM priced by the token — and saved insurers millions in the process`,
      he: `מודל מתמחה שמתומחר לפי חישוב ניצח LLM ראייה כללי שמתומחר לפי טוקן — וחסך למבטחים מיליונים בתהליך`,
    },
    sections: [
      {
        heading: { en: `The Real Business Case`, he: `המקרה העסקי האמיתי` },
        body: {
          en: `Dr. Zuari's example: a startup installed cameras inside trucks to continuously monitor drivers for drowsiness and erratic behavior. When accidents happened, insurers faced multi-million-dollar payouts — the footage became evidence that could clarify exactly what happened and cut those costs dramatically. The startup was eventually acquired specifically for this technology.`,
          he: `הדוגמה של ד״ר זוארי: סטארט-אפ התקין מצלמות בתוך משאיות כדי לנטר ברציפות נהגים לאיתור עייפות והתנהגות לא תקינה. כשקרו תאונות, מבטחים ניצבו מול תשלומים של מיליוני דולרים — הצילום הפך לראיה שיכולה להבהיר בדיוק מה קרה ולקצץ בעלויות האלה באופן דרמטי. הסטארט-אפ נרכש בסופו של דבר ספציפית בגלל הטכנולוגיה הזו.`,
        },
      },
      {
        heading: { en: `Why Not Just Point a Vision LLM at the Footage`, he: `למה לא פשוט להצביע LLM ראייה על הצילום` },
        body: {
          en: `Dr. Zuari's cost argument: a language model with vision capability charges per token, and continuous video analysis running around the clock racks up tokens fast. A specialized local model like Ultralytics' detection or pose model runs on hardware you already own or rent once — the cost is compute, paid up front, not a per-frame meter that keeps running as long as the camera does.`,
          he: `הטיעון הכלכלי של ד״ר זוארי: מודל שפה עם יכולת ראייה גובה לפי טוקן, וניתוח וידאו רציף שרץ מסביב לשעון צובר טוקנים מהר. מודל מקומי מתמחה כמו מודל הזיהוי או התנוחה של Ultralytics רץ על חומרה שכבר יש לך או ששוכרים פעם אחת — העלות היא חישוב, משולמת מראש, לא מד שרץ לפי פריים כל עוד המצלמה פועלת.`,
        },
      },
    ],
    principle: {
      en: `A general vision LLM and a specialized local model can solve the same narrow task — the choice between them is really a choice about whether the cost structure is per-token or per-hardware, and continuous video makes that difference enormous.`,
      he: `LLM ראייה כללי ומודל מקומי מתמחה יכולים לפתור את אותה משימה צרה — הבחירה ביניהם היא בעצם בחירה לגבי האם מבנה העלות הוא לפי טוקן או לפי חומרה, ווידאו רציף הופך את ההבדל הזה לעצום.`,
    },
  },
  {
    number: '09',
    title: { en: `Video Is a Flood of Images, Not One Picture`, he: `וידאו הוא שיטפון של תמונות, לא תמונה אחת` },
    subtitle: {
      en: `Sixty frames a second means sixty full images to analyze every second — the real source of vision's compute cost`,
      he: `שישים פריימים בשנייה אומר שישים תמונות מלאות לנתח בכל שנייה — המקור האמיתי לעלות החישוב של ראייה`,
    },
    sections: [
      {
        heading: { en: `Why Video Is Fundamentally Harder Than a Photo`, he: `למה וידאו קשה יותר באופן בסיסי מתמונה` },
        body: {
          en: `Dr. Zuari's framing: a single image is one analysis. Video running at sixty frames per second is sixty separate full-resolution analyses every single second, each one multiplied by the number of pixels in the frame. This is exactly why real-time video vision needs serious compute — not because the underlying task per frame is unusually hard, but because that same task repeats continuously, dozens of times a second, for as long as the camera runs.`,
          he: `המסגור של ד״ר זוארי: תמונה בודדת היא ניתוח אחד. וידאו שרץ בשישים פריימים בשנייה הוא שישים ניתוחים ברזולוציה מלאה נפרדים בכל שנייה בודדת, כל אחד מוכפל במספר הפיקסלים בפריים. זו בדיוק הסיבה שראיית וידאו בזמן אמת צריכה חישוב רציני — לא כי המשימה הבסיסית לכל פריים קשה באופן חריג, אלא כי אותה משימה בדיוק חוזרת ברציפות, עשרות פעמים בשנייה, כל עוד המצלמה פועלת.`,
        },
      },
      {
        heading: { en: `Segmentation as Pixel Clustering — A Callback`, he: `סגמנטציה כאשכול פיקסלים — הפניה לאחור` },
        body: {
          en: `Dr. Zuari connected segmentation directly back to the clustering material from the prior session: pixels that are close together in position and similar in value get grouped and painted the same color, the same underlying idea as K-Means grouping data points by proximity — just applied to pixels in an image instead of rows in a table.`,
          he: `ד״ר זוארי חיבר את הסגמנטציה ישירות בחזרה לחומר האשכולות מהמפגש הקודם: פיקסלים שקרובים זה לזה במיקום ודומים בערך מקובצים וצבועים באותו צבע, אותו רעיון בסיסי כמו K-Means שמקבץ נקודות נתונים לפי קרבה — פשוט מיושם על פיקסלים בתמונה במקום שורות בטבלה.`,
        },
      },
    ],
    principle: {
      en: `The compute cost of video isn't a separate mystery from everything covered before it — it's the same per-frame analysis cost, just multiplied by how many frames a second actually demands.`,
      he: `עלות החישוב של וידאו היא לא תעלומה נפרדת מכל מה שכוסה לפניה — היא אותה עלות ניתוח לכל פריים, פשוט מוכפלת בכמה פריימים שנייה בעצם דורשת.`,
    },
  },
  {
    number: '10',
    title: { en: `Check Yourself`, he: `בדקי את עצמך` },
    subtitle: {
      en: `Four questions this session's content earns — not generic computer-vision trivia`,
      he: `ארבע שאלות שהתוכן של המפגש הזה מזכה בהן — לא טריוויה כללית על ראייה ממוחשבת`,
    },
    sections: [
      {
        heading: { en: `On Trained Classes`, he: `על קטגוריות מאומנות` },
        body: {
          en: `A detection model fails to recognize a common object that a human would identify instantly. What's the most likely explanation, and what should have been checked before building on the model at all? Answer: the object almost certainly wasn't part of the model's training classes — no model can recognize a category it was never shown. The list of trained classes should be checked before any project is built on top of a vision model, not discovered by accident during a demo.`,
          he: `מודל זיהוי נכשל לזהות אובייקט נפוץ שבן אדם היה מזהה מיד. מה ההסבר הסביר ביותר, ומה היה צריך להיבדק לפני שבונים על המודל בכלל? תשובה: כמעט בוודאות שהאובייקט לא היה חלק מקטגוריות האימון של המודל — אף מודל לא יכול לזהות קטגוריה שמעולם לא הוצגה לו. רשימת הקטגוריות המאומנות הייתה צריכה להיבדק לפני שנבנה כל פרויקט מעל מודל ראייה, לא להתגלות בטעות במהלך הדגמה.`,
        },
      },
      {
        heading: { en: `On Model Choice`, he: `על בחירת מודל` },
        body: {
          en: `A project needs to run object detection on a basic laptop using only its built-in webcam. Why might the newest, most powerful available model actually be the wrong choice here? Answer: the newest model may need serious dedicated GPU power that a basic laptop simply doesn't have — a lighter, older model that actually runs on the available hardware beats a state-of-the-art one that never loads.`,
          he: `פרויקט צריך להריץ זיהוי אובייקטים על מחשב נייד בסיסי תוך שימוש רק במצלמת הרשת המובנית שלו. למה המודל החדש והחזק ביותר הזמין עלול להיות בעצם הבחירה הלא נכונה כאן? תשובה: המודל החדש ביותר עשוי לצרוך כוח GPU ייעודי רציני שלמחשב נייד בסיסי פשוט אין — מודל קל וישן יותר שבאמת רץ על החומרה הזמינה מנצח אחד מתקדם שלעולם לא נטען.`,
        },
      },
      {
        heading: { en: `On Detection vs Interpretation`, he: `על זיהוי מול פרשנות` },
        body: {
          en: `A pose-estimation model tracks an athlete's joint positions during training. Can the model, on its own, decide that a particular movement is risky and likely to cause injury? Answer: no — the model's job ends at tracking and reporting joint positions. Deciding what those positions mean, including whether a movement is risky, requires an explicit interpretation layer built separately, outside the vision model itself.`,
          he: `מודל אומדן תנוחה עוקב אחר מיקומי מפרקים של ספורטאי במהלך אימון. האם המודל, מעצמו, יכול להחליט שתנועה מסוימת מסוכנת וסביר שתגרום לפציעה? תשובה: לא — העבודה של המודל מסתיימת במעקב ודיווח על מיקומי מפרקים. ההחלטה מה המיקומים האלה אומרים, כולל האם תנועה מסוכנת, דורשת שכבת פרשנות מפורשת שנבנית בנפרד, מחוץ למודל הראייה עצמו.`,
        },
      },
      {
        heading: { en: `On Cost Structure`, he: `על מבנה עלות` },
        body: {
          en: `A company needs to continuously analyze video footage around the clock. Why might a specialized local model be dramatically cheaper than a general vision LLM for this specific use case? Answer: a vision LLM charges per token, and continuous around-the-clock video analysis generates an enormous number of tokens. A specialized local model's cost is compute, paid for the hardware rather than metered per frame — a structural difference that becomes enormous at continuous scale.`,
          he: `חברה צריכה לנתח צילום וידאו ברציפות מסביב לשעון. למה מודל מקומי מתמחה עלול להיות זול באופן דרמטי מ-LLM ראייה כללי למקרה השימוש הספציפי הזה? תשובה: LLM ראייה גובה לפי טוקן, וניתוח וידאו רציף מסביב לשעון מייצר כמות עצומה של טוקנים. העלות של מודל מקומי מתמחה היא חישוב, משולמת עבור החומרה במקום נמדדת לפי פריים — הבדל מבני שהופך לעצום בקנה מידה רציף.`,
        },
      },
    ],
    principle: {
      en: `A memorized model name answers "what it's called." These questions only answer to "what it actually sees, and what it still leaves for you to decide."`,
      he: `שם מודל שמושנן עונה על "איך קוראים לו". השאלות האלה עונות רק ל"מה הוא בעצם רואה, ומה הוא עדיין משאיר לך להחליט".`,
    },
  },
];
