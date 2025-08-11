import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Briefcase, Calendar, ChevronDown, Target, Users, Code, Trophy } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: "exp-1",
      company: "ドボクリエイト株式会社",
      position: "プロジェクトマネージャー / フロントエンドエンジニア（学生インターン）",
      period: "大学3年次〜（半年以上）",
      description: "学内ベンチャーにて土木業界DXに挑戦。『トンネル施工管理記録アプリ』受託開発の推進とPMを担当。",
      achievements: [
        "既存コードのアーキテクチャ改善リファクタリングを主導",
        "顧客ヒアリング〜要件具体化〜プロトタイプ提案の一気通貫を実行",
        "スカウト活動で4名の採用に貢献しチーム体制を強化"
      ],
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Firebase"],
      detailedTasks: [
        "機能モジュールの責務分割・依存整理による保守性向上",
        "現場知見の収集（勉強会・現場訪問）と要件定義",
        "要件のプロトタイプ化と顧客レビューの反映",
        "スケジュール調整とタスク配分、後輩育成",
        "リリース前の品質担保（手動/軽量な自動チェック）"
      ],
      projects: [
        { name: "トンネル施工管理記録アプリ", description: "施工サイクル毎のデータ記録・自動出力（Excel等）を実装" }
      ],
      learnings: [
        "責任感を持った推進とチームでの問題解決",
        "抽象要求の具体化プロセス",
        "プロジェクト運営と人を巻き込む力"
      ]
    },
    {
      id: "exp-2",
      company: "大学プロジェクト（国際共同/研究活動）",
      position: "開発メンバー",
      period: "大学3〜4年次",
      description: "国際共同開発と研究活動でIoT・データ処理・可視化を経験。",
      achievements: [
        "国際共同のヘルスケアIoTシステムでセンサデータ処理を担当",
        "一次元輝度分布センサー向けの通信・可視化システムを構築",
        "研究用リアルタイム可視化（WebSocket）を設計"
      ],
      skills: ["C", "Python", "JavaScript", "WebSocket"],
      detailedTasks: [
        "ECG信号のFFT/自己相関分析実装（Python）",
        "UDPによる自動サーバ探索、HTTP/WS 連携設計",
        "リアルタイム配信と可視化UI実装"
      ],
      projects: [
        { name: "ヘルスケアIoT", description: "計測〜解析〜通知（LINE）の一連のパイプライン" },
        { name: "研究用可視化基盤", description: "センサー値の収集・解析・可視化の高速化" }
      ],
      learnings: [
        "国際チームでの協働",
        "医療/研究データの適切な処理",
        "リアルタイムシステム設計"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            経歴
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ベンチャー企業での成長の軌跡と主要な成果です
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {experiences.map((exp, index) => (
            <AccordionItem key={exp.id} value={exp.id} className="border-none">
              <Card className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>div>svg]:rotate-180">
                  <CardHeader className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-left">
                        <CardTitle className="text-xl text-foreground mb-2 flex items-center gap-3">
                          {exp.position}
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground sm:ml-auto">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                </AccordionTrigger>
                
                <AccordionContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Main Achievements */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        主な成果
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detailed Tasks */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        担当業務詳細
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.detailedTasks.map((task, i) => (
                          <li key={i} className="flex items-start text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        主要プロジェクト
                      </h4>
                      <div className="space-y-3">
                        {exp.projects.map((project, i) => (
                          <div key={i} className="bg-muted/50 p-4 rounded-lg">
                            <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learnings */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        習得したスキル・知見
                      </h4>
                      <ul className="space-y-2">
                        {exp.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-medium mb-3 text-foreground">使用技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}