import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticleList() {
  // In a real application, you'd use React Router's useNavigate
  const navigateToAllArticles = () => {
    // For now, just scrolling to the section
    window.location.href = "#blog";
    
    // In a real application with React Router:
    // navigate('/blog');
  };

  // Show only the first 3 articles
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Recent Articles
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={navigateToAllArticles}
          className="border-primary/30 hover:bg-primary/10 text-foreground"
        >
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPosts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}