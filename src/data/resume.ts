export const DATA = {
  personal: {
    name: 'Ishan Gupta',
    title: 'Full Stack Developer',
    subtitle: 'B.Tech IT Student · AWS Certified · AI Enthusiast',
    email: 'gishan750@gmail.com',
    phone: '+91-9451467338',
    location: 'Ghaziabad, Uttar Pradesh',
    github: 'https://github.com/Ishan15coder',
    linkedin: 'https://www.linkedin.com/in/ishan1545/',
    resumeUrl: 'https://drive.google.com/file/d/1Q7u0sTnYa5SjyaFOceo7yH_gNPtZYrL2/view?usp=sharing', // Replace with your hosted PDF URL
    summary:
      "I'm a detail-oriented B.Tech Information Technology student with hands-on experience developing and deploying AI-powered full-stack web applications using Next.js, TypeScript, React.js, and Firebase. I've solved 500+ DSA problems and hold three AWS certifications including CloudOps Engineer. I'm passionate about building scalable, user-centric products and actively seeking software engineering internship and entry-level opportunities.",
    tagline: 'Building AI-powered experiences that scale.',
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

  skills: [
    {
      category: 'Programming Languages',
      icon: '💻',
      color: '#6366f1',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frontend Development',
      icon: '🎨',
      color: '#8b5cf6',
      items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend & APIs',
      icon: '⚙️',
      color: '#06b6d4',
      items: ['Node.js', 'REST APIs', 'Firebase Authentication', 'Firebase Cloud Firestore'],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#10b981',
      items: ['AWS (EC2, S3, CloudWatch, IAM)', 'Git', 'GitHub', 'CI/CD Pipelines', 'Vercel', 'Netlify'],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      color: '#f59e0b',
      items: ['Firebase Firestore', 'NoSQL'],
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
      github: 'https://github.com/Ishan15coder',
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

  competitiveProgramming: {
    platforms: [
      {
        name: 'CodeChef',
        rating: '1439',
        badge: '2 Star',
        detail: 'Maximum rating 1439',
        icon: '⭐⭐',
        color: '#f59e0b',
        url: 'https://www.codechef.com/users/ishan1545',
      },
      {
        name: 'Codeforces',
        rating: '200+',
        badge: 'Active',
        detail: '200+ problems solved, consistent rated contest participation',
        icon: '🔵',
        color: '#1e40af',
        url: 'https://codeforces.com/profile/Ishan15_45',
      },
      {
        name: 'LeetCode',
        rating: '500+',
        badge: 'Multi-platform',
        detail: '500+ DSA problems solved across LeetCode, CodeChef, and Codeforces',
        icon: '🟠',
        color: '#ea580c',
        url: 'https://leetcode.com/u/9ki7hjbRKp/',
      },
    ],
    totalSolved: '500+',
    highlight: 'Solved 500+ Data Structures and Algorithms problems across LeetCode, CodeChef, and Codeforces.',
  },
}
