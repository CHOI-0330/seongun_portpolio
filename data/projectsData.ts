export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  period: string;
  teamSize: string;
  role: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  results: string[];
  learnings: string[];
  screenshots: string[];
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "ECプラットフォーム",
    description: "ReactとNode.jsを活用したフルスタック電子商取引プラットフォーム。リアルタイム決済システムと管理者ダッシュボードを構築いたしました。",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    period: "2023年4月 - 2023年12月 (8ヶ月)",
    teamSize: "4名 (フロントエンド2名、バックエンド2名)",
    role: "フルスタックエンジニア・テックリード",
    overview: "中小企業向けのクラウド型ECプラットフォームを開発いたしました。従来のECシステムでは対応が困難だった複雑な商品バリエーション管理や、リアルタイムな在庫連動機能を実現しました。また、店舗運営者が直感的に利用できる管理画面の設計にも注力し、初心者でも簡単にオンラインショップを開設・運営できるシステムを構築いたしました。",
    challenges: [
      "複雑な商品バリエーション（サイズ・色・オプション）の効率的な管理",
      "リアルタイムな在庫管理と複数チャネルとの同期",
      "決済処理の安全性とパフォーマンスの両立",
      "大量のトランザクション処理とデータベース最適化",
      "レスポンシブデザインとアクセシビリティの確保"
    ],
    solutions: [
      "正規化されたデータベース設計と効率的なクエリ最適化",
      "Redis を活用したリアルタイムキャッシュシステムの構築",
      "Stripe API の安全な実装とPCI DSS準拠の決済フロー",
      "PostgreSQL のパーティショニングと接続プールによる最適化",
      "PWA対応とWCAG 2.1 AAレベルのアクセシビリティ実装"
    ],
    features: [
      "商品カタログ管理（無制限の商品・バリエーション登録）",
      "リアルタイム在庫管理と複数倉庫対応",
      "多様な決済方法（クレジットカード・銀行振込・コンビニ決済）",
      "注文管理と自動メール通知システム",
      "売上分析ダッシュボード（リアルタイムレポート）",
      "SEO最適化とソーシャルメディア連携",
      "モバイルファーストのレスポンシブデザイン",
      "多言語・多通貨対応"
    ],
    results: [
      "リリース後3ヶ月で50社以上の企業が導入",
      "平均ページロード時間を2秒以下に短縮",
      "決済処理の成功率99.8%を達成",
      "モバイル経由の売上が全体の65%に向上",
      "顧客満足度調査で4.8/5.0の高評価を獲得"
    ],
    learnings: [
      "大規模システムにおけるマイクロサービス設計パターン",
      "決済システムのセキュリティ要件と実装のベストプラクティス",
      "チームリーダーシップとプロジェクト管理スキル",
      "パフォーマンス最適化とスケーラビリティの考慮事項",
      "ユーザビリティテストの重要性と実践方法"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ]
  },
  {
    id: "ai-chatbot",
    title: "AIチャットボットサービス",
    description: "OpenAI APIを活用したカスタマーサービス用チャットボット。自然言語処理により90%以上のお問い合わせを自動で解決いたします。",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    period: "2023年1月 - 2023年6月 (6ヶ月)",
    teamSize: "3名 (AI/ML 1名、バックエンド1名、フロントエンド1名)",
    role: "AI/MLエンジニア・プロダクトリード",
    overview: "企業のカスタマーサポート業務を効率化するAIチャットボットサービスを開発いたしました。OpenAI GPT-4を基盤とし、企業固有の知識ベースを学習することで、高精度な回答を提供します。また、人間のオペレーターへのスムーズな引き継ぎ機能も実装し、顧客満足度を維持しながら運営コストを大幅に削減することに成功いたしました。",
    challenges: [
      "企業固有の知識ベースへの適応と精度向上",
      "リアルタイムでの自然言語理解と適切な回答生成",
      "大量の同時接続への対応とレスポンス時間の最適化",
      "AI回答の品質管理と不適切な回答の防止",
      "人間オペレーターとの seamless な連携"
    ],
    solutions: [
      "RAG（Retrieval-Augmented Generation）アーキテクチャの実装",
      "ベクトル検索とセマンティック検索による高精度な知識検索",
      "非同期処理とキューイングシステムによるスケーラビリティ確保",
      "コンテンツフィルタリングと回答品質スコアリングシステム",
      "WebSocket を活用したリアルタイム引き継ぎ機能"
    ],
    features: [
      "多言語対応のAI会話エンジン（日本語・英語対応）",
      "企業知識ベースの自動学習・更新機能",
      "会話履歴の管理と分析ダッシュボード",
      "オペレーター引き継ぎとエスカレーション機能",
      "感情分析による顧客満足度の自動測定",
      "API連携によるCRMシステムとの統合",
      "リアルタイム会話モニタリング機能",
      "カスタマイズ可能なUI/UXテンプレート"
    ],
    results: [
      "顧客からの問い合わせ対応時間を平均75%短縮",
      "自動解決率92%を達成（目標90%を上回る）",
      "カスタマーサポート運営コストを60%削減",
      "顧客満足度スコア（CSAT）4.6/5.0を維持",
      "月間100万件以上のチャット処理に対応"
    ],
    learnings: [
      "大規模言語モデル（LLM）の実用的な活用方法",
      "プロンプトエンジニアリングの最適化技術",
      "AI倫理とバイアス軽減のための設計思想",
      "自然言語処理における多言語対応の課題と解決法",
      "AIサービスの品質保証とテスト手法"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051"
    ]
  },
  {
    id: "collaboration-tool",
    title: "リアルタイム協業ツール",
    description: "WebSocketを利用したリアルタイム文書編集・協業プラットフォーム。複数ユーザーの同時編集とバージョン管理機能を提供いたします。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    technologies: ["Next.js", "WebSocket", "MongoDB", "Docker", "Redis", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    period: "2022年8月 - 2023年2月 (7ヶ月)",
    teamSize: "5名 (フロントエンド2名、バックエンド2名、DevOps1名)",
    role: "フロントエンドリード・UXデザイナー",
    overview: "リモートワークの普及に伴い、チームでの効率的な文書作成・編集を支援するリアルタイム協業ツールを開発いたしました。Google Docsライクなリアルタイム編集機能に加え、プロジェクト管理、タスク管理、コメント機能を統合し、一つのプラットフォームでチームの協業が完結するソリューションを提供いたします。",
    challenges: [
      "複数ユーザーによる同時編集時の競合状態（Conflict Resolution）",
      "リアルタイム同期のパフォーマンスとスケーラビリティ",
      "大容量ドキュメントでの編集履歴の効率的な管理",
      "オフライン編集とオンライン復帰時の同期処理",
      "直感的で使いやすいユーザーインターフェース設計"
    ],
    solutions: [
      "Operational Transform（OT）アルゴリズムによる競合解決",
      "WebSocketクラスタリングとRedisを活用した負荷分散",
      "差分ベースの履歴管理とインクリメンタル保存",
      "オフライン対応のPWAとCRDT（Conflict-free Replicated Data Types）",
      "ユーザビリティテストを重視したイテレーティブなUI/UX設計"
    ],
    features: [
      "リアルタイム文書編集（最大50名同時編集対応）",
      "詳細なバージョン管理と変更履歴の可視化",
      "コメント・レビュー機能とメンション通知",
      "プロジェクトベースの文書管理とフォルダ構造",
      "豊富なテンプレートライブラリ（企画書・議事録等）",
      "外部ツール連携（Slack・Microsoft Teams等）",
      "オフライン編集とモバイル対応",
      "権限管理と企業向けセキュリティ機能"
    ],
    results: [
      "ベータ版リリース後、1ヶ月で1,000社以上の登録",
      "ユーザーあたりの平均セッション時間45分を達成",
      "文書作成効率が従来ツール比で40%向上",
      "チーム間のコミュニケーション時間を30%削減",
      "エンタープライズ契約率25%を達成"
    ],
    learnings: [
      "リアルタイム通信システムの設計とスケーラビリティ考慮",
      "複雑な状態管理とデータ同期のベストプラクティス",
      "UXリサーチとユーザビリティテストの実践的手法",
      "PWA開発とオフライン対応の技術的課題",
      "BtoB SaaSプロダクトの市場投入とユーザー獲得戦略"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};