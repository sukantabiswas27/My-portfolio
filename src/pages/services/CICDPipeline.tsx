import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CICDPipeline = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              CI/CD Pipeline
            </h1>
            <p className="text-xl text-muted-foreground">
              Automated continuous integration and deployment pipelines for faster, reliable releases.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              CI/CD pipeline services content will be available here soon. 
              We help streamline your development workflow with automation.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pipeline architecture and design</li>
                <li>Automated testing integration</li>
                <li>Deployment automation</li>
                <li>Version control integration</li>
                <li>Monitoring and rollback strategies</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CICDPipeline;
