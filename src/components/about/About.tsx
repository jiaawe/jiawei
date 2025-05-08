import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactDetails } from "./ContactDetails";
import { aboutData, skills } from "@/data/about";

export function About() {
  return (
    <section id="about" className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Avatar className="w-24 h-24 border-4 border-primary/60 ring-4 ring-primary/20 shadow-lg">
          <AvatarImage src="/src/assets/me.jpg" alt={aboutData.name} />
          <AvatarFallback className="text-3xl bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
            {aboutData.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-3 text-center sm:text-left">
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
      
      <Alert className="mb-4 bg-card/80 backdrop-blur-sm border-primary/30 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
        <AlertDescription>
          Looking for my resume? <Button variant="link" className="h-auto p-0 text-primary hover:text-primary/80">Download PDF</Button>
        </AlertDescription>
      </Alert>
      
      <ContactDetails />
    </section>
  );
}