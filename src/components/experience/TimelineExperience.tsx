import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TimelineExperience() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  
  // Display all or just the first 2 experiences
  const displayedExperiences = showAllExperiences 
    ? experiences 
    : experiences.slice(0, 2);

  return (
    <section id="experience" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>
      
      <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-primary/30 before:left-3">
        {displayedExperiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`relative group animate-fade-in`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[25px] h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
              <div className="h-2 w-2 rounded-full bg-primary group-hover:h-3 group-hover:w-3 transition-all duration-300"></div>
            </div>
            
            {/* Content card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 p-4 shadow-sm group-hover:shadow-md group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <Badge 
                  variant="outline" 
                  className="border-primary/20 bg-secondary/30 group-hover:bg-secondary/50 transition-colors sm:self-start self-end"
                >
                  {exp.period}
                </Badge>
              </div>
              
              {/* Bullet points */}
              <ul className="list-disc pl-5 space-y-1 mt-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-foreground/90">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {experiences.length > 2 && (
          <div className="text-center relative z-10 pt-2">
            {!showAllExperiences ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAllExperiences(true)}
                className="border-primary/30 hover:bg-primary/10"
              >
                Show More
              </Button>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => setShowAllExperiences(false)}
                className="border-primary/30 hover:bg-primary/10"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}