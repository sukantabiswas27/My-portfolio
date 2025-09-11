import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Server, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate System Administrator dedicated to maintaining robust IT infrastructure 
              and implementing innovative solutions.
            </p>
          </div>

          {/* Education & Background Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education & Background</h3>
              
              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Academic Foundation</h4>
                    <p className="text-muted-foreground">
                      Strong foundation in Computer Science and Information Technology, 
                      with focus on system administration and network management.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technical Expertise</h4>
                    <p className="text-muted-foreground">
                      2+ years of hands-on experience in Linux system administration, 
                      cloud platforms, and modern DevOps practices.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Summary</h3>
              
              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Infrastructure Management</h4>
                    <p className="text-muted-foreground">
                      Specialized in LAMP stack deployment, server optimization, 
                      and maintaining high-availability systems.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
                    <p className="text-muted-foreground">
                      Expert troubleshooter with a track record of resolving complex 
                      technical issues and implementing preventive measures.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="bg-gradient-subtle rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Key Strengths</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">System Administration</h4>
                <p className="text-sm text-muted-foreground">Linux & Windows server management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">DevOps</h4>
                <p className="text-sm text-muted-foreground">Docker, automation & CI/CD</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">Network security & monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">Always updating skills & knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;