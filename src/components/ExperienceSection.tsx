import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey in system administration and IT infrastructure management.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {/* Thinksurfmedia LLP */}
              <div className="relative flex flex-col md:flex-row items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>
                
                <div className="w-full md:w-1/2 md:pr-8 pl-16 md:pl-0">
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 md:mr-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          System Administrator
                        </h3>
                        <div className="flex items-center text-primary mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">Thinksurfmedia LLP</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>2024 - Present</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      Leading system administration initiatives, managing Linux servers, 
                      implementing LAMP stack solutions, and ensuring optimal system performance.
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-medium text-foreground">Key Responsibilities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Linux server management and optimization</li>
                        <li>• LAMP stack deployment and configuration</li>
                        <li>• System monitoring and performance tuning</li>
                        <li>• Backup and disaster recovery planning</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Linux</Badge>
                      <Badge variant="secondary">LAMP Stack</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Monitoring</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Infodrive India Pvt Ltd */}
              <div className="relative flex flex-col md:flex-row-reverse items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>
                
                <div className="w-full md:w-1/2 md:pl-8 pl-16 md:pr-0">
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 md:ml-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          Junior System Administrator
                        </h3>
                        <div className="flex items-center text-primary mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">Infodrive India Pvt Ltd</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>2021 - 2022</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Kolkata, India</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      Started career in system administration, focusing on IT infrastructure support, 
                      troubleshooting, and learning cloud platform technologies.
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-medium text-foreground">Key Responsibilities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• IT infrastructure support and maintenance</li>
                        <li>• System troubleshooting and issue resolution</li>
                        <li>• Cloud platform assistance and learning</li>
                        <li>• Documentation and process improvement</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">IT Support</Badge>
                      <Badge variant="secondary">Troubleshooting</Badge>
                      <Badge variant="secondary">Cloud Platforms</Badge>
                      <Badge variant="secondary">Documentation</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;