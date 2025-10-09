import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FTPandNAS = () => {
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
              FTP and NAS
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure file transfer protocols and network-attached storage solutions.
            </p>
          </header>

          <section className="bg-card rounded-lg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-4">
              FTP and NAS services content will be available here soon. 
              We provide secure and efficient file storage and transfer solutions.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Services Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>FTP/SFTP server setup</li>
                <li>NAS configuration and management</li>
                <li>Secure file sharing solutions</li>
                <li>Remote access configuration</li>
                <li>Data backup and redundancy</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FTPandNAS;
