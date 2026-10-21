// ─── Hirelytics.ai – Site Content ──────────────────────────────────────────

export const SITE = {
  name: "Hirelytics.ai",
  tagline: "Smarter Hiring. Brighter Futures.",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.hirelytics.ai",
  bookDemoUrl: "/book-demo",
};

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
];

// ─── Hero ────────────────────────────────────────────────────────────────────
export const HERO = {
  headline: "Hire faster with AI that interviews for you.",
  subhead:
    "Hirelytics screens resumes, runs job-specific voice interviews and ranks candidates with an explainable scorecard, so your team spends time on the people who matter.",
  cta1: "Book a demo",
  cta2: "See how it works",
  badgeText: "🚀 Early-access program — limited seats available",
};

// ─── Problem Strip ────────────────────────────────────────────────────────────
export const PROBLEMS = [
  {
    icon: "FileX",
    title: "Manual screening doesn't scale",
    body: "Reading hundreds of resumes per role burns recruiter hours and introduces inconsistency. There's a better way.",
  },
  {
    icon: "MessageSquareX",
    title: "Generic interviews miss role fit",
    body: "One-size-fits-all questions can't probe the competencies that actually matter for each unique position.",
  },
  {
    icon: "LayoutDashboard",
    title: "Scattered tracking slows decisions",
    body: "Spreadsheets, email threads, and siloed notes mean feedback arrives too late — and candidates disengage.",
  },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = {
  heading: "From job post to shortlist — without the bottleneck.",
  steps: [
    {
      number: "01",
      title: "Post a role",
      body: "Paste or write your job description. Hirelytics extracts the competencies it should evaluate.",
    },
    {
      number: "02",
      title: "AI screens resumes",
      body: "Our LLM ranks applicants by semantic match against your JD — meaning over keywords.",
    },
    {
      number: "03",
      title: "Candidate assessment",
      body: "Shortlisted candidates complete auto-graded assessments tailored to the role.",
    },
    {
      number: "04",
      title: "AI voice interview",
      body: "Candidates complete a consent screen before the interview. Answers are scored against per-question rubrics with evidence quotes from their own words, with adaptive follow-ups and delivery insights; candidates never see scores.",
    },
    {
      number: "05",
      title: "Scorecard & decision",
      body: "A four-pillar explainable scorecard surfaces the strongest candidates. Your team decides who to hire.",
    },
  ],
};

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    id: "resume-matching",
    label: "Resume Intelligence",
    heading: "Semantic resume matching that understands context, not just keywords.",
    body: "Our LLM reads each CV the way a senior recruiter would — weighing experience depth, skill relevance, and career trajectory against your exact job description. No keyword-stuffing hacks.",
    bullets: [
      "Matches meaning, not just exact phrases",
      "Weighted against your JD's must-haves vs. nice-to-haves",
      "Ranked, explainable shortlist in seconds",
    ],
    mockupType: "resume" as const,
    flip: false,
  },
  {
    id: "ai-interviews",
    label: "AI Voice Interviews",
    heading: "Tailored AI voice interviews with per-question rubrics and adaptive follow-ups.",
    body: "Each interview question is generated with a rubric of key points, and answers are scored against it with an evidence quote from the candidate's own words. When a technical answer is vague, the AI asks an adaptive follow-up (limited per interview), while capturing delivery insights and integrity signals for human review.",
    bullets: [
      "Per-question rubrics scored with candidate evidence quotes from their own words",
      "Adaptive follow-ups when a technical answer is vague (limited per interview)",
      "Delivery insights: pace, pauses, and approximate filler words (informational and lightly weighted)",
      "Integrity signals (tab switches and focus loss) flagged for human review — signals, not proof of misconduct",
      "Candidate consent screen before the interview; candidates never see their scores",
    ],
    mockupType: "interview" as const,
    flip: true,
  },
  {
    id: "scorecard",
    label: "Four-Pillar Scorecard",
    heading: "Explainable scores across four dimensions that matter.",
    body: "Each candidate receives a weighted overall score built from four pillars. Every score comes with AI-generated insights — no black boxes.",
    bullets: [
      "Job Match • Programming Skills • Soft Skills • Technical Interview",
      "Weighted overall score with auto-shortlisting above threshold",
      "AI narrative explains every pillar rating",
    ],
    mockupType: "scorecard" as const,
    flip: false,
  },
  {
    id: "pipeline",
    label: "Pipeline & Analytics",
    heading: "Kanban pipeline, funnel analytics, and real-time notifications.",
    body: "Move candidates through stages visually, track where your funnel drops off, and get notified the moment a new top-scorer arrives.",
    bullets: [
      "Drag-and-drop Kanban pipeline",
      "Hiring funnel with stage-by-stage drop-off",
      "Real-time notifications for new applications",
    ],
    mockupType: "pipeline" as const,
    flip: true,
  },
];

// ─── Responsible AI ──────────────────────────────────────────────────────────
export const RESPONSIBLE_AI = {
  heading: "AI that assists. Humans who decide.",
  items: [
    {
      icon: "UserCheck",
      title: "Humans make the final call",
      body: "Hirelytics surfaces diagnostic signals and scores. Your team reviews the full transcript, rubric evidence, and chooses. AI never decides alone.",
    },
    {
      icon: "Shield",
      title: "Candidate consent & score privacy",
      body: "Candidates review a transparent consent screen before the interview begins. Candidates never see their scores or internal evaluation scorecards.",
    },
    {
      icon: "Lightbulb",
      title: "Per-question rubrics & evidence",
      body: "Each question generates a rubric of key points, and answers are scored against it with verbatim evidence quotes from the candidate's own words.",
    },
    {
      icon: "Eye",
      title: "Integrity signals, not proof",
      body: "Tab switches and focus loss are flagged for human review. These are provided as signals, not proof of misconduct.",
    },
  ],
};

// ─── Who It's For ─────────────────────────────────────────────────────────────
export const WHO_ITS_FOR = {
  heading: "Built for teams who hire seriously.",
  cards: [
    {
      icon: "Rocket",
      title: "Startups & SMEs",
      body: "Move fast on hiring without a full HR team. Get structured, consistent evaluation at a fraction of the cost.",
    },
    {
      icon: "Briefcase",
      title: "Recruitment agencies",
      body: "Handle high volumes across multiple client mandates with a single platform that keeps pipelines clean and clients happy.",
    },
    {
      icon: "Building2",
      title: "Enterprise & campus hiring",
      body: "Standardise evaluation across regions and departments. Role-based access keeps the right people in the loop.",
    },
  ],
};

// ─── Pricing Teaser ──────────────────────────────────────────────────────────
export const PRICING_TEASER = {
  heading: "Start for free. Scale when you're ready.",
  subhead: "No credit card required for the pilot. Full feature access from day one.",
  plans: [
    {
      name: "Early-access Pilot",
      price: "Free pilot",
      description: "Full platform access for qualifying early adopters. Limited seats.",
      features: [
        "Unlimited job postings",
        "AI resume screening",
        "AI voice interviews",
        "Four-pillar scorecards",
        "Kanban pipeline",
        "Email support",
      ],
      cta: "Apply for free pilot",
      href: "/book-demo",
      highlighted: false,
      badge: "Limited availability",
    },
    {
      name: "Growth",
      price: "Custom quote",
      description: "For teams hiring consistently across multiple roles.",
      features: [
        "Everything in Pilot",
        "Unlimited candidates",
        "Analytics dashboard",
        "Role-based access control",
        "Priority support",
        "Onboarding session",
      ],
      cta: "Get a quote",
      href: "/book-demo",
      highlighted: true,
      badge: "Most popular",
    },
    {
      name: "Enterprise",
      price: "Custom quote",
      description: "For large organisations and agencies with complex requirements.",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "ATS & HRIS integrations (coming soon)",
        "SSO & SAML (coming soon)",
        "Calendar scheduling (coming soon)",
        "SLA guarantees",
        "Custom onboarding",
      ],
      cta: "Talk to sales",
      href: "/book-demo",
      highlighted: false,
      badge: null,
    },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ = {
  heading: "Frequently asked questions",
  items: [
    {
      q: "Is Hirelytics an ATS?",
      a: "Hirelytics is an AI-powered hiring intelligence platform, not a traditional ATS. It focuses on evaluation quality — resume screening, AI voice interviews with per-question rubrics, and explainable scorecards. A Kanban pipeline is included, while ATS/HRIS integrations and calendar scheduling are coming soon on the roadmap.",
    },
    {
      q: "How are scores calculated?",
      a: "Each candidate receives scores across four pillars: Job Match (LLM semantic comparison), Programming Skills (auto-graded assessment), Soft Skills (informational delivery insights and communication clarity), and Technical Interview (per-question rubrics scored with candidate evidence quotes). A configurable weighted formula produces the overall score.",
    },
    {
      q: "Does a human make the hiring decision?",
      a: "Always. Hirelytics ranks and surfaces candidates alongside objective rubric evidence; your team reviews the scorecards, reads the AI rationales and candidate evidence quotes, and decides who to advance or hire. Integrity signals like tab switches are flagged for human review as signals, not proof of misconduct.",
    },
    {
      q: "What data do you store, and for how long?",
      a: "We store resume text, assessment answers, voice transcripts, and AI-generated scores. All data is tenant-isolated per company. Candidates complete a consent screen before the interview and never see their scores or internal evaluation scorecards. Retention periods are configurable in line with applicable privacy laws.",
    },
    {
      q: "Can we customise the interview questions?",
      a: "The AI generates questions tailored to your job description and candidate resume, each backed by a rubric of key points. Adaptive follow-ups are live to probe vague technical answers (limited per interview). Fully custom question bank builders remain on the roadmap.",
    },
    {
      q: "Which roles does Hirelytics suit best?",
      a: "Any role where a structured, repeatable evaluation process adds value — tech, finance, sales, operations, and more. The voice interview, rubric scoring, and delivery insights are particularly useful for technical and communication-heavy roles.",
    },
    {
      q: "How long does it take to get started?",
      a: "Most teams post their first role and receive screened candidates within a day of signing up. There's no complex integration required to begin.",
    },
    {
      q: "Do you integrate with our existing tools?",
      a: "ATS/HRIS integrations (Greenhouse, Lever, Workday), calendar scheduling, SSO, and shared cross-company assessments are coming soon on our public roadmap. If a specific integration is critical for you, let us know — it helps us prioritise.",
    },
  ],
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Smarter Hiring. Brighter Futures.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hirelytics-ai", icon: "Linkedin" },
    { label: "Twitter / X", href: "https://twitter.com/hireleticsai", icon: "Twitter" },
  ],
  copyright: `© ${new Date().getFullYear()} Hirelytics.ai. All rights reserved.`,
};

// ─── Product Page: Role-based Feature Tour & Roadmap ─────────────────────────
export const PRODUCT_TOUR = {
  header: {
    badge: "Platform Tour",
    title: "One intelligent platform. Three purpose-built experiences.",
    subtitle:
      "Explore how Hirelytics streamlines the hiring workflow for recruiters, candidates, and system administrators.",
  },
  roles: [
    {
      id: "recruiters",
      role: "Company Recruiters",
      tagline: "Structured evaluations with objective rubrics and human decision authority.",
      mockupType: "resume" as const,
      features: [
        {
          title: "Semantic Resume Matching",
          description:
            "Evaluates candidate depth, skill seniority, and relevance directly against your job description without relying on superficial keywords.",
        },
        {
          title: "Per-Question Rubrics & Evidence Quotes",
          description:
            "Each interview question is generated with a rubric of key points. Answers are scored against it with an evidence quote from the candidate's own words.",
        },
        {
          title: "Adaptive Follow-Ups",
          description:
            "When a technical answer is vague, the AI asks an adaptive follow-up (limited per interview) to allow the candidate to clarify.",
        },
        {
          title: "Informational Delivery Insights",
          description:
            "Pace, pauses, and approximate filler words are displayed as informational insights that are only lightly weighted.",
        },
        {
          title: "Integrity Signals for Review",
          description:
            "Tab switches and focus loss are flagged for human review. These are evaluated as signals, not proof of misconduct.",
        },
        {
          title: "Four-Pillar Explainable Scorecard",
          description:
            "Every candidate gets scored on Job Match, Programming, Soft Skills, and Technical Interview, complete with AI written reasoning.",
        },
        {
          title: "Visual Kanban Pipeline",
          description:
            "Track applicants through applied, screened, interview, and offer stages with drag-and-drop clarity and stage metrics.",
        },
      ],
    },
    {
      id: "candidates",
      role: "Candidates",
      tagline: "A fair, accessible, and fast interview journey with zero guesswork.",
      mockupType: "interview" as const,
      features: [
        {
          title: "Candidate Consent & Score Privacy",
          description:
            "Candidates review and confirm a clear consent screen before the interview begins. Candidates never see their scores or internal evaluation scorecards.",
        },
        {
          title: "Tailored Questions & Adaptive Follow-Ups",
          description:
            "Questions reflect your real experience and target role requirements. If an answer needs technical clarification, the AI asks a structured follow-up.",
        },
        {
          title: "Zero Biometric Bias",
          description:
            "No facial recognition, eye tracking, or appearance scoring. Evaluations focus purely on content, clarity, and competence.",
        },
        {
          title: "Flexible Async Participation",
          description:
            "Complete assessments and voice interviews from any modern browser whenever you are ready, without scheduling friction.",
        },
        {
          title: "Transparent Progress",
          description:
            "Prompt notification at every stage so candidates aren't left waiting in dark hiring voids.",
        },
      ],
    },
    {
      id: "admin",
      role: "Platform Admin",
      tagline: "Enterprise-grade governance, team access, and auditability.",
      mockupType: "scorecard" as const,
      features: [
        {
          title: "Role-Based Access Control (RBAC)",
          description:
            "Granular permission levels for recruiters, hiring managers, and organization administrators to manage jobs and candidate views.",
        },
        {
          title: "Tenant-Isolated Workspaces",
          description:
            "Data isolation guarantees that candidate profiles, interview audio, and scoring notes never leak across companies.",
        },
        {
          title: "Activity & Audit Logs",
          description:
            "Complete transparency on scorecard creation, status transitions, and user actions for hiring compliance.",
        },
        {
          title: "Security & Fallback Monitoring",
          description:
            "Real-time visibility into AI service uptime, fallback triggers, and evaluation pipeline health.",
        },
      ],
    },
  ],
  roadmap: {
    badge: "Coming Soon",
    title: "Product Roadmap",
    subtitle:
      "We are actively shipping new capabilities to deepen automation, integrations, and candidate engagement.",
    items: [
      {
        quarter: "Q2 2026",
        title: "ATS & HRIS Integrations",
        description:
          "Two-way synchronization with Greenhouse, Lever, and Workday to import job postings and push evaluated candidates seamlessly.",
        status: "In Development",
      },
      {
        quarter: "Q2 2026",
        title: "Shared Cross-Company Assessments",
        description:
          "Standardized, verified technical assessments that candidates can take once and share across participating employers.",
        status: "Planned",
      },
      {
        quarter: "Q3 2026",
        title: "Calendar Scheduling",
        description:
          "Direct recruiter and hiring team calendar synchronization with Google Calendar and Microsoft Outlook for post-interview debriefs.",
        status: "Planned",
      },
      {
        quarter: "Q3 2026",
        title: "Enterprise SSO & SAML",
        description:
          "Single sign-on integration with Okta, Azure AD, and Google Workspace for unified enterprise identity management.",
        status: "Roadmap",
      },
    ],
  },
};

// ─── How It Works Page: Vertical Timeline ────────────────────────────────────
export const HOW_IT_WORKS_TIMELINE = {
  header: {
    badge: "The Pipeline",
    title: "How Hirelytics Works",
    subtitle:
      "A structured end-to-end pipeline where AI accelerates analysis and humans retain final decision authority.",
  },
  stages: [
    {
      step: "01",
      name: "Role Configuration & JD Extraction",
      summary: "Set expectations and define evaluation benchmarks for the position.",
      aiRole:
        "Parses the job description, maps required competencies, identifies core technical must-haves versus nice-to-haves, and creates evaluation rubrics.",
      humanRole:
        "Reviews and adjusts extracted criteria, customizes weightings, sets score thresholds, and publishes the role.",
    },
    {
      step: "02",
      name: "Semantic Resume Intelligence",
      summary: "Screen high volumes of applicant resumes with contextual semantic understanding.",
      aiRole:
        "Analyzes applicant CVs against the role's competencies. Evaluates trajectory, depth, and relevance — ignoring keyword-stuffing hacks.",
      humanRole:
        "Reviews the ranked shortlist, inspects semantic match scores, and decides who advances to the assessment stage.",
    },
    {
      step: "03",
      name: "Role-Specific Technical Assessment",
      summary: "Verify real-world domain capabilities with targeted practical tasks.",
      aiRole:
        "Delivers auto-graded programming challenges or domain problem sets. Checks code execution, test cases, and edge-case handling.",
      humanRole:
        "Selects which assessment template to use, reviews candidate code submissions, and examines automated test breakdown.",
    },
    {
      step: "04",
      name: "AI Voice Interview, Rubrics & Adaptive Follow-Ups",
      summary: "Tailored voice interviews with per-question rubrics, adaptive follow-ups, and candidate consent.",
      aiRole:
        "Displays a candidate consent screen before starting (candidates never see their scores). Each question generates a rubric of key points, scoring answers alongside evidence quotes from the candidate's own words. When a technical answer is vague, asks an adaptive follow-up (limited per interview). Captures delivery insights on pace, pauses, and approximate filler counts (informational and lightly weighted), and flags integrity signals (tab switches and focus loss) for human review.",
      humanRole:
        "Inspects verbatim transcripts, audio playback, rubric evidence quotes, and delivery insights. Reviews flagged integrity signals as signals for review, not proof of misconduct, and retains full hiring authority.",
    },
    {
      step: "05",
      name: "Four-Pillar Scorecard Synthesis",
      summary: "Consolidate all evaluation data into an objective, explainable profile.",
      aiRole:
        "Aggregates Job Match, Programming Skills, Soft Skills, and Technical Interview into a weighted overall score accompanied by written explanatory rationale.",
      humanRole:
        "Reviews the complete breakdown, reviews candidates in team syncs, and makes the hiring decision. AI never accepts or rejects a candidate autonomously.",
    },
  ],
};

// ─── Pricing Page ─────────────────────────────────────────────────────────────
// TODO: Fill in real prices here
export const PRICING_PRICES = {
  pilot: {
    monthly: 0,
    display: "Free pilot",
    period: "during early access",
    subtext: "No credit card required. Full feature access.",
  },
  growth: {
    monthly: null, // TODO: Set monthly price (e.g., 299)
    display: "Custom quote",
    period: "billed annually or monthly",
    subtext: "Tailored to your hiring volume and team size.",
  },
  enterprise: {
    monthly: null, // TODO: Set enterprise price
    display: "Custom quote",
    period: "custom agreement",
    subtext: "Dedicated infrastructure, SLA, and enterprise onboarding.",
  },
};

export const PRICING_CONTENT = {
  header: {
    badge: "Transparent Pricing",
    title: "Simple, scalable plans for hiring teams",
    subtitle:
      "Join our early-access pilot program for free, or talk to us about custom packages for scaling teams and organizations.",
  },
  plans: [
    {
      id: "pilot",
      name: "Early-access Pilot",
      badge: "Limited availability",
      price: PRICING_PRICES.pilot.display,
      period: PRICING_PRICES.pilot.period,
      description:
        "Full platform capabilities for qualifying early adopters looking to supercharge candidate screening.",
      features: [
        "Unlimited active job postings",
        "Semantic AI resume screening",
        "AI voice interviews with Whisper",
        "Explainable 4-pillar scorecards",
        "Kanban applicant tracking",
        "Email & community support",
      ],
      cta: "Book a demo",
      href: "/book-demo",
      highlighted: false,
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most popular",
      price: PRICING_PRICES.growth.display,
      period: PRICING_PRICES.growth.period,
      description:
        "For scaling companies and high-growth startups hiring consistently across multiple functions.",
      features: [
        "Everything in Pilot",
        "High-volume candidate capacity",
        "Role-based access control (RBAC)",
        "Advanced funnel & drop-off analytics",
        "Priority email and chat support",
        "Personalized onboarding session",
      ],
      cta: "Book a demo",
      href: "/book-demo",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: null,
      price: PRICING_PRICES.enterprise.display,
      period: PRICING_PRICES.enterprise.period,
      description:
        "For large organizations and recruitment agencies needing dedicated account support and tailored SLAs.",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "ATS & HRIS integrations (coming soon)",
        "Enterprise SSO / SAML (coming soon)",
        "Calendar scheduling (coming soon)",
        "Custom SLA & uptime guarantee",
        "Tailored evaluation rubrics",
      ],
      cta: "Book a demo",
      href: "/book-demo",
      highlighted: false,
    },
  ],
  comparison: {
    title: "Compare plan features",
    subtitle: "Detailed breakdown of what is included across each Hirelytics tier.",
    categories: [
      {
        category: "Evaluation & AI Intelligence",
        rows: [
          { feature: "Semantic resume matching", pilot: true, growth: true, enterprise: true },
          { feature: "AI voice interviews with Whisper", pilot: true, growth: true, enterprise: true },
          { feature: "Per-question rubrics & evidence quotes", pilot: true, growth: true, enterprise: true },
          { feature: "Adaptive follow-up questions", pilot: true, growth: true, enterprise: true },
          { feature: "Delivery insights (pace, pauses, approx. fillers)", pilot: true, growth: true, enterprise: true },
          { feature: "Integrity signals (tab switch/focus review)", pilot: true, growth: true, enterprise: true },
          { feature: "Four-pillar explainable scorecard", pilot: true, growth: true, enterprise: true },
          { feature: "Shared cross-company assessments", pilot: "Roadmap", growth: "Roadmap", enterprise: "Roadmap" },
        ],
      },
      {
        category: "Candidate Experience",
        rows: [
          { feature: "Candidate consent screen & score privacy", pilot: true, growth: true, enterprise: true },
          { feature: "Zero biometric / facial scanning", pilot: true, growth: true, enterprise: true },
          { feature: "Async voice interview access", pilot: true, growth: true, enterprise: true },
          { feature: "Candidate status notifications", pilot: true, growth: true, enterprise: true },
        ],
      },
      {
        category: "Collaboration & Security",
        rows: [
          { feature: "Kanban pipeline board", pilot: true, growth: true, enterprise: true },
          { feature: "ATS & HRIS integrations", pilot: "Roadmap", growth: "Roadmap", enterprise: "Roadmap" },
          { feature: "Calendar scheduling", pilot: "Roadmap", growth: "Roadmap", enterprise: "Roadmap" },
          { feature: "Multi-tenant data isolation", pilot: true, growth: true, enterprise: true },
          { feature: "bcrypt passwords & JWT sessions", pilot: true, growth: true, enterprise: true },
          { feature: "Role-based access control (RBAC)", pilot: "Standard", growth: "Advanced", enterprise: "Custom" },
          { feature: "Single Sign-On (SSO / SAML)", pilot: "Roadmap", growth: "Roadmap", enterprise: "Priority" },
          { feature: "Audit trail logging", pilot: false, growth: true, enterprise: true },
        ],
      },
      {
        category: "Support & Services",
        rows: [
          { feature: "Support channel", pilot: "Email", growth: "Priority Email & Chat", enterprise: "Dedicated Slack / Rep" },
          { feature: "Onboarding assistance", pilot: "Self-serve", growth: "Guided 1-on-1", enterprise: "Custom Onboarding" },
          { feature: "SLA uptime guarantee", pilot: false, growth: false, enterprise: "99.9% SLA" },
        ],
      },
    ],
  },
};

// ─── Security & Responsible AI Page ──────────────────────────────────────────
export const SECURITY_CONTENT = {
  header: {
    badge: "Trust & Safety",
    title: "Security and Responsible AI",
    subtitle:
      "Built with strict engineering standards, transparent evaluations, and privacy by design. We only make statements we can prove.",
  },
  pillars: [
    {
      title: "Strong Password Hashing",
      badge: "bcrypt",
      description:
        "All user passwords are encrypted using industry-standard bcrypt hashing with salted rounds before ever touching our database.",
    },
    {
      title: "Expiring JWT Sessions",
      badge: "JWT",
      description:
        "Authentication is enforced via cryptographically signed JSON Web Tokens (JWT) with strict expiration windows and secure cookie handling.",
    },
    {
      title: "Role-Based Access Control",
      badge: "RBAC",
      description:
        "Granular access controls enforce separation of concerns between company recruiters, team reviewers, candidates, and platform admins.",
    },
    {
      title: "Per-Company Data Isolation",
      badge: "Tenant Isolation",
      description:
        "Customer workspaces are strictly isolated. No company can view, access, or query another organization's candidate profiles or scorecards.",
    },
    {
      title: "HTTPS Everywhere",
      badge: "TLS 1.3",
      description:
        "All traffic to and from Hirelytics is encrypted in transit using HTTPS/TLS 1.3, safeguarding audio streams and candidate records.",
    },
    {
      title: "Resilient AI Fallbacks",
      badge: "Graceful Fallbacks",
      description:
        "All external AI calls are wrapped with robust error handling and retry fallbacks to ensure interviews and evaluations fail safely and never halt workflows.",
    },
  ],
  responsibleAi: {
    title: "Responsible & Objective Evaluation",
    subtitle: "We believe AI should empower human discernment, not replace human judgment.",
    principles: [
      {
        title: "Human Final Decision",
        description:
          "Hirelytics provides ranking and diagnostic insights, but a human recruiter or hiring manager always makes the final decision to advance, offer, or decline.",
      },
      {
        title: "Candidate Consent & Score Privacy",
        description:
          "Candidates complete a transparent consent screen before the interview begins. Candidates never see their scores or internal evaluation scorecards.",
      },
      {
        title: "Per-Question Rubrics & Evidence Quotes",
        description:
          "Each interview question is generated with an objective rubric of key points. Answers are scored against it with verbatim evidence quotes from the candidate's own words.",
      },
      {
        title: "Adaptive Follow-Ups",
        description:
          "When a technical answer is vague, the AI asks a structured follow-up (strictly limited per interview) to allow the candidate to clarify.",
      },
      {
        title: "Integrity Signals, Not Proof",
        description:
          "Tab switches and focus loss are flagged for human review. These are explicitly surfaced as signals, not proof of misconduct.",
      },
      {
        title: "Informational Delivery Insights",
        description:
          "Pace, pauses, and approximate filler words are shown as informational metrics that are only lightly weighted, avoiding penalization of individual speech patterns.",
      },
      {
        title: "Zero Facial or Biometric Analysis",
        description:
          "We do not capture or analyze facial expressions, micro-movements, eye contact, gender, age, or ethnic characteristics. Only speech content and transcription clarity are evaluated.",
      },
      {
        title: "Objective Multi-Source Scoring",
        description:
          "Candidate scores are derived exclusively from verified inputs: resume content, standardized assessment results, and voice interview transcripts.",
      },
    ],
  },
  legalDraft: {
    badge: "Draft – Needs Legal Review",
    title: "Data and Privacy Notice",
    body: [
      "Hirelytics processes candidate data solely on behalf of the customer organization that publishes the job posting (the data controller). Candidate data is retained only for the duration specified by the hiring organization or required by applicable legal obligations.",
      "We do not sell candidate data, and we do not use proprietary customer resumes or interview audio to train generalized public machine learning models without express consent.",
      "Candidates have the right to request access to their submitted information and request deletion of their data in accordance with relevant privacy frameworks.",
    ],
  },
};

// ─── About Page ──────────────────────────────────────────────────────────────
export const ABOUT_CONTENT = {
  header: {
    badge: "Our Story",
    title: "Building the future of fair and intelligent recruitment",
    subtitle:
      "Hirelytics was created to eliminate recruitment bottlenecks and replace guesswork with explainable, candidate-centric intelligence.",
  },
  mission: {
    title: "Our Mission",
    statement:
      "To help companies hire faster and fairer through explainable AI that interviews, assesses, and respects human talent.",
    subtext:
      "We envision a world where hiring decisions are founded on demonstrated capability and structured evaluation, rather than buzzword matching and manual fatigue.",
  },
  theProblem: {
    title: "The Problem We Saw",
    paragraphs: [
      "Modern job openings receive hundreds of applicants within hours. Traditional recruiters are forced to skim resumes in six seconds, relying on keyword searches or elite pedigree filters that overlook capable candidates.",
      "Meanwhile, one-way video interviews and generic screening forms frustrate applicants while failing to test actual job-relevant competencies.",
      "We realized that by combining LLM-powered semantic understanding with asynchronous voice interviews and explainable scorecards, hiring teams could review candidates with deep context in a fraction of the time.",
    ],
  },
  originStory: {
    title: "Academic Roots & Engineering Passion",
    badge: "Indus University Project",
    body:
      "Hirelytics was originally conceived and built by computer science students at Indus University as a Software Group Project. Driven by our own experiences as candidates and aspiring software engineers, we designed an architecture focused on engineering rigor, reliable AI pipelines, and strict fairness benchmarks. Today, that foundational prototype is evolving into a full-scale AI recruitment platform.",
  },
  team: {
    title: "The Team",
    subtitle: "Passionate engineers and builders behind Hirelytics.",
    members: [
      {
        name: "Core Engineering Team",
        role: "Software Engineering & Architecture",
        institution: "Indus University",
        bio: "Focused on scalable distributed services, Next.js architecture, and multi-tenant cloud security.",
      },
      {
        name: "AI & ML Pipeline Team",
        role: "LLM Orchestration & Audio Systems",
        institution: "Indus University",
        bio: "Specializing in Whisper voice transcription, prompt engineering, and semantic resume matching.",
      },
      {
        name: "Product & UI/UX Design",
        role: "Design Systems & Experience",
        institution: "Indus University",
        bio: "Crafting modern, accessible, and intuitive interfaces for recruiters and candidates alike.",
      },
    ],
  },
};

// ─── Book Demo Page ──────────────────────────────────────────────────────────
export const BOOK_DEMO_CONTENT = {
  header: {
    badge: "Schedule a Demo",
    title: "See Hirelytics in action",
    subtitle:
      "Discover how AI voice interviews and explainable scorecards can transform your team's recruitment speed and quality.",
  },
  whatToExpect: {
    title: "What to expect on your 30-min call:",
    points: [
      {
        title: "Live Walkthrough",
        description:
          "Experience a real-time simulation of semantic resume screening and our tailored voice interview engine.",
      },
      {
        title: "Scorecard Inspection",
        description:
          "See how our four-pillar scorecard provides explainable ratings and actionable hiring rationales.",
      },
      {
        title: "Workflow Mapping",
        description:
          "Discuss your hiring volume, role requirements, and how Hirelytics fits alongside your current ATS setup.",
      },
      {
        title: "Early-Access Pilot Setup",
        description:
          "Get immediate access to our free pilot program with dedicated onboarding support.",
      },
    ],
    stats: [
      { label: "Screening Speedup", value: "10x" },
      { label: "Setup Time", value: "<24h" },
      { label: "Credit Card Needed", value: "None" },
    ],
  },
  form: {
    title: "Request a personalized demo",
    subtitle: "Fill out the details below and we'll reach out within one business day.",
    successTitle: "Demo Request Received!",
    successMessage:
      "Thank you for your interest in Hirelytics. We've sent a confirmation to your work email and our team will get in touch shortly to schedule your session.",
  },
};

// ─── Legal Pages (Privacy & Terms) ───────────────────────────────────────────
export const LEGAL_PAGES = {
  privacy: {
    badge: "Draft – Pending Legal Review",
    title: "Privacy Policy",
    lastUpdated: "October 2026",
    intro:
      "This Privacy Policy outlines how Hirelytics.ai (\"Hirelytics\", \"we\", \"us\") collects, uses, and safeguards information when organizations and candidates interact with our platform.",
    sections: [
      {
        heading: "1. Information We Collect",
        content:
          "We collect information provided directly by organizations (account details, job descriptions, evaluation criteria) and candidates (contact info, resumes, answers to assessments, and audio recordings/transcripts of voice interviews).",
      },
      {
        heading: "2. How Information is Used",
        content:
          "Information is used solely to facilitate candidate screening, assessment grading, voice interview transcription, and scorecard generation on behalf of the customer organization. We do not sell personal data to third parties.",
      },
      {
        heading: "3. No Biometric or Facial Processing",
        content:
          "Hirelytics does not perform biometric facial recognition, emotion tracking, or eye-tracking analysis. Interview evaluation is limited strictly to speech transcripts and technical responses.",
      },
      {
        heading: "4. Multi-Tenant Data Isolation",
        content:
          "All customer data is partitioned in tenant-isolated stores. We do not train generalized public machine learning models on customer candidate data without explicit written consent.",
      },
      {
        heading: "5. Data Retention & Deletion",
        content:
          "We retain data in accordance with the hiring organization's instructions or applicable legal standards. Candidates may submit requests for data access or erasure through their prospective employer or directly to hirelytics.ai@gmail.com.",
      },
    ],
  },
  terms: {
    badge: "Draft – Pending Legal Review",
    title: "Terms of Service",
    lastUpdated: "October 2026",
    intro:
      "These Terms of Service govern your access to and use of Hirelytics.ai. By using our platform, you agree to comply with these terms.",
    sections: [
      {
        heading: "1. Use of the Service",
        content:
          "Organizations may use Hirelytics to manage recruitment pipelines, screen resumes, and conduct candidate interviews in compliance with all relevant labor and non-discrimination regulations.",
      },
      {
        heading: "2. Human-in-the-Loop Decision Authority",
        content:
          "Hirelytics operates as an analytical decision-support tool. The hiring organization explicitly acknowledges that all final hiring, advancement, and rejection decisions remain solely the responsibility of the organization's human representatives.",
      },
      {
        heading: "3. Account Security",
        content:
          "Users are responsible for safeguarding login credentials and maintaining the confidentiality of their session tokens. Promptly notify us of any unauthorized account activity.",
      },
      {
        heading: "4. Intellectual Property",
        content:
          "Hirelytics and its associated algorithms, design systems, and software belong exclusively to Hirelytics.ai and its licensors. Customer data remains the property of the customer.",
      },
      {
        heading: "5. Disclaimer of Warranties",
        content:
          "During early-access pilot phases, the service is provided on an 'as-is' and 'as-available' basis without warranties of any kind, whether express or implied.",
      },
    ],
  },
};

// ─── Careers Page ─────────────────────────────────────────────────────────────
export const CAREERS_CONTENT = {
  header: {
    badge: "Join the Team",
    title: "Help us build the future of hiring.",
    subtitle:
      "We're a small, ambitious team of engineers and designers who believe AI can make recruitment fairer, faster, and more human — not less. Come build with us.",
  },
  mission: {
    title: "Our Mission",
    body: "We're building AI that gives every candidate a fair shot and every company a clearer signal. If you care deeply about fairness, engineering rigor, and building tools that actually get used — we want to talk.",
  },
  values: [
    {
      emoji: "🔬",
      title: "Engineering Rigor",
      description:
        "We care about correctness, test coverage, and systems that hold up under real-world pressure — not demos that break at 10 users.",
    },
    {
      emoji: "⚖️",
      title: "Fairness First",
      description:
        "Our AI pipeline is designed with explicit bias benchmarks. We debate evaluation rubrics, not just click-through rates.",
    },
    {
      emoji: "🚢",
      title: "Ship Fast, Learn Faster",
      description:
        "We run as a lean team. Your work ships quickly, you see the impact, and you iterate. No 6-month approval cycles.",
    },
    {
      emoji: "🤝",
      title: "Humans in the Loop",
      description:
        "We build AI decision-support tools — not autonomous agents that fire people. Recruiters and hiring managers remain in control.",
    },
  ],
  openings: [
    {
      id: "fullstack-engineer",
      title: "Full-Stack Engineer",
      type: "Full-time · Remote",
      department: "Engineering",
      description:
        "Build features across our Next.js frontend and Node.js backend. Own end-to-end delivery of recruiting pipeline features — from the Kanban board to the voice interview flow.",
      requirements: [
        "3+ years with React / Next.js (App Router)",
        "Strong TypeScript skills",
        "Experience with REST APIs and PostgreSQL or similar",
        "Care about accessibility and performance",
      ],
    },
    {
      id: "ml-engineer",
      title: "ML / LLM Engineer",
      type: "Full-time · Remote",
      department: "AI & ML",
      description:
        "Own our LLM orchestration pipeline — from resume semantic matching to per-question rubric scoring and adaptive follow-up generation.",
      requirements: [
        "Experience prompting or fine-tuning LLMs (OpenAI, Anthropic, or open-source)",
        "Familiarity with RAG patterns and embedding stores",
        "Python proficiency with FastAPI or similar",
        "Understanding of bias detection in NLP outputs",
      ],
    },
    {
      id: "product-designer",
      title: "Product Designer",
      type: "Part-time / Contract · Remote",
      department: "Design",
      description:
        "Design the recruiter dashboard, candidate interview UI, and scorecard experience. We care deeply about clarity, accessibility, and making complex AI outputs readable.",
      requirements: [
        "Portfolio showcasing web product design",
        "Figma expertise",
        "Experience designing data-heavy dashboards",
        "Interest in AI and ethical product design",
      ],
    },
  ],
  noRoleCta: {
    title: "Don't see your role?",
    body: "We're always interested in exceptional people. Send us a note — tell us what you'd build here.",
    email: "hirelytics.ai@gmail.com",
  },
  perks: [
    { emoji: "🌍", label: "Fully remote" },
    { emoji: "🎓", label: "Learning budget" },
    { emoji: "🚀", label: "Early-stage equity" },
    { emoji: "🕐", label: "Flexible hours" },
    { emoji: "🤖", label: "AI tools covered" },
    { emoji: "📣", label: "Real ownership" },
  ],
};

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const CONTACT_CONTENT = {
  header: {
    badge: "Get in Touch",
    title: "We'd love to hear from you.",
    subtitle:
      "Whether you're a recruiter evaluating Hirelytics, a candidate with a question, or a developer interested in joining us — reach out and we'll respond within one business day.",
  },
  channels: [
    {
      icon: "Mail",
      title: "General Enquiries",
      description: "Questions about the platform, pricing, or early access.",
      contact: "hirelytics.ai@gmail.com",
      href: "mailto:hirelytics.ai@gmail.com",
      cta: "Send an email",
    },
    {
      icon: "Briefcase",
      title: "Demo Requests",
      description: "Book a live 30-minute walkthrough with the team.",
      contact: "Schedule via our booking page",
      href: "/book-demo",
      cta: "Book a demo",
    },
    {
      icon: "Shield",
      title: "Security & Privacy",
      description: "Report vulnerabilities or request data deletion.",
      contact: "hirelytics.ai@gmail.com",
      href: "mailto:hirelytics.ai@gmail.com",
      cta: "Contact security team",
    },
    {
      icon: "Users",
      title: "Careers",
      description: "Interested in joining the team? We'd love to chat.",
      contact: "See open roles",
      href: "/careers",
      cta: "View openings",
    },
  ],
  social: [
    {
      label: "LinkedIn",
      handle: "@hirelytics-ai",
      href: "https://www.linkedin.com/company/hirelytics-ai",
    },
    {
      label: "Twitter / X",
      handle: "@hireleticsai",
      href: "https://twitter.com/hireleticsai",
    },
  ],
  faq: [
    {
      q: "How quickly do you respond?",
      a: "We aim to reply to all enquiries within one business day. Demo requests are typically acknowledged within a few hours.",
    },
    {
      q: "I'm a candidate — who do I contact?",
      a: "Candidates are screened on behalf of the hiring company. For questions about your application status, please contact the company you applied to. For platform concerns or data requests, email us directly.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes — our early-access pilot is free with a limited number of seats. Book a demo and we'll walk you through the setup.",
    },
  ],
};
