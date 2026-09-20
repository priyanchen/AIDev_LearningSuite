import type { Bilingual } from '@/lib/registry';

export type ExternalResource = {
  url: string;
  source: string;       // e.g. "MIT OpenCourseWare", "HarvardX"
  label: Bilingual;     // what the specific course/lecture is
};

// Maps a session's `concepts` tag (exact string match) to a real, verified MIT/Harvard
// lecture or course for further reading. Only add entries here that have been checked
// against a live search — never a guessed URL. Not every concept needs an entry.
export const externalResources: Record<string, ExternalResource> = {
  'Statistical Estimation': {
    url: 'https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-3-video/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Statistics for Applications (18.650) — Lecture 3: Parametric Inference',
      he: 'Statistics for Applications (18.650) — הרצאה 3: הסקה פרמטרית',
    },
  },
  'AI History': {
    url: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Artificial Intelligence (6.034) — full course, foundations and origins',
      he: 'Artificial Intelligence (6.034) — קורס מלא, יסודות ומקורות',
    },
  },
  'AI Ethics': {
    url: 'https://www.edx.org/learn/business-management/harvard-university-tech-ethics-critical-thinking-in-the-age-of-apps-algorithms-and-ai',
    source: 'HarvardX',
    label: {
      en: 'Tech Ethics: Critical Thinking in the Age of Apps, Algorithms, and AI',
      he: 'Tech Ethics: חשיבה ביקורתית בעידן האפליקציות, האלגוריתמים, וה-AI',
    },
  },
  'Algorithmic Bias': {
    url: 'https://ocw.mit.edu/courses/res-ec-001-exploring-fairness-in-machine-learning-for-international-development-spring-2020/',
    source: 'MIT OpenCourseWare',
    label: {
      en: 'Exploring Fairness in Machine Learning for International Development',
      he: 'Exploring Fairness in Machine Learning for International Development',
    },
  },
  'Human in the Loop': {
    url: 'https://www.youtube.com/watch?v=NrmLjmXU66M',
    source: 'MIT (How to AI Almost Anything, Spring 2025)',
    label: {
      en: 'Lecture 11 — Human-AI Interaction (covers human-in-the-loop learning)',
      he: 'הרצאה 11 — אינטראקציית אדם-AI (כולל למידת אדם-בלולאה)',
    },
  },
};
