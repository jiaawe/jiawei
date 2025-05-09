import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticleList() {
  // In a real application, you'd use React Router's useNavigate
  const navigateToAllArticles = () => {
    // For demonstration purposes, we'll create a temporary workaround
    // that opens the full article list in the same page
    const articlesSection = document.getElementById('all-articles');
    
    if (articlesSection) {
      // If the section already exists, just scroll to it
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Otherwise, simulate navigation to a new page by showing all articles
      // This is a simplified approach without actual routing
      
      // Create a new div for all articles
      const allArticlesDiv = document.createElement('div');
      allArticlesDiv.id = 'all-articles';
      allArticlesDiv.className = 'py-8';
      
      // Add content to the div (this would normally be done through React routing)
      allArticlesDiv.innerHTML = `
        <h2 class="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
          All Articles
        </h2>
        <div id="articles-container" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        </div>
        <button id="back-button" class="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground px-4 py-2">
          Back to Recent Articles
        </button>
      `;
      
      // Append the new section after the blog section
      const blogSection = document.getElementById('blog');
      if (blogSection && blogSection.parentNode) {
        blogSection.parentNode.insertBefore(allArticlesDiv, blogSection.nextSibling);
        
        // Now add event listener to the back button
        const backButton = document.getElementById('back-button');
        if (backButton) {
          backButton.addEventListener('click', () => {
            // Remove the all articles section when clicking back
            const articlesSection = document.getElementById('all-articles');
            if (articlesSection && articlesSection.parentNode) {
              articlesSection.parentNode.removeChild(articlesSection);
            }
            // Scroll back to the blog section
            blogSection.scrollIntoView({ behavior: 'smooth' });
          });
        }
        
        // Scroll to the new section
        allArticlesDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Render all article cards programmatically
        // In a real app, you'd use React components
        const container = document.getElementById('articles-container');
        if (container) {
          // Clone the DOM structure for each article
          blogPosts.forEach(post => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            // This is a simplified approach - in a real app, use React Router and proper component rendering
            articleCard.innerHTML = `
              <div class="h-full flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/40 cursor-pointer overflow-hidden bg-card text-card-foreground rounded-xl border py-6 shadow-sm">
                <div class="h-2 bg-gradient-to-r from-primary via-primary/90 to-accent transform origin-left transition-all duration-300 group-hover:scale-105"></div>
                <div class="pb-4 px-6">
                  <div class="flex justify-between items-start">
                    <div class="text-xl group-hover:text-primary transition-colors font-semibold">
                      ${post.title}
                    </div>
                  </div>
                  <div class="text-muted-foreground text-sm">${post.date}</div>
                </div>
                <div class="py-0 flex-grow px-6">
                  <p>${post.excerpt}</p>
                </div>
                <div class="pt-4 flex items-center px-6 flex-wrap gap-2">
                  ${post.tags.map(tag => `
                    <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-transparent bg-secondary text-secondary-foreground mr-1 backdrop-blur-sm group-hover:bg-secondary/90 transition-colors">
                      ${tag}
                    </span>
                  `).join('')}
                </div>
              </div>
            `;
            container.appendChild(articleCard);
          });
        }
      }
    }
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