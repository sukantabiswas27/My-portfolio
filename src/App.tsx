import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CloudComputing from "./pages/blog/CloudComputing";
import Networking from "./pages/blog/Networking";
import Backup from "./pages/blog/Backup";
import AI from "./pages/blog/AI";
import VM from "./pages/blog/VM";
import OnPremiseServer from "./pages/blog/OnPremiseServer";
import WebAppDevelopment from "./pages/blog/WebAppDevelopment";
import MobileAppDevelopment from "./pages/blog/MobileAppDevelopment";
import EcommerceDevelopment from "./pages/blog/EcommerceDevelopment";
import DomainHosting from "./pages/blog/DomainHosting";
import EmailMarketing from "./pages/blog/EmailMarketing";
import GoogleMetaAds from "./pages/blog/GoogleMetaAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/cloud-computing" element={<CloudComputing />} />
          <Route path="/blog/networking" element={<Networking />} />
          <Route path="/blog/backup" element={<Backup />} />
          <Route path="/blog/ai" element={<AI />} />
          <Route path="/blog/vm" element={<VM />} />
          <Route path="/blog/on-premise-server" element={<OnPremiseServer />} />
          <Route path="/blog/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/blog/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/blog/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/blog/domain-hosting" element={<DomainHosting />} />
          <Route path="/blog/email-marketing" element={<EmailMarketing />} />
          <Route path="/blog/google-meta-ads" element={<GoogleMetaAds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
