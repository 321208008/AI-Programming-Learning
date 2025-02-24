export default {
  brand: {
    name: 'AI 编程学院',
    slogan: '让每个人都能用 AI 开发项目，无需编程基础'
  },
  nav: {
    home: '首页'
  },
  auth: {
    login: '登录',
    register: '免费注册',
    loginTitle: '登录账号',
    loginWelcome: '欢迎回到 AI Learning Hub',
    registerTitle: '注册账号',
    registerWelcome: '创建您的 AI Learning Hub 账号',
    email: '邮箱',
    password: '密码',
    name: '姓名',
    loginButton: '登录',
    registerButton: '注册',
    loginLoading: '登录中...',
    registerLoading: '注册中...',
    haveAccount: '已有账号？',
    noAccount: '还没有账号？',
    goToLogin: '立即登录',
    goToRegister: '立即注册',
    errors: {
      loginFailed: '邮箱或密码错误',
      loginError: '登录过程中出现错误',
      registerFailed: '注册失败',
      registerError: '注册过程中出现错误',
      emailExists: '该邮箱已被注册'
    }
  },
  profile: {
    title: '个人资料',
    defaultName: '用户',
    logout: '退出登录'
  },
  hero: {
    title: '零基础也能用 AI 开发项目',
    description: '无需编程经验，从入门到精通。通过 AI 助手指导，轻松构建您的项目。人人都能成为AI程序员，开启您的AI开发之旅。',
    cta: '立即赞助',
    browse: '浏览课程',
    stats: {
      courses: '课程数量',
      students: '在学学员',
      projects: '实践项目',
      satisfaction: '好评率'
    }
  },
  search: {
    placeholder: '搜索视频...',
  },
  categories: {
    all: '所有分类',
    basics: 'AI基础',
    ml: '机器学习',
    nlp: '自然语言处理',
    cv: '计算机视觉',
  },
  footer: {
    links: {
      about: '关于我们',
      contact: '联系我们',
      terms: '服务条款',
      privacy: '隐私政策'
    },
    social: {
      github: 'GitHub',
      twitter: 'Twitter',
      discord: 'Discord社区'
    },
    copyright: '© 2024 AI Programming Learning. 保留所有权利。'
  }
} as const; 