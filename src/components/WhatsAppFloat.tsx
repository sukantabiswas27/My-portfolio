import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="floating"
        size="icon"
        className="w-14 h-14 shadow-lg hover:shadow-xl"
        asChild
      >
        <a
          href="https://wa.me/917031614002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;