import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Calendar, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive understanding of AWS cloud services, infrastructure, and best practices.",
      skills: ["AWS EC2", "S3", "VPC", "IAM", "Cloud Security"],
      verified: true
    }
  ];

  const achievements = [
    {
      title: "Hackathon Participation",
      event: "Tech Innovation Challenge",
      date: "2023",
      description: "Participated in multiple hackathons focusing on system automation and cloud solutions.",
      skills: ["Problem Solving", "Team Collaboration", "Innovation", "Rapid Prototyping"]
    },
    {
      title: "System Optimization Project",
      event: "Thinksurfmedia LLP",
      date: "2023",
      description: "Led server optimization initiative resulting in 40% performance improvement.",
      skills: ["Performance Tuning", "Linux Optimization", "Monitoring", "Documentation"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and notable achievements in system administration and cloud technologies.
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                      <div className="flex items-center mb-2">
                        <h4 className="text-xl font-semibold text-foreground mr-3">
                          {cert.title}
                        </h4>
                        {cert.verified && (
                          <Badge variant="default" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-primary mb-2">
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{cert.date}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {cert.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">Notable Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <div className="text-primary font-medium mb-1">
                        {achievement.event}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Committed to staying updated with the latest technologies and industry best practices. 
                Currently pursuing additional certifications in advanced cloud architecture and DevOps methodologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">Kubernetes Learning Path</Badge>
                <Badge variant="outline" className="px-4 py-2">AWS Solutions Architect</Badge>
                <Badge variant="outline" className="px-4 py-2">Advanced Docker</Badge>
                <Badge variant="outline" className="px-4 py-2">Infrastructure as Code</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;