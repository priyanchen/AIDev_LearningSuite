import type { Bilingual } from '@/lib/registry';

export type ScriptTurn = {
  role: 'user' | 'assistant' | 'tool';
  he: string;
  en: string;
};

// The full, verbatim ChatGPT conversation behind Card 1's reconstruction — retrieved live from
// chatgpt.com/backend-api/share/6aaa65d1-3fe8-83eb-95f0-28dd4a97f8f7 this session (earlier attempts
// via curl and the public-conversation endpoint were Cloudflare-blocked; this one wasn't). Hebrew is
// the original, unaltered text; English is a translation, not a second original. One real third-party
// name (a research-team colleague, not Dr. Zuari or this site's author) has been replaced with a
// generic role reference for privacy, matching the convention already used elsewhere on this page.
export const chatGptScript: ScriptTurn[] = [
  {
    role: 'user',
    he: `אני רוצה לאפיין פרוייקט לבחינת צמחי מרפא בהתאם למחלה מסוימת. בוא נגדיר שיחד תוך כדי מענה לשאלות. grill me ברעיונות השונים ובתשובות שאני נותן`,
    en: `I want to characterize a project for examining medicinal herbs in relation to a specific disease. Let's define it together by answering questions. Grill me on the different ideas and the answers I give.`,
  },
  {
    role: 'assistant',
    he: `בוא נבנה את האפיון בהדרגה. בכל סבב אשאל שאלה מרכזית, אבחן את התשובה שלך בביקורתיות ואציף הנחות חלשות, סיכונים ומורכבות מיותרת.

כבר עכשיו יש עמימות שצריך לפתור: ״בחינת צמחי מרפא בהתאם למחלה״ מתארת תחום, אבל עדיין לא מגדירה מה המוצר עוזר למשתמש להחליט. חיפוש מחקרים, הערכת ראיות והמלצה טיפולית הם מוצרים שונים מאוד.

מי המשתמש העיקרי, ומה הוא אמור לקבל מהמערכת? בחר כיוון מוביל אחד:

1. חוקר או איש מקצוע — מזין מחלה ומקבל סקירת צמחים שנחקרו, איכות הראיות ומגבלות המחקרים.
2. מטפל — בוחן צמח בהקשר של מטופל מסוים, כולל תרופות, מחלות רקע וסיכונים.
3. אדם מהציבור — רוצה להבין אילו צמחים נחקרו בהקשר של המחלה שלו ומה ידוע עליהם.
4. חוקר שמחפש כיוונים חדשים — מקבל השערות על צמחים או חומרים פעילים שכדאי לחקור.

השאלה המאתגרת הראשונה: איזו החלטה המשתמש יוכל לקבל בעזרת המערכת, שקשה לו לקבל היום באמצעות חיפוש רגיל או שיחה עם ChatGPT?`,
    en: `Let's build the characterization gradually. Each round I'll ask one central question, critically examine your answer, and surface weak assumptions, risks, and unnecessary complexity.

There's already ambiguity to resolve: "examining medicinal herbs in relation to a disease" describes a domain, but doesn't yet define what decision the product helps the user make. Searching studies, evaluating evidence, and giving a treatment recommendation are very different products.

Who is the primary user, and what should they get from the system? Pick one leading direction:

1. A researcher or professional — enters a disease and gets a review of studied herbs, evidence quality, and study limitations.
2. A practitioner — examines a herb in the context of a specific patient, including medications, background conditions, and risks.
3. A member of the public — wants to understand which herbs have been studied in relation to their disease and what's known about them.
4. A researcher looking for new directions — gets hypotheses about herbs or active compounds worth investigating.

The first challenging question: what decision could the user make with this system's help that's hard for them to make today through a regular search or a conversation with ChatGPT?`,
  },
  { role: 'user', he: `3`, en: `3` },
  {
    role: 'assistant',
    he: `אז קהל היעד הוא אדם מהציבור שרוצה להבין אילו צמחי מרפא נחקרו בהקשר של המחלה שלו.

הביקורת הראשונה שלי: עצם זה שצמח נחקר לא אומר שהוא מועיל. אם נציג רשימת צמחים לצד מחלה, המשתמש עלול לפרש אותה כהמלצה — גם כשהראיות חלשות. ההבדל הזה צריך להשפיע על מבנה המוצר, ולא להסתכם בהערה בתחתית המסך.

עכשיו צריך לבחור את ההבטחה המרכזית למשתמש:

1. סקירת ראיות: ״מה נחקר ביחס למחלה שלי, ומה באמת אפשר להסיק?״
2. בדיקת צמח מסוים: ״שמעתי שצמח X עוזר למחלה שלי — האם הטענה מבוססת?״
3. התאמה אישית: ״בהתחשב במצב שלי ובתרופות שאני לוקח, מה מתאים לי?״

לדעתי, אפשרות 2 היא נקודת הפתיחה החזקה ביותר: צורך ממוקד, תוצאה ברורה ואפשרות לבחון אם המערכת עונה בצורה מבוססת. אפשרות 3 כבר מכניסה אותנו להחלטות טיפוליות אישיות ולמורכבות משמעותית יותר.

איזו אפשרות היא לב הפרויקט מבחינתך, ולמה?`,
    en: `So the target audience is a member of the public who wants to understand which medicinal herbs have been studied in relation to their disease.

My first critique: the mere fact that a herb has been studied doesn't mean it's beneficial. If we present a list of herbs next to a disease, the user may interpret it as a recommendation — even when the evidence is weak. That distinction should shape the product's structure, not just end up as a footnote at the bottom of the screen.

Now we need to pick the core promise to the user:

1. Evidence review: "What's been studied about my disease, and what can actually be concluded?"
2. Checking a specific herb: "I heard herb X helps my disease — is that claim evidence-based?"
3. Personalization: "Given my condition and the medications I take, what's right for me?"

In my view, option 2 is the strongest starting point: a focused need, a clear outcome, and a way to test whether the system answers on solid ground. Option 3 already pulls us into personal treatment decisions and significantly more complexity.

Which option is the heart of the project for you, and why?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `אז לב המוצר הוא: המשתמש מזין צמח ומחלה, והמערכת בוחנת עד כמה הטענה שהצמח עוזר מבוססת על מחקרים.

אני בעד הכיוון, אבל אאתגר אותך: אם התוצאה היא רק תשובת AI עם כמה קישורים, אין כאן בידול משמעותי מצ׳אט רגיל. הערך צריך להיות ביכולת לבדוק את המסקנה: אילו ראיות תומכות בה, אילו סותרות אותה, ומה עדיין לא ידוע.

למשל, המשתמש שואל: ״האם כורכום עוזר לדלקת מפרקים?״
מה הוא צריך לראות קודם?

1. תשובה קצרה ונגישה — מסקנה בשפה פשוטה, מידת הביטחון בה, מגבלות ומקורות.
2. כרטיס ראיות מובנה — סוגי המחקרים, האוכלוסייה שנבדקה, התוצאות ורמת הוודאות, עם סיכום קצר.
3. שיחה מבררת — המערכת קודם מחדדת את סוג המחלה ומה המשתמש מתכוון ב״עוזר״, ורק אז בודקת את הטענה.

ההעדפה שלי היא שילוב של 3 ו־1: בירור קצר כשיש עמימות, ואחריו תשובה נגישה עם אפשרות לפתוח את הראיות. דוח עמוס כמסך ראשון עלול להחמיץ את הקהל שבחרנו.

מה אתה רוצה שהמשתמש יראה קודם — ולמה לדעתך הוא יסמוך על התוצאה?`,
    en: `So the heart of the product is: the user enters a herb and a disease, and the system examines how well-supported the claim that the herb helps is by research.

I'm in favor of the direction, but I'll challenge you: if the result is just an AI answer with a few links, there's no meaningful differentiation from a regular chat. The value has to be in the ability to check the conclusion: what evidence supports it, what contradicts it, and what's still unknown.

For example, the user asks: "Does turmeric help with arthritis?"
What should they see first?

1. A short, accessible answer — a conclusion in plain language, confidence level, limitations, and sources.
2. A structured evidence card — study types, population studied, results, and certainty level, with a short summary.
3. A clarifying conversation — the system first sharpens what kind of disease and what the user means by "helps," and only then examines the claim.

My preference is a combination of 3 and 1: a short clarification when there's ambiguity, followed by an accessible answer with the option to dig into the evidence. A dense report as the first screen risks losing the audience we chose.

What do you want the user to see first — and why do you think they'll trust the result?`,
  },
  { role: 'user', he: `1 ו - 3`, en: `1 and 3` },
  {
    role: 'assistant',
    he: `נבחר שיחה מבררת קצרה, ואחריה תשובה פשוטה עם אפשרות להעמיק במקורות. הבירור יופיע רק כשצריך לחדד את המחלה או את התוצאה המבוקשת — למשל, הקלה בתסמין לעומת טיפול במחלה עצמה.

התשובה תכלול:
- מסקנה מרכזית: עד כמה הטענה נתמכת בראיות.
- מה ידוע ומה לא: הסבר קצר על הממצאים והמגבלות.
- מקורות לבדיקה: קישורים למחקרים שעליהם המסקנה נשענת.

אבל לא ענית עדיין על שאלת האמון. ניסוח משכנע אינו הוכחה לאמינות, ולכן ההחלטה הבאה היא מאיפה המערכת מקבלת את הידע שלה:

1. מאגר תוכן שנבדק מראש — מתחילים במספר מוגבל של צמחים וטענות. קל יותר לבקר את האיכות, אבל הכיסוי מוגבל ודורש תחזוקה.
2. חיפוש מחקרים בזמן אמת — כיסוי רחב ועדכני יותר, אבל קשה יותר להבטיח שהמערכת איתרה ופירשה את הראיות החשובות.
3. שילוב — תוכן שנבדק מראש כבסיס, וחיפוש להשלמות שמסומנות בבירור ככאלה שטרם עברו בדיקה אנושית.

לגרסה ראשונה אני מעדיף את 1. שילוב נשמע אטרקטיבי, אבל מוסיף שתי דרכי עבודה שצריך לתחזק ולבדוק.

האם אתה מוכן להתחיל בכיסוי מצומצם שנבדק היטב, או שהיכולת לשאול על כל צמח ומחלה היא דרישת ליבה מבחינתך?`,
    en: `Let's choose a short clarifying conversation, followed by a simple answer with the option to dig into the sources. The clarification will only appear when it's needed to sharpen the disease or the desired outcome — for example, symptom relief versus treating the disease itself.

The answer will include:
- Main conclusion: how well the claim is supported by evidence.
- What's known and what isn't: a short explanation of the findings and limitations.
- Sources to check: links to the studies the conclusion rests on.

But you haven't answered the trust question yet. Persuasive phrasing isn't proof of reliability, so the next decision is where the system gets its knowledge from:

1. A pre-vetted content bank — start with a limited number of herbs and claims. Easier to audit quality, but limited coverage that requires maintenance.
2. Real-time research search — broader, more current coverage, but harder to guarantee the system found and interpreted the important evidence.
3. A combination — pre-vetted content as the base, with search to fill gaps, clearly marked as not yet human-reviewed.

For version one I prefer option 1. A combination sounds attractive, but adds two workflows that need to be maintained and audited.

Are you willing to start with a small, well-vetted coverage, or is the ability to ask about any herb and disease a core requirement for you?`,
  },
  { role: 'user', he: `3`, en: `3` },
  {
    role: 'assistant',
    he: `נלך על מאגר שנבדק מראש, עם חיפוש מחקרים להשלמות.

אבל אני מאתגר את הבחירה: שילוב לא מבטיח איכות. צריך להחליט מה קורה כשהחיפוש מוצא מידע חדש שסותר את התוכן שנבדק. לכן אכניס לאפיון הבחנה גלויה בין תוכן שעבר בדיקה אנושית לבין סיכום אוטומטי של ממצאים חדשים, כולל תאריך הבדיקה.

השאלה הבאה: מי יבדוק את התוכן בפועל?

1. איש מקצוע עם יכולת להעריך מחקרים — נדרש להגדיר מי הוא ומה בדיוק הוא מאשר.
2. אתה, בעזרת AI — אפשרי לעריכה ולניהול, אבל צריך לברר מה ההכשרה הרלוונטית לפני שמציגים זאת כבקרה מקצועית.
3. ללא בודק אנושי — אז צריך לתקן את ההגדרה: זה מאגר מקורות שנבחרו מראש, ולא מאגר מסקנות שאומתו מקצועית.

זו החלטה יסודית: לא נוכל להבטיח ״תוכן שנבדק״ בלי להגדיר מי בודק ועל סמך מה. מה מציאותי מבחינתך?`,
    en: `Let's go with a pre-vetted bank, with research search to fill gaps.

But I'll challenge the choice: combining the two doesn't guarantee quality. We need to decide what happens when the search finds new information that contradicts the vetted content. So I'll add to the spec an explicit distinction between content that's undergone human review and an automatic summary of new findings, including the review date.

Next question: who actually reviews the content?

1. A professional able to evaluate research — we need to define exactly who that is and what they're certifying.
2. You, with AI assistance — workable for editing and management, but we need to clarify the relevant training before presenting this as professional oversight.
3. No human reviewer — then we need to fix the definition: this is a bank of pre-selected sources, not a bank of professionally verified conclusions.

This is a foundational decision: we can't promise "vetted content" without defining who vets it and on what basis. What's realistic for you?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `אז אתה תנהל ותבדוק את התוכן בעזרת AI.

הרקע שלך בסטטיסטיקה הוא יתרון להערכת שיטות מחקר ואי־ודאות. אבל ביקורת סטטיסטית אינה שקולה לבדיקה קלינית או פרמקולוגית — במיוחד כשצריך לפרש מינונים, תמציות שונות ואינטראקציות עם תרופות. גם בדיקה באמצעות מודל נוסף אינה אישור מקצועי עצמאי.

לכן, כרגע נגדיר את התוכן כ״נבדק בעריכה״, ולא כ״מאומת רפואית״.

האם יש לך הכשרה או שותף מקצועי בתחומי הרפואה, הרוקחות או חקר צמחי המרפא, מעבר לרקע שלך בסטטיסטיקה? זה יקבע אילו מסקנות המוצר יכול להציג ואילו מחייבות בדיקה נוספת.`,
    en: `So you'll manage and review the content with AI assistance.

Your background in statistics is an advantage for evaluating research methods and uncertainty. But statistical critique isn't equivalent to clinical or pharmacological review — especially when interpreting dosages, different extracts, and drug interactions. Review via an additional model isn't independent professional certification either.

So for now we'll define the content as "editorially reviewed," not "medically verified."

Do you have training or a professional partner in medicine, pharmacy, or herbal-medicine research, beyond your statistics background? That will determine which conclusions the product can present and which require further review.`,
  },
  {
    role: 'user',
    he: `בוודאי, יש חוקרת בצוות וגם צוות נוסף של חוקרים כמו פריה חן`,
    en: `Of course — there's a researcher on the team, plus another team of researchers, like PriYa Chen`,
  },
  {
    role: 'assistant',
    he: `זה משנה את התמונה: יש צוות אנושי שיכול להשתתף בבדיקת התוכן, ואתה לא הבודק היחיד.

עם זאת, אני מתקן הנחה מהתשובה הקודמת שלי: זהות הבודק לבדה אינה קובעת מה מותר להסיק — צריך להגדיר את תחום המומחיות שלו ואת תהליך הבדיקה. לא אניח מה ההכשרה של חברת הצוות, פריה חן או שאר הצוות בלי שתפרט.

איזה תפקיד הצוות באמת יוכל לקחת?

1. אישור כל תשובה לפני הצגתה — בקרה הדוקה, אבל המשתמש יצטרך להמתין ונוצר עומס.
2. אישור סקירות שנשמרות במאגר — תשובות המבוססות עליהן מוצגות מיד; שאלות חדשות מקבלות סיכום אוטומטי מסומן ונכנסות לתור בדיקה.
3. ביקורת מדגמית בלבד — מאפשרת כיסוי רחב, אבל רוב התשובות לא יעברו אישור אנושי.

אני ממליץ על 2, בתנאי שיש לצוות זמן מוגדר לבדיקות. אחרת ״צוות חוקרים״ עלול להפוך להבטחה שהמוצר לא מקיים.

מה תחומי המומחיות שלהם, ואיזו רמת מעורבות מציאותית מבחינתם?`,
    en: `This changes the picture: there's a human team that can participate in reviewing the content, and you're not the only reviewer.

That said, I'm correcting an assumption from my previous answer: the reviewer's identity alone doesn't determine what conclusions are allowed — we need to define their area of expertise and the review process. I won't assume the training of the team member, PriYa Chen, or the rest of the team without you specifying it.

What role can the team actually take on?

1. Approve every answer before it's shown — tight control, but the user will have to wait, and it creates a backlog.
2. Approve reviews that get saved to the bank — answers based on them are shown immediately; new questions get a flagged automatic summary and enter a review queue.
3. Spot-check review only — allows broad coverage, but most answers won't go through human approval.

I recommend option 2, provided the team has defined time for reviews. Otherwise a "research team" risks becoming a promise the product doesn't keep.

What are their areas of expertise, and what level of involvement is realistic for them?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: הצוות מאשר סקירות למאגר; שאלות חדשות מקבלות סיכום אוטומטי מסומן ונכנסות לתור בדיקה. תחומי המומחיות והזמינות של הצוות עדיין צריכים בירור.

עכשיו אני רוצה לאתגר את גבולות התשובה. בחרנו לבדוק טענה על צמח ומחלה, אבל משתמשים עשויים מיד לשאול: ״אז כמה לקחת?״

איפה נעצור בגרסה הראשונה?

1. בדיקת הטענה בלבד — האם נמצאה תועלת, לאיזו תוצאה, ועד כמה הראיות משכנעות.
2. גם פרטי המחקרים — איזו תמצית, מינון ומשך שימוש נבדקו, תוך הבחנה ברורה בין תיאור המחקר להמלצה למשתמש.
3. גם המלצה אישית — מה לקחת וכמה, בהתחשב בנתוני המשתמש ובתרופות שלו.

אני ממליץ על 2. פרטי המחקר נחוצים כדי שלא נייחס לכל מוצר שמכיל צמח תוצאות שנמצאו בתכשיר מסוים. אפשרות 3 משנה משמעותית את המוצר מבדיקת ראיות לייעוץ טיפולי.

איזו אפשרות אתה בוחר?`,
    en: `Decided: the team approves reviews for the bank; new questions get a flagged automatic summary and enter a review queue. The team's areas of expertise and availability still need clarifying.

Now I want to challenge the boundaries of the answer. We chose to check a claim about a herb and a disease, but users are likely to immediately ask: "So how much should I take?"

Where do we stop in version one?

1. Checking the claim only — was a benefit found, for what outcome, and how convincing is the evidence.
2. Also the study details — what extract, dosage, and duration were studied, with a clear distinction between describing the study and recommending to the user.
3. Also a personal recommendation — what to take and how much, given the user's data and medications.

I recommend option 2. Study details are necessary so we don't attribute results found for one specific preparation to every product containing the herb. Option 3 significantly shifts the product from evidence-checking to treatment advice.

Which option do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: המערכת בודקת את הטענה ומציגה גם את פרטי המחקרים — התמצית, המינון, משך השימוש והאוכלוסייה שנבדקה. אלה יוצגו כתיאור המחקר, בלי להפוך אותם להנחיות נטילה אישיות.

עד כה הגדרנו: מוצר לציבור הרחב, בירור קצר לפני התשובה כשצריך, סיכום נגיש עם מקורות, ומאגר סקירות באישור צוות לצד השלמות אוטומטיות מסומנות.

עכשיו האתגר: מה המערכת עושה כשאין מספיק ראיות? דווקא כאן נבחנת האמינות שלה. ״לא נמצאה הוכחה לתועלת״ ו״נמצאה הוכחה שאין תועלת״ הן מסקנות שונות.

מה נכלול בבדיקה?

1. מחקרים בבני אדם בלבד — התשובה מתמקדת בראיות שרלוונטיות ישירות יותר לשאלה של המשתמש.
2. גם מחקרי מעבדה ובעלי חיים — מוצגים בנפרד, בלי להסיק מהם יעילות בבני אדם.
3. גם שימוש מסורתי — נוסף כרקע היסטורי, בנפרד מהראיות המחקריות.

אני נוטה ל־2, כשהמסקנה הראשית על תועלת לאדם נשענת על מחקרים בבני אדם. כמות גדולה של ממצאי מעבדה לא צריכה ליצור רושם של ודאות טיפולית.

איזו אפשרות אתה בוחר?`,
    en: `Decided: the system checks the claim and also shows the study details — the extract, dosage, duration of use, and population studied. These will be presented as describing the study, without turning them into personal dosing instructions.

So far we've defined: a product for the general public, a short clarification before the answer when needed, an accessible summary with sources, and a team-approved review bank alongside flagged automatic supplements.

Now the challenge: what does the system do when there isn't enough evidence? This is exactly where its credibility is tested. "No evidence of benefit was found" and "evidence was found that there is no benefit" are different conclusions.

What do we include in the review?

1. Human studies only — the answer focuses on evidence more directly relevant to the user's question.
2. Also lab and animal studies — shown separately, without inferring human efficacy from them.
3. Also traditional use — added as historical background, separate from the research evidence.

I lean toward 2, with the main conclusion about benefit to humans resting on human studies. A large volume of lab findings shouldn't create an impression of therapeutic certainty.

Which option do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: נכלול מחקרים בבני אדם וגם מחקרי מעבדה ובעלי חיים, בהפרדה ברורה. כשנמצאו רק ראיות קדם־קליניות, התשובה לא תציג אותן כהוכחה לתועלת בבני אדם.

עכשיו אני מאתגר את היקף הפרויקט: ״כל צמח וכל מחלה״ הוא חזון, אבל נקודת פתיחה שקשה לבדוק ולתחזק. גם עם צוות חוקרים, צריך תחום שבו נוכל לבחון את איכות התשובות לעומק.

איך נתחיל?

1. תחום רפואי אחד — נבחר לפי מומחיות הצוות ונבחן בו מגוון צמחים.
2. רשימה מצומצמת של צמחים — נבחן את הטענות הקשורות אליהם במחלות שונות.
3. כיסוי פתוח מההתחלה — מאגר מאושר מצומצם, ורוב השאלות ייענו באמצעות חיפוש וסיכום אוטומטיים.

ההעדפה שלי היא 1, בהתאם למומחיות הצוות. ב־3, מנגנון הבקרה שבנינו עלול לכסות רק חלק קטן מהשימוש בפועל.

מה אתה בוחר? אם 1 או 2 — באיזה תחום או באילו צמחים יש לצוות הכי הרבה ידע?`,
    en: `Decided: we'll include human studies as well as lab and animal studies, clearly separated. When only pre-clinical evidence is found, the answer won't present it as proof of benefit in humans.

Now I'll challenge the project's scope: "every herb and every disease" is a vision, but a starting point that's hard to review and maintain. Even with a research team, we need a domain where we can examine answer quality in depth.

How do we start?

1. One medical domain — chosen based on the team's expertise, examining a range of herbs within it.
2. A narrow list of herbs — examining claims about them across different diseases.
3. Open coverage from the start — a small approved bank, with most questions answered via automatic search and summarization.

My preference is option 1, matching the team's expertise. With option 3, the oversight mechanism we built would only cover a small fraction of actual use.

What do you choose? If 1 or 2 — which domain or which herbs does the team know the most about?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נתחיל בתחום רפואי אחד, ונרחיב אחרי שנבדוק את איכות התשובות ואת תהליך האישור.

אבל עדיין חסר הנתון שמאפשר לבחור אותו: באיזה תחום יש לצוות החוקרים מומחיות וניסיון מחקרי בפועל?

תן לי תחום אחד או שניים שמתאימים להם. אל תבחר רק לפי מה שימשוך משתמשים — התחום הראשון צריך להיות כזה שהצוות מסוגל לזהות בו גם תשובה שנשמעת משכנעת אבל מפרשת את המחקר לא נכון.`,
    en: `We'll start with one medical domain, and expand after checking answer quality and the approval process.

But we're still missing the piece of information needed to choose it: in what domain does the research team have real expertise and research experience?

Give me one or two domains that fit them. Don't choose purely based on what will attract users — the first domain needs to be one where the team can recognize an answer that sounds convincing but misinterprets the research.`,
  },
  { role: 'user', he: `תחום הסרטן`, en: `The field of cancer` },
  {
    role: 'assistant',
    he: `נתמקד באונקולוגיה — אבל ״סרטן״ עדיין רחב מדי לגרסה הראשונה. צריך להגדיר אילו טענות נבדוק, כי תחת ״הצמח עוזר״ מסתתרות שאלות שונות מאוד.

מה יהיה המוקד?

1. השפעה על המחלה עצמה — בדיקת טענות על פעילות נגד גידולים ותוצאות טיפול.
2. הקלה בתסמינים ובתופעות לוואי — בדיקת טענות על שיפור ההרגשה ואיכות החיים.
3. שילוב עם טיפול אונקולוגי — בדיקת מידע על אינטראקציות וסיכונים בשימוש במקביל לטיפול.

הביקורת שלי: אם ננסה לכסות את שלושתם בהתחלה, אנחנו שוב בונים מוצר רחב מדי. נבחר מוקד אחד; מידע בטיחותי רלוונטי עדיין יופיע בכל מוקד.

איזו מהשאלות האלה היא הסיבה המרכזית שבגללה אתה רוצה לבנות את המערכת?`,
    en: `We'll focus on oncology — but "cancer" is still too broad for version one. We need to define which claims we're checking, because very different questions hide under "the herb helps."

What will the focus be?

1. Effect on the disease itself — checking claims about anti-tumor activity and treatment outcomes.
2. Relief of symptoms and side effects — checking claims about improved feeling and quality of life.
3. Interaction with oncology treatment — checking information about interactions and risks when used alongside treatment.

My critique: if we try to cover all three at the start, we're again building too broad a product. We'll pick one focus; relevant safety information will still appear regardless of the focus.

Which of these questions is the main reason you want to build this system?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `אז המוקד הוא בדיקת ראיות על צמחי מרפא להקלה בתסמינים ובתופעות לוואי אצל אנשים עם סרטן.

אני רוצה לאתגר הנחה חשובה במוצר: ״טבעי״ ו״להקלה בלבד״ לא יכולים לשמש קיצור דרך למסקנה שהשימוש מתאים. נצטרך להפריד בתשובה בין הראיות לתועלת לבין המידע על בטיחות ושילוב עם הטיפול.

כדי להפוך את הגרסה הראשונה לממוקדת, באיזה תסמין נתחיל?

- בחילות והקאות.
- כאב.
- הפרעות שינה.
- עייפות.
- ירידה בתיאבון.

ההעדפה שלי היא לבחור תסמין אחד שלצוות יש בו מומחיות וחומר מחקרי שכבר נאסף, ולא את התסמין שנשמע הכי מסחרי. איזה מהם מתאים — או שיש תסמין אחר שאתם רוצים להתמקד בו?`,
    en: `So the focus is: checking evidence for medicinal herbs that relieve symptoms and side effects in people with cancer.

I want to challenge an important assumption in the product: "natural" and "for relief only" can't be used as a shortcut to the conclusion that use is appropriate. We'll need to separate, in the answer, the evidence for benefit from the safety information and interaction with treatment.

To make version one focused, which symptom do we start with?

- Nausea and vomiting.
- Pain.
- Sleep disturbances.
- Fatigue.
- Decreased appetite.

My preference is to pick one symptom where the team has expertise and already-gathered research material, not the symptom that sounds most commercial. Which one fits — or is there another symptom you want to focus on?`,
  },
  { role: 'user', he: `יריד בתאבון`, en: `Decreased appetite` },
  {
    role: 'assistant',
    he: `נתמקד בבדיקת טענות על צמחי מרפא לשיפור התיאבון אצל אנשים עם סרטן.

האתגר הבא: איך נגדיר ״עוזר״? שיפור בתחושת התיאבון, אכילה בכמות גדולה יותר ועלייה במשקל הם מדדים שונים. המערכת צריכה לדווח מה נמדד במחקר, בלי להחליף ביניהם.

לגרסה הראשונה אני מציע:
- תיאבון כתוצאה המרכזית.
- צריכת מזון, משקל ואיכות חיים כתוצאות נוספות, אם נבדקו.
- בירור קצר: האם המשתמש מתעניין בחוסר תיאבון עצמו, או בקושי לאכול בגלל תסמין אחר.

עכשיו שאלה על הצורך האמיתי: האם כבר יש צמח מסוים או טענה שהצוות רוצה לבדוק? תן דוגמה אחת. אם אין, נצטרך לבחון אם הכניסה שבחרנו — ״הזן צמח לבדיקה״ — באמת מתאימה למשתמש, או שהוא מגיע דווקא עם השאלה ״מה יכול לעזור לתיאבון שלי?״`,
    en: `We'll focus on checking claims about medicinal herbs for improving appetite in people with cancer.

Next challenge: how do we define "helps"? Improved sense of appetite, eating a greater quantity, and weight gain are different measures. The system needs to report what was actually measured in the study, without swapping between them.

For version one I propose:
- Appetite as the primary outcome.
- Food intake, weight, and quality of life as secondary outcomes, if studied.
- A short clarification: is the user interested in low appetite itself, or difficulty eating due to another symptom.

Now a question about the real need: is there already a specific herb or claim the team wants to check? Give me one example. If not, we'll need to examine whether the entry point we chose — "enter a herb to check" — actually fits the user, or whether they instead arrive with the question "what could help my appetite?"`,
  },
  {
    role: 'user',
    he: `תיאבון כתוצאה המרכזית.  . אין צמח הוא צריך להזין כזה`,
    en: `Appetite as the primary outcome. There's no [specific] herb — the user needs to enter one themselves.`,
  },
  {
    role: 'assistant',
    he: `ברור: המשתמש יזין צמח שברצונו לבדוק, והמערכת תבחן את הראיות לשיפור התיאבון אצל אנשים עם סרטן. היא לא תבחר עבורו צמח. תיאבון יהיה התוצאה המרכזית.

האתגר הבא הוא מה בדיוק המשתמש מזין. שם צמח בלבד עלול להיות עמום, ומוצר מסחרי עשוי להכיל כמה רכיבים. אנחנו צריכים לדעת מה נבדק לפני שמציגים מסקנה.

מה נקבל בגרסה הראשונה?

1. שם צמח בלבד — הזנה חופשית ובחירה מתוך רשימת זיהוי; אם אין זיהוי חד־משמעי, המערכת מבקשת הבהרה.
2. שם צמח וגם סוג התכשיר, אם ידוע — למשל תה, אבקה או תמצית; אפשר להמשיך גם כשהמשתמש לא יודע.
3. גם מוצר מסחרי או צילום תווית — דורש פענוח רכיבים וטיפול בתערובות, ומרחיב משמעותית את הפרויקט.

אני ממליץ על 2: מעט פרטים למשתמש, עם בסיס טוב יותר להשוואה למה שנבדק במחקרים. במה תבחר?`,
    en: `Understood: the user will enter a herb they want checked, and the system will examine the evidence for improving appetite in people with cancer. It won't choose a herb for them. Appetite will be the primary outcome.

Next challenge is exactly what the user enters. A herb name alone can be ambiguous, and a commercial product might contain several ingredients. We need to know what was actually studied before presenting a conclusion.

What do we collect in version one?

1. Herb name only — free text entry plus a pick from an identification list; if there's no unambiguous match, the system asks for clarification.
2. Herb name plus preparation type, if known — e.g. tea, powder, or extract; can proceed even if the user doesn't know.
3. Also a commercial product or a label photo — requires parsing ingredients and handling blends, and significantly expands the project.

I recommend option 2: a little more detail from the user, with a better basis for comparing against what was studied in the research. Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: המשתמש מזין שם צמח וסוג תכשיר, אם ידוע, עם אפשרות לבחור ״לא יודע״. המערכת תוודא את זיהוי הצמח ותציין אם התכשיר במחקר שונה מזה שהוזן.

עכשיו צריך להגדיר מה ייחשב תשובה מספקת. אני מתנגד לציון כמו ״יעילות: 8/10״ — הוא יוצר דיוק מדומה ומערבב בין גודל התועלת לבין מידת הביטחון בראיות.

אני מציע שהתוצאה תפריד בין:
- הממצא: האם נצפה שיפור בתיאבון, ובאיזו אוכלוסייה.
- ודאות הראיות: עד כמה אפשר לסמוך על המסקנה, עם הסבר קצר.
- פערים: מה לא נבדק או לא תואם לשאלה.

מה נעשה כשאין מחקרים מתאימים בבני אדם, אבל יש מחקרי מעבדה או בעלי חיים?

1. נציג תחילה ״אין מספיק ראיות בבני אדם להערכת התועלת״, ואת המחקרים האחרים נציג בהרחבה נפרדת.
2. נציג גם את הממצאים הקדם־קליניים בסיכום הראשי, עם תווית ברורה.

אני ממליץ על 1. לציבור הרחב, עצם ההבלטה של ממצא מעבדתי חיובי עלולה להיתפס כתמיכה בשימוש. מה תבחר?`,
    en: `Decided: the user enters a herb name and preparation type, if known, with an option to pick "don't know." The system will verify the herb's identification and note if the preparation studied differs from what was entered.

Now we need to define what counts as a satisfactory answer. I'm against a score like "effectiveness: 8/10" — it creates false precision and conflates the size of the benefit with how confident we are in the evidence.

I suggest the result separate:
- The finding: was an improvement in appetite observed, and in which population.
- Certainty of the evidence: how much the conclusion can be trusted, with a short explanation.
- Gaps: what wasn't studied or doesn't match the question.

What do we do when there are no suitable human studies, but there are lab or animal studies?

1. We first show "not enough evidence in humans to assess benefit," and present the other studies in a separate expansion.
2. We also show the pre-clinical findings in the main summary, clearly labeled.

I recommend option 1. For the general public, merely highlighting a positive lab finding risks being read as support for use. Which do you choose?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: כשאין מחקרים מתאימים בבני אדם, זו תהיה המסקנה הראשית. מחקרי מעבדה ובעלי חיים יופיעו בהרחבה נפרדת, בלי להתפרש כהוכחה לתועלת.

עכשיו אני רוצה לאתגר החלטה קודמת: אמרנו שכל שאלה חדשה תיכנס לתור בדיקת החוקרים. בלי סינון, התור עלול להתמלא בכפילויות ובבקשות שאין לצוות יכולת לבדוק.

איך יתנהל התור?

1. כל שאלה חדשה נכנסת אוטומטית, אחרי איחוד כפילויות.
2. המשתמש מבקש בדיקת חוקר, והצוות מתעדף בקשות; אין התחייבות למענה אישי.
3. הצוות בוחר אילו סקירות להכין, לפי שאלות נפוצות ופערים במאגר.

אני ממליץ על 3 לגרסה הראשונה. כך הבקרה האנושית משפרת מאגר שמשמש את כולם, בלי ליצור ציפייה לשירות אישי.

מה מתאים לאופן שבו הצוות יעבוד בפועל?`,
    en: `Decided: when there are no suitable human studies, that will be the main conclusion. Lab and animal studies will appear in a separate expansion, without being read as proof of benefit.

Now I want to challenge an earlier decision: we said every new question enters the researchers' review queue. Without filtering, the queue could fill up with duplicates and requests the team has no capacity to review.

How will the queue work?

1. Every new question enters automatically, after deduplication.
2. The user requests a researcher review, and the team prioritizes requests; no commitment to a personal answer.
3. The team chooses which reviews to prepare, based on common questions and gaps in the bank.

I recommend option 3 for version one. This way human oversight improves a bank that serves everyone, without creating an expectation of personal service.

What fits how the team will actually work?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: כל שאלה חדשה תיכנס אוטומטית לתור החוקרים, לאחר איחוד כפילויות. כניסה לתור לא תוצג כהבטחה למועד בדיקה.

צריך גם לדייק: אותו צמח בתכשיר אחר או באוכלוסיית מחקר אחרת לא בהכרח מייצג שאלה כפולה.

מה המשתמש יראה בזמן שהשאלה ממתינה לבדיקה?

1. סיכום אוטומטי מיידי עם מקורות, המסומן בבירור ככזה שטרם נבדק בידי הצוות.
2. רק מקורות ופרטי המחקרים, כשהמסקנה תוצג לאחר אישור חוקר.
3. הודעת המתנה בלבד, עד שהצוות מאשר תשובה.

קודם בחרנו עקרונית ב־1. האם אתה עומד בבחירה הזו גם עכשיו, כשהמיקוד הוא אנשים עם סרטן? זו החלטה מהותית: במקרה הזה, הבדיקה האנושית תגיע אחרי שהמשתמש כבר קרא את המסקנה.`,
    en: `Decided: every new question will automatically enter the researchers' queue, after deduplication. Being in the queue won't be presented as a promise of a review date.

We also need to be precise: the same herb in a different preparation or studied in a different population doesn't necessarily count as a duplicate question.

What will the user see while the question is waiting for review?

1. An immediate automatic summary with sources, clearly flagged as not yet reviewed by the team.
2. Only sources and study details, with the conclusion shown after a researcher's approval.
3. A waiting message only, until the team approves an answer.

Earlier we chose option 1 in principle. Do you still stand by that choice now that the focus is people with cancer? This is a substantial decision: in that case, human review would happen after the user has already read the conclusion.`,
  },
  { role: 'user', he: `3`, en: `3` },
  {
    role: 'assistant',
    he: `נקבע: שאלה שאין לה סקירה מאושרת תציג הודעת המתנה בלבד. הצוות יבדוק ויאשר את התשובה לפני פרסומה. זו החלפה של ההחלטה הקודמת להציג סיכום אוטומטי מיד.

המשמעות למוצר משמעותית: בתחילת הדרך, כשיש מעט סקירות מאושרות, משתמשים רבים יקבלו המתנה במקום תשובה. לכן זמינות החוקרים היא חלק מהשירות עצמו.

איזה זמן טיפול הצוות מסוגל לקיים בפועל?

1. עד שני ימי עבודה.
2. עד שבוע.
3. ללא זמן מובטח — הבקשות מטופלות לפי זמינות ותעדוף.

אל תבחר את האפשרות שנשמעת טוב יותר למשתמש; בחר את זו שיש לצוות יכולת לעמוד בה.`,
    en: `Decided: a question without an approved review will show only a waiting message. The team will review and approve the answer before publishing it. This replaces the earlier decision to show an automatic summary immediately.

This has a significant impact on the product: early on, when there are few approved reviews, many users will get a wait instead of an answer. So researcher availability is itself part of the service.

What turnaround time can the team actually sustain?

1. Up to two business days.
2. Up to a week.
3. No guaranteed time — requests handled by availability and priority.

Don't pick the option that sounds best to the user; pick the one the team can actually deliver on.`,
  },
  { role: 'user', he: `3`, en: `3` },
  {
    role: 'assistant',
    he: `נקבע: אין זמן טיפול מובטח. בקשה חדשה תמתין לאישור הצוות, והמשתמש יראה בבירור שעדיין אין תשובה מאושרת.

הביקורת שלי: המתנה ללא מועד וללא עדכון נותנת למשתמש מעט סיבה לחזור. לכן צריך דרך לקבל את התוצאה כשהיא מוכנה.

איך נעשה זאת?

1. אימייל אופציונלי לאחר הגשת הבקשה — אפשר לחפש בלי להירשם, ולהשאיר כתובת לקבלת עדכון.
2. חשבון משתמש חובה — מאפשר היסטוריית בקשות ומעקב, אבל מוסיף חסם כניסה.
3. קישור אישי למעקב בלבד — בלי אימייל או הרשמה; המשתמש צריך לשמור את הקישור ולחזור בעצמו.

אני ממליץ על 1, עם הודעת עדכון כללית שאינה כוללת פרטים רפואיים בגוף האימייל. מה תבחר?`,
    en: `Decided: no guaranteed turnaround time. A new request will wait for team approval, and the user will clearly see there's no approved answer yet.

My critique: waiting with no timeframe and no update gives the user little reason to come back. So there needs to be a way to get the result when it's ready.

How do we do that?

1. Optional email after submitting the request — you can search without registering, and leave an address to get notified.
2. Mandatory user account — enables request history and tracking, but adds a signup barrier.
3. A personal tracking link only — no email or registration; the user has to save the link and check back themselves.

I recommend option 1, with a generic notification that doesn't include medical details in the email body. Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: חשבון משתמש חובה, עם היסטוריית בקשות ומעקב אחר הסטטוס שלהן.

הביקורת שלי: כרגע אנחנו דורשים הרשמה, אבל בשאלה חדשה מציעים המתנה ללא מועד מובטח. זה חסם משמעותי, ולכן כדאי שהמשתמש יוכל לראות דוגמה לסקירה מאושרת לפני ההרשמה ולהבין מה יקבל.

ההחלטה הבאה: איזה מידע נבקש בזמן הגשת שאלה?

1. מידע על הצמח בלבד — שם וסוג תכשיר; ההקשר הקבוע הוא שיפור תיאבון אצל אנשים עם סרטן.
2. גם סוג הסרטן והטיפול, כרשות — כדי למקד את בדיקת הספרות, בלי להציג התאמה טיפולית אישית.
3. פרופיל רפואי מפורט — תרופות, מחלות רקע ומידע נוסף.

אני ממליץ להתחיל ב־1. בסקירה נציין במפורש באילו אוכלוסיות וטיפולים נערכו המחקרים. לא נאסוף מידע רפואי אישי לפני שהגדרנו כיצד הוא משנה את התשובה בפועל.

מה תבחר?`,
    en: `Decided: a mandatory user account, with request history and status tracking.

My critique: right now we require sign-up, but a new question offers a wait with no guaranteed date. That's a significant barrier, so the user should be able to see an example of an approved review before registering, to understand what they'll get.

Next decision: what information do we ask for when submitting a question?

1. Herb information only — name and preparation type; the fixed context is appetite improvement in people with cancer.
2. Also cancer type and treatment, optional — to focus the literature search, without presenting a personal treatment match.
3. A detailed medical profile — medications, background conditions, and additional information.

I recommend starting with option 1. In the review we'll explicitly state which populations and treatments the studies covered. We won't collect personal medical information before defining how it actually changes the answer.

Which do you choose?`,
  },
  { role: 'user', he: `1 + 2`, en: `1 + 2` },
  {
    role: 'assistant',
    he: `נקבע: שם הצמח הוא חובה; סוג התכשיר, סוג הסרטן והטיפול הם שדות רשות. לא נבקש פרופיל רפואי מלא.

אבל יש כאן גבול שצריך לשמור: אם אנחנו שואלים על הטיפול, המשתמש עשוי לצפות שנקבע האם הצמח מתאים לו אישית. לכן נסביר שהפרטים משמשים למיקוד חיפוש המחקרים, ושהסקירה אינה אישור לשילוב הצמח בטיפול שלו.

עכשיו נעבור לעבודת החוקרים: מה ה־AI מכין עבורם כשנכנסת בקשה חדשה?

1. מקורות בלבד — מאתר מחקרים, והחוקר קורא וכותב את הסקירה.
2. טיוטה מלאה עם ראיות — מאתר מחקרים, מחלץ נתונים ומציע מסקנה; כל טענה מקושרת למקור ולמיקום התומך בה. החוקר עורך ומאשר.
3. טיוטה ובדיקה אוטומטית נוספת — כמו 2, ובנוסף שלב שמחפש סתירות, מקורות חסרים וטענות שאינן נתמכות.

אני ממליץ על 2 לגרסה הראשונה. בלי גישה נוחה לראיות שמאחורי כל טענה, ״אישור חוקר״ עלול להפוך לחותמת על טקסט משכנע. בדיקת AI נוספת יכולה לעזור בהמשך, אבל אינה תחליף לכך.

מה תבחר?`,
    en: `Decided: herb name is required; preparation type, cancer type, and treatment are optional fields. We won't ask for a full medical profile.

But there's a boundary to maintain here: if we ask about treatment, the user might expect us to determine whether the herb personally suits them. So we'll explain that the details are used to focus the literature search, and that the review isn't approval to combine the herb with their treatment.

Now let's move to the researchers' workflow: what does the AI prepare for them when a new request comes in?

1. Sources only — finds studies, and the researcher reads and writes the review.
2. A full draft with evidence — finds studies, extracts data, and proposes a conclusion; every claim is linked to a source and the supporting passage. The researcher edits and approves.
3. A draft plus an additional automatic check — like 2, plus a step that looks for contradictions, missing sources, and unsupported claims.

I recommend option 2 for version one. Without convenient access to the evidence behind each claim, "researcher approval" risks becoming a rubber stamp on persuasive-sounding text. An additional AI check could help later, but isn't a substitute for this.

Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: ה־AI מכין טיוטת סקירה מלאה לחוקר, עם נתונים שחולצו מהמחקרים ומסקנה מוצעת. כל טענה תלווה במקור ובקטע שתומך בה; החוקר יוכל לערוך, להחזיר לתיקון או לאשר לפרסום.

האתגר הבא: גישה למאמרים. קישור למאמר לא אומר שהמערכת יכולה לקרוא אותו במלואו. אסור שטיוטה המבוססת רק על תקציר תיראה כאילו נבדק המאמר המלא.

איך נטפל במאמר שאין גישה לטקסט המלא שלו?

1. נכלול רק מאמרים עם טקסט מלא נגיש — פשוט יותר לבדיקה, אבל עלול להשאיר מחקרים רלוונטיים מחוץ לסקירה.
2. נכלול גם תקצירים, בסימון ברור — החוקר יראה מה נקרא בפועל ומה חסר, ויוכל להשלים את המאמר לפני אישור.
3. נעצור את הכנת הסקירה עד שהצוות ישלים את המאמר — עלול להאריך עוד יותר את ההמתנה.

אני ממליץ על 2, עם אפשרות לחוקר להעלות טקסט מלא שיש לצוות הרשאה להשתמש בו. כשהמידע הזמין אינו מספיק למסקנה, הטיוטה צריכה לומר זאת במפורש.

מה תבחר?`,
    en: `Decided: the AI prepares a full draft review for the researcher, with data extracted from the studies and a proposed conclusion. Every claim will be accompanied by a source and the supporting passage; the researcher can edit, send back for revision, or approve for publication.

Next challenge: access to articles. A link to an article doesn't mean the system can read it in full. A draft based only on an abstract must not appear as if the full article was reviewed.

How do we handle an article without full-text access?

1. Only include articles with accessible full text — simpler to review, but may leave relevant studies out of the review.
2. Also include abstracts, clearly marked — the researcher will see exactly what was actually read and what's missing, and can supply the full text before approving.
3. Halt preparing the review until the team obtains the full article — could extend the wait even further.

I recommend option 2, with the ability for the researcher to upload full text the team has permission to use. When the available information isn't enough for a conclusion, the draft needs to say so explicitly.

Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: נכלול גם מחקרים הזמינים רק כתקציר, ונציין לחוקר בדיוק מה נקרא. הוא יוכל להוסיף טקסט מלא, ובסקירה המאושרת יוצגו מגבלות מהותיות שנובעות ממידע חסר.

עכשיו שאלת בקרת האיכות: מי רשאי לאשר סקירה לפרסום?

1. חוקר אחד — בודק את המקורות, עורך ומאשר.
2. שני חוקרים בכל סקירה — הראשון עורך, והשני מאשר.
3. חוקר אחד בדרך כלל, ובודק נוסף במקרים מוגדרים — למשל כשיש ממצאים סותרים או מחלוקת על המסקנה.

אני נוטה ל־3, בתנאי שנגדיר מראש מה מחייב בדיקה נוספת. שני אישורים לכל סקירה עלולים להכביד על התור שכבר אין לו זמן טיפול מובטח; מצד שני, לא נכון להשאיר את ההחלטה לבדיקה נוספת לתחושת בטן בלבד.

מה מתאים ליכולת העבודה של הצוות?`,
    en: `Decided: we'll also include studies available only as an abstract, and tell the researcher exactly what was actually read. They can add full text, and the approved review will display material limitations arising from missing information.

Now the quality-control question: who's authorized to approve a review for publication?

1. One researcher — checks the sources, edits, and approves.
2. Two researchers per review — the first edits, the second approves.
3. Usually one researcher, with a second reviewer in defined cases — e.g. when there are conflicting findings or disagreement about the conclusion.

I lean toward option 3, provided we define in advance what triggers a second review. Two approvals per review could overload a queue that already has no guaranteed turnaround; on the other hand, it's wrong to leave the decision for a second review to gut feeling alone.

What fits the team's actual working capacity?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: חוקר אחד רשאי לערוך ולאשר סקירה לפרסום. נשמור מי אישר, מתי, ועל אילו מקורות התבססה הגרסה.

הביקורת שלי: האישור חייב לכלול בדיקת המקורות והמסקנה, ולא רק תיקוני ניסוח. בממשק החוקר נציג את הטיוטה לצד הראיות כדי לאפשר זאת.

מה קורה לסקירה אחרי הפרסום, כשמופיע מחקר חדש?

1. עדכון ביוזמת הצוות בלבד — פשוט לתפעול, אבל תלוי בכך שהחוקרים ייזמו בדיקות.
2. בדיקה אוטומטית תקופתית — המערכת מחפשת מחקרים חדשים ומעבירה הצעת עדכון לאישור חוקר.
3. בדיקה בכל בקשת משתמש — חיפוש חוזר לפני שימוש בסקירה קיימת; מוסיף זמן ועלות.

אני ממליץ על 2: הסקירה המאושרת נשארת זמינה עם תאריך הבדיקה, ושינוי במסקנה מתפרסם רק לאחר אישור.

מה תבחר?`,
    en: `Decided: one researcher is authorized to edit and approve a review for publication. We'll record who approved it, when, and which sources that version was based on.

My critique: approval must include checking the sources and the conclusion, not just wording fixes. In the researcher's interface we'll show the draft alongside the evidence to enable that.

What happens to a review after publication, when a new study appears?

1. Team-initiated updates only — simple to operate, but depends on researchers initiating reviews.
2. Periodic automatic check — the system searches for new studies and routes an update proposal for researcher approval.
3. Check on every user request — a fresh search before reusing an existing review; adds time and cost.

I recommend option 2: the approved review stays available with its review date, and any change to the conclusion is published only after approval.

Which do you choose?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: עדכון סקירות ייעשה ביוזמת הצוות בלבד, ובכל סקירה יוצג תאריך בדיקת הספרות האחרון. לא נציג אותה כ״מעודכנת״ רק משום שהיא מאושרת.

החיסרון שצריך לקבל במודע: סקירה עלולה להישאר במאגר גם כשהספרות השתנתה, עד שהצוות יחזור לבדוק אותה.

לפני שנמשיך לפרטים טכניים, חסרה החלטה בסיסית: איך נדע שהפיילוט הצליח?

1. ערך לציבור — המשתמש מבין טוב יותר מה ידוע ומה לא ידוע על הצמח.
2. חיסכון בזמן החוקרים — הכנת סקירה ואישורה מהירים יותר, בלי לפגוע באיכות.
3. ביקוש למוצר — משתמשים מגישים שאלות וחוזרים לקרוא תשובות.

אני ממליץ למדוד קודם את 2, כי כל תשובה חדשה תלויה בעבודת חוקר. אם הטיוטות דורשות כתיבה מחדש, יהיה קשה לקיים את השירות גם אם יש ביקוש.

מהו מדד ההצלחה המרכזי מבחינתך?`,
    en: `Decided: review updates will be team-initiated only, and every review will display its most recent literature-check date. We won't present it as "up to date" just because it's approved.

We need to knowingly accept the downside: a review might remain in the bank even after the literature has changed, until the team gets back to reviewing it.

Before moving to technical details, a basic decision is still missing: how will we know the pilot succeeded?

1. Value to the public — the user better understands what's known and unknown about the herb.
2. Researcher time savings — preparing and approving a review is faster, without hurting quality.
3. Product demand — users submit questions and come back to read answers.

I recommend measuring option 2 first, since every new answer depends on a researcher's work. If drafts require rewriting, it'll be hard to sustain the service even if there's demand.

What's the key success metric for you?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: הצלחת הפיילוט תימדד בשיפור ההבנה של המשתמש — מה ידוע, מה לא ידוע ועד כמה הראיות רלוונטיות לשאלה שלו.

אני מאתגר כאן מדד מפתה: ״התשובה הייתה ברורה ומשכנעת״ לא מספיק. משתמש יכול לצאת בטוח יותר, אבל להבין לא נכון. נבדוק אם הוא מצליח לזהות את המסקנה ואת המגבלות שלה, באמצעות שאלות קצרות לפני ואחרי קריאת הסקירה.

מי יהיו המשתמשים הראשונים בפיילוט?

1. מטופלים שמתמודדים עם ירידה בתיאבון.
2. בני משפחה ומלווים שמחפשים מידע עבורם.
3. שתי הקבוצות, עם מדידה נפרדת לכל קבוצה.

אני ממליץ על 3 אם יש לכם גישה לשתיהן. כך נוכל לבדוק עבור מי המוצר מועיל יותר, בלי להניח שהצרכים וההבנה זהים.

למי מהקבוצות יש לכם גישה בפועל לצורך פיילוט?`,
    en: `Decided: pilot success will be measured by improvement in the user's understanding — what's known, what's unknown, and how relevant the evidence is to their question.

Here I'm challenging a tempting metric: "the answer was clear and convincing" isn't enough. A user can come away more confident, but with a wrong understanding. We'll test whether they can correctly identify the conclusion and its limitations, using short questions before and after reading the review.

Who will be the pilot's first users?

1. Patients dealing with decreased appetite.
2. Family members and caregivers seeking information for them.
3. Both groups, with separate measurement for each.

I recommend option 3 if you have access to both. That way we can test for whom the product is more helpful, without assuming needs and understanding are identical.

Which of these groups do you actually have access to for the pilot?`,
  },
  { role: 'user', he: `3`, en: `3` },
  {
    role: 'assistant',
    he: `נקבע: הפיילוט יכלול מטופלים ובני משפחה או מלווים, ונבחן את שיפור ההבנה בכל קבוצה בנפרד. עדיין צריך לוודא שיש דרך לגייס את שתי הקבוצות בפועל.

עכשיו יש סתירה מעשית שצריך לפתור: אנחנו רוצים לבדוק אם הסקירות עוזרות להבין, אבל משתמש ששואל שאלה חדשה מקבל רק המתנה ללא מועד. פיילוט כזה עלול לבדוק בעיקר סבלנות.

איך נתחיל?

1. נכין מראש מאגר קטן של סקירות מאושרות, ונאפשר גם להגיש שאלות חדשות.
2. נאסוף שאלות מהמשתתפים לפני הפיילוט, נכין ונאשר סקירות עבורן, ואז נזמין אותם לקרוא ולהעריך.
3. נתחיל ממאגר ריק, ונבחן את התהליך כולו, כולל ההמתנה.

אני ממליץ על 2: היא מאפשרת לבדוק הבנה באמצעות שאלות אמיתיות של המשתתפים. בהמשך נבדוק בנפרד גם את חוויית ההמתנה.

מה תבחר?`,
    en: `Decided: the pilot will include patients and family members or caregivers, and we'll examine the improvement in understanding for each group separately. We still need to make sure there's a way to actually recruit both groups.

Now there's a practical contradiction to resolve: we want to test whether the reviews help understanding, but a user asking a new question only gets an open-ended wait. A pilot like that would mostly be testing patience.

How do we start?

1. Prepare a small bank of approved reviews in advance, and also allow submitting new questions.
2. Collect questions from participants before the pilot, prepare and approve reviews for them, and then invite participants to read and evaluate.
3. Start from an empty bank, and test the entire process, including the wait.

I recommend option 2: it lets us test understanding using participants' real questions. We'll separately test the waiting experience later on.

Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: נאסוף מראש שאלות מהמטופלים ומהמלווים, הצוות יאשר סקירות, ואז המשתתפים יקראו אותן ונבדוק את הבנתם.

כך נבחן את הערך של התוכן. זה עדיין לא יוכיח שהשירות השוטף עובד, כי בפיילוט הזה המשתתפים לא יחוו את ההמתנה הרגילה.

לפני שנמשיך, צריך להחליט על גבול מהותי: האם הסקירה המאושרת משותפת לכל המשתמשים, או נכתבת עבור אדם מסוים?

1. סקירה משותפת לכל שאלת מחקר — למשל צמח ותכשיר מסוימים לשיפור תיאבון באוכלוסייה מוגדרת. פרטי המשתמש עוזרים למצוא סקירה מתאימה.
2. תשובה נפרדת לכל משתמש — החוקר בוחן ומאשר כל תשובה לפי הפרטים שהוזנו.

אני ממליץ על 1. זה מתאים למוצר לבדיקת ראיות שבחרנו, מאפשר שימוש חוזר בסקירות ומצמצם עומס. אפשרות 2 גם יוצרת ציפייה חזקה יותר לייעוץ אישי.

מה תבחר?`,
    en: `Decided: we'll collect questions from patients and caregivers in advance, the team will approve reviews, and then participants will read them and we'll test their understanding.

This tests the value of the content. It still won't prove the ongoing service works, because in this pilot participants won't experience the normal wait.

Before continuing, we need to decide a substantial boundary: is the approved review shared across all users, or written for a specific person?

1. A shared review per research question — e.g. a specific herb and preparation for appetite improvement in a defined population. User details help find the matching review.
2. A separate answer for each user — the researcher examines and approves every answer based on the entered details.

I recommend option 1. It fits the evidence-checking product we chose, allows reuse of reviews, and reduces load. Option 2 also creates a stronger expectation of personal advice.

Which do you choose?`,
  },
  { role: 'user', he: `2`, en: `2` },
  {
    role: 'assistant',
    he: `נקבע: כל משתמש יקבל תשובה נפרדת, שחוקר יבדוק ויאשר לפי פרטי הבקשה. סקירות קיימות יוכלו לשמש בסיס להכנתה.

אני מאתגר את הבחירה: היא מגדילה את עומס הבדיקה, גם כששתי בקשות דומות. בנוסף, תשובה אישית עלולה להיתפס כאישור להשתמש בצמח — למרות שהגדרנו מוצר לבדיקת ראיות.

מה בדיוק יהיה אישי בתשובה?

1. התאמת סקירת הראיות לצמח, לתכשיר, לסוג הסרטן ולטיפול שהוזנו — תוך הסבר מה רלוונטי ומה חסר, בלי להכריע אם כדאי למשתמש לקחת אותו.
2. המלצה אם להשתמש בצמח בפועל — שינוי מהותי מהגבול שקבענו, שמצריך אפיון מחדש של השירות והאחריות המקצועית.

אני ממליץ על 1. אפשר לספק תשובה אישית ומועילה בלי להפוך אותה להמלצה טיפולית. האם זו הכוונה שלך?`,
    en: `Decided: every user will get a separate answer, which a researcher reviews and approves based on the request's details. Existing reviews can serve as a base for preparing it.

I'm challenging the choice: it increases review load, even when two requests are similar. It also risks a personal answer being read as approval to use the herb — even though we defined an evidence-checking product.

What exactly will be personal about the answer?

1. Matching the evidence review to the herb, preparation, cancer type, and treatment entered — explaining what's relevant and what's missing, without deciding whether the user should take it.
2. A recommendation on whether to actually use the herb — a substantial change from the boundary we set, requiring re-characterizing the service and professional liability.

I recommend option 1. You can provide a personal, useful answer without turning it into treatment advice. Is that your intent?`,
  },
  { role: 'user', he: `1`, en: `1` },
  {
    role: 'assistant',
    he: `נקבע: התשובה תותאם לפרטי הבקשה ותסביר אילו ראיות רלוונטיות ומה חסר, בלי להמליץ אישית על נטילת הצמח. חוקר יאשר כל תשובה לפני הצגתה.

צריך עכשיו לסגור נקודה שנותרה עמומה: מי אחראי לכך שבקשה תטופל? תור משותף, ללא זמן מובטח וללא אחראי, עלול להפוך לרשימת בקשות שאיש לא לוקח.

איך נחלק את העבודה?

1. מנהל הצוות משייך כל בקשה לחוקר — אחריות ברורה ושליטה בעומס.
2. כל חוקר בוחר בקשות מהתור — גמיש, אבל בקשות מורכבות עלולות להישאר מאחור.
3. שיוך אוטומטי לפי מומחיות ועומס — דורש הגדרות ומנגנון ניתוב.

אני ממליץ על 1 לפיילוט: פשוט ליישום ומאפשר ללמוד איך העבודה מתחלקת לפני שמבצעים אוטומציה. מה תבחר?`,
    en: `Decided: the answer will be tailored to the request's details and explain which evidence is relevant and what's missing, without personally recommending taking the herb. A researcher will approve every answer before it's shown.

Now we need to close a point that's remained vague: who's responsible for a request actually getting handled? A shared queue, with no guaranteed time and no owner, risks becoming a list of requests nobody takes.

How do we divide the work?

1. The team lead assigns every request to a researcher — clear accountability and control over load.
2. Every researcher picks requests from the queue — flexible, but complex requests risk being left behind.
3. Automatic assignment by expertise and load — requires configuration and a routing mechanism.

I recommend option 1 for the pilot: simple to implement, and lets us learn how the work actually divides before automating it. Which do you choose?`,
  },
  {
    role: 'user',
    he: `האם תוכל בשלב הזה להציג את האפיון בדרך של תרשים`,
    en: `At this stage, could you present the characterization as a diagram?`,
  },
  {
    role: 'assistant',
    he: `כן. זהו תרשים האפיון כפי שהגדרנו עד עכשיו. ההחלטה כיצד לשייך בקשות לחוקרים עדיין פתוחה.

\`\`\`mermaid
flowchart TD
    A["מטופל או בן משפחה / מלווה"] --> B["הרשמה וכניסה לחשבון"]
    B --> C["הגשת בקשה לבדיקת צמח"]
    C --> D["בירור קצר במקרה של עמימות"]
    D --> E["פתיחת בקשה אישית בתור"]
    E --> F["המשתמש רואה סטטוס המתנה"]
    E --> G["הכנת טיוטה באמצעות AI"]

    H["סקירות קיימות שאושרו"] --> G
    I["חיפוש מחקרים להשלמה"] --> G

    G --> J["טיוטה עם ממצאים, מגבלות ומקורות"]
    J --> K["בדיקה בידי חוקר אחד"]
    K --> L{"החלטת החוקר"}
    L -->|"נדרש תיקון"| J
    L -->|"אישור"| M["פרסום תשובה אישית בחשבון"]
    M --> N["שמירת הגרסה והיסטוריית הבקשה"]
    N --> O["עדכון עתידי ביוזמת הצוות"]
    O --> K
\`\`\`

מה נכנס למערכת ומה יוצא ממנה

| רכיב | ההחלטה |
|---|---|
| מוקד | בדיקת ראיות לשיפור תיאבון אצל אנשים עם סרטן |
| קלט חובה | שם הצמח |
| קלט רשות | סוג התכשיר, סוג הסרטן והטיפול |
| מקורות | מאגר סקירות מאושרות וחיפוש מחקרים נוספים |
| עבודת ה־AI | חילוץ נתונים והכנת טיוטה; כל טענה מקושרת למקור ולקטע התומך בה |
| גישה למאמרים | גם תקצירים, תוך סימון מה נקרא ומה חסר; החוקר יכול להשלים טקסט מלא |
| אישור | חוקר אחד מאשר כל תשובה אישית, גם כשנעשה שימוש בסקירה קיימת |
| לפני האישור | סטטוס המתנה בלבד; אין זמן טיפול מובטח |
| התוצאה | מסקנה נגישה, ודאות הראיות, מגבלות, מקורות ופרטי המחקרים |
| גבול ההתאמה האישית | הסבר על רלוונטיות הראיות לפרטי הבקשה; ללא המלצת נטילה אישית |

מבנה התשובה המאושרת

\`\`\`mermaid
flowchart TD
    A["תשובה אישית מאושרת"] --> B["מסקנה מרכזית על שיפור התיאבון"]
    A --> C["עד כמה הראיות רלוונטיות לבקשה"]
    A --> D["הרחבה ומקורות"]

    B --> E{"יש מחקרים מתאימים בבני אדם?"}
    E -->|"כן"| F["הממצאים, מידת הוודאות והמגבלות"]
    E -->|"לא"| G["אין מספיק ראיות בבני אדם להערכת התועלת"]

    D --> H["אוכלוסייה, תכשיר, מינון ומשך שנבדקו"]
    D --> I["מחקרי מעבדה ובעלי חיים בנפרד"]
    D --> J["מידע בטיחותי רלוונטי ופערי מידע"]
\`\`\`

המינונים יוצגו כתיאור המחקרים, ולא כהוראות שימוש. בכל תשובה יישמרו זהות המאשר, תאריך הבדיקה והמקורות.

הפיילוט: נאסוף מראש שאלות ממטופלים וממלווים, נכין תשובות מאושרות, ונבדוק הבנה לפני ואחרי הקריאה — בנפרד לכל קבוצה.

נקודת התורפה המרכזית: בחרנו תשובות אישיות באישור חוקר, ללא זמן טיפול מובטח. לכן קיבולת הצוות ואופן שיוך הבקשות הם ההחלטה התפעולית הבאה שצריך לסגור.`,
    en: `Yes. Here's the characterization as a diagram, based on what we've defined so far. The decision on how to assign requests to researchers is still open.

\`\`\`mermaid
flowchart TD
    A["Patient or family member / caregiver"] --> B["Sign up and log in"]
    B --> C["Submit a request to check a herb"]
    C --> D["Short clarification if ambiguous"]
    D --> E["Personal request opened in the queue"]
    E --> F["User sees waiting status"]
    E --> G["AI prepares a draft"]

    H["Existing approved reviews"] --> G
    I["Search for supplementary studies"] --> G

    G --> J["Draft with findings, limitations, and sources"]
    J --> K["Reviewed by one researcher"]
    K --> L{"Researcher's decision"}
    L -->|"Needs revision"| J
    L -->|"Approved"| M["Personal answer published to account"]
    M --> N["Version and request history saved"]
    N --> O["Future update, team-initiated"]
    O --> K
\`\`\`

What goes into the system and what comes out of it

| Component | Decision |
|---|---|
| Focus | Checking evidence for appetite improvement in people with cancer |
| Required input | Herb name |
| Optional input | Preparation type, cancer type, and treatment |
| Sources | Bank of approved reviews plus search for additional studies |
| AI's work | Extracting data and preparing a draft; every claim linked to a source and its supporting passage |
| Access to articles | Abstracts included too, marking what was read and what's missing; researcher can add full text |
| Approval | One researcher approves every personal answer, even when an existing review is reused |
| Before approval | Waiting status only; no guaranteed turnaround time |
| The result | An accessible conclusion, evidence certainty, limitations, sources, and study details |
| Personalization boundary | Explains how relevant the evidence is to the request's details; no personal recommendation to take it |

Structure of the approved answer

\`\`\`mermaid
flowchart TD
    A["Approved personal answer"] --> B["Main conclusion on appetite improvement"]
    A --> C["How relevant the evidence is to the request"]
    A --> D["Expansion and sources"]

    B --> E{"Are there suitable human studies?"}
    E -->|"Yes"| F["Findings, certainty level, and limitations"]
    E -->|"No"| G["Not enough evidence in humans to assess benefit"]

    D --> H["Population, preparation, dosage, and duration studied"]
    D --> I["Lab and animal studies, shown separately"]
    D --> J["Relevant safety information and information gaps"]
\`\`\`

Dosages will be presented as a description of the studies, not as usage instructions. Every answer will retain the identity of the approver, the review date, and the sources.

The pilot: we'll collect questions from patients and caregivers in advance, prepare approved answers, and test understanding before and after reading — separately for each group.

The central weak point: we chose personal, researcher-approved answers, with no guaranteed turnaround time. So team capacity and how requests get assigned are the next operational decision to close.`,
  },
  {
    role: 'user',
    he: `בוא ניצור כרגע מהקיים אפיון שלם של הפרוייקט ברפומפט.

סטאק: python, html, css,supabase,railway , google stitch ux ui

ביחס ל - railway צור לי שתי סביבות - האחת ל dev והאחת ל Production . בכל סביבה צור לי שני services האחת ל frontend והאחת לbackend. סביבת ה- Production תהיה מחוברת לענף main וסביבת ה-dev תהיה מחוברת לענף dev חדש שיווצר.

תשתמש ב - supabase cli, railway cli, stich mcp`,
    en: `Let's now turn everything we have into a complete project characterization, as a prompt.

Stack: Python, HTML, CSS, Supabase, Railway, Google Stitch UX/UI.

For Railway, create two environments for me — one for dev and one for Production. In each environment create two services — one for frontend and one for backend. The Production environment should be connected to the main branch, and the dev environment should be connected to a new dev branch to be created.

Use the Supabase CLI, Railway CLI, and Stitch MCP.`,
  },
  {
    role: 'assistant',
    he: `אכין פרומפט מלא לסוכן פיתוח, עם האפיון שסגרנו, תהליך אישור החוקרים והפרדת הסביבות והשירותים ב־Railway. אשתמש במיומנות Library לשמירתו כקובץ, ואסמן החלטות שעדיין פתוחות.`,
    en: `I'll prepare a complete prompt for a development agent, with the characterization we've settled on, the researcher-approval process, and the separation of environments and services on Railway. I'll use the Library skill to save it as a file, and flag decisions that are still open.`,
  },
  {
    role: 'assistant',
    he: `שתי החלטות מרכזיות נכנסו לפרומפט: כל תשובה אישית מחייבת אישור חוקר לפני הצגתה, וגם בסיסי הנתונים של dev ו־Production יהיו נפרדים. שיוך הבקשות לחוקרים טרם הוכרע, ולכן אגדיר שיוך ידני בידי מנהל כברירת מחדל לפיילוט ואסמן אותו כהצעה.`,
    en: `Two key decisions went into the prompt: every personal answer requires researcher approval before it's shown, and the dev and Production databases will be separate. Assigning requests to researchers hasn't been decided yet, so I'll set manual assignment by a lead as the default for the pilot and flag it as a proposal.`,
  },
  {
    role: 'tool',
    he: `(פלט הכלי — שמירת הפרומפט כקובץ — הוסתר על ידי ChatGPT)`,
    en: `(Tool output — saving the prompt as a file — redacted by ChatGPT)`,
  },
  {
    role: 'assistant',
    he: `הכנתי פרומפט פיתוח מלא, מוכן להעברה לקלוד קוד:

herbal_evidence_project_prompt.md (קובץ שנוצר בסביבת ה-sandbox של ChatGPT)

הוא כולל את האפיון שסגרנו, מסכי המשתמש והחוקרים, תהליך המחקר והאישור, מודל הנתונים, הרשאות, בדיקות והוראות שימוש ב־Supabase CLI, Railway CLI ו־Google Stitch MCP.

הפריסה מוגדרת כך:

| סביבה | ענף | שירותים |
|---|---|---|
| dev | ענף dev חדש | frontend + backend |
| Production | main | frontend + backend |

הוספתי הפרדה בין בסיסי הנתונים וסימנתי החלטות שטרם סגרנו כברירות מחדל מוצעות. הוראות התשתית נשענות על התיעוד הרשמי של Railway, Supabase ו־Stitch MCP.

זהו פרומפט למימוש; התשתיות עצמן עדיין לא הוקמו.`,
    en: `I've prepared a complete development prompt, ready to hand to Claude Code:

herbal_evidence_project_prompt.md (a file generated in ChatGPT's sandbox environment)

It includes the characterization we settled on, the user and researcher screens, the research-and-approval process, the data model, permissions, tests, and instructions for using the Supabase CLI, Railway CLI, and Google Stitch MCP.

The deployment is defined as:

| Environment | Branch | Services |
|---|---|---|
| dev | new dev branch | frontend + backend |
| Production | main | frontend + backend |

I added a separation between the databases and flagged decisions we hadn't closed yet as proposed defaults. The infrastructure instructions rest on the official documentation for Railway, Supabase, and Stitch MCP.

This is a prompt for implementation; the infrastructure itself hasn't been set up yet.`,
  },
  { role: 'user', he: `תעשה באנגלית`, en: `Do it in English` },
  {
    role: 'assistant',
    he: `אתרגם את הפרומפט המלא לאנגלית ואשמור אותו כקובץ נפרד, תוך שמירה על כל הדרישות וההחלטות.`,
    en: `I'll translate the full prompt into English and save it as a separate file, preserving all the requirements and decisions.`,
  },
  {
    role: 'tool',
    he: `(פלט הכלי — תרגום הפרומפט לקובץ נפרד — הוסתר על ידי ChatGPT)`,
    en: `(Tool output — translating the prompt into a separate file — redacted by ChatGPT)`,
  },
  {
    role: 'assistant',
    he: `herbal_evidence_project_prompt_en.md

The complete English prompt, ready for Claude Code. All requirements are preserved, including Railway environments, branch connections, Supabase CLI, and Stitch MCP.`,
    en: `herbal_evidence_project_prompt_en.md

The complete English prompt, ready for Claude Code. All requirements are preserved, including Railway environments, branch connections, Supabase CLI, and Stitch MCP.`,
  },
];

export const chatGptScriptNote: Bilingual = {
  en: `One real name — a research-team colleague, not Dr. Zuari or this site's author — has been replaced with a generic role reference for privacy. Two brief tool-call outputs ChatGPT itself redacted are marked as such, not fabricated.`,
  he: `שם אמיתי אחד — עמית/ה בצוות המחקר, לא ד״ר זוארי או מחברת האתר — הוחלף בהתייחסות כללית לתפקיד, מטעמי פרטיות. שני פלטי קריאת-כלי קצרים שה-ChatGPT עצמו הסתיר מסומנים ככאלה, לא הומצאו.`,
};
