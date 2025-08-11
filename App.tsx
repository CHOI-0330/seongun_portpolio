import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { getProjectById } from "./data/projectsData";

type PageType = 'home' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

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
            <Hero />
            <About />
            <Experience />
            <Projects onProjectClick={handleProjectClick} />
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