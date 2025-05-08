import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticlesPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            All Articles
          </h1>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.history.back()}
            className="border-primary/30 hover:bg-primary/10"
          >
            Back
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}