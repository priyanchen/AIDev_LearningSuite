import type { Bilingual } from '@/lib/registry';

export type GlossaryCategory = 'plot-type' | 'statistics' | 'ml' | 'database';

export type GlossaryTerm = {
  term: string;
  definition: Bilingual;
  source: string;
};

// A dictionary of every plot type and data-science/statistics term found across the "3 - Data
// Science" Drive branch (Statistics, Pandas, SQLite & Supabase, Machine Learning, and Esther's
// student practice folders) — not generic textbook definitions, but grounded in how each source
// deck itself explains or uses the term. Bare pandas/numpy method names are skipped since those
// are already covered at /syntax/pandas and /syntax/numpy; this covers the newer concepts only.
export const dsGlossary: Record<GlossaryCategory, { label: Bilingual; terms: GlossaryTerm[] }> = {
  'plot-type': {
    label: { en: 'Plot Types', he: 'סוגי תרשימים' },
    terms: [
      {
        term: 'Histogram',
        definition: {
          en: 'Shown for numeric variables, as the counterpart to bar charts for categorical data; also describes how LightGBM bins continuous features into discrete buckets before splitting.',
          he: 'מוצג עבור משתנים מספריים, כמקביל לתרשימי עמודות לנתונים קטגוריאליים; מתאר גם איך LightGBM מחלק תכונות רציפות לדליים בדידים לפני פיצול.',
        },
        source: 'Practical Statistics deck · Modern Boosters deck',
      },
      {
        term: 'Bar Chart',
        definition: {
          en: "Paired with categorical/binary data in the deck's own frequency-and-mode discussion.",
          he: 'מוצג לצד נתונים קטגוריאליים/בינאריים בדיון על תדירות ושכיח במצגת עצמה.',
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'Boxplot',
        definition: {
          en: 'Introduced alongside percentiles as a way of reading the spread of a variable; reused later as an outlier-detection tool (boxplots / z-scores / IQR).',
          he: 'מוצג לצד פרצנטילים ככלי לקריאת הפיזור של משתנה; משמש בהמשך גם ככלי לזיהוי חריגים (boxplots / z-scores / IQR).',
        },
        source: 'Practical Statistics deck · Linear/Logistic Regression deck',
      },
      {
        term: 'Correlation Matrix',
        definition: {
          en: "Paired with histograms under the deck's own \"Distribution\" section heading.",
          he: "מוצג לצד היסטוגרמות תחת כותרת הסעיף \"התפלגות\" במצגת עצמה.",
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'Dendrogram',
        definition: {
          en: "An interactive hierarchical-dendrogram demo representing hierarchical clustering's merge tree — each point starts alone and pairs merge upward.",
          he: 'הדגמה אינטראקטיבית של דנדרוגרם היררכי, שמייצגת את עץ המיזוג של אשכול היררכי — כל נקודה מתחילה לבד והזוגות מתמזגים כלפי מעלה.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Elbow Plot / Curve',
        definition: {
          en: "Plots inertia (WCSS) against K to find where the curve bends — the same steps that shrink inertia each round, down to a minimum.",
          he: 'משרטט inertia (WCSS) מול K כדי למצוא את נקודת ה"מרפק" — אותם שלבים שמקטינים את ה-inertia בכל סבב, עד למינימום.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'ROC Curve',
        definition: {
          en: 'Built from the same sensitivity/specificity rates the confusion matrix produces.',
          he: 'נבנה מאותם יחסי רגישות/סגוליות שמטריצת הבלבול מפיקה.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Confusion Matrix',
        definition: {
          en: 'Not strictly a plot but a 2×2 visual grid — a worked example of 100 people tested (45 truly sick, 55 truly healthy) shows every prediction landing in one of four boxes.',
          he: 'לא בדיוק תרשים אלא רשת ויזואלית 2×2 — דוגמה מעובדת של 100 אנשים שנבדקו (45 חולים באמת, 55 בריאים באמת) מראה שכל תחזית נופלת לאחת מארבע תיבות.',
        },
        source: 'Linear/Logistic Regression deck',
      },
    ],
  },
  statistics: {
    label: { en: 'Statistics', he: 'סטטיסטיקה' },
    terms: [
      {
        term: 'IQR (Interquartile Range)',
        definition: {
          en: 'Grouped with mean, median, trimmed mean, and standard deviation under "Location & Spread"; reused later as an outlier-detection method alongside boxplots and z-scores.',
          he: 'מקובצת עם ממוצע, חציון, ממוצע מקוצץ וסטיית תקן תחת "מיקום ופיזור"; משמשת בהמשך גם ככלי לזיהוי חריגים לצד boxplots ו-z-scores.',
        },
        source: 'Practical Statistics deck · Linear/Logistic Regression deck',
      },
      {
        term: 'Skewness',
        definition: {
          en: 'Paired with histograms under the deck\'s "Distribution" heading — labeled, not formally defined in the captured material.',
          he: 'מוצגת לצד היסטוגרמות תחת הכותרת "התפלגות" — מתויגת, לא מוגדרת פורמלית בחומר שנתפס.',
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'Trimmed Mean',
        definition: {
          en: 'Drops the most extreme values from each end before averaging — a compromise between mean and median, demonstrated on US state population data.',
          he: 'מסירה את הערכים הקיצוניים ביותר משני הקצוות לפני ממוצע — פשרה בין ממוצע לחציון, מודגמת על נתוני אוכלוסיית מדינות ארה"ב.',
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'Selection Bias (Self-Selection Bias)',
        definition: {
          en: "Illustrated with online reviews: reviewers aren't randomly chosen, they opt in — so the sample differs from the population in a meaningful, non-random way, producing a bimodal \"U-curve\" of mostly 1-star and 5-star reviews.",
          he: 'מודגמת עם ביקורות אונליין: המבקרים לא נבחרים באקראי, הם בוחרים בעצמם להגיב — כך שהמדגם שונה מהאוכלוסייה באופן משמעותי ולא-אקראי, ומייצר עקומת U דו-שיאית של בעיקר כוכב אחד וחמישה כוכבים.',
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'Stratified Sampling',
        definition: {
          en: 'Shown as a random-vs-stratified sample comparison on a 2,000-point demo.',
          he: 'מוצגת כהשוואת מדגם אקראי מול מדורג על הדגמה של 2,000 נקודות.',
        },
        source: 'Practical Statistics deck',
      },
      {
        term: 'z-score',
        definition: {
          en: 'Listed as an outlier-detection method alongside boxplots and IQR.',
          he: 'מופיעה כשיטת זיהוי חריגים לצד boxplots ו-IQR.',
        },
        source: 'Linear/Logistic Regression deck',
      },
    ],
  },
  ml: {
    label: { en: 'Machine Learning', he: 'למידת מכונה' },
    terms: [
      {
        term: 'Bias–Variance Problem',
        definition: {
          en: 'The framing section title for the whole Ensemble Models deck — the reason ensembles exist, introduced via "trees unstable."',
          he: 'כותרת הסעיף המסגרת עבור כל מצגת Ensemble Models — הסיבה לקיומם של אנסמבלים, מוצגת דרך "עצים לא יציבים."',
        },
        source: 'Ensemble Models deck',
      },
      {
        term: 'Bagging (Bootstrap Aggregating)',
        definition: {
          en: 'Resample, train, average — draw many datasets by random sampling with replacement, train a separate model on every resample in parallel. Random Forest is the worked example.',
          he: 'לדגום מחדש, לאמן, לממוצע — לשלוף מספר מערכי נתונים בדגימה אקראית עם החזרה, לאמן מודל נפרד על כל דגימה במקביל. Random Forest היא הדוגמה המעובדת.',
        },
        source: 'Ensemble Models deck',
      },
      {
        term: 'Boosting',
        definition: {
          en: 'Learn from your mistakes, in order — trains in sequence, each new model corrects the errors of the models before it, and hard examples get more weight.',
          he: 'ללמוד מהטעויות, בסדר — מתאמן ברצף, כל מודל חדש מתקן את הטעויות של המודלים שלפניו, ולדוגמאות קשות ניתן משקל גבוה יותר.',
        },
        source: 'Ensemble Models deck · Modern Boosters deck',
      },
      {
        term: 'Random Forest',
        definition: {
          en: "The deck's worked example of bagging in practice.",
          he: 'הדוגמה המעובדת של המצגת ל-bagging בפועל.',
        },
        source: 'Ensemble Models deck',
      },
      {
        term: 'Gradient Boosting / XGBoost',
        definition: {
          en: 'Builds pre-sorted splits — the reference implementation the deck compares LightGBM and CatBoost against.',
          he: 'בונה פיצולים ממוינים-מראש — יישום הייחוס שהמצגת משווה אליו את LightGBM ו-CatBoost.',
        },
        source: 'Ensemble Models deck · Modern Boosters deck',
      },
      {
        term: 'LightGBM',
        definition: {
          en: 'Microsoft, 2016 — histogram binning plus leaf-wise growth, built for speed and huge datasets.',
          he: 'מיקרוסופט, 2016 — חלוקה להיסטוגרמה בתוספת גדילה leaf-wise, בנוי למהירות ומערכי נתונים ענקיים.',
        },
        source: 'Modern Boosters deck',
      },
      {
        term: 'CatBoost',
        definition: {
          en: 'Yandex, 2017 — ordered boosting, the categorical specialist.',
          he: 'יאנדקס, 2017 — boosting מסודר, המומחה למשתנים קטגוריאליים.',
        },
        source: 'Modern Boosters deck',
      },
      {
        term: 'Leaf-Wise vs. Level-Wise Tree Growth',
        definition: {
          en: "Named as LightGBM's distinguishing technique versus traditional level-wise growth — labeled in the deck, not contrasted in depth.",
          he: 'מוצג כטכניקה המבדילה את LightGBM מגדילה מסורתית מסוג level-wise — מתויג במצגת, לא מנוגד לעומק.',
        },
        source: 'Modern Boosters deck',
      },
      {
        term: 'Feature Importance',
        definition: {
          en: 'XGBoost can score how much each feature contributed to the tree splits — a natural read on which inputs actually drive the prediction, used for explainability, feature selection, and better performance.',
          he: 'XGBoost יכולה לתת ציון לכמה כל תכונה תרמה לפיצולי העץ — קריאה טבעית של אילו קלטים באמת מניעים את התחזית, משמש להסבריות, בחירת תכונות, וביצועים טובים יותר.',
        },
        source: 'Ensemble Models deck',
      },
      {
        term: 'K-Fold Cross-Validation',
        definition: {
          en: "Don't trust a single train/test split — averages performance over K different splits: hold out a test set first, split the training set into K equal folds, and let each fold take a turn as validation.",
          he: 'אל תסמכי על פיצול train/test בודד — ממצעת ביצועים על פני K פיצולים שונים: מפרישים סט בדיקה קודם, מפצלים את סט האימון ל-K קפלים שווים, וכל קפל מקבל תור כ-validation.',
        },
        source: 'Ensemble Models deck',
      },
      {
        term: 'K-Means',
        definition: {
          en: 'A clustering-family algorithm — the deck names K-Means, Hierarchical, and DBSCAN as options "per need."',
          he: 'אלגוריתם ממשפחת ה-clustering — המצגת מציינת K-Means, היררכי, ו-DBSCAN כאפשרויות "לפי הצורך."',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Inertia (WCSS)',
        definition: {
          en: "Measures how far each point sits from its cluster center, summed together — a tight cluster gives a small number, a good cluster. K-Means' whole goal is to shrink this number; it's squared so large distances \"hurt\" more.",
          he: 'מודדת כמה רחוקה כל נקודה מהמרכז של האשכול שלה, מסוכמת יחד — אשכול צפוף נותן מספר קטן, אשכול טוב. המטרה הכוללת של K-Means היא לצמצם את המספר הזה; הוא בריבוע כדי שמרחקים גדולים "יכאבו" יותר.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Silhouette Score',
        definition: {
          en: 'Paired with the elbow method as a way to judge cluster quality — used alongside inertia to pick K.',
          he: 'מוצג לצד שיטת המרפק כדרך לשפוט את איכות האשכול — משמש לצד ה-inertia לבחירת K.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Centroid',
        definition: {
          en: "The \"middle\" each K-Means cluster point's distance is measured against — visualized as marked centers on the 2-D scatter after clustering.",
          he: 'ה"אמצע" שממנו נמדד המרחק של כל נקודת אשכול ב-K-Means — מוצג ויזואלית כמרכזים מסומנים על ה-scatter הדו-ממדי אחרי האשכול.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'DBSCAN',
        definition: {
          en: 'Used for anomaly/fraud detection: instead of teaching the model what fraud looks like (which keeps changing), it teaches what normal looks like — anything that deviates gets checked. A 3am purchase abroad for an unusual amount is far from any cluster, exactly what DBSCAN flags as noise.',
          he: 'משמש לזיהוי אנומליות/הונאות: במקום ללמד את המודל איך הונאה נראית (שמשתנה כל הזמן), מלמדים אותו איך נורמלי נראה — כל מה שסוטה נבדק. רכישה ב-3 בלילה בחו"ל בסכום חריג רחוקה מכל אשכול — בדיוק מה ש-DBSCAN מסמן כרעש.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Hierarchical Clustering',
        definition: {
          en: 'Demoed via the dendrogram merge-tree visualization.',
          he: 'מודגם דרך הוויזואליזציה של עץ המיזוג הדנדרוגרמי.',
        },
        source: 'K-Means Clustering deck',
      },
      {
        term: 'Sigmoid Function',
        definition: {
          en: "Logistic regression's sigmoid turns a linear score into a bounded probability.",
          he: 'הסיגמואיד של רגרסיה לוגיסטית הופך ציון לינארי להסתברות חסומה.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Cross-Entropy / Log Loss',
        definition: {
          en: 'Used instead of MSE for classification — it gives a tiny penalty when the model is confidently right, and a huge penalty when it\'s confidently wrong.',
          he: 'משמש במקום MSE לסיווג — נותן עונש זעיר כשהמודל צודק בביטחון, ועונש עצום כשהוא טועה בביטחון.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'One-Hot vs. Ordinal Encoding',
        definition: {
          en: 'Turns categories into numbers — one-hot for unordered categories, ordinal for ranked ones.',
          he: 'הופך קטגוריות למספרים — one-hot לקטגוריות לא מדורגות, ordinal לקטגוריות מדורגות.',
        },
        source: 'Linear/Logistic Regression deck · Ensemble Models deck',
      },
      {
        term: 'ColumnTransformer Pipeline',
        definition: {
          en: 'The standard preprocessing pattern: numeric columns get SimpleImputer(median) + StandardScaler, categorical columns get SimpleImputer(most_frequent) + OneHotEncoder, combined into one sklearn Pipeline to avoid data leakage.',
          he: 'תבנית קדם-העיבוד הסטנדרטית: עמודות מספריות מקבלות SimpleImputer(median) + StandardScaler, עמודות קטגוריאליות מקבלות SimpleImputer(most_frequent) + OneHotEncoder, משולבות ל-Pipeline אחד של sklearn כדי למנוע דליפת נתונים.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'RMSE',
        definition: {
          en: 'Root Mean Squared Error — the typical miss, in the same units as the target; punishes big errors hard.',
          he: 'Root Mean Squared Error — הטעות הטיפוסית, באותן יחידות כמו היעד; מענישה טעויות גדולות בחומרה.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'MAE',
        definition: {
          en: 'Mean Absolute Error — the average miss, also in target units, but robust to a few wild outliers.',
          he: 'Mean Absolute Error — הטעות הממוצעת, גם היא ביחידות היעד, אך עמידה בפני כמה חריגים קיצוניים.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'R² / Adjusted R²',
        definition: {
          en: 'The share of variance the model explains — 1.0 is perfect, 0 is no better than guessing the mean. Adjusted R² charges a small "membership fee" for every feature added, so plain R² can\'t be gamed by piling on useless features.',
          he: 'החלק מהשונות שהמודל מסביר — 1.0 מושלם, 0 לא טוב יותר מניחוש הממוצע. R² מתוקנן גובה "דמי חבר" קטנים על כל תכונה שנוספת, כך ש-R² רגיל לא ניתן לרמות על ידי צבירת תכונות חסרות תועלת.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Confusion Matrix (TP/TN/FP/FN)',
        definition: {
          en: 'TP — sick, correctly caught. TN — healthy, correctly cleared. FP — false alarm. FN — missed case. Every classification metric is just a ratio of these four numbers.',
          he: 'TP — חולה, נתפס נכון. TN — בריא, שוחרר נכון. FP — אזעקת שווא. FN — מקרה שהוחמץ. כל מדד סיווג הוא פשוט יחס בין ארבעת המספרים האלה.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Accuracy Paradox',
        definition: {
          en: 'A model that always says "healthy" scores 99.9% accuracy while catching zero sick patients — useless, yet "accurate," on imbalanced data like a 1-in-1000 disease.',
          he: 'מודל שתמיד אומר "בריא" מקבל 99.9% דיוק בזמן שהוא תופס אפס חולים — חסר תועלת, אך "מדויק," על נתונים לא-מאוזנים כמו מחלה של 1 מתוך 1000.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Precision / Recall / F1',
        definition: {
          en: 'Precision = TP/(TP+FP), punishes false alarms. Recall = TP/(TP+FN), punishes misses. F1 is the harmonic mean of the two — it refuses to reward a lopsided model.',
          he: 'Precision = TP/(TP+FP), מענישה אזעקות שווא. Recall = TP/(TP+FN), מענישה מקרים שהוחמצו. F1 היא הממוצע ההרמוני של השניים — היא מסרבת לתגמל מודל לא מאוזן.',
        },
        source: 'Linear/Logistic Regression deck',
      },
      {
        term: 'Stratified Train/Test Split',
        definition: {
          en: 'Explicitly used in the deck\'s own Claude Code prompt — "Stratified train_test_split 80/20" for the classification pipeline, keeping class proportions balanced across the split.',
          he: 'משמש במפורש בפרומפט ה-Claude Code של המצגת עצמה — "Stratified train_test_split 80/20" עבור צינור הסיווג, שמשמר את יחסי המחלקות מאוזנים בין הפיצולים.',
        },
        source: 'Linear/Logistic Regression deck',
      },
    ],
  },
  database: {
    label: { en: 'Database', he: 'בסיס נתונים' },
    terms: [
      {
        term: 'Primary Key',
        definition: {
          en: '"When two things look identical, how do you tell them apart?" — the worked example: two passengers both named David Cohen, disambiguated only by their unique id.',
          he: '"כששני דברים נראים זהים, איך מבדילים ביניהם?" — הדוגמה המעובדת: שני נוסעים ששניהם נקראים דוד כהן, מובדלים רק לפי ה-id הייחודי שלהם.',
        },
        source: 'Airline CRM · Supabase deck',
      },
      {
        term: 'Foreign Key',
        definition: {
          en: '"Two separate tables. How do you connect a customer to a flight?" — solved via a third bookings table holding both ids (customer_id, flight_id).',
          he: '"שתי טבלאות נפרדות. איך מחברים לקוח לטיסה?" — נפתר דרך טבלת bookings שלישית שמחזיקה את שני ה-id-ים (customer_id, flight_id).',
        },
        source: 'Airline CRM · Supabase deck',
      },
      {
        term: 'Authentication (auth.uid())',
        definition: {
          en: "Authentication doesn't decide what you're allowed to see — it only proves who you are. Every logged-in user gets a unique id (auth.uid()) that becomes the security key.",
          he: 'אימות לא קובע מה מותר לך לראות — הוא רק מוכיח מי את. כל משתמש מחובר מקבל id ייחודי (auth.uid()) שהופך למפתח האבטחה.',
        },
        source: 'Airline CRM · Supabase deck',
      },
      {
        term: 'Row Level Security (RLS)',
        definition: {
          en: "The one rule that protects every customer's privacy — explained via a bank-account analogy: you walk into a bank and see only your own account, never anyone else's. Policy shown: auth.uid() == user_id.",
          he: 'החוק היחיד ששומר על הפרטיות של כל לקוח — מוסבר באמצעות אנלוגיית חשבון בנק: נכנסים לבנק ורואים רק את החשבון שלך, לעולם לא של מישהו אחר. המדיניות שמוצגת: auth.uid() == user_id.',
        },
        source: 'Airline CRM · Supabase deck',
      },
      {
        term: 'User Roles (Customer / Agent / Admin)',
        definition: {
          en: 'Three types of users, each sees a different world — a customer sees only their own bookings and profile, nothing else in the company.',
          he: 'שלושה סוגי משתמשים, כל אחד רואה עולם שונה — לקוח רואה רק את ההזמנות והפרופיל שלו, שום דבר אחר בחברה.',
        },
        source: 'Airline CRM · Supabase deck',
      },
    ],
  },
};
