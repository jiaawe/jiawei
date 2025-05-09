import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary via-primary/90 to-accent transform origin-left transition-all duration-300 group-hover:scale-105"></div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="py-0 flex-grow">
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="mr-1 backdrop-blur-sm group-hover:bg-secondary/90 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 gap-2">
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            GitHub
          </Button>
        )}
        
        {project.demoUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="m10 14 11-11"></path>
            </svg>
            Live Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}