import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WebAppDevelopment = () => {
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
              Web App Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Custom web application development using modern technologies for scalable and responsive solutions.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              Web application development services content will be available here soon. 
              We build robust, scalable web applications using the latest technologies.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Full-stack web development</li>
                <li>Progressive Web Apps (PWAs)</li>
                <li>API development and integration</li>
                <li>Database design and optimization</li>
                <li>Performance optimization and SEO</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;