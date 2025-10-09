import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebHosting from "./pages/services/WebHosting";
import CICDPipeline from "./pages/services/CICDPipeline";
import FTPandNAS from "./pages/services/FTPandNAS";
import NetworkingSupport from "./pages/services/NetworkingSupport";
import HDDDataRecovery from "./pages/services/HDDDataRecovery";
import InternationalCalling from "./pages/services/InternationalCalling";
import OnPremiseVirtualization from "./pages/services/OnPremiseVirtualization";
import DisasterRecovery from "./pages/services/DisasterRecovery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/web-hosting" element={<WebHosting />} />
          <Route path="/services/cicd-pipeline" element={<CICDPipeline />} />
          <Route path="/services/ftp-nas" element={<FTPandNAS />} />
          <Route path="/services/networking-support" element={<NetworkingSupport />} />
          <Route path="/services/hdd-data-recovery" element={<HDDDataRecovery />} />
          <Route path="/services/international-calling" element={<InternationalCalling />} />
          <Route path="/services/on-premise-virtualization" element={<OnPremiseVirtualization />} />
          <Route path="/services/disaster-recovery" element={<DisasterRecovery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
