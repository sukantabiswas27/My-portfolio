import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EcommerceDevelopment = () => {
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
              E-commerce Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete e-commerce solutions from custom online stores to marketplace integrations and payment processing.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              E-commerce development services content will be available here soon. 
              We build powerful online stores that drive sales and enhance customer experience.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Custom e-commerce website development</li>
                <li>Shopping cart and checkout optimization</li>
                <li>Payment gateway integration</li>
                <li>Inventory management systems</li>
                <li>Multi-vendor marketplace development</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDevelopment;