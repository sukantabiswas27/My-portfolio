import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Terminal, 
  Settings,
  Network,
  Container
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linux System Administration",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Ubuntu Server", "CentOS/RHEL", "Debian", "System Monitoring", "Log Management", "Shell Scripting"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "LAMP Stack",
      icon: <Database className="w-6 h-6" />,
      skills: ["Linux", "Apache", "MySQL/MariaDB", "PHP", "Web Server Configuration", "Database Management"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "DevOps & Containers",
      icon: <Container className="w-6 h-6" />,
      skills: ["Docker", "Container Orchestration", "CI/CD Pipelines", "Automation Scripts", "Version Control (Git)"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Cloud Infrastructure", "EC2", "S3", "VPC", "Cloud Security"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Network & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["DNS Management", "Firewall Configuration", "Network Troubleshooting", "SSL/TLS", "Security Monitoring"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "System Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["System Monitoring", "Performance Tuning", "Backup Solutions", "Disaster Recovery", "Nagios", "Zabbix"],
      color: "bg-indigo-500/10 text-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical expertise in system administration, 
              cloud platforms, and modern IT infrastructure management.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="bg-gradient-subtle rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              Technical Proficiency
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-primary" />
                  Server & Infrastructure
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Linux Administration</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">LAMP Stack</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Docker</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-primary" />
                  Cloud & DevOps
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">AWS Cloud</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Automation</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monitoring</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;