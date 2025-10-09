import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HDDDataRecovery = () => {
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
              HDD Data Recovery
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional data recovery services for failed or damaged hard drives.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              HDD data recovery services content will be available here soon. 
              We specialize in recovering data from damaged or failed storage devices.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Hard drive failure diagnosis</li>
                <li>Data extraction and recovery</li>
                <li>SSD and flash drive recovery</li>
                <li>RAID array recovery</li>
                <li>Emergency data recovery services</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HDDDataRecovery;
