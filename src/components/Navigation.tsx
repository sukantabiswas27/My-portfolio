import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ];

  const freelanceCategories = [
    { label: "Cloud Computing", href: "/blog/cloud-computing" },
    { label: "Networking", href: "/blog/networking" },
    { label: "Backup", href: "/blog/backup" },
    { label: "AI", href: "/blog/ai" },
    { label: "VM", href: "/blog/vm" },
    { label: "On-Premise Server Management", href: "/blog/on-premise-server" },
  ];

  const services = [
    { label: "Web App Development", href: "/blog/web-app-development" },
    { label: "Mobile App Development", href: "/blog/mobile-app-development" },
    { label: "E-commerce Development", href: "/blog/ecommerce-development" },
    { label: "Domain and Hosting", href: "/blog/domain-hosting" },
    { label: "Email Marketing", href: "/blog/email-marketing" },
    { label: "Google and Meta Ads", href: "/blog/google-meta-ads" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary-glow transition-colors duration-200"
          >
            Sukanta Biswas
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Freelance Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium outline-none">
                Freelance
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border shadow-elegant">
                <DropdownMenuLabel className="text-primary font-semibold">Freelance Categories</DropdownMenuLabel>
                {freelanceCategories.map((category) => (
                  <DropdownMenuItem key={category.href} asChild>
                    <a
                      href={category.href}
                      className="cursor-pointer hover:bg-muted focus:bg-muted transition-colors"
                    >
                      {category.label}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-primary font-semibold">Services</DropdownMenuLabel>
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <a
                      href={service.href}
                      className="cursor-pointer hover:bg-muted focus:bg-muted transition-colors"
                    >
                      {service.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("certifications")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Certifications
            </button>
            
            <Button variant="default" size="sm" asChild>
              <a href="/Sukanta Professional Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Freelance Section */}
              <div className="border-t border-border pt-4">
                <div className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">
                  Freelance Categories
                </div>
                {freelanceCategories.map((category) => (
                  <a
                    key={category.href}
                    href={category.href}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 py-1 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.label}
                  </a>
                ))}
                
                <div className="text-primary font-semibold mb-2 mt-4 text-sm uppercase tracking-wide">
                  Services
                </div>
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 py-1 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </a>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("certifications")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Certifications
              </button>
              
              <Button variant="default" size="sm" className="w-full" asChild>
                <a href="/Sukanta Professional Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;