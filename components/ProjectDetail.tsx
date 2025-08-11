import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  project: {
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
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Navigation */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            プロジェクト一覧に戻る
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <div className="mb-6">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            {project.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {project.period}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-2" />
              {project.teamSize}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Target className="w-4 h-4 mr-2" />
              {project.role}
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                デモを見る
              </a>
            </Button>
          </div>
        </div>

        {/* Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>使用技術</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>プロジェクト概要</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              主な機能
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                技術的課題
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                解決アプローチ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Screenshots */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>スクリーンショット</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <ImageWithFallback
                    src={screenshot}
                    alt={`${project.title} スクリーンショット ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                プロジェクトの成果
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                学んだこと・成長
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}