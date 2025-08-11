import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "ECプラットフォーム",
      description: "ReactとNode.jsを活用したフルスタック電子商取引プラットフォーム。リアルタイム決済システムと管理者ダッシュボードを構築いたしました。",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: "ai-chatbot",
      title: "AIチャットボットサービス",
      description: "OpenAI APIを活用したカスタマーサービス用チャットボット。自然言語処理により90%以上のお問い合わせを自動で解決いたします。",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      technologies: ["Python", "FastAPI", "OpenAI", "React"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: "collaboration-tool",
      title: "リアルタイム協業ツール",
      description: "WebSocketを利用したリアルタイム文書編集・協業プラットフォーム。複数ユーザーの同時編集とバージョン管理機能を提供いたします。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      technologies: ["Next.js", "WebSocket", "MongoDB", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            プロジェクト
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            革新的なアイデアを現実に実装したプロジェクトです
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border group cursor-pointer"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      コード
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      デモ
                    </a>
                  </Button>
                </div>

                <div className="mt-4 text-right">
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    詳細を見る →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}