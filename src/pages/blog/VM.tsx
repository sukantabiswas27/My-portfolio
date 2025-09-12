import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VM = () => {
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
              Virtual Machine Management
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional virtualization solutions for optimized resource utilization and scalable infrastructure.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              Virtual machine management services content will be available here soon. 
              We specialize in VMware, Hyper-V, and KVM virtualization platforms.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>VM deployment and configuration</li>
                <li>Resource allocation optimization</li>
                <li>Virtual network setup</li>
                <li>VM migration and consolidation</li>
                <li>Performance monitoring and tuning</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VM;