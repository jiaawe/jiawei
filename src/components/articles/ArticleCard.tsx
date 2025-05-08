import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/types";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Card 
      className="h-full flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 cursor-pointer overflow-hidden"
    >
      <div className="h-2 bg-gradient-to-r from-primary via-primary/90 to-accent transform origin-left transition-all duration-300 group-hover:scale-105"></div>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </div>
        <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent className="py-0 flex-grow">
        <p>{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-4 flex-wrap gap-2">
        {post.tags.map(tag => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="mr-1 backdrop-blur-sm group-hover:bg-secondary/90 transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}