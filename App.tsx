import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { getProjectById } from "./data/projectsData";
import { SelfPR } from "./components/SelfPR";
import { Internship } from "./components/Internship";

type PageType = 'home' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [introFading, setIntroFading] = useState<boolean>(false);

  useEffect(() => {
    // Show intro for ~2s, then fade out ~700ms
    const t1 = setTimeout(() => setIntroFading(true), 2000);
    const t2 = setTimeout(() => setShowIntro(false), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProjectId('');
  };

  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'home' ? (
        <>
          <Navigation />
          <main>
            {showIntro && (
              <div className={`fixed inset-0 z-[60] bg-background transition-opacity duration-700 ${introFading ? 'opacity-0' : 'opacity-100'}`}>
                {/* Intro as full-screen Hero overlay */}
                <Hero />
              </div>
            )}
            <Projects onProjectClick={handleProjectClick} />
            <Internship />
            <About />
            <SelfPR />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Navigation />
          {selectedProject && (
            <ProjectDetail 
              project={selectedProject} 
              onBack={handleBackToHome}
            />
          )}
          <Footer />
        </>
      )}
    </div>
  );
}