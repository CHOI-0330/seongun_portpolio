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
    overview: "トンネル施工では1本あたり数十回のサイクル（掘削→計測→判定→是正→記録）を繰り返すため、毎サイクルの記録・計算・帳票作成の負荷が高い。本システムはサイクルデータの一元管理、規定式に基づく自動計算、グラフ生成、Excel互換帳票の自動出力を提供し、記録〜報告のリードタイムを短縮。要件定義は現場ヒアリングとプロトタイプ検証を反復し精度を高めた。",
    challenges: [
      "サイクル進行に伴うデータ増加（数千行規模）でもストレスなく操作できる性能",
      "現場用語・手順の解釈差異をなくすドメインモデリング",
      "Excelテンプレート互換（フォーマット/数式）とUI操作性の両立",
      "入力漏れ・矛盾値の自動検知（ヒューマンエラー低減）",
      "オフライン環境（トンネル内）での取り扱いを考慮した分散同期"
    ],
    solutions: [
      "画面/状態/出力を分離したアーキテクチャとバーチャルリストで高速化",
      "用語集/状態遷移図/作業チェックリストを整備し要件の曖昧さを排除",
      "エクスポート層の抽象化とExcelテンプレート差し替え機構",
      "入力バリデーション・依存フィールドの自動補完・必須項目ハイライト",
      "一時保存と差分マージ設計（将来のオフライン対応を見据えた）"
    ],
    features: [
      "施工サイクル管理（記録・自動計算・グラフ生成）",
      "帳票エクスポート（Excel互換テンプレート/CSV）",
      "入力品質向上（必須/整合チェック、依存入力ガイド）",
      "役割別ビュー（現場入力/監督確認/報告レビュー）",
      "検索・フィルタ・差分表示"
    ],
    results: [
      "帳票作成時間を1サイクルあたり平均30〜45分短縮（担当者ヒアリングより）",
      "障害切り分け時間を短縮（責務分離により影響範囲が明確化）",
      "新規メンバーのオンボーディング期間を約半減（画面責務の明確化/ガイド導入）"
    ],
    learnings: [
      "現場知の形式知化とドメインモデルの重要性",
      "テンプレート駆動の出力実装は後の要件変更に強い",
      "UI/UXの微差が現場生産性に直結すること（入力導線/既定値/エラー文言）"
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
    overview: "ECG（心電図）信号を取得し、ノイズ除去→特徴抽出→状態推定→家族向けLINE通知までを一貫実装。医療用途ではない前提のもと、過検知/見逃しのバランスに配慮し、ルールベース＋閾値のチューニングで初期版を構築。国際チームで要件整理・役割分担・英語での技術コミュニケーションを経験。",
    challenges: [
      "低S/N環境でのRピーク検出安定化",
      "通知条件設計（過検知/見逃しのトレードオフ）",
      "データ保護と匿名化、取り扱いポリシー整備"
    ],
    solutions: [
      "バンドパス/移動平均による前処理＋自己相関で周期性把握",
      "複合閾値（振幅/周期/変動率）とヒステリシス導入で誤通知抑制",
      "識別子のトークン化/最小限保存でプライバシー配慮"
    ],
    features: ["ECGリアルタイム解析", "状態ダッシュボード", "LINE Bot通知", "閾値チューニングUI"],
    results: ["テストデータで期待挙動を確認、家族通知のPoC成功"],
    learnings: ["シグナル処理基礎と評価観点（再現性/ロバスト性）", "国際協働の実務フロー"] ,
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
    overview: "研究機材からの計測値をUDPで受信し、HTTP経由で収集サーバに集約、WebSocketでフロントにプッシュ配信する監視基盤。サンプリング周期に追従できる軽量UIを実装し、検証サイクルを短縮。",
    challenges: ["遅延の最小化（<100ms目標）", "連続配信時のメモリ肥大とGC起因のカクつき抑制", "データ欠損時の補間表示"],
    solutions: ["差分配信とバッファリング閾値の調整", "軽量シリアライズ（JSON最小化/数値配列化）", "リングバッファで一定メモリに抑制"],
    features: ["複数系列の同時描画", "ウィンドウ/ズーム操作", "ログ蓄積・エクスポート", "欠損補間の視覚化"],
    results: ["監視UIの更新レートを目標内に安定化", "異常検知までの時間を短縮（可視化品質向上）"],
    learnings: ["リアルタイム通信と描画最適化（再レンダリング抑制/キャンバス活用）"],
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
    overview: "式場の来館〜成約〜当日運営の各タッチポイントを観察・インタビューで洗い出し、体験阻害要因とボトルネック（情報断絶・待機/手配の非効率）を特定。大学生でも実装可能な範囲で、収益性を伴う小さなDX導入シナリオを提示し、ポスター発表で評価を得た。",
    challenges: ["観察・ヒアリングのバイアス抑制（質問の中立性維持）", "提案の実現可能性と収益モデルの整合"],
    solutions: ["実査手順の標準化と複数名クロスレビュー", "段階導入（受付・案内の省力化→CRM連携）のロードマップ化"],
    features: ["As-Is/To-Be業務フロー", "導入効果試算", "収益モデル案"],
    results: ["ベストDX-PBL賞 受賞", "改善余地の大きい小規模導入ポイントを特定"],
    learnings: ["現場制約下でのMVP発想と段階導入の価値"],
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
    overview: "HMDの重さ・装着負担というUX課題に対し、機能をスマホ/周辺機器へ分散しながら、現実参加者と仮想参加者の相互体験を同期。技術検証と並行でビジネスコンテストに向けた資料・発表も主導。",
    challenges: ["GPS/IMUの誤差と屋内位置推定", "音声/位置/姿勢の統合同期", "ネットワーク品質変動時の破綻を防ぐ"],
    solutions: ["Photonでセッション同期＋圧縮/更新間引き", "GeoSpatial/ARCoreで位置補正", "Mediapipeで骨格トラッキング"],
    features: ["マルチプレイ同期", "AR重畳表示", "実空間3Dスキャン取り込み", "ライト級UIで誰でもすぐ体験"],
    results: ["Ube Startup ビジネスプラン 2023 優秀賞", "デモでの体験満足度向上（来場者フィードバック）"],
    learnings: ["技術デモを事業提案に昇華するための構成/ストーリー設計"],
    screenshots: ["https://images.unsplash.com/photo-1628253740051-3f66f32abd13"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};