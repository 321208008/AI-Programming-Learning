import './globals.css';
import { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: 'AI编程学院 - 零基础用AI开发项目',
  description: '无需编程经验，轻松开发项目。通过AI助手指导，从入门到精通，人人都能成为AI程序员。探索如何使用AI工具，轻松构建您的应用和项目。',
  keywords: [
    'AI编程', 'AI Programming',
    '人工智能', 'Artificial Intelligence',
    '机器学习', 'Machine Learning',
    '编程教程', 'Programming Tutorial',
    '在线学习', 'Online Learning',
    'AI课程', 'AI Courses',
    '编程培训', 'Programming Training',
    '技能提升', 'Skill Enhancement',
    '零基础编程', 'No-Code Development',
    'AI开发助手', 'AI Development Assistant',
    '无代码开发', 'No-Code Platform',
    '项目开发', 'Project Development',
    'AI工具', 'AI Tools',
    '智能编程', 'Smart Programming'
  ],
  authors: [{ name: 'AI编程学院' }],
  creator: '智能编程',
  publisher: '智能编程',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'AI编程学院',
    title: 'AI编程学院 - 零基础用AI开发项目',
    description: '无需编程经验，轻松开发项目。通过AI助手指导，从入门到精通，人人都能成为AI程序员。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI编程学院',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI编程学院 - 零基础用AI开发项目',
    description: '无需编程经验，轻松开发项目。通过AI助手指导，从入门到精通，人人都能成为AI程序员。',
    images: ['/og-image.png'],
    creator: '@smartprogramming',
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
    },
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
      </head>
      <body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}
      </body>
    </html>
  );
}