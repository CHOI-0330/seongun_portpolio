import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SelfPR() {
  return (
    <section id="selfpr" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">自己PR</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-6 mb-12">
          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">【1】困難な状況でも諦めずに目標を達成する粘り強さ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                高校3年の冬、ひらがなも分からない状態から日本語学習を開始しました。高校卒業後は平日は学業、週末はアルバイトで学費・生活費を賄いながら学習を継続。1年の準備では国立大学合格に至らず兵役に就きましたが、緊張感のある環境の中でも勤務後の時間を活用して日本語と理系科目の学習を継続し、除隊後の留学試験で現大学への合格を勝ち取りました。
              </p>
              <p>
                新しい環境でも主体的に学び続け、粘り強く目標を達成する力を実践で培ってきました。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">【2】自治体や企業を巻き込む力</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                大学2年時、市内の「ときわ公園にぎわい創出事業」に5名チームで参画し、リーダーとして企画〜運営を5ヶ月で推進。宝探しとQRコードを組み合わせた企画が採択され、自治体支援の予算30万円で運営・広報を実施しました。
              </p>
              <p>
                地域企業への協賛募集（30社以上に依頼）、教育委員会の後援獲得、小中学校へのポスター配布などの連携により、当日は200名超が参加。安全と円滑な運営を最優先し、無事故で完遂しました。ユーザー目線の改善点も多く得られ、次に繋がる学びとなりました。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">【3】短期間で成果を出す実行力とリーダーシップ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                大学3年の夏、Web開発未経験から学内ベンチャーに参画。3ヶ月の集中研修でTypeScript/React/Tailwind CSS/Next.jsを習得し、新規事業の機能追加を担当できるまでに成長。学生団体の運営経験を活かして入社半年で受託開発部門のプロジェクトリーダーに抜擢され、要望の具体化、リソース配分、タスク最適化でプロジェクトを推進しました。
              </p>
              <p>
                さらに、会社の影響力強化のため自らビジネスコンテスト参加を提案し、資料作成とプレゼンを主導して最優秀賞を受賞。企画〜実行〜成果獲得までを一気通貫でリードしました。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-foreground">志向性</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-2">興味のある事業領域</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Web系事業会社</li>
                  <li>SIer・ソフト開発・システム運用</li>
                  <li>シンクタンク</li>
                  <li>コンサルティングファーム</li>
                  <li>金融（銀行・証券・保険・カード・リース・FinTech・仮想通貨）</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">興味のある職種</p>
                <ul className="space-y-1">
                  <li>1位：システム/ITコンサルタント</li>
                  <li>2位：事業開発</li>
                  <li>3位：フロントエンドエンジニア</li>
                  <li>その他：SE / 戦略・経営コンサルタント / 企画</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>勤務地：こだわらない</div>
                <div>企業規模：こだわらない</div>
                <div>企業を選ぶ軸：成長できる環境</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-foreground">プログラミング経験</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>趣味での開発経験 / ローカルおよびVM環境構築</li>
                <li>インターン・アルバイトでの実務開発、半年以上の長期経験</li>
                <li>勉強会・イベント・ハッカソン参加</li>
                <li>Webサービス・アプリの公開経験</li>
                <li>ゲームを制作したことがある</li>
                <li>GitHub 利用</li>
                <li>学校の授業でのプログラミング経験</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-foreground">スキル詳細</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">TypeScript（インターン）</p>
                <p>
                  React ベースの Next.js と Tailwind CSS、Firebase を用い、トンネル施工管理記録アプリの機能実装（記録・計算・グラフ生成・Excel出力）を担当。
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">C（授業/研究）</p>
                <p>
                  国際共同開発でヘルスケアIoTに携わり、ECGセンサーのデータ取得とPythonでの解析、LINE通知まで実装。研究ではUDP自動探索・HTTP連携など計測基盤を構築。
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">JavaScript（研究）</p>
                <p>
                  WebSocket によるリアルタイム可視化システムを構築。センサー値をフロントに即時配信し、ブラウザ上で監視・分析を可能に。
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Python（授業/研究）</p>
                <p>
                  TensorFlow による顧客離反予測モデルの作成。ヘルスケアIoTではFFT・自己相関で特徴抽出し、通知システムと連携。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-foreground">活動・語学・リンク</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <div>活動経験：留学経験あり / ビジネスコンテスト参加経験あり</div>
              <div>英語経験：TOEIC 500点〜695点</div>
              <div className="pt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    GitHub：
                    <a className="text-primary underline" href="https://github.com/CHOI-0330" target="_blank" rel="noopener noreferrer">
                      https://github.com/CHOI-0330
                    </a>
                  </li>
                  <li>
                    発表資料（1）：
                    <a className="text-primary underline" href="https://www.canva.com/design/DAGuyCWg7P4/XmDmRaSo0zCu4s7NV_AEtg/view?utm_content=DAGuyCWg7P4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h28c0efef8c" target="_blank" rel="noopener noreferrer">
                      Canva リンク
                    </a>
                  </li>
                  <li>
                    発表資料（2）：
                    <a className="text-primary underline" href="https://www.canva.com/design/DAGuyGrDy2c/wt8gXK6HE7ML7uSCSBSN1w/view?utm_content=DAGuyGrDy2c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8811aa1556" target="_blank" rel="noopener noreferrer">
                      Canva リンク
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
