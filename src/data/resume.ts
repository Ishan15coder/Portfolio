export const DATA = {
  personal: {
    name: 'Ishan Gupta',
    title: 'Full Stack Developer',
    subtitle: '3rd-Year B.Tech IT Student · AWS Certified · Competitive Programmer',
    email: 'gishan750@gmail.com',
    phone: '+91-9451467338',
    location: 'Ghaziabad, Uttar Pradesh',
    github: 'https://github.com/Ishan15coder',
    linkedin: 'https://www.linkedin.com/in/ishan1545/',
    resumeUrl: 'https://drive.google.com/file/d/1gC4I88ogQwUDqqx3SOQ382ee_yVwqNtp/view?usp=sharing',
    summary:
      "I'm a third-year B.Tech Information Technology student at KIET and Full Stack Developer with hands-on experience building and deploying scalable web applications using React, Next.js, TypeScript, Node.js, and PostgreSQL. I've solved 700+ DSA problems across Codeforces, CodeChef, and LeetCode, and hold 3 AWS certifications including CloudOps Engineer. Passionate about software engineering, high-performance architectures, and real-world problem solving.",
    tagline: 'Building scalable, high-performance web systems.',
  },

  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'KIET Group of Institutions',
      location: 'Ghaziabad, Uttar Pradesh',
      duration: 'Aug 2024 – Present',
      score: 'CGPA: 8.29',
      type: 'University',
    },
    {
      degree: 'Class XII – Science (CBSE)',
      institution: 'Dr. Virendra Swarup Education Centre',
      location: 'Kanpur',
      duration: '2024',
      score: '86%',
      type: 'School',
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'Dr. Virendra Swarup Education Centre',
      location: 'Kanpur',
      duration: '2022',
      score: '94.8%',
      type: 'School',
    },
  ],

  milestones: [
    { year: '2022', title: 'Class X', desc: 'Scored 94.8% — built a strong academic and mathematical foundation.' },
    { year: '2024', title: 'Class XII', desc: 'Scored 86% in Science stream (CBSE) from Kanpur.' },
    { year: 'Aug 2024', title: 'B.Tech in IT Begins', desc: 'Started Information Technology at KIET Group of Institutions (Current CGPA: 8.29).' },
    { year: '2025', title: 'AWS Certifications', desc: 'Earned AWS Certified Cloud Practitioner and AWS Certified AI Practitioner.' },
    { year: '2025', title: 'CureMe AI & NexEvent', desc: 'Developed and shipped an AI healthcare companion and full-stack event ticketing platform.' },
    { year: '2026', title: 'ICPC India Preliminary 2026', desc: 'Ranked 756 nationwide (3rd among KIET teams) with team "The Recursives" solving 5 problems.' },
    { year: '2026', title: 'MatchPulse & CloudOps Associate', desc: 'Shipped football analytics simulation platform & achieved AWS Certified CloudOps Engineer – Associate.' },
  ],

  skills: [
    {
      category: 'Programming Languages',
      icon: '💻',
      color: '#6366f1',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Frontend Development',
      icon: '🎨',
      color: '#8b5cf6',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend & APIs',
      icon: '⚙️',
      color: '#06b6d4',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'Firebase Authentication', 'Firebase Cloud Firestore'],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      color: '#f59e0b',
      items: ['PostgreSQL', 'MongoDB', 'SQL', 'Firebase Firestore', 'NoSQL'],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#10b981',
      items: ['AWS (EC2, S3, CloudWatch, IAM)', 'Git', 'GitHub', 'CI/CD Pipelines', 'Vercel', 'Render', 'Netlify'],
    },
    {
      category: 'Core CS Concepts',
      icon: '🧠',
      color: '#ef4444',
      items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'Authentication & Authorization Systems'],
    },
  ],

  projects: [
    {
      id: 'matchpulse',
      title: 'MatchPulse',
      subtitle: 'Football Analytics & Monte Carlo Simulation Platform',
      description:
        'A football analytics platform that provides statistical insights, league standings, match probability projections, and Monte Carlo-based match simulations across major European football competitions.',
      problem:
        'Traditional football stats portals offer static tables without predictive modeling or schedule-aware depth. MatchPulse delivers predictive modeling using Poisson distributions and Monte Carlo simulations alongside custom multi-criteria sorting to evaluate team performance and upcoming fixtures.',
      technologies: [
        'React.js',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'TanStack Query',
        'Node.js',
        'Express.js',
        'PostgreSQL',
      ],
      features: [
        'Football analytics across the Premier League, La Liga, Serie A, and Champions League',
        'Monte Carlo simulations for match outcome projections',
        'Poisson-based match probability calculations',
        'Match odds and probability distributions',
        'League standings and statistical projections',
        'Custom multi-criteria sorting using kickoff schedules and league standings',
        'REST APIs with validation and parameterized SQL aggregations',
      ],
      github: 'https://github.com/Ishan15coder/MatchPulse15',
      liveDemo: 'https://match-pulse15.vercel.app',
      tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'TanStack Query', 'Full-Stack'],
      gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    },
    {
      id: 'nexevent',
      title: 'NexEvent',
      subtitle: 'Full-Stack Event Booking Platform',
      description:
        'A full-stack event booking platform with role-based access control across a React frontend and a RESTful Express API, featuring 2FA via OTP email verification, an Admin Dashboard with real-time queue management, and deployment on Vercel and Render with CI/CD via GitHub.',
      problem:
        'Event booking systems often lack secure, role-based workflows and reliable real-time management. NexEvent solves this with JWT-protected endpoints, 2FA authentication flows, and optimistic UI updates to deliver a seamless experience for both users and admins.',
      technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Render', 'Vercel'],
      features: [
        'Built a full-stack event booking platform with role-based access control across a React frontend and a RESTful Express API with 15+ JWT-protected endpoints',
        'Implemented 2FA via OTP email verification (Nodemailer) securing registration, login, and booking flows',
        'Built an Admin Dashboard with real-time queue management and optimistic UI updates',
        'Deployed on Vercel (Frontend) and Render (Backend) with CI/CD via GitHub',
        'Configured SPA routing and a keep-alive cron job for consistent uptime on the free tier',
      ],
      github: 'https://github.com/Ishan15coder/Nexevent',
      liveDemo: 'https://nexevent-chi.vercel.app/',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Full-Stack'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    },
    {
      id: 'curemeai',
      title: 'CureMe AI',
      subtitle: 'AI-Powered Health Companion',
      description:
        'A full-stack AI health companion web app that delivers personalised guidance for four chronic conditions — Diabetes, PCOS, Hypertension, and General Wellness — by combining a user health profile with context-aware Gemini API responses.',
      problem:
        'Generic health information fails patients with chronic conditions. CureMe AI bridges that gap by tailoring medical guidance to each user\'s complete health history, medications, and allergies.',
      technologies: ['Next.js', 'TypeScript', 'React.js', 'Firebase', 'Gemini API', 'Vercel'],
      features: [
        'Context-aware health responses via Google Gemini API using condition-specific prompt templates',
        'Secure auth with Email/Password + Google OAuth via Firebase Authentication',
        'Real-time chat history persistence using Cloud Firestore',
        'Dynamic 3-step onboarding health survey for recommendation personalisation',
        'Deployed on Vercel with automated CI/CD and environment variable-based config',
      ],
      github: 'https://github.com/Ishan15coder/cureme',
      liveDemo: 'https://cureme-eight.vercel.app/',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Gemini API', 'AI', 'Healthcare'],
      gradient: 'from-indigo-500 via-purple-500 to-cyan-500',
    },
  ],

  certifications: [
    {
      title: 'AWS Certified CloudOps Engineer – Associate',
      issuer: 'Amazon Web Services (AWS)',
      year: '2026',
      icon: '☁️',
      color: '#f59e0b',
    },
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      icon: '🤖',
      color: '#8b5cf6',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      icon: '🏅',
      color: '#06b6d4',
    },
  ],

  achievements: [
    {
      id: 'icpc-2026',
      title: 'ICPC India Preliminary Contest 2026',
      event: 'International Collegiate Programming Contest',
      team: 'The Recursives',
      overallRank: '756',
      collegeRank: '3rd among KIET teams',
      problemsSolved: 5,
      year: '2026',
      summary:
        'Solved 5 algorithmic problems under intense competitive constraints, securing Rank 756 nationwide and placing 3rd among all competing teams from KIET Group of Institutions.',
    },
  ],

  competitiveProgramming: {
    platforms: [
      {
        name: 'Codeforces',
        rating: '1250',
        badge: 'Pupil',
        detail: 'Pupil (Peak 1250), 200+ problems solved, consistent rated contest participation',
        icon: '🔵',
        color: '#1e40af',
        url: 'https://codeforces.com/profile/Ishan15_45',
      },
      {
        name: 'CodeChef',
        rating: '1439',
        badge: '2 Star',
        detail: 'Peak rating 1439, 2-Star rated competitive programmer',
        icon: '⭐⭐',
        color: '#f59e0b',
        url: 'https://www.codechef.com/users/ishan1545',
      },
      {
        name: 'LeetCode',
        rating: '700+',
        badge: 'Multi-platform',
        detail: '700+ DSA problems solved across LeetCode, Codeforces, and CodeChef',
        icon: '🟠',
        color: '#ea580c',
        url: 'https://leetcode.com/u/9ki7hjbRKp/',
      },
    ],
    totalSolved: '700+',
    highlight: 'Solved 700+ Data Structures and Algorithms problems across Codeforces, CodeChef, and LeetCode.',
  },
}
