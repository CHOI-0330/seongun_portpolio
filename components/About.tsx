import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Lightbulb, Target, Users } from "lucide-react";

export function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", 
    "AWS", "Docker", "GraphQL", "PostgreSQL", "MongoDB"
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "イノベーション追求",
      description: "新しい技術と方法論を積極的に探求し、起業家精神で問題を解決いたします。"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "技術力",
      description: "最新の技術スタックを活用して、スケーラブルで効率的なソリューションを構築いたします。"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "チームワーク重視",
      description: "チームとの円滑なコミュニケーションと協業を通じて、より良い成果物を作り上げます。"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "目標志向",
      description: "明確な目標設定と体系的なアプローチで、プロジェクトを成功に導きます。"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            自己紹介
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ベンチャー企業で5年間、様々なプロジェクトを経験しながら成長してまいりました。
            急速に変化する環境での適応力と問題解決能力を身につけ、
            スタートアップのチャレンジ精神で新しい技術への情熱を持っています。
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-background border-border">
              <CardContent className="p-0">
                <div className="mb-4 text-primary flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-medium mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-xl font-medium mb-8 text-foreground">
            技術スタック
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}