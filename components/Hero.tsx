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
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="プロフィール写真"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
            はじめまして、<span className="text-primary">崔 成雲</span>です
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            TypeScript / React / Next.js を中心に、データ活用とUI/UXに強みを持つエンジニア志望の学生です。
            企画から実装、チームを巻き込む推進力まで一貫して成果を出すことを目指しています。
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90" asChild>
            <a href="mailto:choi.syukatu0330@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              メールで連絡
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3" asChild>
            <a href="https://github.com/CHOI-0330" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub を見る
            </a>
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