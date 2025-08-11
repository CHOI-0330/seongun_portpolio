import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Lightbulb, Target, Users } from "lucide-react";

export function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Tailwind CSS", "Firebase",
    "JavaScript", "Python", "C", "WebSocket", "TensorFlow"
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "粘り強さ",
      description: "困難な状況でも学びを止めず、目標達成まで主体的に取り組みます。"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "巻き込み力",
      description: "自治体や企業、チームを巻き込み、プロジェクトを推進します。"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "実行力・リーダーシップ",
      description: "未知の領域にも挑戦し、短期間で成果を出す推進力があります。"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "技術志向",
      description: "UI/UXとデータ活用を重視し、価値ある体験を設計・実装します。"
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
            山口大学 電気電子工学科（2026年卒見込み）。TypeScript / React / Next.js を中心に学び、
            企画から実装、チームを巻き込む推進まで一貫して取り組んできました。志望職種はエンジニア職・総合職、
            興味領域はシステム/ITコンサル、事業開発、フロントエンドです。
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