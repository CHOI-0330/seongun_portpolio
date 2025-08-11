import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "メール",
      value: "developer@example.com",
      href: "mailto:developer@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "電話",
      value: "+81 90-1234-5678",
      href: "tel:+819012345678"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "所在地",
      value: "東京, 日本",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn", 
      href: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            お問い合わせ
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            新しい挑戦と機会について、お気軽にご相談ください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="bg-muted/30 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">連絡先情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.title}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground mb-4">SNS</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>一緒にお仕事をさせていただきませんか</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 leading-relaxed">
                革新的なプロジェクトや興味深い機会がございましたら、お気軽にご連絡ください。
                新しい挑戦を通じて価値を創出することに、常に前向きに取り組んでおります。
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="mailto:developer@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  メールを送る
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}