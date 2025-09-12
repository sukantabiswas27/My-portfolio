import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Networking = () => {
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
              Networking Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade networking infrastructure design, implementation, and maintenance.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive networking solutions content will be available here soon. 
              We provide end-to-end network infrastructure services.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Network design and architecture</li>
                <li>Router and switch configuration</li>
                <li>VPN setup and management</li>
                <li>Network security implementation</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Networking;