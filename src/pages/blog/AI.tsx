import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AI = () => {
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
              AI & Machine Learning
            </h1>
            <p className="text-xl text-muted-foreground">
              Cutting-edge artificial intelligence and machine learning solutions for business automation and insights.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              AI and machine learning services content will be available here soon. 
              We help businesses leverage AI for competitive advantage.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>AI strategy and consulting</li>
                <li>Machine learning model development</li>
                <li>Natural language processing</li>
                <li>Computer vision solutions</li>
                <li>AI infrastructure deployment</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AI;