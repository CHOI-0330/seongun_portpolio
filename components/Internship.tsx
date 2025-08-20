import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Internship() {
  return (
    <section id="intern" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">インターン・開発アルバイト経験</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="bg-background border-border overflow-hidden">
          <CardHeader>
            <CardTitle className="text-foreground">ドボクリエイト株式会社（半年以上）</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="-mt-4 -mx-4 mb-6">
              <ImageWithFallback
                src="/img/intern/main.jpg"
                alt="インターン写真"
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
            <div>
              <p className="text-foreground font-medium mb-2">学内ベンチャー企業における土木業界DXへの挑戦</p>
              <p>
                大学3年生から、学内ベンチャー企業「ドボクリエイト株式会社」で勤務。主に「トンネル施工管理記録アプリ」の受託開発を担当し、現在はプロジェクトマネージャー（PM）として推進しています。
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-medium">【1】プログラマーとしての経験（アーキテクチャ改善）</p>
              <p>
                3名チームで受託開発を担当。システム内部の依存が1ファイルに集中していたため、2ヶ月のリファクタリングを主導し、責務分割と依存整理を実施。結果として、エラー発生時の解決速度が向上し、新規メンバーのオンボーディングも容易になりました。短期間で多くのコードを読み・理解・再構成したことで、実装力を大幅に底上げできました。
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-medium">【2】PMとしての経験（抽象要求の具体化）</p>
              <p>
                顧客は土木業界が中心で、抽象的な要望が多い状況。土木コンサル出身上司へのヒアリング、トンネル勉強会への参加、現場訪問、複数プロトタイプの提示を通じて要件を具体化。顧客から「現場で直ちに使えそう」という評価を獲得しました。
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-medium">【3】巻き込み力（採用・体制強化）</p>
              <p>
                先輩の卒業や就活で人手不足となる懸念に対し、個人ネットワークを活用してスカウトを実施。4名の学生採用に繋げ、エンジニア/PM職の体制強化とプロジェクトの安定運営に貢献しました。
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground font-medium">【4】責任感（デリバリーの最優先）</p>
              <p>
                締切直前の繁忙期には徹夜対応も辞さず、全体のスケジュールを見ながら作業分担と後輩育成を両立。チームで協力し、顧客要求を最後までやり切る姿勢を貫きました。
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-foreground font-medium">リンク</p>
              <ul className="list-disc pl-5">
                <li>
                  会社HP：
                  <a className="text-primary underline" href="https://dobocreate.jp/" target="_blank" rel="noopener noreferrer">
                    https://dobocreate.jp/
                  </a>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
