import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Sukanta Biswas
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-6">
              System Administrator
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              System Administrator with 2+ years of experience in Linux server management, 
              LAMP stack deployment, cloud platforms, and IT infrastructure support. 
              Skilled in troubleshooting, DevOps, Docker, and automation.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Phone className="w-6 h-6 text-white mb-2 mx-auto" />
              <p className="text-white/90 text-sm">+91 7031614002</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Mail className="w-6 h-6 text-white mb-2 mx-auto" />
              <p className="text-white/90 text-sm">sukantabiswas27@outlook.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <MapPin className="w-6 h-6 text-white mb-2 mx-auto" />
              <p className="text-white/90 text-sm">Kolkata, 700074</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="/Sukanta Professional Resume.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            <Button 
              variant="professional" 
              size="lg"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;