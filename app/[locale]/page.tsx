"use client";

import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-client";
import { Github, Twitter, MessageCircle, Globe } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const getLocalizedVideos = (locale: string) => [
  {
    id: 1,
    title: locale === 'zh' ? "新手学习AI编程系列一" : "Beginner's Guide to AI Programming Series Part 1",
    description: locale === 'zh' 
      ? "基于AI编程工具搭建网站基本框架" 
      : "Build the basic framework of the website based on AI programming tools",
    thumbnail: "https://img.52wts.cn/wp-content/uploads/2025/02/07dbb2a7f9fae78.png",
    category: "AI Programming",
    duration: "15:05",
    videoUrl: "https://www.youtube.com/watch?v=Le5kmwRxFn4"
  },
  {
    id: 2,
    title: locale === 'zh' ? "新手学习AI编程系列二" : "Beginner's Guide to AI Programming Series Part 2",
    description: locale === 'zh'
      ? "基于AI编程软件增加网站首页的精美UI布局"
      : "Add beautiful UI layout to website homepage based on AI programming software",
    thumbnail: "https://img.52wts.cn/wp-content/uploads/2025/02/8359df21218d3ea.png",
    category: "AI Programming",
    duration: "18:54",
    videoUrl: "https://www.youtube.com/watch?v=2Ux5dS-INC4"
  },
  {
    id: 3,
    title: locale === 'zh' ? "新手学习AI编程系列三" : "Beginner's Guide to AI Programming Series Part 3",
    description: locale === 'zh'
      ? "基于AI编程软件实现网站的视频播放功能"
      : "Master NLP techniques and build intelligent language applications.",
    thumbnail: "https://img.52wts.cn/wp-content/uploads/2025/02/60ebd1887ab5060.png",
    category: "AI Programming",
    duration: "22:28",
    videoUrl: "https://www.youtube.com/watch?v=04w8dflROmM"
  },
  {
    id: 4,
    title: locale === 'zh' ? "新手学习AI编程系列四" : "Beginner's Guide to AI Programming Series Part 4",
    description: locale === 'zh'
      ? "基于AI编程软件实现网站的注册登录功能"
      : "Implement website internationalization and theme switching features based on AI programming software",
    thumbnail: "https://img.52wts.cn/wp-content/uploads/2025/02/bf949702780a079.png",
    category: "AI Programming",
    duration: "20:15",
    videoUrl: "https://www.youtube.com/watch?v=eGjx2Y7mfcY"
  },
  {
    id: 5,
    title: locale === 'zh' ? "新手学习AI编程系列五" : "Beginner's Guide to AI Programming Series Part 5",
    description: locale === 'zh'
      ? "基于AI编程软件实现网站的支付功能"
      : "Implement payment features in your website using AI programming software",
    thumbnail: "https://img.52wts.cn/wp-content/uploads/2025/02/9fa53cbb9dee336.png",
    category: "AI Programming",
    duration: "25:30",
    videoUrl: "https://www.youtube.com/watch?v=avSEUxJBT4s"
  }
];

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useI18n();
  const videos = getLocalizedVideos(locale);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* 主要内容 */}
        <div className="relative container mx-auto px-4 py-12 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* 装饰元素 */}
            <div className="mb-4 md:mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-primary/30 blur-md" />
                <div className="relative bg-background/90 text-primary px-3 py-1 md:px-4 md:py-1 rounded-full text-sm font-medium inline-block">
                  {t("brand.name")}
                </div>
              </div>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-gradient">
                {t("hero.title")}
              </span>
            </h1>

            {/* 描述文字 */}
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-2">
              {t("hero.description")}
            </p>

            {/* CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
              <Button 
                size="lg" 
                className="w-full sm:w-auto font-semibold min-w-[160px] bg-primary hover:bg-primary/90"
                onClick={async () => {
                  try {
                    const response = await fetch('/api/create-sponsor-session', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });

                    const { sessionId, error } = await response.json();

                    if (error) {
                      throw new Error(error);
                    }

                    // 重定向到 Stripe Checkout 页面
                    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
                    if (!stripe) throw new Error('Stripe 加载失败');

                    await stripe.redirectToCheckout({
                      sessionId,
                    });
                  } catch (error) {
                    console.error('创建支付会话失败:', error);
                    // 可以在这里添加错误提示
                  }
                }}
              >
                {locale === 'zh' ? '立即赞助' : 'Sponsor Now'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto font-semibold min-w-[160px]"
                onClick={() => {
                  document.getElementById('courses')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                {t("hero.browse")}
              </Button>
            </div>

            {/* 统计数据 */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 px-2">
              <div className="relative p-3 md:p-4 group hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-primary/5 rounded-lg -skew-y-2 group-hover:-skew-y-1 transition-transform" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:animate-pulse">5+</div>
                  <div className="text-xs md:text-base text-muted-foreground font-medium">
                    {t("hero.stats.courses")}
                  </div>
                </div>
              </div>
              <div className="relative p-3 md:p-4 group hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-primary/5 rounded-lg -skew-y-2 group-hover:-skew-y-1 transition-transform" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:animate-pulse">1000+</div>
                  <div className="text-xs md:text-base text-muted-foreground font-medium">
                    {t("hero.stats.students")}
                  </div>
                </div>
              </div>
              <div className="relative p-3 md:p-4 group hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-primary/5 rounded-lg -skew-y-2 group-hover:-skew-y-1 transition-transform" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:animate-pulse">20+</div>
                  <div className="text-xs md:text-base text-muted-foreground font-medium">
                    {t("hero.stats.projects")}
                  </div>
                </div>
              </div>
              <div className="relative p-3 md:p-4 group hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-primary/5 rounded-lg -skew-y-2 group-hover:-skew-y-1 transition-transform" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:animate-pulse">99%</div>
                  <div className="text-xs md:text-base text-muted-foreground font-medium">
                    {t("hero.stats.satisfaction")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div id="courses" className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {t("hero.browse")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {locale === 'zh' ? '探索我们精心制作的AI编程课程' : 'Explore our carefully curated AI programming courses'}
          </p>
        </div>
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto px-2 sm:px-4">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* 社交媒体链接 */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
            <a
              href="https://github.com/321208008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://twitter.com/zyailive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://www.52wts.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>

          {/* 版权信息 */}
          <div className="text-center text-xs md:text-sm text-muted-foreground">
            {t("footer.copyright").replace("2024", new Date().getFullYear().toString())}
          </div>
        </div>
      </footer>
    </div>
  );
}