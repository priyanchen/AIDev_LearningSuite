import type { CardContent } from './types';

// Session 3 · Python (Module Opener) · 05.07.2026
// Dr. Zuari explicitly framed this as the slowest session of the course.
// Content emphasis: hardware, memory hierarchy, binary, bits/bytes, ASCII.
// Not a coding session — a foundations session before any code is written.

export const session03Cards: CardContent[] = [
  {
    number: '00',
    title: { en: 'Session Index', he: 'מפתח המפגש' },
    subtitle: {
      en: 'A ten-card reference for the Python module opener',
      he: 'התייחסות של עשרה כרטיסים לפתיחת מודול הפייתון',
    },
    sections: [
      {
        heading: { en: 'What This Session Is', he: 'מה המפגש הזה' },
        body: {
          en: 'The Python module begins not with code but with the substrate code runs on. Dr. Zuari stated it explicitly: this will be the slowest session of the course. That slowness is deliberate — the concepts here return in every session that follows.',
          he: 'מודול הפייתון מתחיל לא בקוד אלא במצע שהקוד רץ עליו. ד״ר זוארי אמר זאת במפורש: זה יהיה המפגש האיטי ביותר בקורס. האיטיות הזו מכוונת — המושגים כאן חוזרים בכל מפגש שבא בהמשך.',
        },
      },
      {
        heading: { en: 'How to Use', he: 'איך להשתמש' },
        body: {
          en: 'Cards 01 and 02 build the mental model of what a computer is. Cards 03 through 06 teach how data is represented. Card 07 covers environment setup. Card 08 addresses using LLMs when the abstraction feels overwhelming. Card 09 previews where the module is going. Card 10 tests recall.',
          he: 'כרטיסים 01 ו-02 בונים את המודל המנטלי של מה זה מחשב. כרטיסים 03 עד 06 מלמדים איך נתונים מיוצגים. כרטיס 07 מכסה הקמת סביבה. כרטיס 08 עוסק בשימוש ב-LLM כשההפשטה מרגישה מכריעה. כרטיס 09 מציץ לאן המודול הולך. כרטיס 10 בוחן שליטה.',
        },
      },
    ],
    principle: {
      en: 'The slow first hour buys back the entire course',
      he: 'השעה הראשונה האיטית קונה חזרה את כל הקורס',
    },
  },
  {
    number: '01',
    title: { en: `Dr. Zuari's Pacing Pact`, he: `הסכם הקצב של ד״ר זוארי` },
    subtitle: {
      en: 'Why the first session moves deliberately, and what to do when things break',
      he: 'למה המפגש הראשון מתקדם בכוונה, ומה לעשות כשדברים נשברים',
    },
    sections: [
      {
        heading: { en: 'The Explicit Warning', he: 'האזהרה המפורשת' },
        body: {
          en: 'Dr. Zuari opened by naming this session the slowest of the course. That framing is a gift — it prevents students from mistaking the pace for the standard, or from panicking when things do not work on their machine within seconds.',
          he: 'ד״ר זוארי פתח בכך שקרא למפגש הזה האיטי ביותר בקורס. המסגור הזה הוא מתנה — הוא מונע מסטודנטים לטעות בקצב בתור הסטנדרט, או להיכנס לפאניקה כשדברים לא עובדים במכונה שלהם תוך שניות.',
        },
      },
      {
        heading: { en: 'The Rule for When Something Breaks', he: 'הכלל למקרה שמשהו נשבר' },
        body: {
          en: 'When installation fails or a command errors mid-session, the instruction was clear: do not stop listening. Let the technical problem wait. A small issue can consume the entire lesson if you chase it in real time. Missing the concept costs more than missing a keystroke.',
          he: 'כשהתקנה נכשלת או שפקודה מפיקה שגיאה באמצע המפגש, ההוראה הייתה ברורה: אל תפסיקי להקשיב. תני לבעיה הטכנית לחכות. בעיה קטנה יכולה לצרוך את כל השיעור אם תרדפי אחריה בזמן אמת. החמצת המושג עולה יותר מהחמצת הקשה על המקלדת.',
        },
      },
      {
        heading: { en: 'Why This Matters as a Principle', he: 'למה זה חשוב כעיקרון' },
        body: {
          en: 'This pacing pact captures a broader discipline. Debugging in real time under peer pressure produces poor decisions. The mature response to a broken environment is to note the failure, keep learning, and return to the problem when the session ends and the mind is quiet.',
          he: 'הסכם הקצב הזה תופס משמעת רחבה יותר. איתור באגים בזמן אמת תחת לחץ עמיתים מייצר החלטות גרועות. התגובה הבוגרת לסביבה שבורה היא לרשום את הכשל, להמשיך ללמוד, ולחזור לבעיה כשהמפגש נגמר והדעת שקטה.',
        },
      },
    ],
    principle: {
      en: 'Follow the teacher, not the error message',
      he: 'עקבי אחר ד״ר זוארי, לא אחר הודעת השגיאה',
    },
  },
  {
    number: '02',
    title: { en: 'Hardware — The Substrate', he: 'חומרה — המצע' },
    subtitle: {
      en: 'The three parts of a computer, and why each one matters',
      he: 'שלושת חלקי המחשב, ולמה כל אחד מהם חשוב',
    },
    sections: [
      {
        heading: { en: 'CPU — The Brain', he: 'CPU — המוח' },
        body: {
          en: 'The CPU is the part that actually executes operations. Every keystroke, every scroll, every calculation passes through it. When someone says "Intel Core i7," they are naming this piece. Open Task Manager on Windows or Activity Monitor on Mac and you can watch its usage rise and fall in real time as software works.',
          he: 'ה-CPU הוא החלק שמבצע בפועל פעולות. כל הקשה, כל גלילה, כל חישוב עוברים דרכו. כשמישהו אומר "Intel Core i7", הוא מכנה את החלק הזה. פתחי את Task Manager ב-Windows או Activity Monitor ב-Mac ותוכלי לצפות בשימוש שלו עולה ויורד בזמן אמת בזמן שהתוכנה עובדת.',
        },
      },
      {
        heading: { en: 'RAM — Short-Term Memory', he: 'RAM — זיכרון לטווח קצר' },
        body: {
          en: 'RAM holds the state of every running program. Open a document and its contents live in RAM. Open a browser tab and the page lives in RAM. When someone advertises "32 GB of RAM," they are naming the working memory. Modern software is heavy: 16 GB is now borderline, 32 GB is the emerging standard. Restarting the computer clears RAM — that is why "have you tried restarting" often works.',
          he: 'RAM מחזיק את המצב של כל תוכנה שרצה. פתחי מסמך והתוכן שלו חי ב-RAM. פתחי לשונית דפדפן והדף חי ב-RAM. כשמישהו מפרסם "32 GB של RAM", הוא מכנה את זיכרון העבודה. תוכנה מודרנית כבדה: 16 GB היום גבולי, 32 GB הוא הסטנדרט המתהווה. אתחול המחשב מנקה את ה-RAM — זו הסיבה ש"האם ניסית להפעיל מחדש" לרוב עובד.',
        },
      },
      {
        heading: { en: 'Storage — Long-Term Memory', he: 'אחסון — זיכרון לטווח ארוך' },
        body: {
          en: 'The hard drive or SSD holds everything that persists between sessions: files, installed programs, downloaded videos, your operating system. SSDs are dramatically faster than the older HDDs they replaced. Storage is measured in gigabytes and terabytes and, unlike RAM, is not cleared when you shut down.',
          he: 'הכונן הקשיח או ה-SSD מחזיקים את כל מה שנשמר בין מפגשים: קבצים, תוכנות מותקנות, סרטונים שהורדת, מערכת ההפעלה שלך. SSDs מהירים באופן דרמטי מ-HDDs הישנים שהם החליפו. אחסון נמדד בגיגה-בייט וטרה-בייט, ובניגוד ל-RAM, לא מנוקה בכיבוי.',
        },
      },
      {
        heading: { en: 'Software as the Translator', he: 'תוכנה כמתרגמת' },
        body: {
          en: 'Hardware alone is inert. Without software, the CPU, RAM, and storage do not know how to talk to each other. The operating system — Windows, macOS, Linux — is the software layer that makes them cooperate. Every program you run rides on top of the operating system, which rides on top of the hardware.',
          he: 'חומרה לבדה אינרטית. ללא תוכנה, ה-CPU, RAM והאחסון לא יודעים לדבר זה עם זה. מערכת ההפעלה — Windows, macOS, Linux — היא שכבת התוכנה שגורמת להם לשתף פעולה. כל תוכנית שאת מריצה רוכבת על מערכת ההפעלה, שרוכבת על החומרה.',
        },
      },
    ],
    principle: {
      en: 'Every abstraction rests on physical stuff — remembering this prevents magical thinking',
      he: 'כל הפשטה נחה על חומר פיזי — לזכור זאת מונע חשיבה קסומה',
    },
  },
  {
    number: '03',
    title: { en: 'The Bit and the Byte', he: 'הביט והבייט' },
    subtitle: {
      en: 'The smallest units of information, and how they combine',
      he: 'יחידות המידע הקטנות ביותר, ואיך הן מצטרפות',
    },
    sections: [
      {
        heading: { en: 'The Bit', he: 'הביט' },
        body: {
          en: 'A bit is the smallest possible unit of information. It has exactly two possible values: 0 or 1. That is all. Everything the computer knows — every letter, image pixel, sound sample, video frame — is built from bits and nothing else.',
          he: 'ביט הוא יחידת המידע הקטנה ביותר האפשרית. יש לו שני ערכים אפשריים בדיוק: 0 או 1. זה הכול. כל מה שהמחשב יודע — כל אות, פיקסל בתמונה, דגימת קול, פריים וידאו — בנוי מביטים ותו לא.',
        },
      },
      {
        heading: { en: 'The Byte — Eight Bits', he: 'הבייט — שמונה ביטים' },
        body: {
          en: 'One byte equals eight bits. If each bit has 2 possible values and there are 8 of them, the total combinations are 2^8 = 256. So a single byte can represent 256 different states. This is the arithmetic behind why a byte can hold one character, or a number from 0 to 255, or a color intensity.',
          he: 'בייט אחד שווה שמונה ביטים. אם לכל ביט יש 2 ערכים אפשריים ויש 8 מהם, סך הכל השילובים הוא 2^8 = 256. אז בייט בודד יכול לייצג 256 מצבים שונים. זו החשבון מאחורי הסיבה שבייט יכול להחזיק תו אחד, או מספר מ-0 עד 255, או עוצמת צבע.',
        },
      },
      {
        heading: { en: 'The Scale Ladder', he: 'סולם קני המידה' },
        body: {
          en: '1 kilobyte = 1024 bytes — a short text file. 1 megabyte = 1024 kilobytes — an image. 1 gigabyte = 1024 megabytes — an HD film. 1 terabyte = 1024 gigabytes — a small hard drive. Each step multiplies by 1024, not 1000, because everything descends from powers of 2. Knowing these orders of magnitude prevents confusion about file sizes and storage capacity.',
          he: '1 קילו-בייט = 1024 בייט — קובץ טקסט קצר. 1 מגה-בייט = 1024 קילו-בייט — תמונה. 1 גיגה-בייט = 1024 מגה-בייט — סרט HD. 1 טרה-בייט = 1024 גיגה-בייט — כונן קשיח קטן. כל צעד מכפיל ב-1024, לא 1000, כי הכול יורד מחזקות של 2. הכרת סדרי הגודל האלה מונעת בלבול לגבי גדלי קבצים וקיבולת אחסון.',
        },
      },
    ],
    principle: {
      en: 'Every quantity in computing is a power of two — the world of memory is built on 2^n',
      he: 'כל כמות במחשוב היא חזקה של שתיים — עולם הזיכרון בנוי על 2^n',
    },
  },
  {
    number: '04',
    title: { en: 'ASCII — Letters as Numbers', he: 'ASCII — אותיות כמספרים' },
    subtitle: {
      en: 'How a byte holds a character, and why the mapping was designed cleverly',
      he: 'איך בייט מחזיק תו, ולמה המיפוי תוכנן בחוכמה',
    },
    sections: [
      {
        heading: { en: 'The Encoding Problem', he: 'בעיית הקידוד' },
        body: {
          en: 'A byte can represent 256 values. A computer must store letters, digits, and symbols using those values. Someone had to decide: which byte value represents "A"? Which represents "a"? Which represents "1"? The standard answer is called ASCII — American Standard Code for Information Interchange.',
          he: 'בייט יכול לייצג 256 ערכים. מחשב חייב לאחסן אותיות, ספרות וסימנים בעזרת הערכים האלה. מישהו היה צריך להחליט: איזה ערך בייט מייצג "A"? איזה מייצג "a"? איזה מייצג "1"? התשובה הסטנדרטית נקראת ASCII — American Standard Code for Information Interchange.',
        },
      },
      {
        heading: { en: 'The Design Choice', he: 'בחירת התכנון' },
        body: {
          en: 'ASCII assigns capital A to the number 65, capital B to 66, and so on. Lowercase a is 97, lowercase b is 98. Look at the binary: uppercase A is 0100 0001 and lowercase a is 0110 0001. The two differ by exactly one bit — the third bit from the left. This was not accidental. Case-conversion becomes a single-bit flip, which the CPU can perform instantly.',
          he: 'ASCII מקצה ל-A גדולה את המספר 65, ל-B גדולה 66, וכן הלאה. a קטנה היא 97, b קטנה היא 98. הסתכלי על הבינארי: A גדולה היא 0100 0001 ו-a קטנה היא 0110 0001. השתיים נבדלות בביט אחד בדיוק — הביט השלישי משמאל. זה לא היה מקרי. המרת רישיות הופכת להיפוך ביט בודד, שה-CPU יכול לבצע באופן מיידי.',
        },
      },
      {
        heading: { en: 'Why This Matters', he: 'למה זה חשוב' },
        body: {
          en: 'ASCII shows that clever design choices at the foundation ripple upward into everything built on top. When you sort a list of names in Python and lowercase names come after uppercase ones, that ordering was decided decades ago in the ASCII table. Understanding the substrate makes surprising behavior at higher levels less surprising.',
          he: 'ASCII מראה שבחירות תכנון חכמות בבסיס מתפשטות כלפי מעלה לכל מה שבנוי מעליו. כשאת ממיינת רשימת שמות ב-Python ושמות באותיות קטנות באים אחרי גדולות, הסדר הזה הוחלט לפני עשרות שנים בטבלת ASCII. הבנת המצע הופכת התנהגות מפתיעה ברמות גבוהות יותר לפחות מפתיעה.',
        },
      },
    ],
    principle: {
      en: 'Foundational decisions echo through every layer above them',
      he: 'החלטות יסוד מהדהדות בכל שכבה מעליהן',
    },
  },
  {
    number: '05',
    title: { en: 'The Memory Hierarchy', he: 'היררכיית הזיכרון' },
    subtitle: {
      en: 'Why computers have multiple kinds of memory rather than one big one',
      he: 'למה למחשבים יש כמה סוגי זיכרון ולא אחד גדול',
    },
    sections: [
      {
        heading: { en: 'The Speed-Cost Tradeoff', he: 'החליפין מהירות-עלות' },
        body: {
          en: 'Fast memory is expensive. Cheap memory is slow. Computers solve this by using multiple layers: tiny amounts of very fast memory close to the CPU, larger amounts of medium-speed RAM, and huge amounts of slow storage on disk. Each layer trades speed for capacity.',
          he: 'זיכרון מהיר יקר. זיכרון זול איטי. מחשבים פותרים זאת על ידי שימוש בכמה שכבות: כמויות קטנטנות של זיכרון מהיר מאוד קרוב ל-CPU, כמויות גדולות יותר של RAM במהירות בינונית, וכמויות עצומות של אחסון איטי בדיסק. כל שכבה מחליפה מהירות בקיבולת.',
        },
      },
      {
        heading: { en: 'Why Programs Feel Slow', he: 'למה תוכניות מרגישות איטיות' },
        body: {
          en: 'When a program is small enough to fit in RAM, it runs fast. When it grows beyond RAM, the operating system starts "swapping" — moving pieces to disk and back. Disk is orders of magnitude slower than RAM. This is why 16 GB machines feel sluggish with modern software and 32 GB machines feel snappy: the second one avoids swapping.',
          he: 'כשתוכנית קטנה מספיק כדי להיכנס ל-RAM, היא רצה מהר. כשהיא גדלה מעבר ל-RAM, מערכת ההפעלה מתחילה "להחליף" — מזיזה חלקים לדיסק וחזרה. הדיסק איטי מ-RAM בסדרי גודל. זו הסיבה שמכונות של 16 GB מרגישות איטיות עם תוכנה מודרנית ומכונות של 32 GB מרגישות מהירות: השנייה נמנעת מהחלפה.',
        },
      },
      {
        heading: { en: 'Why Restarting Fixes Things', he: 'למה אתחול מתקן דברים' },
        body: {
          en: 'Programs accumulate state in RAM over time. Some of it is leaked — not properly released when no longer needed. Restart clears everything and forces every program to start clean. This is not a mystical fix; it is the memory hierarchy resetting to its known-good state.',
          he: 'תוכניות צוברות מצב ב-RAM לאורך זמן. חלקו דולף — לא משוחרר כראוי כשלא נחוץ יותר. אתחול מנקה הכול ומאלץ כל תוכנית להתחיל נקי. זה לא תיקון מיסטי; זו היררכיית הזיכרון מתאפסת למצב הידוע הטוב.',
        },
      },
    ],
    principle: {
      en: 'Speed and capacity are always in tension — every design is a chosen compromise',
      he: 'מהירות וקיבולת תמיד במתח — כל תכנון הוא פשרה נבחרת',
    },
  },
  {
    number: '06',
    title: { en: 'From Bits to Everything', he: 'מביטים להכול' },
    subtitle: {
      en: 'How images, sound, and video are all just numbers',
      he: 'איך תמונות, קול, ווידאו הם רק מספרים',
    },
    sections: [
      {
        heading: { en: 'Images as Numbers', he: 'תמונות כמספרים' },
        body: {
          en: 'A digital image is a grid of pixels. Each pixel is three numbers — red, green, blue — each between 0 and 255. A 1000-by-1000 image is one million pixels, three million numbers, three million bytes. That is the file size before compression. Compression is how it shrinks; the numbers are what it stores.',
          he: 'תמונה דיגיטלית היא רשת של פיקסלים. כל פיקסל הוא שלושה מספרים — אדום, ירוק, כחול — כל אחד בין 0 ל-255. תמונה של 1000 על 1000 היא מיליון פיקסלים, שלושה מיליון מספרים, שלושה מיליון בייטים. זה גודל הקובץ לפני דחיסה. דחיסה היא איך הוא מתכווץ; המספרים הם מה שהוא מאחסן.',
        },
      },
      {
        heading: { en: 'Sound as Numbers', he: 'קול כמספרים' },
        body: {
          en: 'A sound file is a sequence of amplitude measurements taken thousands of times per second. Each measurement is a number. A one-minute audio clip at CD quality is roughly ten million numbers. The music you hear is the reconstruction of a wave from those numbers.',
          he: 'קובץ קול הוא רצף של מדידות משרעת שנלקחות אלפי פעמים בשנייה. כל מדידה היא מספר. קטע אודיו של דקה באיכות CD הוא בערך עשרה מיליון מספרים. המוזיקה שאת שומעת היא השחזור של גל מהמספרים האלה.',
        },
      },
      {
        heading: { en: 'The Unifying Insight', he: 'התובנה המאחדת' },
        body: {
          en: 'Everything a computer processes is ultimately numbers, and every number is ultimately bits. Text, images, sound, video, code — the substrate is identical. This is why the same CPU can play music, render video, and execute Python. It only ever sees bits.',
          he: 'כל מה שמחשב מעבד הוא בסופו של דבר מספרים, וכל מספר הוא בסופו של דבר ביטים. טקסט, תמונות, קול, וידאו, קוד — המצע זהה. זו הסיבה שאותו CPU יכול לנגן מוזיקה, לרנדר וידאו, ולהריץ Python. הוא רואה רק ביטים.',
        },
      },
    ],
    principle: {
      en: 'Beneath every medium, the same substrate — that is what makes general computing possible',
      he: 'מתחת לכל מדיום, אותו מצע — זה מה שמאפשר מחשוב כללי',
    },
  },
  {
    number: '07',
    title: { en: 'Installing Python', he: 'התקנת פייתון' },
    subtitle: {
      en: 'What you install, and where the pieces live',
      he: 'מה מתקינים, ואיפה החלקים חיים',
    },
    sections: [
      {
        heading: { en: 'What Python Actually Is', he: 'מה Python באמת' },
        body: {
          en: 'Python is not a single thing. It is an interpreter — a program that reads Python code and executes it — plus a standard library of built-in tools. When you "install Python," you install the interpreter and the library. When you run a Python file, the interpreter reads it line by line and tells the CPU what to do.',
          he: 'Python אינו דבר יחיד. הוא מפרש — תוכנית שקוראת קוד Python ומריצה אותו — פלוס ספרייה תקנית של כלים מובנים. כשאת "מתקינה Python", את מתקינה את המפרש ואת הספרייה. כשאת מריצה קובץ Python, המפרש קורא אותו שורה אחר שורה ואומר ל-CPU מה לעשות.',
        },
      },
      {
        heading: { en: 'Where to Get It', he: 'מאיפה להשיג אותו' },
        body: {
          en: 'Download from python.org — the official source. Choose the latest stable version, typically 3.12 or newer. During installation on Windows, check "Add Python to PATH" — otherwise the terminal will not know where to find it. On Mac, the installer handles this automatically. Verify with python --version in the terminal.',
          he: 'הורידי מ-python.org — המקור הרשמי. בחרי בגרסה היציבה האחרונה, לרוב 3.12 או חדשה יותר. במהלך ההתקנה ב-Windows, סמני "Add Python to PATH" — אחרת הטרמינל לא יידע איפה למצוא אותו. ב-Mac, המתקין מטפל בזה אוטומטית. אמתי עם python --version בטרמינל.',
        },
      },
      {
        heading: { en: 'The Interpreter Versus the Environment', he: 'המפרש מול הסביבה' },
        body: {
          en: 'Installing Python gives you the language. You still need somewhere to write it. Options include a plain text editor plus terminal, VS Code (recommended for the course), PyCharm (heavier, feature-rich), or Jupyter notebooks (interactive, cell-based). Each is a different way to interact with the same underlying interpreter.',
          he: 'התקנת Python נותנת לך את השפה. עדיין נדרש היכן לכתוב אותה. אפשרויות כוללות עורך טקסט פשוט עם טרמינל, VS Code (מומלץ לקורס), PyCharm (כבד יותר, עשיר בפיצ׳רים), או מחברות Jupyter (אינטראקטיבי, מבוסס תא). כל אחת היא דרך שונה לתקשר עם אותו מפרש בסיסי.',
        },
      },
      {
        heading: { en: 'When Installation Refuses to Cooperate', he: 'כשההתקנה מסרבת לשתף פעולה' },
        body: {
          en: 'Return to the pacing pact from Card 01. If installation fails during the session, note the exact error message, keep watching the lesson, and troubleshoot afterward. The most common failures on Windows are PATH not set; on Mac are permission issues resolvable with sudo or with the Homebrew package manager. Neither is worth losing a lesson over.',
          he: 'חזרי להסכם הקצב מכרטיס 01. אם ההתקנה נכשלת במהלך המפגש, רשמי את הודעת השגיאה המדויקת, המשיכי לצפות בשיעור, ופתרי בעיות אחר כך. הכשלים הנפוצים ביותר ב-Windows הם PATH לא מוגדר; ב-Mac הם בעיות הרשאה שניתנות לפתרון עם sudo או עם מנהל החבילות Homebrew. אף אחד לא שווה לאבד עליו שיעור.',
        },
      },
    ],
    principle: {
      en: 'Install once, verify carefully, never again',
      he: 'התקיני פעם אחת, אמתי בזהירות, לעולם לא שוב',
    },
  },
  {
    number: '08',
    title: { en: 'When to Ask the AI', he: 'מתי לשאול את ה-AI' },
    subtitle: {
      en: 'Using LLMs while the vocabulary is still forming',
      he: 'שימוש ב-LLM בזמן שאוצר המילים עדיין מתגבש',
    },
    sections: [
      {
        heading: { en: 'The Vocabulary Gap', he: 'פער אוצר המילים' },
        body: {
          en: 'This session introduces dozens of unfamiliar terms: CPU, RAM, SSD, byte, bit, ASCII, interpreter, PATH, virtual environment. Not all of them will settle in one hearing. When a term appears again in Session 4 and you cannot recall its meaning, an LLM is a fair place to ask — provided you ask specifically.',
          he: 'המפגש הזה מכניס עשרות מונחים לא מוכרים: CPU, RAM, SSD, בייט, ביט, ASCII, מפרש, PATH, סביבה וירטואלית. לא כולם ישתקעו בשמיעה אחת. כשמונח מופיע שוב במפגש 4 ואת לא זוכרת את משמעותו, LLM הוא מקום הוגן לשאול — בתנאי שאת שואלת ספציפית.',
        },
      },
      {
        heading: { en: 'The Question That Works', he: 'השאלה שעובדת' },
        body: {
          en: 'Ask "what does RAM do in a computer, in one paragraph" — not "explain RAM." The specificity forces a concise answer you can actually absorb. Follow up with "give me a concrete example of when running out of RAM causes a visible problem." Concrete examples anchor abstract concepts.',
          he: 'שאלי "מה RAM עושה במחשב, בפסקה אחת" — לא "הסבר RAM". הספציפיות מכריחה תשובה תמציתית שאת יכולה באמת לספוג. המשיכי עם "תני לי דוגמה קונקרטית של מתי אזילת RAM גורמת לבעיה נראית". דוגמאות קונקרטיות מעגנות מושגים מופשטים.',
        },
      },
      {
        heading: { en: 'The Question That Fails', he: 'השאלה שנכשלת' },
        body: {
          en: 'Do not ask an LLM to "install Python for me" or "fix my PATH error." The LLM cannot see your machine. It will invent commands that may not match your operating system, your Python version, or your specific error. For installation issues, ask a human, ask Dr. Zuari, or paste the exact error text and ask what it means — not what to do about it.',
          he: 'אל תבקשי מ-LLM "התקן לי Python" או "תקן את שגיאת ה-PATH שלי". ה-LLM לא יכול לראות את המכונה שלך. הוא ימציא פקודות שאולי לא מתאימות למערכת ההפעלה שלך, לגרסת Python שלך, או לשגיאה הספציפית שלך. לבעיות התקנה, שאלי בן אדם, שאלי את ד״ר זוארי, או הדביקי את טקסט השגיאה המדויק ושאלי מה זה אומר — לא מה לעשות עם זה.',
        },
      },
    ],
    principle: {
      en: 'The LLM is a dictionary, not a mechanic — use it for meaning, not for action on your machine',
      he: 'ה-LLM הוא מילון, לא מכונאי — השתמשי בו למשמעות, לא לפעולה במכונה שלך',
    },
  },
  {
    number: '09',
    title: { en: 'What Comes Next', he: 'מה בא בהמשך' },
    subtitle: {
      en: 'The nine Python sessions ahead, and how this one anchors them',
      he: 'תשעת מפגשי הפייתון שלפנינו, ואיך המפגש הזה מעגן אותם',
    },
    sections: [
      {
        heading: { en: 'The Module Arc', he: 'קשת המודול' },
        body: {
          en: 'Module 3 spans Sessions 3 through 12 — ten Python sessions total. Each session introduces one or two concepts and builds a small piece of code around them. By Session 12, you will have written scripts that read files, transform data, call web APIs, and produce useful output.',
          he: 'מודול 3 משתרע ממפגשים 3 עד 12 — עשרה מפגשי Python בסך הכול. כל מפגש מכניס מושג או שניים ובונה חתיכת קוד קטנה סביבם. עד מפגש 12, את תכתבי סקריפטים שקוראים קבצים, ממירים נתונים, קוראים ל-API באינטרנט, ומייצרים פלט שימושי.',
        },
      },
      {
        heading: { en: 'Why Foundations First', he: 'למה יסודות קודם' },
        body: {
          en: 'The hardware and encoding concepts from this session return constantly. Why does "5" plus "5" equal "55" in Python and not 10? Because both are strings, encoded as ASCII, and the plus operator on strings concatenates. Why does reading a 10 GB file crash a 16 GB laptop? RAM limits. Why is Unicode different from ASCII? Because ASCII only fits in one byte, and human languages need more. Every future confusion has its answer in these fundamentals.',
          he: 'מושגי החומרה והקידוד מהמפגש הזה חוזרים כל הזמן. למה "5" ועוד "5" שווה "55" ב-Python ולא 10? כי שניהם מחרוזות, מקודדות כ-ASCII, ואופרטור הפלוס על מחרוזות משרשר. למה קריאת קובץ של 10 GB קורסת מחשב נייד של 16 GB? מגבלות RAM. למה Unicode שונה מ-ASCII? כי ASCII מתאים רק לבייט אחד, ושפות אנושיות צריכות יותר. לכל בלבול עתידי יש תשובה ביסודות האלה.',
        },
      },
      {
        heading: { en: 'The Session-to-Session Shape', he: 'הצורה ממפגש למפגש' },
        body: {
          en: 'Session 4 introduces variables and basic data types — building on ASCII (strings) and byte arithmetic (integers). Sessions 5 through 7 cover control flow and functions. Sessions 8 through 10 introduce data structures and file I/O. Sessions 11 and 12 cover libraries and how Python interacts with the outside world. The order is deliberate. Each session assumes the last one settled.',
          he: 'מפגש 4 מכניס משתנים וסוגי נתונים בסיסיים — בנייה על ASCII (מחרוזות) וחשבון בייט (מספרים שלמים). מפגשים 5 עד 7 מכסים בקרת זרימה ופונקציות. מפגשים 8 עד 10 מכניסים מבני נתונים וקלט-פלט של קבצים. מפגשים 11 ו-12 מכסים ספריות ואיך Python מקיים אינטראקציה עם העולם החיצון. הסדר מכוון. כל מפגש מניח שהאחרון התיישב.',
        },
      },
    ],
    principle: {
      en: 'This session builds no code — it builds the ground every future code will stand on',
      he: 'המפגש הזה לא בונה קוד — הוא בונה את הקרקע שכל קוד עתידי יעמוד עליה',
    },
  },
  {
    number: '10',
    title: { en: 'Diagnostic Questions', he: 'שאלות אבחון' },
    subtitle: {
      en: 'Questions that test whether the substrate was absorbed',
      he: 'שאלות שבוחנות אם המצע נספג',
    },
    sections: [
      {
        heading: { en: 'Q · How Many States in a Byte', he: 'ש · כמה מצבים בבייט' },
        body: {
          en: 'Q: A byte is eight bits. How many distinct values can one byte represent, and why? A: 256. Each bit has 2 possible values (0 or 1), and there are 8 independent bits, so the total is 2 to the power of 8, which equals 256. This is the reason a byte can hold one ASCII character, a color intensity, or a small integer.',
          he: 'ש: בייט הוא שמונה ביטים. כמה ערכים נבדלים בייט אחד יכול לייצג, ולמה? ת: 256. לכל ביט יש 2 ערכים אפשריים (0 או 1), ויש 8 ביטים בלתי תלויים, אז הסך הוא 2 בחזקת 8, שווה ל-256. זו הסיבה שבייט יכול להחזיק תו ASCII אחד, עוצמת צבע, או מספר שלם קטן.',
        },
      },
      {
        heading: { en: 'Q · Why 1024 Not 1000', he: 'ש · למה 1024 ולא 1000' },
        body: {
          en: 'Q: A kilobyte is 1024 bytes, not 1000. Why? A: Because everything in memory descends from powers of 2. The closest power of 2 to 1000 is 2 to the power of 10, which equals 1024. Using 1024 keeps the arithmetic clean at the hardware level. The naming is inherited from that clean arithmetic.',
          he: 'ש: קילו-בייט הוא 1024 בייט, לא 1000. למה? ת: כי הכל בזיכרון יורד מחזקות של 2. חזקת ה-2 הקרובה ביותר ל-1000 היא 2 בחזקת 10, שווה ל-1024. שימוש ב-1024 שומר על החשבון נקי ברמת החומרה. השם מורש מהחשבון הנקי הזה.',
        },
      },
      {
        heading: { en: 'Q · The Restart Cure', he: 'ש · תרופת האתחול' },
        body: {
          en: 'Q: Why does restarting the computer often fix a slow or frozen program? A: Because RAM accumulates state over time. Some memory is leaked — allocated by programs but never released. Over hours or days, this reduces the working memory available to new tasks. Restart empties RAM completely, forcing every program to start with a clean allocation. It is a memory hierarchy reset, not magic.',
          he: 'ש: למה אתחול המחשב לרוב מתקן תוכנית איטית או תקועה? ת: כי RAM צובר מצב לאורך זמן. חלק מהזיכרון דולף — מוקצה על ידי תוכניות אך לא משוחרר לעולם. לאורך שעות או ימים, זה מפחית את זיכרון העבודה הזמין למשימות חדשות. אתחול מרוקן את ה-RAM לחלוטין, מאלץ כל תוכנית להתחיל עם הקצאה נקייה. זה איפוס היררכיית זיכרון, לא קסם.',
        },
      },
      {
        heading: { en: 'Q · The A and the a', he: 'ש · ה-A וה-a' },
        body: {
          en: 'Q: In ASCII, capital A is 65 and lowercase a is 97. What is the binary difference between them, and why does it matter? A: They differ in exactly one bit — the third from the left. 0100 0001 versus 0110 0001. This was designed so that case-conversion is a single bit-flip, which the CPU executes in a single instruction. Foundational decisions like this echo through every text-processing operation.',
          he: 'ש: ב-ASCII, A גדולה היא 65 ו-a קטנה היא 97. מה ההבדל הבינארי ביניהן, ולמה זה חשוב? ת: הן נבדלות בביט אחד בדיוק — השלישי משמאל. 0100 0001 מול 0110 0001. זה תוכנן כך שהמרת רישיות היא היפוך ביט בודד, שה-CPU מבצע בהוראה יחידה. החלטות יסוד כאלה מהדהדות בכל פעולת עיבוד טקסט.',
        },
      },
    ],
    principle: {
      en: 'The best test of understanding is answering unprompted why',
      he: 'המבחן הטוב ביותר של הבנה הוא לענות על "למה" ללא שאלה',
    },
  },
];
