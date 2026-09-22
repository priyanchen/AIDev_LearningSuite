import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  projectSpokenExcerpts,
  projectPromptPath,
  characterizationReconstruction,
} from '@/content/project-guide';
import { chatGptScript, chatGptScriptNote } from '@/content/chatgpt-script';
import type { Locale } from '@/i18n';

export default async function ProjectSession22Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);
  const nav = await getTranslations('nav');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="mb-8 text-[10px] tracking-brand uppercase text-muted font-sans">
        <Link href={`/${locale}`} className="hover:text-accent">
          {nav('home')}
        </Link>
        <span className="mx-2">·</span>
        <Link href={`/${locale}/project`} className="hover:text-accent">
          {nav('project')}
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-2xl small-caps tracking-wide text-center mb-2">
          {locale === 'he' ? 'בקולו של ד״ר זוארי — הליכה חיה במפגש 22' : "In Dr. Zuari's Own Words — Live From Session 22"}
        </h1>
        <p className="text-center italic text-muted text-sm mb-2">
          {locale === 'he'
            ? 'לא שקפים — המילים שנאמרו בפועל, בזמן שד״ר זוארי הדגים "פרויקט לדוגמה" חי (אפליקציית זיהוי תרופות צמחיות) יחד עם הכיתה — אותה נקודת-ביקורת מעשית שמוזכרת בקשת הקורס של מפגש 1, מול אותם שלבים במפת הדרכים.'
            : 'Not slides — the words he actually said, live-demonstrating a "Sample Project" (a herbal-remedy identification app) with the class — the same practical checkpoint named in Session 1\'s course arc, against the same steps documented in the roadmap.'}
        </p>
        <p className="text-center text-[10px] text-muted max-w-2xl mx-auto mb-8">
          {locale === 'he'
            ? 'תיקון רמה: נכון לעכשיו זהו המפגש האחרון הזמין באתר (מודול 5, ראייה ממוחשבת) — לפי קשת הקורס של מפגש 1, "פרויקט לדוגמה" מגיע רק אחרי ראייה ממוחשבת, ולפני LLM/RAG וסוכני AI. ההדגמה החיה הזו כבר כוללת אימות ראיות מבוסס-סוכן ותפקיד "חוקר" AI — מושגים ממודולים מאוחרים יותר שטרם נלמדו רשמית. זו לא הייתה תרגיל "רק ממה שלמדנו עד עכשיו" — זו הצצה מכוונת קדימה.'
            : "Level correction: as of now, this is the last available session on the site (Module 5, Computer Vision) — per Session 1's own course arc, the \"Sample Project\" checkpoint comes only after Computer Vision, before the LLM/RAG and AI Agents modules. This live demo already involves agent-based evidence validation and an AI \"researcher\" role — concepts from later modules not yet formally taught. This wasn't a \"only what we've covered so far\" exercise — it was a deliberate look ahead."}
        </p>
        <p className="text-center text-[10px] text-muted mb-8">
          {locale === 'he'
            ? 'מקור: תמליל כתוביות אוטומטי של הקלטת מפגש 22 — נוקה קלות מרעש זיהוי, לא נוסח מחדש.'
            : "Source: Session 22's auto-generated caption transcript — lightly cleaned of recognition noise, not rewritten."}
        </p>
        <div className="grid gap-4 mb-8">
          {projectSpokenExcerpts.map((ex, i) => (
            <blockquote key={i} className="border-s-2 border-accent ps-4">
              <p dir="rtl" className="text-sm leading-relaxed mb-1">{ex.he}</p>
              <p dir="ltr" className="text-sm italic text-muted leading-relaxed">{ex.en}</p>
            </blockquote>
          ))}
        </div>

        {/* Card 1 — the end prompt, reconstructed (short summary; verbatim is Card 2 below) */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 1 — האפיון הסופי' : 'Card 1 — The End Characterization'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא ציטוט מילולי — זהו סיכום קצר של המסקנות. הפרומפט המלא והמילולי נשלף בהצלחה בהמשך session זה וזמין להלן ב"כרטיס 2 — התסריט המלא," אחרי שניסיונות קודמים נחסמו על ידי Cloudflare.'
              : 'Not a verbatim quote — this is a short summary of the conclusions. The full, verbatim prompt was successfully retrieved later in this same session and is available below in "Card 2 — The Full Script," after earlier attempts were Cloudflare-blocked.'}
          </p>
          <ul className="grid gap-2">
            {characterizationReconstruction.map((point, i) => (
              <li key={i} className="text-sm leading-relaxed flex gap-2">
                <span className="text-accent flex-shrink-0">·</span>
                <span>{point[locale]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 — the full, verbatim ChatGPT conversation, retrieved live from the share link */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 2 — התסריט המלא של ChatGPT' : 'Card 2 — The Full ChatGPT Script'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא שחזור — השיחה המלאה, מילה במילה, נשלפה חי מהקישור ל-ChatGPT למטה. עברית היא המקור המקורי; אנגלית היא תרגום.'
              : "Not a reconstruction — the full conversation, word for word, retrieved live from the ChatGPT link below. Hebrew is the original; English is a translation."}
            {' '}{chatGptScriptNote[locale]}
          </p>
          <div className="max-h-[32rem] overflow-y-auto border border-rule p-4 bg-paper grid gap-4">
            {chatGptScript.map((turn, i) => (
              <div
                key={i}
                className={`border-s-2 ps-3 ${turn.role === 'user' ? 'border-accent' : turn.role === 'tool' ? 'border-rule' : 'border-ink'}`}
              >
                <span className="text-[8px] tracking-brand uppercase text-muted font-sans">
                  {turn.role === 'user'
                    ? (locale === 'he' ? 'משתמש' : 'User')
                    : turn.role === 'tool'
                      ? (locale === 'he' ? 'כלי' : 'Tool')
                      : 'ChatGPT'}
                </span>
                <p dir="rtl" className="text-xs leading-relaxed whitespace-pre-wrap mt-1 mb-1">{turn.he}</p>
                <p dir="ltr" className="text-xs italic text-muted leading-relaxed whitespace-pre-wrap">{turn.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3 — the final development prompt, reconstructed in English from Card 2's own
            specification (the actual .md file lived in ChatGPT's ephemeral sandbox and was never
            printed into the chat itself — only its filename and a one-line description were, in
            turns 68 and 80 of Card 2 above). Every requirement below is traceable to a specific
            turn already shown verbatim in Card 2; nothing here is invented. */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 3 — פרומפט הפיתוח (אנגלית, משוחזר)' : 'Card 3 — The Development Prompt (English, Reconstructed)'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'לא הקובץ המילולי — herbal_evidence_project_prompt_en.md נוצר בתוך ה-sandbox הזמני של ChatGPT (כרטיס 2, תור 80 למעלה) ולעולם לא הודפס לתוך הצ׳אט עצמו, רק שמו ותיאור שורה אחת שלו. מה שלמטה משוחזר במלואו מהאפיון שכבר מופיע מילה במילה בכרטיס 2 למעלה — כל דרישה ניתנת לאיתור לתור ספציפי שם.'
              : "Not the literal file — herbal_evidence_project_prompt_en.md was generated inside ChatGPT's ephemeral sandbox (Card 2, turn 80 above) and was never printed into the chat itself, only its filename and a one-line description were. What follows is fully reconstructed from the specification already shown verbatim in Card 2 above — every requirement is traceable to a specific turn there."}
          </p>
          <div className="border border-rule p-5 bg-paper" dir="ltr">
            <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono">
{`# Herbal Evidence — Development Prompt

## 1. Product Characterization
Build a web application where users submit a single herb (plus optional
preparation type) to check whether its claimed benefit for appetite
improvement in people with cancer is supported by research evidence.

- Required input: herb name.
- Optional input: preparation type (e.g. tea, powder, extract — "don't
  know" is a valid option), cancer type, current treatment.
- The system does not choose a herb for the user and does not
  recommend whether to use it.

## 2. Evidence Sources & Researcher Workflow
- Maintain a bank of team-approved evidence reviews, supplemented by
  live literature search for gaps.
- Include human studies as the primary evidence; include lab/animal
  studies separately, never presented as proof of benefit in humans.
- Include studies available only as abstracts, clearly marked as such;
  let a researcher attach full text before approval.
- AI prepares a full draft review per request: extracts data, proposes
  a conclusion, and links every claim to its source and the supporting
  passage.
- One researcher edits and approves every personal answer before
  publication — including answers that reuse an existing approved
  review.
- No guaranteed turnaround time. Before approval, the user sees a
  waiting status only (no automatic interim summary).
- Record the approving researcher's identity, the approval date, and
  the sources used, on every published answer.
- Review updates are team-initiated only; show the literature-check
  date on every review — never imply "current" just because approved.
- Assigning incoming requests to researchers: default to manual
  assignment by a team lead for the pilot (still an open/proposed
  default, not finalized — see Section 8).

## 3. Answer Structure
Each personal answer includes:
- A main conclusion on appetite improvement, stating explicitly
  whether suitable human studies exist:
    - If yes: findings, certainty level, and limitations.
    - If no: "Not enough evidence in humans to assess benefit."
- An explanation of how relevant the evidence is to this request.
- An expansion: population, preparation, dosage, and duration studied;
  lab/animal studies shown separately; relevant safety information and
  information gaps.
- Dosages shown only as a description of what was studied — never as
  usage instructions.
- No personal recommendation on whether to take the herb.

## 4. User Accounts & Request Flow
- Mandatory user account, with request history and status tracking.
- Flow: sign up / log in -> submit a request (herb name required;
  preparation type, cancer type, treatment optional) -> brief
  clarification only if ambiguous -> request enters the researcher
  queue (deduplicated) -> user sees a waiting-status screen while the
  AI prepares a draft from the approved-review bank plus supplementary
  search -> one researcher reviews the draft (revise or approve) ->
  approved answer published to the user's account, versioned and
  saved for a future update.

## 5. Pilot Plan
- Participants: patients dealing with decreased appetite, and family
  members/caregivers — measured separately per group.
- Method: collect real questions from participants in advance, have
  the team approve reviews for them, then have participants read the
  reviews and measure understanding before vs. after reading.
- Primary success metric: researcher time saved preparing and
  approving a review, without hurting quality — every new answer
  depends on researcher work, so this bounds what the service can
  sustain.

## 6. Tech Stack
- Backend/scripting: Python
- Frontend: HTML, CSS
- Database, auth, API: Supabase
- Hosting: Railway
- UX/UI design: Google Stitch

## 7. Infrastructure — Railway
Create two environments, each with two services (frontend + backend):

| Environment | Branch           | Services            |
|-------------|------------------|----------------------|
| dev         | new \`dev\` branch | frontend + backend  |
| Production  | \`main\`           | frontend + backend  |

- Keep the dev and Production databases separate.
- Use the Supabase CLI and Railway CLI to provision and manage these
  environments.
- Use the Google Stitch MCP for the UX/UI design work.

## 8. Explicitly Open / Proposed Defaults
Flagged as defaults for the pilot, not final decisions:
- Manual assignment of incoming requests to a researcher by a team
  lead.`}
            </pre>
          </div>
        </div>

        {/* Card 4 — the questioning & decision process that produced Card 1 above */}
        <div className="mb-10 border border-rule p-6 bg-codebg/30">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-4">
            <span className="text-[9px] tracking-brand uppercase text-accent font-sans font-semibold">
              {locale === 'he' ? 'כרטיס 4 — השאלות וההחלטות' : 'Card 4 — The Questioning & Decisions'}
            </span>
          </header>
          <p className="text-xs italic text-muted mb-4 leading-relaxed">
            {locale === 'he'
              ? 'משוחזר מיומן הצ׳אט החי של מפגש 22 עצמו (לא התמליל) — הרצף בפועל שהכיתה עברה כדי להגיע לכרטיס 1. שמות סטודנטים הושמטו לפרטיות; PriYa N. Chen, מחברת האתר, מוזכרת במקומות שבהם ההודעות האמיתיות שלה בצ׳אט עיצבו החלטה.'
              : "Reconstructed from Session 22's own live chat log (not the transcript) — the actual sequence the class worked through to arrive at Card 1. Student names omitted for privacy; PriYa N. Chen, this site's own author, is named where her real chat messages shaped a decision."}
          </p>
          <div className="grid gap-4">
            {projectPromptPath.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[10px] tracking-brand uppercase text-accent font-sans font-semibold flex-shrink-0 w-6 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="small-caps tracking-wide text-sm mb-1">{step.title[locale]}</h4>
                  <p className="text-xs leading-relaxed text-muted">{step.body[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href={`/${locale}/project/intro`}
            className="text-[9px] tracking-brand uppercase text-muted hover:text-accent font-sans"
          >
            {locale === 'he' ? '← הקודם' : '← Previous'}
          </Link>
          <Link
            href={`/${locale}/project/git-upload`}
            className="text-[9px] tracking-brand uppercase text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition font-sans"
          >
            {locale === 'he' ? 'הבא — העלאה ל-Git →' : 'Next — Uploading to Git →'}
          </Link>
        </div>
      </section>
    </div>
  );
}
