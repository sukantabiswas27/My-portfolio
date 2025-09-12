import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-primary-glow" />
                  <span>+91 7031614002</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-primary-glow" />
                  <span>sukantabiswas27@outlook.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-primary-glow" />
                  <span>157, Jhilbagan, South Dumdum, Kolkata, 700074</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="block hover:text-primary-glow transition-colors duration-200"
                >
                  About Me
                </button>
                <button
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="block hover:text-primary-glow transition-colors duration-200"
                >
                  Experience
                </button>
                <button
                  onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                  className="block hover:text-primary-glow transition-colors duration-200"
                >
                  Skills
                </button>
                <button
                  onClick={() => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })}
                  className="block hover:text-primary-glow transition-colors duration-200"
                >
                  Certifications
                </button>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-sm text-background/80 leading-relaxed">
                System Administrator specializing in Linux server management, 
                cloud platforms, and IT infrastructure. Committed to delivering 
                reliable and efficient technical solutions.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://linkedin.com/in/sukantabiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary-glow transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/sukantabiswas27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary-glow transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-background/60 mb-4 md:mb-0">
              © 2025 Sukanta Biswas. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-sm text-primary-glow hover:text-background transition-colors duration-200 font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
