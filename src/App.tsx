import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Mock data - replace with your actual information
const aboutData = {
  name: "John Doe",
  title: "Full Stack Developer",
  bio: "Passionate developer with expertise in React, TypeScript, and Node.js. I enjoy building beautiful, responsive web applications that solve real-world problems.",
  location: "Singapore",
  email: "john.doe@example.com",
  github: "github.com/johndoe",
  linkedin: "linkedin.com/in/johndoe"
};

const blogPosts = [
  {
    id: 1,
    title: "Building a Portfolio with React and ShadCN",
    date: "May 5, 2025",
    excerpt: "Learn how to create a beautiful portfolio website using React and ShadCN UI components.",
    tags: ["React", "ShadCN", "Portfolio"]
  },
  {
    id: 2,
    title: "TypeScript Best Practices in 2025",
    date: "April 20, 2025",
    excerpt: "Discover the latest TypeScript patterns and practices that will make your code more maintainable.",
    tags: ["TypeScript", "Best Practices"]
  },
  {
    id: 3,
    title: "The Future of Web Development",
    date: "March 15, 2025",
    excerpt: "Exploring upcoming technologies and trends that will shape the future of web development.",
    tags: ["Web Dev", "Future Tech"]
  }
];

const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Led the frontend team in developing a complex SaaS platform. Implemented modern React practices and improved performance by 40%."
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Frontend Developer",
    period: "2020 - 2023",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components."
  },
  {
    id: 3,
    company: "Creative Web Agency",
    role: "Junior Developer",
    period: "2018 - 2020",
    description: "Assisted in building websites for clients across various industries. Worked with HTML, CSS, and JavaScript."
  }
];

export default function App() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  // Display all or just the first 2 experiences
  const displayedExperiences = showAllExperiences 
    ? experiences 
    : experiences.slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="pt-6 pb-4 px-4 sm:px-6 lg:px-8 bg-card border-b">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{aboutData.name}</h1>
          <nav className="hidden sm:flex space-x-4">
            <Button variant="ghost" size="sm">About</Button>
            <Button variant="ghost" size="sm">Blog</Button>
            <Button variant="ghost" size="sm">Experience</Button>
            <Button variant="ghost" size="sm">Contact</Button>
          </nav>
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" onClick={toggleTheme} className="mr-2">
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </Button>
            <Button size="sm" className="sm:hidden">Menu</Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About Me Section */}
        <section id="about" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarImage src="" alt={aboutData.name} />
              <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                {aboutData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-3 text-center sm:text-left">
              <div>
                <h2 className="text-3xl font-bold">{aboutData.name}</h2>
                <p className="text-xl text-muted-foreground">{aboutData.title}</p>
              </div>
              
              <p className="max-w-2xl">{aboutData.bio}</p>
              
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
              </div>
            </div>
          </div>
          
          <Alert className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            <AlertDescription>
              Looking for my resume? <Button variant="link" className="h-auto p-0">Download PDF</Button>
            </AlertDescription>
          </Alert>
          
          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{aboutData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a href={`mailto:${aboutData.email}`} className="hover:underline">{aboutData.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <a href={`https://${aboutData.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{aboutData.github}</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a href={`https://${aboutData.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{aboutData.linkedin}</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <Separator />
        
        {/* Activities/Blog Section */}
        <section id="blog" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Card 
                key={post.id} 
                className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] hover:border-primary/40 cursor-pointer"
              >
                <div className="h-2 bg-primary rounded-t-xl"></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </div>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="py-0 flex-grow">
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-4 flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="mr-1">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <Separator />
        
        {/* Work Experience Section */}
        <section id="experience" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-6">
            {displayedExperiences.map(exp => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {!showAllExperiences && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllExperiences(true)}
                >
                  Show More
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <footer className="py-6 border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {aboutData.name}. All rights reserved.</p>
          <p className="text-sm mt-1">Built with React, TypeScript and ShadCN UI</p>
        </div>
      </footer>
    </div>
  );
}