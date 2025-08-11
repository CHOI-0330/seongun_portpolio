import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-border shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519651459912-3c00c1a9f1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzU0ODkxNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="プロフィール写真"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
            はじめまして、<span className="text-primary">田中開発太郎</span>と申します
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            革新的なアイデアを現実に変えるフルスタックエンジニアです。
            ベンチャー企業のチャレンジ精神で新しい技術とソリューションを探求し、
            ユーザーエクスペリエンスを最優先に考えています。
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
            <Mail className="w-4 h-4 mr-2" />
            お問い合わせ
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Github className="w-4 h-4 mr-2" />
            GitHub を見る
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
}