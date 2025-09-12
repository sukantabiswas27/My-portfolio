import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GoogleMetaAds = () => {
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
              Google & Meta Ads Management
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional Google Ads and Meta (Facebook/Instagram) advertising campaigns for maximum ROI and lead generation.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              Google and Meta advertising services content will be available here soon. 
              We create and manage high-performing ad campaigns across Google and Meta platforms.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google Ads campaign setup and management</li>
                <li>Facebook and Instagram advertising</li>
                <li>Keyword research and optimization</li>
                <li>Ad creative design and testing</li>
                <li>Performance tracking and reporting</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GoogleMetaAds;