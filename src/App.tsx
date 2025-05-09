import { Separator } from "@/components/ui/separator";
import { About } from "@/components/about/About";
// ArticleList is temporarily deprecated but components are kept
// import { ArticleList } from "@/components/articles/ArticleList";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/contact/Contact";
import { TimelineExperience } from "@/components/experience/TimelineExperience";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f1a47b15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

      <Header />

      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About Me Section */}
        <About />
        
        <Separator className="bg-primary/10" />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        <Separator className="bg-primary/10" />
        
        {/* Work Experience Section with Timeline */}
        <TimelineExperience />
        
        <Separator className="bg-primary/10" />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}