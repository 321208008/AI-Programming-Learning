export default {
  brand: {
    name: 'AI Programming Academy',
    slogan: 'Build Projects with AI - No Coding Experience Required'
  },
  nav: {
    home: 'Home'
  },
  auth: {
    login: 'Login',
    register: 'Sign up free',
    loginTitle: 'Login to your account',
    loginWelcome: 'Welcome back to AI Learning Hub',
    registerTitle: 'Create an account',
    registerWelcome: 'Join AI Learning Hub today',
    email: 'Email',
    password: 'Password',
    name: 'Name',
    loginButton: 'Login',
    registerButton: 'Sign up',
    loginLoading: 'Logging in...',
    registerLoading: 'Signing up...',
    haveAccount: 'Already have an account?',
    noAccount: "Don't have an account?",
    goToLogin: 'Login now',
    goToRegister: 'Sign up now',
    errors: {
      loginFailed: 'Invalid email or password',
      loginError: 'An error occurred during login',
      registerFailed: 'Registration failed',
      registerError: 'An error occurred during registration',
      emailExists: 'This email is already registered'
    }
  },
  profile: {
    title: 'Profile',
    defaultName: 'User',
    logout: 'Sign out'
  },
  hero: {
    title: 'Build Projects with AI, Zero Coding Required',
    description: 'No programming experience needed. From beginner to pro, let AI assistants guide you through project development. Anyone can become an AI developer - start your journey today.',
    cta: 'Sponsor Now',
    browse: 'Browse Courses',
    stats: {
      courses: 'Courses',
      students: 'Students',
      projects: 'Projects',
      satisfaction: 'Satisfaction'
    }
  },
  search: {
    placeholder: 'Search videos...',
  },
  categories: {
    all: 'All Categories',
    basics: 'AI Basics',
    ml: 'Machine Learning',
    nlp: 'Natural Language Processing',
    cv: 'Computer Vision',
  },
  footer: {
    links: {
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy'
    },
    social: {
      github: 'GitHub',
      twitter: 'Twitter',
      discord: 'Discord Community'
    },
    copyright: '© 2024 AI Programming Learning. All rights reserved.'
  }
} as const; 