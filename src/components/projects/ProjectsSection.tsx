import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { projects, publications } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { PublicationCard } from "./PublicationCard";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');
  
  // Filter featured projects for initial display
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Projects & Publications
        </h2>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <Button 
          variant={activeTab === 'projects' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setActiveTab('projects')}
          className={activeTab !== 'projects' ? "border-primary/30 hover:bg-primary/10" : ""}
        >
          Projects
        </Button>
        <Button 
          variant={activeTab === 'publications' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setActiveTab('publications')}
          className={activeTab !== 'publications' ? "border-primary/30 hover:bg-primary/10" : ""}
        >
          Publications
        </Button>
      </div>
      
      {activeTab === 'projects' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {publications.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      )}
    </section>
  );
}