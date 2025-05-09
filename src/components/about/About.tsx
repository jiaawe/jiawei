import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { aboutData, skills } from "@/data/about";
import profileImage from "../../assets/me.jpg";

export function About() {
  return (
    <section id="about" className="space-y-5">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/60 ring-4 ring-primary/20 shadow-lg self-center sm:self-start">
          <AvatarImage src={profileImage} alt={aboutData.name} />
          <AvatarFallback className="text-3xl bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
            {aboutData.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-4 text-center sm:text-left flex-1">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              {aboutData.name}
            </h2>
            <p className="text-xl text-foreground/80">{aboutData.title}</p>
          </div>
          
          <p className="max-w-2xl">{aboutData.bio}</p>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skills.map(skill => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="hover:bg-secondary/90 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}