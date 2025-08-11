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
    id: "tunnel-construction-record",
    title: "トンネル施工管理記録アプリ",
    description: "施工サイクル毎の記録・自動レポート出力を支援するWebアプリ。Excel等形式で出力可能。",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/CHOI-0330",
    demo: "",
    period: "大学3年〜（受託/継続開発）",
    teamSize: "3名（エンジニア）",
    role: "フロントエンド開発・PM",
    overview: "施工に必要な数値計算・文書作成・グラフ生成を自動化。現場要件のヒアリングからプロトタイプ、実装、品質担保まで推進。",
    challenges: [
      "サイクル毎の大容量データ管理と整合性の担保",
      "現場用語・手順の正確なドメインモデリング",
      "Excel互換の帳票出力と操作性の両立"
    ],
    solutions: [
      "責務分割と状態管理整理による保守性向上",
      "現場勉強会・現地確認を通じた要件精緻化",
      "エクスポート層の抽象化とテンプレート化"
    ],
    features: [
      "施工サイクル記録、計算、自動グラフ生成",
      "Excel等ファイル出力",
      "現場用に最適化したUI/UX"
    ],
    results: [
      "現場での初期評価で即時活用可能とのフィードバック",
      "メンテ性向上により障害時の復旧速度を改善"
    ],
    learnings: [
      "ドメイン知識の獲得と要件具体化の重要性",
      "小規模チームでの推進と育成",
      "責務分割に基づくリファクタリングの効果"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ]
  },
  {
    id: "healthcare-iot-analytics",
    title: "ヘルスケアIoT解析・通知システム",
    description: "ECG計測〜Python解析〜LINE通知まで一連のパイプラインを構築。",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    technologies: ["C", "Python", "JavaScript"],
    github: "",
    demo: "",
    period: "大学3年（国際共同開発）",
    teamSize: "多国籍チーム",
    role: "データ処理・通知システム実装",
    overview: "ECGセンサーから取得した信号を解析し、家族向けに健康状態を通知。国際チームで要件設計と実装を分担。",
    challenges: [
      "信号処理の精度と安定性",
      "通知条件の設計と過検知の抑制"
    ],
    solutions: [
      "FFT/自己相関を用いた特徴抽出",
      "通知閾値のチューニングと検証"
    ],
    features: ["ECG解析", "結果可視化", "LINE通知"],
    results: ["プロトタイプ段階での有効性確認"],
    learnings: ["国際協働と医療データの取り扱い"],
    screenshots: ["https://images.unsplash.com/photo-1605379399642-870262d3d051"]
  },
  {
    id: "sensor-visualization-realtime",
    title: "研究用リアルタイム可視化システム",
    description: "UDP自動探索/HTTP/WS 連携でセンサーデータをリアルタイム可視化。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    technologies: ["JavaScript", "WebSocket"],
    github: "",
    demo: "",
    period: "大学4年（研究活動）",
    teamSize: "個人中心",
    role: "設計・実装",
    overview: "研究データの収集・処理・可視化のパイプラインを構築し、効率を大幅に向上。",
    challenges: ["遅延の最小化", "スループット維持"],
    solutions: ["差分配信・軽量フォーマット", "非同期処理"],
    features: ["リアルタイムグラフ", "ログ蓄積"],
    results: ["研究効率の改善"],
    learnings: ["リアルタイム通信設計"],
    screenshots: ["https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"]
  },
  {
    id: "dx-pbl-wedding",
    title: "DXPBL：結婚式場DX化モデル提案",
    description: "現地調査ののち、大学横断の発表会でDX化モデルを提案しベストDX-PBL賞を受賞。",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    technologies: ["企画", "ユーザー調査", "業務分析"],
    github: "",
    demo: "https://www.canva.com/design/DAGuyOYMVDA/FLWVL21Gy0ZWp8UhOqTRjw/view?utm_content=DAGuyOYMVDA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hac9f007c08",
    period: "大学3年 夏（集中講義）",
    teamSize: "学生チーム",
    role: "企画・資料作成・発表",
    overview: "3日間の現場調査に基づき、課題特定〜解決策〜収益モデル〜実証計画を作成し、ポスター発表を実施。",
    challenges: ["調査設計のバイアス抑制", "実現可能性と収益性の両立"],
    solutions: ["対象配慮・手順統一の徹底", "大学生でも実装可能なシンプル要件"],
    features: ["現場調査", "要件整理", "ビジネスモデル設計"],
    results: ["ベストDX-PBL賞 受賞"],
    learnings: ["現場理解に基づく提案設計"],
    screenshots: ["https://images.unsplash.com/photo-1522673607200-164d1b6ce486"]
  },
  {
    id: "metaverse-hackathon",
    title: "メタバース×AR 体験拡張システム（ハッカソン）",
    description: "HMD負荷を軽減し、現実と仮想の相互交流を高める体験設計を提案・試作。",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
    technologies: ["Unity", "Photon", "GeoSpatial API", "Mediapipe", "ARCore"],
    github: "",
    demo: "https://ubenippo.co.jp/2024/03/04/3337240/",
    period: "大学3年（ハッカソン）",
    teamSize: "学生チーム",
    role: "企画・資料作成・発表推進",
    overview: "機能を周辺機器に分散し、位置/音声/姿勢同期を統合。ビジネスプランとしても発表。",
    challenges: ["位置・音声の複数同期", "体験価値と実装負荷の最適化"],
    solutions: ["Photonによるマルチ同期", "GeoSpatialで高精度位置", "Mediapipeで姿勢推定"],
    features: ["マルチプレイ同期", "AR環境構築", "3Dスキャン取り込み"],
    results: ["Ube Startup ビジネスプラン 2023 優秀賞"],
    learnings: ["プロトタイピングとビジネス観点の両立"],
    screenshots: ["https://images.unsplash.com/photo-1628253740051-3f66f32abd13"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};