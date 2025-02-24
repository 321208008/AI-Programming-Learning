"use client";

import { I18nProviderClient } from "@/lib/i18n-client";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

function Header() {
  const t = useI18n();
  const router = useRouter();
  
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleSponsor = async () => {
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
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt={t("brand.name")}
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-xl font-bold hidden md:block">{t("brand.name")}</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => router.push("/")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t("nav.home")}
          </button>
          <button 
            onClick={scrollToCourses}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t("hero.browse")}
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleSponsor}
            className="bg-primary hover:bg-primary/90"
          >
            {t("hero.cta")}
          </Button>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

export function ClientLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={locale}>
        <div className="min-h-screen bg-background">
          <Header />
          <main>{children}</main>
        </div>
      </I18nProviderClient>
    </ThemeProvider>
  );
} 