import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList() {
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
      
      <div className="space-y-6">
        {displayedExperiences.map(exp => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
        
        {!showAllExperiences && experiences.length > 2 && (
          <div className="text-center pt-2">
            <Button 
              variant="outline" 
              onClick={() => setShowAllExperiences(true)}
              className="border-primary/30 hover:bg-primary/10"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}