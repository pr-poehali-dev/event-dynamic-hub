import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventPage from "./pages/EventPage";
import AwardPage from "./pages/AwardPage";
import AboutPage from "./pages/AboutPage";
import VisitorsPage from "./pages/VisitorsPage";
import ExhibitorsPage from "./pages/ExhibitorsPage";
import MediaPage from "./pages/MediaPage";
import ContactsPage from "./pages/ContactsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moscow-autumn" element={<EventPage />} />
          <Route path="/spb" element={<EventPage />} />
          <Route path="/moscow-spring" element={<EventPage />} />
          <Route path="/ekb" element={<EventPage />} />
          <Route path="/award" element={<AwardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visitors" element={<VisitorsPage />} />
          <Route path="/exhibitors" element={<ExhibitorsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;