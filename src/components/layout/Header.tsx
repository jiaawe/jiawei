import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { aboutData } from "@/data/about";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
          {aboutData.name}
        </h1>
        
        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center space-x-4">
          <a href="#about"><Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">About</Button></a>
          <a href="#blog"><Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">Blog</Button></a>
          <a href="#experience"><Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">Experience</Button></a>
          <a href="#contact"><Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">Contact</Button></a>
          <ThemeToggle />
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 sm:hidden">
          <ThemeToggle />
          <Button size="sm" variant="ghost" onClick={toggleMenu} aria-label="Toggle menu" className="hover:bg-primary/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </>
              ) : (
                <>
                  <path d="M4 12h16"></path>
                  <path d="M4 6h16"></path>
                  <path d="M4 18h16"></path>
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden py-4 px-4 mt-4 bg-card/90 backdrop-blur-md rounded-lg shadow-lg border border-primary/10">
          <nav className="flex flex-col space-y-2">
            <a href="#about" onClick={toggleMenu}><Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/10 hover:text-primary">About</Button></a>
            <a href="#blog" onClick={toggleMenu}><Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/10 hover:text-primary">Blog</Button></a>
            <a href="#experience" onClick={toggleMenu}><Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/10 hover:text-primary">Experience</Button></a>
            <a href="#contact" onClick={toggleMenu}><Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/10 hover:text-primary">Contact</Button></a>
          </nav>
        </div>
      )}
    </header>
  );
}