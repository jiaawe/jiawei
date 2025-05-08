import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="group hover:shadow-md transition-all duration-300 hover:border-primary/30 border-l-4 border-l-primary/60 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="group-hover:text-primary transition-colors">{experience.role}</CardTitle>
            <CardDescription className="text-base mt-1">{experience.company}</CardDescription>
          </div>
          <Badge 
            variant="outline" 
            className="border-primary/20 bg-secondary/30 group-hover:bg-secondary/50 transition-colors"
          >
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p>{experience.description}</p>
      </CardContent>
    </Card>
  );
}