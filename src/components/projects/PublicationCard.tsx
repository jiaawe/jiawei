import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Publication } from "@/types";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-accent to-primary/80 transform origin-left transition-all duration-300 group-hover:scale-105"></div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {publication.title}
        </CardTitle>
        <CardDescription>
          {publication.authors.join(", ")} • {publication.year}
        </CardDescription>
        {publication.journal && (
          <CardDescription className="text-muted-foreground">
            Journal: {publication.journal}
          </CardDescription>
        )}
        {publication.conference && (
          <CardDescription className="text-muted-foreground">
            Conference: {publication.conference}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="py-0 flex-grow">
        <p className="text-sm text-foreground/80">{publication.abstract}</p>
      </CardContent>
      
      {publication.link && (
        <CardFooter className="pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => window.open(publication.link, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"></path>
              <path d="m16 2 4 4-8 8"></path>
              <path d="M15 5h5v5"></path>
            </svg>
            View Publication
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}