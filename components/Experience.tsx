import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Briefcase, Calendar, ChevronDown, Target, Users, Code, Trophy } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: "exp-1",
      company: "テックスタートアップ A株式会社",
      position: "シニアフルスタックエンジニア",
      period: "2022年3月 - 現在",
      description: "ReactとNode.js基盤のSaaSプラットフォーム開発をリードし、月間100万ユーザー規模のサービスを安定的に運営しました。",
      achievements: [
        "サービス応答速度を40%改善",
        "コードレビュー文化導入でバグを30%削減",
        "新人エンジニア3名のメンタリング"
      ],
      skills: ["React", "Next.js", "Node.js", "AWS", "Docker"],
      detailedTasks: [
        "マイクロサービスアーキテクチャの設計・実装",
        "CI/CDパイプラインの構築とDevOps環境整備",
        "パフォーマンス最適化とスケーラビリティ向上",
        "新機能開発のテクニカルリード",
        "セキュリティ監査とコンプライアンス対応"
      ],
      projects: [
        {
          name: "ユーザー管理システムリニューアル",
          description: "既存システムを完全に刷新し、UX向上とパフォーマンス改善を実現"
        },
        {
          name: "リアルタイム通知システム",
          description: "WebSocketを活用したリアルタイム通知機能の設計・開発"
        }
      ],
      learnings: [
        "大規模サービスの運用ノウハウ",
        "チームリーダーシップとメンタリングスキル",
        "ビジネス要件の技術的な実装方法"
      ]
    },
    {
      id: "exp-2",
      company: "ITソリューション B株式会社",
      position: "フルスタックエンジニア",
      period: "2020年8月 - 2022年2月",
      description: "B2Bソリューション開発とレガシーシステムの現代化プロジェクトを担当しました。様々な業界のクライアントと協業いたしました。",
      achievements: [
        "レガシーシステム現代化プロジェクト完了",
        "API性能を60%向上",
        "顧客満足度95%達成"
      ],
      skills: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
      detailedTasks: [
        "レガシーシステムの現代技術への移行",
        "RESTful API設計・開発",
        "データベース最適化とクエリチューニング",
        "顧客要件のヒアリングと技術提案",
        "システム運用保守とトラブルシューティング"
      ],
      projects: [
        {
          name: "製造業向け在庫管理システム",
          description: "リアルタイム在庫追跡と予測分析機能を持つWebアプリケーション"
        },
        {
          name: "金融機関向けレポーティングツール",
          description: "複雑なデータ処理とビジュアライゼーション機能を実装"
        }
      ],
      learnings: [
        "多様な業界のビジネスプロセス理解",
        "レガシーシステム移行のベストプラクティス",
        "顧客とのコミュニケーションスキル"
      ]
    },
    {
      id: "exp-3",
      company: "スタートアップ C株式会社",
      position: "ジュニアエンジニア",
      period: "2019年3月 - 2020年7月",
      description: "初期スタートアップでフロントエンドからバックエンドまで様々な技術を経験し、急速に成長いたしました。",
      achievements: [
        "MVP開発を3ヶ月で完了",
        "ユーザーフィードバック基盤の機能改善",
        "チーム開発プロセス標準化"
      ],
      skills: ["React", "Express.js", "MongoDB", "Jest"],
      detailedTasks: [
        "MVP（Minimum Viable Product）の設計・開発",
        "ユーザーインターフェース設計とフロントエンド実装",
        "バックエンドAPI開発とデータベース設計",
        "テスト駆動開発（TDD）の実践",
        "ユーザーフィードバックの分析と機能改善"
      ],
      projects: [
        {
          name: "SNS型学習プラットフォーム",
          description: "ユーザー間で学習内容を共有できるWebアプリケーション"
        },
        {
          name: "モバイルファーストECサイト",
          description: "レスポンシブデザインに特化したオンラインショップ"
        }
      ],
      learnings: [
        "スタートアップ環境での迅速な開発手法",
        "ユーザー中心設計の重要性",
        "アジャイル開発とスクラム手法"
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