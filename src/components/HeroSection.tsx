import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroProfile from "@/assets/hero-profile.jpg";

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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-3">
                Sukanta Biswas
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-6">
                Site Reliability Engineer (SRE)
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
                Site Reliability Engineer with hands-on experience in AWS Cloud Infrastructure and on-premises server environments, working with Docker, CI/CD pipelines, monitoring, and Disaster Recovery. Skilled in deploying and maintaining reliable cloud infrastructure using AWS EC2, VPC, IAM, S3, RDS, and CloudWatch, along with Prometheus and Grafana for monitoring and observability. Experienced in infrastructure troubleshooting, automation, system reliability, and production support.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12">
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

            {/* Right Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary-variant/30 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-elegant">
                    <img 
                      src={heroProfile} 
                      alt="Sukanta Biswas - System Administrator"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16 animate-scale-in">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-white" />
            <p className="text-white/90 text-sm">+91 7031614002</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-white" />
            <p className="text-white/90 text-sm">sukantabiswas27@outlook.com</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-white" />
            <p className="text-white/90 text-sm">Kolkata, 700074</p>
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
