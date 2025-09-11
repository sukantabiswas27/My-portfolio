import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "LAMP Stack Deployment on Linux",
      description: "Automated setup of Apache, MySQL, and PHP on Ubuntu Server with Bash scripts.",
      tech: ["Linux", "Apache", "MySQL", "PHP", "Bash"],
      link: "#",
      type: "GitHub repo"
    },
    {
      title: "Dockerized Nginx Reverse Proxy",
      description: "Configured Nginx as a reverse proxy in Docker to host multiple applications securely.",
      tech: ["Docker", "Nginx", "Linux", "SSL"],
      link: "#",
      type: "GitHub repo/demo"
    },
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description: "Built a pipeline for automated testing and deployment of web apps.",
      tech: ["GitHub Actions", "Docker", "Linux", "Node.js"],
      link: "#",
      type: "GitHub repo"
    },
    {
      title: "AWS EC2 Web Server Setup",
      description: "Configured an EC2 instance with Linux, set up firewall rules, and hosted a WordPress site.",
      tech: ["AWS", "Linux", "Apache", "MySQL", "WordPress"],
      link: "#",
      type: "GitHub repo/documentation"
    },
    {
      title: "Ansible Automation for Server Configurations",
      description: "Automated Linux server configurations with Ansible playbooks.",
      tech: ["Ansible", "Linux", "YAML", "SSH"],
      link: "#",
      type: "GitHub repo"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some key projects that showcase my technical skills in system administration, 
            DevOps, and infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View {project.type}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;