import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projectsData } from "../data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";
import type React from "react";

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const projects = projectsData;
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;
    // Auto-advance every 3 seconds; loop is handled by Embla when opts.loop=true
    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = window.setInterval(() => {
        if (!isPaused) api.scrollNext();
      }, 3000);
    };
    const stop = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    start();
    return () => stop();
  }, [api, isPaused]);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
            プロジェクト
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            革新的なアイデアを現実に実装したプロジェクトです
          </p>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            className="px-4"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="mx-auto w-full max-w-[min(90vw,1100px)]">
                    <Card
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border group cursor-pointer"
                      onClick={() => onProjectClick(project.id)}
                    >
                      <AspectRatio ratio={16 / 9} className="bg-card">
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="max-h-full max-w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                              <ArrowRight className="w-4 h-4 text-foreground" />
                            </div>
                          </div>
                        </div>
                      </AspectRatio>

                      <CardHeader>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 h-10 md:h-12 overflow-hidden">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                コード
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button
                              size="sm"
                              asChild
                              onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                デモ
                              </a>
                            </Button>
                          )}
                        </div>

                        <div className="mt-4 text-right">
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            詳細を見る →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}